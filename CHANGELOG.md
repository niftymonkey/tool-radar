# Changelog

One entry per refresh run: tools added, tools skipped with reasons, tools
re-researched, and queue items drained.

## 2026-08-31

Scheduled weekly refresh. Scraped t3-sponsors source (sponsors.ts). Found 5 new in-scope candidates — Traycer, Qdrant, Pydantic AI, QA Wolf, and Parallel — all of which were already pending on open PR #17 (branch refresh/2026-08-24); they were re-researched with current data as required by the superseding-run rule, and this PR replaces #17. Out-of-scope rejections from prior runs stand and are not re-litigated: Fondo (startup accounting), Mercury (business banking), Boot.dev and Epic Web (courses and education), and the 2026-05-22 batch (Infinite Red, DockYard, G2i, Notion, Frontend Masters, Code Crafters, Superhuman, Eight Sleep — all consultancies, hiring marketplaces, education platforms, or lifestyle products). Added 5 tool entries: Traycer (assess, ai-code-review, dev-workflow) — VS Code AI coding assistant with a plan-first decomposition approach and background code review; freemium with a paid tier at $8/month and 100K+ installs; Qdrant (assess, database, ai-agent-infra) — open-source Rust-powered vector database, Apache 2.0, free cloud single-node tier (250K vectors) and always-free self-hosted; leads 2026 p50 latency benchmarks at ~4ms; Pydantic AI (assess, ai-agent-infra) — free open-source (MIT) Python agent framework from the Pydantic team; type-safe structured outputs, native async streaming, minimal dependency footprint; pre-1.0 but backed by a credible team; Parallel (assess, ai-web-data) — agentic web research API with 16K free requests, per-field citations and confidence scores, ranked #1 on the Artificial Analysis Search Index (August 2026) but with 13s+ latency unsuitable for interactive agents; QA Wolf (hold, ci-cd, dev-workflow) — AI-native E2E testing platform, no free tier, managed Coverage as a Service at a median $90K/year annual contract, self-serve Platform tier is pay-per-use but without a free allowance and is team-oriented. No queue items to drain (queue empty). Step 6 (stale re-research) skipped: the batch-1 entries from 2026-05-21 are now 102 days old and past the 90-day window; they are flagged for re-research on the next run. INDEX.md regenerated; catalog now holds 90 tool entries across 23 problem areas: 3 adopt, 11 hold, 76 assess.

## 2026-08-17

Scheduled weekly refresh. Scraped t3-sponsors source (sponsors.ts). Found 2 new in-scope tools: Mux and ClickHouse (both new sponsors not present in earlier runs). All other new entries in the source were already catalogued or previously rejected out of scope — rejections are not re-litigated: Fondo (startup accounting service, rejected 2026-05-22), Mercury (business banking, rejected 2026-08-10), Boot.dev (courses and education, rejected 2026-06-08), and a set of consultancies, hiring marketplaces, education platforms, and lifestyle products rejected on 2026-05-22 (Infinite Red, DockYard, G2i, Notion, Epic Web, Frontend Masters, Code Crafters, Superhuman, Eight Sleep). Both new tools passed the scope pre-filter as developer-facing APIs you integrate into a project. Added 2 tool entries: Mux (assess, media-optimization) — API-first video encoding, storage, and streaming delivery with a 100K delivery-minutes/month free tier, no credit card required; ClickHouse (hold, database) — column-oriented OLAP database for real-time analytics at scale, no permanent free tier and Basic cloud tier starts at ~$67/month. Drained 2 queue re-research items: devin — ACU unit confirmed as ~15 minutes of active autonomous work billed at $2.25/ACU on Pro, plan names pinned as Free / Pro ($20/mo) / Max ($200/mo) / Teams ($80/mo + $40/seat); render — outbound bandwidth confirmed as 5 GB on Hobby (free) and 25 GB on Pro ($25/mo), overage $0.15/GB on both, all workspaces migrated to new plans by August 1, 2026. No stale entries requiring re-research (oldest last-researched date is 2026-05-21, 88 days old and within the 90-day window). INDEX.md regenerated; catalog now holds 85 tool entries across 23 problem areas: 3 adopt, 10 hold, 72 assess.

## 2026-08-10 (backlog consolidation)

