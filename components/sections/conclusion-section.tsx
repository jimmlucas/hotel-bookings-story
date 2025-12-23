'use client';

import AnimatedSection from '@/components/animated-section';
import { Lightbulb, Target, Rocket } from 'lucide-react';

export default function ConclusionSection() {
  return (
    <section id="conclusion" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-blue-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              De los Datos a la Acción
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Cinco insights que pueden transformar la industria hotelera portuguesa
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-10 shadow-2xl mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Plan de Acción Recomendado
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    Atender la Paradoja Portuguesa
                  </h4>
                  <p className="text-gray-700">
                    Implementar políticas de cancelación diferenciadas para reservas domésticas,
                    incentivos para confirmación temprana, y comunicación proactiva.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    Promover Peticiones Especiales
                  </h4>
                  <p className="text-gray-700">
                    Crear formularios interactivos de preferencias durante la reserva,
                    destacar opciones de personalización, y hacer seguimiento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    Estrategias Diferenciadas por Hotel
                  </h4>
                  <p className="text-gray-700">
                    City Hotel debe enfocarse en reducir cancelaciones corporativas.
                    Resort Hotel puede optimizar precios en temporada alta.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-yellow-600">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    Gestión Estacional Inteligente
                  </h4>
                  <p className="text-gray-700">
                    Campañas anticipadas para temporada alta, promociones agresivas en meses valle,
                    y flexibilidad en precios y personal.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-600">5</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">
                    Programa de Lealtad Robusto
                  </h4>
                  <p className="text-gray-700">
                    Recompensas escalonadas, comunicación personalizada, y beneficios exclusivos
                    que reconozcan y premien la fidelidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Target className="w-12 h-12" />
              <h3 className="text-3xl font-bold">Impacto Potencial</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">-15%</div>
                <p className="text-blue-100">Reducción de cancelaciones globales</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">+€2M</div>
                <p className="text-blue-100">Incremento anual de ingresos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-5xl font-bold mb-2">+30%</div>
                <p className="text-blue-100">Mejora en satisfacción del cliente</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="text-center">
            <Rocket className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
            <h3 className="text-4xl font-bold text-white mb-4">
              El Futuro Está en los Datos
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Este análisis demuestra que detrás de cada número hay una oportunidad.
              La industria hotelera que abrace el data-driven decision making
              estará mejor preparada para prosperar en un mercado competitivo.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <p className="text-white text-lg">
                Análisis basado en <span className="font-bold text-yellow-400">117,391 reservas</span>
              </p>
              <p className="text-blue-200 text-sm mt-2">
                Datos: Hotel Bookings Dataset | Visualización: Storytelling Interactivo
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-20 text-center">
          <button
            onClick={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Volver al Inicio ↑
          </button>
        </div>
      </div>
    </section>
  );
}
