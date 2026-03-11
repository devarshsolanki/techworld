// Merged project page: old visual shell + new project modules — with full Modal support
import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, Mail, X, ExternalLink, Github,
  Share2, Clock, User, Tag
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const services = [
  { key: 'all', label: 'All Projects' },
  { key: 'algo', label: 'Algo Trading' },
  { key: 'web', label: 'Web Development' },
  { key: 'app', label: 'App Development' },
  { key: 'ai', label: 'AI Automation' },
  { key: 'data', label: 'Data Visualization' },
  { key: 'software', label: 'Software Development' },
];

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  thumbnail: string;
  images: string[];
  description: string;
  role?: string;
  duration?: string;
  service: string;
  date: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  likes: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tuli Enterprises Industrial Website",
    category: "Web App",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200",
    ],
    description:
      "Production-ready business website for a bolt manufacturing company featuring a comprehensive product catalog, inquiry system, SEO optimization, and a fully responsive UI designed for real customers. The site supports category-based product browsing, contact form integrations, and cloud-deployed backend APIs.",
    role: "Full Stack Developer",
    duration: "2 months",
    service: "web",
    date: "Aug 2025",
    tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveLink: "https://tulienterprises.shop/",
    likes: 42,
  },
  {
    id: 2,
    title: "Mahadev Grocery Full-Stack E-commerce System",
    category: "E-Commerce",
    tags: ["MERN", "REST API", "Render"],
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
      "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=1200",
      "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=1200",
    ],
    description:
      "Complete MERN grocery e-commerce system featuring user accounts, wallet balance handling, order placement workflow, database persistence, and API-driven backend deployed on cloud infrastructure. Users can browse categories, add items to cart, and checkout with full order tracking.",
    role: "Full Stack Developer",
    duration: "3 months",
    service: "web",
    date: "Jan 2026",
    tech: ["MongoDB", "Mongoose", "Express.js", "React", "Node.js", "REST API", "Render"],
    liveLink: "https://mahadevgrocery.vercel.app/",
    likes: 67,
  },
  {
    id: 3,
    title: "Kyraa Jewelz E-commerce Platform",
    category: "E-Commerce",
    tags: ["MERN", "Tailwind CSS"],
    thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200",
    images: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1200",
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=1200",
    ],
    description:
      "Full-stack MERN jewellery e-commerce platform with product catalog, cart management, order workflow, and responsive UI optimized for customer browsing and purchasing. Features include product search, collection filters, wishlist, and an admin panel for product management.",
    role: "Full Stack Developer",
    duration: "2.5 months",
    service: "web",
    date: "Dec 2025",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    liveLink: "https://kyraajewelz.vercel.app/",
    likes: 53,
  },
  {
    id: 4,
    title: "TradingView Webhook Automated Trading Bot",
    category: "algo",
    tags: ["Python", "pinescript", "TradingView", "Webhook", "Automated Trading Bot"],
    thumbnail: "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212415/rrhe16w4nnoxvfzbyutq.jpg",
    images: [
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212415/rrhe16w4nnoxvfzbyutq.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212416/afcx74yt1xkkvqjl361p.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212416/wpoecyafta1qeuzdrju3.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212416/rijmmbkwbgyo2xifshji.jpg",

    ],
    description:
      "This project is a Python-based automated trading bot that connects TradingView signals to Delta Exchange using webhooks. It receives real-time alerts from TradingView strategies and executes market buy or sell orders automatically through the Delta Exchange API. The backend is built with Flask and deployed on Render for 24×7 uptime. It also includes position management logic to prevent duplicate trades and handle entries and exits correctly. 🚀",
    role: "algo trading bots developer",
    duration: "2 months",
    service: "algo",
    date: "Dec 2025",
    tech: ["Python", "pinescript", "TradingView", "Webhook", "Automated Trading Bot"],
    githubLink: "",
    likes: 124,
  },
  {
    id: 5,
    title: "Multi-Year Seasonal Market Analysis Tool",
    category: "web",
    tags: ["python", "D3.js", "Chart.js"],
    thumbnail: "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212999/zid6hiyw49ujrilta6yd.jpg",
    images: [
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212999/zid6hiyw49ujrilta6yd.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212999/jgigfyf7wwefkzeehcuw.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212999/whve9xegbpq1nq2aeybs.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773212999/a6d90d6ma9tqyisb34ta.jpg",
          ],
    description:
      "A professional seasonal analysis tool that studies historical price behavior across multiple years for a specific date range. It identifies repeatable market patterns and provides statistically backed trade targets with accuracy levels. The Seasonal Analysis Dashboard studies historical stock performance for a selected date range across multiple past years to identify repeating seasonal patterns. It automatically analyzes the same calendar period in previous years and calculates the price movement, duration, and return for each cycle. The indicator highlights these cycles on the chart and summarizes results in tables with statistical targets and accuracy levels. This helps traders identify consistent market behavior and potential high-probability trading opportunities. 📊",
    role: "algo trading bots developer",
    duration: "2 months",
    service: "web",
    date: "Jan 2026",
    tech: ["python", "D3.js", "Chart.js"],
    githubLink: "",
    likes: 445,
  },
  {
    id: 6,
    title: "EMA VWAP Momentum Based Stock Scanner",
    category: "AI Automation",
    tags: ["Python", "OpenAI", "LangChain"],
    thumbnail: "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773213553/bmwtuviker7fk6gejika.jpg",
    images: [
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773213553/bmwtuviker7fk6gejika.jpg",
      "https://res.cloudinary.com/dt3dtekuh/image/upload/v1773213552/kpqw7zhohjcoi3uoinkq.jpg",
    ],
    description:
      "This project is a custom TradingView indicator and multi-stock scanner designed to identify high-probability intraday trading opportunities. The strategy combines *EMA 20, EMA 50, VWAP, and RSI momentum filtering* to detect bullish and bearish market conditions.A *Buy signal* is generated when EMA 20 crosses above EMA 50, the price is trading above VWAP, and RSI confirms positive momentum by staying above its smoothing moving average. A *Sell signal* occurs when EMA 20 crosses below EMA 50, the price is below VWAP, and RSI indicates bearish momentum.The project also includes a *real-time scanner dashboard* built with Pine Script that monitors multiple NSE stocks simultaneously using the same strategy logic. When a signal is triggered, the scanner displays the *stock symbol along with the exact signal time*, allowing traders to quickly identify actionable opportunities across the market.This tool helps traders avoid manually checking multiple charts and instead provides a *centralized signal dashboard*, making intraday trading analysis faster, more systematic, and efficient",
    role: "algo trading bots developer",
    duration: "1 months",
    service: "algo",
    date: "Dec 2025",
    tech: ["Python", "OpenAI", "LangChain"],
    githubLink: "",
    likes: 892,
  },
  {
    id: 7,
    title: "Sales Analytics Dashboard",
    category: "Data Visualization",
    tags: ["D3.js", "React", "Chart.js"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    ],
    description:
      "Interactive data visualization platform for executive decision making, featuring real-time sales KPIs, regional breakdowns, funnel analysis, and predictive trend charts built with D3.js and Chart.js on a React foundation.",
    role: "Frontend Engineer",
    duration: "6 weeks",
    service: "data",
    date: "Dec 2023",
    tech: ["D3.js", "React", "Chart.js"],
    githubLink: "https://github.com",
    likes: 365,
  },
  {
    id: 8,
    title: "Enterprise ERP System",
    category: "Software",
    tags: ["Java", "Spring", "Oracle"],
    thumbnail: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200",
    images: [
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
    ],
    description:
      "Comprehensive resource planning software for manufacturing firms covering procurement, inventory, production scheduling, HR, and financial reporting. Built on Java Spring Boot with Oracle RDBMS for enterprise-grade reliability and performance.",
    role: "Systems Architect",
    duration: "6 months",
    service: "software",
    date: "Jul 2024",
    tech: ["Java", "Spring", "Oracle"],
    githubLink: "https://github.com",
    likes: 456,
  },
];

