#!/usr/bin/env node
/**
 * Build radar/index.html from tools/*.md + taxonomy.md + radar/template.html.
 *
 * Deterministic: identical inputs produce a byte-identical page. All visual
 * decisions live in the template; all editorial copy lives in the entries. This
 * script only moves data between them.
 *
 *   node radar/build.mjs [--check]
 *
 *   --check  build and compare against the existing radar/index.html without
 *            writing. Exit 1 if they differ. For CI.
 *
 * The build never fails on questionable data — a dropped tool is worse than an
 * odd-looking one. Problems are reported on stderr and the tool still renders.
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TOOLS_DIR = join(ROOT, 'tools');
const TEMPLATE = join(ROOT, 'radar', 'template.html');
const OUT = join(ROOT, 'radar', 'index.html');

const RINGS = ['adopt', 'trial', 'assess', 'hold'];
const warnings = [];
const warn = (m) => warnings.push(m);

/* ── frontmatter ────────────────────────────────────────────────────────── */

// Minimal YAML reader covering the shapes these entries actually use: scalars
// (bare, single- or double-quoted), inline lists `[a, b]`, block lists, and
// values wrapped across continuation lines.
function parseFrontmatter(raw, file) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  const [, block, body] = m;

  const out = {};
  const lines = block.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const kv = line.match(/^([A-Za-z0-9_-]+):(.*)$/);
    if (!kv) { i++; continue; }

    const key = kv[1];
    let rest = kv[2].trim();
    i++;

    if (rest === '') {
      // Block list, or a key with nothing after it.
      const items = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(unquote(lines[i].replace(/^\s*-\s+/, '').trim()));
        i++;
      }
      out[key] = items.length ? items : '';
      continue;
    }

    if (rest.startsWith('[')) {
      // Inline list, possibly spanning lines until the closing bracket.
      while (!rest.includes(']') && i < lines.length) { rest += ' ' + lines[i].trim(); i++; }
      out[key] = rest.replace(/^\[|\]$/g, '').split(',').map((x) => unquote(x.trim())).filter(Boolean);
      continue;
    }

    // Scalar. Absorb continuation lines (indented, or simply not a new key).
    while (i < lines.length && lines[i].trim() !== '' && !/^([A-Za-z0-9_-]+):/.test(lines[i]) && !/^\s*-\s+/.test(lines[i])) {
      rest += ' ' + lines[i].trim();
      i++;
    }
    out[key] = unquote(rest);
  }
  return { data: out, body };
}

