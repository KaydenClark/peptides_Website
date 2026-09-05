# Design Spec: Consumer-Facing Research Catalog

**Status:** Active implementation contract
**Audience:** Design, frontend, content, asset, QA, and review agents
**Updated:** 2026-09-05
**Reference basis:** Owner-supplied teardown of Aurum Peptide Labs and Amino
Club. Reference observations are evidence; this document's numeric values are
project targets, not claims about either source site's computed CSS.

## Design goal

Create a calm, polished, mobile-first physical-product catalog that a visitor
recognizes immediately. Amino Club informs catalog discovery and physical-vial
presentation. Aurum informs compact specifications and documentation hierarchy.
The project uses original branding, content, data, and imagery and replaces all
commerce with the controlled inquiry flow defined in `PRODUCT-SPEC.md`.

The visual target is consumer-facing and trustworthy without looking medical,
luxury, promotional, or like an internal prototype. The likely phone-first
audience includes middle- to later-age women, so typography, contrast, touch
targets, and clarity take priority over visual novelty.

## Evidence and decision boundary

### Confirmed project decisions

- Brand palette: cream `#FFF5EB`, navy `#223759`, teal `#76BCAE`, periwinkle
  `#7D84B2`, and gold `#F4D06F`.
- Approximate visual weighting: cream 50%, navy 25%, teal 15%, periwinkle 7%,
  and gold 3%.
- Catalog items use consistent physical glass-vial imagery. Abstract molecules,
  ribbons, DNA, glowing particles, or generic science art cannot represent a
  listing.
- Catalog discovery is primary; inquiry becomes prominent only after selection.
- Desktop and mobile are equally complete. Mobile is not a collapsed afterthought.

### Adopted project targets, not measured source values

All dimensions, spacing, type sizes, breakpoints, animation durations, and
component behaviors below are binding project targets unless a later approved
spec supersedes them. They were not extracted as exact reference-site CSS.

### Unverified reference facts

Exact reference fonts, computed dimensions, breakpoint values, shadows, hover
states, drawer behavior, and full mobile layouts were not verified. An agent may
capture them for inspiration, but those observations cannot silently override
this approved adaptation.

## Visual completion state

Visual implementation is complete only when:

- Every required public route and state follows this system at all target
  viewports, including long content, empty results, errors, and archived states.
- The site contains only final owner-approved public content and original or
  licensed imagery; no prototype, placeholder, illustrative, demo, debug, fake
  certificate, or competitor material remains customer-facing.
- Catalog and detail imagery use one coherent master vial system with correct
  deterministic label text and consistent scale.
- Header, navigation drawer, search, filters, cards, product gallery, form,
  documents, and footer work with keyboard, touch, zoom, reduced motion, and
  screen readers.
- A real-browser visual QA pass succeeds at 320, 360, 390, 768, 1024, and 1440
  CSS pixels and at the reference capture sizes 390 by 844 and 1440 by 1000.
- There is no horizontal overflow, occluded disclosure, layout shift from known
  imagery, broken asset, dead control, or contrast failure.

## Foundation tokens

Centralize these values as CSS variables or theme tokens. Components must not
invent near-duplicate colors, radii, spacing, or shadows without a recorded
reason.

### Viewports and layout

| Token | Value |
|---|---:|
| Reference desktop viewport | 1440 x 1000 CSS px |
| Reference mobile viewport | 390 x 844 CSS px |
| Maximum content width | 1280 px |
| Desktop gutter | Minimum 32 px; centered at max width |
| Tablet gutter | 24 px |
| Mobile gutter | 16 px |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 80, 96 px |
| Standard section spacing | 80 px desktop; 48 px mobile |
| Narrow reading width | 640 px |
| Wide text measure | Maximum 68 characters where practical |

### Shape, controls, and motion

