---
name: Deepgram
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "$200 in free credits with no credit card required and pay-as-you-go pricing from there; no monthly minimum makes it easy to add real-time transcription to a side project without any lock-in."
summary: "Speech AI API offering real-time and batch transcription, text-to-speech, and voice agent capabilities optimized for low latency across 45+ languages."
source: manual
discovered-via: https://deepgram.com
first-seen: 2026-05-25
last-researched: 2026-09-14
managed: auto
homepage: https://deepgram.com
pricing: https://deepgram.com/pricing
---

# Deepgram

**What it is:** A speech AI API offering real-time and batch transcription, text-to-speech, and voice agent capabilities (Flux Voice Agent API) optimized for low latency and high accuracy across 45+ languages, with Nova-3 Medical added in May 2026.

**Problem it solves:** Gives a solo developer fast, accurate transcription and voice output via API, with particular strength in live streaming scenarios like voice assistants and real-time captions.

**When I'd reach for it:**

- Building a voice interface that needs sub-second transcription: Nova-3 produces sub-300ms latency on noisy call-center audio and accented speech in production.
- Voice agents that integrate an LLM directly into the context: the Voice Agent API keeps the conversation in one service without an extra LLM API call.
- Projects that need on-premise or VPC deployment for compliance — enterprise agreements cover that path.

**When I wouldn't:**

- When I need a rich audio intelligence layer (sentiment, topic detection, entity extraction) baked in: Deepgram's add-ons are narrower than AssemblyAI's.
- Occasional offline batch transcription where latency is not critical and cost is — OpenAI Whisper self-hosted is cheaper.

**Pricing posture:** $200 free credits, no expiration, no credit card required; pay-as-you-go at $0.0043/min batch ($0.26/hr) or $0.0077/min streaming (labeled promotional); Growth plan at $0.0036/min batch requires ~$4K/year minimum.

**Reality check:** Deepgram is the default choice for voice interfaces in 2026. Nova-3 is benchmarked as the accuracy and latency leader for conversational AI; the May 2026 Nova-3 Medical model makes it viable for healthcare transcription. The streaming rate is labeled promotional, meaning it may increase; budget for the regular rate in cost models. Compared to AssemblyAI, Deepgram is cheaper per raw transcription minute and faster for streaming but has a narrower audio intelligence catalog. OpenAI Whisper is the go-to self-hosted alternative for non-real-time batch work.

**Links:** [Homepage](https://deepgram.com) and [Pricing](https://deepgram.com/pricing)

**Last researched:** 2026-09-14
