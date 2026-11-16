---
name: Cartesia
problem-areas: [ai-apis]
ring: assess
ring-reasoning: "Free tier with 20K characters and paid plans starting at $4–5/month make it practical to test sub-100ms TTS in a side project; self-serve signup with no sales call required."
summary: "Low-latency text-to-speech API (Sonic models) built for real-time AI agents, delivering time-to-first-audio as low as 40ms for streaming voice interactions."
source: manual
discovered-via: https://cartesia.ai
first-seen: 2026-05-25
last-researched: 2026-09-14
managed: auto
homepage: https://cartesia.ai
pricing: https://cartesia.ai/pricing
---

# Cartesia

**What it is:** A low-latency text-to-speech API (Sonic 3.6, currently the GA model supporting 44 languages) built for real-time AI agents, delivering time-to-first-audio as low as 40ms for streaming voice interactions.

**Problem it solves:** Lets a solo developer wire fast, natural-sounding speech synthesis into a voice agent or interactive app without building or tuning TTS models.

**When I'd reach for it:**

- Building a voice AI agent where response latency determines whether conversations feel natural — Sonic's 40ms Turbo / 90ms standard TTFA is the lowest available commercially.
- Projects that need voice cloning from a short audio sample for personalized or branded voice experiences (paid plan required).
- Agents where on-device or low-latency deployment matters: Sonic is built on state space models that enable on-device inference without a server round-trip.

**When I wouldn't:**

- Content narration, podcasts, or audiobooks where ElevenLabs leads on expressive naturalness and emotional range.
- When running at scale: credit-based pricing can become less predictable than per-second audio billing at high throughput.

**Pricing posture:** Free tier with 20K characters (pre-built voices only, no card required); Pro at $4–5/month for 100K characters; Scale at $299/month for 8M characters; enterprise with custom SLAs.

**Reality check:** Sonic 3.6 is benchmarked as the latency leader; developers confirm TTFA in the 40–90ms range in production. The credit model is 1 credit per character for standard TTS and 1.5 credits per character for Pro Voice Cloning, which makes cost projections harder at volume vs per-second billing. ElevenLabs v3 and Sonic 3 were rated equally on MOS 4.6 in a 2026 blind panel, so voice quality is competitive; Cartesia wins on latency, ElevenLabs wins on emotional control. The free tier doubled from 10K to 20K characters between the May 2026 and current pricing pages.

**Links:** [Homepage](https://cartesia.ai) and [Pricing](https://cartesia.ai/pricing)

**Last researched:** 2026-09-14
