import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import HeroSection from './components/HeroSection';
import OverviewSection from './components/OverviewSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import SkillChartSection from './components/SkillChartSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContentSection from './components/ContentSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    window.history.replaceState(null, '', window.location.pathname);
  }, []);

  return (
    <div className="bg-transparent min-h-screen text-white overflow-hidden selection:bg-brand-purple selection:text-white relative">
      <Background />
      <Navbar />
      <main>
        <HeroSection />
        <OverviewSection />
        <SkillsSection />
        <ProjectsSection />
        <SkillChartSection />
        <EducationSection />
        <CertificationsSection />
        <ContentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
