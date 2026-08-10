---
name: Render
problem-areas:
  - hosting-deploy
  - database
  - background-jobs
ring: assess
ring-reasoning: A real free tier (750 instance-hours/month), self-serve sign-up, and docs aimed squarely at individual developers; the April 2026 flat-rate Pro workspace at $25/month with no per-seat fees makes pricing predictable. Free-tier cold starts keep it short of adopt, but it is fully evaluable on a side project without spending anything.
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-08
last-researched: 2026-08-10
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A managed cloud platform for deploying web services, static sites, PostgreSQL databases, Redis instances, background workers, and cron jobs from a Git push.

**Problem it solves:** Deploys a full-stack app with zero infrastructure configuration — push to GitHub and it is live with SSL, custom domains, and a managed database attached.

**When I'd reach for it:**

- Shipping a full-stack side project or MVP with a web server and PostgreSQL, with no appetite for DevOps overhead.
- When per-usage billing elsewhere feels unpredictable and a flat $25/month workspace fee is easier to reason about.
- Hosting a background worker or cron job alongside a web service under one billing account.

**When I wouldn't:**

- When the service cannot tolerate 30–60 second cold starts on the free tier, and the $7/month always-on tier is not worth it.
- When you need VPC networking, cross-region failover, or raw compute access, or you are already happy on Vercel or Railway.

**Pricing posture:** Free tier with meaningful limits — services spin down after 15 minutes of inactivity with a 30–60 second cold-start penalty, free PostgreSQL expires after 30 days, and free RAM is 512 MB. Always-on web services start at $7/month. As of April 2026, Pro is a flat $25/month per workspace with no per-seat fees, and Scale is $499/month.

**Reality check:** A long-standing, established platform with broad language support (Node, Python, Go, Rust, Ruby, Elixir) and a reputation as a reliable Heroku successor, with no major platform outages reported in the preceding 12 months. The April 2026 pricing restructure removed per-seat fees, making Pro more predictable for small teams. The main gotcha is the free-tier cold start: 30–60 seconds on the first request after 15 minutes idle is unsuitable for anything customer-facing without the $7/month always-on tier. The second is data loss by expiry — free PostgreSQL is hard-deleted at 30 days, so treat it as scratch space only. Free bandwidth dropped to 5 GB/month (100 GB on Pro) with $0.15/GB overage in the same restructure. The community places it alongside Railway and Fly.io in the Heroku-successor tier: Railway wins on developer experience, Render on pricing predictability.

**Links:**
- [Homepage](https://render.com)
- [Pricing](https://render.com/pricing)
- [Docs](https://docs.render.com)

**Last researched:** 2026-08-10
