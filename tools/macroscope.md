---
name: Macroscope
problem-areas: [ai-code-review, dev-workflow]
ring: assess
ring-reasoning: "Usage-based at $0.05/KB reviewed with no seat fees; a typical solo project reviewing a few hundred KB per month stays well under $20/month, self-serve, with no upfront cost."
summary: "AI code reviewer that maps your codebase with AST analysis to flag high-signal bugs on pull requests and optionally auto-fix or auto-approve low-risk changes."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-09-21
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

**Pricing posture:** Usage-based at $0.05/KB reviewed; no seat fees. Basic Code Review and Status features are billed by usage, while agentic features (Slack queries, auto-fix, Check Run Agents) consume a separate credit balance. Migrated all customers to this model by April 27, 2026, replacing the legacy $100-free-usage flat-rate model.

**Reality check:** Reviewers in 2026 rank it among the most accurate reviewers, with a v3 engine claiming 98% precision and fewer nitpicks, plus rare autonomous auto-approval of low-risk PRs. The April 2026 move to pure usage-based pricing eliminated the old $100 free starter and introduced separate agent credit billing, so real costs require tracking across two billing axes. Shorter track record and smaller footprint than CodeRabbit, GitHub-only support, and review depth that drops on large diffs remain the consistent concerns.

**Links:** [Homepage](https://macroscope.com) and [Pricing](https://macroscope.com/pricing)

**Last researched:** 2026-09-21
