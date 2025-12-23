'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SeasonalityChartProps {
  data: any[];
}

const monthOrder = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const monthMap: { [key: string]: string } = {
  January: 'Ene',
  February: 'Feb',
  March: 'Mar',
  April: 'Abr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Ago',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dic',
};

export default function SeasonalityChart({ data }: SeasonalityChartProps) {
  if (!data || data?.length === 0) {
    return (
      <div className="h-[400px] flex items-center justify-center text-gray-500">
        <p>Cargando datos del gráfico...</p>
      </div>
    );
  }

  // Aggregate by month
  const monthlyAgg: { [key: string]: any } = {};
  
  data?.forEach((row) => {
    const month = row?.month ?? '';
    if (!monthlyAgg[month]) {
      monthlyAgg[month] = {
        month: monthMap[month] ?? month,
        'City Hotel': 0,
        'Resort Hotel': 0,
      };
    }
    if (row?.hotel === 'City Hotel') {
      monthlyAgg[month]['City Hotel'] = row?.avg_adr ?? 0;
    } else if (row?.hotel === 'Resort Hotel') {
      monthlyAgg[month]['Resort Hotel'] = row?.avg_adr ?? 0;
    }
  });

  const chartData = monthOrder
    ?.map((m) => monthlyAgg[m])
    ?.filter((d) => d !== undefined) ?? [];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <XAxis
          dataKey="month"
          tick={{ fontSize: 10 }}
          tickLine={false}
          interval="preserveStartEnd"
          label={{
            value: 'Mes',
            position: 'insideBottom',
            offset: -10,
            style: { textAnchor: 'middle', fontSize: 11 },
          }}
        />
        <YAxis
          tick={{ fontSize: 10 }}
          tickLine={false}
          label={{
            value: 'ADR Promedio (€)',
            angle: -90,
            position: 'insideLeft',
            style: { textAnchor: 'middle', fontSize: 11 },
          }}
        />
        <Tooltip
          contentStyle={{ fontSize: 11 }}
          formatter={(value: any) => `€${value?.toFixed(0)}`}
        />
        <Legend
          verticalAlign="top"
          wrapperStyle={{ fontSize: 11 }}
        />
        <Line
          type="monotone"
          dataKey="City Hotel"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="Resort Hotel"
          stroke="#10b981"
          strokeWidth={3}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
