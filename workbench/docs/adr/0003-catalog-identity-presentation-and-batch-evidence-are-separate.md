---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Catalog Identity, Presentation, and Batch Evidence Are Separate

## Decision

Model a catalog identity, its physical presentation, and its batch-specific
analytical evidence as separate records. Every displayed chemical identifier,
package configuration, and batch result requires its own source and review
date; no configuration is inferred from vendor convention.

## Rationale

An identity reference, a declared package characteristic, and a measured batch
result answer different questions. Combining them would make it too easy to
turn a general chemical reference into an unsupported statement about a
specific material.

## Consequences

- A blend identifies each component rather than inventing one molecular
  identity.
- Package details are displayed only from actual supporting documentation.
- Private reference material cannot be used as a public data source or import.

## Evidence considered

- [S-001 catalog entry contract](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)
- [FDA's concerns with unapproved GLP-1 drugs](https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss)

## Canonical rule

S-001, "Catalog entry contract" and "Catalog publication blocker."
