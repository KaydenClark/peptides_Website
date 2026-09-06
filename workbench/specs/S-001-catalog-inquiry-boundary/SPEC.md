# S-001 - Catalog and Controlled Inquiry Boundary

> Generated from LLM Workbench v3.1.1.

**Spec ID:** S-001
**Status:** active
**Priority:** 1
**Owner:** codex
**Stance:** Builder
**Updated:** 2026-09-05
**Catalog description:** Defines a non-transactional catalog and private owner-reviewed inquiry workflow for research-material entries.
**Blockers:** Public release and any live inquiry endpoint require qualified legal review, approved policies, security design, and host-policy confirmation.
**Latest event:** Reference teardown converted into complete product and design implementation contracts.
**Next gate:** Owner explicitly authorizes claiming TK-004; live inquiry work remains blocked by final policies and security design.

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
- A local-only Next.js catalog shell demonstrates five generic illustrative
  visuals, one neutral placeholder entry, and an in-browser inquiry-list
  state. No public catalog entries, inquiry
  form, administrator account, policy text, database, payments, notifications,
  deployment, legal review, jurisdiction policy, or hosting approval exists.
- The source names can inform later manual candidate inventory work only. They
  must not be scraped, transformed, published, or used to infer dosing,
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

## Vertical Implementation Slices

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Build a non-public catalog-shell prototype with neutral placeholder data, inquiry-list terminology, and no submit route. | done | none | Content guard, lint, production build, and 390x844 Playwright interaction/keyboard checks passed; source guard excludes transaction and use-guidance terms. |
| TK-004 | Replace the abstract one-page prototype with the smallest non-public production-shaped visual slice: shared notice/header, product-led hero, typed neutral catalog fixture, one physical-vial card row, catalog/detail navigation, and no live submission. | ready | none | Red/green route and content tests; 1440x1000 and 390x844 real-browser captures; keyboard navigation; owner-approved blank-label master-vial candidate; no network submission or private-source content. |
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

### TK-004 - Next eligible task

**Stance:** Builder

TK-004 is ready as a sufficiently specified tracer bullet, but this
specification request does not authorize an agent to claim or implement it. A
separate owner build request is required.

When authorized, begin with failing route/content/browser tests and replace the
abstract-selector homepage with a non-public vertical slice through the shared
shell, hero, typed catalog data seam, one neutral physical-vial card row, and a
working catalog-to-detail route. The fixture must be clearly non-production in
the data layer, contain no private-source-derived name or amount, and be
mechanically excluded from public output. The slice has no inquiry form,
submission, persistence, email, authentication, or deployment. Review the
master-vial candidate and the complete slice at 1440 by 1000 and 390 by 844
before expanding the catalog or generating remaining assets.

### TK-005 - Deferred demo capture

**Stance:** Builder

Supabase is the intended PostgreSQL backend for a later demo inquiry-capture
slice. The submitted data must be minimized to name, email, selected approved
catalog entry, 18+ acknowledgment, and timestamp. It has no email delivery,
owner portal, MFA, payment, order, reservation, quantity, or shipping
calculation. The ticket remains blocked: actual GLP names, strengths, CAS data,
blends, shipping-split wording, and public licensure representations require
separate owner approval and verification before they can enter public content.

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
