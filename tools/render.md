---
name: Render
problem-areas:
  - hosting-deploy
ring: assess
ring-reasoning: >
  Genuine free tier for static sites, web services (with sleep after
  inactivity), and PostgreSQL. Self-serve with no sales call. Onboarding and
  docs are aimed squarely at individual developers. Full value is demonstrable
  on a side project without paying.
source: scraped
discovered-via: t3-sponsors
first-seen: "2026-06-29"
last-researched: "2026-06-29"
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A unified cloud platform for deploying web services, static sites, background workers, cron jobs, and PostgreSQL databases from Git with automatic deploys on every push.

**Problem it solves:** Gets you from git push to a live URL without managing servers—Heroku-style ergonomics with modern infrastructure, per-service pricing, and preview environments per pull request.

**When I'd reach for it:**
- Side projects and MVPs that need a Heroku-like workflow without Heroku's pricing surprises
- Full-stack apps where you want web service, background worker, cron job, and database on one platform under one dashboard
- Teams that benefit from automatic preview environments per PR and render.yaml Infrastructure-as-Code

**When I wouldn't:**
- Workloads that can't tolerate the free-tier sleep behavior (free web services spin down after 15 min inactivity)
- CLI-first developers—Render has no native CLI; everything goes through the dashboard or API
- Global multi-region deployments where Fly.io's edge network is a better fit

**Pricing posture:** Free tier for static sites, web services (sleeps after inactivity), and Postgres; paid web services from $7/month; workspace plan from $19/user/month charged on top of compute costs.

**Reality check:** Render is the consensus Heroku successor for indie developers and small teams in 2026. Community praise centers on its smooth DX, reliable uptime, and feature set (preview environments, Blueprints IaC, persistent disks, private networking). Gotchas: the dual-billing model—workspace fee plus per-service compute—can be a surprise when comparing to Railway's pure usage-based pricing; budget for both. Free web services cold-start slowly after sleep. No native CLI is a real gap for terminal-centric developers. Railway is the main alternative for usage-based pay-as-you-go; Fly.io wins for global distribution and scale-to-zero economics. Render is SOC 2 Type 2, HIPAA, ISO 27001, and GDPR compliant—a selling point for apps with compliance requirements.

**Links:**
- [Homepage](https://render.com)
- [Pricing](https://render.com/pricing)
- [Docs](https://render.com/docs)

**Last researched:** 2026-06-29
