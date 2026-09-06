---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Saved Inquiries Are Durable; Email Is a Notification

## Decision

A successful inquiry is durably recorded before receipt is confirmed. Email is
an asynchronous notification derived from that saved record, not the system of
record; delivery failures remain visible and retryable, and repeat submissions
do not create duplicate inquiries or alerts.

## Rationale

Email can fail after a browser reports success. Separating durable inquiry
storage from notification delivery preserves the request and gives the owner a
recoverable, auditable operational path.

## Consequences

- Inquiry storage and notification-job creation are atomic.
- Owner alerts contain only an inquiry ID and a secure owner-operations link,
  never the full request body.
- The system may use an established private administration interface; it does
  not require a custom owner dashboard.

## Evidence considered

- [S-001 private owner operations and testing seams](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

S-001, "Private owner operations," "Decisions And Contracts," and
"Testing Seams."
Consequences: [what changes for tools, controls, or agents; name the control that carries the rule].

Provenance: [the promoted checkpoint or owner decision, by repository-relative path].
