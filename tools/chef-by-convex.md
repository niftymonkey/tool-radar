---
name: Chef by Convex
problem-areas: [ai-coding-agents, backend-platform, hosting-deploy]
ring: assess
ring-reasoning: "A generous free tier and a $25 per-developer Pro plan with self-serve signup make it easy to evaluate, and value shows at small scale, but generated code still needs manual cleanup before it is production-ready."
summary: "AI app builder that generates full-stack web apps from prompts, wiring a React and Tailwind frontend to a Convex backend with database, auth, and real-time UIs."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-07
managed: auto
homepage: https://chef.convex.dev
pricing: https://www.convex.dev/pricing
---

# Chef by Convex

**What it is:** An open-source AI app builder that generates full-stack web apps from prompts, wiring a React and Tailwind frontend to a Convex backend with database, auth, file uploads, real-time UIs, and background workflows.

**Problem it solves:** Lets a solo builder ship a genuinely full-stack MVP, with working backend logic rather than just a UI shell, from a single prompt and with no deployment step.

**When I'd reach for it:**

- Building a real-time or multiplayer side project (chat, collaborative tool, simple game) where the backend is the hard part.
- Hackathons and MVPs where a runnable, hosted app with auth and a database beats a frontend-only mockup.
- Prototyping when you already plan to stay on Convex, since the output is a normal Convex project you can keep developing.

**When I wouldn't:**

- Projects needing pixel-precise or non-Tailwind UI, since styling control is limited.
- Anything that must ship without a code review, since generated code often leans on `any` and needs type cleanup.

**Pricing posture:** Generous free tier (up to 6 developers, 20 projects, 85,000 Chef AI tokens/month). Professional is $25 per developer/month with higher token and resource limits. Business pricing starts at a $2,500 monthly minimum.

**Reality check:** Hands-on reviews rate it among the few AI builders that actually deliver a working full-stack app, crediting Convex's type-safe APIs and error feedback loop for code correctness. Caveats are consistent: UI customization is mostly Tailwind, generated code often needs cleanup around types and `ts-ignore`, and complex features like pagination need step-by-step prompting. Backend lock-in to Convex is the main strategic tradeoff. Strong for runnable prototypes, expect manual polish before production.

**Links:** [Homepage](https://chef.convex.dev) and [Pricing](https://www.convex.dev/pricing)

**Last researched:** 2026-09-07
