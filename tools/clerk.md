---
name: Clerk
problem-areas: [auth, ui-components]
ring: assess
ring-reasoning: "Free up to 50K monthly active users with self-serve signup and a $25/month Pro tier, docs aimed squarely at individual developers, and value obvious at small scale."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://clerk.com
pricing: https://clerk.com/pricing
---

# Clerk

**What it is:** A hosted authentication and user management service that ships drop-in React UI components for sign-in, profiles, and organization switching alongside backend session handling.

**Problem it solves:** Gets production-grade auth (social login, magic links, MFA, org and team management) working in a Next.js or React side project in under an hour, with no login forms to design or session logic to write.

**When I'd reach for it:**

- A Next.js or React side project that needs polished auth shipped this weekend.
- A B2C or small-team app where pre-built profile and organization UI saves real days of work.

**When I wouldn't:**

- A project with EU data residency or GDPR sensitivity, since Clerk stores user data in the US only with no self-hosting.
- An app expecting to blow well past 50K monthly active users, where $0.02 per extra user adds up fast.

**Pricing posture:** Hobby plan is free up to 50K monthly active users with no credit card. Pro is $25/month (or $20 billed annually), adds MFA and branding removal, then $0.02 per user above 50K. SAML connections cost roughly $75/month each.

**Reality check:** Reviewers love the developer experience but warn it is a thin foundation: vendor lock-in, US-only data residency, and Clerk has changed its pricing twice in three years. The February 2026 free-tier bump from 10K to 50K MAU delays the migration conversation by months but does not remove it, since overage costs and the lock-in still bite at scale. Some teams now recommend Better Auth or Supabase Auth for new SaaS to keep the user table in their own database.

**Links:** [Homepage](https://clerk.com) and [Pricing](https://clerk.com/pricing)

**Last researched:** 2026-05-21
