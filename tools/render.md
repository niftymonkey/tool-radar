---
name: Render
problem-areas:
  - hosting-deploy
  - database
  - background-jobs
ring: assess
ring-reasoning: A real free tier (750 instance-hours/month), self-serve sign-up, and docs aimed squarely at individual developers; the April 2026 flat-rate Pro workspace at $25/month with no per-seat fees makes pricing predictable. Free-tier cold starts keep it short of adopt, but it is fully evaluable on a side project without spending anything.
summary: "Managed cloud platform for deploying web services, static sites, PostgreSQL databases, Redis instances, and background workers from a Git push."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-08
last-researched: 2026-11-23
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

**Pricing posture:** Free tier with meaningful limits — services spin down after 15 minutes of inactivity with a 30–60 second cold-start penalty, free PostgreSQL expires after 30 days, and free RAM is 512 MB. Always-on web services start at $7/month. As of April 2026, Pro is a flat $25/month per workspace with no per-seat fees, and Scale is $499/month. Outbound bandwidth on the current (post-August 2026) workspace plans: 5 GB included on Hobby (free), 25 GB included on Pro; overage is $0.15/GB on both plans.

**Reality check:** A long-standing, established platform with broad language support (Node, Python, Go, Rust, Ruby, Elixir) and a reputation as a reliable Heroku successor. The April 2026 workspace restructure removed per-seat fees. All workspaces were migrated to the new plans by August 1, 2026. In August 2026, Render announced Workflows pricing changes and in October 2026 cut Key Value (Redis-compatible) prices. Render Sandboxes (beta, launched 2026) adds isolated microVMs for running agents and untrusted code — Pro workspaces can run sandboxes indefinitely. The main gotcha remains the free-tier cold start: 30–60 seconds after 15 minutes idle is unsuitable for customer-facing traffic without the $7/month always-on tier. Free PostgreSQL is hard-deleted at 30 days. The April 2026 bandwidth change cut included outbound significantly: Hobby includes 5 GB and Pro includes 25 GB, with overage at $0.15/GB on both. The community places it alongside Railway and Fly.io in the Heroku-successor tier: Railway wins on developer experience, Render on pricing predictability.

**Links:**
- [Homepage](https://render.com)
- [Pricing](https://render.com/pricing)
- [Docs](https://docs.render.com)

**Last researched:** 2026-11-23
