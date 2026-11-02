---
name: Zephyr Cloud
problem-areas: [hosting-deploy]
ring: assess
ring-reasoning: "A free Personal tier with 1,000 monthly deployments and self-serve signup fits an individual developer, but it is a niche platform not tried personally and most side projects never need micro-frontends."
summary: "Module Federation deployment platform that captures every bundler build as an immutable version and resolves micro-frontend dependencies automatically across CDN providers."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-10-12
managed: auto
homepage: https://zephyr-cloud.io
pricing: https://zephyr-cloud.io/pricing
---

# Zephyr Cloud

**What it is:** A Module Federation deployment platform, built by the creators of Module Federation, that captures every bundler build as an immutable version, deploys it to the edge in milliseconds, and resolves micro-frontend dependencies automatically across Cloudflare, AWS, Fastly, and other providers.

**Problem it solves:** Turns any build that runs on your machine into an instant edge URL with one line in the bundler config, so you can ship and roll back frontend or micro-frontend code without setting up CI pipelines or hosting.

**When I'd reach for it:**

- A frontend project where I want a fresh deployed preview URL on every build, without wiring up GitHub Actions.
- Composing pieces of an app from different teams' or versions' micro-frontends at runtime.
- React Native over-the-air updates managed from the same delivery layer as the web build.

**When I wouldn't:**

- A small solo app or MVP, where a monolith plus a normal host is simpler and micro-frontend orchestration is pure overhead.
- A first-load performance-critical marketing or e-commerce site, where federated bundles tend to ship more code than a monolith.

**Pricing posture:** The Personal tier is free with 1,000 deployments per month then $0.50 each. Team is $19/month per seat (up to 10 seats, 10,000 free deployments), Pro is $99/month per seat, and Enterprise is $99/month per seat with custom scale; annual billing saves 15 percent. (The pricing page was inaccessible during this research; verify current tiers at zephyr-cloud.io/pricing.)

**Reality check:** The deploy DX draws genuine praise: builds become edge URLs in roughly 150ms, promotions in around 80ms, a codemod handles wiring, and a Chrome extension can hot-swap a locally built micro-frontend into any environment including production. The company shipped The AI Platform (GA August 20, 2026) — a multi-agent workspace for teams — and Zephyr Skills (June 2026), portable agent skills for deployment and Module Federation setup; these are team-productivity features beyond the core deployment offering. The status page shows 100% uptime across app, edge, and API for July–October 2026. The honest caveat remains not the tool but the architecture it serves: 2026 community guidance is that micro-frontends are hard mode and most teams should default to a monolith, multi-zones, or an Nx monorepo. Zephyr also leans on Module Federation, whose Vite dev-mode HMR and Next.js App Router support are still maturing. Worth it only if you genuinely have the micro-frontend problem.

**Links:** [Homepage](https://zephyr-cloud.io) · [Pricing](https://zephyr-cloud.io/pricing) · [Changelog](https://zephyr-cloud.io/changelog)

**Last researched:** 2026-10-12
