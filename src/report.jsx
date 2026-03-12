import React from 'react';
import { FileText, Download, Share2, CheckCircle } from 'lucide-react';

export const ReportPreview = ({ data }) => {
  if (!data.analysis) return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', opacity: 0.5, textAlign: 'center', padding: 24 }}>
      <FileText size={48} style={{ marginBottom: 16 }} />
      <p>Report will be generated as you complete the workflow.</p>
    </div>
  );

  return (
    <div className="fade-in">
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, marginBottom: 8 }}>UX Research Executive Summary</h1>
        <p style={{ color: 'var(--text-dim)' }}>Project: Internal Dashboard Audit</p>
      </div>

      <section style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 12 }}>Executive Summary</h3>
        <div className="card" style={{ background: '#F8FAFC' }}>
          <p>Based on the analysis of {data.rawText?.length || 0} characters of research data, we have identified several critical areas for improvement. The overall sentiment is primarily positive, but navigation remain a major friction point.</p>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 12 }}>Key Findings</h3>
        <ul style={{ paddingLeft: 16 }}>
          {data.analysis.topInsights.map((insight, i) => (
            <li key={i} style={{ marginBottom: 8 }}>{insight.text}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h3 style={{ fontSize: 14, textTransform: 'uppercase', color: 'var(--primary)', marginBottom: 12 }}>Major Opportunity</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--sage)' }}>
          <CheckCircle size={18} />
          <span style={{ fontWeight: 600 }}>Revamp Navigation (High Impact, Med Effort)</span>
        </div>
      </section>
    </div>
  );
};

export const ReportPanel = ({ data }) => {
  const handleExport = () => {
    alert("Exporting PDF...");
  };

  return (
    <div className="report-preview-panel">
      <div className="panel-header">
        <span style={{ fontWeight: 600 }}>Report Preview</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn btn-outline" style={{ padding: '6px 10px' }}><Share2 size={14} /></button>
          <button className="btn btn-primary" onClick={handleExport} style={{ padding: '6px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Download size={14} /> PDF
          </button>
        </div>
      </div>
      <div className="preview-content">
        <ReportPreview data={data} />
      </div>
    </div>
  );
};