Attended run consolidating ten unmerged weekly refresh pull requests (#5
through #14, 2026-06-08 to 2026-08-10). Because none of those runs was
merged, `tools/` on `main` never gained their entries, so every subsequent
run re-diffed against the same catalog and re-researched the same
candidates: the ten pull requests are near-duplicate attempts at four tools,
not ten runs' worth of distinct findings. Consolidated rather than merged
sequentially. Added 4 tool entries, each built on the most recent research
(2026-08-10) with durable facts folded in from the earlier runs and
`first-seen` set to 2026-06-08, the date each was first surfaced: Devin
(assess, ai-coding-agents) — autonomous AI engineer from Cognition, $20/month
individual plan after a 96% price cut, with usage billed on top that
dominates real spend; CopilotKit (assess, ui-components, ai-agent-infra) —
MIT-licensed React SDK and AG-UI protocol for embedding copilot UIs, free
forever for one seat, 34k+ GitHub stars and a $27M Series A; Render (assess,
hosting-deploy,
database, background-jobs) — Git-push hosting for web services, PostgreSQL,
and workers, with a real free tier whose 30-60 second cold starts and
30-day PostgreSQL expiry are the notable traps, and flat $25/month Pro
pricing as of April 2026; General Translation (assess, i18n) — AI i18n
toolkit for React and Next.js whose `<T>` wrapper translates literal JSX
without key extraction. Extended taxonomy.md with an `i18n` area (a human
decision, taken in this run): every one of the ten runs flagged that no
existing area covered internationalization, five declined to file General
Translation at all over it, and five filed it under `dev-workflow` against
that area's stated definition of code-review flow and pairing. Applied three
factual corrections raised in review on #14 and inherited by the consolidated
entries: General Translation's `<T>` wrapper covers literal JSX descendants,
typically at build time, and JSON dictionaries remain supported rather than
being replaced; Render's comparison no longer attributes ACU-based billing to
Railway, which uses resource-based billing (ACUs are Devin's unit); and the
claim that Boot.dev had been logged out of scope in the 2026-05-22 run is
dropped, as it was first rejected on 2026-06-08. Scope rejections across the
backlog remain unchanged and are not re-litigated here: Mercury (business
banking) and Boot.dev (courses and education), alongside the 2026-05-22
rejections. No queue items to drain (queue empty). No stale entries: the
oldest last-researched date is 2026-05-21, 81 days old and within the 90-day
window. Pull requests #5 through #14 were closed as superseded by this entry.
Also amended REFRESH.md so the diff step accounts for entries already pending
on an open refresh pull request, which is the failure that produced this
backlog: the check prunes deleted refs and confirms the branch backs an open
pull request, since a merged branch is already in `tools/` and a
closed-unmerged one was rejected — treating either as pending would suppress
that candidate forever. Pending candidates still run through research so the
superseding run carries current facts.

Review on the consolidation itself raised two further points, both applied:
CopilotKit gains `ui-components` alongside `ai-agent-infra`, since shipping
copilot UI components is as much its purpose as agent wiring and
`ai-agent-infra` is defined around runtime infrastructure; and its
platform-support caveat no longer names specific non-React frameworks as
early-stage, because that support has moved and the entry should not pin a
figure that ages badly. Two contested pricing claims could not be settled:
review disputed the Devin team-tier structure and usage-billing unit, and the
Render bandwidth allowances, both against the 2026-08-10 research, and egress
to devin.ai and render.com is blocked in this environment. Rather than pick a
side, both entries drop the disputed specifics and keep what has held across
every look, and both tools are queued for re-research by a run with network
access. INDEX.md regenerated; catalog now holds 83 tool entries across 23
problem areas: 3 adopt, 9 hold, 71 assess.

## 2026-06-01

Scheduled weekly refresh. Scraped t3-sponsors source (sponsors.ts); all entries already catalogued or previously rejected out of scope — no new in-scope tools found from source. Drained all 4 remaining queue items: Honeycomb, Grafana, Cognee, Zep. All 4 passed the scope pre-filter as developer tools you integrate into projects. Added 4 tool entries: Honeycomb (assess, error-monitoring) — event-based observability with a 20M events/month free tier; Grafana (assess, error-monitoring) — open-source LGTM-stack dashboarding, free self-hosted and generous Grafana Cloud free tier; Cognee (assess, ai-agent-infra) — open-source vector + knowledge graph agent memory, free to self-host; Zep (hold, ai-agent-infra) — managed temporal knowledge graph memory, free tier too constrained (exhausts in days) and Pro at $99/month is above the threshold. No stale entries requiring re-research (all existing entries carry last-researched 2026-05-21 or 2026-05-25, well within the 90-day window). Queue is now fully drained. INDEX.md regenerated; catalog now holds 79 tool entries across 22 problem areas: 3 adopt, 9 hold, 67 assess.

## 2026-05-25

Scheduled weekly refresh. Scraped t3-sponsors source (sponsors.ts); all entries already catalogued or out of scope (same result as 2026-05-22 run — no new in-scope tools found from source). Drained 15 of 19 queue items (per-run cap of 15 applied; Honeycomb, Grafana, Cognee, and Zep remain for the next run). All 15 queue items passed the scope pre-filter as developer APIs or frameworks you integrate into a project. Added 15 tool entries: OpenRouter, Portkey, Helicone, LiteLLM, AssemblyAI, Deepgram, ElevenLabs, Cartesia, PlayHT, LiveKit, Pipecat, Neon, Supabase, Voyage AI, Cohere. Rings: all 15 assess. No stale entries requiring re-research (all existing entries carry last-researched 2026-05-21 or 2026-05-25, well within the 90-day window). INDEX.md regenerated; catalog now holds 75 tool entries across 22 problem areas: 3 adopt, 8 hold, 64 assess.

## 2026-05-22

Scheduled weekly refresh. Scraped t3.gg/sponsors via the project's GitHub source (sponsors.ts) after the live page returned HTTP 403. Found 10 new entries not yet in the catalog across the video-sponsor and affiliate categories. All 10 were rejected by the scope pre-filter and no files were created: Infinite Red (consultancy/dev shop), DockYard (consultancy/dev shop), G2i (hiring marketplace), Notion (general productivity app), Fondo (startup accounting service), Epic Web (courses and education), Frontend Masters (courses and education), Code Crafters (courses and education), Superhuman (general productivity app), Eight Sleep (lifestyle product). No queue items to drain. No stale entries requiring re-research (all 60 entries carry last-researched 2026-05-21, well within the 90-day window). INDEX.md date updated; catalog unchanged at 60 entries (3 adopt, 8 hold, 49 assess).

## 2026-05-21

Phase 1, batch 1. Scraped t3.gg/sponsors. Added 15 tool entries: WorkOS,
Clerk, Arcjet, CodeRabbit, Greptile, PostHog, Sentry, Vercel, Netlify,
Railway, Convex, Trigger.dev, Appwrite, Upstash, PlanetScale. Rings: 13
assess, 2 hold (WorkOS for organization-scale enterprise auth, Greptile for
no free tier and a $30-per-seat floor). No tools skipped: the 15 were
pre-selected as in-scope for this attended batch. Queue empty. INDEX.md
regenerated across 15 problem areas.

## 2026-05-21 (batch 2)

Phase 1, batch 2. Added 15 tool entries: Payload, Sent.dm, Unkey, Mobbin,
Magic Patterns, Milkstraw, Bolt.new, Lovable, Kilo Code, FAL, Vapi,
Browserbase, Exa, Firecrawl, Modal. Rings: 14 assess, 1 hold (Milkstraw,
performance-based pricing only meaningful at non-trivial AWS scale).
Corrected 7 problem-area tags where research stretched a tag to a tool
attribute rather than its purpose (cost-optimization on cheap tools,
media-optimization on a generative-media API, email-messaging on a voice
platform, ui-components on a screenshot library and a code generator,
backend-platform on an API-key service). Queue empty. INDEX.md regenerated;
all 22 taxonomy areas now populated.

## 2026-05-21 (batch 3)

Phase 1, batch 3. Added 15 tool entries: Blacksmith, Depot, RWX, DNSimple,
Sevalla, Zephyr Cloud, SingleStore, Prisma Postgres, ImageKit, Augment Code,
Factory, Macroscope, Embrace, Highlight, Axiom. Rings: 13 assess, 2 hold
(SingleStore, Embrace). Corrected 6 over-tagged or misfiled problem-areas (a
DNS tool filed under dev-workflow, product-analytics on a database,
dev-workflow over-tagged onto CI and deploy tools). Promoted WorkOS,
CodeRabbit, and Vercel to `adopt` as tools in active use. Added the Curated
entries rule to REFRESH.md: a refresh never overwrites an `adopt` or `trial`
ring, its reasoning, or its judgment sections. INDEX.md regenerated.

## 2026-05-21 (batch 4)

Batch 4, the final batch from t3.gg/sponsors. Added 15 tool entries:
Agentuity, Daytona, Kernel, Rork, Chef by Convex, Ragie, Wispr Flow, Tuple,
Graphite, AG Grid, Ahrefs, DeepSource, Agora, Bright Data, SpacetimeDB.
Rings: 11 assess, 4 hold (Ragie, Tuple, Ahrefs, Bright Data). Corrected 4
over-tagged problem-areas. The catalog now holds 60 tool entries across all
22 problem areas: 3 adopt, 8 hold, 49 assess.
