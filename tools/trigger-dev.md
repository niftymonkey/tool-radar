---
name: Trigger.dev
problem-areas: [background-jobs, ai-agent-infra, dev-workflow]
ring: assess
ring-reasoning: "A real free tier, a $10 hobby plan, and self-serve TypeScript-native setup make it easy to evaluate at small scale, though usage-based billing and a TypeScript-only runtime limit who it fits."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://trigger.dev
pricing: https://trigger.dev/pricing
---

# Trigger.dev

**What it is:** A managed platform for durable background jobs, scheduled tasks, and AI agent workflows written as plain async TypeScript functions that live in your own repo.

**Problem it solves:** Gives a solo builder reliable long-running jobs that survive deploys and restarts, with retries, checkpointing, and a visual run dashboard, without standing up a queue, Redis, or worker infrastructure.

**When I'd reach for it:**

- Long-running work that blows past serverless timeouts, like a 30-minute LLM call or a media pipeline.
- AI agents needing tool calling, streaming, and orchestration with built-in observability.
- Webhook fan-outs or scheduled tasks where step-level traces make debugging tractable.

**When I wouldn't:**

- A backend that is not TypeScript, since Python, Go, and Ruby are not production-supported.
- Millions of short sub-five-second jobs, where a self-hosted BullMQ or Vercel cron is cheaper.

**Pricing posture:** Free tier with $5 of monthly usage included. Hobby is $10/month, Pro is $50/month, both with matching usage credits; extra Pro seats run $20/month.

**Reality check:** The recurring gotcha is usage-based billing that grows faster than expected past roughly 1M runs per month, since compute-seconds accrue even while a task sits idle waiting. Cold starts after idle periods run two to five seconds, and documentation thins out past basic patterns, pushing advanced retry and idempotency questions to Discord or the source. Reviewers suggest Inngest for simpler event-driven jobs.

**Links:** [Homepage](https://trigger.dev) and [Pricing](https://trigger.dev/pricing)

**Last researched:** 2026-05-21
