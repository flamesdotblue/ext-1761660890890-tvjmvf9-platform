import React from 'react';
import Hero from './components/Hero';
import InteractiveForm from './components/InteractiveForm';
import BackgroundParticles from './components/BackgroundParticles';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white">
      <BackgroundParticles />
      <Hero />
      <InteractiveForm />
      <Footer />
    </div>
  );
}
