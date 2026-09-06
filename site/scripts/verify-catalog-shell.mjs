import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const requiredFiles = [
  "src/data/catalog.ts",
  "src/components/site-header.tsx",
  "src/components/catalog-card.tsx",
  "src/components/inquiry-form.tsx",
  "src/app/page.tsx",
  "src/app/catalog/page.tsx",
  "src/app/catalog/[slug]/page.tsx",
  "src/app/catalog/[slug]/inquiry-action.ts",
  "public/images/research-materials/vial-master.png",
  "public/images/research-materials/vial-coral.png",
  "public/images/research-materials/vial-cerulean.png",
  "public/images/research-materials/vial-grape.png",
  "public/images/research-materials/vial-straw.png",
  "public/images/research-materials/vial-mint.png",
  "public/images/research-materials/vial-band-76bcae.png",
  "public/images/research-materials/vial-band-7d84b2.png",
  "public/images/research-materials/vial-band-f4d06f.png",
  "public/images/research-materials/vial-band-f3ffbd.png",
  "public/images/research-materials/vial-band-b2dbbf.png",
  "public/images/research-materials/vial-band-214e34.png",
  "public/images/research-materials/vial-band-09bc8a.png",
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
  "5-Amino-1MQ",
  "ARA-290",
  "BPC-157",
  "CJC-1295 (without DAC)",
  "DSIP",
  "GHK-Cu",
  "Glutathione",
  "Ipamorelin",
  "KLOW Blend",
  "L-Carnitine",
  "MOTS-c",
  "NAD+",
  "PT-141",
  "Retatrutide",
  "Selank",
  "Semax",
  "SS-31",
  "Tesamorelin",
  "Thymosin Alpha-1",
  "Tirzepatide",
  "4813.45 g/mol",
  "Vial sizes",
  "Research information",
  "Contact about this item",
  "Send message",
  "This is not an order, reservation, payment authorization, or commitment.",
];
// Compared against a lowercased source, so every term must be lowercase.
const prohibitedTerms = [
  ">buy<",
  ">add<",
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

const formGuardSource = requiredFiles
  .filter((file) => (file.endsWith(".ts") || file.endsWith(".tsx")) && file !== "src/components/inquiry-form.tsx")
  .map((file) => readFileSync(resolve(file), "utf8"))
  .join("\n");

if (formGuardSource.includes("<form") || source.includes("fetch(")) {
  throw new Error("Only the reviewed TK-012 inquiry-form component may render a submission form, and no file may call fetch() directly.");
}

const inquiryFormSource = readFileSync(resolve("src/components/inquiry-form.tsx"), "utf8");
if (!inquiryFormSource.includes("<form")) {
  throw new Error("TK-012 inquiry form must render a real <form> tied to the reviewed server action.");
}

const inquiryActionSource = readFileSync(resolve("src/app/catalog/[slug]/inquiry-action.ts"), "utf8");
if (!inquiryActionSource.includes('"use server"')) {
  throw new Error("TK-012 inquiry submissions must go through a Server Action, not client-side code.");
}

const catalogPage = readFileSync(resolve("src/app/catalog/page.tsx"), "utf8");

for (const condition of ["catalogRecords.length === 0", "catalogRecords.length === 1"]) {
  if (!catalogPage.includes(condition)) {
    throw new Error(`Catalog count state is missing: ${condition}`);
  }
}

const catalogData = readFileSync(resolve("src/data/catalog.ts"), "utf8");
const recordCount = (catalogData.match(/^\s{4}id: "/gm) ?? []).length;

if (recordCount !== 20) {
  throw new Error(`Catalog must list the 20 owner-reviewed inventory records, found ${recordCount}`);
}

console.log("Catalog and TK-012 inquiry-form route guard passed");
