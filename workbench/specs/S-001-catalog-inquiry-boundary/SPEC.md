# S-001 - Catalog and Controlled Inquiry Boundary

> Generated from LLM Workbench v3.1.1.

**Spec ID:** S-001
**Status:** active
**Priority:** 1
**Owner:** project owner
**Stance:** Builder
**Updated:** 2026-09-05
**Catalog description:** Defines a non-transactional catalog and private owner-reviewed inquiry workflow for research-material entries.
**Blockers:** Public release and any live inquiry endpoint require qualified legal review, approved policies, security design, and host-policy confirmation.
**Latest event:** Approved Next.js App Router target recorded; no application, public catalog, inquiry endpoint, or deployment exists.
**Next gate:** Complete a non-public catalog-shell design without product-use or transaction features, then obtain owner review.

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
- No application source, public catalog entries, inquiry form, administrator
  account, policy text, database, payments, notifications, deployment, legal
  review, jurisdiction policy, or hosting approval exists.
- The source names can inform later manual candidate inventory work only. They
  must not be scraped, transformed, published, or used to infer dosing,
  concentration, preparation, route, safety, availability, or intended use.

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

## Decisions And Contracts

- The planned stack is Next.js App Router, React, TypeScript, Tailwind CSS,
  PostgreSQL, Server Components by default, and a transactional email provider.
  Client Components are limited to required browser interactivity. No product
  code is approved or scaffolded in this ticket.
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
| TK-001 | Build a non-public catalog-shell prototype with neutral placeholder data, inquiry-list terminology, and no submit route. | ready | none | Browser and keyboard demo; source scan confirms no transaction or use-guidance terms. |
| TK-002 | Implement server-side inquiry persistence, versioned acknowledgments, idempotency, and owner notification job after policy approval. | blocked | Final policies and security design | Failing-request tests, database transaction test, and notification-failure retry test. |
| TK-003 | Add protected owner queue, catalog workflow, policy publishing, retention operations, and launch review after legal and host approvals. | blocked | Launch blockers | Authorization, MFA, privacy, accessibility, manual owner-operation, and deployment checks. |

### TK-001 - Assigned task

**Stance:** Builder

Create a local-only, non-public Next.js prototype that demonstrates the catalog
visual system and one neutral placeholder entry. It may show an inquiry-list
state but provides no inquiry submission, real product entries, admin access,
persistence, payment, price, quantity, or user-use content. The ticket is
deliberately useful without depending on the public-launch decisions.

## Acceptance Criteria

- [ ] A local prototype uses catalog and inquiry terminology, not commerce or
      checkout terminology, and does not collect or submit personal data.
- [ ] The prototype contains no product-use guidance, health claim, unreviewed
      catalog entry, pricing, quantity, payment, shipping calculation, or
      reservation function.
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

## Verification Procedure

```powershell
node workbench/tools/workbench-layout.mjs validate --project . --genesis
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
git check-ignore "mixing info" "Mixing and dose info.zip"
git status --short --branch
```

When a prototype exists, add its exact targeted test, static content scan,
browser accessibility check, and local start command here before marking
TK-001 complete.

## Documentation Impact

- `BLUEPRINT.md` records the permanent non-transactional, private-source, and
  launch-gate invariants.
- `LEXICON.md` owns catalog, inquiry, policy-version, and private-reference
  terminology.
- `RUNBOOK.md` owns executable setup verification and launch prerequisites.
- No standalone requirements document is created; this spec is the source of
  product requirements and evidence.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-05 | Genesis | Created local project controls, schema-2 Workbench support root, local Git repository, private-source ignore boundary, and initial catalog/inquiry specification. | `workbench-layout init`, tool installation, layout validation, wiki validation, render, doctor, selection, ignore check, and `git diff --check` succeeded. Seeded wiki-control line endings were normalized so the validator recognizes their frontmatter. | Root controls, room memory, feedback lane, and this spec created. | No product prototype, legal/host/privacy approvals, policies, security design, remote recovery, or deployment. |
| 2026-09-05 | Architecture | Recorded ADR-0001 through ADR-0005 from owner-provided validation context. | Official FDA materials reviewed; `adr.mjs register`, ADR validation, wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | ADR register and five accepted rationale records linked from this spec. | The ADRs preserve project boundaries only; no legal clearance, public catalog, product implementation, or launch approval exists. |
| 2026-09-05 | Architecture | Recorded ADR-0006 through ADR-0010 after comparison with existing decisions; preserved the owner-selected 18+ inquiry requirement. | FTC and OWASP guidance reviewed; ADR validation, wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | Five accepted rationale records linked from this spec; guest inquiry, canonical catalog, owner-operations, notification, and private-access controls clarified. | No legal clearance, public catalog, product implementation, or launch approval exists. |
| 2026-09-05 | Architecture | Superseded the planned Django prototype with the owner-approved Next.js App Router target and recorded ADR-0011. | ADR validation, wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | Blueprint and S-001 now specify React, TypeScript, Tailwind CSS, Server Components by default, server-controlled submissions, and Vercel deployability. | No application, deployment, public catalog, legal clearance, or launch approval exists. |
| 2026-09-05 | Design | Replaced the initial visual palette with the owner-provided five-color palette and accessible role mapping. | Image inspected; wiki validation, Workbench render, doctor, layout validation, and `git diff --check` passed. | S-001 design direction now defines `#76BCAE`, `#7D84B2`, `#F4D06F`, `#FFF5EB`, and `#223759`. | No interface exists yet; final component states still require built-interface contrast checks. |
| 2026-09-05 | Design | Refined palette roles and visual weighting: cream and navy dominate, teal supports categories, lavender supports secondary surfaces, and yellow is an accent. | Wiki validation, Workbench render, doctor, and `git diff --check` passed. | S-001 now defines approximate 50/25/15/7/3 palette usage and role-specific assignments. | No interface exists yet; final component states still require built-interface contrast checks. |

## Completion Result

Pending. This specification intentionally does not claim that the website or
underlying arrangement is implemented, approved, secure, legally compliant, or
ready to launch.

## Remaining Limitations Or Follow-Up Specs

- S-002 will cover production inquiry handling only after its public-launch
  blockers are resolved.
- S-003 will cover protected owner operations, security, retention, and launch
  readiness only after the product boundary is approved.

## Supersession

- Supersedes: none
- Superseded by: none
