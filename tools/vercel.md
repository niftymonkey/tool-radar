---
name: Vercel
problem-areas: [hosting-deploy, ci-cd, media-optimization]
ring: adopt
ring-reasoning: "In active use as my default hosting and deploy platform across my own projects."
summary: "Frontend cloud platform that builds and deploys web apps from a Git push, with deep Next.js integration, a global edge network, and preview deployments."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-10-05
managed: auto
homepage: https://vercel.com
pricing: https://vercel.com/pricing
---

# Vercel

**What it is:** A frontend cloud platform that builds and deploys web apps from a Git push, with deep Next.js integration, a global edge network, preview deployments, and serverless and edge functions.

**Problem it solves:** Gets a Next.js or React app from repo to a fast global URL in one command, with zero infrastructure setup and a preview deploy for every pull request.

**When I'd reach for it:**

- A Next.js side project where I want framework-native features like ISR, image optimization, and edge functions to just work.
- A frontend app where per-PR preview deployments make reviewing changes easy.
- A prototype where the fastest possible first deploy matters more than long-term cost.

**When I wouldn't:**

- A high-traffic public site where bandwidth overages and the lack of a hard spending cap are a real financial risk.
- An app that needs persistent servers, background workers, or native cron, which belong on a platform like Railway.

**Pricing posture:** Free Hobby tier for personal projects. Pro is $20/month per developer seat with $20 of included usage, then uncapped pay-as-you-go; viewer seats are free.

**Reality check:** The DX remains best in class for Next.js. As of 2026, Vercel has introduced a default on-demand spend threshold (~$200 for new teams) that triggers an alert before further charges, but this is a soft alert, not a hard cap — you cannot prevent spending beyond it. Vercel has repriced four times since 2024. Bandwidth overage at $0.15/GB still applies to all served traffic including DDoS attacks: documented community cases include a $23,000 DDoS bill and $3,200 attack-traffic invoice. The advice to set a spending alert rather than a spending cap is well-intentioned but insufficient for worst-case scenarios. Heavy use of Vercel-specific storage (KV, Blob, Postgres) deepens lock-in. Multiple repricings since 2024 are a pattern worth tracking for long-term cost planning.

**Links:** [Homepage](https://vercel.com) and [Pricing](https://vercel.com/pricing)

**Last researched:** 2026-10-05
