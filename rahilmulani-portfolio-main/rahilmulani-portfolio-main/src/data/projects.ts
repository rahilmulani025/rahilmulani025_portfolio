export interface Project {
  id: string;
  title: string;
  impact: string;
  description: string;
  tech: string[];
  color: string;
  githubLink: string;
  details: {
    overview: string;
    challenges: string[];
    solutions: string[];
    keyFeatures: string[];
    results: string[];
  };
}

export const projects: Project[] = [
  {
  id: 'apsez-performance-analysis',
  title: 'Port Logistics & Renewable Energy Performance Analysis — Adani Ports (APSEZ)',
  impact: 'Built a 7-sheet Excel statistical model and Power BI dashboard analyzing 450 MMT cargo, ₹860B revenue, and 15.5 GW renewable energy across 10 ports for India\'s largest port operator',
  description: 'Conducted statistical and business intelligence analysis on Adani Ports & SEZ using Excel Data Analysis ToolPak and Power BI. Applied ANOVA, Chi-Square, Normal Distribution, and FORECAST.LINEAR to answer 12 strategic business questions and deliver a CFO-level analytical report.',
  tech: ['Microsoft Excel', 'Power BI', 'Statistical Analysis', 'ANOVA', 'Data Visualization', 'Business Intelligence'],
  color: 'from-primary/20 to-primary/5',
  githubLink: 'https://github.com/rahilmulani025/adani-ports-analysis',
  details: {
    overview: 'A comprehensive statistical and business intelligence analysis of Adani Ports and Special Economic Zone (APSEZ) — India\'s largest port operator with 27% national market share. The project covered port logistics performance, regional revenue efficiency, renewable energy capacity, and cargo demand forecasting across 10 ports and 4 regions. Delivered a 12-question strategic report reviewed at CFO level.',
    challenges: [
      'Resolving data inconsistencies across multiple sources including the FY24 Annual Report, port-level cargo data, and manager-clarified monthly datasets',
      'Running valid ANOVA with limited regional observations (n=1 per group) — resolved using 3-year repeated measures across FY2023, FY2024, FY2025',
      'Reconciling port-level cargo totals (345 MMT for 5 ports) with full network KPI of 420 MMT, and statistical monthly dataset (475 MMT) with audited annual figure (450 MMT)',
      'Proportionally distributing regional revenue and energy values to port level in the absence of direct port-wise financial data',
    ],
    solutions: [
      'Built a 7-sheet Excel workbook with cross-sheet formula linking — all downstream sheets (Descriptive Stats, ANOVA, Chi-Square, Normal Distribution, Forecasting, BI Dataset) auto-update from a single Raw Data source',
      'Applied ANOVA Single Factor via Excel Data Analysis ToolPak using 3-year regional data, achieving F = 32.48 and p = 0.0000789 — statistically significant at 99.99% confidence',
      'Used FORECAST.LINEAR for both annual projections (FY2026 = 514 MMT, FY2027 = 570 MMT) and 3-month monthly forecast (Jan–Mar 2026)',
      'Designed a Power BI dashboard with 5 charts, 3 KPI cards, and a dedicated statistical results panel pulling live from Sheet 7 of the Excel model',
    ],
    keyFeatures: [
      'Normal Distribution analysis: Z-score = 1.614 for 43 MMT threshold, P(X > 43) = 5.32%',
      'ANOVA Single Factor: F = 32.48, p = 0.0000789 — regional cargo differences confirmed significant',
      'Chi-Square Test: χ² = 21.38, p ≈ 0.0000038 — Industrial customers statistically proven to drive bulk cargo',
      'Regional revenue efficiency analysis: North = ₹2.40B/MMT (highest), West = ₹1.75B/MMT (lowest)',
      'Port concentration analysis: Mundra = 52.17% of listed cargo — concentration risk identified',
      'Annual and monthly FORECAST.LINEAR projections with ±10% confidence bands',
      'Proportional port-level revenue and energy distribution using manager-provided formula',
    ],
    results: [
      'Identified North Region as highest revenue-efficiency market at ₹2.40B/MMT — 37% more efficient than West, enabling targeted capex recommendation',
      'Flagged Mundra Port\'s 52% cargo concentration as a critical network risk, recommending East coast diversification strategy',
      'Projected capacity saturation at 627 MMT installed capacity by FY2028, triggering immediate expansion planning recommendations for Vizhinjam and Haldia terminals',
      'Delivered a 12-question strategic report to CFO level with data-backed recommendations on hiring, capacity planning, peak demand strategy, and 5-year priorities',
    ],
  },
},
  {
    id: 'movie-dataset-analysis',
    title: 'Movie Dataset Analysis',
    impact: 'Performed EDA on 500+ movie records to identify genre-wise performance patterns and user preference insights',
    description: 'Analyzed trends in popularity, ratings, genres, and languages using Python. Created visualizations including bar charts, scatter plots, heatmaps, line charts, and word clouds.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib', 'SQL'],
    color: 'from-primary/20 to-primary/5',
    githubLink: 'https://github.com/rahilmulani025/Movie-analysis',
    details: {
      overview: 'A comprehensive exploratory data analysis project focused on understanding movie industry trends, audience preferences, and performance patterns across different genres and languages.',
      challenges: [
        'Handling missing and inconsistent data across 500+ movie records',
        'Identifying meaningful patterns in multi-dimensional data',
        'Creating visualizations that effectively communicate insights',
      ],
      solutions: [
        'Implemented robust data cleaning pipelines using Pandas',
        'Applied statistical analysis to identify correlations and trends',
        'Designed interactive visualizations with Seaborn and Matplotlib',
      ],
      keyFeatures: [
        'Genre-wise performance analysis with comparative metrics',
        'Popularity and rating trend visualization over time',
        'Language distribution and regional preference mapping',
        'Word cloud generation for title and description analysis',
        'Correlation heatmaps for numerical features',
      ],
      results: [
        'Identified top-performing genres by popularity and ratings',
        'Discovered seasonal patterns in movie releases',
        'Provided actionable insights for content strategy decisions',
      ],
    },
  },
  {
    id: 'ecommerce-sales-analysis',
    title: 'E-commerce Sales Performance Analysis',
    impact: 'Developed interactive Power BI dashboard analyzing sales, profit, and shipping performance across regions',
    description: 'Used DAX and data modeling to calculate KPIs and create interactive visuals for business insights across categories.',
    tech: ['Power BI', 'Excel', 'DAX', 'Data Modeling'],
    color: 'from-accent/20 to-accent/5',
    githubLink: 'https://github.com/rahilmulani025/Ecommerce-Order-Analysis-Dashboard-',
    details: {
      overview: 'An end-to-end business intelligence project that transforms raw e-commerce data into actionable insights through interactive dashboards and advanced analytics.',
      challenges: [
        'Integrating data from multiple sources with different formats',
        'Creating meaningful KPIs that drive business decisions',
        'Designing dashboards that are intuitive for non-technical users',
      ],
      solutions: [
        'Built comprehensive data models with proper relationships',
        'Developed custom DAX measures for complex calculations',
        'Implemented drill-through and filtering capabilities',
      ],
      keyFeatures: [
        'Real-time sales tracking with regional breakdowns',
        'Profit margin analysis by product category',
        'Shipping performance metrics and delivery time analysis',
        'Customer segmentation and behavior patterns',
        'Year-over-year comparison dashboards',
      ],
      results: [
        'Enabled data-driven decision making for stakeholders',
        'Identified underperforming regions for targeted improvements',
        'Reduced reporting time by automating manual processes',
      ],
    },
  },
  {
    id: 'verblyn-ai',
    title: 'Verblyn.AI',
    impact: 'Building an AI-powered English learning platform helping students and professionals speak confidently',
    description: 'Leverages NLP and speech recognition to create personalized learning experiences with real-time feedback on pronunciation, grammar, and fluency.',
    tech: ['React', 'Python', 'NLP', 'Speech Recognition', 'Machine Learning', 'TensorFlow'],
    color: 'from-accent/20 to-accent/5',
    githubLink: 'https://github.com/rahilmulani025',
    details: {
      overview: 'Verblyn.AI is an innovative AI-powered platform designed to help students and professionals improve their English speaking skills through personalized, interactive learning experiences.',
      challenges: [
        'Building accurate real-time speech recognition for non-native speakers',
        'Creating adaptive learning paths that respond to individual skill levels',
        'Developing natural language processing models for grammar and fluency analysis',
        'Designing engaging user experiences that motivate consistent practice',
      ],
      solutions: [
        'Implemented advanced speech-to-text with custom pronunciation scoring',
        'Built adaptive conversation engine using machine learning algorithms',
        'Developed NLP pipeline for comprehensive language analysis',
        'Created gamified progress tracking with personalized feedback',
      ],
      keyFeatures: [
        'Guided speaking practice with real-time voice input',
        'AI-powered feedback on pronunciation, grammar, and fluency',
        'Adaptive conversations that adjust to skill level',
        'Detailed progress tracking and analytics',
        'Personalized learning paths for career advancement',
      ],
      results: [
        'Helping students build confidence in English communication',
        'Enabling professionals to advance their careers through better fluency',
        'Creating accessible language learning for diverse audiences',
      ],
    },
  },
];
