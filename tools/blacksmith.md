---
name: Blacksmith
problem-areas: [ci-cd]
ring: assess
ring-reasoning: "A 3,000-free-minute monthly tier, pure usage billing, and a one-line drop-in swap make it easy to evaluate solo; not yet tried personally, so it cannot be promoted past assess."
summary: "Drop-in replacement for GitHub Actions runners that runs your existing workflows on bare-metal gaming CPUs with co-located caching."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://blacksmith.sh
pricing: https://blacksmith.sh/pricing
---

# Blacksmith

**What it is:** A drop-in replacement for GitHub Actions runners that runs your existing workflows on bare-metal gaming CPUs with co-located caching and persistent Docker layers.

**Problem it solves:** Cuts the time you spend staring at slow CI on a side project, swapping one `runs-on` label for faster hardware, cheaper minutes, and better build observability without any migration.

**When I'd reach for it:**

- A repo where GitHub Actions runs feel sluggish and the slow loop is breaking flow.
- Docker-heavy CI that rebuilds layers from a cold cache on every push.
- Wanting log search, flaky-test analytics, and SSH-into-job debugging that stock GitHub runners do not give you.

**When I wouldn't:**

- A project not on GitHub Actions, since it supports nothing else.
- Needing macOS or GPU runners as a hard requirement, as Linux x64 and ARM are the focus.

**Pricing posture:** No per-seat fees. Every plan includes 3,000 free minutes per month, then pay-as-you-go from $0.0025/min (Ubuntu ARM) to $0.004/min (Ubuntu x64). Docker layer caching and sticky disks are $0.50/GB/month add-ons.

**Reality check:** Reviews back the speed and observability claims, but flag real caveats: it is GitHub Actions only, Docker acceleration needs Blacksmith-specific actions, and per-minute billing plus separate cache-storage charges make costs harder to predict than a flat plan. Running CI on third-party infrastructure also means trusting them with your secrets and source.

**Links:** [Homepage](https://blacksmith.sh) and [Pricing](https://blacksmith.sh/pricing)

**Last researched:** 2026-05-21
