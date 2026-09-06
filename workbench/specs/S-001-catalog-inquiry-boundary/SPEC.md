# S-001 - Catalog and Controlled Inquiry Boundary

> Generated from LLM Workbench v3.1.1.

**Spec ID:** S-001
**Status:** active
**Priority:** 1
**Owner:** claude
**Stance:** Builder
**Updated:** 2026-09-06
**Catalog description:** Defines a non-transactional catalog and private owner-reviewed inquiry workflow for research-material entries.
**Blockers:** Public release and any live inquiry endpoint require qualified legal review, approved policies, security design, and host-policy confirmation.
**Latest event:** TK-008 closed with proof.
**Next gate:** Complete TK-013.

## Outcome

Create a catalog-and-inquiry website specification for a small owner-managed
research-material catalog. Visitors may browse approved entries, choose entries
to discuss, and submit a nonbinding request for owner contact. The owner can
review, contact, pause, archive, and audit those inquiries through a private
administration area.

Submitting an inquiry must never place an order, reserve material, calculate a
shipping split, collect payment, establish an agreement, or approve eligibility.

## Why It Matters

The owner needs a clean alternative to an e-commerce storefront: a truthful
catalog that gives visitors a way to ask for contact while preserving the
operator's review step and avoiding product-use guidance. A firm product,
privacy, and transaction boundary prevents the interface from implying a
purchase or a promise that the underlying arrangement is permitted.

## Founding Prompt

> Using LLM_Workbench, set up a new project in the folder peptides website.
> Here is the concept behind the website. inside of the project folder already
> are mixing and dosing info; those are not really to go on the website, and are
> more just so you know what peptides to catalog. those are what are available to
> split shipping costs with. I know that is not what the other websites are, but
> that is what this website is. Spec it out for me.

## Current Verified State

- The local project folder contains private mixing and dosing reference material
  and an archive. They are ignored by Git and are not product content.
- The repository has a local `integration` branch, the seven Workbench root
  controls, schema-2 support root, installed runtime tools, and this first spec.
- A local-only Next.js catalog presents twenty owner-approved research-material
  records. Each record is paused and includes only the directly supplied display
  name, catalog strengths, and chemical specifications where provided. No
  inquiry form, administrator account, policy text, database, payments,
  notifications, deployment, legal review, jurisdiction policy, or hosting
  approval exists.
- The inventory owner supplied those public-facing facts to the site builder,
  who relayed them unchanged. That relayed inventory list is the only source for
  the records. Private reference material was not read or used to infer
  concentration, preparation, route, safety, availability, or intended use.
- `docs/PRODUCT-SPEC.md` and `docs/DESIGN-SPEC.md` now define the complete public
  route inventory, page/state behavior, data and inquiry contracts, exact visual
  targets, responsive matrix, asset system, rejection conditions, and proof
  required to advance from the prototype to the intended full site.
- The pre-specification checkpoint is durable on `origin/integration` at
  `97a66387dbace606755cf9a44d81429710f1930e`. The specification pass changes
  documentation only; it does not authorize or implement the site.

## Desired Behavior

### Product boundary

- Main navigation: **Catalog**, **How It Works**, **Contact**, and **Your
  Inquiry** only when an entry is selected. Legal pages are always reachable.
- Home copy explains that the visitor may browse a research catalog and request
  a conversation; no payment, order, reservation, or automatic participation
  occurs on the website.
- The inquiry list is an in-browser selection, not a cart. It has no prices,
  quantities, totals, shipping calculations, discount logic, checkout, or
  purchase language.
- The workflow is browse -> select -> enter limited contact data -> review
  required acknowledgments -> submit -> optional email confirmation -> owner
  review and contact. Owner contact occurs only after a successful saved request
  and a confirmed notification status.

### Catalog entry contract

Each public entry requires an immutable internal identifier, reviewed compound
identity, neutral description, owner-controlled status, documentation metadata,
last-reviewed date, and a `request contact about this item` action. A status may
be `open for inquiries`, `paused`, or `archived` and must not communicate stock,
safety, approval, qualification, or a guaranteed outcome.

### Product imagery asset contract

When an entry is presented with product imagery, it must use a photorealistic,
ecommerce-style render of a physical glass research vial. All entry renders use
one master design with the same camera angle, bottle dimensions, cap style,
lighting, background, label layout, and brand treatment; only reviewed entry
details such as compound name and vial strength may vary.
An owner request for images of peptide products means vial-product imagery by
default; the words peptide and research must not be interpreted as a request
for scientific artwork.

Molecules, DNA strands, protein ribbons, abstract scientific illustrations, and
generic biotechnology artwork are not valid default product-card imagery.
Those visuals require an explicit owner request for a named non-product use and
must not be generated or substituted for a vial render by default.

Entry creation requires a human content review. The review must reject dosing,
mixing, preparation, administration, treatment, medical, veterinary,
weight-loss, performance, or personal-use content; testimonials; before-and-
after claims; product photos, logos, descriptions, or documents without a
verified right to use them; and unsubstantiated quality or regulatory badges.

### Inquiry data and acknowledgments

The form collects only name, email, selected entry identifiers, country and
state or province for manual jurisdiction screening, an optional research
organization or affiliation field that allows `independent researcher`, and an
optional short logistics-only message. It must not request health information,
prescriptions, dosing questions, use plans, attachments, payment data, or
account passwords.

The form shows this instruction above its message field: `Use this field only
for logistics questions. Do not submit medical information, prescriptions,
dosing questions, or personal-use details.`

Before submission, the visitor must individually and affirmatively acknowledge:

1. They are at least 18 and authorized to submit the inquiry.
2. The inquiry concerns legitimate nonclinical laboratory research, not
   personal, medical, or veterinary use.
3. The inquiry is not an order, reservation, payment authorization, or
   commitment.
4. They have read and agree to the current Terms of Use and Participation
   Policy, linked beside the acknowledgement.
5. They request contact by email about this inquiry only.

