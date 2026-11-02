---
name: OpenRouter
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "18+ models available free with no credit card required, pay-as-you-go with no monthly minimum, and a single OpenAI-compatible endpoint make it safe to evaluate without any commitment."
summary: "Unified API gateway that routes requests to 400+ AI models from 70+ providers through a single OpenAI-compatible endpoint, with response caching and Batch API added in 2026."
source: manual
discovered-via: https://openrouter.ai
first-seen: 2026-05-25
last-researched: 2026-10-05
managed: auto
homepage: https://openrouter.ai
pricing: https://openrouter.ai/pricing
---

# OpenRouter

**What it is:** A unified API gateway that routes requests to 400+ AI models from 70+ providers — Anthropic, OpenAI, Google, DeepSeek, Meta, Mistral, and more — through a single OpenAI-compatible endpoint.

**Problem it solves:** Lets a solo developer switch between or compare LLM providers without managing separate API keys and billing accounts for each one.

**When I'd reach for it:**

- Prototyping where I want to try many models quickly without signing up for separate accounts.
- Building an app that should fall back to a cheaper model automatically when the primary one is slow or down.
- Cost reduction through Batch API (September 2026): 70+ models now offer 50% off for 24-hour turnaround, suitable for offline processing.
- Accessing niche open-source models (DeepSeek, Mistral, NVIDIA) that would otherwise require separate setups.

**When I wouldn't:**

- Heavy Claude or GPT-4o usage: OpenRouter marks up premium models, so direct API access becomes mandatory once high-tier models exceed ~20% of workload.
- When latency matters at the millisecond level — OpenRouter adds 100–150ms of overhead versus calling providers directly.

**Pricing posture:** 18+ free models at no cost; pay-as-you-go credits with a 5.5% platform fee (minimum $0.80 per top-up); Batch API at 50% of standard per-token prices; response caching (April 2026) reuses identical repeat requests at zero token cost.

**Reality check:** Community reviews highlight the markup on premium models as the main gotcha — the convenience is real for prototyping but erodes margin in production. Independent latency tests show ~740ms round-trip vs ~620ms direct to the same provider. The absence of a public SLA is frequently noted. OpenRouter has expanded significantly since initial research: 400+ models (vs 300+ in May 2026), Batch API for 70+ models at half price, and response caching for identical repeat requests added in April 2026. BYOK changed in August 2026 — the allowance now uses list-price inference cost rather than request count. For solo projects testing many models, the unified billing is a genuine time-saver; at scale, migrating to direct provider SDKs is the common exit path.

**Links:** [Homepage](https://openrouter.ai) and [Pricing](https://openrouter.ai/pricing)

**Last researched:** 2026-10-05
