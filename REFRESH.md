# Refresh runbook

The process that scraping, research, and index generation follow. A weekly
scheduled agent runs this; it can also be run manually at any time. The
behavior is the same either way.

## Tool constraint

The runbook must not require anything beyond the tools guaranteed present
in any environment, local or cloud: `WebFetch`, `WebSearch`, `Bash`, `git`,
and file read/write. It may opportunistically use a better tool when one is
available (see the signal pass in step 4), but every step must have a
fallback that works with the guaranteed set alone. The scheduled cloud
agent has only the guaranteed set.

## Per-run cap

Research at most 15 new tools per run. If more than 15 new candidates are
found, research the first 15 and leave the rest; the next run picks them
up. This bounds run length and makes the initial population safe to do in
batches.

## Steps

1. **Scrape sources.** Read `sources.yaml`. For each source URL, fetch the
   page with `WebFetch` and extract the full list of tools (name and link)
   via the model. Read every section of the page, including past or former
   sponsors; sponsorship status does not affect a tool's usefulness.

2. **Diff.** Compare extracted tools against existing files in `tools/`. A
   tool already represented by a file is skipped. Collect the new ones.

3. **Scope pre-filter.** For each new tool, apply the scope pre-filter
   below. If it is out of scope, do not create a file; record the skip and
   the reason for the run summary.

4. **Research new tools** (up to the per-run cap). For each in-scope new
   tool:
   a. Fetch the homepage and the pricing page with `WebFetch` for the
      factual baseline.
   b. Search for community signal, along the lines of "<tool> pros cons
      gotchas for solo developers vs alternatives". Use Exa if an Exa
      search tool is available in this environment; otherwise use
      `WebSearch`. Then `WebFetch` the two or three most relevant results.
   c. Write `tools/<slug>.md` using the entry format below, including the
      mandatory Reality check section. Assign `problem-areas` from
      `taxonomy.md` only. Assign the default `ring` per the rubric below.
      Set `source: scraped`, `managed: auto`, and today's date for
      `first-seen` and `last-researched`.

5. **Drain the queue.** Process unchecked items in `queue.md`. New items
   are researched as in step 4; re-research items refresh an existing file
   and update its `last-researched` date. Check off processed items and
   move them to the Done section with today's date. If a re-research slug
   does not exist, note it in the run summary rather than failing.

6. **Re-research stale entries.** Any `managed: auto` entry whose
   `last-researched` date is older than 90 days is re-researched as in
   step 4. This step is optional and may be skipped in early runs.

7. **Regenerate the index.** Rebuild `INDEX.md` from all files in `tools/`,
   grouped by problem area. Within each area, list `adopt`, `trial`, and
   `assess` tools; collect `hold` tools in a separate held section per
   area. A tool with multiple problem areas appears in each.

8. **Log and commit.** Append a one-paragraph summary to `CHANGELOG.md`:
   tools added, skipped (with reasons), re-researched, and queue items
   drained. Commit with message `chore: radar refresh YYYY-MM-DD` and push.

## Entry format

Each `tools/<slug>.md` file is YAML frontmatter plus a templated body.

Frontmatter: `name`, `problem-areas` (list, from `taxonomy.md`), `ring`,
`ring-reasoning`, `source` (`scraped` or `manual`), `discovered-via`,
`first-seen`, `last-researched`, `managed` (`auto`, `manual`, or
`needs-research`), `homepage`, `pricing`.

Body, in order: a level-one heading with the tool name, then bolded lines
for **What it is** (one sentence), **Problem it solves** (one sentence,
solo framed), **When I'd reach for it** (two or three triggers), **When I
wouldn't** (one or two anti-patterns), **Pricing posture** (one line),
**Reality check** (mandatory: community signal, reliability record,
comparisons, gotchas), **Links**, and **Last researched**.

## Ring rubric

The research step assigns the default ring.

`assess` when all hold: a free tier or hobby pricing under roughly
$20/month; self-serve signup, no sales call; docs aimed at individual
developers, not procurement teams; value demonstrated at small scale.

`hold` when any hold: enterprise-only or "contact us" pricing; needs
significant existing infrastructure to evaluate; solves an
organization-scale-only problem; a free tier too constrained to be usable
for a real side project.

Never default to `adopt` or `trial`; those require actual usage.

## Scope pre-filter

Before research, each candidate is checked against one question: is this
something you integrate into a project, or directly tool your development
workflow with? If not, skip it, create no file, and log the skip in
`CHANGELOG.md` so a wrong call can be overridden by queueing the tool in
`queue.md`. Out of scope: courses and education, consultancies and dev
shops, hiring marketplaces, general productivity apps, lifestyle products.

## Manual run

To run by hand, follow the same steps. When run locally, research may be
parallelized across subagents; the scheduled cloud agent runs sequentially.
The first population of an empty catalog is run manually, in batches of up
to the per-run cap, reviewed between batches.
