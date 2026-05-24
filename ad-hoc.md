# Ad-hoc

Holding file for ad-hoc comparison-style and use-case-specific research briefs that the current refresher cannot process. Each entry below frames one comparison or scoped question; the refresher is per-tool and cannot answer these directly.

When (or if) a comparison-research feature ships, these briefs either move into that feature's format or get pasted in by hand. The intent is to capture the comparison or question the requester actually wants, with enough framing that a future research pass can produce a directly useful answer instead of a stitched-together stack of per-tool factsheets.

---

## AI gateway / LLM routing for a self-hosted personal AI assistant

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's ModelGateway addresses a `reasoning` role by typed interface, never naming a model or provider. Per-role configuration picks the actual endpoint. Need a hosted gateway (or an embedded routing library) that supports per-role configuration with a fallback to direct provider SDKs, and that does not lock the brain into one vendor's quirks.

**Candidates to compare.**

- **OpenRouter** (https://openrouter.ai): single API across frontier providers, per-call billing, no commitments.
- **Portkey** (https://portkey.ai): AI gateway with observability, caching, prompt management.
- **Helicone** (https://helicone.ai): observability-first proxy for LLM calls with cost tracking.
- **LiteLLM** (https://litellm.ai): Python middleware library you embed rather than a hosted gateway.

**What the comparison should produce.** Trade-off matrix across: hosted vs library posture, multi-provider breadth, per-call cost overhead, observability/logging built in vs delegated, latency overhead, ease of pinning models, fit for a self-hosted multi-process system.

---

## Speech-to-text providers for voice-enabled assistants

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's VoicePipeline calls the `STT` role of ModelGateway for push-to-talk voice turns. Latency and accuracy on conversational English are both critical (under-one-second voice budget). Eventual flip to self-hosted (Parakeet via vLLM) is in scope for later phases, so cloud STT must be swappable.

**Candidates to compare.**

- **AssemblyAI** (https://www.assemblyai.com): real-time and async STT with speaker diarization.
- **Deepgram** (https://deepgram.com): real-time STT optimized for low latency.
- **OpenAI Whisper API** (via OpenAI; no standalone homepage): widely available, good for batch.

**What the comparison should produce.** Trade-off matrix across: real-time streaming latency, word error rate on conversational English, pricing per minute, language coverage, ease of integration into a Python or TypeScript voice pipeline.

---

## Text-to-speech providers for natural-prosody voice assistants

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's VoicePipeline calls the `TTS` role of ModelGateway. The target is ChatGPT Advanced Voice Mode quality (natural prosody, breaths, emotional inflection), with sub-second time-to-first-byte. Self-hosted Kokoro or Kyutai is the eventual destination; cloud TTS must be swappable.

**Candidates to compare.**

- **ElevenLabs** (https://elevenlabs.io): widely considered the quality leader for English TTS.
- **Cartesia** (https://cartesia.ai): real-time TTS focused on low latency for conversational agents.
- **PlayHT** (https://play.ht): voice cloning and TTS with broad voice library.

**What the comparison should produce.** Trade-off matrix across: prosody quality (subjective; reference samples), time-to-first-byte for streaming, pricing per character or per minute, voice library breadth, voice cloning quality, latency in geo-distant regions.

---

## Voice transport for browser-to-server push-to-talk

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's web client opens a mic stream on push-to-talk and streams audio to the Brain API. The transport choice affects latency budget, browser compatibility, and how easily other voice clients (desktop, phone) plug in later. The Boswell prior-art research specifically recommends Pipecat plus LiveKit.

**Candidates to compare.**

- **LiveKit** (https://livekit.io): WebRTC transport with SDKs for browser, mobile, server.
- **Pipecat** (https://pipecat.ai): voice agent orchestration framework that integrates with LiveKit and others.
- **Rolling our own WebSocket audio streaming**: not a third-party at all; included as the baseline.

**What the comparison should produce.** Trade-off matrix across: transport latency for browser-to-server audio, ease of multi-client support (web/desktop/phone), session and reconnection handling, OTel-friendly observability hooks, free tier or self-host viability.

---

## OCR providers for document and photo ingestion

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's DocumentIngestor calls the `OCR` role of ModelGateway for uploaded receipts, PDFs, and photos. Quality on noisy real-world receipts is the failure mode that matters; clean PDFs are easy. Trust score in RawLog is derived from OCR confidence.

**Candidates to compare.**

- **Mistral OCR** (via https://mistral.ai): newer, language-model-aware OCR.
- **AWS Textract** (https://aws.amazon.com/textract): mature, strong for structured documents.
- **Tesseract** (self-hosted via https://github.com/tesseract-ocr/tesseract): open-source baseline.

**What the comparison should produce.** Trade-off matrix across: accuracy on noisy receipts vs clean PDFs, structured-field extraction quality, pricing per page, latency, ease of self-host.

---

## Embeddings providers for personal-data semantic retrieval

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's EntityGraph maintains a vector index over node descriptions and raw content. Quality and cost on English personal data (utterances, document extracts, generated artifacts) are the criteria. Eventual flip to self-hosted embeddings is in scope.

**Candidates to compare.**

- **OpenAI text-embedding-3-large** (via OpenAI API): widely-used default.
- **Voyage AI voyage-3** (https://www.voyageai.com): stronger reported quality on personal-data English at lower cost.
- **Cohere embed-english-v3** (https://cohere.com): mature alternative with rerank API.

**What the comparison should produce.** Trade-off matrix across: retrieval quality on English personal data (benchmark numbers if available), cost per million tokens, latency, vector dimension size (affects pgvector storage), ease of self-host.

---

## Distillation / memory backends as substrate vs build

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's Distiller consolidates RawLog events into EntityGraph assertions and refreshes WorldModel. Build-vs-buy decision for Phase 2: write the extraction prompts and entity-graph schema from scratch, or use an existing memory framework as the backend.

**Candidates to compare.**

- **Cognee** (https://www.cognee.ai): memify pipeline for continuous graph enrichment after ingestion.
- **Zep / Graphiti** (https://www.getzep.com): bi-temporal knowledge graph with valid-from/valid-to provenance.
- **powermem (oceanbase)** (https://github.com/oceanbase/powermem): two-layer Experience + Skill distillation with Ebbinghaus time decay, available as plugin and MCP server.
- **CowAgent (zhayujie/CowAgent)** (https://github.com/zhayujie/chatgpt-on-wechat): three-tier memory with Deep Dream distillation; fork pattern rather than dependency.
- **Build from scratch on Postgres + pgvector + graph extension**: not a third-party; included as the baseline.

**What the comparison should produce.** Trade-off matrix across: out-of-the-box distillation quality, fit with the Boswell three-layer memory architecture, schema flexibility for our entity taxonomy (people, places, things, events, projects, threads), provenance preservation, forget-cascade support, language and runtime fit (Python preferred), maintenance posture (managed service vs self-host vs fork).

---

## Postgres hosting with first-class pgvector and graph extension support

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell stores RawLog, EntityGraph, and WorldModel in one Postgres instance with pgvector for the embedding index and a graph extension (Apache AGE or similar) for the property graph. v1 is self-hosted in docker-compose; later we may want managed Postgres. Both pgvector and the graph layer need first-class support, not bolt-on.

**Candidates to compare.**

- **Neon** (https://neon.tech): serverless Postgres with branching, pgvector support.
- **Supabase** (https://supabase.com): managed Postgres with auth, storage, realtime extras.
- **Self-hosted in docker-compose**: not a third-party; included as the baseline.

**What the comparison should produce.** Trade-off matrix across: pgvector support quality, graph extension support (AGE, pg_graph, or none), pricing model fit for a personal-scale dataset (low GB), backup and forget-on-command fit, ease of self-host migration if cloud posture changes.

---

## OpenTelemetry-native observability backend for a multi-process self-hosted system

**Requested by:** Boswell v1 consult-radar run, 2026-05-24

**Use case.** Boswell's OTel Collector receives OTLP from Brain API, Distiller, Memory Browser, and future model-serving processes. Backend needs to ingest traces plus logs plus metrics together with cross-track propagation visible in the trace UI. Cost matters; vendor-portability matters; dashboard ergonomics matter (Mark specifically values Grafana's natural-language dashboard generation).

**Candidates to compare.**

- **Grafana Cloud** (https://grafana.com): unified Tempo (traces) + Loki (logs) + Mimir (metrics) + Grafana visualization, plus the Grafana Assistant AI agent for dashboard generation.
- **Honeycomb** (https://honeycomb.io): trace-first observability with strong querying primitives.
- **Self-hosted Tempo + Loki + Mimir + Grafana**: not a third-party service, but a valid deployment option.
- **Axiom** (already in catalog): generous free tier, APL query language, no pre-built dashboards.

**What the comparison should produce.** Trade-off matrix across: trace-plus-logs-plus-metrics breadth, OTLP-native ingestion, free tier limits for solo dev, dashboard generation ergonomics (AI-assisted vs manual), query language learning curve, self-host viability, pricing trajectory at higher volumes.
