import React from 'react';
import { 
  BarChart3, 
  FileSearch, 
  Users, 
  Map as MapIcon, 
  FileText, 
  Settings,
  BrainCircuit,
  LayoutDashboard
} from 'lucide-react';

export const Sidebar = ({ activeStep, setActiveStep }) => {
  const menuItems = [
    { id: 'research', label: '1 Research Input', icon: FileSearch },
    { id: 'analysis', label: '2 AI Analysis', icon: BrainCircuit },
    { id: 'insights', label: '3 Insight Map', icon: BarChart3 },
    { id: 'personas', label: '4 Personas', icon: Users },
    { id: 'opportunity', label: '5 Opportunity Map', icon: MapIcon },
    { id: 'report', label: '6 Report', icon: FileText },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <LayoutDashboard size={24} />
        <span>UX InsightFlow</span>
      </div>
      
      <nav style={{ flex: 1 }}>
        {menuItems.map(item => (
          <div 
            key={item.id}
            className={`nav-item ${activeStep === item.id ? 'active' : ''}`}
            onClick={() => setActiveStep(item.id)}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div style={{ padding: '24px', borderTop: '1px solid var(--border)' }}>
        <div className="nav-item" style={{ padding: '8px 0' }}>
          <Settings size={18} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export const AppLayout = ({ children, sidebar }) => {
  return (
    <div className="dashboard">
      {sidebar}
      <main className="main-workspace">
        {children}
      </main>
    </div>
  );
};
