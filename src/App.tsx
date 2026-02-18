import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { motion } from 'motion/react';

export default function App() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);


  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

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
            onClick={() => {
              const phoneNumber = '918866779476';
              const whatsappUrl = `https://wa.me/${phoneNumber}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="relative w-16 h-16 rounded-full gradient-primary shadow-2xl hover:shadow-[0_0_40px_rgba(0,198,255,0.6)] hover:scale-110 transition-all duration-300"
            aria-label="Open WhatsApp chat"
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
