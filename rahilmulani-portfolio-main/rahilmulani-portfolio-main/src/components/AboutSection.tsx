import { Sparkles, Target, Zap, GraduationCap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Passionate About{' '}
              <span className="text-gradient">Data-Driven</span> Solutions
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Abstract Profile Visual */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Glowing rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border border-primary/30 animate-pulse-glow delay-200" />
                <div className="absolute inset-8 rounded-full border border-primary/40 animate-pulse-glow delay-400" />
                
                {/* Center glow */}
                <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
                
                {/* Abstract data visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-lg glass-card flex items-center justify-center"
                        style={{
                          animationDelay: `${i * 100}ms`,
                        }}
                      >
                        <div
                          className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse"
                          style={{
                            animationDelay: `${i * 150}ms`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* About Content */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Rahil Mulani</span>, a 3rd-year B.E. Information Technology student at Sinhgad Institute of Technology, Pune, with a strong passion for Data Analytics and Business Intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in Python, SQL, Power BI, and Tableau, I transform complex datasets into actionable insights. My approach combines rigorous analytical thinking with effective data storytelling to drive business decisions.
              </p>

              {/* Education Badge */}
              <div className="glass-card p-4 flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">B.E. Information Technology</h4>
                  <p className="text-sm text-muted-foreground">Sinhgad Institute of Technology • CGPA: 8.5/10</p>
                </div>
              </div>

              {/* Highlight Cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                <div className="glass-card p-4 group hover:border-primary/30 transition-all duration-300">
                  <Sparkles className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-foreground mb-1">Curious</h3>
                  <p className="text-sm text-muted-foreground">Always exploring data patterns</p>
                </div>
                <div className="glass-card p-4 group hover:border-primary/30 transition-all duration-300">
                  <Target className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-foreground mb-1">Precise</h3>
                  <p className="text-sm text-muted-foreground">Detail-oriented analysis</p>
                </div>
                <div className="glass-card p-4 group hover:border-primary/30 transition-all duration-300">
                  <Zap className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-foreground mb-1">Agile</h3>
                  <p className="text-sm text-muted-foreground">Fast, iterative solutions</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
