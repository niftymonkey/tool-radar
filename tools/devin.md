---
name: Devin
problem-areas: [ai-coding-agents]
ring: assess
ring-reasoning: "Pro plan at $20/month with a limited free tier; self-serve signup; explicitly targeting individual developers after a 96% price cut from the original $500. ACU overage billing adds unpredictability for exploratory work."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-07-13
last-researched: 2026-07-13
managed: auto
homepage: https://devin.ai
pricing: https://devin.ai/pricing
---

# Devin

**What it is:** An autonomous AI software engineer (by Cognition AI) that takes a task description and independently writes code, runs tests, browses docs, and opens a pull request without developer hand-holding.

**Problem it solves:** Lets a solo developer offload well-scoped, repetitive engineering tasks—bug fixes, test writing, boilerplate, docs—to a background agent while staying focused on higher-level work.

**When I'd reach for it:**

- Grinding through a backlog of clearly scoped, self-contained tickets (bug fix with a reproduction step, adding unit tests, updating a dependency and fixing breaks).
- Tasks where the success criterion is unambiguous and a PR diff tells you whether it worked.
- Situations where you want to context-switch away and check the result later rather than pair with the AI in real time.

**When I wouldn't:**

- Complex architectural decisions, cross-cutting refactors, or features requiring deep domain context—Devin's performance degrades significantly when task scope is fuzzy.
- When ACU cost predictability matters: novel or exploratory work can burn ACUs in unexpected bursts, and the billing is per-compute-unit, not per-task.

**Pricing posture:** A limited free plan covers evaluation; Pro is $20/month with included ACUs and $2.25 per overage ACU (≈15 minutes of active agent work); Team is $500/month with 250 ACUs at $2.00 each; Enterprise is custom-priced.

**Reality check:** Independent benchmarks put Devin's bug-fix success rate at 78% on clearly scoped issues, and it was the only autonomous agent showing a sustained positive trend across a study of 7,156 PRs. Community consensus is that the quality of your task description is the single biggest variable—vague tickets produce vague PRs. Against Claude Code at a flat $20/month, Devin's autonomy premium is only worth it when the backlog is large and well-described; for a solo developer writing code alongside the AI, Cursor or Claude Code wins on cost-per-value. ACU billing becomes unpredictable on novel work where the agent debugs in circles before giving up.

**Links:** [Homepage](https://devin.ai) and [Pricing](https://devin.ai/pricing)

**Last researched:** 2026-07-13
