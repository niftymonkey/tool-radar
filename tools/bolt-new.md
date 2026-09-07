---
name: Bolt.new
problem-areas: [ai-coding-agents, hosting-deploy, dev-workflow]
ring: assess
ring-reasoning: "A real free tier and a $25 Pro plan with self-serve signup make it cheap to try, but a documented 31 percent success rate on complex apps and insecure backend defaults mean it cannot be trusted past prototypes."
summary: "In-browser AI full-stack app builder by StackBlitz that generates, runs, and deploys web apps from prompts inside WebContainers; Bolt V2 adds Bolt Cloud with databases, auth, and edge functions."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-07
managed: auto
homepage: https://bolt.new
pricing: https://bolt.new/pricing
---

# Bolt.new

**What it is:** An in-browser AI full-stack app builder by StackBlitz that generates, runs, and deploys web apps from natural-language prompts inside WebContainers, with no local setup. Bolt V2 (launched September 2025) added Bolt Cloud with built-in databases, auth, file storage, edge functions, and hosting.

**Problem it solves:** Turns a side-project idea into a clickable, deployed full-stack web app in an afternoon, with no terminal, IDE, or DevOps work.

**When I'd reach for it:**

- Spinning up an investor demo or user-testing prototype where speed to a working build is the whole point.
- Validating a project idea before committing real engineering time, while it stays under roughly 10K lines.
- Building an internal tool or dashboard for a handful of known users without enterprise security needs.

**When I wouldn't:**

- Anything with paying users, payments, or regulated data, where the generated backend still needs a hardening pass first.
- Long-running projects past initial validation, where token-based pricing inverts and every fix costs unrefundable tokens.

**Pricing posture:** Free tier with 1M monthly tokens (300K daily cap). Hobby is $20/month; Pro is $25/month with 10M tokens and no daily limit. Teams is $30/month per member. Credits reset monthly and do not roll over.

**Reality check:** Bolt V2 adds legitimate backend infrastructure (Bolt Cloud) and autonomous debugging that reportedly reduces error loops by 98%, narrowing the gap to production-grade tools. However, reviewers still report a quality cliff: the AI hallucinates signatures and regenerates working code, and Supabase tables generated in earlier workflows shipped with row-level security disabled by default. Token consumption is unpredictable and cost-spirals remain the top churn reason. The May 2026 Microsoft Azure partnership opens enterprise procurement and M365 integration. Treated as a prototyper it is excellent; evaluate Bolt Cloud's backend for production use case by case.

**Links:** [Homepage](https://bolt.new) and [Pricing](https://bolt.new/pricing)

**Last researched:** 2026-09-07
