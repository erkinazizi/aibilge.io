"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const spot = useRef<HTMLDivElement>(null);

  // Move the glow with the pointer without re-rendering React.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!spot.current) return;
      spot.current.style.left = `${e.clientX}px`;
      spot.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="grid" />
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="orb o3" />
      <div className="spotlight" ref={spot} />
    </div>
  );
}
