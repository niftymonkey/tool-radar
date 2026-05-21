# Tool Radar

A self-maintaining catalog of developer tools and services, framed for solo
and side-project engineering. Each tool gets a short researched entry built
around one question: what problem does this solve for someone building
software on their own?

The catalog is consulted during idea exploration, PRD writing, and planning
to inform build-vs-buy decisions, so an existing tool is considered before
rolling a custom solution.

## How it works

- `sources.yaml` lists creator sponsor pages to scrape for candidate tools.
- `queue.md` holds ad-hoc requests to research a new tool or re-research an
  existing one.
- `tools/<slug>.md` is one researched entry per tool.
- `INDEX.md` is the generated problem-first index: the cheap-to-read query
  layer that maps a problem area to its candidate tools.
- `taxonomy.md` is the controlled vocabulary of problem areas.
- `REFRESH.md` is the runbook that scraping, research, and index generation
  follow. A weekly scheduled agent runs it; it can also be run manually.
- `CHANGELOG.md` logs what each refresh run did.

## Entry format

Each `tools/<slug>.md` file has YAML frontmatter and a templated body.

Frontmatter fields:

- `name`: the tool's display name.
- `problem-areas`: a list, assigned only from `taxonomy.md`.
- `ring`: one of `adopt`, `trial`, `assess`, `hold`.
- `ring-reasoning`: one sentence justifying the ring.
- `source`: `scraped` or `manual`.
- `discovered-via`: the source page URL, for scraped entries.
- `first-seen`: the date the tool first entered the catalog.
- `last-researched`: the date of the most recent research pass.
- `managed`: `auto` (the refresher may update this file), `manual` (the
  refresher never touches it), or `needs-research` (a stub awaiting its
  first research pass).
- `homepage` and `pricing`: canonical URLs.

Body sections:

- A level-one heading with the tool name.
- **What it is:** one plain sentence.
- **Problem it solves:** one sentence, framed for a solo side-project
  engineer.
- **When I'd reach for it:** two or three concrete trigger scenarios.
- **When I wouldn't:** one or two anti-patterns.
- **Pricing posture:** one line on free tier, hobby pricing, per-seat costs.
- **Reality check:** mandatory. The non-marketing signal: community
  complaints, reliability record, comparisons, gotchas.
- **Links:** homepage and pricing.
- **Last researched:** the date.

## The ring model

Every tool entry carries a `ring`, borrowed from the ThoughtWorks Tech
Radar:

- `adopt`: proven in my own work, a default choice.
- `trial`: actively being tried on a real project.
- `assess`: worth knowing, not yet tried.
- `hold`: not a fit for solo side-project work, with the reason recorded.

Scraped entries default to `assess`. Promotion to `trial` or `adopt` is
always a human decision, never automated.

## Ring rubric (assess vs hold)

The research step assigns the default ring with this rubric.

Default to `assess` when all of these hold:

- Has a free tier, or hobby pricing under roughly $20/month.
- Self-serve signup, no sales call required.
- Docs and onboarding speak to individual developers, not procurement teams.
- Demonstrates value at small scale, not only at large-organization scale.

Default to `hold` when any of these hold:

- Enterprise-only pricing, or "contact us" with no public tier.
- Requires significant existing infrastructure to evaluate.
- Solves a problem only meaningful at organization scale.
- A free tier exists but is too constrained for a real side project.

Never default to `adopt` or `trial`. Those require actual usage.

## Scope pre-filter

Before research, each candidate is checked against one question: is this
something you integrate into a project, or directly tool your development
workflow with?

If no, it is skipped entirely. No file is created. The skip is logged in
`CHANGELOG.md`, so a wrong call can be overridden by queueing the tool
manually in `queue.md`.

Out of scope: courses and education, consultancies and dev shops, hiring
marketplaces, general productivity apps, lifestyle products. In scope:
anything you build with or build on.
