---
name: Pipecat
problem-areas: [ai-agent-infra]
ring: assess
ring-reasoning: "Open-source BSD-2 Python framework; free to self-host with no per-request fees; Pipecat Cloud adds managed hosting at $0.01/min active with no monthly minimum, making it safe to evaluate fully."
summary: "Open-source Python framework for building real-time voice and multimodal conversational AI agents by composing STT, LLM, TTS, and transport services into a pipeline."
source: manual
discovered-via: https://pipecat.ai
first-seen: 2026-05-25
last-researched: 2026-10-05
managed: auto
homepage: https://pipecat.ai
pricing: https://www.daily.co/pricing/pipecat-cloud/
---

# Pipecat

**What it is:** An open-source Python framework (now at v1.5+, stable since the v1.0 milestone in April 2026) for building real-time voice and multimodal conversational AI agents by composing STT, LLM, TTS, and transport services into a pipeline of FrameProcessor nodes.

**Problem it solves:** Gives a solo developer composable primitives to wire together any combination of speech, language, and voice services into a voice agent, without building the real-time audio pipeline from scratch.

**When I'd reach for it:**

- Building a custom voice agent where I want full control over every component: choose my own STT provider, LLM, TTS, and transport independently.
- When I need to tune VAD (voice activity detection), endpointing, and cancellation behavior that managed platforms like Vapi abstract away.
- Projects that combine voice with other modalities — video, screen sharing, structured data — in a single pipeline.
- When API stability is important: Pipecat hit its v1.0 milestone in April 2026, signaling a stable API contract.

**When I wouldn't:**

- When I need telephony features as turnkey: phone number provisioning, IVR routing, warm transfer, and call analytics require integrations Pipecat leaves to the developer.
- TypeScript-first teams: the JS port is less mature than the Python framework.
- When I want a managed abstraction over the whole stack — LiveKit Agents provides a higher-level voice agent API with less configuration.

**Pricing posture:** Framework is free open-source (BSD-2); Pipecat Cloud (by Daily.co) is now generally available and charges $0.01/minute active for hosted agents; self-host on your own infrastructure for free.

**Reality check:** Pipecat crossed the v1.0 milestone on April 14, 2026, with API stability, and is now at v1.5+ with continuous releases. Pipecat Cloud became generally available in 2026 after a nine-month beta with 1,000+ teams. Community feedback highlights the framework's flexibility as its primary strength — integrations span Deepgram, AssemblyAI, OpenAI, Anthropic, Cartesia, ElevenLabs, TogetherAI, NVIDIA, and more. The main caveat is that self-hosted production deployments require significant ops work: hosting, monitoring, and third-party service billing become the real cost drivers. Compared to LiveKit Agents, Pipecat wins on framework-level control and broader integration ecosystem; LiveKit wins on turnkey managed scale. Vapi handles telephony as a managed turnkey feature that Pipecat still leaves to the developer.

**Links:** [Homepage](https://pipecat.ai), [Pipecat Cloud Pricing](https://www.daily.co/pricing/pipecat-cloud/), and [GitHub](https://github.com/pipecat-ai/pipecat)

**Last researched:** 2026-10-05
