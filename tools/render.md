---
name: Render
problem-areas:
  - hosting-deploy
ring: assess
ring-reasoning: Free tier available (750 instance-hours/month, 100 GB outbound bandwidth), self-serve sign-up, and docs aimed squarely at individual developers. The April 2026 flat-rate Pro workspace ($25/month, no per-seat fees) makes pricing predictable. Cold-start limitations on the free tier prevent an immediate adopt, but it's fully evaluable on a side project without spending anything.
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-08-10
last-researched: 2026-08-10
managed: auto
homepage: https://render.com
pricing: Free tier (750 instance-hrs/month, spins down after 15 min, free Postgres expires in 30 days); $7/month per always-on web service; $25/month flat Pro workspace (from April 2026)
---

# Render

**What it is:** Managed cloud platform for deploying and hosting web services, static sites, PostgreSQL databases, Redis instances, background workers, and cron jobs.

**Problem it solves:** Deploys a full-stack app with zero infrastructure configuration—push to GitHub and it's live with SSL, custom domains, and a managed database.

**When I'd reach for it:**
- Shipping a full-stack side project or MVP with a web server and PostgreSQL and no appetite for DevOps overhead
- When Railway's resource-based billing feels unpredictable and you want a flat $25/month workspace fee
- Hosting a background worker or cron job alongside a web service under one billing account

**When I wouldn't:** When your service can't tolerate 30–60 second cold starts on the free tier (upgrade to the $7/month always-on tier or switch platforms); when you need VPC networking, cross-region failover, or raw compute access; when you're already happy on Vercel or Railway.

**Pricing posture:** Free tier with meaningful limits—services spin down after 15 minutes of inactivity with a 30–60 second cold-start penalty, free Postgres expires after 30 days, and free RAM is 512 MB. Always-on web services start at $7/month. As of April 2026, Pro is a flat $25/month per workspace (no per-seat fees), and Scale is $499/month.

**Reality check:** Long-standing, established platform with broad language support (Node, Python, Go, Rust, Ruby, Elixir) and a reputation as a reliable Heroku successor. The April 2026 pricing restructure removed per-seat fees, making Pro more predictable for small teams. Main gotcha is the free-tier cold-start delay: 30–60 seconds on the first request after 15 minutes of inactivity is unsuitable for any customer-facing service without the $7/month always-on add-on. Bandwidth dropped to 5 GB/month free (100 GB on Pro) with $0.15/GB overage. Community positions it alongside Railway and Fly.io in the "Heroku successor" tier; Railway wins on DX, Render wins on pricing predictability.

**Links:**
- [Homepage](https://render.com)
- [Pricing](https://render.com/pricing)
- [Docs](https://docs.render.com)

**Last researched:** 2026-08-10
