---
name: Qdrant
problem-areas: [database]
ring: assess
ring-reasoning: "Free managed cloud cluster (0.5 vCPU, 1 GB RAM, 4 GB disk) with self-serve signup; fully open source under Apache 2.0 for self-hosting at no cost. Note: free clusters are suspended after 1 week of inactivity and permanently deleted after 4 weeks if not reactivated."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-08-24
last-researched: 2026-08-24
managed: auto
homepage: https://qdrant.tech
pricing: https://qdrant.tech/pricing/
---

# Qdrant

**What it is:** An open-source vector database for storing, indexing, and querying high-dimensional embeddings, available as managed cloud or a single-binary self-hosted deployment.

**Problem it solves:** Provides a purpose-built vector store for RAG pipelines and semantic search with native metadata filtering alongside vector queries—without bolting a vector extension onto a general-purpose database.

**When I'd reach for it:**

- Building a RAG app that needs payload metadata filtering combined with vector search in a single query.
- Wanting self-host flexibility today—Docker image, single binary—with the option to migrate to managed cloud without schema changes.
- Performance-sensitive similarity search where Qdrant's native sparse+dense hybrid search and filtering are benchmarked best-in-class among open-source options.

**When I wouldn't:**

- Fully serverless with zero infrastructure management is the priority; Pinecone or pgvector via Neon or Supabase are lower-friction starting points.
- JavaScript-only stacks where Qdrant's Rust-native SDK is a secondary, thinner client compared to Python.

**Pricing posture:** Free cloud cluster (single node, no high availability); cluster suspends after 1 week of inactivity and is permanently deleted after 4 weeks if not reactivated—stored vectors are lost. Standard managed cloud ~$30–$200/month resource-based; fully free to self-host under Apache 2.0.

**Reality check:** Consistently ranked alongside Pinecone and Weaviate in independent 2026 benchmarks, with strong marks for filtering accuracy and hybrid sparse+dense retrieval. Main gotcha for solo developers is operational overhead: unlike Pinecone or pgvector-inside-Supabase, self-hosted Qdrant adds infra management, and the free cloud node has no high availability for production workloads. Compared to pgvector (already bundled inside Supabase or Neon), Qdrant trades simpler stack integration for better vector-native features and performance at scale.

**Links:** [Homepage](https://qdrant.tech) and [Pricing](https://qdrant.tech/pricing/)

**Last researched:** 2026-08-24
