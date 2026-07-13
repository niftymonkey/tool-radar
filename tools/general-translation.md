---
name: General Translation
problem-areas: [dev-workflow, ai-apis]
ring: assess
ring-reasoning: "Open-source libraries (MIT) are free with self-serve signup; usage-based cloud pricing for AI-powered translation; no per-seat fees; aimed squarely at individual developers shipping multilingual apps."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-07-13
last-researched: 2026-07-13
managed: auto
homepage: https://generaltranslation.com
pricing: https://generaltranslation.com/en-US/pricing
---

# General Translation

**What it is:** A full-stack i18n toolkit for React and Next.js apps that translates entire components (not just string keys) via a `<T>` wrapper, backed by an AI translation API and an agent (Locadex) that opens translation PRs automatically.

**Problem it solves:** Lets a solo developer ship a multilingual app without the usual i18n ceremony of key extraction, JSON dictionary maintenance, and manual translator coordination.

**When I'd reach for it:**

- Adding i18n to a Next.js or React app after launch without wanting to refactor existing JSX into key-based dictionaries.
- Projects where machine-translated output quality is good enough and the latency of on-demand translation is acceptable.
- Automating the ongoing localization pipeline via Locadex: push code, get a translation PR, merge and ship.

**When I wouldn't:**

- Apps where legal, medical, or brand-critical copy requires human translator review—AI translation posture here is trust-then-audit.
- When you need fine-grained control over translation memory, glossaries, or translation vendor switching; established TMS platforms (Crowdin, Lokalise) have richer editorial workflows.
- Non-React stacks; the library is TypeScript/React-first and has limited support outside that ecosystem.

**Pricing posture:** Core libraries (gt-next, gt-react, gt-i18n) are open-source and free. The cloud translation service uses usage-based billing—pay per content translated, no per-seat fees. Self-hosting requires supplying your own LLM.

**Reality check:** The GitHub repo has ~1,000 stars—early-stage traction, not broad community validation yet. The approach of translating JSX component trees (not just string literals) is technically novel and avoids the tedious key-extraction step that burns developers on tools like next-i18next. Community feedback is thin at this scale, so reliability and edge-case handling are unverified at production load. Locadex's automatic PR workflow is a genuinely useful automation for continuous localization. No established taxonomy area in this catalog maps perfectly to i18n tooling; `dev-workflow` is used as the closest fit—flagged here for a human to consider adding an `i18n` or `localization` area.

**Links:** [Homepage](https://generaltranslation.com) and [GitHub](https://github.com/generaltranslation/gt)

**Last researched:** 2026-07-13
