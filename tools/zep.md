---
name: Zep
problem-areas:
  - ai-agent-infra
ring: hold
ring-reasoning: Free tier exhausts in days (10K messages, typically under a week) and is not usable for a real side project; Pro at $99/month is well above the $20/month threshold.
source: scraped
discovered-via: queue
first-seen: 2026-06-01
last-researched: 2026-06-01
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

**Pricing posture:** Free tier limited to 10K messages (single project); Pro at $99/month for 500K messages; Enterprise with unlimited messages and compliance certifications.

**Reality check:** Zep is the best-in-class tool if temporal fact modeling is genuinely what you need — the LongMemEval lead over Mem0 is substantial and reflects real architectural advantage. The catch for solo developers is the pricing step function: the free tier exhausts within days for anything beyond a prototype, and the leap to $99/month is large compared to alternatives. Self-hosting Graphiti (the open-source engine) is possible but requires running Neo4j or FalkorDB plus Postgres, and Graphiti is the inference engine, not the full platform (missing the managed persistence, API, and operations tooling that Zep adds). Community footprint is smaller than Mem0 (Graphiti ~10K GitHub stars vs. Mem0's 41K+), which means fewer tutorials and community answers. Best suited to B2B AI products where temporal accuracy and compliance are non-negotiable.

**Links:**
- [Homepage](https://www.getzep.com)
- [Pricing](https://www.getzep.com/pricing/)
- [Docs](https://help.getzep.com)
- [Graphiti (open-source engine)](https://github.com/getzep/graphiti)

**Last researched:** 2026-06-01
