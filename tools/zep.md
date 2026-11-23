---
name: Zep
problem-areas:
  - ai-agent-infra
ring: hold
ring-reasoning: Free tier is limited and exhausts quickly; Flex plan starts at ~$25/month (annual billing only), which is above the $20/month threshold and not evaluable monthly without commitment. The Community Edition (self-hosted) has been deprecated.
summary: "Managed temporal knowledge graph memory platform for AI agents that tracks how facts change over time. Flex plan ~$25/month (annual billing); Community Edition deprecated."
source: scraped
discovered-via: queue
first-seen: 2026-06-01
last-researched: 2026-11-23
managed: auto
homepage: https://www.getzep.com
pricing: https://www.getzep.com/pricing/
---

# Zep

**What it is:** A managed temporal knowledge graph memory platform for AI agents that tracks how facts change over time, powered by the open-source Graphiti engine.

**Problem it solves:** Gives AI agents accurate long-term memory that stays correct as user facts change — for example, tracking that a user switched programming languages in April after having used Python in March.

**When I'd reach for it:**
- When your agent must reason about user state that evolves over time (temporal knowledge graph is the right primitive for this).
- When you need enterprise compliance (SOC 2 Type 2, HIPAA, GDPR) without building your own memory infrastructure.
- When benchmark accuracy on long-horizon memory tasks matters — Zep scores 63.8% on LongMemEval vs. Mem0's 49.0%.

**When I wouldn't:**
- For a side project or early-stage product — the free tier of 10K messages is too constrained (exhausts in under a week at typical usage), and Pro at $99/month is a significant spend before you have users.
- When simple preference or conversation memory is enough; Mem0 at $19/month covers most cases at a fraction of the cost.

**Pricing posture:** Free tier limited (reports vary: 1K–10K episodes/month); Flex plan at approximately $25/month (annual billing only); Enterprise is custom-priced. The Community Edition (self-hosted) has been deprecated; Graphiti (the open-source engine) remains Apache 2.0 and is the recommended self-host path.

**Reality check:** Zep is the best-in-class tool if temporal fact modeling is genuinely what you need — the LongMemEval lead over Mem0 is substantial and reflects real architectural advantage. The Community Edition (self-hosted) has been deprecated; self-hosting is now done via Graphiti (the open-source engine, Apache 2.0, ~27K GitHub stars), which requires Neo4j or FalkorDB plus Postgres and provides the inference engine but not the full platform. Zep has introduced a Flex plan (~$25/month on annual billing only), which is a step down from the previous $99/month Pro but is still above the $20/month indie threshold and requires annual commitment. Best suited to B2B AI products where temporal accuracy and compliance (SOC 2, HIPAA, GDPR) are non-negotiable. For side projects needing lighter agent memory, Mem0 at $19/month covers most cases at a fraction of the cost.

**Links:**
- [Homepage](https://www.getzep.com)
- [Pricing](https://www.getzep.com/pricing/)
- [Docs](https://help.getzep.com)
- [Graphiti (open-source engine)](https://github.com/getzep/graphiti)

**Last researched:** 2026-11-23
