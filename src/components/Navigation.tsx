import { useState, useEffect } from 'react';
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
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const useLightText = isDarkHero && !isScrolled;

  // ✅ FIXED ACTIVE LOGIC
  const isActive = (path: string) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/home')) {
      return true;
    }
    if (path === '/projects') {
      return location.pathname.startsWith('/projects');
    }
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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <div className="w-48 max-h-14">
              <ImageWithFallback
                src="https://res.cloudinary.com/dyxjqw88z/image/upload/v1770446530/new_logo_lxifcw.png"
                alt="TechWorld Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative py-2 text-sm lg:text-base transition-colors duration-300 ${
                    active
                      ? useLightText
                        ? 'text-white'
                        : 'text-[var(--accent-blue-end)]'
                      : useLightText
                      ? 'text-white/80 hover:text-white'
                      : 'text-black hover:text-[var(--accent-blue-end)]'
                  }`}
                >
                  {link.name}

                  {/* ✅ ACTIVE + HOVER UNDERLINE */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300
                    ${
                      active
                        ? useLightText
                          ? 'bg-white'
                          : 'bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)]'
                        : 'opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)]'
                    }`}
                  />
                </Link>
              );
            })}

            <Button asChild className="gradient-primary text-white px-4 lg:px-6 py-2.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-sm lg:text-base">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>

            <Button asChild className="gradient-yellow text-black px-4 lg:px-6 py-2.5 rounded-2xl shadow-xl transition-all font-semibold text-sm lg:text-base">
              <Link to="/refer-and-earn">Refer & Earn</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${useLightText ? 'text-black' : 'text-black'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${useLightText ? 'text-black' : 'text-black'}`} />
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
                className={`block py-2 ${
                  isActive(link.path)
                    ? 'text-[var(--accent-blue-end)]'
                    : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button asChild className="w-full gradient-primary text-white py-3 rounded-2xl">
              <Link to="/book-demo">Book a Demo</Link>
            </Button>

            <Button asChild className="w-full gradient-yellow text-black py-3 rounded-2xl font-semibold">
              <Link to="/refer-and-earn">Refer & Earn</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
