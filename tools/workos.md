---
name: WorkOS
problem-areas: [auth, security]
ring: hold
ring-reasoning: "The free tier is generous (1M MAU on AuthKit), but the core SSO and Directory Sync features that justify WorkOS solve an organization-scale problem and are billed per enterprise connection starting at $125/month."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://workos.com
pricing: https://workos.com/pricing
---

# WorkOS

**What it is:** A set of APIs that bolt enterprise identity features (SAML and OIDC SSO, SCIM directory sync, audit logs, an admin portal) onto an existing app.

**Problem it solves:** Lets a B2B side project answer "does it integrate with Okta or Azure AD?" without building SAML and SCIM plumbing by hand, so the first enterprise deal is not blocked on identity work.

**When I'd reach for it:**

- A B2B SaaS where a real prospect with an IT department is asking for SSO before they will sign.
- Adding SCIM provisioning or audit logs because a deal hit SOC 2 review.

**When I wouldn't:**

- A consumer or solo side project with self-serve signups and no enterprise buyers.
- When I want drop-in login UI and managed sessions, since WorkOS expects you to own those yourself.

**Pricing posture:** AuthKit user management is free for the first 1M monthly active users. SSO and Directory Sync are billed per connection, starting at $125/month each (volume discounts above 15 connections).

**Reality check:** Reviewers consistently say WorkOS is not a full auth provider, you still handle sessions, user storage, and UI, and that building enterprise auth before you have enterprise customers is the common mistake. The per-connection model is fine early (one paying enterprise covers the $125) but the bill grows linearly with enterprise customer count and gets meaningful around 20 to 30 accounts. Common advice: ship with Clerk or Better Auth, add WorkOS only when a contract demands it.

**Links:** [Homepage](https://workos.com) and [Pricing](https://workos.com/pricing)

**Last researched:** 2026-05-21
