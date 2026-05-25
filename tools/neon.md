---
name: Neon
problem-areas: [database]
ring: assess
ring-reasoning: "Free tier with 100 compute-unit hours per month and scale-to-zero billing cover a side project that runs intermittently; no minimum spend and self-serve signup with no sales call."
source: manual
discovered-via: https://neon.tech
first-seen: 2026-05-25
last-researched: 2026-05-25
managed: auto
homepage: https://neon.tech
pricing: https://neon.tech/pricing
---

# Neon

**What it is:** A serverless PostgreSQL database that scales compute to zero when idle, bills per second of active compute, and adds Git-style database branching for ephemeral dev and test environments.

**Problem it solves:** Lets a solo developer run a real managed Postgres instance that costs nothing during idle periods, with instant branches for previews and CI without copying data.

**When I'd reach for it:**

- Side projects with variable or intermittent traffic: scale-to-zero means you pay nothing when the database is idle, unlike fixed-size managed Postgres instances.
- CI pipelines that need isolated database environments per PR: branching creates copy-on-write clones in seconds without duplicating storage.
- Serverless and edge functions where connection pooling is handled by Neon's built-in pooler and cold starts are a fraction of a second.

**When I wouldn't:**

- Large datasets: storage is billed at $0.75/GiB-month and at 100GB becomes $75/month just for storage, at which point traditional RDS or managed Postgres may be cheaper.
- Apps that cannot tolerate any cold-start latency on infrequently accessed compute — there is a brief warmup delay after a compute node has been fully suspended.
- When you need the database to stay warm for consistent low-latency access, the compute suspend feature works against you.

**Pricing posture:** Free tier with 100 compute-unit hours per month; Launch plan at $0.106/CU-hour; Scale plan at $0.222/CU-hour; storage at $0.75/GiB-month across all paid tiers; no minimum monthly spend.

**Reality check:** Acquired by Databricks in May 2025, after which Neon reduced storage pricing by 80% (from $1.75 to $0.35/GiB-month at some tiers) and doubled the free compute allowance. Developer reviews consistently highlight database branching as a genuine workflow improvement for CI quality. The cold-start latency is real but small in practice. Storage costs are the main gotcha at larger data sizes. Compared to Supabase Postgres, Neon is more focused on serverless and branching; Supabase bundles auth, storage, and edge functions in the same product.

**Links:** [Homepage](https://neon.tech) and [Pricing](https://neon.tech/pricing)

**Last researched:** 2026-05-25
