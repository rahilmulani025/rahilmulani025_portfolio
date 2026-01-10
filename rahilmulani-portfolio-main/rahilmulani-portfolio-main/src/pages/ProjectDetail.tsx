import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Github, CheckCircle, Lightbulb, Target, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/#projects">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Projects
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.impact}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <Github className="h-5 w-5" />
                View on GitHub
              </Button>
            </a>
          </div>

          {/* Overview */}
          <section className="glass-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.overview}
            </p>
          </section>

          {/* Challenges & Solutions */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <section className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-accent" />
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                Solutions
              </h2>
              <ul className="space-y-3">
                {project.details.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-500 text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    {solution}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Key Features */}
          <section className="glass-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Rocket className="h-6 w-6 text-primary" />
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.details.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="text-primary">•</span>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              📊 Results & Impact
            </h2>
            <ul className="space-y-4">
              {project.details.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="text-2xl">→</span>
                  <span className="text-lg">{result}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
