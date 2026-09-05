# Product Spec: Research Catalog and Inquiry Website

**Status:** Active implementation contract
**Audience:** Product, content, application, QA, and review agents
**Updated:** 2026-09-05
**Authority:** This handoff refines, but does not weaken, Workbench S-001 and
the accepted ADRs. When documents conflict, `AGENTS.md`, `BLUEPRINT.md`, S-001,
and the accepted ADRs control in that order.

## Goal

Deliver a production-quality, mobile-first research-material catalog with the
recognizable structure and polish of an established physical-product catalog.
Visitors can discover owner-reviewed listings, inspect factual specifications
and correctly matched documents, and send a private, nonbinding request for the
owner to contact them about a possible logistics or shipping-cost-sharing
conversation.

The website ends at a saved inquiry and owner follow-up. It never places an
order, reserves material, accepts money, calculates or promises a shipping
split, establishes an agreement, or approves eligibility.

## Exact completion state

The capability is complete only when all of the following are true:

- The public route set in this spec exists, is responsive, and contains final
  owner-approved content rather than prototype or placeholder language.
- The home, catalog, and product-detail experiences read immediately as a
  physical-product catalog, with consistent original vial imagery and truthful
  listing data.
- Catalog search, category filtering, sorting, zero results, data failure,
  archived/paused listings, document availability, navigation, and browser-back
  behavior match the contracts below.
- A visitor can start from a listing, submit the limited inquiry form with
  server-enforced current acknowledgments, and receive confirmation only after
  the inquiry is durably accepted.
- Duplicate submission, stale listing state, stale policy versions,
  notification failure, validation failure, and server failure have explicit,
  tested outcomes.
- The protected owner surface can manage catalog publication and inquiry
  review without exposing private data through public routes, URLs, analytics,
  logs, or notification email.
- Every public listing and linked document has an owner approval record,
  verified usage rights, and a current review date. No public data is inferred
  from the private mixing/dosing sources.
- Keyboard, screen-reader, zoom, reduced-motion, and target viewport checks pass;
  all links, controls, forms, and documents are exercised in a real browser.
- Required legal, privacy, host-policy, security, retention, and owner launch
  gates are recorded as satisfied in S-001. Until then, the completed surface
  remains non-public and no live inquiry endpoint is enabled.

Passing a build or rendering the homepage alone is not completion.

## Current verified baseline

As of 2026-09-05:

- `site/` is a Next.js 16.3.4 App Router prototype using React 19, TypeScript,
  Tailwind CSS tooling, and one client-rendered page.
- The prototype exposes five generic illustrative selectors, one neutral
  candidate card, and a local-only selected state. It has no real routes beyond
  `/`, no catalog data model, form, server submission, database, email,
  authentication, owner surface, policies, or deployment.
- The five candidate visuals are abstract research imagery and therefore do not
  satisfy the production product-image contract.
- The Workbench controls, S-001, and ADR-0001 through ADR-0011 exist. TK-001 is
  complete; production inquiry and owner-operation tickets remain blocked.
- The checkpoint at the start of this specification pass was clean and matched
  `origin/integration` at commit `97a66387dbace606755cf9a44d81429710f1930e`.

## Users and jobs

### Visitor

- Understand what the catalog is and is not.
- Find a reviewed listing by name or neutral category.
- Compare confirmed variants and documentation status.
- Read factual listing details without medical or personal-use guidance.
- Ask the owner to make contact without believing a transaction occurred.

### Owner/operator

- Draft, review, preview, publish, pause, archive, and audit catalog entries.
- Match documents to the correct entry, variant, and lot when applicable.
- Review minimized inquiry data and record a manual disposition.
- Publish immutable policy versions, pause intake, retry notifications, and
  apply the approved retention/deletion process.

## Information architecture and route contract

Public routes use stable, readable slugs. Protected routes must never be linked
or exposed as public product features.

