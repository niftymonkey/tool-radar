---
name: Arcjet
problem-areas: [security, ai-agent-infra]
ring: assess
ring-reasoning: "The Individual plan is $25/month per app with self-serve signup and a free trial, docs are written for individual developers, and the SDK proves its value on a single small app."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://arcjet.com
pricing: https://arcjet.com/pricing
---

# Arcjet

**What it is:** A developer-first security SDK that runs inline in your application code, providing rate limiting, bot detection, a WAF, email validation, PII detection, and AI prompt-injection protection.

**Problem it solves:** Lets a solo developer add rate limits, signup spam protection, and AI-endpoint cost controls as plain rules in their route handlers, instead of configuring a separate WAF console or proxy.

**When I'd reach for it:**

- An AI feature whose token costs need a per-user budget and protection from automated abuse.
- A signup or trial flow getting hit by bots and disposable-email spam.
- A JavaScript, TypeScript, or Python app where security rules should live in code and ship through normal code review.

**When I wouldn't:**

- A pure hobby project where any paid security spend is hard to justify.
- A legacy or non-JS/Python stack, since Arcjet only has SDKs for modern JS/TS and Python frameworks.

**Pricing posture:** Free 15-day trial, then the Individual plan is $25/month per app, plus usage charges around $0.50 per 1M requests and extra for prompt scanning and email validation. Startup is $299/month per app.

**Reality check:** Community signal is positive but thin, Arcjet is relatively young with few independent reviews. The standout traits cited: rules-as-code (no monkey-patching, unlike Aikido), a local WebAssembly engine plus optional cloud analysis, DRY_RUN mode to test rules safely, and protect() that fails open so a service outage will not block all your traffic. The main caveats are that it is paid (no permanent free tier), per-app pricing, and language coverage is limited to JS/TS and Python.

**Links:** [Homepage](https://arcjet.com) and [Pricing](https://arcjet.com/pricing)

**Last researched:** 2026-05-21
