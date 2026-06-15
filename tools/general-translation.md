---
name: General Translation
problem-areas: [dev-workflow]
ring: assess
ring-reasoning: "Free API key, self-serve, and zero-config setup via npx wizard meet the rubric; early-stage reliability concerns noted in reality check."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-15
last-researched: 2026-06-15
managed: auto
homepage: https://generaltranslation.com
pricing: https://generaltranslation.com/en-US/pricing
---

# General Translation

**What it is:** An automated internationalization (i18n) suite for React and
Next.js apps that translates entire components — not just strings — via a
`<T>` wrapper, without requiring a translation dictionary.

**Problem it solves:** Adding multi-language support to a React app without
restructuring code into key-value translation files or maintaining a separate
localization workflow.

**When I'd reach for it:**

- A Next.js or React app that needs i18n support quickly without a full
  dictionary-driven rewrite.
- Projects where AI-driven translation is acceptable and human-reviewed
  translation files are not a requirement.
- Teams using the Locadex AI agent to automate the initial i18n migration of
  an existing codebase.

**When I wouldn't:**

- Apps where static rendering is critical — GT has been reported to block
  Next.js static rendering of wrapped pages.
- Production builds where build-time failures are unacceptable: AI quota
  exhaustion has blocked deployments, requiring payment before shipping to
  production.
- When needing battle-tested reliability: react-i18next and next-intl have
  much longer track records and larger ecosystems.

**Pricing posture:** Free API key to start; paid tiers based on usage.
Specific plan pricing requires checking the pricing page directly;
$2.4M seed round suggests the product is still pre-scale.

**Reality check:** Early-stage library with real usability concerns reported
by developers: missing ~40% of translated content in some cases, blocking
static rendering, and build failures when the AI translation quota is
exceeded. Community guidance in 2026 leans toward react-i18next or next-intl
for engineering teams needing stability, with GT positioned for rapid
prototyping or vibe-coded apps. Locadex (the AI agent that automates the
migration) is a genuine differentiator. Taxonomy note: no existing area
covers i18n precisely; `dev-workflow` is the nearest fit.

**Links:** [Homepage](https://generaltranslation.com) and [GitHub](https://github.com/generaltranslation/gt)

**Last researched:** 2026-06-15