| Route | Required purpose and content | Primary action |
|---|---|---|
| `/` | Notice, header, product-led hero, catalog preview, three-step process, documentation explanation when useful, short process FAQ, footer | Browse catalog |
| `/catalog` | Page introduction, search, justified category filters, sort, accurate result count, reviewed listing grid, explicit result states | View details |
| `/catalog/[slug]` | Breadcrumb, identity, imagery, confirmed variants, compact specifications, matched documents, research/inquiry notice | Request to split shipping |
| `/inquiry` | Selected-listing summary, minimized contact form, required acknowledgments, validation and submission states | Send inquiry |
| `/inquiry/confirmation` | Receipt of an actually accepted inquiry; no transactional language | Return to catalog |
| `/how-it-works` | Browse, inquire, owner follow-up; limits and nonbinding nature of the process | Browse catalog |
| `/documentation` | Search or browse only documents that are useful and correctly matched; omit route if the approved catalog is too small | View document |
| `/contact` | General contact method with clear scope and privacy expectations | Send message |
| `/terms` | Current approved Terms of Use and version/effective date | Return |
| `/participation-policy` | Current approved eligibility and participation boundary | Return |
| `/privacy` | Current approved Privacy Notice and version/effective date | Return |
| `/research-notice` | Approved research-only and prohibited-use notice | Return |
| protected owner routes | Catalog, document, policy, inquiry, notification, retention, and audit operations | Context-specific owner action |

Do not create empty routes to imitate a reference site. `Documentation` is
shown in navigation only when approved documents exist. Legal routes remain
reachable from every public page.

## Global public experience

- A compact notice explains the research-only catalog and inquiry-only boundary.
- Main navigation is **Catalog**, **How it works**, optional
  **Documentation**, and **Contact**. A selected inquiry indicator may appear
  only after a listing is selected and must never resemble a cart.
- Search belongs to the catalog, not to a redundant global search system.
- The inquiry action remains secondary to browsing until a listing is selected.
- The footer carries navigation, contact, approved legal links, and the fuller
  research notice. Footer text does not substitute for action-level clarity.
- There are no promotional countdowns, sale banners, rewards, subscriptions,
  memberships, affiliates, bulk-order controls, payment marks, stock urgency,
  or newsletter capture unless separately specified and approved.

## Homepage requirements

Render sections in this order:

1. Compact research/inquiry notice.
2. Header.
3. Product-led hero with original vial artwork and one dominant catalog action.
4. Catalog preview using actual approved listing records.
5. Three-step process: browse, send inquiry, receive owner follow-up.
6. Documentation explanation, but only if useful documents exist.
7. Short FAQ limited to site process and boundaries.
8. Footer.

The catalog preview precedes long explanatory content. The hero may use this
draft structure, subject to final content approval:

- Eyebrow: a concise research-catalog label.
- Headline: `Research compounds. A simpler way to connect.`
- Lead: explain browsing and owner follow-up without promising availability,
  quality, response time, shipping time, testing, or eligibility.
- Primary action: `Browse catalog`.
- Secondary action: `How it works`.

## Catalog discovery contract

### Toolbar and query behavior

- Search matches approved display name and approved aliases only. It must not
  search unpublished private fields.
- Category controls appear only when there are meaningful, approved categories.
- Sort options are `Catalog order`, `Name: A-Z`, and `Name: Z-A`. There is no
  price sort.
- The visible result count reflects the filtered collection exactly and uses
  singular/plural labels correctly.
- Search, filter, and sort state is represented in the URL so refresh, sharing,
  browser back, and returning from a detail page preserve useful context.
- Unknown or invalid query values fall back safely and do not produce a server
  error.

### Required states

| State | Required outcome |
|---|---|
| Default | Owner-defined catalog order, accurate count, no fabricated filler cards |
| Search/filter active | Controls and removable active state are visible |
| Zero results | Explain that no listings match and provide a reset action |
| Loading | Use only when data is genuinely loading; avoid fake delay |
| Data error | Distinguish failure from an empty catalog and provide retry/recovery |
| Paused listing | Detail remains readable; inquiry action is replaced by truthful status |
| Archived listing | Excluded from normal results; stable detail URL may explain archival without offering inquiry |

