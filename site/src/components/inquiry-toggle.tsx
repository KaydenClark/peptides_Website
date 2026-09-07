"use client";

import { useInquiryList } from "@/components/inquiry-list-provider";

/**
 * Adds or removes one catalog record from the visitor's inquiry list. The
 * control is a plain two-state button: there is no amount to choose, so it
 * carries no numeric input, and it never implies an order or reservation.
 */
export function InquiryToggle({
  recordName,
  slug,
  variant = "panel",
}: {
  recordName: string;
  slug: string;
  variant?: "panel" | "card";
}) {
  const { deselect, hydrated, isSelected, select } = useInquiryList();
  const selected = isSelected(slug);
  const label = selected ? "Remove from inquiry list" : "Add to inquiry list";

  return (
    <button
      className={`inquiry-toggle inquiry-toggle--${variant}${selected ? " is-selected" : ""}`}
      disabled={!hydrated}
      onClick={() => (selected ? deselect(slug) : select(slug))}
      type="button"
    >
      <span aria-hidden="true" className="inquiry-toggle__mark">{selected ? "\u2212" : "+"}</span>
      <span>{label}</span>
      <span className="sr-only">: {recordName}</span>
    </button>
  );
}
