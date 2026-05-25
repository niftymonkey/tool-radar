---
name: LiveKit
problem-areas: [ai-agent-infra]
ring: assess
ring-reasoning: "Free Build tier with 5K WebRTC minutes and 1K AI Agent minutes per month; open-source core is self-hostable; self-serve signup with no sales call to build and demo a working voice agent."
source: manual
discovered-via: https://livekit.io
first-seen: 2026-05-25
last-researched: 2026-05-25
managed: auto
homepage: https://livekit.io
pricing: https://livekit.io/pricing
---

# LiveKit

**What it is:** An open-source WebRTC platform for real-time voice, video, and data, with a built-in Agents framework that orchestrates STT → LLM → TTS pipelines into low-latency conversational AI agents.

**Problem it solves:** Gives a solo developer the real-time transport layer and agent orchestration primitives needed to build a voice AI product without wiring raw WebRTC and managing media servers.

**When I'd reach for it:**

- Building a voice AI agent that joins calls as a participant: the Agents framework handles speech-to-text, LLM, and TTS in a pipeline with latency low enough for natural conversation.
- Any real-time audio or video product — multi-party calls, screen sharing, live captions — where self-hosting at scale is a future option to control costs.
- When I need proven scale: OpenAI runs ChatGPT Voice on LiveKit, demonstrating the platform handles millions of concurrent users.

**When I wouldn't:**

- When HIPAA, SOC 2 attestation reports, or data residency controls are required — those compliance features require the Scale tier at $500/month.
- Once I outgrow the free Build tier, I commit to $50/month (Ship) or $500/month (Scale) regardless of whether I use the bundled minutes.
- Teams that want telephony, phone number provisioning, and warm transfers as turnkey features — LiveKit provides primitives, not a call center platform.

**Pricing posture:** Free Build tier with 5K WebRTC + 1K AI Agent minutes per month; Ship at $50/month; Scale at $500/month; open-source and self-hostable for teams with ops capability.

**Reality check:** Strongly regarded in the voice AI community for the quality of its Agents framework and real-time infrastructure. Cost comparisons show LiveKit Scale + inference running at roughly half the cost of Agora at equivalent scale. The main complaint is that the Ship and Scale tiers are fixed monthly commitments, not pure pay-as-you-go. One case study documented $19,400/month on LiveKit vs. a $45,000 Agora quote for the same workload. The open-source nature (Apache 2.0) makes the self-host path credible for teams with ops capability.

**Links:** [Homepage](https://livekit.io), [Pricing](https://livekit.io/pricing), and [GitHub](https://github.com/livekit/livekit)

**Last researched:** 2026-05-25