## Catalog entry and variant contract

The canonical catalog is owner-controlled. Public presentation is derived from
approved records, never from private source files or reference-site data.

### Required entry fields

| Field | Contract |
|---|---|
| `id` | Immutable internal identifier; never recycled |
| `slug` | Unique, stable public slug with redirect handling after approved change |
| `displayName` | Owner-reviewed public identity |
| `approvedAliases` | Optional search-only aliases; not scraped or inferred |
| `category` | Neutral, approved catalog grouping; never an outcome claim |
| `summary` | Short factual catalog description; no use guidance or claims |
| `status` | `open_for_inquiries`, `paused`, or `archived` |
| `catalogOrder` | Owner-defined integer ordering |
| `variants` | One or more separately identified, confirmed package variants |
| `specifications` | Verified facts applicable to this record, with provenance |
| `documents` | Correctly matched document references and public availability state |
| `images` | Approved original/licensed assets and alt text |
| `reviewedAt` / `reviewedBy` | Latest human content review evidence |
| `publishedAt` | Null until explicitly published |

### Variant rules

- A variant identifies its nominal mass and packaging only when confirmed.
- Mass is not concentration. Never infer preparation volume from milligrams.
- The selector appears only when two or more confirmed variants exist.
- Changing the variant updates the shown amount, image label when applicable,
  matching document state, and inquiry context as one coherent selection.
- The system takes no purchase quantity. One selected variant is context for a
  conversation, not an order line.

### Document rules

- A document record identifies its actual document type, source, entry,
  variant, lot/batch where applicable, date, public file, review status, and
  verified right to publish.
- A certificate or report must never be reused as generic evidence for a
  different product, variant, or lot.
- Missing evidence is displayed truthfully as unavailable. No fake badge,
  laboratory logo, purity percentage, QR code, or `tested` label is allowed.
- Public files use non-sensitive filenames and metadata and open successfully.

## Product-detail contract

The page order is:

1. Breadcrumb.
2. Neutral category and display name.
3. Approved gallery led by the same vial identity used in the catalog.
4. Short factual summary.
5. Variant selector when justified.
6. Compact specification list.
7. Matched documentation link or truthful unavailable status.
8. Plain research-only and inquiry-only notice.
9. `Request to split shipping` action when status permits.
10. Explanation that the action begins owner follow-up and is not a purchase,
    allocation, or commitment.
11. Below-panel Specifications, Documentation, and Research notice sections.

Related listings are optional, catalog-derived, and never framed as a protocol,
stack, treatment combination, or recommendation. Do not invent extra gallery
angles or duplicate an image merely to fill thumbnails.

## Inquiry selection and form contract

### Selection

- Selecting a listing/variant creates temporary browser context only.
- The state is called an `inquiry list` only if multiple entries are explicitly
  approved later; otherwise use a singular selected-listing summary.
- There are no prices, quantities, totals, discount logic, delivery estimates,
  or reservation timers.
- Returning to the catalog preserves search/filter state and the current valid
  selection. A paused or archived selection is revalidated by the server.

### Allowed fields

- Name.
- Email.
- Selected entry and variant identifiers supplied by the application and
  revalidated by the server.
- Country and state/province for manual jurisdiction screening.
- Optional organization or affiliation, accepting `independent researcher`.
- Optional short logistics-only message.

Show this instruction immediately above the message field:

> Use this field only for logistics questions. Do not submit medical
> information, prescriptions, dosing questions, or personal-use details.

Do not collect payment information, shipping address, health data,
prescriptions, use plans, attachments, passwords, MFA codes, purchase quantity,
or a marketing opt-in bundled into required consent.

### Required acknowledgments

Each item starts unchecked, has its own label, links directly to the applicable
policy, and is validated server-side:

1. The submitter is at least 18 and authorized to send the inquiry.
2. The inquiry concerns legitimate nonclinical laboratory research, not
   personal, medical, or veterinary use.
3. The inquiry is not an order, reservation, payment authorization, allocation,
   or commitment.
