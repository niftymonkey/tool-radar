---
name: Voyage AI
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "First 200M tokens free on major models with pay-as-you-go from $0.02 per million tokens after that; self-serve API access with no subscription or sales call required."
source: manual
discovered-via: https://www.voyageai.com
first-seen: 2026-05-25
last-researched: 2026-05-25
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

- High-volume commodity embedding where cost per million tokens is the primary driver: Google's embedding API at $0.006/1M tokens is 30× cheaper than Voyage's premium model at $0.18/1M tokens.
- When vendor-neutral or self-hosted embeddings are required: Voyage is a managed SaaS with no self-host option.
- Benchmark claims should be verified independently — Voyage's RTEB numbers use Voyage models as baselines and have not been reproduced on the public MTEB leaderboard as of mid-2026.

**Pricing posture:** First 200M tokens free on major models (voyage-4, voyage-4-large, voyage-4-lite, voyage-code-3); pay-as-you-go from $0.02/1M tokens (voyage-4-lite) to $0.18/1M tokens (voyage-4-large); no subscription required.

**Reality check:** Acquired by MongoDB in late 2024, which raised questions about long-term independence, though the API has continued as a standalone product. Developer community feedback is positive on retrieval quality gains in real RAG workloads. The main caution is cost at scale: embedding 1B tokens costs $180 at Voyage versus $6 at Google text-embedding-004, making Voyage a quality-first choice rather than a cost-first one. The 200M free tokens are enough to embed a sizeable document corpus before any spend.

**Links:** [Homepage](https://www.voyageai.com) and [Pricing](https://docs.voyageai.com/docs/pricing)

**Last researched:** 2026-05-25
