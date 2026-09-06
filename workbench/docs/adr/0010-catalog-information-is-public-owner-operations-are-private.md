---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Catalog Information Is Public; Owner Operations Are Private

## Decision

Published catalog information is public; inquiry records, owner editing,
policy administration, exports, and private documents are available only to
authenticated and authorized owner accounts. Authorization is enforced by the
server on every applicable request and resource, including direct endpoint and
document-access attempts.

## Rationale

An unlinked URL or hidden button does not protect a resource. OWASP recommends
deny-by-default access control and validating permissions on every request.

## Consequences

- Owner access requires MFA, and browser code never contains secrets.
- An unauthenticated visitor cannot view inquiries, exports, private documents,
  or editing and policy actions, including through direct calls.
- Inquiry contents stay out of public pages, analytics, and routine diagnostic
  logs.

## Evidence considered

- [OWASP Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [S-001 decisions and testing seams](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

S-001, "Decisions And Contracts," "Private owner operations," and
"Testing Seams."
