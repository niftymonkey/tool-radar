---
name: General Translation
problem-areas: [dev-workflow]
ring: assess
ring-reasoning: "Free plan available, self-serve, React/Next.js developer docs, and a novel component-wrapping approach that delivers value at side-project scale with minimal setup."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-07-06
last-researched: 2026-07-06
managed: auto
homepage: https://generaltranslation.com
pricing: https://generaltranslation.com/en-US/pricing
---

# General Translation

**What it is:** General Translation is an AI-powered i18n platform for React and Next.js apps that translates entire components—not just string keys—via a `<T>` wrapper, with automated delivery and a cloud review UI.

**Problem it solves:** Eliminates the JSON-key extraction and dictionary-refactor step typical of react-i18next or next-intl by letting a developer wrap components directly and have AI-handled translations managed and served automatically.

**When I'd reach for it:**

- A greenfield React or Next.js project that needs multilingual support quickly, without restructuring all content into separate translation files.
- A side project where you want AI-handled translations without managing a TMS, Crowdin, or Lokalise subscription.
- Projects where getting the first translation live in an afternoon matters more than deep ICU format control.

**When I wouldn't:**

- Non-React stacks; the framework is React-specific.
- Projects already invested in react-i18next, LinguiJS, or next-intl where migration cost outweighs the DX improvement.
- When you need offline-first locale bundles, complex ICU pluralization rules, or fine-grained translation memory ownership without vendor dependency.

**Pricing posture:** Free plan available. Pro is $30/month. Enterprise is custom. Translation usage beyond plan quotas is pay-as-you-go.

**Reality check:** Early-stage company with $2.4M in funding; community size is a fraction of established libraries like react-i18next (which has been around since 2011 with a massive ecosystem). The component-wrapping approach is a genuine DX improvement over key-based libraries for new projects, but it ties translation delivery to their cloud service. As of mid-2026 most competing TMS platforms (Tolgee, Crowdin, Lokalise, Phrase) now ship MCP servers, making the ecosystem more comparable. Taxonomy note: the current taxonomy has no i18n/localization category; `dev-workflow` is the best available fit—flagged for a human to map.

**Links:** [Homepage](https://generaltranslation.com) and [Pricing](https://generaltranslation.com/en-US/pricing)

**Last researched:** 2026-07-06
