import { Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const certifications = [
  {
    title: 'Oracle Certified AI Foundation Associate',
    issuer: 'Oracle',
  },
  {
    title: 'Python Programming',
    issuer: 'IIT Madras',
  },
  {
    title: 'Data Science & Analytics',
    issuer: 'Pregrad & Wipro',
  },
  {
    title: 'Data Analytics',
    issuer: 'Deloitte',
  },
  {
    title: 'Business Intelligence (Excel & Power BI)',
    issuer: 'Professional Certification',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Certifications
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional <span className="text-gradient">Credentials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and industry-recognized certifications that validate my expertise.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
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

export default CertificationsSection;
