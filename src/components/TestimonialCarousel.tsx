import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechCorp',
    content: 'NeuralAI transformed our data analytics capabilities. The insights we gain have directly contributed to a 40% increase in operational efficiency.',
    rating: 5,
    company: 'TechCorp',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
  {
    name: 'Michael Rodriguez',
    role: 'VP of Operations, GlobalRetail',
    content: 'The implementation was seamless, and the AI-driven automation has saved us countless hours. Our team can now focus on strategic initiatives.',
    rating: 5,
    company: 'GlobalRetail',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Innovation, FinanceHub',
    content: 'What impressed us most was the human-centered approach. The AI feels like an extension of our team, not a replacement.',
    rating: 4,
    company: 'FinanceHub',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
];

export function TestimonialCarousel() {
   return (
    <section className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 sm:mb-16 lg:mb-24">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-[#ffffff] to-[#e8f2ff]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[var(--accent-blue-start)]/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[var(--accent-blue-end)]/15 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-[#06b6d4]/10 to-transparent rounded-full blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(100,150,200,0.03)_1px,transparent_1px),linear-gradient(rgba(100,150,200,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/15 to-[var(--accent-blue-end)]/15 text-xs sm:text-sm font-semibold text-[var(--accent-blue-end)] border border-[var(--accent-blue-start)]/30 backdrop-blur-sm">
              ⭐ Client Testimonials
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--navy)] mb-6 sm:mb-8 tracking-tight font-bold leading-tight"
          >
            Trusted by Industry <span className="gradient-text">Leaders</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            See how leading companies transform their operations with our innovative IT solutions and expert guidance
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full group"
            >
              <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[var(--accent-blue-start)]/40 flex flex-col">
                {/* Gradient top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-blue-start)] via-[var(--accent-blue-end)] to-transparent" />
                
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue-start)]/0 via-transparent to-[var(--accent-blue-end)]/0 group-hover:from-[var(--accent-blue-start)]/5 group-hover:to-[var(--accent-blue-end)]/5 transition-all duration-500" />

                {/* Content container */}
                <div className="relative p-6 sm:p-7 lg:p-8 flex flex-col h-full">
                  {/* Rating Stars */}
                  <div className="flex gap-1.5 mb-4 sm:mb-4">
                    {[...Array(5)].map((_, i) => {
                      const filled = i < testimonial.rating;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: (index * 0.15) + (i * 0.08) }}
                          viewport={{ once: true }}
                        >
                          <Star
                            className="w-5 sm:w-5 h-5 sm:h-5 drop-shadow-md"
                            fill={filled ? "#facc15" : "none"}
                            stroke={filled ? "#facc15" : "#d1d5db"}
                          />
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Quote text with professional styling */}
                  <blockquote className="text-sm sm:text-base leading-relaxed text-gray-700 flex-grow mb-6 sm:mb-6">
                    <p className="relative z-10">{testimonial.content}</p>
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-gray-200 via-gray-200 to-transparent mb-4 sm:mb-5" />

                  {/* Author Info */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.div
                      className="relative w-12 sm:w-14 h-12 sm:h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-yellow-300/50 shadow-md group-hover:ring-yellow-400/70 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[var(--navy)] truncate leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-600 truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs font-semibold text-[var(--accent-blue-end)]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
