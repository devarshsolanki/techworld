import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SolutionsPage } from './components/SolutionsPage';
import { ContactPage } from './components/ContactPage';
import { TechnologyPage } from './components/TechnologyPage';
import { ResourcesPage } from './components/ResourcesPage';
import { MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'technology':
        return <TechnologyPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  // Determine if current page has a dark hero background
  const isDarkHero = currentPage === 'technology' || currentPage === 'resources';

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} isDarkHero={isDarkHero} />

      {/* Page Content */}
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Enhanced Chatbot Placeholder */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <div className="relative">
          {/* Pulsing ring */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-full opacity-75 blur-md animate-pulse" />
          
          <Button
            className="relative w-16 h-16 rounded-full gradient-primary shadow-2xl hover:shadow-[0_0_40px_rgba(0,198,255,0.6)] hover:scale-110 transition-all duration-300"
            aria-label="Open chat support"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </Button>
        </div>
      </motion.div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
