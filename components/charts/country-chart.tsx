'use client';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface CountryChartProps {
  data: any[];
}

export default function CountryChart({ data }: CountryChartProps) {
  if (!data || data?.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center text-gray-500">
        <p>Cargando datos del gráfico...</p>
      </div>
    );
  }

  const getBarColor = (value: number) => {
    if (value > 50) return '#dc2626'; // red
    if (value > 30) return '#f59e0b'; // orange
    return '#10b981'; // green
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 40 }}
      >
        <XAxis
          dataKey="country"
          tick={{ fontSize: 10 }}
          tickLine={false}
          angle={-45}
          textAnchor="end"
          height={60}
          label={{
            value: 'País',
            position: 'insideBottom',
            offset: -15,
            style: { textAnchor: 'middle', fontSize: 11 },
          }}
        />
        <YAxis
          tick={{ fontSize: 10 }}
          tickLine={false}
          label={{
            value: 'Tasa de Cancelación (%)',
            angle: -90,
            position: 'insideLeft',
            style: { textAnchor: 'middle', fontSize: 11 },
          }}
        />
        <Tooltip
          contentStyle={{ fontSize: 11 }}
          formatter={(value: any) => [`${value?.toFixed(1)}%`, 'Cancelación']}
          labelFormatter={(label) => `País: ${label}`}
        />
        <Bar dataKey="cancel_rate" radius={[8, 8, 0, 0]}>
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarColor(entry?.cancel_rate ?? 0)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
