import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

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
              <Button
                className="group relative overflow-hidden gradient-primary text-white px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(0,198,255,0.4)] transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue-end)] to-[var(--accent-blue-start)]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              <Button
                variant="outline"
                className="px-10 py-7 rounded-3xl text-lg border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Watch Demo
              </Button>
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
            className="relative w-[180px] h-[180px] md:w-[240px] md:h-[240px]   lg:w-[300px] lg:h-[300px] pt-50"
          >
            {/* Main Video Card */}
            <motion.div
              className="relative w-[200px] h-[200px] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.15)] glow-effect-hover transition-all duration-500"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <video
                src="https://res.cloudinary.com/dyxjqw88z/video/upload/v1769236180/Scene_2_bnd2px.mov"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover block"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-blue-end)]/40 via-transparent to-[var(--highlight-yellow)]/20" /> */}
              
              {/* Floating Info Cards */}
              {/* <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-8 left-8 glass-card rounded-2xl p-4 backdrop-blur-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Tech Processing</div>
                    <div className="text-lg text-[var(--navy)]">Active</div>
                  </div>
                </div>
              </motion.div> */}

              {/* <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 right-8 glass-card rounded-2xl p-4 backdrop-blur-xl shadow-xl"
              >
                <div className="text-sm text-gray-600 mb-1">Success Rate</div>
                <div className="flex items-baseline gap-1">
                  <div className="text-3xl gradient-text">95.5+</div>
                  <div className="text-lg text-gray-600">%</div>
                </div>
              </motion.div> */}
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
