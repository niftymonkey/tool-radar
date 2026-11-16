---
name: LiteLLM
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "Open-source Python proxy is free to self-host with no per-request fees; covers routing, fallbacks, and caching across 100+ providers without any paid tier for solo use."
summary: "Open-source Python library and proxy server that presents a unified OpenAI-compatible API across 100+ LLM providers, now at v1.104 with LiteAgents and a Rust rewrite underway."
pricing-note: "Free (open-source); enterprise at ~$30K/year"
source: manual
discovered-via: https://litellm.ai
first-seen: 2026-05-25
last-researched: 2026-10-05
managed: auto
homepage: https://litellm.ai
pricing: https://litellm.ai
---

# LiteLLM

**What it is:** An open-source Python library and proxy server that presents a unified OpenAI-compatible API across 100+ LLM providers, translating Anthropic, Bedrock, Azure, and others into a consistent format, with a LiteAgents framework added in 2026.

**Problem it solves:** Lets a solo developer switch between or combine LLM providers behind a single interface without rewriting call sites or managing provider-specific SDKs.

**When I'd reach for it:**

- When I want zero per-request overhead on LLM costs — at scale, avoiding a 5.5% gateway markup pays for infrastructure many times over.
- Building an internal proxy with custom routing rules: send code questions to one model and creative tasks to another based on prompt metadata.
- Privacy-first setups where I want full control over which data reaches which provider, auditable in open source.

**When I wouldn't:**

- When I don't want to own ops: LiteLLM in production means managing Docker, Redis for caching, and Postgres for logs — you are the on-call engineer.
- When I need SSO, RBAC, or team-level budget enforcement: those features are locked in the enterprise edition (~$30K/year on AWS Marketplace).
- TypeScript-first projects — the library is Python; the JS port exists but is less complete.

**Pricing posture:** Free and open-source; self-host on your own infrastructure (typically $200–$500/month at moderate traffic for the hosting itself); enterprise edition available on AWS Marketplace at approximately $30K/year.

**Reality check:** LiteLLM remains one of the most widely adopted open-source LLM routing libraries, now at v1.104.0 (October 2026) and adding day-one support for new models including Claude Opus 5.5 and GPT-6. In March 2026 a supply chain attack compromised PyPI packages v1.82.7 and v1.82.8 for approximately 40 minutes, exposing credentials in affected environments across 2,500+ organizations; the team responded with v1.83.0 and a hardened CI/CD v2 pipeline. The team announced a Rust rewrite underway for performance improvements (median time-to-first-byte dropped from 553ms to 35ms on a 440K-token benchmark after an early optimization). LiteAgents was introduced in 2026, allowing teams to swap agent harnesses without rewriting tools. The $30K enterprise paywall for SSO and RBAC remains the sharp boundary pushing teams toward managed alternatives. Portkey was acquired by Palo Alto Networks, making LiteLLM the primary independent open-source option.

**Links:** [Homepage](https://litellm.ai) and [GitHub](https://github.com/BerriAI/litellm)

**Last researched:** 2026-10-05
