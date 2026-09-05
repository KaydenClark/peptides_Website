---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Agreements Are Versioned and Enforced by the Server

## Decision

Required acknowledgments are shown together at inquiry submission, start
unchecked, link to accessible policy documents, and are enforced by the server.
Every accepted inquiry records the individual acknowledgment values, timestamp,
and exact policy versions; historical policy text remains available.

## Rationale

Browser controls can be bypassed. OWASP recommends server-side validation
before application processing, so a disabled button or client-only checkbox is
not an enforcement mechanism.

## Consequences

- Direct submissions missing acknowledgments or carrying obsolete policy
  versions are rejected.
- Acknowledgments document an attestation; they do not automatically establish
  eligibility, intended use, or legal compliance.
- Acceptance of inquiry terms never silently enrolls a visitor in marketing.

## Evidence considered

- [OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
- [S-001 inquiry data and acknowledgments](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

S-001, "Inquiry data and acknowledgments" and "Testing Seams."