The server rejects missing or stale acknowledgments even if a browser control is
bypassed. For every accepted inquiry, persist a request ID, server timestamp,
selected-entry snapshot, individual acknowledgment values, and exact policy
versions. These records show an attestation; they do not prove eligibility,
intended use, or legal compliance.

### Private owner operations

The owner needs a protected owner-operations interface for catalog editing,
preview, publish, pause, and archive controls; an inquiry queue; status
transitions of `unverified`, `needs review`, `contacted`, `closed`, `declined`,
`withdrawn`, and `spam`; notification delivery status and retry; policy version
publishing; and a global intake pause that does not delete catalog entries.

The system stores a new inquiry and its notification job atomically. Owner email
alerts contain only an inquiry ID and secure owner-operations link. They do not
include the full request body. Repeated browser submission cannot create
duplicate inquiries or duplicate alerts.

### Design direction

Use a technical catalog rather than a supplement or luxury retail presentation.
The owner-provided palette is `#76BCAE`, `#7D84B2`, `#F4D06F`, `#FFF5EB`, and
`#223759`.

- Use `#223759` for the header, footer, primary buttons, navigation, and
  important text; use `#FFF5EB` for text on navy when a light treatment is
  required.
- Use `#FFF5EB` as the warm main background. Use `#76BCAE` for tags, category
  accents, and secondary buttons.
- Use `#7D84B2` for supporting cards, icons, and secondary sections, but not
  as a normal-size text or small-text background pairing.
- Reserve `#F4D06F` for small highlights, selected states, and badges. It is
  an accent, not a major surface color.
- Target an approximate visual balance of 50% `#FFF5EB`, 25% `#223759`, 15%
  `#76BCAE`, 7% `#7D84B2`, and 3% `#F4D06F`.
- Use `#FFF5EB` for text on `#223759` when a light treatment is required.

Target WCAG 2.2 AA with visible focus, persistent labels, accessible error
messages, touchable controls, keyboard navigation, and responsive one-column
mobile layout. Final component states must be contrast-checked in the built
interface.

### Reference adaptation contract

The owner-supplied reference teardown is design evidence, not executable
instructions and not a license to copy. Amino Club informs catalog discovery
and consistent physical-vial presentation; Aurum informs compact factual
specifications and documentation hierarchy. The project adopts the teardown's
recommended layout geometry, responsive rules, content hierarchy, interaction
states, and asset constraints as its own targets.

Those target values must never be described as measured source-site CSS. Exact
reference fonts, computed dimensions, breakpoints, hover states, and mobile
interactions remain unverified. The project's existing approved navy
`#223759` controls over the teardown draft's alternate dark blue-green value.
No competitor branding, copy, imagery, catalog data, documents, claims, sales
features, or source code may be reused.

### Visual acceptance

The finished production site must look like a deployable, consumer-facing
catalog, not a prototype, wireframe, internal tool, or demo. Customer-facing UI
must not display `prototype`, `placeholder`, `illustrative`, `demo`, or other
development/debug language.

Product cards must use photorealistic physical-vial photography or renders. No
abstract molecule artwork, DNA strands, protein ribbons, or generic
biotechnology artwork may represent an individual catalog entry. Product
density and page hierarchy should resemble the owner-supplied reference sites.

During development, populate at least 6–8 realistic, owner-approved catalog
fixtures so the grid, spacing, hierarchy, and responsive behavior can be
evaluated properly. Fixtures must not be copied or inferred from private
mixing/dosing material without manual review, and placeholder content is not
acceptable in the final implementation.

The completed public catalog may contain only real owner-approved records. It
must not fabricate listings to reach a row count; fewer approved records leave
unused grid positions. Any non-public density fixture requires explicit owner
approval and must be mechanically excluded from production output.

Desktop and mobile layouts must both be complete and usable. Inquiry
functionality must remain visibly secondary to normal catalog browsing until a
visitor selects a catalog entry.

When visual presentation is ambiguous, prefer the conventions used by the
owner-supplied reference sites over inventing an unrelated visual direction.
This governs layout, hierarchy, density, card treatment, and CTA prominence; it
does not authorize copying protected branding, text, assets, or unverified
claims.

## Decisions And Contracts

- The planned stack is Next.js App Router, React, TypeScript, Tailwind CSS,
  PostgreSQL, Server Components by default, and a transactional email provider.
  Client Components are limited to required browser interactivity. TK-001 is
  limited to a local-only visual prototype and creates no live product workflow.
- All submissions use Server Actions or route handlers. Browser code cannot be
  the authority for inquiry persistence, acknowledgments, authorization, or
  notification processing.
- Vercel is the intended deployment target. This target does not lift any
  legal, host-policy, privacy, security, or owner-approval launch blocker.
- A private owner-operations interface, not public email, is the canonical
  system of record for inquiries and delivery status.
- Default to no analytics pixels, session replay, retargeting, chatbot, public
  accounts, public lookup page, or user-to-user messaging.
- All private routes require authenticated, authorized access. Administrator
  access requires MFA. Public form and verification endpoints require HTTPS,
  CSRF protection, rate limits, bot resistance proportional to abuse, safe
  output encoding, and privacy-safe error logging.
- A defined retention and deletion schedule must cover the primary database,
  email inboxes, exports, logs, and backups before public launch.
- The site must accurately state the operator's actual role. It must never
  present the operator as a laboratory, pharmacy, manufacturer, or testing
  organization unless true and substantiated.
- A legal disclaimer, an off-site email conversation, a generic research label,
  or shipping-cost wording does not itself authorize the underlying conduct.

### Decision Rationale Records

The accepted ADRs below explain the rationale for the binding requirements in
this spec. They do not replace the launch blockers or create legal clearance.

