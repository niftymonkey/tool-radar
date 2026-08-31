---
name: Qdrant
problem-areas:
  - database
  - ai-agent-infra
ring: assess
ring-reasoning: Free cloud tier (single-node, 1 GB RAM; Qdrant's sizing example is ~1M 768-dimensional vectors); fully free to self-host under Apache 2.0; self-serve signup; Premium tier adds SSO and a minimum spend requirement alongside usage billing.
summary: "Open-source, Rust-powered vector database built for high-performance similarity search and RAG, with a free cloud tier and top-ranked p50 latency in 2026 benchmarks."
pricing-note: "Free cloud tier; self-hosted always free (Apache 2.0); Cloud Standard/Premium usage-billed hourly"
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-08-31
last-researched: 2026-08-31
managed: auto
homepage: https://qdrant.tech
pricing: Free cloud tier; self-hosted always free (Apache 2.0); Cloud Standard/Premium usage-billed hourly (Premium has a minimum spend)
---

# Qdrant

**What it is:** An open-source, Rust-powered vector database built for high-performance similarity search and retrieval-augmented generation (RAG).

**Problem it solves:** Storing and querying embedding vectors at production speed without the cost and lock-in of a managed-only vendor.

**When I'd reach for it:**
- Building a RAG or semantic search feature where I need low latency (sub-5ms p50 in standard benchmarks) on a budget
- Self-hosting on a small VPS to avoid per-vector cloud costs at 1M+ vector scale (actual resource needs depend on dimensions, payload size, index settings, and quantization)
- Needing hybrid dense + sparse (BM25) search in a single collection

**When I wouldn't:**
- When I want the simplest possible managed vector DB and don't want to tune index parameters — Pinecone serverless trades tuning control for zero-ops
- When I'm already on a Postgres stack — pgvector may be good enough and eliminates a separate service

**Pricing posture:** Self-hosting is always free; Cloud free tier is a single-node cluster; paid Cloud is usage-billed with no published per-unit rate, so cost projections require the pricing calculator; Premium adds a minimum spend requirement.

**Reality check:** In 2026 configuration-matched benchmarks, Qdrant records the lowest p50 latency of major purpose-built vector databases (~4ms vs Pinecone's ~8ms); results are configuration-dependent and vary by dataset, dimensions, recall target, hardware, and concurrency. Community rates self-hosted performance-per-dollar as best-in-class; Weaviate has a more complete hybrid search out of the box, but Qdrant's setup is more manual. The Rust core means low memory footprint, a real advantage on small VMs. Note: self-hosted Qdrant is not secure by default — production deployments require authentication, TLS, and network controls. Cloud opacity on pricing (no published $/GB rates) is the main friction when estimating cost.

**Links:**
- [Homepage](https://qdrant.tech)
- [Docs](https://qdrant.tech/documentation/)
- [GitHub](https://github.com/qdrant/qdrant)
- [Benchmarks](https://qdrant.tech/benchmarks/)

**Last researched:** 2026-08-31