| Token | Value |
|---|---:|
| Card radius | 16 px |
| Button/input radius | 10 px |
| Badge radius | 999 px |
| Card border | 1 px solid `#D7E0DE` |
| Resting card shadow | None |
| Hover card shadow | `0 8px 24px rgba(34, 55, 89, 0.10)` |
| Primary control height | 48 px minimum |
| Card action height | 44 px minimum |
| Icon size | 20 px |
| Icon-only target | 44 x 44 px minimum |
| Focus ring | 2 px high-contrast outline, 3 px offset |
| Standard transition | 120-180 ms color, border, and shadow |

Motion must respect `prefers-reduced-motion`. Do not require floating imagery,
parallax, autoplay, zoom-on-hover, or movement to understand state. Hover cannot
shift the grid or crop the vial.

## Color system

| Role | Value | Required use |
|---|---|---|
| Canvas | `#FFF5EB` | Dominant warm page background |
| Surface | `#FFFFFF` | Cards, forms, menus, document panels |
| Primary ink/action | `#223759` | Headings, body, navigation, footer, primary buttons |
| Muted ink | `#52666B` | Secondary copy after contrast validation |
| Teal accent | `#76BCAE` | Tags, decorative label bands, supporting accents |
| Teal tint | `#E6F2EE` | Selected/supporting surfaces with navy text |
| Periwinkle accent | `#7D84B2` | Decorative accents and secondary illustration details |
| Lavender tint | `#E9EDF5` | Hero field, image stage, quiet secondary section |
| Gold accent | `#F4D06F` | Small highlights, focus/selected cues with navy text |
| Quiet border | `#D7E0DE` | Dividers and nonessential outlines |
| Error | Define during implementation | Must pass contrast and not rely on color alone |
| Success | Define during implementation | Must pass contrast and not imply order completion |

Cream and white dominate. Navy provides structure. Teal supports categories;
periwinkle and gold are restrained. Teal, periwinkle, and gold are not default
button backgrounds with white text. Never use periwinkle for small text on cream
or teal for small normal-weight text without measured contrast approval.

Required token-pair checks include navy/cream, cream/navy, muted/cream, and
navy/gold. Final contrast is measured in rendered states, including disabled,
hover, selected, focus, error, link, and placeholder states.

## Typography

Use Inter with system sans-serif fallbacks for the initial implementation. Load
it through a privacy-appropriate local/framework path and avoid layout shift.
Use sentence case, concise headings, and tabular numerals for aligned amounts or
specification values. Uppercase is limited to short eyebrows.

| Role | Desktop size / line height | Mobile size / line height | Weight |
|---|---|---|---:|
| Hero heading | 56 / 60 px | 36 / 40 px | 600 |
| Page/product heading | 40 / 48 px | 30 / 36 px | 600 |
| Section heading | 32 / 40 px | 26 / 32 px | 600 |
| Card name | 18 / 26 px | 16 / 22 px | 600 |
| Intro paragraph | 18 / 28 px | 16 / 24 px | 400 |
| Body/form label | 16 / 24 px | 16 / 24 px | 400-500 |
| Metadata | 14 / 20 px | 13 / 18 px | 400-500 |
| Eyebrow | 12 / 16 px | 12 / 16 px | 600 |
| Button | 15 / 20 px | 15 / 20 px | 600 |

Use approximately `-0.02em` tracking on large headings and normal tracking for
body copy. Do not shrink disclosures or legal links below readable metadata.

## Global shell and header

### Notice strip

- 36 px target height on desktop; allow content-driven height when text wraps.
- Explain research-only catalog access and inquiry-only behavior in plain text.
- No promotion, countdown, urgency, availability, or dismiss-to-accept behavior.
- The notice scrolls away; it is not part of the sticky header stack.

### Desktop header at 1024 px and above

- 80 px high, light surface, thin bottom border, content aligned to the 1280 px
  container.
- One row: own wordmark left; navigation middle/right; primary `Catalog` action
  last when needed.
