import Image from "next/image";
import Link from "next/link";

import type { CatalogRecord } from "@/data/catalog";

export function CatalogCard({
  item,
  headingLevel = 2,
}: {
  item: CatalogRecord;
  headingLevel?: 2 | 3;
}) {
  const detailPath = `/catalog/${item.slug}`;
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <article className="catalog-card" style={{ "--accent": item.accent } as React.CSSProperties}>
      <div className="catalog-card__image">
        <Image alt={item.image.alt} fill sizes="(max-width: 767px) 100vw, 302px" src={item.image.src} />
      </div>
      <div aria-hidden="true" className="catalog-card__accent" />
      <div className="catalog-card__content">
        <Heading className="catalog-card__title">
          <span aria-hidden="true" className="swatch" />
          <Link className="catalog-card__link" href={detailPath}>{item.displayName}</Link>
        </Heading>
        <p className="catalog-card__status">Status: not open for inquiries</p>
        <span aria-hidden="true" className="catalog-card__cta">
          <span className="catalog-card__cta-label">View details</span>
          <span className="catalog-card__cta-arrow">&rarr;</span>
        </span>
      </div>
    </article>
  );
}
