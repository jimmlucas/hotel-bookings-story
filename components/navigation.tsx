'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hotel, ChevronDown } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'intro', label: 'Introducción' },
  { id: 'insight1', label: 'Paradoja Portuguesa' },
  { id: 'insight2', label: 'Peticiones Especiales' },
  { id: 'insight3', label: 'Dos Hoteles' },
  { id: 'insight4', label: 'Estacionalidad' },
  { id: 'insight5', label: 'Huéspedes Repetidos' },
  { id: 'conclusion', label: 'Conclusiones' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 100);
    };

    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document?.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center gap-3">
          <Hotel className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-gray-700">Hotel Bookings Portugal</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronDown
              className={`w-4 h-4 text-gray-600 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-3 min-w-[250px]"
            >
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => scrollToSection(section?.id ?? '')}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
                >
                  {section?.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
