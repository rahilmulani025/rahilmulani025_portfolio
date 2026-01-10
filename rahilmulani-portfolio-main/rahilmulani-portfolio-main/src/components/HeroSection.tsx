import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ParticleGrid from './ParticleGrid';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <ParticleGrid />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-500" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in-up opacity-0">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Open to Opportunities</span>
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 delay-100">
          <span className="text-foreground">Rahil </span>
          <span className="text-gradient">Mulani</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-fade-in-up opacity-0 delay-200 font-light">
          Data Analyst & Aspiring Data Scientist
        </p>
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0 delay-300">
          Turning <span className="text-primary font-medium">Raw Data</span> into{' '}
          <span className="text-primary font-medium">Actionable Insights</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up opacity-0 delay-400">
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="/resume.pdf" download="Rahil_Mulani_Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="glass" size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-fade-in-up opacity-0 delay-500">
          <a
            href="https://github.com/rahilmulani025"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/rahil-rashid-mulani"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:rahil.mulani.contact@gmail.com"
            className="p-3 glass-card hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
