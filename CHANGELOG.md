# Changelog

One entry per refresh run: tools added, tools skipped with reasons, tools
re-researched, and queue items drained.

## 2026-07-27

Scheduled weekly refresh. Scraped t3-sponsors source (sponsors.ts); found 6 entries not previously in the catalog: Devin, CopilotKit, Render, General Translation, Mercury, and Boot.dev. Applied the scope pre-filter: Mercury rejected (banking/financial product, not a developer tool you integrate into a project); Boot.dev rejected (courses and education platform). General Translation passed the scope question — it is an i18n SDK you integrate into React/Next.js apps — but no taxonomy area covers i18n/localization; logged here for a human to either map it to an existing area or extend taxonomy.md, after which it can be queued for research. Added 3 tool entries: Devin (assess, ai-coding-agents) — autonomous cloud AI engineer by Cognition, free tier plus $20/month Pro with ACU overage billing, strong on well-scoped ticket-execution but a poor fit for solo iterative development; CopilotKit (assess, ai-agent-infra) — open-source React framework and AG-UI protocol for embedding AI copilots in apps, MIT-licensed core is free, Copilot Cloud Pro at $49/month; Render (assess, hosting-deploy and database) — full-service cloud hosting with a generous free tier (750 web service hours/month, free static sites, no credit card required) and predictable per-service pricing starting at $7/month. Queue fully drained (no New or Re-research items). No stale entries (all existing entries 56–67 days old, within the 90-day threshold). INDEX.md regenerated; catalog now holds 82 tool entries across 22 problem areas: 3 adopt, 9 hold, 70 assess.

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
