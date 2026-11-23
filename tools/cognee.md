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
last-researched: 2026-11-23
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

**Pricing posture:** Open source and free to self-host (pip install cognee); Cognee Cloud free tier available; paid plans from approximately $5–$19/month per workspace (pricing is in flux — confirm at cognee.ai/pricing).

**Reality check:** Cognee is one of a cluster of open-source agent-memory projects alongside Mem0, Zep/Graphiti, and Letta. Its differentiator is the hybrid vector + knowledge graph architecture with RDF-based ontologies, theoretically stronger for entity-relationship queries than pure-vector stores. The core API (remember, recall, improve, forget) is clean, and the tool integrates with Claude Code, LangGraph, OpenAI, MCP-compatible clients, and others. Knowledge graph memory is available at every pricing tier, including the free self-hosted tier — a contrast with Mem0, which gates graph memory behind higher plans. Gotchas: documentation thins out for advanced custom pipelines; Cognee hasn't published LongMemEval benchmark scores; the managed cloud service is still maturing. GitHub activity (active repo, 30+ source connectors) is a positive signal for a newer project. For most side projects, `pip install cognee` is the practical entry point.

**Links:**
- [Homepage](https://www.cognee.ai)
- [GitHub](https://github.com/topoteretes/cognee)
- [Pricing](https://www.cognee.ai/pricing)
- [Docs](https://docs.cognee.ai)

**Last researched:** 2026-11-23
