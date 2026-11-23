---
name: Pipecat
problem-areas: [ai-agent-infra]
ring: assess
ring-reasoning: "Open-source BSD-2 Python framework; free to self-host. Pipecat Cloud became generally available in January 2026 with per-running-agent billing starting at $0.01/min active (agent-1x) and no monthly minimum, making it safe to evaluate."
summary: "Open-source Python framework for building real-time voice and multimodal conversational AI agents by composing STT, LLM, TTS, and transport services into a pipeline."
source: manual
discovered-via: https://pipecat.ai
first-seen: 2026-05-25
last-researched: 2026-11-23
managed: auto
homepage: https://pipecat.ai
pricing: https://www.daily.co/pricing/pipecat-cloud/
---

# Pipecat

**What it is:** An open-source Python framework for building real-time voice and multimodal conversational AI agents by composing STT, LLM, TTS, and transport services into a pipeline of FrameProcessor nodes.

**Problem it solves:** Gives a solo developer composable primitives to wire together any combination of speech, language, and voice services into a voice agent, without building the real-time audio pipeline from scratch.

**When I'd reach for it:**

- Building a custom voice agent where I want full control over every component: choose my own STT provider, LLM, TTS, and transport independently.
- When I need to tune VAD (voice activity detection), endpointing, and cancellation behavior that managed platforms like Vapi abstract away.
- Projects that combine voice with other modalities — video, screen sharing, structured data — in a single pipeline.

**When I wouldn't:**

- When I need telephony features as turnkey: phone number provisioning, IVR routing, warm transfer, and call analytics require integrations Pipecat leaves to the developer.
- TypeScript-first teams: the JS port is less mature than the Python framework.
- When I want a managed abstraction over the whole stack — Vapi or LiveKit Agents provide higher-level voice agent APIs with less configuration.

**Pricing posture:** Framework is free open-source (BSD-2); self-host for free. Pipecat Cloud (by Daily.co, GA January 2026): agent-1x at $0.01/min active ($0.0005/min reserved), agent-2x at $0.02/min, agent-3x at $0.03/min. No monthly minimum. Enterprise/VPC deployments are quote-only.

**Reality check:** Pipecat Cloud became generally available in January 2026 at $0.01/min active for agent-1x instances, with tiered sizing up to agent-3x ($0.03/min). The open-source framework (~12K+ GitHub stars) remains the foundation, with integrations spanning Deepgram, AssemblyAI, OpenAI, Anthropic, Cartesia, ElevenLabs, and more. The main caveat is that self-hosted production deployments require significant ops work: hosting, monitoring, and third-party service billing become the real cost drivers. Pipecat Cloud simplifies the managed side but doesn't cover telephony — phone number provisioning, SIP, and IVR require additional integrations. Compared to LiveKit Agents, Pipecat wins on framework-level control; LiveKit wins on turnkey managed scale. Compared to Vapi, Pipecat is lower-level and more configurable, while Vapi handles telephony as a managed feature.

**Links:** [Homepage](https://pipecat.ai), [Pipecat Cloud Pricing](https://www.daily.co/pricing/pipecat-cloud/), and [GitHub](https://github.com/pipecat-ai/pipecat)

**Last researched:** 2026-11-23
