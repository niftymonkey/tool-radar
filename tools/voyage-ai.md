---
name: Voyage AI
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "First 200M tokens free on all Voyage 4 models with pay-as-you-go from $0.02/1M tokens after that; Batch API at 33% discount; self-serve API access with no subscription required."
summary: "Specialized text embedding API with the Voyage 4 family (January 2026), featuring MoE architecture, domain-specific models, and per-model pricing from $0.02 to $0.12/1M tokens."
source: manual
discovered-via: https://www.voyageai.com
first-seen: 2026-05-25
last-researched: 2026-10-05
managed: auto
homepage: https://www.voyageai.com
pricing: https://docs.voyageai.com/docs/pricing
---

# Voyage AI

**What it is:** A specialized text embedding API with the Voyage 4 model family (January 2026), featuring a Mixture of Experts (MoE) architecture, domain-specific variants (code, context, finance, law), and multimodal support tuned for retrieval accuracy.

**Problem it solves:** Lets a solo developer get higher retrieval quality in a RAG pipeline by using embeddings trained specifically for semantic search rather than general-purpose token prediction.

**When I'd reach for it:**

- When retrieval quality directly affects user-facing results — Voyage 4 leads MTEB benchmarks on retrieval-specific tasks.
- Long-document RAG: the voyage-4 context window lets entire research papers or contracts embed in a single call.
- Domain-specific retrieval: voyage-code-4 and voyage-context-4 (new in 2026) are fine-tuned variants that add measurable benchmark points over general models.
- Batch embedding at scale: Batch API pricing offers a 33% discount on all Voyage 4 models.

**When I wouldn't:**

- High-volume commodity embedding where cost per million tokens is the primary driver: Google's embedding API at $0.006/1M tokens is still 20× cheaper than voyage-4 at $0.12/1M tokens.
- When vendor-neutral or self-hosted embeddings are required: Voyage is a managed MongoDB SaaS with no self-host option.
- When you want direct MongoDB Atlas integration: the autoEmbed feature (announced May 2026) is in public preview with behavior subject to change before its own GA.

**Pricing posture:** First 200M tokens free on all Voyage 4 models; pay-as-you-go from $0.02/1M tokens (voyage-4-lite) to $0.12/1M tokens (voyage-4 and voyage-4-large, down from $0.18/1M in May 2026); Batch API at 33% off; no subscription required.

**Reality check:** MongoDB launched the Voyage 4 family in January 2026 with a MoE architecture — a first for production embedding models. The flagship voyage-4-large cut prices from $0.18 to $0.12/1M tokens. Developer community feedback on retrieval quality gains in real RAG workloads remains positive. MongoDB announced autoEmbed for Atlas Vector Search (May 2026, public preview), enabling automated Voyage embeddings inside MongoDB Atlas without external API calls — promising for MongoDB-native stacks but subject to GA pricing changes. The main caution remains cost at scale relative to commodity embeddings; Voyage is still a quality-first choice.

**Links:** [Homepage](https://www.voyageai.com) and [Pricing](https://docs.voyageai.com/docs/pricing)

**Last researched:** 2026-10-05
