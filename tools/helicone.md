---
name: Helicone
problem-areas: [error-monitoring]
ring: assess
ring-reasoning: "Open-source Apache 2.0 codebase is self-hostable indefinitely; new hosted cloud signups are currently disabled per the sign-in page, making the hosted path unavailable for new evaluators; self-host remains the only viable entry point."
summary: "Open-source LLM observability platform that logs every AI request and tracks cost and latency by routing calls through its proxy — hosted cloud signups are currently disabled; self-host via Docker or Kubernetes is the only entry point."
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

- Starting a new project that depends on the hosted cloud product: as of late 2026, new hosted signups are disabled (the sign-in page confirms this) and Helicone appears to no longer be part of Mintlify — existing cloud customers are being encouraged to migrate; only the self-hosted path is available to new users.
- When the 50–80ms proxy overhead is unacceptable on a latency-sensitive path.
- When I need deep evaluation metrics — Helicone's evaluation depth remains limited compared to specialized eval platforms.

**Pricing posture:** Cloud: free Hobby tier with 10K requests per month and 7-day log retention; Pro at $79/month for unlimited logs and 1-month retention; self-host via Docker or Kubernetes for free with no per-request fees.

**Reality check:** As of late 2026, new hosted cloud signups are disabled and the sign-in page states Helicone is no longer part of Mintlify — suggesting the March 2026 acquisition by Mintlify has since been unwound or the product has been divested. Existing cloud accounts may still function, but no new evaluators can sign up for the hosted tier; active feature development on the hosted product had already stopped under Mintlify. Cloud customers are being encouraged to migrate to alternatives such as Langfuse, Braintrust, or Portkey (now Palo Alto PRISMA AIRS). The open-source self-host path remains fully viable: Apache 2.0 license, active community forks, and the one-line base-URL integration still work. The 50–80ms proxy latency is real. For teams evaluating now, Langfuse is the most direct open-source alternative with active development.

**Links:** [Homepage](https://helicone.ai), [Pricing](https://helicone.ai/pricing), and [GitHub](https://github.com/Helicone/helicone)

**Last researched:** 2026-10-05
