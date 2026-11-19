"use client";

import { useEffect, useState } from "react";

const DELAY_MS = 900;
const DURATION_MS = 2000;

export default function LaunchProgress({ target }: { target: number }) {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const timer = setTimeout(() => {
      setWidth(target);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(Math.round(eased * target));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, DELAY_MS);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div className="progress">
      <div className="progress-label">
        <span>Launch progress</span>
        <strong>{count}%</strong>
      </div>
      <div
        className="bar"
        role="progressbar"
        aria-valuenow={target}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Launch progress"
      >
        <div className="bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
