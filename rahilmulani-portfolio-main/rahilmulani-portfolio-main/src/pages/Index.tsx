import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CurrentlyBuildingSection from '@/components/CurrentlyBuildingSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rahil Mulani | Data Analyst & Aspiring Data Scientist</title>
        <meta
          name="description"
          content="Rahil Mulani - Data Analyst specializing in Python, SQL, Power BI, and Tableau. Transforming raw data into actionable insights with expertise in EDA, data storytelling, and business intelligence."
        />
        <meta name="keywords" content="Rahil Mulani, data analyst, data scientist, python, sql, power bi, tableau, machine learning, data visualization, pune, india" />
        <meta property="og:title" content="Rahil Mulani | Data Analyst & Aspiring Data Scientist" />
        <meta property="og:description" content="Turning Raw Data into Actionable Insights. Expert in Python, SQL, Power BI, and data visualization." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://rahilmulani.dev" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CurrentlyBuildingSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
