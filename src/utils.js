export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const generateId = () => Math.random().toString(36).substr(2, 9);

// Mock AI Logic
export const analyzeResearch = async (data) => {
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  return {
    sentiment: [
      { name: 'Positive', value: 45, color: 'var(--sage)' },
      { name: 'Neutral', value: 35, color: 'var(--steel)' },
      { name: 'Negative', value: 20, color: 'var(--clay)' },
    ],
    clusters: [
      { id: 1, label: 'Navigation Issues', size: 40, color: 'var(--mauve)' },
      { id: 2, label: 'Value Proposition', size: 30, color: 'var(--sage)' },
      { id: 3, label: 'Visual Clarity', size: 20, color: 'var(--steel)' },
      { id: 4, label: 'Loading Speed', size: 10, color: 'var(--clay)' },
    ],
    topInsights: [
      { id: 1, text: 'Users find the checkout process confusing.', score: 0.92, category: 'UX' },
      { id: 2, text: 'Pricing is the most discussed topic in interviews.', score: 0.88, category: 'Business' },
      { id: 3, text: 'Mobile responsiveness needs urgent attention.', score: 0.85, category: 'Technical' },
    ]
  };
};

export const generatePersonas = (analysis) => {
  return [
    {
      id: 1,
      name: 'Busy Professional',
      role: 'Project Manager',
      goals: ['Efficiency', 'Reliability'],
      frustrations: ['Tool complexity', 'Slow sync'],
      quote: "I just need it to work so I can focus on my team."
    },
    {
      id: 2,
      name: 'Creative Soul',
      role: 'Designer',
      goals: ['Inspiration', 'Visual consistency'],
      frustrations: ['Limited customization', 'Clunky UI'],
      quote: "Tools should disappear and let my creativity flow."
    }
  ];
};

export const calculateOpportunityMap = () => {
  return [
    { name: 'Improve Search', impact: 8, effort: 3, type: 'Quick Win' },
    { name: 'Revamp Dashboard', impact: 9, effort: 8, type: 'Big Bet' },
    { name: 'Dark Mode', impact: 4, effort: 2, type: 'Incremental' },
    { name: 'API Integration', impact: 7, effort: 9, type: 'Long Term' },
  ];
};
