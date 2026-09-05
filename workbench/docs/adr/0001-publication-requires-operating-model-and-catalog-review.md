---
status: accepted
date: 2026-09-05
canonicalized_in:
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Publication Requires Operating-Model and Catalog Review

## Decision

Keep every catalog entry unpublished until the actual operating model and that
entry's identity, documentation, presentation, intended jurisdiction, and
owner approval have been reviewed. A generic research label, inquiry-only
workflow, or shipping-cost wording is not treated as legal clearance.

## Rationale

FDA materials show that website representations and the surrounding
distribution context matter; labels alone do not settle intended-use questions.
This project therefore makes review a publication control instead of relying on
copy as a compliance mechanism.

## Consequences

- Unreviewed entries stay out of every public surface, including previews,
  metadata, structured data, and inquiry selections.
- The operator can pause an entry and its inquiry path without a code release.
- Qualified counsel must review the real arrangement before public launch, as
  required by S-001; this ADR does not make a legal determination.

## Evidence considered

- [FDA's concerns with unapproved GLP-1 drugs](https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss)
- [FDA warning letter to Xcel Research LLC](https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/xcel-research-llc-694608-12102024)
- [21 CFR 201.128: Meaning of intended uses](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-201/subpart-A/section-201.128)

## Canonical rule

S-001, "Catalog entry contract," "Dependencies And Blockers," and
"Decisions And Contracts."