- Logo block maximum 176 x 40 px without stretch.
- Navigation uses 16 px, weight 500, and approximately 28 px gaps.
- Active route uses underline and/or weight, not color alone.
- Main header may be sticky below the viewport top after the notice scrolls.
- No cart, account, rewards, global search, purchase count, or payment utility.

### Mobile/tablet header below 1024 px

- 64 px high with logo left and a labeled menu button right.
- Menu opens a modal side drawer no wider than 360 px and never wider than the
  viewport.
- Drawer contains a visible close control, vertical navigation, legal access,
  and catalog action.
- Opening moves focus inside; focus stays within; Escape closes; closing returns
  focus to the opener. Background scrolling is contained.
- Menu state cannot imply policy acceptance and must not cause horizontal scroll.

## Homepage hero

### Desktop

- Two equal columns at 1024 px and above with a 64 px gap.
- Text left, original vial artwork right.
- Minimum height 560 px with approximately 64 px vertical padding.
- Artwork stage approximately 400 px and contained within its column.
- Content order: eyebrow, one headline, brief lead, primary CTA, secondary text
  link.
- Primary: `Browse catalog`; secondary: `How it works`.
- Vial group uses two or three approved cutouts with consistent lighting and
  modest angle/depth variation. A pale teal/lavender field may ground it.
- Artwork never crosses headline copy or relies on readable generated label text.

### Below 1024 px

- Stack text first and artwork second.
- Approximately 40 px vertical padding; artwork stage 240-280 px.
- Height follows content. Decorative overflow is clipped without hiding focus
  or causing page-level horizontal scroll.
- Keep one dominant catalog action at least 48 px high.

Do not use clinicians, syringes, molecule networks, DNA, or glowing science art
as a substitute for the physical products.

## Catalog page and grid

### Page header and toolbar

- Page title and one-sentence introduction precede controls.
- Search is approximately 320 px on desktop and may grow.
- Sort has a persistent visible label. Category chips appear only when useful.
- Accurate result count is announced when it changes.
- Mobile search is full-width; other controls wrap without clipping.
- Active filters are clear and removable. Reset is obvious in zero results.

### Responsive grid

| Viewport | Columns | Gap | Side gutter |
|---|---:|---:|---:|
| Below 360 px | 1 | 16 px | 16 px |
| 360-767 px | 2 | 12 px | 16 px |
| 768-1199 px | 3 | 20-24 px | 24-32 px |
| 1200 px and above | 4 | 24 px | At least 32 px |

At 1440 px, four cards in the 1280 px container target approximately 302 px
each. At 390 px, two cards target approximately 173 px each. The design must
survive longer approved names at those widths. Never invent products or insert
promotional tiles to fill a row.

### Result states

- Loading skeletons, if needed, match final card geometry and are not announced
  as real listings.
- Zero results retain controls, explain the filter mismatch, and offer reset.
- Data error is visually and semantically distinct from zero results and offers
  retry.
- Paused and archived status uses text, not color alone. Paused entries remain
  readable but do not offer an inquiry CTA.

## Product image system

### Master asset contract

| Attribute | Required target |
|---|---|
| Object | Physically plausible sealed research vial matching confirmed packaging |
| Glass | Clear with restrained edge reflections and realistic refraction |
| Closure | Consistent silver-colored crimp cap unless actual packaging differs |
| Label | Matte wrap with original brand and correct reviewed name/amount |
| Accent | Restrained teal or periwinkle band within one template |
| Catalog angle | Upright, front-facing, consistent camera perspective |
| Hero angle | Modest tilt derived from the same master design |
| Lighting | Soft studio key light with restrained highlights |
| Shadow | Small grounding shadow included once, not duplicated in CSS |
| Master canvas | 1600 x 1600 px square |
| Background | True transparent alpha or one approved uniform background |
| Product scale | About 70% of canvas height across catalog variants |
| Crop | Entire cap and base visible |
| Delivery | PNG/WebP master; optimized WebP/AVIF derivatives when appropriate |
| Alt text | Factual name, amount, and packaging description; no claim |

