"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/catalog", label: "Catalog" },
  { href: "/#how-it-works", label: "How it works" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    openButtonRef.current?.focus();
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = event.currentTarget.querySelectorAll<HTMLElement>(
      'button, a[href]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {/* The notice strip and header share one sticky wrapper so the teal band
          stays pinned above the header at every scroll position. The home page
          carries the full notice; every other route keeps the colour as a plain
          decorative sliver, with the research-only wording held by the footer. */}
      <div className="site-banner">
        {isHome ? (
          <p className="notice-strip">
            Research catalog access is for research inquiry only.
          </p>
        ) : (
          <div aria-hidden="true" className="notice-strip notice-strip--slim" />
        )}
        <header className="site-header">
          <div className="site-header__inner">
            <Link className="wordmark" href="/">
              <span className="wordmark__primary">Peptide</span>{" "}
              <span className="wordmark__secondary">Method</span>
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              aria-controls="mobile-navigation"
              aria-expanded={isOpen}
              className="menu-button"
              onClick={() => setIsOpen(true)}
              ref={openButtonRef}
              type="button"
            >
              Menu
            </button>
          </div>
        </header>
      </div>
      {isOpen ? (
        <div
          className="menu-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeMenu();
            }
          }}
        >
          <aside
            aria-label="Navigation menu"
            aria-modal="true"
            className="menu-dialog"
            id="mobile-navigation"
            onKeyDown={handleMenuKeyDown}
            role="dialog"
          >
            <button className="menu-close" onClick={closeMenu} ref={closeButtonRef} type="button">
              Close menu
            </button>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
