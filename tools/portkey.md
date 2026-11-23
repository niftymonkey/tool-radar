---
name: Portkey
problem-areas: [ai-apis]
ring: hold
ring-reasoning: "Acquired by Palo Alto Networks (May 29, 2026, ~$117M) and folded into the Prisma AIRS enterprise AI security platform. Self-serve Developer (free) and Production ($49/month) plans still appear in docs, but portkey.ai/pricing redirects to the Palo Alto Networks AI Gateway contact form — new self-serve signup availability is unconfirmed. The open-source gateway remains MIT-licensed and free to self-host."
summary: "AI gateway and LLM observability control plane — now part of Palo Alto Networks' Prisma AIRS after a May 2026 acquisition. Self-serve plans (Developer free, Production $49/month) still in docs but pricing page redirects to PANW contact form; new signups unconfirmed. Open-source self-hosted gateway remains MIT-licensed."
source: manual
discovered-via: https://portkey.ai
first-seen: 2026-05-25
last-researched: 2026-11-23
managed: auto
homepage: https://portkey.ai
pricing: https://portkey.ai/pricing
---

# Portkey

**What it is:** An AI gateway and observability control plane that routes requests to 250+ LLM providers, logs every call with cost and latency data, and adds fallbacks, load balancing, semantic caching, and input/output guardrails.

**Problem it solves:** Gives centralized visibility into LLM spend, latency, and errors across providers without instrumenting each API client separately.

**When I'd reach for it:**

- Self-hosting the open-source gateway (Portkey-AI/gateway on GitHub, MIT-licensed) for LLM routing and observability at zero platform cost.
- If your organization is already a Palo Alto Networks Prisma AIRS customer and wants the managed AI gateway control plane integrated with AI security.

**When I wouldn't:**

- When you need a stable long-term solo-developer tool — portkey.ai/pricing redirects to the PANW AI Gateway contact form and new self-serve signup availability is unconfirmed, even though the plans are still listed in docs.
- When MCP gateway support or agentic observability is the primary need and you want a vendor in active indie-developer development; Helicone is a closer alternative at this scale.

**Pricing posture:** Plans listed in docs: Developer (free, 10K logs/month, 3-day retention) and Production ($49/month, additional charges per 100K requests). Enterprise is custom-quoted via Prisma AIRS. The open-source gateway (Portkey-AI/gateway) is MIT-licensed and free to self-host with no per-request fees. Important caveat: portkey.ai/pricing redirects to the Palo Alto Networks AI Gateway contact form — availability for new self-serve signups is unconfirmed as of this refresh.

**Reality check:** Palo Alto Networks completed its $117M acquisition of Portkey on May 29, 2026, with the product absorbed into Prisma AIRS as a core AI gateway and observability control plane alongside runtime security and agentic identity features. The strategic fit is enterprise AI security: routing every LLM and MCP tool call through a centralized gateway where security policies and cost guardrails apply. The managed product's self-serve plans (Developer free, Production $49/month) are still listed in the docs feature comparison, but portkey.ai/pricing now redirects to the Palo Alto Networks AI Gateway contact form — availability for new self-serve signups cannot be confirmed from this refresh. The stated strategic direction is enterprise AI security via Prisma AIRS. Prior to acquisition, Portkey earned strong G2 reviews for developer experience and semantic caching (20–50% reported cost reduction). The open-source self-hosted gateway (Portkey-AI/gateway) remains unaffected and is a credible option for anyone who wants LLM routing and basic observability without platform fees. For solo developers, Helicone (free tier up to 10K requests/month, self-serve) is the natural alternative.

**Links:**
- [Homepage](https://portkey.ai)
- [Open-source gateway](https://github.com/Portkey-AI/gateway)
- [Prisma AIRS announcement](https://www.paloaltonetworks.com/blog/ai-security/securing-and-governing-ai-agents-at-scale-through-a-unified-ai-gateway/)

**Last researched:** 2026-11-23
