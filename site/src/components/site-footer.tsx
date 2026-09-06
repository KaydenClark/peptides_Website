import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__wordmark">Peptide Method</p>
        <nav aria-label="Footer navigation" className="site-footer__nav">
          <Link href="/catalog">Catalog</Link>
          <Link href="/#how-it-works">How it works</Link>
        </nav>
        {/* Carries the banner's research-only sentence verbatim, so it stays on
            every route now that the banner only spells it out on the home page. */}
        <p className="site-footer__notice">
          Research catalog access is for research inquiry only. This is a
          private, non-transactional research catalog. Any inquiry is nonbinding
          and does not create an order, reservation, payment authorization, or
          commitment.
        </p>
      </div>
    </footer>
  );
}
