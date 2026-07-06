---
name: Devin
problem-areas: [ai-coding-agents]
ring: assess
ring-reasoning: "Core plan is $20/month with self-serve signup and developer-facing docs; no free tier, but $20 is at the rubric threshold and the autonomous-agent value is evaluable at small scale; ACU usage fees mean real spend can climb well above the floor."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-07-06
last-researched: 2026-07-06
managed: auto
homepage: https://devin.ai
pricing: https://devin.ai/pricing
---

# Devin

**What it is:** Devin is a fully autonomous AI software engineer by Cognition Labs that accepts a ticket, spins up its own VM, writes and tests code, and opens a pull request without requiring a human in the loop.

**Problem it solves:** Offloads well-scoped, repetitive engineering tasks—dependency upgrades, test backfill, migration scripts, boilerplate—so a solo developer can drain a defined backlog without hiring.

**When I'd reach for it:**

- Well-defined, bounded tickets where the spec is clear and the acceptance criteria are explicit.
- Backlog maintenance work: bumping dependencies, adding missing test coverage, running a codemod.
- Tasks you would delegate to a junior engineer: isolated, low-judgment, reviewable output.

**When I wouldn't:**

- Open-ended or judgment-heavy engineering, where independent benchmarks put success rates at 14-15%; it fails expensively on ambiguous work.
- Tight feedback-loop pairing sessions, where Claude Code or Cursor Agent are faster and cheaper.

**Pricing posture:** No free tier. Core is $20/month (platform access, then $2.25 per Agent Compute Unit, roughly one ACU per 15 minutes of active work). Team is $500/month and includes 250 ACUs at $2/each. Enterprise is custom.

**Reality check:** Multiple 2026 comparisons (Claude Code vs. Cursor vs. Devin) position Devin as a delegation layer, not a replacement for active pairing tools. The ACU model is transparent but easy to underestimate: modest use of 4-6 hours of agent time per month pushes actual spend to $40-80+ above the $20 floor. Community consensus is positive for repetitive, isolated tasks and consistently critical for anything requiring architectural judgment. The 2026 autonomy benchmark record (SWE-bench and equivalents) shows competitive but not dominant performance; Claude Code scores higher on complex multi-file tasks in head-to-head tests.

**Links:** [Homepage](https://devin.ai) and [Pricing](https://devin.ai/pricing)

**Last researched:** 2026-07-06
