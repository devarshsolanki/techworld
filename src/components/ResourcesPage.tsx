import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";


/* ================= SERVICES ================= */
const services = [
  { key: "algo", label: "Algo Trading", gradient: "" },
  { key: "web", label: "Web Development", gradient: "" },
  { key: "app", label: "App Development", gradient: "" },
  { key: "ai", label: "AI Automation", gradient: "" },
  { key: "data", label: "Data Visualization", gradient: "" },
  { key: "software", label: "Software Development", gradient: "" },
];

/* ================= PROJECTS ================= */
const projects = [
  {
    id: 1,
    title: "High Frequency Trading Bot",
    description: "Automated trading with real-time execution.",
    service: "algo",
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200",
    year: "2024",
    tech: ["Python", "FastAPI", "Redis"]
  },
  {
    id: 2,
    title: "Crypto Arbitrage Engine",
    description: "Multi-exchange profit automation system.",
    service: "algo",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200",
    year: "2024",
    tech: ["Node.js", "WebSocket", "MongoDB"]
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Enterprise responsive website.",
    service: "web",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    year: "2023",
    tech: ["React", "Next.js", "Tailwind"]
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Scalable shopping platform.",
    service: "web",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200",
    year: "2024",
    tech: ["TypeScript", "Stripe", "PostgreSQL"]
  },
  {
    id: 5,
    title: "Food Delivery App",
    description: "Android & iOS delivery app.",
    service: "app",
    image: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=1200",
    year: "2024",
    tech: ["React Native", "Firebase", "Maps API"]
  },
  {
    id: 6,
    title: "AI Chatbot Automation",
    description: "NLP based support automation.",
    service: "ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    year: "2024",
    tech: ["Python", "OpenAI", "LangChain"]
  },
  {
    id: 7,
    title: "Sales Analytics Dashboard",
    description: "Interactive data visualization.",
    service: "data",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    year: "2023",
    tech: ["D3.js", "React", "Chart.js"]
  },
  {
    id: 8,
    title: "ERP Management System",
    description: "Enterprise custom software.",
    service: "software",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200",
    year: "2024",
    tech: ["Java", "Spring", "Oracle"]
  },
];

