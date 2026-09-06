# Peptide Research Catalog - Blueprint

> Generated from LLM Workbench v3.1.1.

**Last reviewed:** 2026-09-05
**Status:** active
**Source root:** `E:\GPT_OS\Projects\peptides_Website`

## Product Map

This project will provide a restrained, owner-managed research-material catalog
for adults who may request a private follow-up about a possible logistics or
shipping-cost-sharing arrangement. It is a catalog-and-inquiry website, not a
store: it stops after preserving a nonbinding inquiry and notifying the owner.
The project includes a local-only catalog-shell prototype for design validation;
no public catalog, inquiry endpoint, or deployment exists.

Core promise:

> Browse reviewed catalog entries and request a conversation without placing an
> order, reserving material, or making a payment through the website.

Detailed product behavior is owned by [docs/PRODUCT-SPEC.md](docs/PRODUCT-SPEC.md)
and detailed visual and asset rules are owned by
[docs/DESIGN-SPEC.md](docs/DESIGN-SPEC.md). The Workbench spec records
governance and evidence; none of those documents replace this Blueprint's
high-level product direction.

The founding prompt is preserved verbatim in
`workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md`.

## Goals And Pillars

- **Truthful catalog boundary:** Present only owner-reviewed identities and
  documentation, with no health, therapeutic, personal-use, preparation, or
  availability guarantees.
- **Meaningful inquiry control:** Capture a small set of required,
  versioned acknowledgments and make every submission subject to owner review.
- **Privacy by minimization:** Collect only contact and jurisdiction-screening
  data needed for an inquiry, secure it, and delete it on an approved schedule.

## Cross-Cutting Architecture And Invariants

| Layer / concern | Choice | Invariant / source |
|---|---|---|
| Bootstrap runtime | Node.js 18+ | Runs Workbench verification and the local-only prototype in `site/`; no public runtime exists. |
| Intended product surface | Next.js App Router with React, TypeScript, and Tailwind CSS | Server Components are the default; Client Components are limited to required browser interactivity. |
| Intended storage | PostgreSQL via Supabase when a later capture slice is approved | A later demo inquiry-capture slice may persist only minimized inquiry fields; policy versions, acknowledgments, inquiry state, and notification jobs remain server-controlled. No Supabase project or credentials are configured. |
| Submission boundary | Server Actions or route handlers | Browser code cannot be the authority for inquiry persistence, acknowledgments, authorization, or notification processing. |
| Testing | Next.js server and browser accessibility checks | Browser controls and direct requests must enforce the same boundary. |
| Deployment/runtime | Vercel target | The visual catalog is built and reviewed locally first. Any later Vercel deployment remains a separate owner-authorized action and public deployment remains blocked pending counsel, host-policy, privacy, and security review. |

Rules that span multiple capabilities:

- The project never implements a cart, checkout, payment link, deposit, price,
  quantity, shipping calculation, reservation, or automatic approval.
- The private reference material is local-only and is not a public source,
  product documentation, or seed import. It may inform a manually reviewed
  candidate-name inventory only.
- Catalog status may say `open for inquiries`, `paused`, or `archived`; it may
  not claim stock, eligibility, safety, or availability.
- No content may provide dosing, mixing, preparation, administration, medical,
  veterinary, treatment, weight-loss, or other personal-use guidance.
- Enabling public inquiries requires server-side validation, MFA-protected
  administration, per-request authorization, rate limiting, HTTPS, and an
  approved retention/deletion process.

## Non-Goals

- E-commerce, payments, ordering, fulfillment, reservations, subscriptions,
  referral programs, public request tracking, or participant messaging.
- Product-use information, testimonials, before-and-after content, medical
  claims, health-data collection, or copied reference-site content and assets.
- Treating labels, acknowledgments, or the phrase shipping-cost sharing as a
  legal determination of the underlying arrangement.

## Spec Catalog

<!-- spec-catalog:start -->
| Spec | Description | Status |
|---|---|---|
| [S-001 - Catalog and Controlled Inquiry Boundary](workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md) | Defines a non-transactional catalog and private owner-reviewed inquiry workflow for research-material entries. | active |
<!-- spec-catalog:end -->

## Cross-Cutting Health

- `node workbench/tools/workbench-layout.mjs validate --project . --genesis` passes;
- `node workbench/tools/spec-workbench.mjs render` and `doctor` pass;
- private mixing/dosing material is ignored by Git and excluded from product output;
- no public surface is represented as launched or legally approved.

## Workbench Entry And Delivery Boundaries

Start with `AGENTS.md`, then `RUNBOOK.md`, `LEXICON.md`, and the assigned spec.
The spec owns requirements, acceptance, decisions, and evidence; this Blueprint
owns cross-cutting product direction. Independent review is required before
integration delivery.
