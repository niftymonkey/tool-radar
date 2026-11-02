---
name: Convex
problem-areas: [backend-platform, database, background-jobs]
ring: assess
ring-reasoning: "A genuinely generous free tier and self-serve TypeScript DX make it easy to try at side-project scale, but the proprietary document-relational model and reactive-query cost behavior keep it short of a personal endorsement."
summary: "Reactive backend platform where database, queries, mutations, scheduling, and auth are written in TypeScript and kept in sync with your frontend automatically."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-14
managed: auto
homepage: https://convex.dev
pricing: https://convex.dev/pricing
---

# Convex

**What it is:** A reactive backend platform where the database, queries, mutations, scheduling, and auth are all written in plain TypeScript and kept in sync with your frontend automatically, with the backend open-sourced for self-hosting.

**Problem it solves:** Gives a solo builder a full real-time backend without wiring up WebSockets, cache invalidation, API routes, or an ORM, so a reactive app gets built in the time a traditional stack spends on plumbing.

**When I'd reach for it:**

- A real-time or collaborative app where live data sync is the core feature.
- A TypeScript-first MVP where iteration speed matters more than database portability.
- A frontend-focused builder who wants a robust backend without managing Docker, migrations, or Redis.

**When I wouldn't:**

- Apps that need heavy SQL joins, ad-hoc analytics, or aggregating millions of rows.
- Heavy compute jobs like video processing or ML inference, which must be offloaded to external services.

**Pricing posture:** Free tier covers personal projects indefinitely with 1M function calls/month and 0.5GB storage. Professional is $25/developer/month (25M function calls, 50GB storage). Business and Enterprise start at a $2,500 monthly minimum.

**Reality check:** The standout complaint remains vendor lock-in: backend logic and queries are Convex-specific, so leaving means rewriting client-side state synchronization logic. Convex has open-sourced the backend for organizations with data sovereignty requirements, which partially mitigates lock-in concerns. Billing per function call is now reported as more predictable than originally feared — reactive subscriptions do not generate surprise re-read costs. Professional plan adds log streaming, daily backups, custom domains, and SOC 2 reports. Supabase remains the default comparison when relational data or SQL portability matters.

**Links:** [Homepage](https://convex.dev) and [Pricing](https://convex.dev/pricing)

**Last researched:** 2026-09-14
