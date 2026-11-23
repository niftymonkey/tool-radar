---
name: CopilotKit
problem-areas:
  - ui-components
  - ai-agent-infra
ring: assess
ring-reasoning: Free-forever tier for a single developer seat (up to 50 MAU), MIT-licensed core free to self-host, and self-serve sign-up; 34K+ GitHub stars and a $27M Series A (May 2026). AG-UI adopted by Google, Microsoft, Amazon, Oracle, LangChain, and PydanticAI. Assess for any React app that needs an embedded AI assistant or agent UI.
summary: "Open-source React SDK for adding in-app AI copilot UIs — chat panels, assistants, and human-in-the-loop interfaces — to an existing React application."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-08
last-researched: 2026-11-23
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

**Pricing posture:** Core framework is MIT-licensed and free to self-host. Hosted Developer tier is free forever for one seat (up to 50 monthly active users). Pro is $39/user/month for up to 5 seats; Team is $500/month flat (5 seats included); Enterprise is quote-based. For a side project, self-hosting with your own LLM key costs nothing beyond inference.

**Reality check:** 34,000+ GitHub stars, a $27M Series A in May 2026, and stated Fortune 500 production use. AG-UI — the open protocol for agent-UI communication — has been adopted by Google, Microsoft, Amazon, Oracle, LangChain, Mastra, PydanticAI, and Agno, giving the abstraction real ecosystem momentum. The Channels SDK (launched August 2026, beta) extends copilot UIs to Slack, Microsoft Teams, Discord, and Google Chat. CopilotKit Enterprise Intelligence (self-hostable) launched alongside the Series A for production agent deployments. The free tier (1 seat, 50 MAU) is genuinely useful for side projects. Primary gotcha: the SDK opinionates heavily on state management and its event protocol; an agent backend that deviates from LangGraph's graph model means fighting the abstractions. Set cost guardrails before exposing a copilot to real traffic. Alternatives: the Vercel AI SDK (lower-level, more flexible) and Mastra (agent runtime with built-in memory and tools).

**Links:**
- [Homepage](https://www.copilotkit.ai)
- [GitHub](https://github.com/CopilotKit/CopilotKit)
- [Pricing](https://www.copilotkit.ai/pricing)
- [Docs](https://docs.copilotkit.ai)

**Last researched:** 2026-11-23
