import type { Metadata } from "next";

import { InquiryListForm } from "@/components/inquiry-list-form";
import { catalogRecords } from "@/data/catalog";

import { sendInquiryList } from "./inquiry-action";

export const metadata: Metadata = {
  title: "Inquiry list",
  description:
    "Review the research-material records you selected and send one message to the site owner. Informational only and not an order or offer.",
};

export default function InquiryListPage() {
  const entries = catalogRecords.map((record) => ({
    slug: record.slug,
    displayName: record.displayName,
  }));

  return (
    <section className="inquiry-page content-container" aria-labelledby="inquiry-title">
      <p className="eyebrow">Inquiry list</p>
      <h1 id="inquiry-title">Your inquiry list</h1>
      {/* The list itself is client-only browser context, so this lead has to
          read correctly whether or not anything is selected. */}
      <p className="page-lead">
        Records you add from the catalog collect here. Sending the list starts a
        conversation with the site owner; it is informational only.
      </p>
      <InquiryListForm action={sendInquiryList} entries={entries} />
    </section>
  );
}
