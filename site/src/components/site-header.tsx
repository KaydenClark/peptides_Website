"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { href: "/catalog", label: "Catalog" },
  { href: "/#how-it-works", label: "How it works" },
];

export function SiteHeader() {
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
      <p className="notice-strip">
        Research catalog access is for research inquiry only.
      </p>
      <header className="site-header">
        <div className="site-header__inner">
          <Link className="wordmark" href="/">
            Peptide Method
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
