# Product Spec: Research Catalog and Inquiry Website

**Status:** Active working contract
**Audience:** Product, content, and application implementation agents

## Product definition

This is a production-quality research catalog website visually modeled on the
layout, hierarchy, merchandising patterns, and polish of established peptide
catalog websites. Catalog entries may be presented in conventional product
cards and detail views, but the primary action starts a private, nonbinding
inquiry about a possible logistics or shipping-cost-sharing conversation rather
than purchasing the item.

The website is not an ecommerce checkout system. An inquiry does not place an
order, reserve material, authorize payment, calculate shipping, approve
eligibility, establish an agreement, or guarantee availability.

## Public experience

The public site includes:

- A catalog of owner-reviewed research-material entries.
- Product cards and detail views with neutral descriptions, documentation
  metadata, review dates, and owner-controlled inquiry status.
- A temporary inquiry list that is never called a cart.
- A limited inquiry flow that requests contact only after an entry is selected.
- How It Works, Contact, and always-reachable legal pages.

The inquiry action remains secondary to normal catalog browsing until the visitor
selects an entry.

## Inquiry flow

The intended flow is:

`browse -> select -> limited contact data -> acknowledgments -> submit -> owner review and contact`

The form may collect name, email, selected entry identifiers, country and
state/province, optional organization or affiliation, and an optional
logistics-only message. It must not request health information, prescriptions,
dosing questions, use plans, attachments, payment data, or passwords.

The visitor must affirm that they are at least 18 and authorized to inquire,
that the inquiry concerns legitimate nonclinical laboratory research rather than
personal, medical, or veterinary use, that it is not an order or commitment,
that they accept the current policies, and that they request contact by email
about this inquiry only.

## Catalog contract

Every public entry requires an immutable identifier, reviewed identity, neutral
description, owner-controlled status, documentation metadata, and last-reviewed
date. Allowed statuses are `open for inquiries`, `paused`, and `archived`;
none means in stock, available, safe, approved, qualified, or guaranteed.

Private mixing and dosing reference material is not public catalog content and
must not be used to infer public names, strengths, preparation, administration,
intended use, safety, or availability without separate human review.

## Owner workflow

Owner operations are private and protected. The owner can review, contact,
pause, archive, and audit inquiries; manage catalog entries; publish policy
versions; pause intake; and retry failed notification jobs. The owner is not
automatically represented as a laboratory, pharmacy, manufacturer, or testing
organization unless that is true and substantiated.

## Hard exclusions

Do not add carts, checkout, payment links, deposits, prices, quantities,
shipping calculations, reservations, fulfillment, subscriptions, public
accounts, public request tracking, participant messaging, medical claims,
testimonials, before-and-after claims, dosing, mixing, preparation,
administration, or personal-use guidance.

## Related specifications

- [Design Spec](DESIGN-SPEC.md) defines the visual system, reference-site
  fidelity, product imagery, layout, and visual acceptance criteria.
- [Workbench S-001](../workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md) is
  the governance and evidence record, not the primary task handoff for product
  or design work.
