#!/usr/bin/env node
/**
 * Set a tool's ring, which is the one thing research can never do on its own.
 *
 *   node radar/promote.mjs <slug|name> <ring> "<reason>"
 *   node radar/promote.mjs wispr-flow adopt "In active use as my dictation tool."
 *
 *   --no-build   edit the entry but skip regenerating radar/index.html
 *
 * The rubric only ever assigns `assess` or `hold`, so any entry sitting in
 * `adopt` or `trial` was put there by a person. This does that edit correctly:
 * it rewrites `ring-reasoning` alongside `ring`, because the reasoning is shown
 * on the radar as "Why adopt" and a leftover one argues the opposite case.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TOOLS_DIR = join(ROOT, 'tools');
const RINGS = ['adopt', 'trial', 'assess', 'hold'];
const EXPERIENCE_RINGS = ['adopt', 'trial'];

const die = (msg) => { console.error(msg); process.exit(1); };

const argv = process.argv.slice(2).filter((a) => a !== '--no-build');
const build = !process.argv.includes('--no-build');
const [target, ring, reason] = argv;

if (!target || !ring || !reason) {
  die('usage: node radar/promote.mjs <slug|name> <ring> "<reason>" [--no-build]\n' +
      `       ring is one of: ${RINGS.join(', ')}`);
}
if (!RINGS.includes(ring)) die(`unknown ring "${ring}" — expected one of: ${RINGS.join(', ')}`);

/* ── locate the entry ───────────────────────────────────────────────────── */

const files = readdirSync(TOOLS_DIR).filter((f) => f.endsWith('.md'));
let file = files.find((f) => f === `${target}.md`);
if (!file) {
  const hits = files.filter((f) => {
    const name = readFileSync(join(TOOLS_DIR, f), 'utf8').match(/^name:\s*(.*)$/m)?.[1] ?? '';
    return name.trim().replace(/^["']|["']$/g, '').toLowerCase() === target.toLowerCase();
  });
  if (hits.length > 1) die(`"${target}" matches several entries: ${hits.join(', ')}`);
  file = hits[0];
}
if (!file) die(`no entry for "${target}" — expected tools/${target}.md, or a matching name:`);

const path = join(TOOLS_DIR, file);
const raw = readFileSync(path, 'utf8');
const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
if (!fm) die(`${file}: no frontmatter`);

const current = fm[1].match(/^ring:\s*(.*)$/m)?.[1]?.trim() ?? '';
const managed = fm[1].match(/^managed:\s*(.*)$/m)?.[1]?.trim() ?? '';

/* ── refuse a reason that argues the wrong case ─────────────────────────── */

// The reasoning is user-visible as "Why <ring>". Carrying over language that
// justified the previous ring puts a visible contradiction on the page.
const STALE = [
  /not\s+(yet\s+)?(been\s+)?(tried|used)/i,
  /cannot\s+be\s+promoted/i,
  /on\s+reputation\s+alone/i,
  /\bhas\s+not\s+been\s+used\b/i,
];

if (reason.trim().length < 15) {
  die('reason is too short — it is shown on the radar as "Why ' + ring + '", so write a real sentence');
}
if (EXPERIENCE_RINGS.includes(ring)) {
  const bad = STALE.find((re) => re.test(reason));
  if (bad) {
    die(`that reason argues against ${ring} (matched ${bad}).\n` +
        `  ${ring} means you have actually used it — say why, in your own words.`);
  }
}
for (const other of RINGS.filter((r) => r !== ring)) {
  if (new RegExp(`\\b${other}\\b`, 'i').test(reason)) {
    console.error(`warning: the reason mentions "${other}" but you are setting ring: ${ring} — check the wording`);
  }
}

/* ── apply ──────────────────────────────────────────────────────────────── */

const quoted = `"${reason.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
let block = fm[1];

block = /^ring:/m.test(block)
  ? block.replace(/^ring:.*$/m, `ring: ${ring}`)
  : `ring: ${ring}\n${block}`;

block = /^ring-reasoning:/m.test(block)
  // the existing value may wrap across continuation lines; replace all of it
  ? block.replace(/^ring-reasoning:(?:.*)((\n(?![A-Za-z0-9_-]+:).*)*)/m, `ring-reasoning: ${quoted}`)
  : block.replace(/^ring:.*$/m, `ring: ${ring}\nring-reasoning: ${quoted}`);

writeFileSync(path, raw.replace(fm[1], block), 'utf8');

console.log(`${file}: ring ${current || '(none)'} → ${ring}`);
console.log(`  why: ${reason}`);
if (managed === 'manual') {
  console.log('  note: managed: manual — the refresher will not update this entry at all,');
  console.log('        not even pricing. Use managed: auto to keep facts current while');
  console.log('        your ring and reasoning are preserved.');
} else if (EXPERIENCE_RINGS.includes(ring)) {
  console.log('  the refresher will now preserve this ring, its reasoning, and your');
  console.log("  \"When I'd reach for it\" / \"When I wouldn't\" sections.");
}

if (build) {
  console.log('');
  execFileSync(process.execPath, [join(ROOT, 'radar', 'build.mjs')], { stdio: 'inherit' });
}