export function ResourcesPage() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState("algo");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayCount, setDisplayCount] = useState(6);
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const filteredProjects = projects.filter(
    (p) =>
      p.service === activeService &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeServiceData = services.find(s => s.key === activeService);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-slate-900 to-[#1a1a2e] relative overflow-hidden">
      
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-20 pointer-events-none bg-black rounded-full pointer-events-none z-50 mix-blend-difference/50 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-50">
        <div className="absolute inset-2" 
          style={{
            backgroundImage: `
              linear-gradient(to right, #000000 1px, transparent 1px),
              linear-gradient(to bottom, #ff0000 1px, transparent 1px),
            `,          
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 -left-1/4 w-[700px] h-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: `linear-gradient(135deg, #03e2ff, #006a74)` }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px]"
          style={{ background: `linear-gradient(135deg, #ec4899, #f97316)` }}
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        className="relative pt-12 sm:pt-24 lg:pt-40 pb-8 sm:pb-20 lg:pb-32 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-black/5 backdrop-blur-xl border border-white/10 text-black/80 mb-8"
          >
              <video
                src="https://res.cloudinary.com/dyxjqw88z/video/upload/v1769773381/resorces_tmynar.mov"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover "
              />
            {/* <Sparkles className="w-5 h-20" /> */}
            {/* <span className="text-sm font-medium tracking-wide">PORTFOLIO SHOWCASE</span> */}
          </motion.div>



          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto relative group"
          >
          
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span> */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-black/40 to-transparent"
          />
        </motion.div>
      </motion.section>

      {/* ================= SERVICE FILTERS ================= */}
      <section className="relative py-12 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blue-900 to-transparent">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-18"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-black mb-4">Browse by Expertise</h2>
            {/* <p className="text-white/60 text-lg">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} in {activeServiceData?.label}
            </p> */}
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16 md:mb-20">
            {services.map((service, index) => {
              const isActive = activeService === service.key;
              return (
                <motion.button
                  key={service.key}
                  onClick={() => setActiveService(service.key)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBg"
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative block px-4 sm:px-6 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base lg:text-lg font-semibold transition-all ${
                    isActive 
                      ? 'text-black bg-white/90 border border-white/80 shadow-lg' 
                      : 'text-black/80 hover:text-black bg-white/10 hover:bg-white/90 border border-white/10 hover:border-white/60 bg-black/10 hover:bg-white/10 border border-white/10'
                  }`}>
                    {service.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* ================= PROJECTS GRID ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, index) => {
                const serviceData = services.find(s => s.key === project.service);
                const isHovered = hoveredProject === project.id;
                
                if (index >= displayCount) return null;
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute -inset-4 bg-gradient-to-r ${serviceData?.gradient} rounded-3xl opacity-0 blur-2xl transition-opacity duration-500`}
                      animate={{ opacity: isHovered ? 0.3 : 0 }}
                    />

 <Card className="relative overflow-hidden bg-gradient-to-br from-slate-700 to-slate-600 backdrop-blur-xl border border-slate-500 rounded-3xl h-full transition-all duration-500 hover:from-slate-900 hover:to-slate-800 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20">
  {/* Image */}
  <div className="relative h-48 sm:h-56 md:h-72 overflow-hidden">
    <motion.img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-700 via-slate-700/30 to-transparent opacity-80" />
    
    {/* Year Badge */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className="absolute top-6 left-6"
    >
      <span className="px-4 py-2 rounded-full bg-slate-600/90 backdrop-blur-xl border border-slate-500 text-white text-sm font-medium shadow-lg">
        {project.year}
      </span>
    </motion.div>

    {/* Category Badge */}
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      className="absolute top-6 right-6"
    >
      <Badge className={`px-4 py-2 rounded-full bg-gradient-to-r ${serviceData?.gradient} text-black text-sm font-medium border-0 shadow-xl`}>
        {serviceData?.label}
      </Badge>
    </motion.div>

    {/* Hover Overlay */}
    <motion.div
      className="absolute inset-4 bg-gradient-to-t from-blue-50 to-blue-100 rounded-2xl pointer-events-none"
      animate={{ opacity: isHovered ? 0.5 : 0 }}
      transition={{ duration: 0.3 }}
    />
  </div>

  {/* Content */}
  <div className="p-8 space-y-6">
    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <motion.span
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + i * 0.05 }}
          className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-600 border border-slate-500 hover:border-blue-500 hover:bg-slate-700 text-gray-100 hover:text-blue-400 transition-all duration-300"
        >
          {tech}
        </motion.span>
      ))}
    </div>

    {/* Title */}
   <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-all duration-300">
{project.title}
</h3>

    {/* Description */}
    <p className="text-gray-300 leading-relaxed text-base">
      {project.description}
    </p>

    {/* CTA */}
    <div className="flex items-center justify-between pt-4 border-t border-slate-500">
      <Button
        variant="ghost"
        onClick={() => navigate("/contact")}
        className="text-gray-400 hover:text-white transition-all duration-300 text-base font-semibold"
      >
        Contact Us
        <motion.div
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.div>
      </Button>

      <motion.div
        className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-500 backdrop-blur flex items-center justify-center border border-slate-500 group-hover:border-blue-500 group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-slate-800 cursor-pointer transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 45 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-all duration-300" />
      </motion.div>
    </div>
  </div>
</Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Show More Button */}
          {filteredProjects.length > displayCount && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center mt-12 sm:mt-16"
            >
              <Button
                onClick={() => setDisplayCount(displayCount + 6)}
                className="px-10 py-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-bold shadow-xl"
              >
                Show More Projects
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8">
                <Search className="w-12 h-12 text-white/50" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">No Projects Found</h3>
              <p className="text-white/50 text-lg mb-8">Try adjusting your search or explore other categories</p>
              <Button
                onClick={() => setSearchQuery("")}
                className="px-8 py-6 rounded-2xl bg-black/10 hover:bg-black/20 text-black border border-black/20"
              >
                Clear Search
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blue-950/30 via-purple-950/30 to-transparent w-full">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-16 text-center mx-auto"
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 opacity-95" />
            
            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
                animate={{ 
                  backgroundPosition: ['0px 0px', '40px 40px'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2 sm:py-3 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-xl border border-black/30 text-black mb-6 sm:mb-8"
              >
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="font-semibold text-sm sm:text-base">Let's Create Together</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Ready to Build Something
                <br />
                Extraordinary?
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-black/90 max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
                Transform your vision into reality with our expertise. Let's discuss your next groundbreaking project.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => navigate("/contact")}
                  className="px-8 sm:px-10 py-5 sm:py-7 rounded-2xl bg-white text-black hover:bg-white/90 text-sm sm:text-lg font-bold shadow-2xl group"
                >
                  Start Your Project
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="" />
    </div>
  );
}