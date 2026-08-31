---
name: Devin
problem-areas:
  - ai-coding-agents
ring: assess
ring-reasoning: A free tier plus a $20/month individual plan (right at the threshold) make it self-serve and fully evaluable on a solo project. Cognition's ARR grew from $1M to $73M in the nine months after the price cut, indicating real adoption, but success on complex tasks still falls short of senior-engineer level. Worth knowing and trying on well-scoped work.
summary: "Autonomous AI software engineer from Cognition that takes a task description, reads your codebase, implements a solution, runs tests, and opens a pull request."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-08
last-researched: 2026-08-17
managed: auto
homepage: https://devin.ai
pricing: https://devin.ai/pricing
---

# Devin

**What it is:** An autonomous AI software engineer from Cognition that takes a task description, reads your codebase, implements a solution, runs tests, and opens a pull request.

**Problem it solves:** Offloads complete, well-scoped development tasks so you review rather than implement, freeing your attention for design and higher-stakes decisions on a solo project.

**When I'd reach for it:**

- Implementing a well-scoped bug fix or small feature described in a GitHub issue.
- Repetitive implementation work such as adding CRUD endpoints, writing tests, or updating configuration.
- When I want a pull request to review rather than one to write from scratch.

**When I wouldn't:**

- Open-ended architectural work where judgment calls matter, or changes spanning multiple systems.
- Any workflow needing near-instant feedback — this is not an autocomplete tool — or where understanding the code deeply matters more than delegating the change.

**Pricing posture:** Free plan available; Pro is $20/month (Devin 2.0, launched late 2025, a 96% price cut from the original $500). All active work is billed in ACUs — Agentic Computing Units, each representing approximately 15 minutes of active autonomous work (model inference, VM time, and networking combined) — at $2.25/ACU on the Pro plan. Max is $200/month with a higher included ACU quota. Teams is $80/month plus $40/seat. Enterprise is custom. The $20 headline is a floor: real spend tracks ACU consumption, which dominates budget for any sustained use.

**Reality check:** Cognition's ARR grew from $1M to $73M in the nine months following the Devin 2.0 price cut, a strong adoption signal. Community consensus is consistent: it performs well on well-scoped, specific tasks and struggles on open-ended or multi-system changes requiring deep judgment, with independent benchmark success rates on complex tasks far below the marketing narrative. Task latency is minutes to hours rather than seconds, so it complements rather than replaces in-the-loop tools like Cursor or Claude Code. ACU billing is the key budget variable: 1 ACU is approximately 15 minutes of active autonomous work at $2.25/ACU on the Pro plan; a multi-hour task can cost $10–30 in ACUs before the $20 subscription fee is a rounding error. Noted gotcha: Devin goes quiet on ambiguous tasks, and specifying acceptance criteria upfront dramatically improves results. Comparable to Factory and Augment Code in the autonomous-PR category.

**Links:**
- [Homepage](https://devin.ai)
- [Pricing](https://devin.ai/pricing)

**Last researched:** 2026-08-10
