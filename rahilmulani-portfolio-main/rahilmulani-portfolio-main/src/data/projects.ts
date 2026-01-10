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
