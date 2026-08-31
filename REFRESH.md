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

   Then check what is already pending on an open refresh pull request. Run
   `git fetch --prune origin 'refs/heads/refresh/*:refs/remotes/origin/refresh/*'`
   so refs deleted upstream disappear locally, and list the `tools/` files
   each remaining branch adds. A branch alone does not count: fetch the
   repository's open pull requests (`WebFetch` on the pull request list, or
   the host's API or CLI when one is available) and keep only the branches
   backing an **open** one. A branch whose pull request was merged is already
   reflected in `tools/`; a branch whose pull request was closed unmerged was
   rejected, and treating either as pending would suppress the candidate
   forever.

   Candidates found this way are **pending**, not skipped. They still go
   through steps 3 and 4 so the superseding run carries current research, but
   they must not produce a second competing pull request — see step 8.
   Omitting this check is what turns one unreviewed pull request into a
   backlog of near-duplicate ones, since an unmerged branch never lands in
   `tools/` for the plain diff above to see.

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
      `first-seen` and `last-researched`. When updating an existing entry
      instead of creating one, apply the Curated entries rule below.

5. **Drain the queue.** Process unchecked items in `queue.md`. New items
   are researched as in step 4; re-research items refresh an existing file
   and update its `last-researched` date. Check off processed items and
   move them to the Done section with today's date. If a re-research slug
   does not exist, note it in the run summary rather than failing.

6. **Re-research stale entries.** Any `managed: auto` entry whose
   `last-researched` date is older than 90 days is re-researched as in
   step 4. This step is optional and may be skipped in early runs.

7. **Regenerate the index.** Rebuild `INDEX.md` from all files in `tools/`,
   grouped by problem area. Every tool is one bullet, same format
   throughout: `- [Name](tools/slug.md) ` followed by the ring in
   backticks, a colon, and a one-line descriptor. Within each area list
   `adopt`, `trial`, and `assess` tools first, then `hold` tools as bullets
   under a `**Held**` label. A tool with multiple problem areas appears in
   each.

8. **Rebuild the radar, log, commit, and open a pull request.** Run
   `node radar/build.mjs` and include the regenerated `radar/index.html`
   in the commit; CI fails the pull request without it. If the run produced no
   substantive change (no tool file added, modified, or removed, and no
   queue item processed), skip this step: the run is complete and nothing
   is committed. Otherwise, append a one-paragraph summary to
   `CHANGELOG.md`: tools added, skipped (with reasons), re-researched, and
   queue items drained. Create a branch named `refresh/YYYY-MM-DD`, commit
   the changes with message `chore: radar refresh YYYY-MM-DD`, push the
   branch, and open a pull request against `main` with the run summary as
   the PR body. Do not merge the pull request; a human reviews and merges
   it.

   When step 2 marked candidates as pending on an earlier refresh branch,
   supersede rather than duplicate: branch from `main`, carry those entries
   forward with this run's research (steps 3 and 4 already produced it), and
   say in the pull request body which earlier pull requests this one replaces
   so a reviewer can close them together. Never leave two open pull requests
   adding the same `tools/` file.

## Entry format

Each `tools/<slug>.md` file is YAML frontmatter plus a templated body.

Frontmatter: `name`, `problem-areas` (list, from `taxonomy.md`), `ring`,
`ring-reasoning`, `summary`, `source` (`scraped` or `manual`),
`discovered-via`, `first-seen`, `last-researched`, `managed` (`auto`,
`manual`, or `needs-research`), `homepage`, `pricing`, and optionally
`pricing-note`.

`summary` is the one-sentence card copy the radar renders. Write it as
part of research, not as an afterthought: it is what someone reads when
scanning a problem area for options, and it is the only prose the radar
shows before the detail panel. Keep it under about 190 characters, since
the card clamps to two lines. It usually condenses **What it is**, but
where the pricing is the thing worth knowing up front, spend the last
clause on it — `"... in one MySQL-compatible engine. Production pricing
starts ~$700/month."` A missing `summary` does not break the build; the
generator falls back to the **What it is** sentence and warns, which is
worse copy, so write one.

`pricing-note` is optional and only needed when `pricing` is a bare URL
or too long to display: the radar shows `pricing-note` when present and
`pricing` otherwise.

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

`hold` when any hold: enterprise-only or "contact us" pricing; no free tier
and entry pricing above roughly $20/month; needs significant existing
infrastructure to evaluate; solves an organization-scale-only problem; a
free tier too constrained to be usable for a real side project.

Never default to `adopt` or `trial`; those require actual usage.

## Promoting a tool

