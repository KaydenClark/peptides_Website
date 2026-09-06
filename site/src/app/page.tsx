import Image from "next/image";
import Link from "next/link";

import { CatalogCard } from "@/components/catalog-card";
import { catalogRecords } from "@/data/catalog";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__copy">
          <p className="eyebrow">Research catalog</p>
          <h1 id="page-title">A considered place to begin a research inquiry.</h1>
          <p>
            Browse a clear catalog presentation. Any future inquiry remains nonbinding and subject to owner review.
          </p>
          <div className="hero__actions">
            <Link className="button-link" href="/catalog">
              Browse the catalog
            </Link>
            <Link className="text-link" href="#how-it-works">
              How it works
            </Link>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <Image fill priority sizes="(max-width: 1023px) 100vw, 45vw" src="/images/research-materials/vial-master.png" alt="" />
        </div>
      </section>

      <section className="catalog-preview content-container" aria-labelledby="catalog-preview-title">
        <div className="section-heading">
          <p className="eyebrow">Catalog preview</p>
          <h2 id="catalog-preview-title">A physical-vial catalog presentation</h2>
          <p>Each record keeps its status visible and its details easy to inspect.</p>
        </div>
        <div className="catalog-grid">
          {catalogRecords.slice(0, 6).map((record) => (
            <CatalogCard headingLevel={3} item={record} key={record.id} />
          ))}
        </div>
        <Link className="text-link catalog-preview__link" href="/catalog">
          Browse the catalog
        </Link>
      </section>

      <section className="process-section" id="how-it-works" aria-labelledby="how-it-works-title">
        <div className="content-container">
          <p className="eyebrow">How it works</p>
          <h2 id="how-it-works-title">Browse first. Discuss only when appropriate.</h2>
          <ol className="process-list">
            <li><strong>Browse records.</strong> Read the current catalog status and available detail.</li>
            <li><strong>Choose what to discuss.</strong> A future inquiry remains separate from the catalog.</li>
            <li><strong>Owner review follows.</strong> No automatic approval or commitment is created here.</li>
          </ol>
        </div>
      </section>
    </>
  );
}
