// One icon family: 24px grid, 1.5 stroke, round caps. Decorative by default.
import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
};

export const LogoMark = () => (
  <svg {...base} viewBox="0 0 32 32" width={28} height={28}>
    <path d="M9 4c0 6 14 6 14 12S9 22 9 28" strokeWidth={2.2} />
    <path d="M23 4c0 6-14 6-14 12s14 6 14 12" strokeWidth={2.2} opacity={0.55} />
    <path d="M11 8.5h10M11 23.5h10M13 16h6" strokeWidth={1.8} />
  </svg>
);

export const IconRead = () => (
  <svg {...base}>
    <path d="M4 7V5a1 1 0 0 1 1-1h2M17 4h2a1 1 0 0 1 1 1v2M20 17v2a1 1 0 0 1-1 1h-2M7 20H5a1 1 0 0 1-1-1v-2" />
    <path d="M7 12h10" />
    <path d="M8 9h2M12 9h4M8 15h5M15 15h1" />
  </svg>
);

export const IconLearn = () => (
  <svg {...base}>
    <circle cx="5" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="19" cy="6" r="2" />
    <circle cx="19" cy="18" r="2" />
    <path d="M6.6 7.2 10.3 10.6M6.6 16.8l3.7-3.4M13.7 10.6l3.7-3.4M13.7 13.4l3.7 3.4" />
  </svg>
);

export const IconPredict = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);

export const IconVariant = () => (
  <svg {...base}>
    <path d="M4 6h6M14 6h6M4 18h6M14 18h6" />
    <path d="M12 3v6M12 15v6" opacity={0.5} />
    <path d="m9 12 3-3 3 3-3 3z" />
  </svg>
);

export const IconSwitch = () => (
  <svg {...base}>
    <rect x="3" y="8" width="18" height="8" rx="4" />
    <circle cx="16" cy="12" r="2" fill="currentColor" />
    <path d="M7 12h3" />
  </svg>
);

export const IconFlask = () => (
  <svg {...base}>
    <path d="M9 3h6M10 3v6l-5.2 9.1A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.9L14 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);

export const IconTarget = () => (
  <svg {...base}>
    <path d="M12 21s-7-4.4-7-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 16.6 12 21 12 21z" />
    <path d="M8.5 12.5h2l1-2 2 4 1-2h1" />
  </svg>
);

export const IconArrow = () => (
  <svg {...base} width={18} height={18}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = () => (
  <svg {...base} width={20} height={20} strokeWidth={2}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);
