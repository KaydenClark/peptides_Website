import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { catalogRecords, getCatalogRecord } from "@/data/catalog";

export function generateStaticParams() {
  return catalogRecords.map((record) => ({ slug: record.slug }));
}

export default async function CatalogDetailPage(props: PageProps<"/catalog/[slug]">) {
  const { slug } = await props.params;
  const record = getCatalogRecord(slug);

  if (!record) {
    notFound();
  }

  return (
    <section className="detail-page content-container" aria-labelledby="detail-title">
      <nav aria-label="Breadcrumb">
        <Link className="breadcrumb" href="/catalog">Catalog</Link>
        <span aria-hidden="true"> / </span>
        <span>{record.displayName}</span>
      </nav>
      <div className="detail-layout">
        <div className="detail-image">
          <Image alt={record.image.alt} fill priority sizes="(max-width: 1023px) 100vw, 620px" src={record.image.src} />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{record.category}</p>
          <h1 id="detail-title">{record.displayName}</h1>
          <p className="page-lead">{record.summary}</p>
          <dl className="specification-list">
            <div><dt>Identity</dt><dd>Not published</dd></div>
            <div><dt>Record status</dt><dd>Not open for inquiries</dd></div>
            <div><dt>Documentation</dt><dd>Not published</dd></div>
          </dl>
          <section className="research-notice" aria-labelledby="inquiry-status-title">
            <h2 id="inquiry-status-title">Inquiry status</h2>
            <p>Inquiry is not available for this record.</p>
            <p>Viewing a record does not create an order, reservation, payment authorization, or commitment.</p>
          </section>
        </div>
      </div>
    </section>
  );
}
