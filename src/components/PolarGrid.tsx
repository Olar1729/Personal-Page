/** Cuadrícula polar decorativa: círculos concéntricos y 8 rayos. */
export function PolarGrid({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 8 }, (_, i) => (i * Math.PI) / 4);
  return (
    <svg
      viewBox="-100 -100 200 200"
      aria-hidden
      focusable="false"
      className={`pointer-events-none text-line ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.4">
        {[30, 55, 80, 98].map((r) => (
          <circle key={r} r={r} />
        ))}
        {rays.map((a) => (
          <line
            key={a}
            x1={0}
            y1={0}
            x2={Number((98 * Math.cos(a)).toFixed(3))}
            y2={Number((98 * Math.sin(a)).toFixed(3))}
          />
        ))}
      </g>
      <g className="text-mint" fill="currentColor" fillOpacity="0.8">
        {rays.map((a) => (
          <circle
            key={a}
            r={1.6}
            cx={Number((98 * Math.cos(a)).toFixed(3))}
            cy={Number((98 * Math.sin(a)).toFixed(3))}
          />
        ))}
      </g>
    </svg>
  );
}
