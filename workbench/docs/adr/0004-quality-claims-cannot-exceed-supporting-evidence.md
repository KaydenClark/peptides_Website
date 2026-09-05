---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Quality Claims Cannot Exceed Supporting Evidence

## Decision

Publish a quality claim only when a traceable, batch-linked document supports
that specific claim. Keep identity, purity, quantity, sterility, endotoxin,
and other distinct test results separate; do not use a generic badge or a
default threshold as a substitute for evidence.

## Rationale

A certificate can support only what it actually reports for the identified
material. Treating a single test or a document check as comprehensive quality
or human-safety verification would overstate the evidence.

## Consequences

- Missing, expired, mismatched, or incomplete evidence prevents the associated
  claim from displaying.
- The catalog may link a report only when the operator has the right to publish
  it and it is correctly associated with the relevant batch.
- No default "99%+", "fully verified", "sterile", or human-safety badge is
  allowed.

## Evidence considered

- [S-001 catalog entry contract](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)
- [FDA's concerns with unapproved GLP-1 drugs](https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss)

## Canonical rule

S-001, "Catalog entry contract" and "Catalog publication blocker."
