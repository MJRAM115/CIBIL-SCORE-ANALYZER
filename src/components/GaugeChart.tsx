import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface GaugeChartProps {
  currentScore: number;
  predictedScore: number;
}

const GaugeChart: React.FC<GaugeChartProps> = ({ currentScore, predictedScore }) => {
  // CIBIL range: 300 - 900
  const min = 300;
  const max = 900;
  const total = max - min;

  const currentVal = Math.max(0, currentScore - min);
  const predictedVal = Math.max(0, predictedScore - min);

  const data = [
    { name: 'Current', value: currentVal, color: '#1e3a8a' }, // Deep Blue
    { name: 'Predicted', value: Math.max(0, predictedVal - currentVal), color: '#14b8a6' }, // Teal
    { name: 'Remaining', value: Math.max(0, total - Math.max(currentVal, predictedVal)), color: '#e5e7eb' }, // Gray
  ];

  return (
    <div className="relative w-full h-64 flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="80%"
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
      <div className="absolute bottom-4 text-center">
        <div className="text-4xl font-bold text-slate-800">{predictedScore}</div>
        <div className="text-sm text-slate-500 font-medium">Predicted Score</div>
        <div className="mt-2 text-xs font-semibold text-blue-700 flex items-center justify-center gap-1">
          Current: {currentScore}
          <span className={`ml-1 ${predictedScore >= currentScore ? 'text-green-600' : 'text-red-600'}`}>
            ({predictedScore >= currentScore ? '↑' : '↓'} {Math.abs(predictedScore - currentScore)})
          </span>
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