4. The submitter has read and agrees to the current Terms of Use and
   Participation Policy and acknowledges the current Privacy Notice.
5. The submitter requests contact by email about this inquiry only.

The server rejects absent, false, or stale policy versions even when browser
controls are bypassed. These are attestations, not proof of legal eligibility.

### Submission behavior

- Validate, normalize, and length-limit all fields on the server.
- Revalidate the selected entry/variant and intake status at submission time.
- Use an idempotency key so repeated activation, refresh, or network retry
  creates one inquiry and one notification job.
- Save the inquiry snapshot, individual acknowledgments, exact policy versions,
  server timestamp, and notification job atomically.
- Email is a notification channel, never the system of record. Owner alerts
  contain only a request ID and protected link, not the full inquiry body.
- On field validation failure, focus/summarize errors and preserve safe input.
- On transient failure, preserve safe input and offer a retriable action.
- Show confirmation only after durable acceptance. Do not claim email delivery
  unless separately confirmed.

Approved confirmation meaning:

> Your inquiry has been received. The site owner will contact you before any
> arrangements are made.

A real neutral inquiry reference may be shown. There is no order number,
receipt, payment confirmation, delivery estimate, allocation promise, or public
tracking route.

## Contact contract

General contact and listing inquiry are separate intents. The Contact page must
state what messages are appropriate, apply the same prohibition on health/use
information, collect no more than name, email, subject, and short message, and
provide server validation, rate limiting, error handling, retention treatment,
and truthful confirmation. It must not become a bypass around required inquiry
acknowledgments.

## Protected owner operations

All owner routes require authenticated and authorized access; administrator
access requires MFA. The protected surface supports:

- Catalog drafts, validation, preview, human approval, publication, pause, and
  archival with audit events.
- Variant, image, document, slug/redirect, and review-date management.
- Immutable policy-version drafting, preview, publication, and current-version
  selection.
- Inquiry queue states: `unverified`, `needs_review`, `contacted`, `closed`,
  `declined`, `withdrawn`, and `spam`.
- Notification status and idempotent retry.
- Global intake pause without deleting catalog content.
- Approved retention, deletion, export, restore, and incident procedures.

Every private action is authorized server-side. Public knowledge of an ID or URL
never grants access. Sensitive data is excluded from routine logs and analytics.

## Cross-cutting quality requirements

### Accessibility and responsive behavior

- Meet WCAG 2.2 AA for implemented content and interactions.
- Use semantic landmarks and headings, persistent labels, visible keyboard
  focus, useful names/descriptions, announced validation, and logical focus
  order.
- Modal navigation traps focus, supports Escape, and restores focus.
- Touch targets are at least 44 by 44 CSS pixels; principal form and CTA
  controls target 48 pixels in height.
- Support 200% browser zoom, reflow at 320 CSS pixels, reduced motion, keyboard
  only, and screen-reader operation without lost content or function.

### SEO and metadata

- Every public route has unique approved title, description, canonical URL, and
  social metadata with no unsupported quality/medical claims.
- Catalog/detail structured data must not declare price, offer, stock,
  availability, aggregate rating, or medical properties. Do not use commerce
  schema simply because the UI resembles product cards.
- `robots`, sitemap, redirects, not-found behavior, and archived listing rules
  are explicit before public deployment.

### Security and privacy

- Use HTTPS, secure server-side sessions, CSRF protection, rate limits, abuse
  controls proportionate to risk, safe output encoding, secret management,
  privacy-safe errors, and dependency/security review.
- Default to no analytics pixels, session replay, retargeting, chatbot, public
  accounts, or public inquiry lookup.
- Define and test retention/deletion across the database, mail provider, logs,
  exports, backups, and support channels before launch.
- Document backup and restore, incident response, monitoring, and owner access
  recovery before accepting live inquiries.

### Performance and resilience

- Use optimized responsive images with explicit dimensions and no layout shift.
- Keep catalog browsing functional without client-only authority. Client
  Components are limited to required interaction.
