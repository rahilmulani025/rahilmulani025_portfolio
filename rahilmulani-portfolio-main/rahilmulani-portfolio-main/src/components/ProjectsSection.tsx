import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import ScrollReveal from './ScrollReveal';

const ProjectsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Projects
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Data projects showcasing analytical skills and business impact
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
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="glass-card group relative overflow-hidden hover:border-primary/40 transition-all duration-500 cursor-pointer block flex-shrink-0 w-[340px] md:w-[400px] snap-center"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-6 md:p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                      {project.title}
                    </h3>
                    <div className="p-2 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex-shrink-0">
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Impact Statement */}
                  <p className="text-foreground font-medium mb-3 line-clamp-2">
                    {project.impact}
                  </p>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-muted-foreground">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" size="sm" className="group/btn pointer-events-none w-fit">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
