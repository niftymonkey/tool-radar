---
name: Voyage AI
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "First 200M tokens free on major models with pay-as-you-go from $0.02 per million tokens after that; self-serve API access with no subscription or sales call required."
summary: "Specialized text embedding API with a 32K-token context window, domain-specific variants (code, legal, finance), and multimodal support optimized for retrieval accuracy."
source: manual
discovered-via: https://www.voyageai.com
first-seen: 2026-05-25
last-researched: 2026-11-23
managed: auto
homepage: https://www.voyageai.com
pricing: https://docs.voyageai.com/docs/pricing
---

# Voyage AI

**What it is:** A specialized text embedding API with models tuned for retrieval accuracy, featuring a 32K-token context window, domain-specific variants (code, legal, finance), and multimodal support.

**Problem it solves:** Lets a solo developer get higher retrieval quality in a RAG pipeline by using embeddings trained specifically for semantic search rather than general-purpose token prediction.

**When I'd reach for it:**

- When retrieval quality directly affects user-facing results — Voyage consistently leads MTEB benchmarks on retrieval-specific tasks.
- Long-document RAG: the 32K-token context window lets an entire research paper or contract embed in a single call.
- Domain-specific retrieval: voyage-code-3, voyage-finance-2, and voyage-law-2 are fine-tuned for those verticals and add measurable benchmark points over general models.

**When I wouldn't:**

- High-volume commodity embedding where cost per million tokens is the primary driver: Google's embedding API at $0.006/1M tokens is roughly 10× cheaper than voyage-4 at $0.06/1M tokens.
- When vendor-neutral or self-hosted embeddings are required: Voyage is a managed SaaS with no self-host option.
- Benchmark claims should be verified independently against the public MTEB leaderboard.

**Pricing posture:** First 200M tokens free on major models (free credits do not apply to Batch API — Batch tokens are billed even when free credits remain); pay-as-you-go from $0.02/1M tokens (voyage-4-lite) to $0.12/1M tokens (voyage-4-large); voyage-4 at $0.06/1M tokens. 33% Batch API discount off pay-as-you-go rates. No subscription required. Reranker models from $0.02–$0.05/1M tokens.

**Reality check:** MongoDB completed the acquisition of Voyage AI in February 2025 for approximately $220M. The standalone Voyage API has continued operating as Phase 1 of the integration, with the same per-token rates and 200M free-token allowance intact. MongoDB's roadmap includes automatic embeddings in Atlas and native reranking. Developer community feedback is positive on retrieval quality gains in real RAG workloads. The voyage-4 model series (voyage-4, voyage-4-large, voyage-4-lite) is the current generation. The main caution is cost at scale: voyage-4 at $0.06/1M tokens is roughly 10× Google text-embedding-004 ($0.006/1M), making Voyage a quality-first choice. The 200M free tokens are enough to embed a sizeable document corpus before any spend.

**Links:** [Homepage](https://www.voyageai.com) and [Pricing](https://docs.voyageai.com/docs/pricing)

**Last researched:** 2026-11-23
