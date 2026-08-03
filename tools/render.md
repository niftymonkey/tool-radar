---
name: Render
problem-areas: [hosting-deploy, database, background-jobs]
ring: assess
ring-reasoning: "Genuine free tier with no credit card, self-serve Git-push deploys, managed Postgres, and background workers; cold-start behavior on free instances limits real-user use cases but doesn't block evaluation."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-08-03
last-researched: 2026-08-03
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A cloud platform for deploying web services, static sites,
background workers, cron jobs, and managed PostgreSQL databases directly from
a Git repository with automatic builds on every push.

**Problem it solves:** For a solo developer who wants a backend always running
(no serverless cold-start budget math), Render handles the infrastructure
layer—servers, databases, workers, HTTPS—so you push code and get a live URL
without touching Docker, YAML, or cloud consoles.

**When I'd reach for it:**

- A full-stack side project that needs a persistent API server, a PostgreSQL
  database, and a background job queue in one place.
- Static site or documentation site that should stay free and always-on with
  no traffic-based spin-down.
- Migrating off Heroku with minimal friction; Render is the closest drop-in
  with modern infrastructure.

**When I wouldn't:**

- Free-tier APIs where cold starts matter: free web services spin down after
  15 minutes of inactivity and take 30–60 seconds to wake, which is a
  dealbreaker for user-facing endpoints.
- Short-term or bursty workloads where Railway's usage-based per-second
  billing is cheaper than Render's fixed-price tiers.
- Production apps requiring globally distributed edge compute or multi-region
  replication; Render's region selection is limited.

**Pricing posture:** Free tier: web services with 750 hours/month (spins down
on inactivity), 1 GB PostgreSQL (deleted after 30 days), no credit card
required, commercial use allowed. Paid starts at $7/month for a Starter web
service; the Individual plan is $19/month. Databases start at $7/month on paid
tiers with no expiry.

**Reality check:** Long-running platform with a track record back to 2019;
more conservative than Railway in terms of stability. Community in 2026 is
broadly positive about reliability on paid tiers, with the biggest gripes being
slower build times vs. Railway (1–3 minutes vs. 30–90 seconds) and degraded
customer support response times. The 30-day Postgres expiry on the free tier
catches developers by surprise—it is enforced automatically with no warning
email grace period in reported community accounts. For projects with real users,
the $7/month paid tier is the minimum viable plan to avoid cold starts and
database loss.

**Links:** [Homepage](https://render.com) and [Pricing](https://render.com/pricing)

**Last researched:** 2026-08-03
