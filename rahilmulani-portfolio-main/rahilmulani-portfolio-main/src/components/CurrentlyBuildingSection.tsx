import { Rocket, Mic, Brain, Globe, MessageCircle, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import verblynLogo from '@/assets/verblyn-logo.jpeg';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Mic,
    title: 'Guided Speaking Practice',
    description: 'Interactive sessions with real-time voice input and structured exercises',
  },
  {
    icon: Brain,
    title: 'AI-Powered Feedback',
    description: 'Intelligent analysis of pronunciation, grammar, and fluency',
  },
  {
    icon: MessageCircle,
    title: 'Adaptive Conversations',
    description: 'Dynamic dialogue simulations that adapt to your skill level',
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Detailed insights and analytics on your learning journey',
  },
];

const techStack = ['React', 'Python', 'NLP', 'Speech Recognition', 'Machine Learning', 'TensorFlow'];

const CurrentlyBuildingSection = () => {
  return (
    <section id="building" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full animate-pulse-glow delay-500" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Rocket className="h-4 w-4 text-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">Currently Building</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Building the Future of{' '}
              <span className="text-gradient-accent">English Learning</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              An AI-powered platform helping students and professionals speak English confidently
            </p>
          </div>
        </ScrollReveal>

        {/* Main Feature Card */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-8 md:p-12 border-accent/20 hover:border-accent/40 transition-all duration-500 relative group overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors duration-500" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                {/* Logo & Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg shadow-accent/20">
                      <img src={verblynLogo} alt="Verblyn.AI Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                      Verblyn.AI
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Speak Confidently. Learn Intelligently.
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground/80 text-lg leading-relaxed mb-8 max-w-3xl">
                  Verblyn.AI leverages cutting-edge natural language processing and speech recognition 
                  technology to create personalized learning experiences. Our platform analyzes your 
                  speaking patterns, identifies areas for improvement, and provides real-time feedback 
                  to accelerate your English fluency journey.
                </p>

                {/* Target Users */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm text-foreground">Students</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Professionals</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Career Advancement</span>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border hover:border-accent/30 transition-colors group/item"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 group-hover/item:bg-accent/20 transition-colors shrink-0">
                        <feature.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-sm font-medium text-accent/90 bg-accent/10 rounded-lg border border-accent/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90" asChild>
                    <a href="verblyn-ai.vercel.app" target="_blank" rel="noopener noreferrer">
                      Visit Verblyn.AI
                      <Rocket className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="glass" size="lg" asChild>
                    <a href="#contact">Collaborate With Me</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CurrentlyBuildingSection;
