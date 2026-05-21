---
name: Vapi
problem-areas: [ai-apis, ai-agent-infra]
ring: assess
ring-reasoning: "Usage-based Build tier with no upfront cost, free credits for testing, and self-serve API signup make it cheap to start, though it has not been tried personally."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://vapi.ai
pricing: https://vapi.ai/pricing
---

# Vapi

**What it is:** A developer platform for building voice AI agents that answer and place phone calls, orchestrating swappable speech-to-text, LLM, text-to-speech, and telephony providers behind one API.

**Problem it solves:** Lets a solo developer ship a custom voice agent (inbound support, lead qualification, appointment booking) without stitching together Deepgram, an LLM, ElevenLabs, and Twilio by hand.

**When I'd reach for it:**

- A side project that genuinely needs to swap STT, LLM, or TTS providers independently, or pin an unusual model.
- A voice agent with multi-step tool calls, where Vapi's function-calling is the most flexible in the category.
- Prototyping a voice-AI concept where the free credits and quick API setup are enough to test feasibility.

**When I wouldn't:**

- A standard appointment-booking or after-hours flow, where Retell or a no-code tool ships in a fraction of the time.
- Any build needing predictable monthly costs, since stacked per-provider billing makes bills swing.

**Pricing posture:** Build tier has no upfront cost: $0.05 per minute for call hosting plus pass-through model and telephony costs, with around $10 of free credits to test. Concurrency is $10 per extra line per month. HIPAA and zero-data-retention add-ons cost thousands per month.

**Reality check:** 2026 reviews agree Vapi is excellent infrastructure with top-tier docs, but it is a toolkit, not a product: a first build takes 20 to 60 hours and there are no templates or native CRM integrations. The $0.05 base rate becomes $0.13 to $0.36 all-in once STT, TTS, LLM, and telephony are added, and managing four to five API keys is an operational burden. Community forums flag latency from routing audio through multiple providers, and reported uptime (around 99.5 percent) trails Retell. Post-call observability is a common complaint.

**Links:** [Homepage](https://vapi.ai) and [Pricing](https://vapi.ai/pricing)

**Last researched:** 2026-05-21
