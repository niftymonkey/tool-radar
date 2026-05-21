# Tool Radar: Idea Exploration Summary

_Explored 2026-05-21_

## Problem / Opportunity

The user previously kept `reference-implementations.md`, a hand-curated
markdown file of default tools/patterns, to consult when starting new side
projects. It has gone stale and been deleted; only a dangling pointer in the
global CLAUDE.md remains. The *pattern* was sound (a single doc consulted at
planning time) but it failed: a passive "read this file" instruction with no
feeding mechanism rots silently.

Opportunity: a self-maintaining catalog of developer tools/services, seeded
from creator sponsor lists (starting with t3.gg/sponsors) plus manual
additions, each researched and framed around "what problem does this solve
for a solo / side-project engineer." Consulted during idea exploration, PRD,
and planning to inform build-vs-buy decisions.

## Consumer

- Primary: the user (solo developer, side projects), via Claude during
  explore-idea / PRD / planning sessions.
- Secondary: the user browsing the repo directly. Public repo, so also
  lightly a portfolio artifact.

## Designed System Shape

Public GitHub repo, `tool-radar`, at `~/dev/niftymonkey/tool-radar`:

- `tools/<slug>.md`: one file per tool, slug-only filenames.
- `INDEX.md`: problem-first index (problem area to tools), generated; the
  cheap-to-read query layer.
- `sources.yaml`: sponsor-page URLs to scrape.
- `queue.md`: checkbox bullets for ad-hoc "research" / "re-research" requests.
- `taxonomy.md`: 22 canonical problem areas; research assigns only from it.
- `README.md`: repo purpose, ring rubric, scope pre-filter.
- `REFRESH.md`: the runbook scheduled and manual runs both follow.
- `CHANGELOG.md`: per-run summary log.
- A `consult-radar` skill: the read interface; sole owner of the repo path.

## Entry Model

Frontmatter: `name`, `problem-areas` (list, from taxonomy), `ring`,
`ring-reasoning`, `source`, `discovered-via`, `first-seen`,
`last-researched`, `managed` (auto | manual | needs-research), `homepage`,
`pricing`.

Body: What it is / Problem it solves (solo-framed) / When I'd reach for it /
When I wouldn't / Pricing posture / Reality check / Links / Last researched.

Ring axis (ThoughtWorks Tech Radar model): `adopt | trial | assess | hold`.
Scraped entries default to `assess`; promotion to `trial`/`adopt` is always
human judgment. `hold` doubles as the "not a fit for solo work" outcome.

## Core Requirements

**Must-have**

- Per-tool files plus a generated problem-first INDEX.
- Two input types, scraped (`sources.yaml`) and manual; the `managed` flag
  controls whether the refresher touches a file.
- `queue.md` for ad-hoc requests.
- Controlled-vocabulary taxonomy; new areas are a human decision.
- Scope pre-filter: non-tools skipped entirely, skips logged.
- Ring rubric for the assess-vs-hold default.
- Research depth: factual baseline (homepage plus pricing) plus a signal pass
  (WebSearch then WebFetch community/comparison writeups), producing an entry
  with a mandatory Reality check section.
- Weekly scheduled refresh via a remote `/schedule` agent following the
  in-repo `REFRESH.md`.
- `consult-radar` skill, invoked at build-vs-buy moments, wired via a
  CLAUDE.md instruction that names the trigger.
- `REFRESH.md` assumes only cloud-guaranteed tools (WebFetch, WebSearch,
  Bash, git): no local MCPs or CLIs.
- Per-run cap (about 15) on new tools researched.

**Nice-to-have / later**

- Staleness signal (refresh pings if catalog unchanged/unconsulted N weeks).
- Exa MCP wired into the cloud agent for a higher-quality signal pass.
- Weekly-PR flow instead of direct-to-main, if review is ever wanted.

## Key Decisions

1. One fresh project, not a revival of `reference-implementations.md` (gone).
   Pattern preserved, content not.
2. Name `tool-radar`, deliberately inheriting the Tech Radar mental model.
3. Public GitHub repo; scheduled agent pushes direct-to-main.
4. Storage: per-tool files plus problem-first INDEX; slug-only filenames;
   `problem-areas` frontmatter drives index placement (a tool can appear in
   multiple sections, single detail file).
5. Filtering is the `hold` ring; no tool is rejected, holds are separated in
   the index. A separate scope pre-filter excludes non-tools (courses,
   consultancies, lifestyle products) entirely.
6. Scraping via LLM extraction, not per-source parsers.
7. Schedule: weekly, Monday, remote `/schedule` agent; logic lives in the
   in-repo `REFRESH.md`, the cron prompt stays thin.
8. Integration: `consult-radar` skill plus a CLAUDE.md instruction naming the
   build-vs-buy trigger; the skill is the single source of truth for the
   repo path, the specific fix for what killed the predecessor.
9. Research depth: baseline fetch plus WebSearch signal pass; Reality check
   section mandatory.
10. Bootstrap is attended and iterative: Phase 0 scaffold, Phase 1 populate
    (about 15/run, reviewing as entries land), Phase 2 turn on the cron. No
    separate bootstrap code; the per-run cap makes it safe.

## Constraints / Boundaries

- `REFRESH.md` must stay cloud-portable: no local MCP/CLI dependencies.
- New canonical taxonomy areas and ring promotions are human decisions,
  never automated.
- `managed: manual` entries are never touched by the refresher.
- Scope pre-filter skips are logged, not silent, so wrong calls can be
  overridden.
- Removed sponsors are not deleted; their research is retained.

## Open Questions

- Final GitHub repo slug / org path to confirm at scaffold time.
- Staleness/unconsulted signal: deferred; build only if the radar feels
  stale in practice.
- Whether reliability findings (such as Railway's data-loss record) should
  ever influence the `ring` directly, vs. living only in the Reality check
  body. Currently body-only.
- Exact per-run cap number (about 15 assumed).
- 90-day re-research threshold for auto entries: assumed, not firm.
- Cleanup: the dead "Reference Implementations" section in the global
  CLAUDE.md needs removing.

## Taxonomy (22 canonical problem areas)

`auth`, `security`, `ci-cd`, `hosting-deploy`, `database`,
`backend-platform`, `cms`, `error-monitoring`, `product-analytics`,
`feature-flags`, `email-messaging`, `ui-components`, `design-tooling`,
`media-optimization`, `dev-workflow`, `cost-optimization`,
`ai-code-review`, `ai-coding-agents`, `ai-agent-infra`, `ai-apis`,
`ai-web-data`, `background-jobs`.
