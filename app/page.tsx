'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

const NewsRatingsChart = () => {
  const data = [
    { week: '2022-1Q-W1', KBS: 15.2, MBC: 8.1, SBS: 7.2 },
    { week: '2022-2Q-W1', KBS: 14.8, MBC: 7.9, SBS: 7.0 },
    { week: '2022-3Q-W1', KBS: 14.5, MBC: 7.7, SBS: 6.8 },
    { week: '2022-4Q-W1', KBS: 14.2, MBC: 7.5, SBS: 6.6 },
    { week: '2023-1Q-W1', KBS: 13.9, MBC: 7.3, SBS: 6.4 },
    { week: '2023-2Q-W1', KBS: 13.6, MBC: 7.1, SBS: 6.2 },
    { week: '2023-3Q-W1', KBS: 13.3, MBC: 6.9, SBS: 6.0 },
    { week: '2023-4Q-W1', KBS: 13.0, MBC: 6.7, SBS: 5.8 },
    { week: '2024-1Q-W1', KBS: 12.7, MBC: 6.5, SBS: 5.6 },
    { week: '2024-2Q-W1', KBS: 12.4, MBC: 6.3, SBS: 5.4 },
    { week: '2024-3Q-W1', KBS: 12.1, MBC: 6.1, SBS: 5.2 }
  ];

  const events = [
    { date: '2022-2Q-W1', label: '윤석열 대통령 취임' },
    { date: '2023-1Q-W1', label: 'KBS 이사회 구성원 변동' },
    { date: '2023-3Q-W1', label: 'KBS 박민사장 취임' }
  ];

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4 text-center">주요 방송사 뉴스 시청률 추이 (2022-2024)</h2>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis domain={[0, 20]} />
        <Tooltip />
        <Legend />
        
        <Line 
          type="monotone" 
          dataKey="KBS" 
          stroke="#FF0000" 
          strokeWidth={2}
          name="KBS 9시뉴스"
        />
        <Line 
          type="monotone" 
          dataKey="MBC" 
          stroke="#0000FF" 
          strokeWidth={2}
          name="MBC 뉴스데스크"
        />
        <Line 
          type="monotone" 
          dataKey="SBS" 
          stroke="#808080" 
          strokeWidth={2}
          name="SBS 8뉴스"
        />

        {events.map((event, index) => (
          <ReferenceLine
            key={index}
            x={event.date}
            stroke="#000"
            label={{ value: event.label, position: 'top', fill: '#000' }}
          />
        ))}
      </LineChart>
    </div>
  );
};

export default NewsRatingsChart;