- Define performance budgets during ticketing and verify representative mobile
  and desktop pages in the production build; do not claim performance from
  local impressions.
- A failed document, catalog fetch, notification, or form submission has an
  explicit recoverable state and must not silently disappear.

## Hard exclusions

Do not add carts, checkout, payment links, deposits, prices, purchase quantities,
shipping calculations, reservations, fulfillment, subscriptions, memberships,
rewards, affiliates, public accounts, public request tracking, participant
messaging, medical claims, testimonials, before-and-after claims, protocols,
dosing, mixing, reconstitution, preparation, administration, or personal-use
guidance.

Do not copy reference-site brand assets, text, product data, certificates,
claims, layout code, or proprietary imagery. References inform familiar
information architecture and presentation only.

## Dependencies and owner gates

The interface may be implemented and reviewed locally without satisfying public
launch gates, but it must not expose a live inquiry endpoint or publish catalog
entries until:

- Qualified counsel reviews the actual arrangement, roles, money flow,
  jurisdictions, audience, language, and catalog content.
- The owner approves final Terms, Participation Policy, Privacy Notice,
  Research Notice, consent treatment, retention/deletion schedule, and operator
  eligibility policy.
- The owner approves each catalog record, variant, image, document, and public
  statement and verifies the right to publish them.
- Hosting and email providers permit the accurately disclosed activity.
- Security design, MFA enrollment, incident response, monitoring, backup,
  restore, retention, and deletion are demonstrated.
- The owner explicitly authorizes deployment/publication.

## Acceptance and verification matrix

| Area | Required proof before capability completion |
|---|---|
| Routes and content | Automated route checks plus real-browser review of every public route, link, document, not-found state, and protected-route boundary |
| Catalog | Unit/integration tests for query parsing, search, filters, sort, counts, publication status, variants, stale data, and document matching |
| Inquiry | Direct-request and browser tests for validation, policy versions, idempotency, atomic persistence, stale selections, failure recovery, and truthful confirmation |
| Owner surface | Authentication, MFA, authorization, object-level access, audit, notification retry, intake pause, retention, deletion, backup, and restore tests |
| Accessibility | Automated scan plus keyboard, focus, screen-reader spot check, 200% zoom, reduced motion, and 320-pixel reflow |
| Responsive UI | Browser coverage at 320, 360, 390, 768, 1024, and 1440 CSS pixels, including long names and error states |
| Security/privacy | Threat model and security review, rate-limit/CSRF/direct-route tests, privacy-safe log inspection, dependency scan, and secrets/config review |
| Production | Lint, type check, unit/integration suite, production build, browser suite, deployment smoke test, monitoring signal, and rollback/recovery exercise |
| Governance | Workbench render/doctor, owning evidence update, independent review, owner gates recorded, and no private-source or prohibited-content leakage |

## Implementation handoff

An agent starting cold must:

1. Read `AGENTS.md`, `RUNBOOK.md`, `LEXICON.md`, `BLUEPRINT.md`, S-001, this
   Product Spec, and `DESIGN-SPEC.md`.
2. Run the Workbench doctor/next loop and inventory Git state without modifying
   or deleting unrelated work.
3. Confirm the assigned ticket and its owner gates. This spec does not itself
   authorize implementation, publication, deployment, commit, or push.
4. Use red/green tests for behavior. Build only approved catalog/content
   fixtures and preserve the private-source boundary.
5. Record proof in S-001, render the Taskboard, run relevant verification, and
   obtain independent review before integration delivery.

The first future visual review slice should contain only the notice/header,
hero, and one row of approved listing cards at 1440 by 1000 and 390 by 844. It
must not enable submission. Detailed ticket decomposition belongs in a later
`to-tickets` pass after the owner authorizes implementation.

## Related specifications

- [Design Spec](DESIGN-SPEC.md) defines exact visual roles, geometry,
  responsive behavior, assets, and visual acceptance.
- [Workbench S-001](../workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md)
  owns capability governance, decisions, launch gates, tickets, and evidence.
