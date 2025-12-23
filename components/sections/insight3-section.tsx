'use client';

import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/animated-section';
import HotelComparisonChart from '@/components/charts/hotel-comparison-chart';
import { Building2, Palmtree } from 'lucide-react';

export default function Insight3Section() {
  const [hotelData, setHotelData] = useState<any>(null);

  useEffect(() => {
    fetch('/data/insights_hotel_bookings.json')
      .then((res) => res?.json())
      .then((json) => setHotelData(json?.por_hotel))
      .catch((err) => console.error('Error loading hotel data:', err));
  }, []);

  if (!hotelData) {
    return (
      <section id="insight3" className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="insight3" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            Dos Hoteles, Dos Mundos
          </h2>
          <p className="text-2xl text-center text-blue-600 font-semibold mb-12">
            City vs Resort: Una brecha que define el negocio
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10" />
                <h3 className="text-2xl font-bold">City Hotel (Lisboa)</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm opacity-90 mb-1">Reservas Totales</div>
                  <div className="text-4xl font-bold">
                    {hotelData?.['City Hotel']?.reservas?.toLocaleString() ?? '0'}
                  </div>
                  <div className="text-sm opacity-75 mt-1">66.5% del total</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Tasa de Cancelación</div>
                  <div className="text-5xl font-bold text-red-300">
                    {hotelData?.['City Hotel']?.tasa_cancelacion?.toFixed(1) ?? '0'}%
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">ADR Promedio</div>
                  <div className="text-3xl font-bold">
                    €{hotelData?.['City Hotel']?.adr_promedio?.toFixed(0) ?? '0'}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Palmtree className="w-10 h-10" />
                <h3 className="text-2xl font-bold">Resort Hotel (Algarve)</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-sm opacity-90 mb-1">Reservas Totales</div>
                  <div className="text-4xl font-bold">
                    {hotelData?.['Resort Hotel']?.reservas?.toLocaleString() ?? '0'}
                  </div>
                  <div className="text-sm opacity-75 mt-1">33.5% del total</div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">Tasa de Cancelación</div>
                  <div className="text-5xl font-bold text-green-300">
                    {hotelData?.['Resort Hotel']?.tasa_cancelacion?.toFixed(1) ?? '0'}%
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">ADR Promedio</div>
                  <div className="text-3xl font-bold">
                    €{hotelData?.['Resort Hotel']?.adr_promedio?.toFixed(0) ?? '0'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Comparativa de Rendimiento
            </h3>
            <HotelComparisonChart data={hotelData} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ¿Qué nos dice esta diferencia?
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🏙️</div>
                <h5 className="font-bold text-lg mb-2 text-gray-900">Turismo Urbano</h5>
                <p className="text-gray-700 text-sm">
                  Las reservas urbanas son más flexibles y sujetas a cambios de planes de último momento
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-3xl mb-3">🏖️</div>
                <h5 className="font-bold text-lg mb-2 text-gray-900">Vacaciones Planificadas</h5>
                <p className="text-gray-700 text-sm">
                  Los resorts atraen huéspedes con vacaciones más comprometidas y difíciles de reprogramar
                </p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="text-3xl mb-3">💼</div>
                <h5 className="font-bold text-lg mb-2 text-gray-900">Negocio vs Placer</h5>
                <p className="text-gray-700 text-sm">
                  City Hotel tiene más reservas corporativas, que son más propensas a cambios
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
