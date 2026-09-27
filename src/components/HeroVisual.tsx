export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(198,163,106,0.16),transparent_68%)]" />
      <div className="relative overflow-hidden rounded-3xl border border-line bg-card/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-brass/80" />
        </div>
        <svg viewBox="0 0 320 180" className="h-auto w-full">
          <g fill="none" stroke="rgba(236,232,225,0.18)" strokeWidth="1">
            <path d="M40 120 C90 40, 140 40, 160 90 S230 160, 280 50" />
            <path d="M30 70 H290" />
            <path d="M70 20 V160" />
          </g>
          {[
            [70, 70],
            [160, 90],
            [230, 58],
            [280, 50],
          ].map(([x, y], index) => (
            <g key={`${x}-${y}`}>
              <circle cx={x} cy={y} r={index === 1 ? 7 : 4} fill={index === 1 ? "#c6a36a" : "#ece8e1"} />
              {index === 1 ? (
                <circle cx={x} cy={y} r="16" fill="none" stroke="#c6a36a" strokeOpacity="0.45" className="pulse-ring" />
              ) : null}
            </g>
          ))}
        </svg>
        <div className="mt-2 space-y-2 font-mono text-[11px] leading-5 text-muted">
          <p><span className="text-brass">const</span> solution = build(problem)</p>
          <p><span className="text-brass">await</span> learn(ai, software)</p>
          <p className="text-white/35">// Kigali → useful technology</p>
        </div>
      </div>
    </div>
  );
}
