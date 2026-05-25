---
name: Portkey
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "Free Dev plan covers 10K logged requests per month with self-serve signup; the open-source gateway can also be self-hosted at zero per-request cost."
source: manual
discovered-via: https://portkey.ai
first-seen: 2026-05-25
last-researched: 2026-05-25
managed: auto
homepage: https://portkey.ai
pricing: https://portkey.ai/pricing
---

# Portkey

**What it is:** An AI gateway and observability control plane that routes requests to 250+ LLM providers, logs every call with cost and latency data, and adds fallbacks, load balancing, semantic caching, and input/output guardrails.

**Problem it solves:** Gives a solo developer centralized visibility into LLM spend, latency, and errors across providers without instrumenting each API client separately.

**When I'd reach for it:**

- When I need to understand exactly which prompts are expensive and why — unified logs surface per-request cost and time-to-first-token.
- Adding automatic fallback from one model to another (e.g. Claude → GPT-4o) without rewriting call sites.
- Cutting LLM API costs through semantic caching that reuses responses for similar queries.

**When I wouldn't:**

- When logging overhead (50–80ms) is unacceptable in a latency-critical path.
- When I need MCP support for agentic workflows — Portkey had limited MCP integration as of mid-2026.
- Small scripts where a single direct API call is simpler than adding middleware.

**Pricing posture:** Free Dev plan with 10K logged requests per month; Pro and Enterprise tiers priced on log volume; open-source gateway on GitHub is free to self-host with no per-request fees.

**Reality check:** G2 reviewers consistently praise the SDK's developer experience and the observability dashboard. The main complaint is that billing becomes hard to predict because you pay LLM providers separately and Portkey on top. Semantic caching is reported to cut costs 20–50% in practice. The open-source gateway (GitHub: Portkey-AI/gateway) is a credible self-host option for teams that want zero platform fees but must own the ops burden.

**Links:** [Homepage](https://portkey.ai), [Pricing](https://portkey.ai/pricing), and [Open-source gateway](https://github.com/Portkey-AI/gateway)

**Last researched:** 2026-05-25
