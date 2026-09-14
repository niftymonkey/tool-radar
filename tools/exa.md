---
name: Exa
problem-areas: [ai-web-data, ai-apis, ai-agent-infra]
ring: assess
ring-reasoning: "Free 1,000 requests per month plus $10 monthly credits, usage-based pricing from $7 per 1k searches, and self-serve signup make it easy to evaluate for an agent side project without any sales contact."
summary: "AI-native web search API that returns semantically relevant pages, token-efficient content excerpts, and structured JSON, built for LLMs and agents."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-14
managed: auto
homepage: https://exa.ai
pricing: https://exa.ai/pricing
---

# Exa

**What it is:** An AI-native web search API that returns semantically relevant pages, token-efficient content excerpts, and structured JSON, built for LLMs and agents — with Websets for data enrichment and exa-research agents for multi-step web research.

**Problem it solves:** Gives a side-project AI agent fast web grounding and content discovery through one API call, with a Highlights feature that strips pages down to the relevant excerpt and cuts LLM token spend.

**When I'd reach for it:**

- Adding RAG or web grounding to an LLM app without building a scraper or search stack.
- Concept-driven discovery where semantic search beats keyword matching, like finding similar articles or companies.
- Agents that need structured company or research-paper data returned as clean JSON; Cognition uses Exa for all web access in the Devin agent.

**When I wouldn't:**

- Price tracking or anything needing live, hyper-recent data: Exa's proprietary index is freshness-controlled but still lags vs. Google on breaking news.
- When I need Google SERP features like shopping carousels, local packs, or knowledge graphs.

**Pricing posture:** Free tier: 1,000 requests/month plus $10 monthly credits on signup; paid usage-based: Search $7/1K requests, Deep Search $12/1K, Answer $5/1K, Contents $1/1K pages; exa-research agent at $5/1K searches + $5–10/1K pages read; Websets from $49/month.

**Reality check:** Exa indexes 500+ billion URLs using neural search (embeddings + neural ranker, not keyword matching), which returns cleaner results for concept queries than SERP scraping. Named enterprise adoption (Cognition/Devin, HubSpot for lead enrichment) validates production-readiness despite limited G2 reviews. Base search price rose from $5 to $7/1K requests between 2025 and 2026. Known gotchas: proprietary index is smaller than Google/Bing on niche topics; date filter behavior has been reported unreliable; per-call pricing climbs fast under agentic loops, so caching and result limiting are essential.

**Links:** [Homepage](https://exa.ai) and [Pricing](https://exa.ai/pricing)

**Last researched:** 2026-09-14
