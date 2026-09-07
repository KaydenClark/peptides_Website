"use server";

import { Resend } from "resend";

import { getCatalogRecord } from "@/data/catalog";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const MAX_LENGTH = {
  name: 120,
  contact: 160,
  message: 2000,
};

const MAX_ENTRIES = 20;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * TK-013: sends one combined message about every catalog record on the
 * visitor's inquiry list. The submitted slugs are never trusted; each one is
 * re-derived from the catalog module so the email can only ever name records
 * this build actually publishes. Nothing is stored by the application: the
 * outgoing email is the only record, exactly as in TK-012.
 */
export async function sendInquiryList(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const name = String(formData.get("name") ?? "").trim().slice(0, MAX_LENGTH.name);
  const contact = String(formData.get("contact") ?? "").trim().slice(0, MAX_LENGTH.contact);
  const message = String(formData.get("message") ?? "").trim().slice(0, MAX_LENGTH.message);

  const submittedSlugs = formData
    .getAll("slug")
    .map((entry) => String(entry).trim())
    .slice(0, MAX_ENTRIES);

  const records = Array.from(new Set(submittedSlugs))
    .map((slug) => getCatalogRecord(slug))
    .filter((record) => record !== undefined);

  if (records.length === 0) {
    return { status: "error", message: "Add at least one record to your inquiry list first." };
  }

  if (!name || !contact) {
    return { status: "error", message: "Enter your name and a way to reach you." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.OWNER_NOTIFY_EMAIL;

  if (!apiKey || !to) {
    console.error("Inquiry not sent: RESEND_API_KEY or OWNER_NOTIFY_EMAIL is not configured.");
    return { status: "error", message: "This isn't set up to send yet. Please try reaching out another way." };
  }

  const resend = new Resend(apiKey);

  const recordLabel = records.length === 1 ? "record" : "records";

  const { error } = await resend.emails.send({
    from: process.env.INQUIRY_FROM_EMAIL ?? "Peptide Method <onboarding@resend.dev>",
    to,
    replyTo: EMAIL_PATTERN.test(contact) ? contact : undefined,
    subject: `Research inquiry: ${records.length} ${recordLabel}`,
    text: [
      `Records (${records.length}):`,
      ...records.map((record) => `- ${record.displayName} (${record.id})`),
      "",
      `Name: ${name}`,
      `Contact: ${contact}`,
      "",
      message || "(no message)",
      "",
      "This message is not an order, reservation, payment authorization, or commitment.",
    ].join("\n"),
  });

  if (error) {
    console.error("Inquiry email failed to send:", error);
    return { status: "error", message: "Something went wrong sending your message. Please try again." };
  }

  return { status: "success" };
}
