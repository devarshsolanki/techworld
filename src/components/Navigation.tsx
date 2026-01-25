import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationProps {
  isDarkHero?: boolean;
}

export function Navigation({ isDarkHero = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    // { name: 'Technology', path: '/technology' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine if we should use light text (on dark background)
  const useLightText = isDarkHero && !isScrolled;

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/' && location.pathname === '/home') return true;
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-lg border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Navigate to home page"
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md">
              <ImageWithFallback
                src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/05/Illustration-of-logo-design-template-on-transparent-background-PNG.png"
                alt="TechWorld Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span
              className={`text-2xl font-semibold transition-colors duration-300 ${
                useLightText
                  ? 'text-white'
                  : 'bg-gradient-to-r from-[var(--navy)] to-[var(--accent-blue-end)] bg-clip-text text-transparent'
              }`}
            >
              TechWorld
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors duration-300 ${
                  isActive(link.path)
                    ? useLightText
                      ? 'text-white'
                      : 'text-[var(--accent-blue-end)]'
                    : useLightText
                    ? 'text-white/80 hover:text-white'
                    : 'text-[var(--navy)] hover:text-[var(--accent-blue-end)]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                      useLightText
                        ? 'bg-white'
                        : 'bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)]'
                    }`}
                  />
                )}
              </Link>
            ))}

            <Link to="/contact">
              <Button className="gradient-primary text-white px-6 py-2.5 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${useLightText ? 'text-white' : 'text-[var(--navy)]'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${useLightText ? 'text-white' : 'text-[var(--navy)]'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 ${
                  isActive(link.path)
                    ? 'text-[var(--accent-blue-end)]'
                    : 'text-[var(--navy)]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full gradient-primary text-white py-3 rounded-2xl">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
