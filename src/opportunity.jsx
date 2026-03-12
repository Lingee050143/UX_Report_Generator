import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, ZAxis } from 'recharts';

export const OpportunityMatrix = ({ data }) => {
  const renderCustomLabel = (props) => {
    const { x, y, width, height, value } = props;
    return (
      <text x={x} y={y - 10} fill="var(--text-main)" fontSize={11} fontWeight={600} textAnchor="middle">
        {value}
      </text>
    );
  };

  return (
    <div className="card" style={{ height: 400 }}>
      <h2 style={{ marginBottom: 0 }}>Impact vs Effort Matrix</h2>
      <caption style={{ display: 'block', marginBottom: 20 }}>Prioritize features based on perceived impact and development effort.</caption>
      
      <div style={{ height: 300, width: '100%', position: 'relative' }}>
        {/* Quadrant Labels */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', fontSize: 10, opacity: 0.5 }}>HIGH IMPACT</div>
        <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', fontSize: 10, opacity: 0.5 }}>LOW IMPACT</div>
        <div style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%) rotate(-90deg)', fontSize: 10, opacity: 0.5 }}>LOW EFFORT</div>
        <div style={{ position: 'absolute', top: '50%', right: -30, transform: 'translateY(-50%) rotate(90deg)', fontSize: 10, opacity: 0.5 }}>HIGH EFFORT</div>

        <ResponsiveContainer>
          <ScatterChart margin={{ top: 20, right: 40, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="effort" name="Effort" domain={[0, 10]} hide />
            <YAxis type="number" dataKey="impact" name="Impact" domain={[0, 10]} hide />
            <ZAxis type="number" range={[100, 100]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="Opportunities" data={data} fill="var(--primary)">
              <LabelList dataKey="name" content={renderCustomLabel} />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
