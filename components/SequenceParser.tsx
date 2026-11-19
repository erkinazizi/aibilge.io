"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Kind = "a" | "t" | "g" | "c";
// `feature` indexes the translated labels in the dictionary.
type Segment = { t: string; feature?: number; kind?: Kind };

// Illustrative sequence with a few well-known regulatory "words".
const SEGMENTS: Segment[] = [
  { t: "GGCCAGTTCAGGCTGACCTGGACC" },
  { t: "TATAAAAG", feature: 0, kind: "g" },
  { t: "CTCAGGTCCCAGCTGAGC" },
  { t: "CACGTG", feature: 1, kind: "c" },
  { t: "AGGTTCGAGGACTTACCAGTC" },
  { t: "CGCGGCGCCGCG", feature: 2, kind: "a" },
  { t: "TTGACCAATGGCTCAGGAAGCC" },
  { t: "GTAAGT", feature: 3, kind: "t" },
  { t: "CCTGACTTCAGGCTTCCAGG" },
];

// Precompute feature order and base-pair positions.
let cursor = 0;
const PARSED = SEGMENTS.map((s) => {
  const start = cursor + 1;
  cursor += s.t.length;
  return { ...s, start, end: cursor, f: s.feature ?? -1 };
});
const FEATURES = PARSED.filter((s) => s.f >= 0);
const STEP_MS = 1300;
const HOLD_MS = 2600;

export default function SequenceParser({ t }: { t: Dictionary["parser"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [found, setFound] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFound(FEATURES.length - 1);
      return;
    }
    if (!visible) return;
    const done = found >= FEATURES.length - 1;
    const id = setTimeout(
      () => setFound((f) => (f >= FEATURES.length - 1 ? -1 : f + 1)),
      done ? HOLD_MS : found < 0 ? 600 : STEP_MS,
    );
    return () => clearTimeout(id);
  }, [found, visible]);

  const complete = found >= FEATURES.length - 1;

  return (
    <div className="seq-panel glass" ref={ref}>
      <div className="seq-head">
        <span className="seq-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="mono seq-title">sequence.fa · {cursor} bp</span>
        <span className={`seq-state mono ${complete ? "done" : ""}`}>
          <span className="pulse" aria-hidden="true" />
          {complete ? t.done : t.parsing}
        </span>
      </div>

      <p className="seq mono" aria-label={t.aria}>
        {PARSED.map((s, i) =>
          s.f >= 0 ? (
            <mark key={i} className={`motif k-${s.kind} ${s.f <= found ? "on" : ""}`}>
              {s.t}
            </mark>
          ) : (
            <span key={i}>{s.t}</span>
          ),
        )}
      </p>

      <ol className="annot">
        {FEATURES.map((f) => (
          <li key={f.f} className={f.f <= found ? "on" : ""}>
            <span className={`swatch k-${f.kind}`} aria-hidden="true" />
            <span className="annot-label">{t.features[f.f]}</span>
            <span className="annot-pos mono">
              {f.start}–{f.end}
            </span>
          </li>
        ))}
      </ol>
      <p className="seq-note">{t.note}</p>
    </div>
  );
}
