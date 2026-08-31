---
name: Unkey
problem-areas: [auth, security]
ring: assess
ring-reasoning: "A genuinely usable free tier (150K verifications and 1K keys per month) plus a five-minute self-serve setup and developer-focused docs put it squarely in assess range for a side project."
summary: "Open-source API key management platform that issues, verifies, expires, and rate-limits keys at the edge with built-in usage analytics."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://unkey.com
pricing: https://unkey.com/pricing
---

# Unkey

**What it is:** An open-source API key management platform that issues, verifies, expires, and rate-limits keys at the edge with built-in usage analytics.

**Problem it solves:** Lets a solo developer ship a public or internal API with per-customer keys, rate limits, and usage tracking instead of building hashing, rotation, and quota logic by hand.

**When I'd reach for it:**

- A side project exposing an API where each user needs their own key with a usage cap.
- Auto-expiring keys for trials, webhook callbacks, or temporary sessions.
- Per-device or per-service keys that need edge rate limiting without a Redis layer.

**When I wouldn't:**

- A project that needs only a single static API key with no analytics or lifecycle.
- When a full API gateway like Kong already covers key management end to end.

**Pricing posture:** Free tier covers 1K keys, 150K verifications a month, 7-day logs, and unlimited rate limiting. Paid plans scale by verification volume, with the Pro tier commonly cited around $25/month for roughly 250K verifications. Enterprise is quote-only.

**Reality check:** Reviewers rate it the leading modern alternative to legacy gateways, with 5K-plus GitHub stars, edge verification, and a three-line integration. Caveats: it is AGPL-3.0 and self-hosting is possible but not officially supported, so the hosted service is the realistic path; the ecosystem is younger than Kong's with fewer integrations; and active development can introduce breaking changes. The 7-day log retention on the free tier limits production debugging.

**Links:** [Homepage](https://unkey.com) and [Pricing](https://unkey.com/pricing)

**Last researched:** 2026-05-21
