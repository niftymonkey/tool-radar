---
name: Greptile
problem-areas: [ai-code-review, dev-workflow]
ring: hold
ring-reasoning: "No free tier and a $30-per-seat entry price exceed the assess threshold of a free tier or sub-$20 hobby pricing; a 2026 overage-pricing controversy reinforces the hold."
summary: "AI code review agent that indexes an entire codebase and runs a swarm of LLM agents over each pull request to catch cross-file bugs. No free tier, $30/seat floor."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://www.greptile.com
pricing: https://www.greptile.com/pricing
---

# Greptile

**What it is:** An AI code review agent that builds a graph index of an entire codebase and runs a swarm of LLM agents over each pull request to catch cross-file bugs.

**Problem it solves:** Catches multi-file logic bugs (broken call sites, schema drift, conflicting async patterns) that diff-only reviewers miss, on GitHub and GitLab repos.

**When I'd reach for it:**

- A complex, interconnected codebase where a missed cross-file regression would be costly.
- A stable GitHub repo where deep codebase awareness compounds over weeks.

**When I wouldn't:**

- A small or hobby side project, since there is no free or hobby tier and the $30 floor prices it out.
- Agentic workflows that push many small PRs, since per-review overage can spike a bill from $30 to hundreds.

**Pricing posture:** No free tier (open-source projects aside); Pro is $30/month per seat including 50 reviews, then $1 per extra review.

**Reality check:** Benchmarks credit it with the best bug-catch rate (around 82 percent versus CodeRabbit's 44) but also the most false positives. A March 2026 shift to overage pricing drew community backlash: one developer's bill jumped from $30 to over $500 after 571 PRs, and some open-source maintainers were charged despite a free-for-OSS promise. The v4 release narrowed the noise gap but did not close it.

**Links:** [Homepage](https://www.greptile.com) and [Pricing](https://www.greptile.com/pricing)

**Last researched:** 2026-05-21
