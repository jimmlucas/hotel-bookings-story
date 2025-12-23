'use client';

import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/animated-section';
import CountryChart from '@/components/charts/country-chart';
import { AlertTriangle, TrendingDown } from 'lucide-react';

export default function Insight1Section() {
  const [countryData, setCountryData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/country_aggregated.csv')
      .then((res) => res?.text())
      .then((csv) => {
        const lines = csv?.split('\n')?.slice(1);
        const parsed = lines
          ?.filter((line) => line?.trim())
          ?.map((line) => {
            const [country, cancel_rate, avg_adr, avg_lead_time, avg_nights, total_bookings] = line?.split(',');
            return {
              country: country ?? '',
              cancel_rate: parseFloat(cancel_rate ?? '0') * 100,
              total_bookings: parseInt(total_bookings ?? '0'),
            };
          })
          ?.filter((item) => item?.total_bookings > 1000)
          ?.sort((a, b) => (b?.total_bookings ?? 0) - (a?.total_bookings ?? 0))
          ?.slice(0, 10) ?? [];
        setCountryData(parsed);
      })
      .catch((err) => console.error('Error loading country data:', err));
  }, []);

  return (
    <section id="insight1" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-red-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
              La Paradoja Portuguesa
            </h2>
          </div>
          <p className="text-2xl text-center text-red-600 font-semibold mb-12">
            El mercado más grande, pero también el más problemático
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Portugal representa el <span className="font-bold text-primary">40.1%</span> de todas las reservas,
              convirtiéndolo en el mercado doméstico más importante para ambos hoteles.
              Uno esperaría que los clientes locales fueran los más confiables...
            </p>
            <div className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 rounded-r-xl">
              <p className="text-xl font-bold text-red-700 mb-2">
                <TrendingDown className="inline w-6 h-6 mr-2" />
                Pero la realidad es inquietante:
              </p>
              <p className="text-lg text-gray-700">
                Portugal tiene la <span className="font-bold text-red-600">tasa de cancelación más alta</span> de
                todos los mercados principales: <span className="text-3xl font-bold text-red-600">58.1%</span>
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Comparativa Internacional de Cancelaciones
            </h3>
            <CountryChart data={countryData} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-4">El Problema</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>Más de la mitad de las reservas portuguesas se cancelan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>Pérdida de ingresos potenciales masiva</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>Planificación operativa comprometida</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-2xl font-bold mb-4">La Oportunidad</h4>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>Mercados como UK y Francia tienen tasas &lt;21%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>Reducir la cancelación portuguesa al 40% = +8,500 reservas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">•</span>
                  <span>Impacto potencial: +€880K en ingresos</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
