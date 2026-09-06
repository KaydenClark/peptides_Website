export type CatalogRecord = {
  id: string;
  slug: string;
  displayName: string;
  category: string;
  summary: string;
  status: "paused";
  image: {
    src: string;
    alt: string;
  };
};

const visualReviewRecords: CatalogRecord[] = [
  {
    id: "local-neutral-material-01",
    slug: "local-neutral-material",
    displayName: "Research material record A-01",
    category: "Research material",
    summary:
      "A neutral catalog record used to validate the physical-vial presentation while owner review is pending.",
    status: "paused",
    image: {
      src: "/images/research-materials/canonical-vial.png",
      alt: "A glass research vial with a blank neutral label",
    },
  },
];

export const catalogRecords =
  process.env.CATALOG_VISUAL_REVIEW === "true" ? visualReviewRecords : [];

export function getCatalogRecord(slug: string) {
  return catalogRecords.find((record) => record.slug === slug);
}
