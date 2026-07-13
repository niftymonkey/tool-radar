---
name: Render
problem-areas: [hosting-deploy]
ring: assess
ring-reasoning: "Free tier with 750 instance-hours per month (with spin-down) and paid web services from $7/month; fully self-serve; instance-based pricing is predictable and transparent."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-07-13
last-researched: 2026-07-13
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A cloud application hosting platform for deploying web services, static sites, background workers, cron jobs, and managed databases via Git-push with zero server management.

**Problem it solves:** Lets a solo developer ship and run a production web service without touching servers, load balancers, or deployment scripts—deploy on git push, get HTTPS and health checks for free.

**When I'd reach for it:**

- Deploying a Node, Python, Ruby, Go, or Docker service and wanting zero ops overhead with predictable monthly billing.
- Side projects that need always-on uptime without paying AWS-level complexity—a $7/month Render service is genuinely always-on, no cold-start surprise.
- Needing a managed Postgres or Redis alongside the app, provisioned and backed up in the same dashboard.

**When I wouldn't:**

- Serverless or function-based workloads—Render does not support Lambda-style functions; that's a recurring top feature request with no ETA.
- Free-tier experiments where 15-minute spin-down is a dealbreaker and you need the service to respond instantly; Railway or Fly.io free tiers behave differently.
- Global edge or multi-region setups—Render's architecture is single-region; for low-latency globally distributed apps, Fly.io is more suited.

**Pricing posture:** Free tier: 750 instance-hours/month with spin-down after 15 minutes of inactivity; free Postgres databases expire after 30 days. Paid web services start at $7/month (512 MB RAM, 0.5 vCPU), always-on. Bandwidth is metered at published rates.

**Reality check:** Community sentiment is broadly positive for the developer experience—five-minute deploys, clean dashboard, zero-surprise billing. The 2024 removal of the perpetual free compute tier (replaced by 750 hours/month with spin-down) was controversial and lost goodwill with hobbyists. The spin-down on free services takes ~60 seconds to restart, making free-tier APIs unreliable for anything production-adjacent. Against Railway, Render's instance-based pricing wins on predictability for steady traffic; Railway's usage-based billing is cheaper for bursty or low-traffic apps. Render does not support serverless functions, which is a real gap for event-driven patterns.

**Links:** [Homepage](https://render.com) and [Pricing](https://render.com/pricing)

**Last researched:** 2026-07-13
