import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Shield, Cpu, Wifi, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,180,255,0.15),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          <span className="bg-clip-text text-transparent bg-[conic-gradient(at_20%_20%,#7dd3fc, #60a5fa, #06b6d4, #22d3ee, #3b82f6, #7dd3fc)] [text-shadow:_0_0_18px_rgba(56,189,248,0.55)]">
            The Next-Gen Digital Gateway
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-5 max-w-2xl mx-auto text-cyan-100/80 text-base sm:text-lg">
          Futuristic experiences engineered for speed, trust, and cinematic impact. Neon precision. Holographic clarity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex items-center gap-4">
          <a href="#lead-form" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-black font-medium">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 blur-md opacity-70 group-hover:opacity-100 transition" />
            <span className="relative z-10 rounded-full bg-white/95 px-6 py-3">Enter The Network</span>
          </a>
          <div className="hidden sm:flex items-center gap-2 text-cyan-200/80">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_6px_rgba(34,211,238,0.45)]" />
            <span className="text-sm">GPU-accelerated visuals</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full">
          <TechPill icon={Shield} label="Secure" />
          <TechPill icon={Cpu} label="Optimized" />
          <TechPill icon={Wifi} label="Always-On" />
          <TechPill icon={Zap} label="Ultra Fast" />
        </motion.div>
      </div>
    </section>
  );
}

function TechPill({ icon: Icon, label }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/[0.03] backdrop-blur-sm">
      <div className="absolute -inset-1 opacity-0 hover:opacity-100 transition pointer-events-none" style={{
        background: 'radial-gradient(80% 80% at 50% 0%, rgba(34,211,238,0.20), rgba(0,0,0,0))'
      }} />
      <div className="relative flex items-center gap-3 px-4 py-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 shadow-[0_0_24px_2px_rgba(34,211,238,0.25)]">
          <Icon className="h-4 w-4" />
        </span>
        <span className="text-cyan-50/90 text-sm">{label}</span>
      </div>
    </div>
  );
}
