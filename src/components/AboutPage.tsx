import React from 'react';
import { Target, Users, Heart, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--neutral-light)] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6">
              Building the Future of Advanced <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We aim to make modern technology solutions accessible and effective for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl text-[var(--navy)] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020 by a team of AI researchers and industry veterans, NeuralAI was born from a simple belief: artificial intelligence should be accessible, ethical, and genuinely useful.
                </p>
                <p>
                  We've grown from a small research lab to a team of over 200 dedicated professionals, serving Fortune 500 companies and innovative startups alike. Our solutions have processed over 50 billion data points and helped our clients achieve measurable business outcomes.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible with AI while staying true to our core values of transparency, human-centeredness, and responsible innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1655746340587-9d1aaad92b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjE4Mjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration in modern office workspace"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[var(--navy)] mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-[var(--navy)] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--neutral-light)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-[var(--navy)] mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-[var(--accent-blue-end)] transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[var(--accent-blue-start)] to-[var(--accent-blue-end)]">
                    <ImageWithFallback
                      src={leader.image}
                      alt={`${leader.name}, ${leader.role}`}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-[var(--navy)] mb-1">{leader.name}</h3>
                    <p className="text-sm text-[var(--accent-blue-end)] mb-3">{leader.role}</p>
                    <p className="text-sm text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--navy)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6 text-[var(--highlight-yellow)]" />
            <h2 className="text-3xl sm:text-4xl mb-6">Quality, Security & Reliability</h2>
            <p className="text-xl text-gray-300 mb-8">
             We believe that strong technology is built on trust and quality. Every solution we deliver follows industry best practices, secure development standards, and a commitment to long-term reliability for our clients.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl gradient-text mb-2">100%</div>
                <div className="text-gray-300">Secure Development Standards</div>
              </div>
              <div>
                <div className="text-4xl gradient-text mb-2">Zero</div>
                <div className="text-gray-300">Compromise on Quality</div>
              </div>
              <div>
                <div className="text-4xl gradient-text mb-2">24/7</div>
                <div className="text-gray-300">System Support & Monitoring</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
