import Image from "next/image";
import Link from "next/link";

import { CatalogCard } from "@/components/catalog-card";
import { Icon, type IconName } from "@/components/icon";
import { catalogRecords } from "@/data/catalog";

const processSteps: Array<{
  title: string;
  detail: string;
  icon: IconName;
  tone: "lime" | "mint" | "blush";
}> = [
  {
    title: "Browse records.",
    detail: "Read the current catalog status and available detail.",
    icon: "browse",
    tone: "lime",
  },
  {
    title: "Choose what to discuss.",
    detail: "A future inquiry remains separate from the catalog.",
    icon: "discuss",
    tone: "mint",
  },
  {
    title: "Owner review follows.",
    detail: "No automatic approval or commitment is created here.",
    icon: "review",
    tone: "blush",
  },
];

/** Newest review date across the records, so the figure never goes stale. */
const lastReviewedAt = catalogRecords
  .map((record) => record.reviewedAt)
  .sort()
  .at(-1);

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="page-title">
        <div className="hero__copy">
          <p className="eyebrow">Research catalog</p>
          <h1 id="page-title">
            A considered place to begin a <span className="hero__accent">research</span> inquiry.
          </h1>
          <p>
            Browse a clear catalog presentation. Any future inquiry remains nonbinding and subject to owner review.
          </p>
          <div className="hero__actions">
            <Link className="button-link" href="/catalog">
              Browse the catalog
            </Link>
            <Link className="button-link button-link--secondary" href="#how-it-works">
              How it works
            </Link>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true">
          <Image fill priority sizes="(max-width: 1023px) 100vw, 45vw" src="/images/research-materials/vial-master.png" alt="" />
        </div>
      </section>

      <section className="highlights" aria-label="Catalog at a glance">
        <ul className="highlight-grid">
          <li className="highlight-card highlight-card--lime">
            <span className="highlight-card__figure">{catalogRecords.length}</span>
            <strong className="highlight-card__title">records in the catalog</strong>
            <span className="highlight-card__detail">
              every entry drawn from owner-provided inventory records
            </span>
          </li>
          <li className="highlight-card highlight-card--mint">
            <span className="highlight-card__badge">
              <Icon name="review" />
            </span>
            <strong className="highlight-card__title">Content reviewed {lastReviewedAt}</strong>
            <span className="highlight-card__detail">
              each record carries the date its content was last checked
            </span>
          </li>
          <li className="highlight-card highlight-card--sky">
            <span className="highlight-card__badge">
              <Icon name="browse" />
            </span>
            <strong className="highlight-card__title">Vial sizes on every record</strong>
            <span className="highlight-card__detail">
              package details exactly as the owner confirmed them
            </span>
          </li>
          <li className="highlight-card highlight-card--lilac">
            <span className="highlight-card__badge">
              <Icon name="discuss" />
            </span>
            <strong className="highlight-card__title">Nothing here is an order</strong>
            <span className="highlight-card__detail">
              no reservation, payment, or commitment is created on this site
            </span>
          </li>
        </ul>
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
            {processSteps.map((step) => (
              <li className={`process-card process-card--${step.tone}`} key={step.title}>
                <span className="process-card__badge">
                  <Icon name={step.icon} />
                </span>
                <strong className="process-card__title">{step.title}</strong>
                <span className="process-card__detail">{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
