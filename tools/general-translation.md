---
name: General Translation
problem-areas:
  - dev-workflow
ring: assess
ring-reasoning: >
  Free plan for small projects and solo developers; Pro at $30/month;
  self-serve with no sales call. Individual-developer-first documentation.
  Value is demonstrable by wrapping existing React components with <T> on
  a side project without paying. Note: taxonomy has no i18n area; dev-workflow
  is the closest fit—see Reality check.
source: scraped
discovered-via: t3-sponsors
first-seen: "2026-06-29"
last-researched: "2026-06-29"
managed: auto
homepage: https://www.generaltranslation.com
pricing: https://www.generaltranslation.com/pricing
---

# General Translation

**What it is:** An open-source i18n SDK for React apps that replaces JSON-file key management with a `<T>` JSX wrapper, backed by an AI translation service and a Locadex AI agent that automates internationalization of your codebase.

**Problem it solves:** Eliminates the JSON-file and key-extraction grind of traditional i18n by letting you wrap existing React components directly, while AI generates translations and Locadex opens pull requests to internationalize your code automatically.

**When I'd reach for it:**
- Adding i18n to a React or Next.js app without a full rewrite of your string-management approach
- Automating the first-pass internationalization of an existing codebase via an AI agent that opens PRs
- Side projects targeting multiple locales that don't need a full translation-management platform like Crowdin or Lokalise

**When I wouldn't:**
- Non-React projects—the SDKs target React, Next.js, and React Native only
- Teams needing professional human-review translation workflows; GT is AI-first and lacks TMS collaboration and review-stage features

**Pricing posture:** Free plan for small projects and solo developers; Pro at $30/month (usage-based, pay per translation tokens); Enterprise with custom pricing.

**Reality check:** General Translation is a newer entrant in a crowded i18n space dominated by react-i18next (tens of millions of weekly npm downloads), Crowdin, and Lokalise. Its differentiation is the `<T>` component model (no JSON files, no key extraction) and the Locadex AI agent that opens PRs against your repo. Community signal is thin—GitHub activity shows active development but a small user base compared to established tools. The AI translation quality is unverified at scale by the broader community. Raised $2.4M seed funding. The radar taxonomy has no dedicated i18n area; `dev-workflow` is assigned as the closest fit. A human should evaluate whether an `i18n` taxonomy area is warranted as this space grows.

**Links:**
- [Homepage](https://www.generaltranslation.com)
- [GitHub](https://github.com/generaltranslation/gt)
- [Docs](https://www.generaltranslation.com/docs)
- [Pricing](https://www.generaltranslation.com/pricing)

**Last researched:** 2026-06-29
