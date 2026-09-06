import Image from "next/image";
import Link from "next/link";

import type { CatalogRecord } from "@/data/catalog";

export function CatalogCard({ item }: { item: CatalogRecord }) {
  const detailPath = `/catalog/${item.slug}`;

  return (
    <article className="catalog-card" style={{ "--accent": item.accent } as React.CSSProperties}>
      <div className="catalog-card__image">
        <Image alt={item.image.alt} fill sizes="(max-width: 767px) 100vw, 302px" src={item.image.src} />
      </div>
      <div aria-hidden="true" className="catalog-card__accent" />
      <div className="catalog-card__content">
        <h2 className="catalog-card__title">
          <span aria-hidden="true" className="swatch" />
          <Link className="catalog-card__link" href={detailPath}>{item.displayName}</Link>
        </h2>
        <p className="catalog-card__status">Status: not open for inquiries</p>
        <span aria-hidden="true" className="catalog-card__cta">
          <span className="catalog-card__cta-label">View details</span>
          <span className="catalog-card__cta-arrow">&rarr;</span>
        </span>
      </div>
    </article>
  );
}
