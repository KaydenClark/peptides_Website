import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const requiredFiles = [
  "src/data/catalog.ts",
  "src/components/site-header.tsx",
  "src/components/catalog-card.tsx",
  "src/app/page.tsx",
  "src/app/catalog/page.tsx",
  "src/app/catalog/[slug]/page.tsx",
  "public/images/research-materials/canonical-vial.png",
];

for (const file of requiredFiles) {
  if (!existsSync(resolve(file))) {
    throw new Error(`Missing TK-004 route or shared component: ${file}`);
  }
}

const source = requiredFiles
  .filter((file) => file.endsWith(".ts") || file.endsWith(".tsx"))
  .map((file) => readFileSync(resolve(file), "utf8"))
  .join("\n");

const requiredCopy = [
  "Research catalog access is for research inquiry only.",
  "Browse the catalog",
  "View details",
  "local-neutral-material",
  "CATALOG_VISUAL_REVIEW",
  "A glass research vial with a blank neutral label",
  "Inquiry is not available for this record.",
];
const prohibitedTerms = [
  ">Buy<",
  ">Add<",
  "checkout",
  "pricing",
  "dosing",
  "administration",
  "weight-loss",
  "prototype",
  "placeholder",
  "illustrative",
  "demo",
];

for (const copy of requiredCopy) {
  if (!source.includes(copy)) {
    throw new Error(`Missing TK-004 catalog behavior: ${copy}`);
  }
}

for (const term of prohibitedTerms) {
  if (source.toLowerCase().includes(term)) {
    throw new Error(`Prohibited TK-004 catalog term found: ${term}`);
  }
}

if (source.includes("<form") || source.includes("fetch(")) {
  throw new Error("TK-004 must not expose a live inquiry submission path.");
}

console.log("TK-004 catalog route guard passed");
