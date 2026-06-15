---
name: Render
problem-areas: [hosting-deploy, database, background-jobs]
ring: assess
ring-reasoning: "Permanent free tier for static sites, self-serve signup, and predictable flat pricing starting at $7/month for web services; no sales wall and clear solo-developer fit."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-15
last-researched: 2026-06-15
managed: auto
homepage: https://render.com
pricing: https://render.com/pricing
---

# Render

**What it is:** A cloud hosting platform that deploys web services, static
sites, background workers, cron jobs, and managed Postgres databases from a
Git push, with flat monthly pricing.

**Problem it solves:** Getting a full backend (app server, database, workers)
deployed without Dockerfiles, YAML, or infrastructure expertise, and knowing
exactly what it costs each month with no usage-based billing surprises.

**When I'd reach for it:**

- Static sites or marketing pages that need permanent zero-cost hosting.
- Side projects where predictable monthly spend matters more than per-second
  billing efficiency.
- Replacing Heroku with a like-for-like experience at lower cost.

**When I wouldn't:**

- Services with real user traffic where cold starts matter: free-tier web
  services spin down after 15 minutes of inactivity and take 30–60 seconds
  to wake — pay at least $7/month to keep them warm.
- Multi-region or globally distributed apps; Render has limited geographic
  coverage compared to Fly.io.
- Prototyping with throwaway Postgres: free databases are deleted after 30
  days.

**Pricing posture:** Static sites are free permanently. Web services start at
$7/month (Starter, always-on). Managed Postgres starts at $7/month. Standard
web service tier is $25/month. No free tier for persistent web services.

**Reality check:** Well-regarded for its Heroku-like simplicity and
predictable pricing, and consistently recommended for solo developers who
want to avoid usage-based billing surprises (contrast with Railway's
variable-billing model). Competitors Railway and Fly.io are cited as offering
better developer experience and global coverage respectively, but only Render
maintains a permanent free tier for static sites in 2026. Customer support
responsiveness is a recurring complaint in community reviews.

**Links:** [Homepage](https://render.com) and [Pricing](https://render.com/pricing)

**Last researched:** 2026-06-15
