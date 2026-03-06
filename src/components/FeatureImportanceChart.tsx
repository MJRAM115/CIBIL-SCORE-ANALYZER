import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface FeatureImportanceChartProps {
  data: {
    feature: string;
    impact: number;
  }[];
}

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({ data }) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide />
          <YAxis 
            dataKey="feature" 
            type="category" 
            width={120} 
            tick={{ fontSize: 12, fill: '#64748b' }}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const impact = payload[0].value as number;
                return (
                  <div className="bg-white p-2 border border-slate-200 shadow-lg rounded-md text-xs">
                    <p className="font-bold">{payload[0].payload.feature}</p>
                    <p className={`${impact >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      Impact: {impact > 0 ? '+' : ''}{impact.toFixed(1)} points
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="impact" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.impact >= 0 ? '#14b8a6' : '#f43f5e'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeatureImportanceChart;
