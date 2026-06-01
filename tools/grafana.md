---
name: Grafana
problem-areas:
  - error-monitoring
ring: assess
ring-reasoning: Open-source self-hosted path is completely free; Grafana Cloud free tier (10K metric series, 50 GB logs/traces) is usable for a real side project; self-serve with developer-focused docs.
source: scraped
discovered-via: queue
first-seen: 2026-06-01
last-researched: 2026-06-01
managed: auto
homepage: https://grafana.com
pricing: https://grafana.com/pricing/
---

# Grafana

**What it is:** An open-source observability and dashboarding platform that unifies metrics (Prometheus/Mimir), logs (Loki), and traces (Tempo) with rich visualization, available self-hosted or as Grafana Cloud.

**Problem it solves:** Gives you full-stack observability — metrics, logs, and traces in one place — without paying enterprise APM prices, by either self-hosting for free or using Grafana Cloud's generous free tier.

**When I'd reach for it:**
- When you're already using Prometheus and need a dashboard layer or want to add log and trace correlation without switching vendors.
- When you want to own your observability data and keep infra costs low via self-hosting.
- When you need a complete open-source LGTM stack (Loki + Grafana + Tempo + Mimir) as a Datadog alternative.

**When I wouldn't:**
- When you want a zero-config managed solution — Grafana's open-source stack requires assembling and operating several separate components.
- When your Kubernetes workload has high metric cardinality: Grafana Cloud's $6.50 per 1K active series above the free tier scales steeply and fast.

**Pricing posture:** Self-hosted open source is free; Grafana Cloud free tier includes 10K metric series, 50 GB logs, 50 GB traces, 14-day retention; Pro adds $19/month platform fee plus usage beyond the free tier.

**Reality check:** Grafana is the most widely deployed open-source observability stack in the industry — battle-tested at massive scale — and the community, plugin ecosystem, and tutorial library are enormous. The core gotcha is complexity: a standard self-hosted deployment wires together Prometheus, Loki, Tempo, and Grafana as separate services, which is more operational overhead than tools like Axiom or Honeycomb. Grafana Cloud solves this but introduces usage-based billing that surprises teams when metric cardinality grows (each Kubernetes pod label or new deployment multiplies series counts). Community feedback in 2026 frequently describes the Cloud billing model as hard to predict. Compared to Axiom (already in the catalog), Grafana Cloud is more powerful for metrics and dashboards but has a steeper setup curve; Axiom wins on log simplicity and pricing predictability for most solo projects.

**Links:**
- [Homepage](https://grafana.com)
- [Pricing](https://grafana.com/pricing/)
- [Docs](https://grafana.com/docs/)

**Last researched:** 2026-06-01