function unquote(s) {
  if (s.length > 1 && ((s[0] === '"' && s.endsWith('"')) || (s[0] === "'" && s.endsWith("'")))) {
    return s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return s;
}

/* ── taxonomy ───────────────────────────────────────────────────────────── */

function readTaxonomy() {
  const src = readFileSync(join(ROOT, 'taxonomy.md'), 'utf8');
  const areas = [];
  for (const line of src.split('\n')) {
    const m = line.match(/^-\s+`([a-z0-9-]+)`\s*:/);
    if (m) areas.push(m[1]);
  }
  if (!areas.length) throw new Error('taxonomy.md: no areas parsed');
  return areas;
}

// Sector order and short labels are a presentation choice — related areas sit
// next to each other on the dial — so they live in sectors.json rather than
// following taxonomy.md's order. The two are reconciled here: a new area still
// renders (appended, labelled from its slug) but warns until a human places it.
function readSectors(taxonomy) {
  const cfg = JSON.parse(readFileSync(join(ROOT, 'radar', 'sectors.json'), 'utf8'));
  const known = new Set(taxonomy);
  const areas = [];
  const labels = {};

  for (const [area, label] of Object.entries(cfg)) {
    if (!known.has(area)) {
      warn(`sectors.json: "${area}" is no longer in taxonomy.md, dropped from the dial`);
      continue;
    }
    areas.push(area);
    labels[area] = label;
  }
  for (const area of taxonomy) {
    if (labels[area]) continue;
    warn(`taxonomy.md: "${area}" is missing from radar/sectors.json — appended to the dial with a generated label; add it to sectors.json to choose its position and short name`);
    areas.push(area);
    labels[area] = area.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  }
  return { areas, labels };
}

/* ── entries ────────────────────────────────────────────────────────────── */

// Fallback when an entry predates the `summary:` field: use its "What it is"
// sentence, trimmed the way the card copy is written.
function deriveSummary(body) {
  const m = body.match(/^\*\*What it is:\*\*\s*([\s\S]*?)(?=\n\n)/m);
  if (!m) return '';
  const text = m[1].replace(/\s+/g, ' ').trim().replace(/^(An?|The)\s+/, '');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function readTools(areas) {
  const areaSet = new Set(areas);
  const seen = new Map();
  const tools = [];

  for (const file of readdirSync(TOOLS_DIR).filter((f) => f.endsWith('.md')).sort()) {
    const parsed = parseFrontmatter(readFileSync(join(TOOLS_DIR, file), 'utf8'), file);
    if (!parsed) { warn(`${file}: no frontmatter, skipped`); continue; }
    const { data, body } = parsed;

    const name = (data.name || '').trim();
    if (!name) { warn(`${file}: no name, skipped`); continue; }
    if (seen.has(name)) { warn(`${file}: duplicate name "${name}" (also ${seen.get(name)})`); }
    seen.set(name, file);

    let ring = (data.ring || '').trim().toLowerCase();
    if (!RINGS.includes(ring)) {
      // Never drop the tool — surface the problem and place it in assess.
      warn(`${file}: unknown ring "${data.ring}", rendering as assess`);
      ring = 'assess';
    }

    const declared = Array.isArray(data['problem-areas'])
      ? data['problem-areas']
      : (data['problem-areas'] ? [data['problem-areas']] : []);
    const validAreas = declared.filter((a) => {
      if (areaSet.has(a)) return true;
      warn(`${file}: area "${a}" is not in taxonomy.md, ignored`);
      return false;
    });
    if (!validAreas.length) warn(`${file}: no valid problem-areas, will not appear on the radar`);

    let summary = (data.summary || '').trim();
    if (!summary) {
      summary = deriveSummary(body);
      warn(`${file}: no summary:, derived from "What it is" — add one for stable copy`);
    }

    tools.push({
      name,
      ring,
      areas: validAreas,
      homepage: (data.homepage || '').trim(),
      pricing: (data['pricing-note'] || data.pricing || '').trim(),
      researched: (data['last-researched'] || '').trim(),
      why: (data['ring-reasoning'] || '').trim(),
      desc: summary,
    });
  }

  // Stable order: ring (adopt→hold), then name. Independent of filesystem order.
  tools.sort((a, b) => (RINGS.indexOf(a.ring) - RINGS.indexOf(b.ring)) || a.name.localeCompare(b.name));
  return tools;
}

/* ── about copy ─────────────────────────────────────────────────────────── */

const escHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Inline spans, applied after escaping so the copy can't inject markup.
const inline = (s) =>
  escHtml(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // bold first, so its inner asterisks are gone before italics are matched
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');

// radar/about.json holds short fragments rather than prose, so the page can
// render them as tables, columns and chips instead of paragraphs. Inline
// emphasis is applied here so escaping stays on this side of the boundary.
function readAbout() {
  const walk = (v) =>
    typeof v === 'string' ? inline(v)
      : Array.isArray(v) ? v.map(walk)
      : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]))
      : v;
  return walk(JSON.parse(readFileSync(join(ROOT, 'radar', 'about.json'), 'utf8')));
}

/* ── emit ───────────────────────────────────────────────────────────────── */

const esc = (s) => JSON.stringify(s ?? '');

function serialize(tools) {
  const rows = tools.map(
    (t) =>
      `  {name:${esc(t.name)},ring:${esc(t.ring)},areas:[${t.areas.map(esc).join(',')}],` +
      `homepage:${esc(t.homepage)},pricing:${esc(t.pricing)},` +
      `researched:${esc(t.researched)},why:${esc(t.why)},desc:${esc(t.desc)}}`
  );
  return `[\n${rows.join(',\n')}\n]`;
}

