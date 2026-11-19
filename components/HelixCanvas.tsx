"use client";

import { useEffect, useRef } from "react";

// Base colours come from CSS tokens so the helix follows light/dark mode.
const BASE_VARS = ["--base-a", "--base-t", "--base-g", "--base-c"];
// Deterministic sequence of base indices (A=0, T=1, G=2, C=3). Complement = i ^ 1.
const PAIRS = Array.from({ length: 38 }, (_, i) => (i * 7 + ((i * i) % 5)) % 4);

export default function HelixCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let colors: string[] = [];
    let strand = "";
    let scan = "";

    const readColors = () => {
      const s = getComputedStyle(canvas);
      colors = BASE_VARS.map((v) => s.getPropertyValue(v).trim());
      strand = s.getPropertyValue("--helix-strand").trim();
      scan = s.getPropertyValue("--primary").trim();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const n = PAIRS.length;
      const step = h / n;
      const amp = Math.min(w * 0.3, 118);
      const cx = w / 2;
      const rot = t * 0.00055;
      // "Reading head" that sweeps down the molecule.
      const scanY = reduceMotion.matches ? h * 0.42 : ((t * 0.07) % (h + 160)) - 80;

      const pts = PAIRS.map((b, i) => {
        const y = step * (i + 0.5);
        const p = i * 0.43 + rot;
        const s = Math.sin(p);
        const c = Math.cos(p);
        const boost = Math.exp(-(((y - scanY) / 46) ** 2));
        return { y, s, x1: cx + s * amp, z1: c, x2: cx - s * amp, z2: -c, b, boost };
      });

      // Scan band
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(0.5, scan);
      grad.addColorStop(1, "transparent");
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 40, w, 80);
      ctx.globalAlpha = 0.55;
      ctx.strokeStyle = scan;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(cx - amp - 40, scanY);
      ctx.lineTo(cx + amp + 40, scanY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Backbones
      for (const side of [0, 1]) {
        ctx.beginPath();
        pts.forEach((q, i) => {
          const x = side ? q.x2 : q.x1;
          if (i) ctx.lineTo(x, q.y);
          else ctx.moveTo(x, q.y);
        });
        ctx.globalAlpha = 0.28;
        ctx.strokeStyle = strand;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Base-pair rungs
      ctx.lineWidth = 2;
      for (const q of pts) {
        const mid = (q.x1 + q.x2) / 2;
        const a = Math.min(1, 0.12 + 0.5 * Math.abs(q.s) + q.boost * 0.6);
        ctx.globalAlpha = a;
        ctx.strokeStyle = colors[q.b];
        ctx.beginPath();
        ctx.moveTo(q.x1, q.y);
        ctx.lineTo(mid, q.y);
        ctx.stroke();
        ctx.strokeStyle = colors[q.b ^ 1];
        ctx.beginPath();
        ctx.moveTo(mid, q.y);
        ctx.lineTo(q.x2, q.y);
        ctx.stroke();
      }

      // Nucleotides, back to front
      const dots = pts.flatMap((q) => [
        { x: q.x1, y: q.y, z: q.z1, c: colors[q.b], boost: q.boost },
        { x: q.x2, y: q.y, z: q.z2, c: colors[q.b ^ 1], boost: q.boost },
      ]);
      dots.sort((a, b) => a.z - b.z);
      for (const d of dots) {
        const depth = (d.z + 1) / 2;
        ctx.globalAlpha = 0.35 + 0.65 * depth;
        ctx.fillStyle = d.c;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2 + 3 * depth + d.boost * 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t: number) => {
      draw(t);
      if (visible && !reduceMotion.matches && !document.hidden) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      cancelAnimationFrame(raf);
      if (reduceMotion.matches) draw(0);
      else raf = requestAnimationFrame(loop);
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readColors();
      start();
    };

    // Colours must exist before any frame can draw (observers may fire in any order).
    readColors();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    // Pause when off-screen.
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    });
    io.observe(canvas);
    const onScheme = () => {
      readColors();
      start();
    };
    scheme.addEventListener("change", onScheme);
    // Day/night toggle sets data-theme on <html>.
    const mo = new MutationObserver(onScheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    reduceMotion.addEventListener("change", start);
    document.addEventListener("visibilitychange", start);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      mo.disconnect();
      scheme.removeEventListener("change", onScheme);
      reduceMotion.removeEventListener("change", start);
      document.removeEventListener("visibilitychange", start);
    };
  }, []);

  return <canvas ref={ref} className="helix" aria-hidden="true" />;
}
