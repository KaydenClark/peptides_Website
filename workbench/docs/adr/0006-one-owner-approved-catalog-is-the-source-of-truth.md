---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# One Owner-Approved Catalog Is the Source of Truth

## Decision

Every catalog card, detail page, search result, and inquiry selection reads
from one owner-approved structured catalog. Each entry has a stable identifier,
owner-controlled publication and inquiry status, source-backed facts, and a
review date; accepted inquiries preserve a snapshot of their selected entries.

## Rationale

Independent page content, generated placeholders, and copied competitor assets
can drift or make unsupported claims. A canonical record prevents that drift
and preserves what a visitor actually selected after an entry later changes.

## Consequences

- An entry update is reflected consistently in all current public
  representations.
- Inquiries retain their original selection instead of acquiring a later name,
  specification, or status.
- Publication requires approved facts and licensed or original assets; no
  purity, availability, credential, or certificate claim is invented.

## Evidence considered

- [S-001 catalog entry and inquiry contracts](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

S-001, "Catalog entry contract," "Inquiry data and acknowledgments," and
"Catalog publication blocker."
