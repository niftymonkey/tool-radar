---
name: General Translation
problem-areas:
  - dev-workflow
ring: assess
ring-reasoning: Free API key available with usage-based pricing and no per-seat fees; self-serve setup via `npx gt@latest`; docs and tooling aimed at individual React/Next.js developers. Solves a real solo-project friction point (adding i18n without JSON-file churn) at a scale where you pay only when you actually translate content.
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-08-10
last-researched: 2026-08-10
managed: auto
homepage: https://generaltranslation.com
pricing: Usage-based; free API key to get started; pay per translation, no per-seat fees
---

# General Translation

**What it is:** AI-powered i18n SDK for React and Next.js that translates literal JSX content wrapped in a `<T>` component at build time, with optional on-demand translation and support for dictionary or JSON workflows.

**Problem it solves:** Adds production-quality multilingual support to a React app in hours, without managing `.json` locale files or a separate translation-key workflow.

**When I'd reach for it:**
- Internationalizing a Next.js or React app and wanting to skip the JSON-file/key-extraction ceremony of i18next or react-intl
- Adding i18n to an existing app quickly—setup is a single `npx gt@latest` run
- When you need AI translations on demand that update automatically as you ship new content

**When I wouldn't:** For non-React or non-Next.js stacks; when you need professional human translators integrated into an approval workflow (use Lokalise or Crowdin); for heavily formatted, legal, or medically sensitive content where AI translation quality is critical.

**Pricing posture:** Free API key to get started; usage-based pricing per translation, no per-seat fees.

**Reality check:** Open-source libraries (`gt-next`, `gt-react`) published on GitHub; includes a CLI (`npx gt@latest`) and an AI agent called Locadex for automated i18n in complex codebases. The core differentiator over i18next/react-intl is translating entire React components rather than requiring key-string extraction—reducing setup friction significantly. Community signal is limited compared to i18next (which has a decade of adoption and a massive ecosystem), so reliability and edge-case handling at scale are less proven. Main risk for solo developers: runtime translation quality depends on AI models, and there is vendor dependency for live translations served at runtime.

**Links:**
- [Homepage](https://generaltranslation.com)
- [GitHub](https://github.com/generaltranslation/gt)
- [Docs](https://generaltranslation.com/docs)

**Last researched:** 2026-08-10
