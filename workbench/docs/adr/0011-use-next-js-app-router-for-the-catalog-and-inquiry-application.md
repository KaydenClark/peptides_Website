---
status: accepted
date: 2026-09-05
canonicalized_in:
  - BLUEPRINT.md
  - workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md
---

# Use Next.js App Router for the Catalog and Inquiry Application

## Decision

Build the catalog-and-inquiry application with Next.js App Router, React,
TypeScript, and Tailwind CSS. Use Server Components by default; introduce
Client Components only for required browser interactivity. All submissions use
Server Actions or route handlers, and Vercel is the intended deployment target.

## Rationale

The application needs responsive, SEO-friendly multipage catalog pages and a
strictly server-controlled inquiry boundary, not an e-commerce storefront.
This stack supports server-rendered content and keeps submission handling out
of browser-only code.

## Consequences

- Static catalog and legal content stays in Server Components unless browser
  interactivity is necessary.
- A Client Component never becomes the authority for inquiry persistence,
  acknowledgments, authorization, or notification processing.
- No cart, checkout, payment, buy-now action, order, reservation, purchase
  quantity control, order history, customer account, or medical-use content is
  introduced by the chosen stack.
- Vercel deployability is an implementation target, not authorization to deploy;
  S-001's legal, host-policy, privacy, and security launch gates still apply.

## Evidence considered

- Owner-provided architecture direction on 2026-09-05
- [S-001 product boundary and launch blockers](../../specs/S-001-catalog-inquiry-boundary/SPEC.md)

## Canonical rule

BLUEPRINT.md, "Cross-Cutting Architecture And Invariants," and S-001,
"Decisions And Contracts" and "TK-001 - Assigned task."
