"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";

import { useInquiryList } from "@/components/inquiry-list-provider";
import type { InquiryFormState } from "@/app/inquiry/inquiry-action";

type InquiryListEntry = {
  slug: string;
  displayName: string;
};

type InquiryListFormProps = {
  action: (state: InquiryFormState, formData: FormData) => Promise<InquiryFormState>;
  entries: InquiryListEntry[];
};

const initialState: InquiryFormState = { status: "idle" };

export function InquiryListForm({ action, entries }: InquiryListFormProps) {
  const { clear, deselect, hydrated, slugs } = useInquiryList();
  const [state, formAction, isPending] = useActionState(action, initialState);

  const selected = slugs
    .map((slug) => entries.find((entry) => entry.slug === slug))
    .filter((entry) => entry !== undefined);

  useEffect(() => {
    if (state.status === "success") {
      clear();
    }
  }, [clear, state.status]);

  if (state.status === "success") {
    return (
      <div className="inquiry-form__success" role="status">
        <p>Message sent. The owner will contact you directly.</p>
        <p className="inquiry-form__disclaimer">
          This is not an order, reservation, payment authorization, or commitment.
        </p>
        <Link className="button-link" href="/catalog">Browse the catalog</Link>
      </div>
    );
  }

  // Until sessionStorage has been read the list is unknown, so render neither
  // the empty state nor a form that would post an empty selection.
  if (!hydrated) {
    return <p className="inquiry-list__pending">Loading your inquiry list…</p>;
  }

  if (selected.length === 0) {
    return (
      <div className="inquiry-list__empty">
        <p>Your inquiry list is empty.</p>
        <p className="inquiry-form__hint">
          Open a catalog record and choose &ldquo;Add to inquiry list&rdquo; to ask the owner
          about it. You can add more than one record and send a single message.
        </p>
        <Link className="button-link" href="/catalog">Browse the catalog</Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="inquiry-form">
      <ul className="inquiry-list__entries">
        {selected.map((entry) => (
          <li className="inquiry-list__entry" key={entry.slug}>
            <input name="slug" type="hidden" value={entry.slug} />
            <Link className="inquiry-list__entry-link" href={`/catalog/${entry.slug}`}>
              {entry.displayName}
            </Link>
            <button
              className="inquiry-list__remove"
              onClick={() => deselect(entry.slug)}
              type="button"
            >
              Remove from inquiry list<span className="sr-only">: {entry.displayName}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="inquiry-form__hint">
        Use this field only for logistics questions. Do not include medical
        information, prescriptions, dose or usage questions, or personal-use
        details.
      </p>
      <div className="inquiry-form__field">
        <label htmlFor="inquiry-name">Name</label>
        <input id="inquiry-name" maxLength={120} name="name" required type="text" />
      </div>
      <div className="inquiry-form__field">
        <label htmlFor="inquiry-contact">Email or phone</label>
        <input id="inquiry-contact" maxLength={160} name="contact" required type="text" />
      </div>
      <div className="inquiry-form__field">
        <label htmlFor="inquiry-message">Message (optional)</label>
        <textarea id="inquiry-message" maxLength={2000} name="message" rows={4} />
      </div>
      {state.status === "error" && state.message ? (
        <p className="inquiry-form__error" role="alert">{state.message}</p>
      ) : null}
      <button className="button-link inquiry-form__submit" disabled={isPending} type="submit">
        {isPending ? "Sending…" : "Send inquiry"}
      </button>
      <p className="inquiry-form__disclaimer">
        This is not an order, reservation, payment authorization, or commitment.
      </p>
    </form>
  );
}
