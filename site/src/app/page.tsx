"use client";

import Image from "next/image";
import { useState } from "react";

function CanonicalVial() {
  return (
    <div className="vial-stage" aria-label="Illustrative research vial with a programmatic label">
      <Image
        src="/images/research-materials/canonical-vial.png"
        alt="Unlabeled clear glass research vial with aluminum cap"
        fill
        priority
        sizes="(max-width: 720px) 240px, 300px"
      />
      <div className="vial-label" aria-hidden="true">
        <span className="label-brand">Research Catalog</span>
        <strong>Illustrative candidate</strong>
        <span>Strength: pending review</span>
        <span className="label-rule">Research Use Only</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [isListed, setIsListed] = useState(false);

  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Research Catalog home">Research Catalog</a>
        <nav aria-label="Prototype navigation">
          <a href="#catalog">Catalog</a>
          <a href="#inquiry-list">Inquiry list</a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <p className="prototype-note">Local prototype</p>
        <h1 id="page-title">A calmer way to begin a research conversation.</h1>
        <p className="intro">
          Explore the catalog visual system and a single placeholder entry. This
          screen stores nothing and does not send requests.
        </p>
      </section>

      <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
        <div className="section-heading">
          <h2 id="catalog-title">Catalog preview</h2>
          <p>Card structure is intentionally familiar, while the interaction remains an inquiry only.</p>
        </div>
        <article className="candidate-card">
          <div className="candidate-image vial-image"><CanonicalVial /></div>
          <div className="candidate-content">
            <p className="item-label">Illustrative candidate</p>
            <p className="item-status">Identity review pending · Strength review pending</p>
            <button
              className="primary-action"
              type="button"
              aria-pressed={isListed}
              onClick={() => setIsListed((listed) => !listed)}
            >
              {isListed ? "Request noted locally" : "Request a research conversation"}
            </button>
          </div>
        </article>
      </section>

      <section className="inquiry-note" id="inquiry-list" aria-live="polite">
        <span className="note-icon" aria-hidden="true">⌁</span>
        <div>
          <h2>{isListed ? "One illustrative item selected" : "Your inquiry list is empty"}</h2>
          <p>Local prototype — no submissions</p>
        </div>
      </section>

      <section className="system-section" aria-labelledby="system-title">
        <h2 id="system-title">One consistent vial system</h2>
        <p>
          The same canonical vial image, camera angle, lighting, scale, and label
          placement will be used for every reviewed catalog entry.
        </p>
        <div className="label-key" aria-label="Label system details">
          <span>Compound name</span><span>Strength</span><span>Brand</span><span>Research Use Only</span>
        </div>
      </section>

      <footer><p>Research Catalog · local design prototype</p></footer>
    </main>
  );
}
