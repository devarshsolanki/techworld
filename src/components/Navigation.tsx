import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDarkHero?: boolean;
}

export function Navigation({ currentPage, onNavigate, isDarkHero = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Technology', id: 'technology' },
    { name: 'Resources', id: 'resources' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  // Determine if we should use light text (on dark background)
  const useLightText = isDarkHero && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg border-b border-gray-200/50' 
          : isDarkHero 
            ? 'bg-transparent' 
            : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
            aria-label="Navigate to home page"
          >
            <div className="relative w-11 h-11 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <div className="w-6 h-6 border-2 border-white rounded-lg group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <span className={`text-xl transition-all duration-300 ${
              useLightText 
                ? 'text-white' 
                : 'bg-gradient-to-r from-[var(--navy)] to-[var(--accent-blue-end)] bg-clip-text text-transparent'
            }`}>NeuralAI</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`relative py-2 transition-all duration-300 ${
                  currentPage === link.id
                    ? useLightText ? 'text-white' : 'text-[var(--accent-blue-end)]'
                    : useLightText 
                      ? 'text-white/90 hover:text-white' 
                      : 'text-[var(--navy)] hover:text-[var(--accent-blue-end)]'
                }`}
              >
                {link.name}
                {currentPage === link.id && (
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                    useLightText 
                      ? 'bg-white' 
                      : 'bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)]'
                  }`} />
                )}
              </button>
            ))}
            <Button
              className="relative overflow-hidden gradient-primary text-white px-6 py-2.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => onNavigate('contact')}
            >
              <span className="relative z-10">Book a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue-end)] to-[var(--accent-blue-start)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 transition-colors duration-300 ${useLightText ? 'text-white' : 'text-[var(--navy)]'}`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${useLightText ? 'text-white' : 'text-[var(--navy)]'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors hover:text-[var(--accent-blue-end)] ${
                  currentPage === link.id
                    ? 'text-[var(--accent-blue-end)]'
                    : 'text-[var(--navy)]'
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button
              className="w-full gradient-primary text-white px-6 py-3 rounded-2xl hover:opacity-90"
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
