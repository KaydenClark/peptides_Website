"use client";

import Image from "next/image";
import { useState } from "react";

const visualExamples = [
  {
    id: "visual-01",
    title: "Illustrative visual 01",
    src: "/images/research-materials/candidate-visual-01.png",
    alt: "Abstract ribbon-like research visual in navy, teal, and yellow",
  },
  {
    id: "visual-02",
    title: "Illustrative visual 02",
    src: "/images/research-materials/candidate-visual-02.png",
    alt: "Abstract translucent research visual in lavender, teal, and navy",
  },
  {
    id: "visual-03",
    title: "Illustrative visual 03",
    src: "/images/research-materials/candidate-visual-03.png",
    alt: "Abstract bead-chain research visual on a navy background",
  },
  {
    id: "visual-04",
    title: "Illustrative visual 04",
    src: "/images/research-materials/candidate-visual-04.png",
    alt: "Abstract glass helix research visual above a laboratory dish",
  },
  {
    id: "visual-05",
    title: "Illustrative visual 05",
    src: "/images/research-materials/candidate-visual-05.png",
    alt: "Abstract radial research visual in teal, lavender, and yellow",
  },
];

export default function Home() {
  const [isListed, setIsListed] = useState(false);
  const [selectedVisualId, setSelectedVisualId] = useState(visualExamples[0].id);
  const selectedVisual = visualExamples.find((visual) => visual.id === selectedVisualId) ?? visualExamples[0];

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
          Explore five illustrative visuals and a single placeholder entry. This
          screen stores nothing and does not send requests.
        </p>
      </section>

      <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
        <div className="section-heading">
          <h2 id="catalog-title">Catalog preview</h2>
          <p>Card structure is intentionally familiar, while the interaction remains an inquiry only.</p>
        </div>
        <div className="visual-gallery" aria-label="Five illustrative visuals">
          {visualExamples.map((visual) => (
            <button
              className={`visual-selector${visual.id === selectedVisual.id ? " is-selected" : ""}`}
              type="button"
              key={visual.id}
              aria-pressed={visual.id === selectedVisual.id}
              onClick={() => setSelectedVisualId(visual.id)}
            >
              <Image src={visual.src} alt="" fill sizes="(max-width: 720px) 44vw, 140px" />
              <span>{visual.title}</span>
            </button>
          ))}
        </div>
        <article className="candidate-card">
          <div className="candidate-image selected-visual-image">
            <Image src={selectedVisual.src} alt={selectedVisual.alt} fill priority sizes="(max-width: 720px) 100vw, 720px" />
          </div>
          <div className="candidate-content">
            <p className="item-label">Illustrative candidate</p>
            <p className="item-status">{selectedVisual.title} · Identity review pending · Strength review pending</p>
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
        <h2 id="system-title">Five visual concepts</h2>
        <p>
          These five visuals are a local design exercise, not reviewed catalog
          entries. Selecting one changes this prototype only.
        </p>
        <div className="label-key" aria-label="Label system details">
          <span>Local selection</span><span>Identity pending review</span><span>No submissions</span>
        </div>
      </section>

      <footer><p>Research Catalog · local design prototype</p></footer>
    </main>
  );
}