- [ADR-0001: Publication Requires Operating-Model and Catalog Review](../../docs/adr/0001-publication-requires-operating-model-and-catalog-review.md)
- [ADR-0002: The Website Creates Inquiries, Not Transactions](../../docs/adr/0002-the-website-creates-inquiries-not-transactions.md)
- [ADR-0003: Catalog Identity, Presentation, and Batch Evidence Are Separate](../../docs/adr/0003-catalog-identity-presentation-and-batch-evidence-are-separate.md)
- [ADR-0004: Quality Claims Cannot Exceed Supporting Evidence](../../docs/adr/0004-quality-claims-cannot-exceed-supporting-evidence.md)
- [ADR-0005: Content Remains Within the Documented Research-Catalog Scope](../../docs/adr/0005-content-remains-within-the-documented-research-catalog-scope.md)
- [ADR-0006: One Owner-Approved Catalog Is the Source of Truth](../../docs/adr/0006-one-owner-approved-catalog-is-the-source-of-truth.md)
- [ADR-0007: Visitors Inquire as Guests with Minimized Data](../../docs/adr/0007-visitors-inquire-as-guests-with-minimized-data.md)
- [ADR-0008: Agreements Are Versioned and Enforced by the Server](../../docs/adr/0008-agreements-are-versioned-and-enforced-by-the-server.md)
- [ADR-0009: Saved Inquiries Are Durable; Email Is a Notification](../../docs/adr/0009-saved-inquiries-are-durable-email-is-a-notification.md)
- [ADR-0010: Catalog Information Is Public; Owner Operations Are Private](../../docs/adr/0010-catalog-information-is-public-owner-operations-are-private.md)
- [ADR-0011: Use Next.js App Router for the Catalog and Inquiry Application](../../docs/adr/0011-use-next-js-app-router-for-the-catalog-and-inquiry-application.md)

## Non-Goals

- Any purchase, sale, payment, quantity, invoice, fulfillment, shipping quote,
  reservation, availability guarantee, subscription, referral, reward, or cart.
- Dosing, mixing, preparation, administration, product protocols, medical or
  veterinary advice, efficacy claims, health-data collection, or user accounts.
- Automated approval, eligibility certification, research qualification, or
  participant-to-participant communication.
- Reuse of reference-site assets, copy, names, product documentation, branding,
  or data without an independently verified right to use it.

## Dependencies And Blockers

- **Public launch blocker:** qualified counsel must review the real arrangement,
  money flows, possession and distribution roles, eligible audience, and every
  intended jurisdiction. The owner must approve the resulting operating policy.
- **Public launch blocker:** final Terms of Use, Participation Policy, Privacy
  Notice, consent treatment, and retention/deletion schedule require owner and
  qualified privacy/legal review.
- **Public launch blocker:** hosting and email providers must approve the
  disclosed activity; selection has not begun.
- **Public launch blocker:** production security design, incident response,
  monitoring, and operator MFA enrollment must be demonstrated.
- **Catalog publication blocker:** each catalog entry needs owner approval,
  accurate identity, usable documentation, current review date, and content
  review. The private reference files cannot satisfy those criteria by default.
