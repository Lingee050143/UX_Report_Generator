import React, { useState } from 'react';
import { Sidebar, AppLayout } from './layout.jsx';
import { ResearchInput, AnalysisView } from './research.jsx';
import { PersonaGrid } from './persona.jsx';
import { OpportunityMatrix } from './opportunity.jsx';
import { ReportPreview, ReportPanel } from './report.jsx';
import { analyzeResearch, generatePersonas, calculateOpportunityMap } from './utils.js';
import { ClusterMap } from './charts.jsx';

// Main App Component
export default function App() {
  const [activeStep, setActiveStep] = useState('research');
  const [data, setData] = useState({
    rawText: '',
    analysis: null,
    personas: [],
    opportunities: [],
    loading: false
  });

  const handleAnalyze = async (text) => {
    setData(prev => ({ ...prev, loading: true, rawText: text }));
    try {
      const analysis = await analyzeResearch(text);
      const personas = generatePersonas(analysis);
      const opportunities = calculateOpportunityMap();
      
      setData({
        rawText: text,
        analysis,
        personas,
        opportunities,
        loading: false
      });
      setActiveStep('analysis');
    } catch (error) {
      console.error("Analysis failed", error);
      setData(prev => ({ ...prev, loading: false }));
    }
  };

  const renderWorkspace = () => {
    switch(activeStep) {
      case 'research':
        return <ResearchInput onAnalyze={handleAnalyze} loading={data.loading} />;
      
      case 'analysis':
        return data.analysis ? <AnalysisView analysis={data.analysis} /> : <div>Please run analysis first.</div>;
      
      case 'insights':
        return (
          <div className="step-container">
            <h2>Insight Map</h2>
            <ClusterMap clusters={data.analysis?.clusters || []} />
          </div>
        );
      
      case 'personas':
        return (
          <div className="step-container">
            <h2>User Personas</h2>
            <PersonaGrid personas={data.personas} />
          </div>
        );
      
      case 'opportunity':
        return <OpportunityMatrix data={data.opportunities} />;
      
      case 'report':
        return (
          <div className="step-container">
            <ReportPreview data={data} />
          </div>
        );
      
      default:
        return <ResearchInput onAnalyze={handleAnalyze} loading={data.loading} />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar activeStep={activeStep} setActiveStep={setActiveStep} />
      
      <main className="main-workspace">
        <header style={{ marginBottom: 32 }}>
          <h1>AI UX Research Dashboard</h1>
          <p style={{ color: 'var(--text-dim)' }}>Transforming raw data into actionable insights</p>
        </header>
        
        {renderWorkspace()}
      </main>

      <ReportPanel data={data} />
    </div>
  );
}
