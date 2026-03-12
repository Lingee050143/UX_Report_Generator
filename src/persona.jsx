import React from 'react';
import { User, Target, Zap, AlertCircle } from 'lucide-react';

export const PersonaCard = ({ persona }) => (
  <div className="card fade-in">
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
      <div style={{ padding: 10, background: '#EEF2F6', borderRadius: '50%' }}>
        <User size={24} color="var(--primary)" />
      </div>
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 700 }}>{persona.name}</h3>
        <p style={{ color: 'var(--text-dim)', fontSize: 12 }}>{persona.role}</p>
      </div>
    </div>
    
    <div style={{ fontStyle: 'italic', color: 'var(--primary)', marginBottom: 20 }}>
      "{persona.quote}"
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <Target size={14} color="var(--sage)" />
          <span style={{ fontWeight: 600, fontSize: 11, textTransform: 'uppercase' }}>Goals</span>
        </div>
        <ul style={{ paddingLeft: 16, fontSize: 12 }}>
          {persona.goals.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <AlertCircle size={14} color="var(--clay)" />
          <span style={{ fontWeight: 600, fontSize: 11, textTransform: 'uppercase' }}>Frustrations</span>
        </div>
        <ul style={{ paddingLeft: 16, fontSize: 12 }}>
          {persona.frustrations.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

export const PersonaGrid = ({ personas }) => (
  <div className="grid-2">
    {personas.map(p => <PersonaCard key={p.id} persona={p} />)}
  </div>
);
