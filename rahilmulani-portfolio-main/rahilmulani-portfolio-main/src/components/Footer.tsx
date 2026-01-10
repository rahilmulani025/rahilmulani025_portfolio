import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4">
      {/* Animated Divider */}
      <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:justify-between">
          {/* Logo/Name */}
          <div className="font-display text-lg font-bold">
            <span className="text-gradient">RM</span>
            <span className="text-foreground">.</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Rahil Mulani. Built with
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            and data.
          </p>

          {/* Quick Links */}
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
