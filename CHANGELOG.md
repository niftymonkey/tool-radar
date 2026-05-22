# Changelog

One entry per refresh run: tools added, tools skipped with reasons, tools
re-researched, and queue items drained.

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
