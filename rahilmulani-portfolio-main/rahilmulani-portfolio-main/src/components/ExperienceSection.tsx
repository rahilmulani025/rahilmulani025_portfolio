import { Briefcase, Calendar, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Founder & Builder',
    company: 'Verblyn.AI',
    location: 'Pune, India',
    period: 'Present',
    description: 'Building an AI-powered platform that helps students and professionals speak English confidently through guided speaking practice and intelligent feedback. Leveraging NLP and speech recognition to deliver personalized learning experiences, real-time pronunciation analysis, and adaptive conversation simulations.',
    highlights: ['AI/ML', 'NLP', 'EdTech', 'Product Development', 'Entrepreneurship'],
    isFounder: true,
  },
  {
    title: 'Data Analyst Intern',
    company: 'Renu Sharma Foundation',
    location: 'Remote, Haryana',
    period: 'Mar 2025 – Jun 2025',
    description: 'Analyzed and cleaned 30,000+ records of program and outreach data using Python (Pandas) and Excel. Created Power BI dashboards and summary reports to track key metrics, helping teams make better data-backed decisions.',
    highlights: ['Python', 'Pandas', 'Power BI', 'ETL', 'Data Storytelling'],
  },
  {
    title: 'Software Development Intern',
    company: 'BlueStock Fintech',
    location: 'Remote, Pune',
    period: 'Nov 2024 – Jan 2025',
    description: 'Contributed to feature development, debugging, and deployment for Bluestock, a fintech app serving 200,000+ active users and generating 15,000,000+ impressions.',
    highlights: ['Fintech', 'App Development', 'Debugging'],
  },
  {
    title: 'Web Development Intern',
    company: 'Zidio Technologies',
    location: 'Remote, Pune',
    period: 'Jul 2024 – Aug 2024',
    description: 'Developed and optimized responsive web pages and UI components for client projects.',
    highlights: ['Web Development', 'UI/UX', 'Responsive Design'],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative bg-secondary/30">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building expertise through hands-on experience
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <ScrollReveal 
              key={exp.title} 
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-2 glow-primary z-10" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2 rounded-lg transition-colors ${exp.isFounder ? 'bg-accent/20 group-hover:bg-accent/30' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
                        {exp.isFounder ? (
                          <Rocket className="h-5 w-5 text-accent" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{exp.company}</p>
                        <p className="text-muted-foreground/70 text-xs">{exp.location}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs font-medium text-primary/80 bg-primary/10 rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
