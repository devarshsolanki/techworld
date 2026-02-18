import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { hover, motion } from 'motion/react';

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 gradient-mesh">
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Animated Blobs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/30 to-[var(--accent-blue-end)]/30 blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[var(--highlight-yellow)]/20 to-[var(--accent-blue-end)]/20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10 pt-20 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-8 py-2.5 rounded-full glass-card shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-[var(--accent-blue-end)]" />
              </motion.div>
              <span className="text-sm font-medium bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">
                Innovative IT Services
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl leading-[1.1] tracking-tight"
            >
              <span className="text-[var(--navy)] block mb-2">Transform</span>
              <span className="text-[var(--navy)] block mb-2">Your Business</span>
              <span className="block">
                <span className="relative inline-block">
                  <span className="gradient-text">with Techworld</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] opacity-30 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Empower your business with smart digital solutions and AI automation, where innovation meets seamless technology.
            </motion.p>

           <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="flex flex-col sm:flex-row gap-4 pt-4"
>

  {/* PRIMARY CTA */}
  <motion.div
    whileHover="hover"
    whileTap={{ scale: 0.96 }}
    variants={{
      hover: { y: -4, scale: 1.06 }
    }}
    className="group relative rounded-3xl"
  >
    <Button
      onClick={() => navigate('/contact')}
      className="relative overflow-hidden px-10 py-7 rounded-3xl text-lg text-white"
      style={{
        background: "linear-gradient(135deg,#2563eb,#06b6d4)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.25)"
      }}
    >
      <span className="relative z-10 flex items-center transition-transform duration-300 group-hover:translate-x-1">
        Get Started
        <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
      </span>

      {/* shine sweep */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        variants={{ hover: { opacity: 1 } }}
        initial={{ opacity: 0 }}
      >
        <motion.span
          className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-xl rotate-12"
          variants={{ hover: { x: "220%" } }}
          transition={{ duration: 0.7 }}
        />
      </motion.span>
    </Button>
  </motion.div>


  {/* SECONDARY CTA */}
  <motion.div
    whileHover="hover"
    whileTap={{ scale: 0.96 }}
    variants={{ hover: { y: -3, scale: 1.05 } }}
    className="group relative rounded-3xl"
  >
    <Button
      variant="outline"
      className="relative overflow-hidden px-10 py-7 rounded-3xl text-lg border-2"
      style={{
        borderColor: "#3dbae0",
        color:"#111",
        backdropFilter: "blur(6px)",
        hover:{
          background: "linear-gradient(135deg,#2563eb,#06b6d4)",
        }
      }}
    >
      <span className="relative z-10  duration-300 ">
        Watch Demo
      </span>

      <motion.span
        className="absolute inset-0 bg-[#173bb1] origin-left"
        initial={{ scaleX: 0 }}
        variants={{ hover: { scaleX: 1 } }}
        transition={{ duration: 0.4 }}
      />
    </Button>
  </motion.div>

</motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-12"
            >
              {[
                { value: '95%', label: 'Reliable Performance' },
                { value: '90%+', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl" />
                  <div className="relative">
                    <div className="text-4xl xl:text-5xl gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - Bento Grid Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Video Card */}
            <motion.div
              className="relative w-[280px] h-[400px] sm:w-[350px] sm:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.2)] glow-effect-hover"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <video
                src="https://res.cloudinary.com/dyxjqw88z/video/upload/v1769236180/Scene_2_bnd2px.mov"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Orbs */}

            <motion.div
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 w-40 h-40 rounded-full gradient-primary opacity-20 blur-3xl"
            />
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                x: [0, -10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-20 -right-12 w-48 h-10 rounded-full bg-[var(--highlight-yellow)] opacity-40 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
