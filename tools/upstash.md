---
name: Upstash
problem-areas: [database, background-jobs, ai-agent-infra]
ring: assess
ring-reasoning: "Free tier of 500K commands per month, instant self-serve signup, and pay-per-request billing that scales to zero make it a near-perfect fit for low-traffic side projects, though it has not been tried personally."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://upstash.com
pricing: https://upstash.com/pricing
---

# Upstash

**What it is:** A serverless data platform offering Redis, a Vector database, and the QStash message queue, all accessible over HTTP and billed per request.

**Problem it solves:** Adds caching, rate limiting, queues, or vector search to a serverless or edge app without running a server or paying for an instance that sits idle.

**When I'd reach for it:**

- Rate limiting in Next.js middleware, where the `@upstash/ratelimit` SDK is the de facto standard.
- A side project on Vercel or Cloudflare Workers where edge runtimes block the persistent TCP connections that normal Redis needs.
- Background tasks or scheduled jobs via QStash, with retries handled for you.

**When I wouldn't:**

- Real-time pub/sub, chat, or high-frequency streams, where HTTP long-polling adds latency and Streams are unsupported.
- Sustained high-volume traffic, where per-request billing costs more than a provisioned instance.

**Pricing posture:** Free tier covers 256 MB and 500K commands per month. Pay as you go is $0.20 per 100K commands. Fixed plans start at $10/month. No per-seat pricing.

**Reality check:** Community consensus through 2026 is positive for the serverless niche: it is often the only Redis that works on the edge, and most indie projects stay inside the free tier indefinitely. The real limits are architectural, not reliability: HTTP adds latency over TCP, Streams and Redis modules are missing, and BullMQ-style job workers need a TCP Redis instead.

**Links:** [Homepage](https://upstash.com) and [Pricing](https://upstash.com/pricing)

**Last researched:** 2026-05-21
