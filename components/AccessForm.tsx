"use client";

import { useState, type FormEvent } from "react";
import { IconArrow, IconCheck } from "./icons";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export default function AccessForm({ t }: { t: Dictionary["access"]["form"] }) {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  // Front-end only for now — connect to your email/CRM service later.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (!email.value.trim()) {
      setError(t.errEmpty);
      email.focus();
      return;
    }
    if (!email.checkValidity()) {
      setError(t.errInvalid);
      email.focus();
      return;
    }
    setError("");
    setStatus("sending");
    setTimeout(() => setStatus("done"), 700);
  };

  if (status === "done") {
    return (
      <div className="form-success" role="status">
        <span className="success-icon">
          <IconCheck />
        </span>
        <div>
          <strong>{t.successTitle}</strong>
          <p>{t.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="access-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="email">{t.emailLabel}</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.emailPlaceholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "email-error" : undefined}
          onBlur={(e) => {
            if (error && e.currentTarget.checkValidity() && e.currentTarget.value) setError("");
          }}
          required
        />
        {error && (
          <p id="email-error" className="field-error" role="alert">
            {error}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="role">
          {t.roleLabel} <span className="optional">{t.optional}</span>
        </label>
        <select id="role" name="role" defaultValue="">
          <option value="" disabled>
            {t.rolePlaceholder}
          </option>
          {t.roles.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span className="spinner" aria-hidden="true" /> {t.sending}
          </>
        ) : (
          <>
            {t.submit} <IconArrow />
          </>
        )}
      </button>
      <p className="form-hint">{t.hint}</p>
    </form>
  );
}
