---
name: WorkOS
problem-areas: [auth, security]
ring: adopt
ring-reasoning: "In active use for authentication across two of my own projects; the free AuthKit tier (1M MAU) makes it a genuine solo fit despite the enterprise-scale positioning."
summary: "Authentication service with AuthKit for hosted login UI and enterprise identity APIs (SAML SSO, SCIM directory sync, audit logs, and fine-grained authorization)."
source: scraped
discovered-via: https://t3.gg/sponsors
first-seen: 2026-05-21
last-researched: 2026-10-12
managed: auto
homepage: https://workos.com
pricing: https://workos.com/pricing
---

# WorkOS

**What it is:** An authentication service whose AuthKit product provides
hosted login UI, social and passwordless sign-in, and session handling,
alongside enterprise identity APIs (SAML and OIDC SSO, SCIM directory sync,
audit logs, and Fine-Grained Authorization) for when a customer needs them.
FGA became GA in November 2024 and received agent-identity extensions in 2026.

**Problem it solves:** Covers ordinary app authentication for free on
AuthKit up to 1M monthly active users, and means that if a customer ever
demands enterprise SSO or Zanzibar-style permissions, the same vendor already
provides it with no auth migration later.

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
connection at $125/month each for the first 15 connections, then $100 for
16–30, $80 for 31–50, and $65 for 51–100; contact sales above 100. Custom domains add $99/month. FGA
pricing is an enterprise add-on; verify on the pricing page.

**Reality check:** AuthKit covers full hosted auth, but reviewers note
WorkOS still expects you to model your own user and organization data
around it rather than treating it as your database. The per-connection SSO
pricing is fine early (one paying enterprise covers the $125) but grows
linearly with enterprise customer count and gets meaningful around 20 to 30
accounts. FGA (fine-grained, Zanzibar-style authorization) is now GA and a
genuine differentiator for teams that need resource-scoped permissions — a
feature set otherwise requiring a separate tool like Oso or OPA. Compliance
is ISO 27001 and SOC 2 Type II but not FedRAMP or PCI DSS direct
attestation, which matters for certain public sector or payment-adjacent
projects. For a solo developer or team that genuinely won't need enterprise
SSO, Better Auth is a lighter open-source option worth considering first.

**Links:** [Homepage](https://workos.com) · [Pricing](https://workos.com/pricing) · [FGA Docs](https://workos.com/docs/fga)

**Last researched:** 2026-10-12
