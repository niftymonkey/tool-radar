---
name: Portkey
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "Free Dev plan covers 10K logged requests per month with self-serve signup; gateway went fully MIT open-source in March 2026; short-term pricing unchanged after Palo Alto Networks acquisition but enterprise direction warrants watching."
summary: "AI gateway and observability control plane that routes requests to 250+ LLM providers with fallbacks, semantic caching, and per-request cost logging — acquired by Palo Alto Networks in May 2026."
source: manual
discovered-via: https://portkey.ai
first-seen: 2026-05-25
last-researched: 2026-10-05
managed: auto
homepage: https://portkey.ai
pricing: https://portkey.ai/pricing
---

# Portkey

**What it is:** An AI gateway and observability control plane that routes requests to 250+ LLM providers, logs every call with cost and latency data, and adds fallbacks, load balancing, semantic caching, and input/output guardrails; now part of Palo Alto Networks' Prisma AIRS platform.

**Problem it solves:** Gives a solo developer centralized visibility into LLM spend, latency, and errors across providers without instrumenting each API client separately.

**When I'd reach for it:**

- When I need to understand exactly which prompts are expensive and why — unified logs surface per-request cost and time-to-first-token.
- Adding automatic fallback from one model to another (e.g. Claude → GPT-4o) without rewriting call sites.
- Cutting LLM API costs through semantic caching that reuses responses for similar queries.
- Self-hosting the gateway: the MIT-licensed open-source gateway (March 2026) is now free to deploy with no vendor lock-in.

**When I wouldn't:**

- When logging overhead (50–80ms) is unacceptable in a latency-critical path.
- Long-term projects that need pricing and roadmap stability: Palo Alto Networks acquired Portkey for $140M in May 2026 and is integrating it into the enterprise Prisma AIRS platform — pricing and feature direction are likely to shift toward enterprise security buyers within 12–18 months.
- Small scripts where a single direct API call is simpler than adding middleware.

**Pricing posture:** Free Dev plan with 10K logged requests per month and 3-day log retention; Production at $49/month with 100K logs and 30-day retention; open-source MIT gateway is free to self-host.

**Reality check:** Palo Alto Networks acquired Portkey for $140M (announced April 30, closed May 29, 2026) and is integrating it into Prisma AIRS as an AI agent governance and security layer targeting enterprise buyers. Pricing remains unchanged as of October 2026, but enterprise direction is clear. On the positive side, Portkey released its unified gateway as fully MIT open-source in March 2026, making the self-host path more attractive. G2 reviewers consistently praise the SDK's developer experience and observability dashboard. Semantic caching is reported to cut costs 20–50% in practice. For solo developers who want a managed solution with active consumer-focused development, LiteLLM or the new open-source gateway self-hosted remain alternatives.

**Links:** [Homepage](https://portkey.ai), [Pricing](https://portkey.ai/pricing), and [Open-source gateway](https://github.com/Portkey-AI/gateway)

**Last researched:** 2026-10-05
