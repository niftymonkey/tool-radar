---
name: Cognee
problem-areas:
  - ai-agent-infra
ring: assess
ring-reasoning: Fully open-source and free to self-host; managed cloud has a free tier; Python SDK targets developers directly; value is demonstrable at small scale with a pip install.
summary: "Open-source AI agent memory control plane that combines vector search and knowledge graphs to give agents persistent, structured memory with traceable retrieval."
source: scraped
discovered-via: queue
first-seen: 2026-06-01
last-researched: 2026-06-01
managed: auto
homepage: https://www.cognee.ai
pricing: https://www.cognee.ai/pricing
---

# Cognee

**What it is:** An open-source AI agent memory control plane that combines vector search and knowledge graphs to give agents persistent, structured memory with traceable retrieval.

**Problem it solves:** Lets you add persistent, relationship-aware memory to an AI agent without stitching together a vector store, graph database, and retrieval pipeline yourself.

**When I'd reach for it:**
- When your agent needs to reason over a corpus of documents or structured data and you want graph-style entity relationships, not just vector similarity.
- When you need memory that is auditable — Cognee exposes the graph paths from query to source, so you can see why a fact was retrieved.
- When self-hosted deployment matters (you can run Cognee on Railway, Modal, or Fly.io with full data ownership).

**When I wouldn't:**
- When you need per-user personalization or conversation history memory — Cognee is optimized for structured knowledge ingestion, not adapting to individual user preferences over time.
- When you need a production-grade managed service with SLAs today — Cognee Cloud is newer and community feedback notes documentation thins out for advanced pipelines.

**Pricing posture:** Open source and free to self-host; Cognee Cloud starts at $25/month with a free tier available.

**Reality check:** Cognee is one of a cluster of open-source agent-memory projects that emerged in 2025–2026 alongside Mem0, Zep/Graphiti, and Letta. Its differentiator is the hybrid vector + knowledge graph architecture with RDF-based ontologies, which is theoretically stronger for entity-relationship queries than pure-vector stores. Gotchas: the documentation covers the basics but thins out for advanced custom pipelines (teams report reading source code to fill gaps); Cognee hasn't published LongMemEval benchmark scores, making retrieval quality claims architecture-based rather than measured; the managed cloud service is newer than competitors like Zep. GitHub activity and community size (30+ source connectors, active repo) are positive signals for an open-source tool at this stage. For most side projects, the self-hosted path with `pip install cognee` is the practical entry point.

**Links:**
- [Homepage](https://www.cognee.ai)
- [GitHub](https://github.com/topoteretes/cognee)
- [Pricing](https://www.cognee.ai/pricing)
- [Docs](https://docs.cognee.ai)

**Last researched:** 2026-06-01
