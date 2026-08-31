---
name: Supabase
problem-areas: [database, backend-platform, auth]
ring: assess
ring-reasoning: "Free tier supports 50K monthly active users, 500MB database, and 1GB storage — enough to ship a real product — with Pro at $25/month when you need more; self-serve with no sales call."
summary: "Open-source Firebase alternative wrapping PostgreSQL with auto-generated REST and GraphQL APIs, built-in auth with Row Level Security, storage, real-time subscriptions, and edge functions."
source: manual
discovered-via: https://supabase.com
first-seen: 2026-05-25
last-researched: 2026-05-25
managed: auto
homepage: https://supabase.com
pricing: https://supabase.com/pricing
---

# Supabase

**What it is:** An open-source Firebase alternative that wraps PostgreSQL with auto-generated REST and GraphQL APIs, built-in auth with Row Level Security, file storage, real-time subscriptions, and edge functions.

**Problem it solves:** Lets a solo developer stand up a complete backend — database, auth, storage, APIs — in minutes without building or hosting any of it from scratch.

**When I'd reach for it:**

- Shipping a web app MVP fast: Postgres + auth + storage + auto-generated API from one platform eliminates most backend scaffolding.
- Projects that need real-time features: live queries and presence are built in without extra infrastructure.
- Teams with SQL experience who want relational guarantees, JOINs, and full-text search that document databases cannot provide.

**When I wouldn't:**

- Mobile-first apps that need robust offline-first sync and conflict resolution: Firebase/Firestore has a more mature offline architecture for iOS and Android.
- Teams unfamiliar with relational database internals (connection pooling, index optimization, RLS policies) — Supabase exposes Postgres directly and that depth is a learning requirement.
- Apps with very high read/write throughput that would require careful Postgres tuning — the managed layer is not infinitely elastic.

**Pricing posture:** Free tier: 50K monthly active users, 500MB database, 1GB file storage, unlimited API requests; Pro at $25/month with 8GB database and 100GB storage included; compute add-ons from $10/month.

**Reality check:** Supabase's share of the BaaS market grew significantly from 2025 to 2026 as Firebase's pricing unpredictability drove migrations. Developer experience reviews are strongly positive for the dashboard, auto-generated APIs, and SQL power. Row Level Security policies are powerful but require careful design — misconfigured RLS is a common source of security bugs. Edge Functions cold-start latency is approximately 42ms (down from hundreds of milliseconds in earlier versions). Compared to Firebase, Supabase wins on cost predictability and SQL capability; Firebase wins on offline mobile sync and mature real-time mobile SDKs.

**Links:** [Homepage](https://supabase.com) and [Pricing](https://supabase.com/pricing)

**Last researched:** 2026-05-25
