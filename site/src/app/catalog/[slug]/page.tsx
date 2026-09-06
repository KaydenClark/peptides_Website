import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Icon } from "@/components/icon";
import { InquiryForm } from "@/components/inquiry-form";
import { catalogRecords, getCatalogRecord } from "@/data/catalog";

import { sendCatalogInquiry } from "./inquiry-action";

export function generateStaticParams() {
  return catalogRecords.map((record) => ({ slug: record.slug }));
}

export async function generateMetadata(props: PageProps<"/catalog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const record = getCatalogRecord(slug);

  if (!record) {
    return { title: "Record not found" };
  }

  return {
    title: record.displayName,
    description: `Informational research catalog record for ${record.displayName}. Not an offer, order, price, or medical claim.`,
  };
}

export default async function CatalogDetailPage(props: PageProps<"/catalog/[slug]">) {
  const { slug } = await props.params;
  const record = getCatalogRecord(slug);

  if (!record) {
    notFound();
  }

  return (
    <section className="detail-page content-container" aria-labelledby="detail-title" style={{ "--accent": record.accent } as React.CSSProperties}>
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
          <h1 className="detail-title" id="detail-title">
            <span aria-hidden="true" className="swatch" />
            <span>{record.displayName}</span>
          </h1>
          <p className="page-lead">{record.summary}</p>
          <dl className="specification-list">
            <div><dt>Product name</dt><dd>{record.displayName}</dd></div>
            {record.price ? (
              <div><dt>Price</dt><dd>{record.price}</dd></div>
            ) : null}
          </dl>
          <div className="size-pills">
            <span className="size-pills__label">Vial sizes</span>
            <ul className="size-pills__list">
              {record.catalogStrengths.map((strength) => (
                <li className="size-pills__item" key={strength}>{strength}</li>
              ))}
            </ul>
          </div>
          <section className="research-notice" aria-labelledby="research-info-title">
            <h2 id="research-info-title"><span className="research-notice__badge"><Icon name="research" /></span>Research information</h2>
            {record.specifications.length > 0 ? (
              <dl className="specification-list">
                {record.specifications.map((specification) => (
                  <div key={specification.label}><dt>{specification.label}</dt><dd>{specification.value}</dd></div>
                ))}
                <div><dt>Content review</dt><dd>{record.reviewedAt}</dd></div>
                <div><dt>Catalog source</dt><dd>{record.source}</dd></div>
              </dl>
            ) : (
              <>
                <p>No additional research information is listed for this record.</p>
                <dl className="specification-list">
                  <div><dt>Content review</dt><dd>{record.reviewedAt}</dd></div>
                  <div><dt>Catalog source</dt><dd>{record.source}</dd></div>
                </dl>
              </>
            )}
          </section>
          <section className="research-notice research-notice--contact" aria-labelledby="inquiry-status-title">
            <h2 id="inquiry-status-title"><span className="research-notice__badge"><Icon name="contact" /></span>Contact about this item</h2>
            <InquiryForm action={sendCatalogInquiry.bind(null, record.id, record.displayName)} />
          </section>
        </div>
      </div>
    </section>
  );
}
