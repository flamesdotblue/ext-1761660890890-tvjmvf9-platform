import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-cyan-400/10 bg-black/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-cyan-100/70">© {new Date().getFullYear()} Hyperlane Labs — Future-forward experiences.</p>
        <div className="flex items-center gap-2 text-[10px] text-cyan-100/60">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_16px_6px_rgba(16,185,129,0.5)]" />
          <span>Encrypted | Edge-Optimized | GPU-Accelerated</span>
        </div>
      </div>
    </footer>
  );
}
