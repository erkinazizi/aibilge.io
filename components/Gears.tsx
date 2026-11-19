const GEAR_PATH =
  "M42 8h12l2 9a30 30 0 0 1 8 3l8-5 8 8-5 8a30 30 0 0 1 3 8l9 2v12l-9 2a30 30 0 0 1-3 8l5 8-8 8-8-5a30 30 0 0 1-8 3l-2 9H42l-2-9a30 30 0 0 1-8-3l-8 5-8-8 5-8a30 30 0 0 1-3-8l-9-2V42l9-2a30 30 0 0 1 3-8l-5-8 8-8 8 5a30 30 0 0 1 8-3z M48 34a14 14 0 1 0 0.01 0z";

export default function Gears() {
  return (
    <svg viewBox="0 0 100 100">
      <defs>
        <linearGradient id="gear-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <g className="gear big">
        <path
          fill="url(#gear-grad)"
          fillRule="evenodd"
          d={GEAR_PATH}
          transform="translate(-8 -8) scale(0.85)"
        />
      </g>
      <g className="gear small">
        <path
          fill="var(--accent-2)"
          opacity={0.85}
          fillRule="evenodd"
          d={GEAR_PATH}
          transform="translate(58 58) scale(0.42)"
        />
      </g>
    </svg>
  );
}
