---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# The Website Creates Inquiries, Not Transactions

## Decision

The website creates a nonbinding request for owner contact, never an order,
reservation, payment authorization, fulfillment instruction, or allocation
commitment.

## Rationale

The product boundary must be truthful about what the application does. An
inquiry flow can preserve a documented owner-review step; it cannot be used to
imply that the underlying activity has been approved.

## Consequences

- The UI uses catalog, inquiry-list, and request-contact terminology.
- It has no cart, checkout, payment, price, quantity, shipping calculation,
  reservation, availability guarantee, or automated eligibility approval.
- A future accepted request stores the exact acknowledgments and policy version,
  but those records are attestations rather than proof of eligibility or legal
  compliance.

## Evidence considered

- [S-001 product boundary and inquiry contract](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

S-001, "Outcome," "Desired Behavior," and "Non-Goals."