- **Scope clarification, not a new blocker:** the owner has stated the site is
  distributed only as an unlisted private link to specific recipients, is not
  advertised, indexed, or publicly discoverable, and makes no public licensure
  claim. On that basis the owner authorized a minimal first contact slice
  (TK-012). The owner then refined that request from a zero-data `mailto:`
  handoff to a real single-item quick-send form (name, contact, optional
  message) delivered by a Server Action through Resend to the owner's inbox.
  This does collect transient visitor data, but the data is never stored by
  the application: it exists only in the outgoing email, with no database,
  acknowledgment checkboxes, policy versions, retention schedule, or owner
  queue. This narrower, non-persistent slice does not trigger the
  public-launch, inquiry-persistence, or owner-notification-job blockers
  above, which remain fully in force for TK-005/TK-002/TK-003. Distributing a
  link privately does not itself satisfy those blockers if a future slice adds
  database persistence, and does not itself satisfy the public-launch gates if
  the site is later advertised, indexed, or deployed publicly on Vercel.

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Build a non-public catalog-shell prototype with neutral placeholder data, inquiry-list terminology, and no submit route. | done | none | Content guard, lint, production build, and 390x844 Playwright interaction/keyboard checks passed; source guard excludes transaction and use-guidance terms. |
| TK-004 | Replace the abstract one-page prototype with the smallest non-public production-shaped visual slice: shared notice/header, product-led hero, typed neutral catalog fixture, one physical-vial card row, catalog/detail navigation, and no live submission. | done | none | Red/green route guard; lint; default and opt-in production builds; 1440x1000 and 390x844 real-browser review; home-to-catalog-to-detail and browser-back navigation; mobile menu Escape/focus return; no form or fetch submission path; default build excludes the review-only fixture route. |
| TK-006 | Adopt the owner-approved liquid-vial master, add the product band palette with Ink Black body text, and render the catalog against it. | done | none | Content guard, lint, and production build passed; band variants are derived from one master render with glass, cap, label, lighting, shadow, and crop unchanged. Outstanding against this ticket: the shipped palette carries twelve `--product-*` colours against the five recorded in `docs/DESIGN-SPEC.md`, and the seven additions have no recorded contrast check. Contrast and real-browser proof are claimed from the authoring session but have no artifact in this repository. |
| TK-007 | Add catalog empty-state and record-count states so a zero-record default build and plural counts render correct copy. | done | none | Red/green catalog guard, lint, production build, and browser checks verified the record count, supported empty-state branch, and rendered specifications, including records carrying no chemical identifiers. |
| TK-012 | Add a single-item "Contact about this item" quick form (name, a way to reach them, optional message) on the catalog detail route, submitted through a reviewed Server Action that emails the owner via Resend. No database, acknowledgments, or policy versions; the outgoing email is the only record. | done | none | Content guard (updated for TK-012), lint, and production build passed. Real-browser round trip at localhost:3100 (dev server) confirmed: the size-pill vial display renders record.catalogStrengths; the form validates and shows a pending state; a Resend 403 (unverified peptidemethod.biz domain) surfaced as a safe, generic recoverable error with no crash and detailed reason logged server-side only; and a send using the default onboarding@resend.dev sender returned success and was confirmed received by the owner in the notify inbox. |
| TK-013 | Replace the single-item quick form with the multi-item "inquiry list" experience: a top-of-page indicator lets a visitor add several catalog entries to one list and send a single combined message, matching the selection contract already described in `docs/PRODUCT-SPEC.md`. | deferred | TK-012 proof | Documented as the owner's preferred long-term shape; TK-012 is the smaller vertical slice built first to prove the send path works end to end. |
| TK-008 | Correct hero, header, and process-list layout defects from the front-end review and add a shared footer carrying the non-transactional notice. | done | none | Content guard, lint, and production build passed. Real-browser verification at 390x844 and 1440x1000 confirmed all four measured defects: computed styles showed the hero h1-to-paragraph gap was exactly 0px before the fix and is now 20px via .hero__copy h1 margin-bottom; at 390px the header wordmark and Browse-catalog button no longer wrap (the button is hidden below 640px since the mobile menu already repeats it, and the wordmark got white-space: nowrap); the ordered process list now renders visible 1/2/3 markers after restoring list-style-type: decimal (Tailwind's preflight had zeroed it); and the home catalog-preview grid (6 records) was measured at exactly 3 columns at 1440px, producing two even rows instead of stranding the sixth record alone under the full catalog page's 5-column breakpoint. A new SiteFooter component now renders on every route (verified present via querySelector on both / and /catalog) with the wordmark, Catalog/How-it-works links, and the non-transactional notice. |
| TK-009 | Correct keyboard, focus, and anchor-offset defects from the front-end review. | ready | none | pending |
| TK-010 | Give each route its own title and description and remove internal-review wording from the shipped description. | ready | none | pending |
| TK-011 | Reduce duplicate catalog navigation targets and lower the catalog card heading level. | ready | none | pending |
| TK-005 | Add a minimized Supabase-backed demo inquiry capture after approved catalog content and verified public licensure claims exist. | blocked | Approved catalog content and verified public licensure claims | Failing server validation and database-write tests; direct-request rejection checks; real-browser acknowledgement and saved-state proof. |
| TK-002 | Implement server-side inquiry persistence, versioned acknowledgments, idempotency, and owner notification job after policy approval. | blocked | Final policies and security design | Failing-request tests, database transaction test, and notification-failure retry test. |
| TK-003 | Add protected owner queue, catalog workflow, policy publishing, retention operations, and launch review after legal and host approvals. | blocked | Launch blockers | Authorization, MFA, privacy, accessibility, manual owner-operation, and deployment checks. |

### TK-001 - Assigned task

**Stance:** Builder

Create a local-only, non-public Next.js prototype that demonstrates the catalog
visual system and one neutral placeholder entry. It may show an inquiry-list
state but provides no inquiry submission, real product entries, admin access,
persistence, payment, price, quantity, or user-use content. The ticket is
deliberately useful without depending on the public-launch decisions.

### TK-004 - Completed task

**Stance:** Builder

Completed 2026-09-06 under an owner build request. The former abstract-selector
page is replaced by shared notice/header navigation, a product-led hero, typed
neutral record, physical-vial catalog card, and a matching catalog detail route.
The original blank-label master vial is used without publishing a product
identity, amount, claim, or document. The record was gated behind
`CATALOG_VISUAL_REVIEW=true` at the time this ticket closed; that gate was later
retired when the owner-approved records replaced the neutral fixture. The slice has no inquiry form, submission, persistence, email,
authentication, deployment, or private-source content.

### TK-005 - Deferred demo capture

**Stance:** Builder

Supabase is the intended PostgreSQL backend for a later demo inquiry-capture
slice. The submitted data must be minimized to name, email, selected approved
catalog entry, 18+ acknowledgment, and timestamp. It has no email delivery,
owner portal, MFA, payment, order, reservation, quantity, or shipping
calculation. The ticket remains blocked: actual GLP names, strengths, CAS data,
blends, shipping-split wording, and public licensure representations require
separate owner approval and verification before they can enter public content.

### TK-006 - Product palette and vial variant set

**Stance:** Builder

Adopt the owner-approved liquid-vial master as the canonical product image and
introduce the five-color product band palette used to distinguish catalog
records visually. Body text moves to Ink Black; navy is retained for structure,
image stages, and the primary action. The slice renders the catalog against the
palette so the owner can judge it at hero, card, and detail sizes. It publishes
no inquiry path. The neutral review set and its `CATALOG_VISUAL_REVIEW=true`
gate were retired in the same branch once the owner-approved records landed, so
no gate remains in `site/`.

### TK-007 - Catalog empty and count states

**Stance:** Builder

The catalog must present an explicit zero-record state and use correct singular
and plural copy. Direct owner approval now makes the default build contain the
full record set, so the empty state is a supported fallback rather than the
default presentation. The `aria-live` region on a server-rendered static count is
retained for future client-side filtering work.

### TK-012 - Single-item quick inquiry form (Resend)

**Stance:** Builder

The owner clarified this website is shared only as an unlisted private link to
specific recipients, is never advertised or made publicly discoverable, and
carries no public licensure claim. On that basis the owner authorized a first
contact slice that does not wait on TK-005/TK-002/TK-003, and then refined the
request from a zero-data `mailto:` handoff to a real quick-send form: the
owner wants a visitor to be able to type a message on the site itself.

Each catalog detail page now renders `InquiryForm`
(`src/components/inquiry-form.tsx`), a Client Component collecting name, a
free-text "email or phone" contact field, and an optional message, with the
same logistics-only instruction line used in `docs/PRODUCT-SPEC.md`. Submission
runs through `sendCatalogInquiry` (`src/app/catalog/[slug]/inquiry-action.ts`),
a `"use server"` Server Action bound per-record to the catalog `id` and
`displayName`. The action validates required fields server-side, then sends a
transactional email through Resend (`RESEND_API_KEY`, `OWNER_NOTIFY_EMAIL`,
optional `INQUIRY_FROM_EMAIL`, all read from an untracked `.env`) containing
the visitor's submission and the non-transactional disclaimer. It replies with
`{status: "success"}` or a safe, generic `{status: "error", message}` the
visitor can act on; the real failure reason is logged server-side only.

No database, acknowledgment checkboxes, policy versions, retention schedule,
or owner queue exist. The outgoing email is the only record of an inquiry —
if it fails to send, nothing is retried or recoverable beyond the visitor
seeing the error and trying again. This is an accepted, explicit limitation of
the slice, not an oversight; TK-002's durable persistence and retry contract
remains the eventual target once its own blockers clear. The old "Inquiry is
not available for this record" and "Inventory status: Paused" copy is retired;
the retired `<dt>Vial sizes</dt>` plain-text row is replaced by a pill list
(`.size-pills`) rendering each `catalogStrengths` entry as-is.

The reviewed content guard (`scripts/verify-catalog-shell.mjs`) was updated to
allow exactly one `<form>` (in `inquiry-form.tsx`) tied to a file asserting
`"use server"`, while every other required file remains banned from
`<form` and `fetch(`.

### TK-013 - Multi-item inquiry list (deferred)

**Stance:** Builder

The owner's preferred long-term shape is the "inquiry list" already described
in `docs/PRODUCT-SPEC.md`'s Inquiry selection and form contract: a top-of-page
indicator lets a visitor add more than one catalog entry to a list and send
one combined message, rather than filling out a separate form per record.
TK-012 is deliberately the smaller single-item vertical slice built first to
prove the send path (form -> Server Action -> Resend -> owner inbox) works
end to end before investing in the added UI state (add/remove, cross-page
persistence, empty-list handling) that a multi-item list requires. This ticket
remains deferred, with TK-012's proof as its dependency, until the owner asks
for it to be picked up.

### TK-008 - Layout corrections and shared footer

**Stance:** Builder

Front-end review measured a zero-pixel gap between the hero heading and the
paragraph beneath it, a 390 px header whose wordmark and catalog action both wrap,
an ordered process list whose markers are suppressed, and a four-column grid that
strands a single record. Add the shared footer carrying the non-transactional
notice so every route has a closing boundary statement.

### TK-009 - Keyboard, focus, and anchor corrections

**Stance:** Builder

The skip link does not move focus because the main landmark is not focusable; the
catalog card focus ring is clipped by the card's own overflow rule; anchor targets
land beneath the sticky header because no scroll offset is reserved; and the
mobile menu backdrop does not dismiss the dialog. Escape handling, focus return,
and scroll locking already pass and must keep passing.

### TK-010 - Per-route metadata

**Stance:** Builder

Every route currently renders one shared title and one shared description, and the
description carries internal-review wording. Give the catalog and detail routes
their own metadata without publishing a catalog identity, amount, or claim.

### TK-011 - Navigation and heading structure

**Stance:** Builder

The home route repeats the same catalog destination four times and each card
exposes three links to one target. Card titles are also rendered at the same
heading level as section headings, which floods the document outline once the
catalog holds more than one record.

## Acceptance Criteria

### Production visual acceptance

- [ ] The finished site presents as a deployable consumer-facing catalog, not a
      prototype, wireframe, internal tool, or demo.
- [ ] Customer-facing UI contains no `prototype`, `placeholder`,
      `illustrative`, `demo`, or development/debug language.
- [ ] Product cards use photorealistic physical-vial photography or renders;
      abstract scientific artwork does not represent individual entries.
- [ ] The catalog contains at least 6–8 realistic, owner-approved entries for
      evaluating product density and page hierarchy during development.
- [ ] Desktop and mobile layouts are complete, and placeholder content is absent
      from the final implementation.
- [ ] Inquiry functionality is visibly secondary to catalog browsing until a
      visitor selects an entry.
- [ ] Ambiguous presentation decisions follow the supplied reference-site
      conventions without copying protected branding, text, assets, or claims.
- [ ] Every route, page section, content order, responsive breakpoint, component
      state, and browser proof required by the focused Product and Design Specs
      is implemented and verified.
- [ ] Search, filters, sorting, result counts, URL state, zero results, data
      errors, paused/archived listings, variants, and document matching behave
      exactly as the Product Spec defines.
- [ ] Real-browser QA passes at 320, 360, 390, 768, 1024, and 1440 CSS pixels,
      including 200% zoom, reduced motion, keyboard-only use, long names, form
      failures, and browser-back state preservation.

- [ ] A local prototype uses catalog and inquiry terminology, not commerce or
      checkout terminology, and does not collect or submit personal data.
- [ ] The prototype contains no product-use guidance, health claim, unreviewed
      catalog entry, pricing, quantity, payment, shipping calculation, or
      reservation function.
- [ ] Production catalog product-card imagery follows the asset contract:
      photorealistic physical vial renders use one consistent master design;
      scientific or abstract visuals are never substituted by default and
      require an explicit owner request for a named non-product use.
- [ ] Any temporary artwork in the local prototype is clearly labeled as
      illustrative non-product content and is not presented as an approved
      catalog image or production asset.
- [ ] Future inquiry implementation has a server-enforced required-
      acknowledgment contract and stores exact accepted policy versions.
- [ ] A future owner queue preserves requests during notification failure and
      exposes retry status without disclosing full request contents in email.
- [ ] Catalog publication requires a human content/documentation review and a
      last-reviewed date; `open for inquiries` does not imply availability.
- [ ] Private reference source material remains ignored, uncommitted, and absent
      from public output.
- [ ] Before launch, counsel, privacy, host-policy, security, accessibility, and
      owner-operational gates are documented as satisfied in this spec.

## Testing Seams

- Direct HTTP POST to the future inquiry endpoint versus browser submission:
  both reject missing or stale acknowledgments.
- Repeated submission with one idempotency key: one inquiry and one notification
  job are created.
- Notification-provider failure: the inquiry persists and the job becomes
  visible and retryable.
- Catalog status changes after page display: stale entry selections are rejected
  clearly by the server.
- Unauthorized user or session: cannot access inquiry data, documents, exports,
  policy administration, or owner actions.
- Keyboard and narrow-viewport browser test: navigation, selected state,
  checkbox labels, errors, and focus remain usable.
- Catalog query round trip: URL-backed search, filters, sort, and browser-back
  state produce the same approved listing set and accurate count.
- Catalog data failure versus no matches: each produces a distinct recoverable
  state and neither publishes unreviewed fallback data.
- Variant change: image label, amount, specifications, document association,
  and inquiry snapshot remain consistent.
- Route inventory: every required public route, not-found case, legal link,
  document action, and protected-route boundary is exercised in a real browser.

## Verification Procedure

```powershell
node workbench/tools/workbench-layout.mjs validate --project . --genesis
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
git check-ignore "mixing info" "Mixing and dose info.zip"
git status --short --branch
```

Prototype verification commands:

```powershell
Set-Location site
npm.cmd test
npm.cmd run lint
$env:NEXT_TELEMETRY_DISABLED='1'; npm.cmd run build
$env:NEXT_TELEMETRY_DISABLED='1'; npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

Browser evidence for the local prototype: at a 390 by 844 viewport, verify the
visible focus treatment, header navigation, label readability, and the local
inquiry-list state. Activating the request button must only change local UI
state and must not submit, persist, or send data.

## Documentation Impact

- `BLUEPRINT.md` records the permanent non-transactional, private-source, and
  launch-gate invariants.
- `LEXICON.md` owns catalog, inquiry, policy-version, and private-reference
  terminology.
- `RUNBOOK.md` owns executable setup verification and launch prerequisites.
- `docs/PRODUCT-SPEC.md` is the focused product-behavior handoff.
- `docs/DESIGN-SPEC.md` is the focused visual and asset handoff.
- Together the focused handoffs define current state, exact completion state,
  routes, data contracts, all public states, owner operations, visual tokens,
  responsive geometry, asset approval, accessibility, security, launch gates,
  automatic rejection conditions, and a verification matrix sufficient for a
  cold-start implementing agent.
- This Workbench spec remains the governance and evidence record for the
  capability. The focused handoffs must not weaken or contradict its product
  boundary, acceptance criteria, or launch gates.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-05 | Genesis | Created local project controls, schema-2 Workbench support root, local Git repository, private-source ignore boundary, and initial catalog/inquiry specification. | `workbench-layout init`, tool installation, layout validation, wiki validation, render, doctor, selection, ignore check, and `git diff --check` succeeded. Seeded wiki-control line endings were normalized so the validator recognizes their frontmatter. | Root controls, room memory, feedback lane, and this spec created. | No product prototype, legal/host/privacy approvals, policies, security design, remote recovery, or deployment. |
| 2026-09-05 | Architecture | Recorded ADR-0001 through ADR-0005 from owner-provided validation context. | Official FDA materials reviewed; `adr.mjs register`, ADR validation, wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | ADR register and five accepted rationale records linked from this spec. | The ADRs preserve project boundaries only; no legal clearance, public catalog, product implementation, or launch approval exists. |
| 2026-09-05 | Architecture | Recorded ADR-0006 through ADR-0010 after comparison with existing decisions; preserved the owner-selected 18+ inquiry requirement. | FTC and OWASP guidance reviewed; ADR validation, wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | Five accepted rationale records linked from this spec; guest inquiry, canonical catalog, owner-operations, notification, and private-access controls clarified. | No legal clearance, public catalog, product implementation, or launch approval exists. |
| 2026-09-05 | Architecture | Superseded the planned Django prototype with the owner-approved Next.js App Router target and recorded ADR-0011. | ADR validation, wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | Blueprint and S-001 now specify React, TypeScript, Tailwind CSS, Server Components by default, server-controlled submissions, and Vercel deployability. | No application, deployment, public catalog, legal clearance, or launch approval exists. |
| 2026-09-06 | TK-004 | Completed a review-only home, catalog, and matching detail route with shared notice/header, one typed neutral record, and the approved blank-label physical-vial master candidate. | Red test confirmed absent data/routes; `npm.cmd test`, `npm.cmd run lint`, and production builds passed. Default build had no parameterized fixture route; `CATALOG_VISUAL_REVIEW=true` emitted `/catalog/local-neutral-material`. Real browser review at 1440x1000 and 390x844 confirmed the home, catalog/detail navigation, browser-back behavior, vial alt text, and mobile dialog Escape/focus return. | `site/src/data/catalog.ts`, shared catalog/header components, App Router pages, and the route guard now hold the slice. | No owner-approved public catalog record, inquiry submission, persistence, email, authentication, deployment, legal review, policy, or security design exists. |
| 2026-09-05 | Design | Replaced the initial visual palette with the owner-provided five-color palette and accessible role mapping. | Image inspected; wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | S-001 design direction now defines `#76BCAE`, `#7D84B2`, `#F4D06F`, `#FFF5EB`, and `#223759`. | No interface exists yet; final component states still require built-interface contrast checks. |
| 2026-09-05 | Design | Refined palette roles and visual weighting: cream and navy dominate, teal supports categories, lavender supports secondary surfaces, and yellow is an accent. | Wiki validation, Workbench render, doctor, and `git diff --check` passed. | S-001 now defines approximate 50/25/15/7/3 palette usage and role-specific assignments. | No interface exists yet; final component states still require built-interface contrast checks. |
| 2026-09-05 | TK-001 | Created a local-only Next.js catalog shell with one neutral placeholder card, a reusable generated vial asset, programmatic label treatment, and an in-browser inquiry-list state. | `npm.cmd test`, `npm.cmd run lint`, and telemetry-disabled `npm.cmd run build` passed. Playwright verified the 390 by 844 layout and the local selected state. | This spec now records prototype commands and local browser evidence. | The five prior exploratory assets remain unreferenced pending explicit deletion approval. The shell has no reviewed catalog entries, submission, persistence, real data, legal clearance, or launch approval. |
| 2026-09-05 | TK-001 | Ticket closed | Content guard, lint, production build, and 390x844 Playwright interaction/keyboard checks passed; source guard excludes transaction and use-guidance terms. | S-001 evidence records the local-only catalog-shell proof and retained launch blockers. | TK-002 and TK-003 remain blocked pending final policies, security design, legal review, host approval, and owner approval. |
| 2026-09-05 | TK-001 refinement | At the owner's request, connected five existing generic visuals to a local selector and selected-detail state. The visuals remain illustrative only, with no product names, catalog approval, claims, submission, persistence, or transmission. | Content guard, lint, production build, 1440px browser selection of visual 05, and 390x844 browser selection plus local inquiry-list state passed. | Current verified state now records the five-visual local demonstration. | All public catalog and launch blockers remain; these are not product entries. |
| 2026-09-05 | Contract refinement | Added an explicit production presentation and product-imagery asset contract: conventional peptide-site catalog patterns, standardized photorealistic physical vial renders, and an owner-request gate for scientific or abstract visuals. | `git diff --check`, Workbench render, and doctor passed after the contract update. | Blueprint and S-001 now share the presentation and imagery boundary. | The local prototype still contains illustrative visuals and is not a production catalog; no imagery is approved for public use. |
| 2026-09-05 | Contract refinement | Added production visual acceptance criteria covering deployable catalog presentation, customer-facing copy, physical-vial imagery, 6–8 realistic fixtures, reference-site fidelity, responsive completion, and secondary inquiry prominence. | `git diff --check`, Workbench render, and doctor passed after the documentation update. | S-001 is explicitly the canonical Product/Inquiry Master Spec; Blueprint now points detailed surface rules to the stable spec. | The local prototype remains a deliberately labeled design shell and does not satisfy final production visual acceptance. |
| 2026-09-05 | Documentation structure | Created focused `docs/PRODUCT-SPEC.md` and `docs/DESIGN-SPEC.md` handoffs so product and design agents can work from the relevant contract without reading the full Workbench governance packet. | `git diff --check`, Workbench render, and doctor passed after the documentation update. | AGENTS routing, Blueprint references, and S-001 documentation impact now distinguish focused handoffs from Workbench governance. | `docs/CATALOG-SCHEMA.md` and `docs/LEGAL-CONTENT.md` remain future companion documents if their scope becomes necessary. |
| 2026-09-05 | Specification expansion | Converted the owner-supplied reference teardown into cold-start Product and Design Specs covering the verified prototype baseline, exact full-site completion state, route and state contracts, catalog/variant/document/inquiry data rules, owner operations, design tokens, responsive layouts, physical-vial assets, accessibility, rejection conditions, launch gates, and proof matrix. Seeded TK-004 as the smallest non-public production-shaped visual tracer without authorizing its claim. | Documentation scope and links reviewed; `git diff --check`, Workbench render, doctor, JSON `next`, and Genesis layout validation run after the update. | Focused handoffs and S-001 now separate adopted project targets from unverified reference measurements and preserve the existing approved navy token. | No site code was changed. A separate owner build request is required before TK-004 may be claimed; live inquiry and launch gates remain blocked. |
| 2026-09-05 | Demo scope | Owner authorized a local-first, non-transactional visual demo, approved the blank-label master-vial candidate, and selected Supabase as the later demo-capture backend. | Workbench render, doctor, and `git diff --check` passed after recording the decisions. | Blueprint and focused handoffs now distinguish the current local visual slice from the deferred capture path; TK-005 records the deferred dependency. | Actual catalog content, public licensure claims, persistent capture, and Vercel deployment remain open or separately authorized. |
| 2026-09-05 | TK-006 | Ticket closed | Content guard, lint, and production build passed; band variants are derived from one master render with glass, cap, label, lighting, shadow, and crop unchanged. The contrast and real-browser measurements claimed by the authoring session have no artifact in this repository and are recorded as unverified. | docs/DESIGN-SPEC.md records Ink Black body text, structural navy, and the product band palette asset table. | The shipped palette carries twelve `--product-*` colours against the five recorded in DESIGN-SPEC; the seven additions have no recorded contrast check and are open against the DESIGN-SPEC rule that a sixth colour requires a master-derived render and a recorded contrast check. The CATALOG_VISUAL_REVIEW gate was retired later in the same branch. TK-008 through TK-011 carry the outstanding front-end review defects. |
| 2026-09-05 | Catalog content | The catalog holds twenty approved local records: 5-Amino-1MQ, ARA-290, BPC-157, CJC-1295 (without DAC), DSIP, GHK-Cu, Glutathione, Ipamorelin, KLOW Blend, L-Carnitine, MOTS-c, NAD+, PT-141, Retatrutide, Selank, Semax, SS-31, Tesamorelin, Thymosin Alpha-1, and Tirzepatide. All are paused. This set replaced an earlier five-record set (Semaglutide, Tirzepatide, Retatrutide, Cagrilintide, CagriSema), which no longer exists in the catalog. Only Retatrutide and Tirzepatide carry CAS and molecular-weight values; the rest carry no chemical identifiers because none were supplied. | The inventory owner supplied the names, vial sizes, package formats, and chemical identifiers to the site builder, who relayed them unchanged; the builder confirmed this provenance on 2026-09-05. The relayed facts were reviewed against the research-only and non-transactional content boundary, and tracked source was grepped for dosing, mixing, reconstitution, and route language with no hits. Red/green content guard, lint, and production build passed. | `site/src/data/catalog.ts` is the sole catalog source; detail pages render supplied strengths and chemical facts with review/source metadata. The content guard asserts the twenty-record count and the required record copy. | Record identity and packaging only; no dosing, mixing, preparation, or route content is carried into the site. The root `catalog/` reference export is now Git-ignored as private mixing/dosing material. The site remains local-only with no inquiry capture, payment, fulfillment, or launch approval. |
| 2026-09-05 | TK-007 | Ticket closed | Red/green catalog guard, lint, and production build verified the record count, the supported empty-state branch, rendered specifications, and records carrying no chemical identifiers. The build emitted one static detail route per record. | site/src/data/catalog.ts, detail/catalog pages, README, and S-001 evidence record | TK-008 through TK-011 remain; the catalog is local-only and all records remain paused with no inquiry, payment, fulfillment, or launch approval. |
| 2026-09-05 | Separate-context review | Ran the required two-axis review before merging to `integration`. It found that the guard's `>Buy<` and `>Add<` prohibited terms were compared against a lowercased source and so could never fire, that the detail route rendered a permanent `Price / Not listed` row against the DESIGN-SPEC rejection condition, and that the TK-006 record claimed CATALOG_VISUAL_REVIEW gating and contrast proof the code and repository do not support. | The guard terms are lowercased and covered by a red/green test: an injected `<button>Buy</button>` now fails the guard, and the clean tree passes. Content guard, lint, and production build re-run green. | site/scripts/verify-catalog-shell.mjs, site/src/app/catalog/[slug]/page.tsx, and the TK-006 ticket and evidence records. | The palette overrun against DESIGN-SPEC is unresolved and awaits an owner decision on whether the document or the code is authoritative. Card category and vial size, the non-focusable `View details` control, focus-ring clipping, and heading levels are held by TK-008, TK-009, and TK-011. |

| 2026-09-06 | Owner decision | Owner clarified the website is distributed only as an unlisted private link to specific recipients, is never advertised or made publicly discoverable, and carries no public licensure claim. Owner directed that the first contact capability collect zero visitor data: a plain `mailto:` action rather than a persisted, database-backed inquiry form. Recorded as new ticket TK-012 with no blockers. | Workbench render and doctor to be run after this update; `git diff --check` pending. | This spec's Dependencies And Blockers section now distinguishes the zero-collection `mailto:` slice from the still-blocked, data-collecting TK-005/TK-002/TK-003 path. | TK-012 is unclaimed. The owner's contact email address and exact subject/body copy are not yet recorded. TK-005/TK-002/TK-003 remain blocked; distributing the link privately does not by itself satisfy those blockers if a future slice collects or stores visitor data. |
| 2026-09-06 | TK-012 | Ticket closed | Content guard (updated for TK-012), lint, and production build passed. Real-browser round trip at localhost:3100 (dev server) confirmed: the size-pill vial display renders record.catalogStrengths; the form validates and shows a pending state; a Resend 403 (unverified peptidemethod.biz domain) surfaced as a safe, generic recoverable error with no crash and detailed reason logged server-side only; and a send using the default onboarding@resend.dev sender returned success and was confirmed received by the owner in the notify inbox. | site/README.md, site/scripts/verify-catalog-shell.mjs, site/.env template, site/src/components/inquiry-form.tsx, site/src/app/catalog/[slug]/inquiry-action.ts, site/src/app/catalog/[slug]/page.tsx, site/src/app/globals.css | peptidemethod.biz has no SPF/DKIM/DMARC records added and is not verified in Resend, so INQUIRY_FROM_EMAIL stays commented out and mail sends from the default onboarding@resend.dev sender. OWNER_NOTIFY_EMAIL is currently the builder's own test inbox pending the domain/account situation being finalized before the owner commits. No database, acknowledgments, policy versions, retention schedule, or owner queue exist; the outgoing email is the only record and a failed send is not retried. TK-005/TK-002/TK-003 remain blocked. TK-013 (multi-item inquiry list) is documented but deferred. No Vercel deployment has been requested or authorized. |
| 2026-09-06 | TK-008 | Ticket closed | Content guard, lint, and production build passed. Real-browser verification at 390x844 and 1440x1000 confirmed all four measured defects: computed styles showed the hero h1-to-paragraph gap was exactly 0px before the fix and is now 20px via .hero__copy h1 margin-bottom; at 390px the header wordmark and Browse-catalog button no longer wrap (the button is hidden below 640px since the mobile menu already repeats it, and the wordmark got white-space: nowrap); the ordered process list now renders visible 1/2/3 markers after restoring list-style-type: decimal (Tailwind's preflight had zeroed it); and the home catalog-preview grid (6 records) was measured at exactly 3 columns at 1440px, producing two even rows instead of stranding the sixth record alone under the full catalog page's 5-column breakpoint. A new SiteFooter component now renders on every route (verified present via querySelector on both / and /catalog) with the wordmark, Catalog/How-it-works links, and the non-transactional notice. | site/src/components/site-footer.tsx, site/src/app/layout.tsx, site/src/app/globals.css, workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md | TK-009 (keyboard/focus/anchor-offset), TK-010 (per-route metadata), and TK-011 (duplicate nav targets and catalog card heading level) remain open. The footer intentionally omits legal/contact links and full site navigation beyond Catalog and How it works, since those routes do not exist yet; PRODUCT-SPEC.md's fuller footer contract (approved legal links, contact) is deferred until those routes are built. No catalog/site header-catalog-link deduplication was attempted -- that is TK-011's explicit scope. |

## Completion Result

Pending. This specification intentionally does not claim that the website or
underlying arrangement is implemented, approved, secure, legally compliant, or
ready to launch.

## Remaining Limitations Or Follow-Up Specs

- TK-004 is the only seeded implementation tracer. A later `to-tickets` pass
  should decompose the remaining approved Product and Design contracts only
  after the owner authorizes implementation.
- A future S-002 capability packet may own production inquiry handling after its
  policy and security blockers are resolved.
- A future S-003 capability packet may own protected owner operations,
  retention, and launch readiness after the product boundary is approved.

## Supersession

- Supersedes: none
- Superseded by: none
