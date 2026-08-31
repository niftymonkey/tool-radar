---
name: Macroscope
problem-areas: [ai-code-review, dev-workflow]
ring: assess
ring-reasoning: "Self-serve signup with $100 of free usage and usage-based pricing that costs roughly a dollar per review keeps a side project well under $20/month, and the docs target individual developers."
summary: "AI code reviewer that maps your codebase with AST analysis to flag high-signal bugs on pull requests and optionally auto-fix or auto-approve low-risk changes."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://macroscope.com
pricing: https://macroscope.com/pricing
---

# Macroscope

**What it is:** An AI code reviewer that maps your codebase with AST analysis to flag high-signal bugs on pull requests, write PR summaries, and optionally auto-fix or auto-approve low-risk changes.

**Problem it solves:** Gives a solo developer a second reviewer that catches real bugs before merge, when there is no teammate to review your pull requests.

**When I'd reach for it:**

- A solo GitHub project where you merge your own PRs and want a bug check you would not skip.
- Wanting Macroscope to open a fix branch, push a commit, and run CI when it finds something.
- An open-source repo, where review is free.

**When I wouldn't:**

- Projects hosted on GitLab or Bitbucket, since Macroscope is GitHub-only.
- Very large diffs (over roughly 800 lines), where review quality is reported to degrade.

**Pricing posture:** No flat tier; usage-based at $0.05 per KB reviewed plus $0.05 per commit, with $100 of free usage to start and free reviews for open source. An average review costs about $0.95.

**Reality check:** Reviewers in 2026 rank it among the most accurate reviewers, with a v3 engine claiming 98% precision and fewer nitpicks, plus rare autonomous auto-approval of low-risk PRs. The catch is a shorter track record and smaller footprint than CodeRabbit or Greptile, GitHub-only support, and review depth that drops on large diffs.

**Links:** [Homepage](https://macroscope.com) and [Pricing](https://macroscope.com/pricing)

**Last researched:** 2026-05-21
