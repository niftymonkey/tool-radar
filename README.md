# Tool Radar

A self-maintaining catalog of developer tools and services, framed for solo
and side-project engineering. Each tool gets a short researched entry built
around one question: what problem does this solve for someone building
software on their own?

The catalog is consulted during idea exploration, PRD writing, and planning,
so an existing tool gets considered before rolling a custom solution.

## Layout

- `tools/<slug>.md`: one researched entry per tool.
- `INDEX.md`: generated problem-first index, the query layer.
- `taxonomy.md`: the controlled vocabulary of problem areas.
- `sources.yaml`: sponsor pages scraped for candidate tools.
- `queue.md`: ad-hoc requests to research or re-research a tool.
- `REFRESH.md`: the runbook for scraping, research, and indexing. It also
  defines the entry format, the ring rubric, and the scope filter.
- `CHANGELOG.md`: what each refresh run did.
- `radar/`: a generated visualization of the catalog — a radial dial of
  problem areas by ring, and an area-by-area browser. Build it with
  `node radar/build.mjs`; see the Radar page section of `REFRESH.md`.

## The ring model

Every entry carries a `ring`, borrowed from the ThoughtWorks Tech Radar:

- `adopt`: proven in my own work, a default choice.
- `trial`: actively being tried on a real project.
- `assess`: worth knowing, not yet tried.
- `hold`: not a fit for solo side-project work, with the reason recorded.

Scraped entries default to `assess`. Promotion to `trial` or `adopt` is
always a human decision — the research rubric has no path to either. Use
`node radar/promote.mjs <slug> <ring> "<reason>"`; see the Promoting a
tool section of `REFRESH.md`.
