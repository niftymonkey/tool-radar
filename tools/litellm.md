---
name: LiteLLM
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "Open-source Python proxy is free to self-host with no per-request fees; covers routing, fallbacks, and caching across 100+ providers without any paid tier for solo use."
source: manual
discovered-via: https://litellm.ai
first-seen: 2026-05-25
last-researched: 2026-05-25
managed: auto
homepage: https://litellm.ai
pricing: https://litellm.ai
---

# LiteLLM

**What it is:** An open-source Python library and proxy server that presents a unified OpenAI-compatible API across 100+ LLM providers, translating Anthropic, Bedrock, Azure, and others into a consistent format.

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

**Reality check:** Widely adopted in the open-source community; the GitHub repository is active and frequently referenced in LLM routing discussions. The main community complaint is ops complexity in production: Redis, Postgres, and the proxy process all need monitoring. The $30K enterprise paywall for SSO and RBAC is frequently cited as a sharp boundary that pushes mid-size teams toward managed alternatives like Portkey or OpenRouter. Compared to those services, LiteLLM wins on cost at scale and data sovereignty but loses on setup speed and managed reliability.

**Links:** [Homepage](https://litellm.ai) and [GitHub](https://github.com/BerriAI/litellm)

**Last researched:** 2026-05-25
