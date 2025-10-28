import React, { useMemo } from 'react';

export default function BackgroundParticles() {
  const dots = useMemo(() => Array.from({ length: 32 }, (_, i) => i), []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">{/* sits under sections but above page bg */}
      <div className="absolute inset-0 opacity-60">
        {dots.map((i) => (
          <span
            key={i}
            className="absolute block h-[2px] w-[2px] rounded-full bg-cyan-300/70 shadow-[0_0_12px_2px_rgba(56,189,248,0.5)]"
            style={randomStyle(i)}
          />
        ))}
      </div>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(120% 120% at 50% 120%, rgba(2,132,199,0.15), transparent)' }} />
      <style>{`
        @keyframes floatXY {
          0% { transform: translate3d(var(--tx), var(--ty), 0) scale(1); opacity: .7; }
          50% { transform: translate3d(calc(var(--tx) * -1), calc(var(--ty) * -1), 0) scale(1.06); opacity: 1; }
          100% { transform: translate3d(var(--tx), var(--ty), 0) scale(1); opacity: .7; }
        }
      `}</style>
    </div>
  );
}

function randomStyle(seed) {
  const rng = mulberry32(seed + 1337);
  const top = Math.floor(rng() * 100);
  const left = Math.floor(rng() * 100);
  const tx = (rng() * 40 - 20).toFixed(2) + 'px';
  const ty = (rng() * 40 - 20).toFixed(2) + 'px';
  const dur = (rng() * 14 + 10).toFixed(2) + 's';
  const delay = (rng() * 6).toFixed(2) + 's';
  return {
    top: `${top}%`,
    left: `${left}%`,
    animation: `floatXY ${dur} ease-in-out ${delay} infinite`,
    '--tx': tx,
    '--ty': ty,
  };
}

function mulberry32(a) {
  return function() {
    let t = (a += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
