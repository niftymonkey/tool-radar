---
name: Zep
problem-areas:
  - ai-agent-infra
ring: hold
ring-reasoning: Free tier is 10,000 credits/month; Flex plan is $125/month (billed monthly) or $104/month (billed annually at $1,250/year), well above the $20/month threshold and priced for production workloads, not side-project evaluation. The Community Edition (self-hosted) has been deprecated.
summary: "Managed temporal knowledge graph memory platform for AI agents that tracks how facts change over time. Flex plan $125/month (monthly billing) or $104/month annual; Community Edition deprecated."
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
- For a side project or early-stage product — the free tier (10,000 credits/month) depletes quickly at typical usage, and Flex at $125/month is a significant spend before you have users.
- When simple preference or conversation memory is enough; Mem0 at $19/month covers most cases at a fraction of the cost.

**Pricing posture:** Free tier: 10,000 credits/month, 2 projects. Flex: $125/month (billed monthly) or $104/month (billed annually at $1,250/year), including 50,000 credits/month; additional credits at $25 per 10,000. Flex Plus: $375/month. Enterprise is custom-priced. The Community Edition (self-hosted) has been deprecated; Graphiti (the open-source engine) remains Apache 2.0 and is the recommended self-host path.

**Reality check:** Zep is the best-in-class tool if temporal fact modeling is genuinely what you need — the LongMemEval lead over Mem0 is substantial and reflects real architectural advantage. The Community Edition (self-hosted) has been deprecated; self-hosting is now done via Graphiti (the open-source engine, Apache 2.0, ~27K GitHub stars), which requires Neo4j, FalkorDB, or Amazon Neptune and provides the inference engine but not the full platform. Zep's Flex plan is $125/month (billed monthly) or $104/month (billed annually at $1,250/year), including 50,000 credits/month; additional credits are $25 per 10,000. This is well above the $20/month indie threshold. Best suited to B2B AI products where temporal accuracy and compliance (SOC 2, HIPAA, GDPR) are non-negotiable. For side projects needing lighter agent memory, Mem0 at $19/month covers most cases at a fraction of the cost.

**Links:**
- [Homepage](https://www.getzep.com)
- [Pricing](https://www.getzep.com/pricing/)
- [Docs](https://help.getzep.com)
- [Graphiti (open-source engine)](https://github.com/getzep/graphiti)

**Last researched:** 2026-11-23
