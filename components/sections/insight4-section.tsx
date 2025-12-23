'use client';

import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/animated-section';
import SeasonalityChart from '@/components/charts/seasonality-chart';
import { Sun, Snowflake } from 'lucide-react';

export default function Insight4Section() {
  const [monthlyData, setMonthlyData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/monthly_aggregated.csv')
      .then((res) => res?.text())
      .then((csv) => {
        const lines = csv?.split('\n')?.slice(1);
        const parsed = lines
          ?.filter((line) => line?.trim())
          ?.map((line) => {
            const [month, hotel, cancel_rate, avg_adr, avg_lead_time] = line?.split(',');
            return {
              month: month ?? '',
              hotel: hotel ?? '',
              cancel_rate: parseFloat(cancel_rate ?? '0') * 100,
              avg_adr: parseFloat(avg_adr ?? '0'),
            };
          }) ?? [];
        setMonthlyData(parsed);
      })
      .catch((err) => console.error('Error loading monthly data:', err));
  }, []);

  return (
    <section id="insight4" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-yellow-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sun className="w-10 h-10 text-yellow-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              El Ritmo de Portugal
            </h2>
            <Snowflake className="w-10 h-10 text-blue-400" />
          </div>
          <p className="text-2xl text-center text-yellow-600 font-semibold mb-12">
            La danza estacional del turismo
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              El turismo en Portugal sigue un patrón estacional muy marcado.
              Comprender este ritmo es clave para la planificación operativa y de precios.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white text-center shadow-lg">
                <div className="text-4xl mb-2">☀️</div>
                <div className="text-3xl font-bold mb-1">Agosto</div>
                <div className="text-5xl font-bold mb-2">13,703</div>
                <div className="text-sm opacity-90">Reservas - Pico máximo</div>
              </div>

              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-6 text-white text-center shadow-lg">
                <div className="text-4xl mb-2">🌿</div>
                <div className="text-3xl font-bold mb-1">Primavera</div>
                <div className="text-4xl font-bold mb-2">Estable</div>
                <div className="text-sm opacity-90">Abril-Mayo: 22,560 reservas</div>
              </div>

              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 text-white text-center shadow-lg">
                <div className="text-4xl mb-2">❄️</div>
                <div className="text-3xl font-bold mb-1">Enero</div>
                <div className="text-5xl font-bold mb-2">5,799</div>
                <div className="text-sm opacity-90">Reservas - Valle mínimo</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Evolución Mensual por Hotel
            </h3>
            <SeasonalityChart data={monthlyData} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-br from-yellow-600 to-orange-700 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">Implicaciones Estratégicas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-3">📊 Gestión de Capacidad</h4>
                <p className="text-yellow-50">
                  La diferencia entre temporada alta y baja es de <span className="font-bold">2.4x</span>.
                  Es crucial optimizar la ocupación en meses valle mediante promociones y eventos.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-3">💰 Revenue Management</h4>
                <p className="text-yellow-50">
                  Los precios pueden variar significativamente según la estación.
                  Resort Hotel puede cobrar hasta <span className="font-bold">€188 ADR</span> en agosto.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-3">👥 Personal Temporal</h4>
                <p className="text-yellow-50">
                  La estacionalidad requiere una estrategia flexible de contratación,
                  con hasta 3x más personal en verano que en invierno.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-3">🎯 Marketing Anticipado</h4>
                <p className="text-yellow-50">
                  El lead time promedio de 105 días significa que las campañas deben
                  lanzarse con 4 meses de anticipación para temporada alta.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
