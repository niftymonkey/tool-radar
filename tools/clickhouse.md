---
name: ClickHouse
problem-areas:
  - database
ring: hold
ring-reasoning: No permanent free tier on ClickHouse Cloud — OLAP Basic compute at $0.2181/unit-hour means the 30-day/$300 trial runs out quickly at real query loads. Self-hosted is free and open-source but running column-oriented OLAP in production requires schema design expertise and ongoing tuning that is not side-project-sized work.
summary: "Open-source column-oriented database for real-time OLAP analytics. No free tier; 30-day/$300 trial. OLAP Basic compute at $0.2181/unit-hour; Managed Postgres now GA on AWS."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-08-17
last-researched: 2026-11-23
managed: auto
homepage: https://clickhouse.com
pricing: https://clickhouse.com/pricing
---

# ClickHouse

**What it is:** An open-source column-oriented database for real-time OLAP analytics, available as ClickHouse Cloud (fully managed) or self-hosted.

**Problem it solves:** Runs analytical queries over billions of rows in milliseconds — event tracking, product analytics backends, telemetry pipelines — where PostgreSQL or a general-purpose database would time out or require a pre-aggregation layer.

**When I'd reach for it:**

- Ingesting millions of events per day and needing sub-second group-by and aggregation queries over raw data without pre-aggregation.
- Building a product analytics or observability pipeline where the query workload is almost entirely OLAP, not transactional.
- Replacing an aging pre-aggregation layer that has become too complex to maintain.

**When I wouldn't:**

- Side projects or MVPs where DuckDB's single-node OLAP or Postgres handles the data volume fine — both are dramatically simpler to start with.
- Any transactional workload: ClickHouse is not ACID-compliant and is not a replacement for a primary relational database.
- When budget is constrained and a 30-day trial is not enough runway to validate the use case.

**Pricing posture:** ClickHouse Cloud has no permanent free tier; a 30-day trial with $300 in credits is available. Billing is usage-based (compute + storage). OLAP Basic compute: $0.2181/unit-hour; Dedicated compute from $0.3903/unit-hour. Storage: ~$25.30/TB/month. ClickHouse also offers Managed Postgres (GA on AWS since November 2026, GCP in private preview) at $0.056/unit-hour compute — a separate managed PostgreSQL product layered on ClickHouse, not a price change on the core OLAP engine. Self-hosted is free and open-source but demands significant operational investment in production.

**Reality check:** Consistently benchmarks as one of the fastest OLAP systems for high-cardinality aggregations; adopted as a core store by observability vendors including Sentry and Grafana. MySQL CDC ClickPipes became billable in September 2026. Managed Postgres reached general availability on AWS in November 2026 at $0.056/unit-hour compute — this is a separate managed PostgreSQL product layered on ClickHouse (GCP remains in private preview), not a change to OLAP pricing. OLAP Basic compute remains $0.2181/unit-hour. The main gotchas remain: ClickHouse's SQL dialect extensions differ from standard SQL; table engine and sort-key choices are made at schema creation time and bad choices require full rebuilds; and the lack of ACID guarantees makes it unsuitable as a primary transactional store. Self-hosting at real scale feels like a second job. For solo-developer OLAP needs, DuckDB is dramatically simpler; MotherDuck wraps DuckDB in a managed cloud offering with a free tier; Tinybird provides a serverless real-time API layer on top of ClickHouse without its operational surface.

**Links:**
- [Homepage](https://clickhouse.com)
- [Pricing](https://clickhouse.com/pricing)
- [Docs](https://clickhouse.com/docs)

**Last researched:** 2026-11-23
