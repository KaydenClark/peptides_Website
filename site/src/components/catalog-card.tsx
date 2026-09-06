import Image from "next/image";
import Link from "next/link";

import type { CatalogRecord } from "@/data/catalog";

export function CatalogCard({ item }: { item: CatalogRecord }) {
  const detailPath = `/catalog/${item.slug}`;

  return (
    <article className="catalog-card">
      <Link aria-label={`View details for ${item.displayName}`} className="catalog-card__image" href={detailPath}>
        <Image alt={item.image.alt} fill sizes="(max-width: 767px) 100vw, 302px" src={item.image.src} />
      </Link>
      <div className="catalog-card__content">
        <p className="eyebrow">{item.category}</p>
        <h2>
          <Link href={detailPath}>{item.displayName}</Link>
        </h2>
        <p>{item.summary}</p>
        <p className="catalog-card__status">Status: not open for inquiries</p>
        <Link className="text-link" href={detailPath}>
          View details
        </Link>
      </div>
    </article>
  );
}
