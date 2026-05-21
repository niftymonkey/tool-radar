---
name: Kilo Code
problem-areas: [ai-coding-agents, dev-workflow]
ring: assess
ring-reasoning: "The extension is free and open source with optional BYOK or a $19 credit plan, all self-serve, and it delivers full value to an individual developer at small scale."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://kilo.ai
pricing: https://kilo.ai/pricing
---

# Kilo Code

**What it is:** An open-source AI coding agent (forked from the Cline and Roo lineage) that runs inside VS Code, JetBrains, and a CLI, with 500-plus models, zero-markup pricing, and specialized Architect, Code, Debug, and Orchestrator modes.

**Problem it solves:** Gives a solo developer agentic AI inside their existing editor without a subscription or IDE switch, billed at exact provider API rates so light use can cost only a few dollars a month.

**When I'd reach for it:**

- Wanting agentic coding in a current VS Code or JetBrains setup without migrating to a forked IDE.
- Mixing cheap or local models for boilerplate with Claude or GPT-5 for hard reasoning, paying only for what runs.
- Inspecting exactly what context an agent sends, since the open-source code exposes every prompt.

**When I wouldn't:**

- Wanting a zero-decision, install-and-go tool, since Kilo needs more configuration than Cursor or Copilot.
- Relying on Orchestrator mode casually, since multi-agent runs burn tokens far faster than single-agent work.

**Pricing posture:** Extension is free and open source under Apache-2.0. Bring your own API keys at no markup, or buy Kilo Pass credits from $19/month. Teams is $15/user/month.

**Reality check:** Reviewers praise model freedom and prompt transparency but flag a smaller community than Cline (roughly 9.5K versus 59K GitHub stars), feature sprawl across voice, cloud agents, and Slack, and a recent extension rebuild some long-time users find less transparent. Users report intermittent "API Request Failed" errors and subpar autocomplete. The Cline-fork lineage also draws ongoing community criticism over heavy marketing relative to upstream contribution.

**Links:** [Homepage](https://kilo.ai) and [Pricing](https://kilo.ai/pricing)

**Last researched:** 2026-05-21
