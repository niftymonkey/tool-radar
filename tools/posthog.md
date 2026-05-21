---
name: PostHog
problem-areas: [product-analytics, feature-flags, error-monitoring]
ring: assess
ring-reasoning: "A genuinely large free tier (1M events, 5K replays, feature flags), usage-based pricing starting at $0, and self-serve developer-focused setup make it easy to adopt solo, but it has not been used personally here."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://posthog.com
pricing: https://posthog.com/pricing
---

# PostHog

**What it is:** An open-source product platform bundling event analytics, session replay, feature flags, A/B testing, surveys, error tracking, and a data warehouse behind a single SDK.

**Problem it solves:** Lets a solo SaaS builder instrument once and see which features get used, where onboarding drops off, and what a change actually did, without stitching together five separate tools.

**When I'd reach for it:**

- A side-project SaaS with real users where pageview counts are not enough.
- When I want session replay or feature flags without adding another vendor.
- Multiple micro-SaaS projects, since each gets its own free tier.

**When I wouldn't:**

- A blog or content site that just needs simple traffic stats, where the dense interface is overkill.
- When predictable flat billing matters, since each product meters separately past the free tier.

**Pricing posture:** Free plan ($0, no card) covering 1M events, 5K web replays, and 1M flag requests per month; pay-as-you-go starts at $0 with usage-based per-event pricing and no per-seat charge.

**Reality check:** Reviewers consistently rate the free tier large enough that over 90 percent of users never pay, and call it the default pick for solo SaaS in 2026. Downsides: a real learning curve and a dense UI, and per-product metering means the paid bill can climb fast and unpredictably once you scale past free. Self-hosting is possible but carries documented gotchas (Hobby-image event caps, ClickHouse memory tuning, a separate reverse proxy), so cloud is usually simpler below roughly 1.5M to 2M events per month.

**Links:** [Homepage](https://posthog.com) and [Pricing](https://posthog.com/pricing)

**Last researched:** 2026-05-21
