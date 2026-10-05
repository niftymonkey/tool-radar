---
name: Helicone
problem-areas: [error-monitoring]
ring: assess
ring-reasoning: "Open-source Apache 2.0 codebase is self-hostable indefinitely; cloud hosted product is in maintenance mode after Mintlify acquisition, but the one-line integration and self-host path remain viable for solo use."
summary: "Open-source LLM observability platform that logs every AI request and tracks cost and latency by routing calls through its proxy — cloud product acquired by Mintlify and now in maintenance mode."
source: manual
discovered-via: https://helicone.ai
first-seen: 2026-05-25
last-researched: 2026-10-05
managed: auto
homepage: https://helicone.ai
pricing: https://helicone.ai/pricing
---

# Helicone

**What it is:** An open-source LLM observability platform that logs every AI request, tracks cost and latency, and adds caching and prompt versioning by routing calls through its proxy with a single base-URL change.

**Problem it solves:** Lets a solo developer see exactly how much LLM calls cost, where latency spikes, and which prompt versions perform best — without manually instrumenting each API client.

**When I'd reach for it:**

- Adding LLM observability quickly via self-hosting: the open-source Apache 2.0 codebase runs indefinitely with no per-request fees or cloud dependency.
- Debugging a prompt regression by comparing response quality across versions in the UI.
- Reducing API spend through response caching for repeated or near-identical queries.

**When I wouldn't:**

- Starting a new project that depends on active feature development from the hosted cloud product: Mintlify acquired Helicone in March 2026 and put the hosted product into maintenance mode — security patches and bug fixes continue, but no new roadmap features are planned, and cloud customers are being encouraged to plan migration.
- When the 50–80ms proxy overhead is unacceptable on a latency-sensitive path.
- When I need deep evaluation metrics — Helicone's evaluation depth remains limited compared to specialized eval platforms.

**Pricing posture:** Cloud: free Hobby tier with 10K requests per month and 7-day log retention; Pro at $79/month for unlimited logs and 1-month retention; self-host via Docker or Kubernetes for free with no per-request fees.

**Reality check:** Mintlify acquired Helicone on March 3, 2026, and transitioned the hosted product to maintenance mode. Security patches, bug fixes, and new-model support continue to ship, but active feature development has stopped and the team has integrated into Mintlify's documentation platform. Cloud customers are being encouraged to plan migration to alternatives such as Langfuse, Braintrust, or Portkey (now Palo Alto PRISMA AIRS). The open-source self-host path remains fully viable: Apache 2.0 license, active community forks, and the one-line base-URL integration still work. The 50–80ms proxy latency is real. For teams evaluating now, Langfuse is the most direct open-source alternative with active development.

**Links:** [Homepage](https://helicone.ai), [Pricing](https://helicone.ai/pricing), and [GitHub](https://github.com/Helicone/helicone)

**Last researched:** 2026-10-05
