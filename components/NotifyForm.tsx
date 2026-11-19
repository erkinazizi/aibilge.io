"use client";

import { useRef, useState, type FormEvent } from "react";

export default function NotifyForm() {
  const [done, setDone] = useState(false);
  const [shake, setShake] = useState(false);
  const input = useRef<HTMLInputElement>(null);

  // Front-end only for now — connect this to your email service later.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const el = input.current;
    if (!el || !el.value.trim() || !el.checkValidity()) {
      setShake(false);
      requestAnimationFrame(() => setShake(true));
      el?.focus();
      return;
    }
    setDone(true);
  };

  return (
    <>
      {done ? (
        <div className="thanks" role="status">
          <span className="check">✓</span> Thanks! We&apos;ll be in touch.
        </div>
      ) : (
        <form
          className={shake ? "shake" : undefined}
          onSubmit={onSubmit}
          onAnimationEnd={() => setShake(false)}
          noValidate
        >
          <input
            ref={input}
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            autoComplete="email"
            required
          />
          <button type="submit">Notify me</button>
        </form>
      )}
      <p className="hint">No spam. Just one email when we go live.</p>
    </>
  );
}
