import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-lg mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:rahil.mulani.contact@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground">rahil.mulani.contact@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="glass-card p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Connect Online
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/rahilmulani025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group text-center"
                  >
                    <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/rahil-rashid-mulani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group text-center"
                  >
                    <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
