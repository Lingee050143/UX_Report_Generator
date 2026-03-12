import React, { useState } from 'react';
import { Upload, Wand2, Activity, PieChart as PieIcon, ListChecks } from 'lucide-react';
import { DonutChart, SentimentBar, ClusterMap } from './charts.jsx';

export const ResearchInput = ({ onAnalyze, loading }) => {
  const [text, setText] = useState('');

  return (
    <div className="card fade-in">
      <h2>Research Input</h2>
      <p style={{ color: 'var(--text-dim)', marginBottom: 20 }}>Paste your interview transcripts, survey results, or feedback logs here for AI analysis.</p>
      
      <textarea 
        placeholder="Enter research data here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
        <button 
          className="btn btn-primary" 
          disabled={!text || loading}
          onClick={() => onAnalyze(text)}
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          {loading ? 'Analyzing...' : <><Wand2 size={16} /> Run AI Analysis</>}
        </button>
      </div>
    </div>
  );
};

export const AnalysisView = ({ analysis }) => {
  if (!analysis) return null;

  return (
    <div className="step-container fade-in">
      <div className="grid-2">
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Activity size={18} color="var(--primary)" />
            <h3 style={{ fontSize: 16 }}>Sentiment Distribution</h3>
          </div>
          <DonutChart data={analysis.sentiment} />
        </div>
        
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <PieIcon size={18} color="var(--primary)" />
            <h3 style={{ fontSize: 16 }}>Key Pillars</h3>
          </div>
          <SentimentBar data={analysis.sentiment} />
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <ListChecks size={18} color="var(--primary)" />
          <h2 style={{ marginBottom: 0 }}>Top Insights</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {analysis.topInsights.map(insight => (
            <div key={insight.id} className="card" style={{ padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{insight.text}</span>
              <span className="badge badge-sage">{(insight.score * 100).toFixed(0)}% Relevance</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Insight Clusters</h2>
        <ClusterMap clusters={analysis.clusters} />
      </div>
    </div>
  );
};
