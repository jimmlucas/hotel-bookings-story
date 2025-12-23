'use client';

import AnimatedSection from '@/components/animated-section';
import { Sparkles, ArrowDown } from 'lucide-react';

export default function Insight2Section() {
  return (
    <section id="insight2" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-10 h-10 text-green-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              El Costo Invisible de la Cancelación
            </h2>
          </div>
          <p className="text-2xl text-center text-green-600 font-semibold mb-12">
            Cuando los detalles importan más que el precio
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              El análisis revela un patrón sorprendente: existe una diferencia abismal en el comportamiento
              de cancelación entre huéspedes que hacen peticiones especiales y los que no.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <div className="text-center mb-4">
                  <div className="text-6xl font-bold text-red-600 mb-2">46.2%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Tasa de Cancelación</div>
                </div>
                <div className="border-t-2 border-red-200 pt-4">
                  <p className="text-center font-semibold text-gray-700">
                    Reservas SIN peticiones especiales
                  </p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="text-center mb-4">
                  <div className="text-6xl font-bold text-green-600 mb-2">2.1%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Tasa de Cancelación</div>
                </div>
                <div className="border-t-2 border-green-200 pt-4">
                  <p className="text-center font-semibold text-gray-700">
                    Reservas CON peticiones especiales
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <ArrowDown className="w-12 h-12 text-green-600 mx-auto mb-4 animate-bounce" />
              <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-6 inline-block">
                <p className="text-3xl font-bold text-green-700">
                  95.5% de reducción
                </p>
                <p className="text-sm text-gray-600 mt-2">en la tasa de cancelación</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">¿Por qué funciona esto?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-lg mb-2">Compromiso Personal</h4>
                <p className="text-green-100 text-sm">
                  Hacer una petición especial crea una conexión emocional con la reserva
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">💭</div>
                <h4 className="font-bold text-lg mb-2">Inversión de Esfuerzo</h4>
                <p className="text-green-100 text-sm">
                  El tiempo invertido en personalizar la estancia aumenta el sentido de propiedad
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-bold text-lg mb-2">Expectativas Específicas</h4>
                <p className="text-green-100 text-sm">
                  Las necesidades particulares son más difíciles de satisfacer en otro lugar
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mt-12">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Estrategia Recomendada
            </h4>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Implementar un sistema proactivo que <span className="font-bold text-green-600">incentive y facilite</span> las
              peticiones especiales durante el proceso de reserva. Un simple formulario de preferencias
              podría transformar radicalmente las tasas de cancelación.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
