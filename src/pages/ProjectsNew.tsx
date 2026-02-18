// Merged project page: old visual shell + new project modules
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ExternalLink, Mail } from 'lucide-react';

/* ---------- DATA ---------- */
const services = [
  { key: 'all', label: 'All Projects' },
  { key: 'algo', label: 'Algo Trading' },
  { key: 'web', label: 'Web Development' },
  { key: 'app', label: 'App Development' },
  { key: 'ai', label: 'AI Automation' },
  { key: 'data', label: 'Data Visualization' },
  { key: 'software', label: 'Software Development' },
];

const projects = [
  {
  id: 1,
  title: "Tuli Enterprises Industrial Website",
  description: "Production-ready business website for a bolt manufacturing company featuring product catalog, inquiry system, SEO optimization, and responsive UI for real customers.",
  service: "web",
  image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200",
  date: "Aug 2025",
  tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
  projectLink: "https://tulienterprises.shop/"
},
  {
  id: 2,
  title: "Mahadev Grocery Full-Stack E-commerce System",
  description: "Complete MERN grocery e-commerce system featuring user accounts, wallet balance handling, order placement workflow, database persistence, and API-driven backend deployed on cloud infrastructure.",
  service: "web",
  image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200",
  date: "Jan 2026",
  tech: ["MongoDB", "Mongoose", "Express.js", "React", "Node.js", "REST API", "Render"],
  projectLink: "https://mahadevgrocery.vercel.app/"
},
  {
  id: 3,
  title: "Kyraa Jewelz E-commerce Platform",
  description: "Full-stack MERN jewellery e-commerce platform with product catalog, cart management, order workflow, and responsive UI optimized for customer browsing and purchasing.",
  service: "web",
  image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200",
  date: "Dec 2025",
  tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
  projectLink: "https://kyraajewelz.vercel.app/"
},
  {
    id: 4,
    title: "Global E-Commerce Platform",
    description: "Scalable multi-vendor marketplace with secure payment gateways.",
    service: "web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200",
    date: "Apr 2024",
    tech: ["TypeScript", "Stripe", "PostgreSQL"],
    projectLink: "https://github.com",
    likes: 678,
    applause: 423
  },
  {
    id: 5,
    title: "On-Demand Food Delivery",
    description: "Feature-rich mobile application for food ordering and tracking.",
    service: "app",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv6E5QiPZYZbTpopn0eSjxbR7XYsR8q7nflw&s",
    date: "May 2024",
    tech: ["React Native", "Firebase", "Maps API"],
    projectLink: "https://github.com",
    likes: 445,
    applause: 267
  },
  {
    id: 6,
    title: "AI Customer Support Bot",
    description: "Intelligent chatbot reducing support ticket volume by 60%.",
    service: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    date: "Jun 2024",
    tech: ["Python", "OpenAI", "LangChain"],
    projectLink: "https://github.com",
    likes: 892,
    applause: 543
  },
  {
    id: 7,
    title: "Sales Analytics Dashboard",
    description: "Interactive data visualization platform for executive decision making.",
    service: "data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    date: "Dec 2023",
    tech: ["D3.js", "React", "Chart.js"],
    projectLink: "https://github.com",
    likes: 365,
    applause: 198
  },
  {
    id: 8,
    title: "Enterprise ERP System",
    description: "Comprehensive resource planning software for manufacturing.",
    service: "software",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200",
    date: "Jul 2024",
    tech: ["Java", "Spring", "Oracle"],
    projectLink: "https://github.com",
    likes: 456,
    applause: 289
  },
];

function ProjectItem({ project, navigate }: { project: any; navigate: any }) {
  const [hoverContact, setHoverContact] = useState(false);
  const [hoverDetails, setHoverDetails] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group"
    >
      <div className="h-full rounded-3xl border border-gray/10 overflow-hidden transition-all duration-500 flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-grow" style={{ backgroundColor: '#AEDEFC', color: '#111' }}>
          <div className="flex items-center gap-2 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.date}</span>
          </div>

          <h3 className="text-xl font-bold mb-3 text-black group-hover:text-blue-400">
            {project.title}
          </h3>

          <p className="text-black text-sm mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t: string) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-white text-black border border-white/60">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
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

            {/* DETAILS */}
            <button
              onClick={() => window.open(project.projectLink, '_blank')}
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
              <ExternalLink className="w-4 h-4 mr-2" />
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsNew() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('all');
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);

  const filteredProjects = activeService === 'all'
    ? projects
    : projects.filter((p) => p.service === activeService);

  return (
    <div className="min-h-screen bg-[var(--background)] isolate">

      {/* HERO SECTION - Enhanced */}
     <section className="relative px-4 overflow-hidden isolate" style={{ height: '70vh', minHeight: '600px' }}>
      <div className="absolute inset-0 z-0" style={{background: `linear-gradient(135deg,#020617 0%,#0B1220 25%,#0F172A 45%,#1E3A8A 75%,#2563EB 100%`}}/>
      <div className="absolute inset-0 z-[1]" style={{background:'radial-gradient(circle at 30% 50%, rgba(59,130,246,0.25), transparent 55%)'}}/>
      <div className="absolute inset-0 z-[2]" style={{background:'radial-gradient(circle at 70% 50%, rgba(37,99,235,0.25), transparent 55%)'}}/>

        <div className="max-w-7xl mx-auto relative z-10 text-center h-full flex flex-col justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
            We Build Production-Ready Software, Not Just Demos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            From AI automation and trading systems to scalable web and mobile platforms — we design, engineer, and deploy solutions that businesses actually run on every day.
          </p>
          
          {/* Hero Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">

      {/* PRIMARY BUTTON */}
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

      {/* SECONDARY BUTTON */}
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

      {/* NEW PROJECT MODULE (inserted into old theme) */}
      <section className="py-20 px-6  isolate"  style={{ backgroundColor: '#F2F9FF' }}>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center mb-8 tracking-tight ">Projects</h1>
        <div className="max-w-7xl mx-auto">

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 ">
            {services.map((service) => (
              <button
                key={service.key}
                onClick={() => setActiveService(service.key)}
                className={`px-6 py-2.5  rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeService === service.key
                    ? 'border-white shadow-lg shadow-blue-300/50 bg-[var(--switch-background)]'
                    : 'text-gray-500 border-white/10 hover:bg-white/10'
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectItem key={project.id} project={project} navigate={navigate} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION - Enhanced with Strong Gradient */}
      <section className="relative py-32 px-4 text-center overflow-hidden isolate rounded-3xl " style={{ backgroundColor: '#F6E7BC' }}>
        {/* Attractive gradient background - Using inline styles and CSS custom properties for maximum specificity */}
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
            {/* Animated background glow */}
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

            {/* Premium Shine Effect */}
            <style>
              {`
                @keyframes shine {
                  0% { left: -100%; top: -100%; }
                  100% { left: 100%; top: 100%; }
                }
                .shine-effect {
                  animation: shine 3s infinite;
                }
              `}
            </style>
            <div className="shine-effect absolute h-[200%] w-[100px] bg-white/20 blur-md transform -skew-x-12 -z-[5]" style={{ pointerEvents: 'none' }} />
          </motion.button>

        </div>
      </section>

    </div>
  );
}