---
name: Render
problem-areas: [hosting-deploy, database]
ring: assess
ring-reasoning: "Free tier covers web services, static sites, and Postgres; always-on hosting starts at $7/month; no credit card required to evaluate—all assess criteria met."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-06-22
last-researched: 2026-06-22
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** Render is a cloud hosting platform for web services, static sites, PostgreSQL databases, Redis, cron jobs, and background workers, deployed from a Git push with no Dockerfile or CLI required.

**Problem it solves:** Hosting a full-stack web app with a persistent server, database, and workers under one roof, with a Heroku-style Git-push workflow and predictable fixed monthly pricing instead of usage-based billing.

**When I'd reach for it:**

- A side project or MVP needing always-on server hosting co-located with a database at the lowest practical paid cost ($7/mo Starter web service + $7/mo Starter Postgres).
- Static site hosting at zero cost with no bandwidth or storage caps.
- A first production deploy where predictable fixed monthly pricing matters more than usage-based billing.

**When I wouldn't:**

- Using the free Postgres tier for any real data: it hard-deletes after 30 days with no warning or automatic migration path.
- Globally distributed, latency-sensitive apps—Render has fewer regions than Fly.io and no global edge network.
- Heavy CLI-first workflows: Render has no native CLI, which is a real gap for developers who prefer terminal-first operations.

**Pricing posture:** Free tier—web service (512 MB RAM, sleeps after 15 min of inactivity, 750 hrs/mo), unlimited static sites, Postgres (256 MB, 30-day hard expiry), Redis (25 MB); no credit card required. Starter always-on web service $7/mo; Standard $25/mo. Managed Postgres starts at $7/mo.

**Reality check:** Render is frequently positioned as the most production-stable of the Heroku successors, with fixed pricing as its core differentiator over Railway's usage-based billing. Developer experience reviews praise the GitHub integration, zero-Dockerfile deploys, and environment variable management. The 30-day Postgres hard-delete on the free tier is the most cited gotcha in community threads—multiple developers report losing data after forgetting the expiry date. Free-tier web services sleep after 15 minutes of inactivity and take 30-60 seconds to wake, making them unsuitable for user-facing endpoints. Render shows a better reliability record than Railway in 2026 platform comparisons, though it is not immune to occasional outages. For solo projects with even a single paying user, the $7/mo Starter is the practical minimum to avoid the free-tier pitfalls.

**Links:** [Homepage](https://render.com) · [Pricing](https://render.com/pricing)

**Last researched:** 2026-06-22
