'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface HotelComparisonChartProps {
  data: any;
}

export default function HotelComparisonChart({ data }: HotelComparisonChartProps) {
  if (!data) {
    return (
      <div className="h-[400px] flex items-center justify-center text-gray-500">
        <p>Cargando datos del gráfico...</p>
      </div>
    );
  }

  const chartData = [
    {
      metric: 'Tasa Cancelación',
      'City Hotel': data?.['City Hotel']?.tasa_cancelacion ?? 0,
      'Resort Hotel': data?.['Resort Hotel']?.tasa_cancelacion ?? 0,
    },
    {
      metric: 'ADR (€)',
      'City Hotel': data?.['City Hotel']?.adr_promedio ?? 0,
      'Resort Hotel': data?.['Resort Hotel']?.adr_promedio ?? 0,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey="metric"
          tick={{ fontSize: 10 }}
          tickLine={false}
          label={{
            value: 'Métrica',
            position: 'insideBottom',
            offset: -10,
            style: { textAnchor: 'middle', fontSize: 11 },
          }}
        />
        <YAxis
          tick={{ fontSize: 10 }}
          tickLine={false}
          label={{
            value: 'Valor',
            angle: -90,
            position: 'insideLeft',
            style: { textAnchor: 'middle', fontSize: 11 },
          }}
        />
        <Tooltip
          contentStyle={{ fontSize: 11 }}
          formatter={(value: any, name: any, props: any) => {
            const isPercentage = props?.payload?.metric?.includes('Cancelación');
            return [
              isPercentage ? `${value?.toFixed(1)}%` : `€${value?.toFixed(0)}`,
              name,
            ];
          }}
        />
        <Legend
          verticalAlign="top"
          wrapperStyle={{ fontSize: 11 }}
        />
        <Bar dataKey="City Hotel" fill="#3b82f6" radius={[8, 8, 0, 0]} />
        <Bar dataKey="Resort Hotel" fill="#10b981" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
