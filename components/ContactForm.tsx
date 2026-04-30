"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      {/* Honeypot — hidden field, bots fill, humans don't */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field
        id="contact-name"
        name="name"
        label="Your name"
        error={state.errors?.name}
      />
      <Field
        id="contact-email"
        name="email"
        type="email"
        label="Email"
        error={state.errors?.email}
      />
      <Field
        id="contact-message"
        name="message"
        label="Message"
        error={state.errors?.message}
        textarea
      />

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-(--color-brand-orange) px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:brightness-110 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      {state.message && (
        <p
          role={state.ok ? "status" : "alert"}
          className={`text-sm font-medium ${
            state.ok ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  error,
  type = "text",
  textarea = false,
}: {
  id: string;
  name: string;
  label: string;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  const baseClass =
    "w-full rounded-xl border-2 border-(--color-brand-ink) bg-white px-4 py-3 text-base outline-none transition focus:border-(--color-brand-orange)";
  const errorClass = error ? "border-red-500" : "";

  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required
          className={`${baseClass} ${errorClass} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          className={`${baseClass} ${errorClass}`}
        />
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
