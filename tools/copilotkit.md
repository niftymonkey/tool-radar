---
name: CopilotKit
problem-areas:
  - ui-components
  - ai-agent-infra
ring: assess
ring-reasoning: Free-forever tier for a single developer seat, MIT-licensed core that is free to self-host, and self-serve sign-up; 34k+ GitHub stars and a $27M Series A indicate real maturity. Assess for any React app that needs an embedded AI assistant or agent UI wired to an agent backend.
summary: "Open-source React SDK for adding in-app AI copilot UIs — chat panels, assistants, and human-in-the-loop interfaces — to an existing React application."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-08
last-researched: 2026-11-16
managed: auto
homepage: https://www.copilotkit.ai
pricing: https://www.copilotkit.ai/pricing
---

# CopilotKit

**What it is:** An open-source React SDK for adding in-app AI copilot UIs and agent frontends — chat panels, assistants, and human-in-the-loop interfaces — to an existing React application, published alongside the AG-UI protocol for frontend-to-agent communication.

**Problem it solves:** Wires an AI assistant or a LangGraph/LlamaIndex agent to your app's UI without building state management, streaming rendering, or conversation threading from scratch, turning days of plumbing into an afternoon of integration.

**When I'd reach for it:**

- Adding an in-app copilot to a React SaaS where the agent needs to read and mutate application state, not just reply with text.
- Connecting a LangGraph or LlamaIndex backend to a React frontend with human-in-the-loop controls (approve, reject, edit in flight).
- Prototyping a generative-UI feature where the agent returns structured components rather than prose.

**When I wouldn't:**

- Frontends outside CopilotKit's supported platform list. The hooks and components are built around React, and support beyond it has moved over time, so check the current list before committing a non-React stack.
- When a plain Vercel AI SDK chatbot component already covers the use case, or you only need a markdown-rendered LLM response box.

**Pricing posture:** Core framework is MIT-licensed and free to self-host, and the hosted Developer tier is free forever for one seat. Paid plans start at $39/month, rising to $100 per developer per month up to five seats; enterprise is quote-based. For a side project, self-hosting with your own LLM key costs nothing beyond inference.

**Reality check:** AG-UI 1.0 — a stable open spec for agent-to-UI communication — shipped in September 2026 with subagents, interrupts, multimodal tool results, and token usage, with reported backing from Google, Microsoft, Amazon, and Oracle. The v1.50 release introduced `useAgent`, a React hook that wraps the full AG-UI lifecycle in one API call. CopilotKit has also expanded beyond React: React Native support for AG-UI agents in mobile apps, and a Channels SDK that lets one agent address React, Slack, and Teams from a single wiring. GitHub star count is not firmly confirmed as of this research — sources range from ~14K (AG-UI repo specifically) to 35K+ (CopilotKit repo); check the repo directly for a current number. The free tier is genuinely useful for solo projects. Primary gotcha: the SDK opinionates heavily on state management and its event protocol, so an agent backend that deviates from LangGraph's graph model means fighting the abstractions; wiring memory, permissions, and multi-agent orchestration in a complex app takes real engineering beyond the base hooks. Because inference bills to your own provider key, set cost guardrails before exposing a copilot to real traffic. Alternatives: the Vercel AI SDK (lower-level, more flexible) and Mastra (agent runtime with built-in memory and tools).

**Links:**
- [Homepage](https://www.copilotkit.ai)
- [GitHub](https://github.com/CopilotKit/CopilotKit)
- [Pricing](https://www.copilotkit.ai/pricing)
- [Docs](https://docs.copilotkit.ai)

**Last researched:** 2026-11-16