Generate/source the glass and lighting first. Typeset label text
deterministically from reviewed data; never depend on generated small text for
names, amounts, lots, claims, or identifiers. If an image is conceptual rather
than a verified photograph, its internal review record must say so; public copy
must not misrepresent it as the actual item.

### Approval sequence

1. Approve one master vial and label template.
2. Approve a small representative set at catalog-card and detail sizes.
3. Produce remaining variations from the same controlled master.
4. Verify spelling, amount, variant match, transparency, crop, scale, alt text,
   rights, and public record association for every asset.

Reject assets containing molecular diagrams instead of a vial, garbled text,
wrong amount, inconsistent cap/geometry, fake transparency checkerboards,
competitor branding, fabricated certificate/testing marks, unsupported purity,
fake QR codes, or no approved catalog association.

## Product card

Content order is fixed:

1. Square image stage.
2. Small neutral category label.
3. Display name.
4. Confirmed amount or concise list of confirmed variants.
5. One documentation/status line only when supported.
6. `View details` action.

Use a white surface, quiet 1 px border, 16 px radius, no heavy resting shadow,
and a pale image-stage background. Desktop content padding is 20 px; compact
mobile content padding is 12 px. Reserve two title lines so action rows align,
but never clamp away critical identity. Use an approved short display name or
allow wrapping.

The image/title and explicit action may reach the same detail route, but do not
wrap nested controls inside one giant link. Documentation remains separately
operable. Hover gently strengthens border/shadow; keyboard focus has equivalent
prominence. There is no `Buy`, `Add`, `Order`, `Reserve`, cart icon, price,
purchase quantity, stock countdown, or long inquiry CTA on the card.

## Product detail

### Desktop at 1024 px and above

- Breadcrumb precedes a two-column region.
- After subtracting a 56 px gap, gallery receives approximately 52% and details
  48% of remaining width.
- Main gallery stage is square and targets approximately 560 px at the reference
  desktop width.
- First image is the catalog vial at higher resolution. Add 72 px thumbnails
  with 12 px gaps only for genuinely distinct approved images.
- Detail order: category, name, summary, variant selector, specifications,
  documentation, notice, full-width 48 px inquiry CTA, nonbinding explanation.
- Product title is 40/48 px. Specification rows use compact paired fields.
- Do not use sticky action panels that hide disclosures or imply checkout.

### Mobile below 1024 px

- Order: breadcrumb, category/name, gallery, summary, variant, specifications,
  documentation, notice, inquiry CTA, explanation.
- Product title is 30/36 px.
- Fields stack cleanly. There is no persistent bottom action bar in the initial
  version because it can cover disclosure/form content.
- Variant changes do not shift focus unexpectedly and are announced where needed.

Below the main region, use separate Specifications, Documentation, and Research
notice sections. Related listings are optional and visually ordinary, never a
treatment bundle.

## Inquiry and confirmation

- Use a dedicated page, not a tiny drawer or checkout-shaped panel.
- Form column is centered and no wider than 640 px, with a compact selected-item
  summary above it.
- Labels persist above fields; required/optional meaning is explicit.
- Each acknowledgment is an unchecked native control with a large label target
  and direct policy link.
- Field errors appear beside fields and in an accessible summary. Error styling
  uses icon/text as well as color.
- Submitting disables accidental repeat action without erasing fields. Failure
  preserves safe input. Success appears only after server acceptance.
- Confirmation is calm and neutral: no confetti, receipt styling, order number,
  delivery timeline, or implied allocation.

## Supporting pages

### How it works

Use three numbered steps with concise copy and simple original icons: browse,
send inquiry, owner follow-up. Follow with process FAQ and boundaries. Do not
depict a transaction timeline or guaranteed response.

### Documentation

Use clear list/card rows with document title, matching listing/variant/lot when
applicable, report date, and accessible file action. Provide search/filter only
if the volume justifies it. Broken or withdrawn documents have an explicit
state; never silently remap them.

