import { useId } from "react";

/**
 * Aibilge owl mark. "Bilge" means wise in Turkish, so the mark is an owl;
 * the circuit traces on its chest form a DNA double helix.
 */
export function OwlMark({ size = 40 }: { size?: number }) {
  const id = useId().replace(/:/g, "");
  const body = `owl-body-${id}`;
  const glow = `owl-glow-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="owl-mark"
    >
      <defs>
        <linearGradient id={body} x1="14" y1="6" x2="34" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1d4ed8" />
          <stop offset="0.55" stopColor="#1e40af" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={glow} x1="12" y1="14" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#67e8f9" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      {/* Head + body silhouette with angled ear tufts */}
      <path
        d="M8 5 15.8 12.4Q24 9.8 32.2 12.4L40 5 37.8 18.6Q40.8 25 38.8 33 35.8 42.6 24 44.6 12.2 42.6 9.2 33 7.2 25 10.2 18.6Z"
        fill={`url(#${body})`}
      />
      {/* Heart-shaped facial disc */}
      <path
        d="M24 17.6Q18 12.4 12.2 15.4 9.8 21.4 13.4 26.4 18.4 29.6 24 28 29.6 29.6 34.6 26.4 38.2 21.4 35.8 15.4 30 12.4 24 17.6Z"
        fill="#60a5fa"
        fillOpacity="0.28"
      />
      {/* Folded wings */}
      <path
        d="M10.2 22Q8.4 33 15 42.6 19.2 40 19.8 34 18.2 27 10.2 22ZM37.8 22Q39.6 33 33 42.6 28.8 40 28.2 34 29.8 27 37.8 22Z"
        fill="#172554"
        fillOpacity="0.45"
        stroke="#93c5fd"
        strokeOpacity="0.4"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      {/* Wing feathers as circuit traces */}
      <path
        d="M11.8 27.6h3l1.8 1.8M12.4 32.8h3.4M14.2 37.6l2.4-1.6M36.2 27.6h-3l-1.8 1.8M35.6 32.8h-3.4M33.8 37.6l-2.4-1.6"
        stroke={`url(#${glow})`}
        strokeOpacity="0.85"
        strokeWidth="0.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#67e8f9">
        <circle cx="11.8" cy="27.6" r="0.85" />
        <circle cx="12.4" cy="32.8" r="0.85" />
        <circle cx="36.2" cy="27.6" r="0.85" />
        <circle cx="35.6" cy="32.8" r="0.85" />
      </g>

      {/* Brow */}
      <path
        d="M12.4 14.4Q18 15.2 24 19.2 30 15.2 35.6 14.4"
        stroke="#bfdbfe"
        strokeOpacity="0.6"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
      {/* Eyes */}
      <circle cx="18.2" cy="21.4" r="4.9" fill="#0a1328" stroke={`url(#${glow})`} strokeWidth="1.5" />
      <circle cx="29.8" cy="21.4" r="4.9" fill="#0a1328" stroke={`url(#${glow})`} strokeWidth="1.5" />
      <circle cx="18.2" cy="21.6" r="2.2" fill="#67e8f9" />
      <circle cx="29.8" cy="21.6" r="2.2" fill="#67e8f9" />
      <circle cx="19.1" cy="20.6" r="0.75" fill="#ffffff" />
      <circle cx="30.7" cy="20.6" r="0.75" fill="#ffffff" />
      {/* Beak */}
      <path d="M22.5 25.4h3L24 28.8Z" fill="#c4b5fd" />

      {/* Chest: DNA double helix (two twists) with base-pair rungs */}
      <g stroke={`url(#${glow})`} strokeWidth="1.2" strokeLinecap="round">
        <path d="M24 30.4Q31 33.4 24 36.4T24 42.4" />
        <path d="M24 30.4Q17 33.4 24 36.4T24 42.4" opacity="0.7" />
        <path d="M21.4 33.4h5.2M21.4 39.4h5.2" strokeWidth="0.95" opacity="0.75" />
      </g>
      <circle cx="24" cy="30.4" r="1" fill="#67e8f9" />
      <circle cx="24" cy="42.4" r="1" fill="#a78bfa" />

      {/* Talons */}
      <path
        d="M20.6 44.2v1.8M22.6 44.6v1.6M25.4 44.6v1.6M27.4 44.2v1.8"
        stroke="#a78bfa"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Owl + "aibilge" wordmark, used as the home link in header and footer. */
export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <span className="logo">
      <OwlMark size={size} />
      <span className="wordmark">
        <span className="wordmark-ai">ai</span>bilge
      </span>
    </span>
  );
}
