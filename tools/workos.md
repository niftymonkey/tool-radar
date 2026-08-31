---
name: WorkOS
problem-areas: [auth, security]
ring: adopt
ring-reasoning: "In active use for authentication across two of my own projects; the free AuthKit tier (1M MAU) makes it a genuine solo fit despite the enterprise-scale positioning."
summary: "Authentication service with AuthKit for hosted login UI and enterprise identity APIs (SAML SSO, SCIM directory sync, audit logs)."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-05-21
managed: auto
homepage: https://workos.com
pricing: https://workos.com/pricing
---

# WorkOS

**What it is:** An authentication service whose AuthKit product provides
hosted login UI, social and passwordless sign-in, and session handling,
alongside enterprise identity APIs (SAML and OIDC SSO, SCIM directory sync,
audit logs) for when a customer needs them.

**Problem it solves:** Covers ordinary app authentication for free on
AuthKit up to 1M monthly active users, and means that if a customer ever
demands enterprise SSO, the same vendor already provides it with no auth
migration later.

**When I'd reach for it:**

- A side project that needs solid hosted auth with login UI and sessions,
  where the free tier removes any per-user cost concern.
- A B2B app that may later need SSO or SCIM, and wants one auth vendor that
  scales into enterprise without a rebuild.
- Replacing a hand-rolled auth layer where session security and login UI
  are not worth maintaining myself.

**When I wouldn't:**

- A project that needs self-hosted or open-source auth, since WorkOS is
  fully managed.
- When several enterprise SSO connections are needed before there is
  revenue, since those bill per connection from $125/month each.

**Pricing posture:** AuthKit authentication and user management is free for
the first 1M monthly active users. SSO and Directory Sync are billed per
connection, starting at $125/month each, with volume discounts above 15
connections.

**Reality check:** AuthKit covers full hosted auth, but reviewers note
WorkOS still expects you to model your own user and organization data
around it rather than treating it as your database. The per-connection SSO
pricing is fine early (one paying enterprise covers the $125) but grows
linearly with enterprise customer count and gets meaningful around 20 to 30
accounts. Common advice for teams with no enterprise buyers yet is to run on
the free AuthKit tier and turn on paid SSO connections only when a contract
demands it.

**Links:** [Homepage](https://workos.com) and [Pricing](https://workos.com/pricing)

**Last researched:** 2026-05-21
