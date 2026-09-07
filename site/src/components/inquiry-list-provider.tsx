"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

/**
 * TK-013 selection state.
 *
 * The inquiry list is temporary browser context only: a set of catalog slugs
 * the visitor wants to ask the owner about in one message. It is held in
 * sessionStorage so it survives navigation between catalog routes and clears
 * when the tab closes. Nothing is persisted by the application, nothing is
 * sent to the server until the visitor submits the combined form, and the
 * list carries no amount, price, total, or reservation of any kind.
 *
 * sessionStorage is an external store, so it is read through
 * useSyncExternalStore rather than an effect: the server and the hydration
 * pass both see the empty list, and React re-renders once with the real
 * selection immediately afterwards.
 */
const STORAGE_KEY = "peptide-method.inquiry-list";
const MAX_ENTRIES = 20;

/** Stable identity for the server and hydration snapshots. */
const EMPTY: string[] = [];

const listeners = new Set<() => void>();

let currentSlugs: string[] = EMPTY;

function readStoredSlugs(): string[] {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return EMPTY;
    }

    const parsed: unknown = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      return EMPTY;
    }

    return parsed.filter((entry): entry is string => typeof entry === "string").slice(0, MAX_ENTRIES);
  } catch {
    // A blocked or corrupt store is not an error the visitor needs to see;
    // the list simply starts empty for this tab.
    return EMPTY;
  }
}

if (typeof window !== "undefined") {
  currentSlugs = readStoredSlugs();
}

function setSlugs(next: string[]) {
  if (next === currentSlugs) {
    return;
  }

  currentSlugs = next;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Selection still works for this tab if the store is unavailable.
  }

  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return currentSlugs;
}

function getServerSnapshot() {
  return EMPTY;
}

function getHydratedSnapshot() {
  return true;
}

function getHydratedServerSnapshot() {
  return false;
}

type InquiryListValue = {
  /** Selected catalog slugs, in the order the visitor added them. */
  slugs: string[];
  /** False until sessionStorage has been read, so server and client markup match. */
  hydrated: boolean;
  isSelected: (slug: string) => boolean;
  select: (slug: string) => void;
  deselect: (slug: string) => void;
  clear: () => void;
};

const InquiryListContext = createContext<InquiryListValue | null>(null);

export function InquiryListProvider({ children }: { children: React.ReactNode }) {
  const slugs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const hydrated = useSyncExternalStore(subscribe, getHydratedSnapshot, getHydratedServerSnapshot);

  const isSelected = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  const select = useCallback((slug: string) => {
    if (currentSlugs.includes(slug) || currentSlugs.length >= MAX_ENTRIES) {
      return;
    }

    setSlugs([...currentSlugs, slug]);
  }, []);

  const deselect = useCallback((slug: string) => {
    setSlugs(currentSlugs.filter((entry) => entry !== slug));
  }, []);

  const clear = useCallback(() => setSlugs(EMPTY), []);

  const value = useMemo<InquiryListValue>(
    () => ({ slugs, hydrated, isSelected, select, deselect, clear }),
    [slugs, hydrated, isSelected, select, deselect, clear],
  );

  return <InquiryListContext.Provider value={value}>{children}</InquiryListContext.Provider>;
}

export function useInquiryList() {
  const value = useContext(InquiryListContext);

  if (!value) {
    throw new Error("useInquiryList must be used inside InquiryListProvider");
  }

  return value;
}
