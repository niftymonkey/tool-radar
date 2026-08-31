---
name: Qdrant
problem-areas:
  - database
  - ai-agent-infra
ring: assess
ring-reasoning: Free cloud tier (single-node, 1 GB RAM, handles ~250K uncompressed vectors); fully free to self-host under Apache 2.0; self-serve signup; Rust-based performance makes it viable on a $30/month VPS at 10M+ vector scale.
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-08-31
last-researched: 2026-08-31
managed: auto
homepage: https://qdrant.tech
pricing: Free cloud tier; self-hosted always free (Apache 2.0); Cloud Standard/Premium usage-billed hourly
---

# Qdrant

**What it is:** An open-source, Rust-powered vector database built for high-performance similarity search and retrieval-augmented generation (RAG).

**Problem it solves:** Storing and querying embedding vectors at production speed without the cost and lock-in of a managed-only vendor.

**When I'd reach for it:**
- Building a RAG or semantic search feature where I need low latency (<5ms p50) on a budget
- Self-hosting on a small VPS to avoid per-vector cloud costs at 1M+ vector scale
- Needing hybrid dense + sparse (BM25) search in a single collection

**When I wouldn't:**
- When I want the simplest possible managed vector DB and don't want to tune index parameters — Pinecone serverless trades tuning control for zero-ops
- When I'm already on a Postgres stack — pgvector may be good enough and eliminates a separate service

**Pricing posture:** Self-hosting is always free; Cloud free tier is a single-node cluster; paid Cloud is usage-billed with no published per-unit rate, so cost projections require the pricing calculator.

**Reality check:** Qdrant leads p50 latency benchmarks at ~4ms vs Pinecone's ~8ms in 2026 comparisons. Community rates self-hosted performance-per-dollar as best-in-class; Weaviate has a more complete hybrid search out of the box, but Qdrant's setup is more manual. The Rust core means low memory footprint, a real advantage on small VMs. Cloud opacity on pricing (no published $/GB rates) is the main friction when estimating cost.

**Links:**
- [Homepage](https://qdrant.tech)
- [Docs](https://qdrant.tech/documentation/)
- [GitHub](https://github.com/qdrant/qdrant)

**Last researched:** 2026-08-31