The rubric only ever assigns `assess` or `hold`. Moving a tool to `adopt`
or `trial` is a human edit, because it is a claim about experience that
no amount of research can establish. Nothing in a refresh run will ever
do it for you, however good a tool looks.

```
node radar/promote.mjs <slug|name> <ring> "<reason>"
node radar/promote.mjs wispr-flow adopt "In active use as my dictation tool."
```

It sets `ring` and rewrites `ring-reasoning` together, which is the part
that is easy to get wrong by hand. The reasoning is rendered on the radar
as "Why adopt", so an entry promoted without rewriting it shows an
argument for the ring it just left — the tool refuses a reason that still
reads that way.

Write the reason as the claim it is: what you use it for, or what it
replaced. One sentence is enough. It is the only justification a reader
gets for why the tool sits where it does.

Leave `managed: auto`. The Curated entries rule below then keeps your
ring, your reasoning, and your judgment sections intact while the
refresher still updates pricing and the reality check. Use
`managed: manual` only to freeze an entry completely, facts included.

Demotion is the same command with a different ring — a tool you tried and
put down goes back to `assess` or `hold` with a reason saying why.

## Curated entries

`adopt` and `trial` are human judgments. The rubric only ever assigns
`assess` or `hold`, so an entry whose `ring` is `adopt` or `trial` is by
definition hand-curated.

When a refresh re-researches such an entry (a queue re-research or a stale
refresh), it preserves the `ring`, the `ring-reasoning`, and the
`When I'd reach for it` and `When I wouldn't` sections exactly as written.
It updates only the factual sections: `What it is`, `Problem it solves`,
`Pricing posture`, `Reality check`, the links, and `last-researched`.

To lock an entry completely, including its factual sections, set
`managed: manual`; the refresher then never touches it.

## Scope pre-filter

Before research, each candidate is checked against one question: is this
something you integrate into a project, or directly tool your development
workflow with? If not, skip it, create no file, and log the skip in
`CHANGELOG.md` so a wrong call can be overridden by queueing the tool in
`queue.md`. Out of scope: courses and education, consultancies and dev
shops, hiring marketplaces, general productivity apps, lifestyle products.

## Radar page

`radar/index.html` is a generated visualization of the catalog. It is
built, never hand-edited:

```
node radar/build.mjs           # regenerate radar/index.html
node radar/build.mjs --check    # verify it matches the entries; exit 1 if stale
```

Regenerate it in the same commit as any change to `tools/`, `taxonomy.md`,
or `radar/sectors.json`, so the page never lags the catalog.

`.github/workflows/radar.yml` enforces this: a pull request touching any
of those paths fails if `radar/index.html` does not match the entries.
That is why step 8 commits the rebuilt page along with the entries rather
than leaving it to be regenerated after the merge — the page on `main` is
correct at every commit, not eventually.

The workflow also posts a job summary with the tool and ring counts, and
lists any data warnings the build emitted as pull request annotations.
Warnings never fail the build, but each one is a data fix worth making.

Inputs:

- `radar/template.html` — the page itself: layout, styling, and all the
  radar geometry. Frozen. Editing it is a deliberate design change, not
  part of a refresh; the generator only substitutes `__TOOLS__`,
  `__AREAS__`, `__AREA_LABELS__`, and `__ABOUT__` into it.
- `radar/about.json` — the "Reading this radar" copy shown behind the
  header `?` button. Short fragments, not prose: the page renders them as
  a ring table, a two-column rubric, and chips. Keep the ring rubric here
  in step with the Ring rubric section above. Counts are computed from
  the data, so never write them here.
- `radar/sectors.json` — the order the problem areas appear around the
  dial, and their short labels. Ordering is a presentation choice
  (related areas sit adjacent), so it deliberately does not follow
  `taxonomy.md`'s order.
- `tools/*.md` and `taxonomy.md` — the data.

The build never fails on questionable data, because a silently dropped
tool is worse than an odd-looking one. It warns on stderr and renders
anyway for: an unrecognized `ring` (drawn as `assess`), a `problem-areas`
entry missing from `taxonomy.md` (ignored), a duplicate `name`, and a
missing `summary` (derived). Read the warnings — each one is a data fix.

Adding an area to `taxonomy.md` needs a matching entry in
`radar/sectors.json` to choose where it sits on the dial and what it is
called. Until then the build appends it with a generated label and warns.

## Manual run

To run by hand, follow the same steps. When run locally, research may be
parallelized across subagents; the scheduled cloud agent runs sequentially.
The first population of an empty catalog is run manually, in batches of up
to the per-run cap, reviewed between batches. Because a manual run is
attended, step 8 may commit directly to `main` instead of opening a pull
request.
