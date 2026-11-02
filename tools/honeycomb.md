---
name: Honeycomb
problem-areas:
  - error-monitoring
ring: assess
ring-reasoning: Free tier of 20M events/month is genuinely usable for a real side project; self-serve signup; strong developer-focused docs and a distinct mental model worth learning.
summary: "Event-based observability platform built around high-cardinality distributed tracing and exploratory querying, with a 20M events/month free tier."
source: scraped
discovered-via: queue
first-seen: 2026-06-01
last-researched: 2026-10-05
managed: auto
homepage: https://www.honeycomb.io
pricing: https://www.honeycomb.io/pricing
---

# Honeycomb

**What it is:** An event-based observability platform built around high-cardinality distributed tracing and exploratory querying, with AI-assisted analysis (Canvas, BubbleUp) and Time Series Metrics added in 2026.

**Problem it solves:** Lets you interrogate exactly what your app was doing during a slow or broken request in production, without pre-defining dashboards or aggregations ahead of time.

**When I'd reach for it:**
- Debugging latency or error patterns that only appear under specific combinations of user, region, or feature flag.
- When Sentry-style error tracking isn't giving you enough context and you want trace-level detail with arbitrary attribute filtering.
- When you want BubbleUp or Canvas AI Copilot to automatically surface which attributes correlate with slowness after an incident.

**When I wouldn't:**
- When your app is simple enough that Sentry covers it — Honeycomb's mental model (events, traces, heatmaps) adds onboarding cost.
- When you need infrastructure monitoring, log text search, or synthetics: Honeycomb now has Time Series Metrics (GA March 2026) but still doesn't replace a full-stack observability suite.

**Pricing posture:** Free up to 20M events/month with all core features; Pro starting July 1, 2026 moved to four tiers at $3.00 per million events (up from $1.30/1M on legacy plans), with the first paid tier starting at $130/month; Enterprise for billions of events/year.

**Reality check:** Honeycomb consistently earns strong reviews from developers who've bought into the high-cardinality query model, and it was an early contributor to OpenTelemetry, making OTLP integration clean. In July 2026 Honeycomb restructured Pro pricing from $1.30/1M events to $3.00/1M events, roughly a 2.3× increase for pay-as-you-go usage, bundling in Time Series Metrics and AI features (Canvas, Honeycomb Intelligence, MCP). BubbleUp remains a genuine differentiator. The main gotcha for solo developers: the Pro pricing cliff is steeper than before, and production projects that outgrow 20M events/month face significantly higher bills. Honeycomb also added an MCP integration in 2026 for Claude and Copilot-style AI queries against your observability data. Compared to Grafana and Axiom, Honeycomb is more expensive but better at interactive exploratory querying.

**Links:**
- [Homepage](https://www.honeycomb.io)
- [Pricing](https://www.honeycomb.io/pricing)
- [Docs](https://docs.honeycomb.io)

**Last researched:** 2026-10-05
