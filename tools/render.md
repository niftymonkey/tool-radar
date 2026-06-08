---
name: Render
problem-areas: [hosting-deploy]
ring: assess
ring-reasoning: "A genuine free tier, no-friction Git-push deploys, and a flat $7/month entry for always-on services make Render worth evaluating for persistent backends and APIs that don't fit Vercel's serverless model."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-06-08
last-researched: 2026-06-08
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A cloud application platform that deploys web services, static sites, cron jobs, and PostgreSQL databases directly from a Git repository with no server management.

**Problem it solves:** Gets a persistent always-on backend — server, database, cron jobs — from repo to a live HTTPS URL in minutes, filling the gap between Vercel (serverless, frontend-optimized) and raw cloud VMs that demand manual DevOps.

**When I'd reach for it:**

- A side project or API that needs an always-warm container with no cold-start penalty but I do not want to manage servers or write infrastructure configs.
- Hosting backend workloads that Vercel cannot run: long-running jobs, WebSocket servers, workers, or a persistent process.
- Free static site hosting on a CDN with HTTPS and preview deploys and zero usage bill.

**When I wouldn't:**

- Free-tier web services sleep after 15 minutes of inactivity; the first wake-up takes 30-60 seconds, which is unusable for a real production API — upgrade to the $7/month Starter tier before launching to real users.
- Single-region by default; workloads with a globally distributed audience need a platform that has multi-region routing built in.
- Free Postgres expires after 90 days, which is a quiet footgun on long-lived side projects that get forgotten.

**Pricing posture:** Free tier for web services (750 hours/month, sleeps on inactivity), unlimited free static sites, and a 90-day free PostgreSQL. Persistent always-on services start at $7/month.

**Reality check:** Render sits between Railway (better DX, documented data-loss incidents in 2026) and Vercel (stronger frontend story, costlier at scale) for solo backend work. Its main advantage is flat, predictable pricing — no surprise bills from usage spikes — which is the most-cited reason developers choose it over Railway. Mid-2026 benchmarks show Render averaging ~200ms response times, faster than Railway (~300ms) and well ahead of Vercel's cold-start latency (~500ms). The community complaint is the lack of a built-in aggregate spending dashboard and the single-region default; both require deliberate attention at the start of a project. No documented data-loss or platform-integrity incidents comparable to Railway's 2026 record.

**Links:** [Homepage](https://render.com) and [Pricing](https://render.com/pricing)

**Last researched:** 2026-06-08
