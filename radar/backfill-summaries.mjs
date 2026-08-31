#!/usr/bin/env node
/**
 * One-time migration: lift the approved card copy out of the hand-built radar
 * artifact and into each tool's frontmatter as `summary:` / `pricing-note:`.
 *
 * Idempotent. Re-running skips files that already carry a summary, so it can be
 * run again after new tool entries land.
 *
 *   node radar/backfill-summaries.mjs <path-to-artifact.html>
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TOOLS_DIR = join(ROOT, 'tools');

const artifactPath = process.argv[2];
if (!artifactPath) {
  console.error('usage: node radar/backfill-summaries.mjs <artifact.html>');
  process.exit(1);
}

// Pull the TOOLS array out of the artifact. It is a JS object literal, so parse
// it with the JS engine rather than trying to coerce it into JSON.
const html = readFileSync(artifactPath, 'utf8');
const m = html.match(/const TOOLS = \[([\s\S]*?)\n\];/);
if (!m) {
  console.error('could not locate the TOOLS array in', artifactPath);
  process.exit(1);
}
const approved = new Function(`return [${m[1]}]`)();
const byName = new Map(approved.map((t) => [t.name, t]));

// Escape a value for a double-quoted YAML scalar.
const yamlQuote = (s) => `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

let patched = 0;
let skipped = 0;
const unmatched = [];

for (const file of readdirSync(TOOLS_DIR).filter((f) => f.endsWith('.md')).sort()) {
  const path = join(TOOLS_DIR, file);
  const raw = readFileSync(path, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) {
    unmatched.push(`${file} (no frontmatter)`);
    continue;
  }

  const nameLine = fm[1].match(/^name:\s*(.*)$/m);
  const name = nameLine ? nameLine[1].trim().replace(/^["']|["']$/g, '') : null;
  const tool = name && byName.get(name);

  if (!tool) {
    unmatched.push(`${file} (name ${JSON.stringify(name)} not in artifact)`);
    continue;
  }
  if (/^summary:/m.test(fm[1])) {
    skipped++;
    continue;
  }

  const additions = [`summary: ${yamlQuote(tool.desc)}`];

  // Only record a pricing-note when the artifact displayed something other than
  // the canonical `pricing` value (a bare URL, or copy trimmed for the card).
  const repoPricing = (fm[1].match(/^pricing:\s*(.*)$/m)?.[1] ?? '').trim();
  if (tool.pricing && tool.pricing !== repoPricing) {
    additions.push(`pricing-note: ${yamlQuote(tool.pricing)}`);
  }

  // Insert before `source:` — present in every entry and stable across the set.
  let block = fm[1];
  if (/^source:/m.test(block)) {
    block = block.replace(/^source:/m, `${additions.join('\n')}\nsource:`);
  } else {
    block = `${block}\n${additions.join('\n')}`;
  }

  writeFileSync(path, raw.replace(fm[1], block), 'utf8');
  patched++;
}

console.log(`patched: ${patched}`);
console.log(`skipped (already had summary): ${skipped}`);
if (unmatched.length) {
  console.log(`\nnot patched (${unmatched.length}):`);
  unmatched.forEach((u) => console.log('  ' + u));
}
