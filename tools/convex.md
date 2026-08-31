---
name: Convex
problem-areas: [backend-platform, database, background-jobs]
ring: assess
ring-reasoning: "A genuinely generous free tier and self-serve TypeScript DX make it easy to try at side-project scale, but the proprietary document-relational model and reactive-query cost behavior keep it short of a personal endorsement."
summary: "Reactive backend platform where database, queries, mutations, scheduling, and auth are written in TypeScript and kept in sync with your frontend automatically."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://convex.dev
pricing: https://convex.dev/pricing
---

# Convex

**What it is:** A reactive backend platform where the database, queries, mutations, scheduling, and auth are all written in plain TypeScript and kept in sync with your frontend automatically.

**Problem it solves:** Gives a solo builder a full real-time backend without wiring up WebSockets, cache invalidation, API routes, or an ORM, so a reactive app gets built in the time a traditional stack spends on plumbing.

**When I'd reach for it:**

- A real-time or collaborative app where live data sync is the core feature.
- A TypeScript-first MVP where iteration speed matters more than database portability.
- A frontend-focused builder who wants a robust backend without managing Docker, migrations, or Redis.

**When I wouldn't:**

- Apps that need heavy SQL joins, ad-hoc analytics, or aggregating millions of rows.
- Heavy compute jobs like video processing or ML inference, which must be offloaded to external services.

**Pricing posture:** Free tier covers personal projects and prototypes indefinitely. Professional is $25 per developer per month; Business and Enterprise start at a $2,500 monthly minimum.

**Reality check:** The standout complaint is vendor lock-in: backend logic and queries are Convex-specific, so leaving means writing export scripts and rewriting the backend. The document-relational model is not a SQL engine, reactive-query usage can make costs less predictable as traffic grows, and the managed cloud is where the value lives even though the code is open source. Reviewers favor Supabase when relational data or open standards matter.

**Links:** [Homepage](https://convex.dev) and [Pricing](https://convex.dev/pricing)

**Last researched:** 2026-05-21
