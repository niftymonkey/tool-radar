---
name: Graphite
problem-areas: [dev-workflow, ai-code-review]
ring: assess
ring-reasoning: "A free Hobby tier covers personal repos with self-serve signup and docs aimed at individual developers, so it clears the assess bar even though AI review and the merge queue sit behind the $40/user/month Team plan."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://graphite.com
pricing: https://graphite.com/pricing
---

# Graphite

**What it is:** A code review and workflow platform for GitHub built around stacked pull requests, a stack-aware merge queue, and an AI review agent.

**Problem it solves:** Lets a solo developer break a large change into a chain of small, independently reviewable PRs, with automatic rebasing when an earlier PR merges, so work on later changes is never blocked.

**When I'd reach for it:**

- Shipping a big feature as a stack of small PRs instead of one monster diff that is hard to review.
- Personal GitHub repos where the free Hobby tier covers stacked-PR tooling, the CLI, and a VS Code extension.
- Wanting an AI first-pass reviewer with a low noise rate (under 3 percent unhelpful comments) on small diffs.

**When I wouldn't:**

- Repos on GitLab, Bitbucket, or Azure DevOps, since Graphite is GitHub-only.
- Simple side projects where small, infrequent changes do not justify learning the stacked-PR model.

**Pricing posture:** Free Hobby plan for personal repos with limited AI; Starter is $20/user/month and Team is $40/user/month (both billed annually), with AI Reviews and the merge queue gated to the Team tier.

**Reality check:** Stacked PRs carry a genuine learning curve and a CLI-first mental model; if an upstream PR is restacked it can cause branch drift and cascading rebases, and each PR in a stack triggers its own CI run, raising cost and time. Reviewers note the AI analysis is diff-scoped rather than whole-repo, and the 2026 Cursor (Anysphere) acquisition adds uncertainty about long-term independent direction.

**Links:** [Homepage](https://graphite.com) and [Pricing](https://graphite.com/pricing)

**Last researched:** 2026-05-21
