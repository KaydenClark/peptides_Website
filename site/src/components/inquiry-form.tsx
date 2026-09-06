"use client";

import { useActionState } from "react";

import type { InquiryFormState } from "@/app/catalog/[slug]/inquiry-action";

type InquiryFormProps = {
  action: (state: InquiryFormState, formData: FormData) => Promise<InquiryFormState>;
};

const initialState: InquiryFormState = { status: "idle" };

export function InquiryForm({ action }: InquiryFormProps) {
  const [state, formAction, isPending] = useActionState(action, initialState);

  if (state.status === "success") {
    return (
      <div className="inquiry-form__success" role="status">
        <p>Message sent. The owner will contact you directly.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="inquiry-form">
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
        {isPending ? "Sending…" : "Send message"}
      </button>
      <p className="inquiry-form__disclaimer">
        This is not an order, reservation, payment authorization, or commitment.
      </p>
    </form>
  );
}
