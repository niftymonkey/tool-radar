---
name: Depot
problem-areas: [ci-cd]
ring: assess
ring-reasoning: "A $20/month Developer plan is explicitly pitched at solo devs and side projects with self-serve signup and no sales call, but a 7-day-only trial keeps it at assess until tried personally."
summary: "Remote build infrastructure that replaces docker build with managed BuildKit machines that keep a warm, persistent cache, plus GitHub Actions runners at roughly half the cost of GitHub-hosted."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-14
managed: auto
homepage: https://depot.dev
pricing: https://depot.dev/pricing
---

# Depot

**What it is:** Remote build infrastructure for Docker builds (managed BuildKit with persistent cache) and GitHub Actions runners at roughly half the cost of GitHub-hosted, with 30% faster CPUs and 10x faster cache throughput.

**Problem it solves:** Turns Docker builds that take minutes on cold-cache CI into builds that finish in seconds, and replaces GitHub-hosted runners with cheaper, faster alternatives — no CI migration required.

**When I'd reach for it:**

- A side project with a heavy Dockerfile that rebuilds the same layers on every CI push.
- Shipping images for both ARM and x86 without paying the QEMU emulation tax; native ARM build is 10–30x faster than QEMU.
- Wanting faster, cheaper GitHub Actions runs: Depot runners undercut GitHub's $0.006/min rate by about a third and impose no concurrency limits.

**When I wouldn't:**

- Builds that already finish in under a minute, where the cost outweighs the saved time.
- A project that rarely builds containers at all.

**Pricing posture:** Developer is $20/month (one user, 500 Docker build minutes, 2K CI minutes, 2K GH Actions minutes, 25GB cache); Startup is $200/month (unlimited users, larger allowances). 7-day trial, no card required; open-source projects build free.

**Reality check:** Confirmed 5x to 55x Docker speedups in independent benchmarks. The scope is narrower than it first appears: Depot accelerates builds and runners, not test suite execution or non-Docker compilation. The trial is 7 days (not a standing free tier), and autoscaling clones the cache, which can cause more misses under parallel builds. The GitHub Actions runner integration is zero-YAML-migration — you redirect runners in one config line — which reduces adoption friction significantly.

**Links:** [Homepage](https://depot.dev) and [Pricing](https://depot.dev/pricing)

**Last researched:** 2026-09-14
