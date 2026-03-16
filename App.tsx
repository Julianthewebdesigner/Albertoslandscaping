
import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ReviewsPage } from './components/ReviewsPage';
import { ContactPage } from './components/ContactPage';
import { ProjectsPage } from './components/ProjectsPage';
import { MetaTags } from './components/MetaTags';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'about' | 'reviews' | 'contact' | 'projects'>('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: 'home' | 'services' | 'about' | 'reviews' | 'contact' | 'projects') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <HelmetProvider>
      <div className="relative min-h-screen">
        {/* Dynamic Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-10">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#2d5a27_0%,_transparent_50%)]"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>

        <Navbar onNavigate={navigateTo} currentView={currentView} />

        <main>
          {currentView === 'home' && (
            <>
              <MetaTags
                title="Professional Landscaping Services Seattle, Kent & Bellevue WA | Alberto's Landscaping LLC"
                description="Expert landscaping services in Seattle, Kent, Bellevue & Renton WA. Lawn care, hardscaping, landscape design, seasonal cleanup. Licensed, insured, family-owned since 2012."
                image="https://albertoslandscaping.com/images/home-page/completelawnsolutions.jpeg"
                url="https://albertoslandscaping.com"
              />
              <Hero />
              <TrustSection onAboutClick={() => navigateTo('about')} />
              <ServicesSection onSeeAll={() => navigateTo('services')} />
              <ReviewsSection onSeeAll={() => navigateTo('reviews')} />
              {/* Direct to contact from home if needed, otherwise rely on nav */}
            </>
          )}
          {currentView === 'services' && <ServicesPage onNavigate={navigateTo} />}
          {currentView === 'about' && <AboutPage onNavigate={navigateTo} />}
          {currentView === 'reviews' && <ReviewsPage />}
          {currentView === 'contact' && <ContactPage />}
          {currentView === 'projects' && <ProjectsPage onNavigate={navigateTo} />}
        </main>

        <Footer onNavigate={navigateTo} />
      </div>
    </HelmetProvider>
  );
};

export default App;
