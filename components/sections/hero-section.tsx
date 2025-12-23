'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Hotel } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document?.getElementById('intro');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Hotel className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Los Secretos de las
            <span className="block text-yellow-400 mt-2">Reservas Hoteleras</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Un viaje interactivo a través de 117,391 reservas que revelan las paradojas,
            patrones y oportunidades ocultas en la industria hotelera portuguesa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="text-3xl font-bold text-yellow-400">117K+</div>
            <div className="text-sm text-blue-200">Reservas Analizadas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="text-3xl font-bold text-yellow-400">2</div>
            <div className="text-sm text-blue-200">Hoteles Únicos</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="text-3xl font-bold text-yellow-400">5</div>
            <div className="text-sm text-blue-200">Insights Reveladores</div>
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={scrollToNext}
          className="animate-bounce"
        >
          <ChevronDown className="w-12 h-12 text-yellow-400" />
        </motion.button>
      </div>
    </section>
  );
}
