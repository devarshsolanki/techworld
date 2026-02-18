import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  SendHorizontal,
  Database,
  ChartCandlestick,
  Monitor,
  TabletSmartphone,
  FolderCode,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';


const solutions = [
  {
   icon: ChartCandlestick,
title: 'Algo Trading',

modalContent: 'We build end-to-end Algo Trading systems that convert your trading strategies into fully automated, rule-based solutions. Our algorithms ensure fast execution, accuracy, discipline, and scalability—removing emotions and manual errors from trading.',

modalFeatures: [
  'Custom Strategy Coding – Exact implementation of your entry, exit, SL, target, trailing SL, time filters, and risk rules.',
  'Backtesting & Optimization – Historical performance analysis, win ratio, drawdown, and risk evaluation before going live.',
  'Live Execution – Low-latency, reliable order placement as per defined logic.',
  'Risk Management – Lot sizing, max daily loss, position sizing, and capital protection rules.',
  'Broker API Integration – Seamless connection with supported brokers.',
  'Secure & Confidential – Your strategy code remains private and protected.',
  'Ideal For – Manual traders, strategy creators, and professionals shifting to systematic trading.',
  // 'Why Us – Strategy-focused approach, optimized code, data-driven results, long-term support.',
  // 'Disclaimer – Algo trading involves market risk; past results don’t guarantee future performance.'
],

description:
  'We convert trading ideas into automated, rule-based algorithms with precise execution.',

features: [
  'Custom Strategy Development',
  'Error-Free Automated Execution',
  'Secure & Confidential Coding',
  'Backtesting & Optimization'
],

  },
  {
    icon: Monitor,
    title: 'Web Development',
       modalContent: 'Ahiya tamaru detailed paragraph muksho.',
    modalFeatures: [
      'We provide end-to-end Algo Trading development services that transform your trading ideas into fully automated, rule-based systems. Our solutions are designed for speed, accuracy, discipline, and scalability, helping traders eliminate emotional decisions and execution errors.',
      '',
      'Extra Point 3',
    ],
    description:
      'Custom high-performance websites with excellent user experience.',
    features: ['React & Node.js', 'Responsive Design', 'SEO Optimized', 'Performance Focused'],
  },
  {
    icon: TabletSmartphone,
    title: 'App Development',
       modalContent: 'Ahiya tamaru detailed paragraph muksho.',
    modalFeatures: [
      
      'Extra Point 1',
      'Extra Point 2',
      'Extra Point 3',
    ],
    description: 'Create fast, scalable apps with seamless performance and user-friendly design.',
    features: [
      'Android & iOS app development',
      'Cross-platform solutions',
      'Clean UI/UX design',
      'Performance Optimization',
    ],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    modalContent: 'Ahiya tamaru detailed paragraph muksho.',
    modalFeatures: [
      'Extra Point 1',
      'Extra Point 2',
      'Extra Point 3',
    ],
    description: 'Custom AI solutions for intelligent workflows and business efficiency.',
    features: ['AI agents & chatbots', 'Natural Language Processing', 'Algorithmic trading', 'Intelligent Decision Support'],
  },
  {
    icon: Database,
    title: 'Data Visualization',
    modalContent: 'Ahiya tamaru detailed paragraph muksho.',
    modalFeatures: [
      'Extra Point 1',
      'Extra Point 2',
      'Extra Point 3',
    ],
    description: 'Insightful data visuals with interactive dashboards for better decisions.',
    features: [
      'Adaptive learning paths',
      'Student performance tracking',
      'Content recommendations',
      'Automated grading',
    ],
  },
  {
    icon: FolderCode,
    title: 'Software Development',
    modalContent: 'Ahiya tamaru detailed paragraph muksho.',
    modalFeatures: [
      'Extra Point 1',
      'Extra Point 2',
      'Extra Point 3',
    ],
    description: 'Scalable custom software built for your business, from idea to deployment.',
    features: [
      'Full‑stack applications (web, mobile, desktop)',
      'API & backend development',
      'Maintenance, support & upgrades',
      'Quality assurance & performance tuning',
    ],
  },
];

const benefits = [
  'Cost-effective and reliable IT solutions',
  'Scalable services to support business growth',
  'Experienced team with strong technical expertise',
  'Secure, modern, and performance-driven approach',
  'Timely delivery with ongoing support',
  '24/7 Quick response support',
];