### Contact and legal

Use narrow readable columns, persistent headings, effective/version dates on
policies, and a table of contents for long final text. General contact must not
look like an inquiry shortcut. Legal typography remains at least body/metadata
sizes and is not faded into the footer.

## Footer

- Navy background, cream text, subtle dividers.
- 64 px vertical padding on desktop; 40 px on mobile.
- Desktop has up to four groups: brand/process summary, catalog/process links,
  contact/documentation, and legal. Tablet may use two columns; mobile stacks.
- Include actual owner identity/contact and approved legal/research links.
- No empty/social filler, payment icons, cart, ecommerce refund link,
  newsletter, or claims.

## Interaction and accessibility details

- Use semantic links for navigation and buttons for actions.
- All interactive states include default, hover where applicable, focus,
  active/pressed, selected, disabled only when justified, busy, error, and
  success as relevant.
- Do not communicate category, status, required fields, document state, or
  selection by color alone.
- Focus order follows the visual order. Skip link, landmarks, page title, and
  heading hierarchy are present.
- Images have appropriate alt text; decorative hero duplicates use empty alt.
- Dynamic result count, variant updates, validation, and submission outcomes
  use restrained accessible announcements without repeated chatter.
- At 200% zoom and 320 px reflow, no two-dimensional scrolling is required for
  ordinary content. Long words, names, email addresses, and document titles wrap.

## Visual QA matrix

Test each required page at 320, 360, 390, 768, 1024, and 1440 CSS pixels. The
minimum capture set is:

| Page/state | 1440 x 1000 | 390 x 844 |
|---|---|---|
| Home first viewport and full page | Required | Required |
| Header/nav closed and open | Required where applicable | Required |
| Catalog normal, active filter, zero result, and error | Required | Required |
| Product detail default and alternate variant | Required | Required |
| Inquiry default, validation error, submitting, server error | Required | Required |
| Confirmation | Required | Required |
| Documentation and one document action | Required if route exists | Required if route exists |
| Contact, each legal page, footer | Required | Required |
| Paused and archived listing | Required | Required |

Also test keyboard-only navigation, screen-reader names/order, 200% zoom,
reduced motion, long approved names, missing optional images, slow/error states,
and browser back from detail to filtered catalog.

## Automatic rejection conditions

Reject the implementation when any of these is true:

- A listing is represented by a molecule, ribbon, helix, abstract particle, or
  unrelated scientific illustration instead of an approved physical vial.
- Competitor branding, copied copy/assets, fabricated labels, fake certificates,
  fake laboratory marks, unsupported claims, or unverified product data appear.
- A cart, checkout, payment, price, purchase quantity, reservation, stock
  countdown, transactional confirmation, or ecommerce structured data exists.
- A proposed value is described as a measured reference-site value.
- Mobile/menu behavior is claimed as verified without rendered interaction proof.
- Required acknowledgments are prechecked, visually hidden, or only client-side.
- Customer UI contains prototype/debug/placeholder language or unapproved
  fixtures.
- Horizontal overflow, clipped focus, missing/broken assets, unreadable
  contrast, dead links, or obscured disclosures remain.
- The catalog card, detail image/variant, document, and inquiry summary disagree.

## Implementation handoff

The first visual implementation slice is notice/header, hero, and one row of
approved catalog cards at 1440 by 1000 and 390 by 844. Review and approve the
master vial in those contexts before expanding routes or generating all assets.
This sequencing requirement does not itself authorize a build.

Record any departure from this spec in the owning ticket and S-001 evidence.
Never resolve ambiguity by copying a reference site or inventing unsupported
content.

## Related specifications

- [Product Spec](PRODUCT-SPEC.md) defines behavior, routes, data contracts,
  inquiry handling, owner operations, launch gates, and functional acceptance.
- [Workbench S-001](../workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md)
  owns governance, accepted decisions, tickets, and append-only evidence.
