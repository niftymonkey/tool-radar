---
name: Render
problem-areas: [hosting-deploy, database]
ring: assess
ring-reasoning: "Generous free tier (750 web service hours/month, free static sites, no credit card required) and predictable per-service pricing starting at $7/month cover the full side-project lifecycle; needs actual hosting experience before recommending over Railway or Vercel for a given workload."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-07-27
last-researched: 2026-07-27
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A cloud hosting platform that deploys web services, static sites, background workers, cron jobs, PostgreSQL, and Redis from a Git push, with automatic TLS, a global CDN, and per-service pricing.

**Problem it solves:** Gets a backend, database, and static frontend from a repo to a live URL with no infrastructure management, as a predictable alternative to AWS and without per-seat charges, serving the full stack a solo SaaS project needs in one dashboard.

**When I'd reach for it:**

- A persistent always-on web service or API that needs a co-located Postgres database — free tier handles the prototype, paid tiers handle growth.
- Static site hosting as a free alternative to Vercel/Netlify with no bandwidth limits on static assets.
- Replacing Heroku: Render's interface and deployment model closely mirror Heroku's, making migration straightforward.

**When I wouldn't:**

- When Railway's usage-based billing would be cheaper for intermittent or low-traffic apps that spend most of their time idle.
- When Vercel's edge network, image optimization, and preview deployments are specifically needed for a Next.js app.
- Global low-latency: Render has limited regions with no BYOC option, forcing single-region deployments unless you pay for higher tiers.

**Pricing posture:** Hobby workspace free; Pro workspace $25/month (April 2026: dropped per-seat fees). Web service instances separate: free (512 MB RAM, sleeps after 15 min), Starter $7/month, Standard $25/month. Postgres: free 1 GB instance expires after 30 days; Basic at $20/month is the minimum for always-on production. 750 free web service instance-hours per workspace per month.

**Reality check:** Positioned as the predictable mid-point between Vercel (frontend-optimized, expensive at scale) and Railway (usage-based, risk of runaway costs). No per-seat fees since April 2026 helps teams. The free PostgreSQL tier's 30-day expiry is a common gotcha — prototypes that survive past a month need to upgrade or migrate. Documentation gaps and slower support response times are recurring complaints. Infrastructure visibility is limited, which complicates debugging production issues. Solid choice for always-on services where Railway's bursty billing model creates unpredictability.

**Links:** [Homepage](https://render.com) and [Pricing](https://render.com/pricing)

**Last researched:** 2026-07-27