export function SolutionsPage() {
  const navigate = useNavigate();
  const [selectedSolution, setSelectedSolution] = useState<any | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedSolution) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedSolution(null); };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // focus modal for keyboard users
    setTimeout(() => modalRef.current?.focus(), 0);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedSolution]);
  


  return (
    <div className="min-h-screen">
      {/* ================= HERO SECTION (REDESIGNED PROPERLY) ================= */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh">
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/20 to-[var(--accent-blue-end)]/20 blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
              Solutions for Every Industry
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[var(--navy)] mb-6 tracking-tight">
              Industry-Leading <br />
              <span className="gradient-text">Tech Solutions</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
              Custom IT and AI automation solutions built to solve your business challenges and
              deliver real, measurable impact.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="gradient-primary text-white px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(0,198,255,0.4)] transition-all duration-300 group"
                onClick={() => navigate('/contact')}
              >
                <span className="flex items-center">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[3rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://res.cloudinary.com/dyxjqw88z/image/upload/v1769769063/Gemini_Generated_Image_jbenl8jbenl8jben_f0p3cx.png"
                alt="AI technology visualization"
                className="w-full h-full object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS GRID ================= */}
      {/* ⬇⬇⬇ EXACT SAME AS YOUR ORIGINAL ⬇⬇⬇ */}

      {/* (solutions grid, benefits section, CTA section — unchanged) */}
      {/* I did NOT touch them */}
      {/* Your original code continues here exactly */}


      {/* Solutions Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
                Industry Solutions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 tracking-tight">
              Solutions by <span className="gradient-text">Industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions built to meet your sector’s specific challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-white rounded-[2rem] p-8 border border-gray-200 hover:border-[var(--accent-blue-end)] transition-all duration-500 h-full shadow-lg hover:shadow-2xl">
                    {/* Icon */}
                    <div className="mb-8">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <solution.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl text-[var(--navy)] mb-3 group-hover:gradient-text transition-all duration-300">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-[var(--accent-blue-end)] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                     <button
                      onClick={() => setSelectedSolution(solution)}
                      className="flex items-center gap-2 text-[var(--accent-blue-end)] hover:gap-3 transition-all group/btn"
                    >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Animated bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-[2rem]" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--neutral-light)] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-[var(--accent-blue-start)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
                  Why Techworld
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 tracking-tight">
                Why Choose <span className="gradient-text">Techworld?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We bring IT solutions that create real impact from day one, combining expert knowledge with proven methodologies.
              </p>

              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <SendHorizontal className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[3rem] opacity-20 blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dyxjqw88z/image/upload/v1769528204/Gemini_Generated_Image_unwigrunwigrunwi_fkwaeq.png"
                  alt="Neural network visualization representing AI technology"
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/20 to-transparent" />
              </div>

              {/* Floating Orb */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[var(--highlight-yellow)] opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[var(--navy)] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-blue-start)] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--highlight-yellow)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                Get Started Today
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our solutions can address your specific challenges and help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-[var(--highlight-yellow)] to-yellow-400 text-[var(--navy)] px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,214,10,0.4)] transition-all duration-300"
                  onClick={() => navigate('/contact')}
                >
                  <span className="relative z-10 flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[var(--highlight-yellow)]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="px-10 py-7 rounded-3xl text-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-[var(--navy)] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSolution(null)}
            aria-hidden={!selectedSolution}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedSolution.title} details`}
              tabIndex={-1}
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[1.25rem] w-full max-w-4xl max-h-[90vh] overflow-hidden relative shadow-2xl focus:outline-none flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSolution(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="px-6 sm:px-8 md:px-10 py-4 sm:py-6 border-b flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-md">
                    <selectedSolution.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-base md:text-xl font-semibold text-[var(--navy)]">
                    {selectedSolution.title}
                  </h3>
                  <p className="text-sm md:text-sm text-gray-500 mt-1 max-w-[80ch] leading-relaxed">
                    {selectedSolution.modalContent || selectedSolution.description}
                  </p>
                </div>
              </div>

              {/* Scrollable Body */}
              <div className="px-6 sm:px-8 md:px-10 py-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200">
                {/* Body content: stacked Key Features then Details for better readability */}
                <div className="space-y-6">
                  {/* Key Features (first) */}
                  <div>
                    <h4 className="text-sm font-medium text-[var(--navy)] mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                      {(selectedSolution.features || []).map((feat: string) => (
                        <li key={feat} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[var(--accent-blue-end)] mt-1 shrink-0" />
                          <span className="text-sm">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Details (below) */}
                  <div>
                    <h4 className="text-sm font-medium text-[var(--navy)] mb-3">Details</h4>
                    <div className="space-y-3 text-gray-600">
                      {(selectedSolution.modalFeatures || []).filter(Boolean).map((point: string, idx: number) => {
                        // Parse heading-like lines (e.g., "Who Is This For? – details") into heading + paragraph
                        if ((point.startsWith("Who Is This For?") || point.startsWith("Why Choose Us?")) && point.includes(" – ")) {
                          const [heading, rest] = point.split(" – ");
                          return (
                            <div key={idx}>
                              <h5 className="text-sm font-semibold text-[var(--navy)] mt-4">{heading}</h5>
                              {rest && <p className="text-sm text-gray-600 mt-1">{rest}</p>}
                            </div>
                          );
                        }

                        if (point.startsWith("Note:")) {
                          return (
                            <p key={idx} className="text-sm text-gray-500 mt-2"><strong>Note:</strong> {point.replace("Note:", "").trim()}</p>
                          );
                        }

                        return (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[var(--accent-blue-end)] mt-1 shrink-0" />
                            <span className="text-sm">{point}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Extra Sections (if any) */}
                  {selectedSolution.extraSections?.map((section: any) => (
                    <div key={section.heading} className="mt-6">
                      <h4 className="text-sm font-semibold text-[var(--navy)] mb-2">{section.heading}</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                        {section.points.map((point: string) => (
                          <li key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[var(--accent-blue-end)] mt-1 shrink-0" />
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTAs */}
              <div className="px-6 sm:px-8 md:px-10 py-4 border-t flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => navigate('/contact')}
                  className="gradient-primary text-white px-6 py-3 rounded-2xl w-full sm:w-auto"
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => setSelectedSolution(null)}
                  variant="ghost"
                  className="px-6 py-3 rounded-2xl w-full sm:w-auto border"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
