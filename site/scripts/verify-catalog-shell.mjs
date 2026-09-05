import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const page = readFileSync(resolve("src/app/page.tsx"), "utf8");
const requiredCopy = [
  "Research Catalog",
  "Illustrative candidate",
  "Identity review pending",
  "Local prototype — no submissions",
];
const prohibitedTerms = [
  "checkout",
  "payment",
  "pricing",
  "quantity",
  "shipping",
  "dosing",
  "administration",
  "weight-loss",
];

for (const copy of requiredCopy) {
  if (!page.includes(copy)) {
    throw new Error(`Missing required prototype copy: ${copy}`);
  }
}

for (const term of prohibitedTerms) {
  if (page.toLowerCase().includes(term)) {
    throw new Error(`Prohibited catalog-shell term found: ${term}`);
  }
}

if (/https?:\/\//.test(page)) {
  throw new Error("The local prototype must not include external links.");
}

console.log("catalog shell content guard passed");