// Selectors and hooks the page cannot render correctly without. A bulk edit to
// the template can drop a whole CSS section without any error surfacing — the
// page still loads, it just renders unstyled — so assert they survive.
const TEMPLATE_REQUIRED = [
  '.rbadge{', '.rbadge.adopt', '.rbadge.trial', '.rbadge.assess', '.rbadge.hold',
  '.card{', '.atile{', '.exd-cards{',
  '#dpanel{', '#dpanel-inner', '.dwhy{', '.dname{', '.dlink{',
  '#filt{', '.filt-row{', '#shell{', '#views{',
  '#about', '.ab-ring', '.ab-col', '.ab-chip',
  'id="dpanel-inner"', 'id="ab-copy"', 'id="filt-body"', 'id="radar-g"',
];

function checkTemplate(html) {
  const missing = TEMPLATE_REQUIRED.filter((sel) => !html.includes(sel));
  if (missing.length) {
    throw new Error(
      `template.html is missing ${missing.length} required selector(s) — a CSS or markup ` +
      `section was probably dropped by a bulk edit:\n  ${missing.join('\n  ')}`
    );
  }
}

function build() {
  const taxonomy = readTaxonomy();
  const { areas, labels } = readSectors(taxonomy);
  const tools = readTools(areas);

  let html = readFileSync(TEMPLATE, 'utf8');
  checkTemplate(html);
  for (const [marker, value] of [
    ['__TOOLS__', serialize(tools)],
    ['__AREAS__', JSON.stringify(areas)],
    ['__AREA_LABELS__', JSON.stringify(labels)],
    ['__ABOUT__', JSON.stringify(readAbout())],
  ]) {
    if (!html.includes(marker)) throw new Error(`template.html: missing ${marker} marker`);
    html = html.replace(marker, value);
  }
  return { html, tools, areas };
}

const { html, tools, areas } = build();
const check = process.argv.includes('--check');
const summary = process.argv.includes('--summary');

const byRing = RINGS.map((r) => `${tools.filter((t) => t.ring === r).length} ${r}`).join(', ');
const placements = tools.reduce((a, t) => a + t.areas.length, 0);
const stat = `${tools.length} tools (${byRing}) · ${areas.length} areas · ${placements} radar placements`;

// --summary writes Markdown on stdout for a CI job summary, and nothing else,
// so it can be redirected straight into $GITHUB_STEP_SUMMARY.
if (summary) {
  // A missing page is stale, not fresh. Gating this on existsSync reported
  // "up to date" for an absent file while --check correctly failed.
  const built = existsSync(OUT) ? readFileSync(OUT, 'utf8') : null;
  const stale = built !== html;
  const lines = [`### Radar`, '', stale
    ? '**`radar/index.html` is out of date.** Run `node radar/build.mjs` and commit the result.'
    : '`radar/index.html` is up to date.', '', stat];
  if (warnings.length) {
    lines.push('', `<details><summary>${warnings.length} data warning(s)</summary>`, '');
    warnings.forEach((w) => lines.push(`- ${w}`));
    lines.push('', '</details>');
  }
  console.log(lines.join('\n'));
  process.exit(stale ? 1 : 0);
}

if (check) {
  const current = existsSync(OUT) ? readFileSync(OUT, 'utf8') : null;
  if (current !== html) {
    console.error('radar/index.html is out of date — run: node radar/build.mjs');
    process.exit(1);
  }
  console.log('radar/index.html is up to date');
} else {
  writeFileSync(OUT, html, 'utf8');
}

console.log(stat);
if (warnings.length) {
  // Surface data problems as annotations on the pull request, not just in the log.
  const annotate = !!process.env.GITHUB_ACTIONS;
  console.error(`\n${warnings.length} warning(s):`);
  warnings.forEach((w) => console.error(annotate ? `::warning::${w}` : '  ' + w));
}
