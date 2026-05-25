---
name: Deepgram
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "$200 in free credits with no credit card required and pay-as-you-go pricing from there; no monthly minimum makes it easy to add real-time transcription to a side project without any lock-in."
source: manual
discovered-via: https://deepgram.com
first-seen: 2026-05-25
last-researched: 2026-05-25
managed: auto
homepage: https://deepgram.com
pricing: https://deepgram.com/pricing
---

# Deepgram

**What it is:** A speech AI API offering real-time and batch transcription, text-to-speech, and voice agent capabilities optimized for low latency and high accuracy across 45+ languages.

**Problem it solves:** Gives a solo developer fast, accurate transcription and voice output via API, with particular strength in live streaming scenarios like voice assistants and real-time captions.

**When I'd reach for it:**

- Building a voice interface that needs sub-second transcription: Deepgram's Nova-3 model achieves competitive Word Error Rates with streaming latency suited for conversational apps.
- Adding speech-to-text to a backend pipeline: pay-per-minute pricing with $200 free credits means a prototype costs nothing to build.
- Projects that need on-premise or VPC deployment for compliance — enterprise agreements cover that path.

**When I wouldn't:**

- When I need a rich audio intelligence layer (sentiment, topic detection, entity extraction) baked in: Deepgram's add-ons are priced separately and the catalog is narrower than AssemblyAI's.
- Stereo audio doubles the base per-minute rate, making cost estimates more complex than they first appear.
- When language coverage is the primary concern: Nova-3 supports 45+ languages but the real-time streaming tier is limited in that set.

**Pricing posture:** $200 free credits, no credit card required; pay-as-you-go at ~$0.0077/minute ($0.46/hour) for Nova-tier transcription; Growth plan at $0.0065/minute requires ~$4K/year minimum.

**Reality check:** Strong developer reputation for real-time streaming accuracy and low latency. The main gotcha is that add-ons (diarization, summarization, sentiment) are billed separately and stack on the base per-minute rate. Compared to AssemblyAI, Deepgram is cheaper per raw transcription minute and faster for streaming but offers fewer built-in intelligence features. OpenAI Whisper is a cheaper self-hosted alternative for batch use cases where latency is not critical.

**Links:** [Homepage](https://deepgram.com) and [Pricing](https://deepgram.com/pricing)

**Last researched:** 2026-05-25
