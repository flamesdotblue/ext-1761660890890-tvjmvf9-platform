import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    age: '',
    city: '',
    state: '',
    job: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    alert('Submitted!');
  };

  const ripple = (e) => {
    const btn = buttonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const circle = document.createElement('span');
    circle.className = 'ripple-glow';
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 650);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  return (
    <section id="lead-form" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.10),transparent)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-white/10 to-white/[0.04] p-8 md:p-10 shadow-[0_0_80px_-20px_rgba(56,189,248,0.45)]">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(120% 120% at 10% 0%, rgba(56,189,248,0.20), rgba(0,0,0,0))' }} />
          <motion.h2 className="text-2xl md:text-3xl font-bold text-white/95">
            Join the Network
          </motion.h2>
          <p className="text-cyan-100/80 mt-2 text-sm md:text-base">Access exclusive drops and premium updates. Lightning-fast. Zero noise.</p>
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <FormField variants={item} label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Alex Voyager" />
            <FormField variants={item} label="Phone Number" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 555 000 1234" inputMode="tel" />
            <FormField variants={item} label="Age" name="age" value={form.age} onChange={handleChange} placeholder="27" inputMode="numeric" />
            <FormField variants={item} label="City" name="city" value={form.city} onChange={handleChange} placeholder="Los Angeles" />
            <FormField variants={item} label="State" name="state" value={form.state} onChange={handleChange} placeholder="CA" />
            <FormField variants={item} label="Job Type" name="job" value={form.job} onChange={handleChange} placeholder="Creator / Engineer / Analyst" />

            <motion.div variants={item} className="sm:col-span-2 mt-2">
              <button
                ref={buttonRef}
                onClick={ripple}
                type="submit"
                disabled={submitting}
                className={`relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 py-4 font-semibold text-black shadow-[0_0_24px_4px_rgba(56,189,248,0.35)] transition focus:outline-none focus:ring-2 focus:ring-cyan-400/60 active:scale-[.995] ${submitting ? 'opacity-80 cursor-not-allowed' : 'hover:brightness-110'}`}
              >
                <span className="relative z-10">
                  {submitting ? 'Transmitting...' : 'Submit & Connect'}
                </span>
              </button>
            </motion.div>
          </motion.form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 md:p-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_120%_at_90%_0%,rgba(2,132,199,0.25),transparent)]" />
          <motion.h3 className="text-xl md:text-2xl font-bold">Cinematic • Trust • Precision</motion.h3>
          <ul className="mt-6 space-y-4 text-cyan-100/85">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_6px_rgba(34,211,238,0.5)]" />
              GPU-level animations and holographic depth effects optimized for mobile.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_6px_rgba(34,211,238,0.5)]" />
              Responsive layout tuned for Snapchat ad traffic and rapid loads.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_6px_rgba(34,211,238,0.5)]" />
              Minimal but powerful visuals: glowing lines, particles, and subtle parallax.
            </li>
          </ul>
        </motion.div>
      </div>

      <style>{`
        .ripple-glow {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          pointer-events: none;
          background: radial-gradient(circle at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 70%);
          transform: translate(-50%, -50%);
          animation: ripple 650ms ease-out forwards;
          filter: drop-shadow(0 0 16px rgba(56,189,248,0.65));
        }
        @keyframes ripple {
          from { opacity: 0.9; transform: translate(-50%, -50%) scale(0.4); }
          to { opacity: 0; transform: translate(-50%, -50%) scale(8); }
        }
      `}</style>
    </section>
  );
}

function FormField({ label, name, value, onChange, placeholder, inputMode, variants }) {
  return (
    <motion.label variants={variants} className="group relative block">
      <span className="mb-2 block text-sm text-cyan-100/80">{label}</span>
      <div className="relative">
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          inputMode={inputMode}
          className="w-full rounded-xl bg-black/60 border border-cyan-400/20 px-4 py-3 text-white placeholder:text-cyan-100/40 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.15)] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition duration-200 hover:shadow-[0_0_24px_2px_rgba(34,211,238,0.25)]"
        />
        <div className="pointer-events-none absolute inset-px rounded-[11px] opacity-0 group-hover:opacity-100 transition" style={{
          background: 'linear-gradient(180deg, rgba(56,189,248,0.18), rgba(56,189,248,0.02))',
          filter: 'blur(6px)'
        }} />
      </div>
    </motion.label>
  );
}
