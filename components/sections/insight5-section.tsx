'use client';

import AnimatedSection from '@/components/animated-section';
import { Heart, RefreshCw, TrendingUp } from 'lucide-react';

export default function Insight5Section() {
  return (
    <section id="insight5" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-50 to-purple-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-10 h-10 text-pink-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              El Poder de lo Personal
            </h2>
          </div>
          <p className="text-2xl text-center text-pink-600 font-semibold mb-12">
            Cuando la lealtad se traduce en estabilidad
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              En un mercado donde la cancelación es la norma, los huéspedes repetidos
              representan un oasis de estabilidad y previsibilidad.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 text-center">
                <div className="mb-4">
                  <RefreshCw className="w-16 h-16 mx-auto text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Primeros Visitantes</h3>
                <div className="text-6xl font-bold text-gray-700 mb-2">42%</div>
                <p className="text-gray-600">Tasa de cancelación</p>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-600">
                    Mayor incertidumbre y flexibilidad para cambiar planes
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl">
                <div className="mb-4">
                  <Heart className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Huéspedes Repetidos</h3>
                <div className="text-6xl font-bold mb-2">18%</div>
                <p className="text-pink-100">Tasa de cancelación</p>
                <div className="mt-6 pt-6 border-t border-pink-400">
                  <p className="text-sm text-pink-100">
                    <TrendingUp className="inline w-4 h-4 mr-1" />
                    <span className="font-bold">57% menos</span> propensos a cancelar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ¿Por qué los clientes repetidos son oro?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Menor Riesgo</h4>
                <p className="text-gray-700 text-sm">
                  Ya conocen el hotel y saben qué esperar, reduciendo la probabilidad de decepción
                </p>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💙</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Conexión Emocional</h4>
                <p className="text-gray-700 text-sm">
                  La familiaridad crea un vínculo que hace más difícil cambiar de opción
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💸</span>
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">Mayor Valor</h4>
                <p className="text-gray-700 text-sm">
                  Tienden a gastar más, hacer reservas más largas y recomendar el hotel
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Programa de Fidelización: Una Necesidad</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <p className="text-xl leading-relaxed mb-6">
                Los datos demuestran que invertir en retener clientes no es solo bueno para el servicio,
                es una estrategia financiera inteligente:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Implementar beneficios escalonados basados en frecuencia de visitas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Comunicación personalizada recordando preferencias anteriores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Descuentos especiales para reservas repetidas dentro de 6 meses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Sorpresas y detalles que reconozcan su lealtad</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
