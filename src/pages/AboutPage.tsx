import React from 'react';
import { Target, Users, Heart, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const leaders = [
  {
    name: 'Param Acharya',
    role: 'Chief Executive Officer',
    bio: 'Former AI Research Lead at Stanford, 15+ years in machine learning and enterprise AI.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
  {
    name: 'Tej Gohel',
    role: 'Chief Technology Officer',
    bio: 'Pioneer in neural architecture design with multiple patents in deep learning systems.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
  {
    name: 'Devarsh Solanki',
    role: 'VP of Product & Design',
    bio: 'Award-winning designer focused on creating human-centered AI experiences.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
  {
    name: 'Dhruvit loliyaniya',
    role: 'Head of AI Ethics',
    bio: 'Leading our commitment to responsible AI development and deployment.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
  },
];

const values = [
  {
    icon: Target,
    title: 'Quality Driven',
    description: 'We deliver reliable, efficient, and high-quality technology solutions.',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We design solutions that address real business needs and create lasting impact.',
  },
  {
    icon: Heart,
    title: 'Integrity & Transparency',
    description: 'Honesty, clarity, and accountability are central to all we do.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We adhere to industry-standard security practices to protect systems and data.',
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, #8b5cf6 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--neutral-light)] to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/10 to-purple-100/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 font-bold">
              Building the Future of Advanced <span className="gradient-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We aim to make modern technology solutions accessible and effective for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative order-first lg:order-last"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-shadow duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655746340587-9d1aaad92b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjE4Mjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration in modern office workspace"
                  className="w-full h-auto hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-last lg:order-first"
            >
              <h2 className="text-3xl text-[var(--navy)] mb-6 font-semibold">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Founded in 2020 by a team of AI researchers and industry veterans, NeuralAI was born from a simple belief: artificial intelligence should be accessible, ethical, and genuinely useful.
                </p>
                <p className="leading-relaxed">
                  We've grown from a small research lab to a team of over 200 dedicated professionals, serving Fortune 500 companies and innovative startups alike. Our solutions have processed over 50 billion data points and helped our clients achieve measurable business outcomes.
                </p>
                <p className="leading-relaxed">
                  Today, we continue to push the boundaries of what's possible with AI while staying true to our core values of transparency, human-centeredness, and responsible innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[var(--navy)] mb-4 font-bold">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center border-2 border-gray-600 rounded-2xl p-2 group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[var(--navy)] mb-2 font-semibold">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--neutral-light)] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[var(--navy)] mb-4 font-bold">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experienced leaders driving AI innovation and ethical technology development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[var(--accent-blue-end)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[var(--accent-blue-start)] to-[var(--accent-blue-end)]">
                    <ImageWithFallback
                      src={leader.image}
                      alt={`${leader.name}, ${leader.role}`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-[var(--navy)] mb-1 font-semibold">{leader.name}</h3>
                    <p className="text-sm text-[var(--accent-blue-end)] mb-3 font-medium">{leader.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-[var(--highlight-yellow)] drop-shadow-lg" />
            <h2 className="text-3xl sm:text-4xl mb-6 font-bold">Quality, Security & Reliability</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We believe that strong technology is built on trust and quality. Every solution we deliver follows industry best practices, secure development standards, and a commitment to long-term reliability for our clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl gradient-text mb-2 font-bold">100%</div>
                <div className="text-gray-300 font-medium">Secure Development Standards</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl gradient-text mb-2 font-bold">Zero</div>
                <div className="text-gray-300 font-medium">Compromise on Quality</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl gradient-text mb-2 font-bold">24/7</div>
                <div className="text-gray-300 font-medium">System Support & Monitoring</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
