"use client";

import { useEffect, useRef, useState } from "react";

type Kind = "a" | "t" | "g" | "c";
type Segment = { t: string; label?: string; kind?: Kind };

// Illustrative sequence with a few well-known regulatory "words".
const SEGMENTS: Segment[] = [
  { t: "GGCCAGTTCAGGCTGACCTGGACC" },
  { t: "TATAAAAG", label: "TATA box · core promoter", kind: "g" },
  { t: "CTCAGGTCCCAGCTGAGC" },
  { t: "CACGTG", label: "E-box · TF binding motif", kind: "c" },
  { t: "AGGTTCGAGGACTTACCAGTC" },
  { t: "CGCGGCGCCGCG", label: "CpG island · methylation", kind: "a" },
  { t: "TTGACCAATGGCTCAGGAAGCC" },
  { t: "GTAAGT", label: "5′ splice donor site", kind: "t" },
  { t: "CCTGACTTCAGGCTTCCAGG" },
];

// Precompute feature order and base-pair positions.
let cursor = 0;
let featureIdx = 0;
const PARSED = SEGMENTS.map((s) => {
  const start = cursor + 1;
  cursor += s.t.length;
  return { ...s, start, end: cursor, f: s.label ? featureIdx++ : -1 };
});
const FEATURES = PARSED.filter((s) => s.label);
const STEP_MS = 1300;
const HOLD_MS = 2600;

export default function SequenceParser() {
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
          {complete ? "4 elements annotated" : "Parsing…"}
        </span>
      </div>

      <p className="seq mono" aria-label="Example DNA sequence with annotated regulatory elements">
        {PARSED.map((s, i) =>
          s.label ? (
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
          <li key={f.label} className={f.f <= found ? "on" : ""}>
            <span className={`swatch k-${f.kind}`} aria-hidden="true" />
            <span className="annot-label">{f.label}</span>
            <span className="annot-pos mono">
              {f.start}–{f.end}
            </span>
          </li>
        ))}
      </ol>
      <p className="seq-note">Illustrative example. Not model output.</p>
    </div>
  );
}
