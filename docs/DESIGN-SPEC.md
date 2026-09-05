# Design Spec: Consumer-Facing Research Catalog

**Status:** Active working contract
**Audience:** Design, frontend, content, and asset-generation agents

## Design objective

Build a polished, deployable consumer-facing catalog that uses the familiar
layout, hierarchy, merchandising patterns, product-card treatment, and visual
finish of the owner-supplied reference peptide sites. When presentation is
ambiguous, follow those reference conventions instead of inventing an
unrelated visual direction.

Reference fidelity governs layout, hierarchy, catalog density, card treatment,
navigation, and CTA prominence. It does not authorize copying protected
branding, text, assets, or unverified claims.

## Visual acceptance criteria

The finished site must:

- Look like a deployable consumer-facing catalog, not a prototype, wireframe,
  internal tool, or demo.
- Keep `prototype`, `placeholder`, `illustrative`, `demo`, and development or
  debug language out of customer-facing UI.
- Use photorealistic physical-vial photography or renders for product cards.
- Never use abstract molecule artwork, DNA strands, protein ribbons, or generic
  biotechnology artwork to represent an individual catalog entry.
- Reach the product density and page hierarchy of the supplied reference sites.
- Populate at least 6-8 realistic, owner-approved catalog entries during
  development so grid density and hierarchy can be evaluated.
- Complete both desktop and mobile layouts.
- Contain no placeholder content in the final implementation.
- Keep inquiry functionality visibly secondary to catalog browsing until an
  entry is selected.

## Product imagery asset contract

When the owner asks for images of peptide products, interpret that as
photorealistic vial-product imagery by default. Do not infer scientific artwork
from the words peptide or research.

Every product card uses a physical glass research vial render or photograph.
Create one master vial design and produce controlled variations for each
catalog entry. Keep these properties consistent:

- Camera angle
- Bottle dimensions and proportions
- Cap style
- Lighting
- Background
- Label layout
- Brand treatment

Only reviewed entry details, such as compound name and vial strength, may vary.
Scientific or abstract visuals require an explicit owner request for a named
non-product use and must never be substituted for product imagery by default.

## Layout and interaction hierarchy

- Catalog browsing is the dominant experience.
- Product cards clearly expose identity, neutral summary, review/status context,
  and the entry detail action.
- The inquiry action becomes prominent only after the visitor selects an entry.
- The inquiry list is a selection tool, never a cart and never a purchase step.
- Navigation, cards, detail views, selection states, and inquiry states must
  remain coherent across desktop and mobile layouts.

## Accessibility and responsive behavior

Use persistent labels, visible focus treatment, keyboard navigation, readable
contrast, accessible error messages, generous touch targets, and a complete
mobile layout. Check final component states in the built interface at desktop
and narrow mobile widths.

## Content and asset exclusions

Do not use medical or therapeutic claims, testimonials, before-and-after
content, personal-use guidance, copied reference-site content, unlicensed
images, or unsubstantiated quality or regulatory badges. Product imagery must
not be generated from private mixing or dosing material.

Temporary prototype artwork is allowed only when clearly labeled as
illustrative non-product content. It is not an approved catalog image and must
not survive into the final customer-facing implementation.

## Related specifications

- [Product Spec](PRODUCT-SPEC.md) defines what the website does and does not do.
- [Workbench S-001](../workbench/specs/S-001-catalog-inquiry-boundary/SPEC.md)
  records governance, evidence, and launch gates.
