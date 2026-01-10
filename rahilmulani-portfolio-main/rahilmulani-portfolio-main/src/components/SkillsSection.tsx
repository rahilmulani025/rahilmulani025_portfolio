import { 
  Database, 
  BarChart3, 
  Code2, 
  Table2, 
  GitBranch, 
  Cloud,
  LineChart,
  FileSpreadsheet,
  Braces,
  PieChart,
  Cpu,
  Layers,
  Globe,
  Palette,
  Server,
  FileCode,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Data Analytics & Visualization',
    skills: [
      { name: 'Python (Pandas, NumPy)', icon: Code2 },
      { name: 'SQL / MySQL', icon: Database },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Tableau', icon: PieChart },
      { name: 'Advanced Excel', icon: FileSpreadsheet },
      { name: 'Seaborn / Matplotlib', icon: LineChart },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'HTML5', icon: Globe },
      { name: 'CSS3', icon: Palette },
      { name: 'JavaScript', icon: FileCode },
      { name: 'React Basics', icon: Code2 },
      { name: 'Node.js (Basics)', icon: Server },
      { name: 'REST APIs', icon: Cloud },
    ],
  },
  {
    title: 'Core Competencies',
    skills: [
      { name: 'Exploratory Data Analysis', icon: Braces },
      { name: 'Data Storytelling', icon: BarChart3 },
      { name: 'ETL Pipelines', icon: Layers },
      { name: 'KPI Dashboards', icon: PieChart },
      { name: 'Feature Engineering', icon: Table2 },
      { name: 'Business Intelligence', icon: LineChart },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git / GitHub', icon: GitBranch },
      { name: 'VS Code', icon: Code2 },
      { name: 'AWS (Foundational)', icon: Cloud },
      { name: 'MongoDB (Basics)', icon: Database },
      { name: 'Google Sheets', icon: FileSpreadsheet },
      { name: 'Machine Learning Basics', icon: Cpu },
    ],
  },
];

const SkillsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="skills" className="section-padding relative bg-secondary/30 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Skills
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for extracting insights and building data solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Scroll Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex justify-end gap-2 mb-6 px-4">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full glass-card hover:border-primary/40 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full glass-card hover:border-primary/40 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </ScrollReveal>

        {/* Horizontal Scroll Container */}
        <ScrollReveal delay={0.2}>
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group flex-shrink-0 w-[300px] md:w-[340px] snap-center"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-primary/10 transition-all duration-300 group/skill cursor-default"
                    >
                      <div className="p-2 rounded-md bg-primary/10 group-hover/skill:bg-primary/20 transition-colors">
                        <skill.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80 group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
