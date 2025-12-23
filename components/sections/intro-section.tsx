'use client';

import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/animated-section';
import AnimatedCounter from '@/components/animated-counter';
import { MapPin, Calendar, Users, TrendingUp } from 'lucide-react';

export default function IntroSection() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/data/insights_hotel_bookings.json')
      .then((res) => res?.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error loading data:', err));
  }, []);

  if (!data) {
    return (
      <section id="intro" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando datos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            El Panorama de la Industria Hotelera en <span className="text-primary">Portugal</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Portugal se ha consolidado como uno de los destinos turísticos más populares de Europa.
            Pero detrás de cada reserva existe una historia que contar.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter end={data?.resumen_general?.total_reservas ?? 0} decimals={0} />
              </div>
              <div className="text-sm text-gray-600">Reservas Totales</div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-red-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter
                  end={data?.resumen_general?.tasa_cancelacion ?? 0}
                  decimals={1}
                  suffix="%"
                />
              </div>
              <div className="text-sm text-gray-600">Tasa de Cancelación</div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                €<AnimatedCounter
                  end={data?.resumen_general?.adr_promedio ?? 0}
                  decimals={0}
                />
              </div>
              <div className="text-sm text-gray-600">Tarifa Promedio (ADR)</div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-yellow-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <AnimatedCounter
                  end={data?.resumen_general?.lead_time_promedio ?? 0}
                  decimals={0}
                />
              </div>
              <div className="text-sm text-gray-600">Días de Antelación</div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              ¿Pero qué revelan realmente estos números?
            </h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Prepárate para descubrir cinco insights que desafiarán tus suposiciones
              sobre la industria hotelera y revelarán oportunidades ocultas.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
