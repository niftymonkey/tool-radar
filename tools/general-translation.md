---
name: General Translation
problem-areas:
  - i18n
ring: assess
ring-reasoning: Free API key with usage-based pricing and no per-seat fees, self-serve setup via `npx gt@latest`, and docs aimed at individual React/Next.js developers. Solves a real solo-project friction point — adding i18n without translation-key churn — at a scale where you pay only when you actually translate content.
summary: "AI-powered i18n toolkit for React and Next.js whose \\<T\\> wrapper translates literal JSX at build time, so UI copy needs no extracted translation key."
source: scraped
discovered-via: t3-sponsors
first-seen: 2026-06-08
last-researched: 2026-08-10
managed: auto
homepage: https://generaltranslation.com
pricing: https://generaltranslation.com/pricing
---

# General Translation

**What it is:** An AI-powered i18n toolkit for React and Next.js whose `<T>` wrapper translates the literal JSX inside it, typically at build time, so simple UI copy needs no extracted translation key.

**Problem it solves:** Adds multilingual support to a React app in hours rather than days, cutting most of the translation-key bookkeeping that i18next or react-intl require for static UI copy.

**When I'd reach for it:**

- Internationalizing a Next.js or React app where most translatable copy is static JSX and the key-extraction ceremony is the main friction.
- Adding i18n to an existing app quickly — setup is a single `npx gt@latest` run.
- When AI translations that refresh as you ship new copy are good enough, and a human translation vendor would be overkill.

**When I wouldn't:**

- Non-React or non-Next.js stacks, which the SDK does not target.
- When professional human translators need to sit in an approval workflow (Lokalise or Crowdin fit better), or for legal, medical, or heavily formatted content where translation quality is critical.

**Pricing posture:** Free API key to get started, then usage-based pricing per translation with no per-seat fees.

**Reality check:** The libraries (`gt-next`, `gt-react`) are open source, and the toolchain includes a CLI (`npx gt@latest`) plus an agent, Locadex, for automating i18n across a larger codebase. The differentiator over i18next and react-intl is the keyless `<T>` path for literal JSX; it is an option rather than a replacement for dictionaries, and JSON translation files remain supported for dynamic strings and content the wrapper cannot reach statically. Community signal is thin next to i18next's decade of adoption and ecosystem, so edge-case handling at scale is less proven. Main risks for a solo developer: translation quality depends on the underlying AI models, and any translations served at runtime create a vendor dependency.

**Links:**
- [Homepage](https://generaltranslation.com)
- [GitHub](https://github.com/generaltranslation/gt)
- [Docs](https://generaltranslation.com/docs)

**Last researched:** 2026-08-10
