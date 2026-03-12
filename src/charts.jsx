import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ScatterChart, Scatter, ZAxis
} from 'recharts';

export const DonutChart = ({ data }) => (
  <div style={{ height: 200, width: '100%' }}>
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export const SentimentBar = ({ data }) => (
  <div style={{ height: 200, width: '100%' }}>
    <ResponsiveContainer>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" width={80} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const ClusterMap = ({ clusters }) => (
  <div className="grid-2">
    {clusters.map(cluster => (
      <div key={cluster.id} className="card" style={{ borderLeft: `4px solid ${cluster.color}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 600 }}>{cluster.label}</span>
          <span className="badge" style={{ backgroundColor: cluster.color, color: 'white' }}>{cluster.size}%</span>
        </div>
      </div>
    ))}
  </div>
);
