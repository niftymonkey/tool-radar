---
name: Bolt.new
problem-areas: [ai-coding-agents, hosting-deploy, dev-workflow]
ring: assess
ring-reasoning: "A real free tier and a $25 Pro plan with self-serve signup make it cheap to try, but a documented 31 percent success rate on complex apps and insecure backend defaults mean it cannot be trusted past prototypes."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://bolt.new
pricing: https://bolt.new/pricing
---

# Bolt.new

**What it is:** An in-browser AI full-stack app builder by StackBlitz that generates, runs, and deploys web apps from natural-language prompts inside WebContainers, with no local setup.

**Problem it solves:** Turns a side-project idea into a clickable, deployed full-stack web app in an afternoon, with no terminal, IDE, or DevOps work.

**When I'd reach for it:**

- Spinning up an investor demo or user-testing prototype where speed to a working build is the whole point.
- Validating a project idea before committing real engineering time, while it stays under roughly 10K lines.
- Building an internal tool or dashboard for a handful of known users without enterprise security needs.

**When I wouldn't:**

- Anything with paying users, payments, or regulated data, where the generated backend needs a hardening pass first.
- Long-running projects past initial validation, where token-based pricing inverts and every fix costs unrefundable tokens.

**Pricing posture:** Free tier with 300K daily and 1M monthly tokens. Pro is $25/month starting at 10M tokens. Teams is $30/month per member.

**Reality check:** Reviewers consistently report a quality cliff: success drops to roughly 31 percent past 90 minutes or 120K tokens, the AI hallucinates signatures and regenerates working code, and Supabase tables ship with row-level security disabled by default. Token consumption is unpredictable and cost-spirals are the top churn reason. Treated as a prototyper it is excellent, as a production tool it is not.

**Links:** [Homepage](https://bolt.new) and [Pricing](https://bolt.new/pricing)

**Last researched:** 2026-05-21
