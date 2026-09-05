---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Visitors Inquire as Guests with Minimized Data

## Decision

Browsing and submitting an inquiry use a guest flow. Public visitor accounts,
passwords, profiles, dashboards, mandatory institutional affiliation,
credential uploads, and automatic email verification are not initial
requirements. Collect only the fields with a documented operational or policy
purpose.

## Rationale

The inquiry workflow needs a small contact record, not a customer-management or
identity-verification system. FTC guidance recommends keeping only personal
information needed for the business purpose and protecting the information
retained.

## Consequences

- The initial request collects the selected entries, name, email, jurisdiction
  screening fields, optional affiliation, and an optional logistics-only
  message; it excludes health, prescription, identity-document, payment, and
  shipping-address collection.
- Any additional field needs a documented purpose and approved retention
  treatment before it is introduced.
- The owner-selected 18+ eligibility rule remains the baseline for inquiry
  submission; it is not represented as a universal legal threshold inferred
  from a reference site. Any added eligibility criterion requires an approved
  policy and retention treatment before the live endpoint is enabled.

## Evidence considered

- [FTC: Protecting Personal Information](https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business)
- [S-001 inquiry data and acknowledgments](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

S-001, "Inquiry data and acknowledgments," "Decisions And Contracts," and
"Dependencies And Blockers."
