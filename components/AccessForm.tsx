"use client";

import { useState, type FormEvent } from "react";
import { IconArrow, IconCheck } from "./icons";

const ROLES = [
  "Academic researcher",
  "Clinician / clinical genomics",
  "Biotech or pharma",
  "Investor",
  "Other",
];

export default function AccessForm() {
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  // Front-end only for now — connect to your email/CRM service later.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    if (!email.value.trim()) {
      setError("Enter your email address so we can reach you.");
      email.focus();
      return;
    }
    if (!email.checkValidity()) {
      setError("That email doesn't look right. Check it and try again, e.g. name@lab.org.");
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
          <strong>You&apos;re on the list.</strong>
          <p>We&apos;ll contact you when early access opens.</p>
        </div>
      </div>
    );
  }

  return (
    <form className="access-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="name@lab.org"
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
          I&apos;m a… <span className="optional">(optional)</span>
        </label>
        <select id="role" name="role" defaultValue="">
          <option value="" disabled>
            Select your field
          </option>
          {ROLES.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <span className="spinner" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            Request early access <IconArrow />
          </>
        )}
      </button>
      <p className="form-hint">We&apos;ll only email you about Aibilge access. No spam.</p>
    </form>
  );
}
