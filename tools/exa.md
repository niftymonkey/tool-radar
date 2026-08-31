---
name: Exa
problem-areas: [ai-web-data, ai-apis, ai-agent-infra]
ring: assess
ring-reasoning: "Free 1,000 requests per month, usage-based pricing from $7 per 1k searches, and self-serve signup make it easy to evaluate for an agent side project without any sales contact."
summary: "AI-native web search API that returns semantically relevant pages, token-efficient content excerpts, and structured JSON, built for LLMs and agents."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://exa.ai
pricing: https://exa.ai/pricing
---

# Exa

**What it is:** An AI-native web search API that returns semantically relevant pages, token-efficient content excerpts, and structured JSON, built for LLMs and agents rather than human browsers.

**Problem it solves:** Gives a side-project AI agent fast web grounding and content discovery through one API call, with a Highlights feature that strips pages down to the relevant excerpt and cuts LLM token spend.

**When I'd reach for it:**

- Adding RAG or web grounding to an LLM app without building a scraper or search stack.
- Concept-driven discovery where semantic search beats keyword matching, like finding similar articles or companies.
- Agents that need structured company or research-paper data returned as clean JSON.

**When I wouldn't:**

- Price tracking or anything needing live, hyper-recent data, since Exa queries its own index that can lag.
- When I need Google SERP features like shopping carousels, local packs, or knowledge graphs.

**Pricing posture:** Free tier covers 1,000 requests per month. Paid is usage-based with no per-seat cost: Search is $7 per 1k requests, Contents is $1 per 1k pages, Deep Search runs $12 to $15 per 1k.

**Reality check:** Reviews flag that the proprietary index can serve stale results for time-sensitive queries and is smaller than Google or Bing on niche topics, and one developer documented Exa removing its /research endpoint and silently ignoring date filters. Per-call pricing can climb fast under load, so aggressive caching is expected. Compared to Tavily, Brave Search, or SerpApi, Exa wins on semantic retrieval but loses on real-time and local data.

**Links:** [Homepage](https://exa.ai) and [Pricing](https://exa.ai/pricing)

**Last researched:** 2026-05-21
