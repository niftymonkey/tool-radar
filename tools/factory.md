---
name: Factory
problem-areas: [ai-coding-agents, dev-workflow]
ring: assess
ring-reasoning: "The $20 Pro tier is self-serve and individually priced, but no free tier plus an agent-delegation model that assumes solid CI and review discipline makes the value hard to feel on a casual side project."
summary: "Agent-native development platform whose autonomous Droids run real dev tasks (editing files, running commands, pushing changes) from the CLI, browser, Desktop app, and editor."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-14
managed: auto
homepage: https://factory.ai
pricing: https://factory.ai/pricing
---

# Factory

**What it is:** An agent-native development platform whose autonomous agents (Droids) run real dev tasks (editing files, running commands, pushing changes) from the CLI, browser, Desktop app, and editor, with Droid Computers providing managed cloud sandboxes on Plus/Max tiers.

**Problem it solves:** Lets you delegate a whole ticket to an agent that returns a finished implementation and a reviewable diff, instead of pair-typing with an autocomplete tool.

**When I'd reach for it:**

- Ticket-driven work wired through GitHub, Jira, or Linear that you want an agent to pick up and finish with the original issue, error traces, and design docs all in context.
- A project where specialised Droids (migration, test generation, docs, codebase modernization) each produce typed output the next agent consumes.
- Switching freely between Claude, GPT, and Gemini without changing tools.

**When I wouldn't:**

- A messy repo with weak tests and no review habit — Droids produce hallucinated logic and missed edge cases on vague prompts or fragile codebases.
- Quick in-editor assistance, where Factory's coordination overhead outweighs the benefit for trivial tasks.

**Pricing posture:** No free tier. Pro is $20/month, Plus is $100/month (adds Droid Computers), Max is $200/month; Teams and Enterprise are custom-priced.

**Reality check:** Factory raised a $150M Series C at a $1.5B valuation in April 2026 and launched a Desktop app the same month. The typed agent handoff architecture (diffs and structured output between Droids rather than loose conversational context) is a genuine differentiator for complex multi-step workflows. Known gotchas: rolling rate limits across 5-hour, weekly, and monthly windows can halt heavy agentic workloads; no free trial to evaluate before paying; coordination overhead is a poor fit for single-line fixes. Disciplined CI, testing, and review practices are prerequisites for reliable output.

**Links:** [Homepage](https://factory.ai) and [Pricing](https://factory.ai/pricing)

**Last researched:** 2026-09-14
