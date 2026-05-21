---
name: Highlight
problem-areas: [error-monitoring, product-analytics]
ring: assess
ring-reasoning: "A free-forever tier, self-serve signup, and an Apache 2.0 self-host option fit a side project, but the jump from free to the first paid plan is steep and the platform has not been tried personally."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://highlight.io
pricing: https://highlight.io/pricing
---

# Highlight

**What it is:** An open-source, full-stack monitoring platform (Apache 2.0) that unifies error tracking, session replay, logging, and OpenTelemetry tracing in one product.

**Problem it solves:** Lets a solo developer click an error and immediately watch the exact user session, console logs, and network requests that led to it, instead of guessing from a bare stack trace.

**When I'd reach for it:**

- A web side project where frontend bugs depend on user state and a session replay tied to the error is the fastest path to a fix.
- A project that wants errors, logs, and traces in one tool instead of stitching three vendors together.
- A case with hard data-residency needs, where the Docker self-host option keeps everything in my own infrastructure.

**When I wouldn't:**

- A mostly-mobile project, since the mobile SDKs lag well behind the web story.
- A solo budget that cannot absorb the large gap between the free tier and the first paid plan.

**Pricing posture:** Free Forever tier with 500 monthly sessions and 15 seats. Paid pay-as-you-go starts around $50/month (some sources cite $150/month for real usage), and Business starts at $800/month; self-hosting is free.

**Reality check:** Reviewers praise the session-replay-linked debugging as genuinely best-in-class and the true open-source license as a real differentiator over Sentry. The recurring warnings: the free tier (500 sessions) drains fast under real traffic, the leap to paid pricing is steep for a solo budget, error grouping and alerting are less mature than Sentry's, and self-hosting is not one Docker image but a small platform (Postgres plus ClickHouse plus Kafka). The 2025 LaunchDarkly acquisition leaves open questions about the project's long-term direction.

**Links:** [Homepage](https://highlight.io) and [Pricing](https://highlight.io/pricing)

**Last researched:** 2026-05-21
