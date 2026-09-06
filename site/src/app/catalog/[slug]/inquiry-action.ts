"use server";

import { Resend } from "resend";

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const MAX_LENGTH = {
  name: 120,
  contact: 160,
  message: 2000,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendCatalogInquiry(
  recordId: string,
  recordName: string,
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const name = String(formData.get("name") ?? "").trim().slice(0, MAX_LENGTH.name);
  const contact = String(formData.get("contact") ?? "").trim().slice(0, MAX_LENGTH.contact);
  const message = String(formData.get("message") ?? "").trim().slice(0, MAX_LENGTH.message);

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

  const { error } = await resend.emails.send({
    from: process.env.INQUIRY_FROM_EMAIL ?? "Peptide Method <onboarding@resend.dev>",
    to,
    replyTo: EMAIL_PATTERN.test(contact) ? contact : undefined,
    subject: `Research inquiry: ${recordName}`,
    text: [
      `Record: ${recordName} (${recordId})`,
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
