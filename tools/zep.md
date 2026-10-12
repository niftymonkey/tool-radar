---
name: Zep
problem-areas:
  - ai-agent-infra
ring: hold
ring-reasoning: Free tier exhausts quickly (10K credits/month, ~1K episodes) and is not usable for a real side project; first paid tier (Flex) is $125/month, well above the $20/month threshold.
summary: "Managed temporal knowledge graph memory platform for AI agents that tracks how facts change over time. Free tier exhausts quickly; Flex starts at $125/month."
source: scraped
discovered-via: queue
first-seen: 2026-06-01
last-researched: 2026-10-12
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
- When benchmark accuracy on long-horizon memory tasks matters and the budget allows.

**When I wouldn't:**
- For a side project or early-stage product — the free tier is too constrained, there is no longer a free self-hosted Community Edition path, and the first paid tier at $125/month is a steep commitment before you have users.
- When simple preference or conversation memory is enough; Mem0 at ~$19/month covers most cases at a fraction of the cost.

**Pricing posture:** Free tier 10K credits/month (roughly 10K short episodes); Flex $125/month ($104/month annual) for 50K credits with 30-day rollover; Flex Plus $375/month for 200K credits with 60-day rollover; Enterprise custom. One credit covers one Episode up to 350 bytes.

**Reality check:** Pricing restructured in 2026 from the old Free/Pro model. The Community Edition (free self-hosted Zep) was deprecated — self-hosting now means running the open-source Graphiti inference engine yourself without Zep's managed persistence, API, and operations layer. Zep remains best-in-class for temporal fact modeling; the architectural lead over Mem0 on multi-hop and time-sensitive queries is real. The catch for solo developers is unchanged: the free tier runs out fast, and Flex at $125/month is a high floor. Competing in 2026: Mem0 at ~$19/month, Letta (Apache 2.0, self-hosted), and Hindsight (MIT, no Neo4j/FalkorDB dependency). Best suited to B2B AI products where temporal accuracy and compliance are non-negotiable.

**Links:**
- [Homepage](https://www.getzep.com)
- [Pricing](https://www.getzep.com/pricing/)
- [Docs](https://help.getzep.com)
- [Graphiti (open-source engine)](https://github.com/getzep/graphiti)

**Last researched:** 2026-10-12
