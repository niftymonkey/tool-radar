---
name: Highlight
problem-areas: [error-monitoring, product-analytics]
ring: hold
ring-reasoning: "Standalone highlight.io cloud was deprecated February 2026 after LaunchDarkly acquired the company; self-hosting remains Apache 2.0 but requires Postgres, ClickHouse, and Kafka, making evaluation non-trivial for a solo project."
summary: "Open-source full-stack monitoring platform unifying error tracking, session replay, logging, and OpenTelemetry tracing. Standalone cloud ended Feb 2026 — use LaunchDarkly Observability or self-host."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-21
managed: auto
homepage: https://highlight.io
pricing: https://highlight.io/pricing
---

# Highlight

**What it is:** An open-source, full-stack monitoring platform (Apache 2.0) that unifies error tracking, session replay, logging, and OpenTelemetry tracing in one product.

**Problem it solves:** Lets a solo developer click an error and immediately watch the exact user session, console logs, and network requests that led to it, instead of guessing from a bare stack trace.

**When I'd reach for it:**

- A web side project where session-replay-linked debugging is worth a heavier self-hosting setup.
- A case with hard data-residency needs where Docker self-hosting keeps everything in your own infrastructure.

**When I wouldn't:**

- Wanting a hosted SaaS with zero server work — the managed cloud service shut down February 28, 2026 and migrated to LaunchDarkly Observability.
- Budgeting for a solo project: LaunchDarkly's pricing targets teams, not hobbyists.
- A mostly-mobile project, where the mobile SDKs lag the web story.

**Pricing posture:** Self-hosting is free (Apache 2.0) but requires Postgres, ClickHouse, and Kafka. The standalone highlight.io cloud is discontinued; the successor is LaunchDarkly Observability with team-oriented pricing.

**Reality check:** LaunchDarkly acquired Highlight in April 2025, and the standalone managed service shut down February 28, 2026; users were directed to migrate to LaunchDarkly Observability. The open-source project continues. The self-hosted route remains viable for developers comfortable running a multi-service stack (Postgres + ClickHouse + Kafka), but it is not a single Docker image. Session-replay-linked debugging remains its headline capability and was praised as best-in-class; error grouping is less mature than Sentry's. For hosted monitoring without the infra burden, Sentry or Honeycomb are the alternatives.

**Links:** [Homepage](https://highlight.io) and [Pricing](https://highlight.io/pricing)

**Last researched:** 2026-09-21
