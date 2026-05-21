# Refresh runbook

The process that scraping, research, and index generation follow. A weekly
scheduled agent runs this; it can also be run manually at any time. The
behavior is the same either way.

## Tool constraint

This runbook must use only tools guaranteed present in any environment,
local or cloud: `WebFetch`, `WebSearch`, `Bash`, `git`, and file
read/write. Do not depend on local MCP servers or local CLIs. They are not
available to the scheduled cloud agent.

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

3. **Scope pre-filter.** For each new tool, apply the scope pre-filter from
   `README.md`. If it is out of scope, do not create a file; record the
   skip and the reason for the run summary.

4. **Research new tools** (up to the per-run cap). For each in-scope new
   tool:
   a. Fetch the homepage and the pricing page with `WebFetch` for the
      factual baseline.
   b. Run one `WebSearch` for community signal, along the lines of
      "<tool> pros cons gotchas for solo developers vs alternatives", then
      `WebFetch` the two or three most relevant results.
   c. Write `tools/<slug>.md` using the entry format in `README.md`,
      including the mandatory Reality check section. Assign `problem-areas`
      from `taxonomy.md` only. Assign the default `ring` per the rubric.
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

## Manual run

To run by hand, follow the same steps. When run locally, research may be
parallelized across subagents; the scheduled cloud agent runs sequentially.
The first population of an empty catalog is run manually, in batches of up
to the per-run cap, reviewed between batches.
