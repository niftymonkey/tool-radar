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
last-researched: 2026-09-14
managed: auto
homepage: https://www.cognee.ai
pricing: https://www.cognee.ai/pricing
---

# Cognee

**What it is:** An open-source AI agent memory control plane that combines vector search and knowledge graphs to give agents persistent, structured memory with traceable retrieval, with MCP and Claude Code integrations on the free tier.

**Problem it solves:** Lets you add persistent, relationship-aware memory to an AI agent without stitching together a vector store, graph database, and retrieval pipeline yourself.

**When I'd reach for it:**
- When your agent needs to reason over a corpus of documents or structured data and you want graph-style entity relationships, not just vector similarity.
- When you need memory that is auditable — Cognee exposes the graph paths from query to source, so you can see why a fact was retrieved.
- When self-hosted deployment matters (you can run Cognee on Railway, Modal, or Fly.io with full data ownership; MIT licensed, no mandatory cloud dependency).

**When I wouldn't:**
- When you need Python/JS SDKs — Cognee is Python-only; Mem0 offers Python+JS.
- When per-user conversation history memory is the goal — Cognee is optimized for structured knowledge ingestion, not adapting to individual user preferences over time; Mem0 or Zep are better fits.

**Pricing posture:** Open source and free to self-host (MIT license); Cognee Cloud free tier includes 1 workspace and 1M tokens/month; paid cloud at $1/1M tokens with document pack top-ups from $35.

**Reality check:** Cognee raised a $7.5M seed round in 2026 and reports over 5 million SDK runs per month, with Bayer as a named enterprise customer. The hybrid vector + knowledge graph architecture with ECL (self-improving graph edge weights) differentiates it from pure-vector stores. Gotchas: Python-only SDK is a real gap vs. Mem0; retrieval is limited to graph+vector strategies without keyword or temporal filters that some competitors offer; lifecycle control (updating or forgetting stale memory) is still rough. The managed cloud is still Beta-labeled. For most side projects, `pip install cognee` with the embedded defaults (SQLite, LanceDB, Kuzu) is the practical entry point.

**Links:**
- [Homepage](https://www.cognee.ai)
- [GitHub](https://github.com/topoteretes/cognee)
- [Pricing](https://www.cognee.ai/pricing)
- [Docs](https://docs.cognee.ai)

**Last researched:** 2026-09-14