/* ─────────────────────────────────────────────
   IMAGE SLIDER
───────────────────────────────────────────── */
function ImageSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  // Auto-slide every 3 seconds, pause on hover
  useEffect(() => {
    if (images.length <= 1) return;
    if (paused) return;
    intervalRef.current = setInterval(next, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, paused, images.length]);

  return (
    <div
      className="relative w-full select-none"
      style={{ height: '280px', backgroundColor: '#0a0a0a', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current + 1}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: 'cover' }}
          draggable={false}
        />
      </AnimatePresence>

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Dot indicators — only if multiple images, centered at bottom */}
      {images.length > 1 && (
        <div
          className="absolute z-10 flex gap-2"
          style={{ bottom: 12, left: '50%', transform: 'translateX(-50%)' }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 22 : 8,
                height: 8,
                background: i === current ? '#3b82f6' : 'rgba(255,255,255,0.6)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}

      {/* Image counter badge */}
      {images.length > 1 && (
        <div
          className="absolute top-3 right-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
        >
          {current + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────── */
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [shareTooltip, setShareTooltip] = useState(false);

  // ESC key to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!project) return null;

  const handleShare = () => {
    const url = project.liveLink || project.githubLink || window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setShareTooltip(true);
      setTimeout(() => setShareTooltip(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      >
        {/* Modal box — stop propagation so clicking inside doesn't close */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full flex flex-col rounded-3xl overflow-hidden shadow-2xl"
          style={{
            maxWidth: 760,
            maxHeight: '90vh',
            background: '#ffffff',
          }}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          {/* ── Fixed Header ── */}
          <div
            className="flex-shrink-0 flex items-start justify-between px-6 py-4 border-b"
            style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#ffffff' }}
          >
            <div className="flex-1 min-w-0 pr-4">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#3b82f6' }}>
                {project.category}
              </p>
              <h2 className="text-xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Inter', sans-serif" }}>
                {project.title}
              </h2>
              {/* Tech tags in header */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: '#EFF6FF', color: '#1d4ed8', border: '1px solid #BFDBFE' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: 36, height: 36,
                background: '#f3f4f6',
                border: '1px solid #e5e7eb',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e5e7eb')}
              onMouseLeave={e => (e.currentTarget.style.background = '#f3f4f6')}
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* ── Scrollable Body ── */}
          <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>

            {/* Image Slider — rounded corners + overflow hidden handled by modal container */}
            <div style={{ margin: '0 0 0 2px' }}>
              <ImageSlider images={project.images} />
            </div>

            {/* Content — all sections with clear padding/gap */}
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Meta row: date, duration, role */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px 24px',
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  padding: '12px 16px',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar className="w-4 h-4" style={{ color: '#3b82f6' }} />
                  <span>{project.date}</span>
                </div>
                {project.duration && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock className="w-4 h-4" style={{ color: '#3b82f6' }} />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.role && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User className="w-4 h-4" style={{ color: '#3b82f6' }} />
                    <span>{project.role}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h3
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                  }}
                >
                  About
                </h3>
                <p
                  style={{
                    color: '#374151',
                    fontSize: '0.9rem',
                    lineHeight: '1.7',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: '#e2e8f0' }} />

              {/* Tech Stack */}
              <div>
                <h3
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <Tag className="w-3.5 h-3.5" /> Tech Stack
                </h3>
                {/* Styled badge chips with flex-wrap */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '5px 14px',
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                        color: '#1d4ed8',
                        border: '1px solid #BFDBFE',
                        letterSpacing: '0.01em',
                        boxShadow: '0 1px 3px rgba(59,130,246,0.08)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── Fixed Action Footer ── */}
          <div
            className="flex-shrink-0 flex flex-wrap items-center gap-3 px-6 py-4 border-t"
            style={{ borderColor: 'rgba(0,0,0,0.08)', background: '#f9fafb' }}
          >
            {/* GitHub Repository button — only shown if githubLink exists and is non-empty */}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: '#0f172a',
                  color: '#ffffff',
                  border: '1px solid #1e293b',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#1e293b')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0f172a')}
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>
            )}

            {/* Spacer */}
            <div className="flex-1" />

            {/* Share button */}
            <div className="relative">
              <button
                onClick={handleShare}
                title="Copy link"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: '#f3f4f6',
                  color: '#374151',
                  border: '1px solid #e5e7eb',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#e5e7eb')}
                onMouseLeave={e => (e.currentTarget.style.background = '#f3f4f6')}
              >
                <Share2 className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {shareTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 text-xs font-medium px-2.5 py-1 rounded-lg text-white whitespace-nowrap"
                    style={{ background: '#1e293b' }}
                  >
                    Link copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Live Demo button — only if liveLink exists */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'linear-gradient(90deg, #2563eb, #0ea5e9)',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(37,99,235,0.4)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 20px rgba(37,99,235,0.55)';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(37,99,235,0.4)';
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              >
                <ExternalLink className="w-4 h-4" />
                {project.githubLink ? 'Live Demo' : 'Visit Website'}
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectItem({
  project,
  onOpenModal,
  navigate,
}: {
  project: Project;
  onOpenModal: (p: Project) => void;
  navigate: (path: string) => void;
}) {
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverDetails, setHoverDetails] = useState(false);

  // Calculate how many tech tags fit on one line (show max 3, rest as +N)
  const MAX_VISIBLE_TAGS = 3;
  const visibleTags = project.tech.slice(0, MAX_VISIBLE_TAGS);
  const extraCount = project.tech.length - MAX_VISIBLE_TAGS;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group h-full"
    >
      {/* h-full so the grid's align-items:stretch makes equal-height cards */}
      <div className="h-full rounded-3xl border border-gray/10 overflow-hidden transition-all duration-500 flex flex-col">
        {/* Thumbnail — fixed height */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '240px' }}>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Card Body — flex-col, space-between so button always sits at bottom */}
        <div
          className="flex flex-col flex-grow p-6"
          style={{ backgroundColor: '#AEDEFC', color: '#111' }}
        >
          {/* Date */}
          <div className="flex items-center gap-2 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.date}</span>
          </div>

          {/* Title — always exactly 2 lines tall */}
          <h3
            className="font-bold text-black group-hover:text-blue-600 transition-colors duration-300 mb-3"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.4',
              minHeight: '3.08em',   /* 2 lines × 1.4 line-height */
              maxHeight: '3.08em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.title}
          </h3>

          {/* Tech Tags — single row, max 3 visible + +N overflow badge */}
          <div
            className="mb-4"
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: '6px',
              overflow: 'hidden',
              height: '28px',         /* fixed single-line height */
              alignItems: 'center',
            }}
          >
            {visibleTags.map((t) => (
              <span
                key={t}
                style={{
                  flexShrink: 0,
                  fontSize: '0.7rem',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.85)',
                  color: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.6)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                {t}
              </span>
            ))}
            {extraCount > 0 && (
              <span
                style={{
                  flexShrink: 0,
                  fontSize: '0.7rem',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.5)',
                  color: '#0f172a',
                  border: '1px solid rgba(255,255,255,0.4)',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                +{extraCount} more
              </span>
            )}
          </div>

          {/* Description — max 2 lines, full text only in modal */}
          <p
            style={{
              fontSize: '0.875rem',
              color: '#1e293b',
              lineHeight: '1.5',
              minHeight: '3em',   /* 2 lines × 1.5 line-height */
              maxHeight: '3em',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              marginBottom: '20px',
            }}
          >
            {project.description}
          </p>

          {/* Spacer — pushes buttons to bottom */}
          <div style={{ flex: 1 }} />

          {/* Action buttons — always pinned at the bottom */}
          <div className="flex gap-3">
            {/* CONTACT */}
            <button
              onClick={() => navigate('/contact')}
              onMouseEnter={() => setHoverContact(true)}
              onMouseLeave={() => setHoverContact(false)}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: hoverContact
                  ? "linear-gradient(90deg, #2563eb, #0ea5e9)"
                  : "#0f172a",
                color: "#ffffff",
                transform: hoverContact ? "scale(1.06)" : "scale(1)",
                boxShadow: hoverContact
                  ? "0 12px 25px rgba(37,99,235,0.45)"
                  : "0 4px 10px rgba(0,0,0,0.25)"
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </button>

            {/* DETAILS → Opens Modal */}
            <button
              onClick={() => onOpenModal(project)}
              onMouseEnter={() => setHoverDetails(true)}
              onMouseLeave={() => setHoverDetails(false)}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border"
              style={{
                background: hoverDetails
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.35)",
                color: "#0f172a",
                borderColor: hoverDetails
                  ? "rgba(255,255,255,1)"
                  : "rgba(255,255,255,0.6)",
                backdropFilter: "blur(6px)",
                transform: hoverDetails ? "scale(1.06)" : "scale(1)",
                boxShadow: hoverDetails
                  ? "0 10px 22px rgba(0,0,0,0.25)"
                  : "none"
              }}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export function ProjectsNew() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('all');
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = activeService === 'all'
    ? projects
    : projects.filter((p) => p.service === activeService);

  const handleOpenModal = useCallback((p: Project) => setModalProject(p), []);
  const handleCloseModal = useCallback(() => setModalProject(null), []);

  return (
    <div className="min-h-screen bg-[var(--background)] isolate">

      {/* ── HERO SECTION ── */}
      <section className="relative px-4 overflow-hidden isolate" style={{ height: '70vh', minHeight: '600px' }}>
        <div className="absolute inset-0 z-0" style={{ background: `linear-gradient(170deg,#f7fcff 0%,#d1e2f5 25%,#0F172A 45%,#1E3A8A 75%,#2563EB 100%)` }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(circle at 10% 20%, rgba(59,130,246,0.25), transparent 75%)' }} />
        <div className="absolute inset-0 z-[2]" style={{ background: 'radial-gradient(circle at 70% 50%, rgba(37,99,235,0.25), transparent 55%)' }} />

        <div className="max-w-7xl mx-auto relative z-10 text-center h-full flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
            We Build Production-Ready Software, Not Just Demos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From AI automation and trading systems to scalable web and mobile platforms — we design, engineer, and deploy solutions that businesses actually run on every day.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              onMouseEnter={() => setHoverPrimary(true)}
              onMouseLeave={() => setHoverPrimary(false)}
              className="px-8 py-4 rounded-xl text-black font-semibold text-lg transition-all duration-300"
              style={{
                background: hoverPrimary
                  ? "linear-gradient(90deg, #2563eb, #06b6d4)"
                  : "linear-gradient(90deg, #3b82f6, #22d3ee)",
                transform: hoverPrimary ? "scale(1.07)" : "scale(1)",
                boxShadow: hoverPrimary
                  ? "0 20px 40px rgba(59,130,246,0.45)"
                  : "0 10px 25px rgba(0,0,0,0.25)"
              }}
            >
              Contact Page
            </button>

            <button
              onClick={() => navigate('/contact')}
              onMouseEnter={() => setHoverSecondary(true)}
              onMouseLeave={() => setHoverSecondary(false)}
              className="px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-300 border-2"
              style={{
                background: hoverSecondary
                  ? "rgba(255,255,255,0.18)"
                  : "rgba(255,255,255,0.08)",
                borderColor: hoverSecondary
                  ? "rgba(255,255,255,0.55)"
                  : "rgba(255,255,255,0.30)",
                backdropFilter: "blur(8px)",
                transform: hoverSecondary ? "scale(1.07)" : "scale(1)",
                boxShadow: hoverSecondary
                  ? "0 15px 35px rgba(255,255,255,0.25)"
                  : "none"
              }}
            >
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="py-20 px-6 isolate" style={{ backgroundColor: '#F2F9FF' }}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center mb-8 tracking-tight">Projects</h1>
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {services.map((service) => (
              <button
                key={service.key}
                onClick={() => setActiveService(service.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeService === service.key
                    ? 'border-white shadow-lg shadow-blue-300 bg-[var(--switch-background)]'
                    : 'text-gray-500 border-black/5 hover:bg-white/10'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onOpenModal={handleOpenModal}
                  navigate={navigate}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="relative py-32 px-4 text-center overflow-hidden isolate rounded-3xl" style={{ backgroundColor: '#F6E7BC' }}>
        <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(circle at 10% 40%, rgba(56, 189, 248, 0.5), transparent 90%)' }} />
        <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(circle at 40% 60%, rgba(27, 161, 191, 0.5), transparent 90%)' }} />
        <div className="absolute inset-0 z-[2]" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(68, 27, 191, 0.5), transparent 90%)' }} />

        <div className="max-w-4xl mx-auto relative z-10" style={{ isolation: 'isolate' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's transform your vision into reality. Get in touch with us today.
          </p>
          <motion.button
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-7 rounded-2xl font-bold text-xl overflow-hidden isolate shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
              color: 'white',
              boxShadow: '0 20px 40px -10px rgba(30, 58, 138, 0.45)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <span className="relative flex items-center justify-center gap-3">
              Start a Conversation
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Mail className="w-6 h-6" />
              </motion.span>
            </span>
            <style>
              {`
                @keyframes shine {
                  0% { left: -100%; top: -100%; }
                  100% { left: 100%; top: 100%; }
                }
                .shine-effect { animation: shine 3s infinite; }
              `}
            </style>
            <div className="shine-effect absolute h-[200%] w-[100px] bg-white/20 blur-md transform -skew-x-12 -z-[5]" style={{ pointerEvents: 'none' }} />
          </motion.button>
        </div>
      </section>

      {/* ── MODAL (portal-like, rendered at end of tree) ── */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal project={modalProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
