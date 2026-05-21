---
name: Vercel
problem-areas: [hosting-deploy, ci-cd, media-optimization]
ring: adopt
ring-reasoning: "In active use as my default hosting and deploy platform across my own projects."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
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

**Reality check:** The DX is best in class for Next.js, but the 2026 community story shifted from praise to billing horror stories. Vercel charges for all traffic including DDoS attacks, has no hard spending limit, and bandwidth overage at roughly $0.15/GB has produced $400 to $1,200 invoices on plans expected to cost $20, plus a reported $23,000 DDoS bill. Heavy use of Vercel-specific storage also creates real lock-in.

**Links:** [Homepage](https://vercel.com) and [Pricing](https://vercel.com/pricing)

**Last researched:** 2026-05-21
