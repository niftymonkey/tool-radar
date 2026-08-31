---
name: Sent.dm
problem-areas: [email-messaging]
ring: assess
ring-reasoning: "Self-serve signup gives API access in minutes and pay-as-you-go billing starts at fractions of a cent per contact with no minimum, so a side project can evaluate it at small scale."
summary: "Unified messaging API that sends to SMS, WhatsApp, and RCS through one call and auto-selects the cheapest reliable channel per recipient."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://sent.dm
pricing: https://sent.dm/pricing
---

# Sent.dm

**What it is:** A unified messaging API that sends to SMS, WhatsApp, and RCS through one call and auto-selects the cheapest reliable channel per recipient.

**Problem it solves:** Lets a solo developer add multi-channel notifications without writing per-channel routing, fallback, or compliance logic against three separate provider SDKs.

**When I'd reach for it:**

- Transactional alerts where I want WhatsApp delivery with automatic SMS fallback.
- A project that would otherwise pay the Twilio carrier-fee markup on every message.
- Notifications that need rich formatting on capable channels and plain text everywhere else.

**When I wouldn't:**

- A project that only ever needs plain SMS and is already integrated with one provider.
- Very low volume (under roughly 1,000 messages a month), where 10DLC setup is not worth it.

**Pricing posture:** No free tier. Pay-as-you-go is a flat $0.015 per contact per month with unlimited messages, plus pass-through carrier fees and number rental (around $5/mo toll-free, $15/mo for a 10DLC local number). Enterprise is quote-only.

**Reality check:** Reviewers credit clean SDKs and 80 to 90 percent savings versus legacy aggregators via OTT routing, but flag real gotchas: 10DLC and WhatsApp registration paperwork is still on you, international SMS rates are volatile and can cause bill shock, live human support is gated behind Enterprise, and at least one review notes no public status page and occasional reliability concerns.

**Links:** [Homepage](https://sent.dm) and [Pricing](https://sent.dm/pricing)

**Last researched:** 2026-05-21
