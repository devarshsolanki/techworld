import { Target, Users, Heart, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const leaders = [
  {
    name: 'Param Acharya',
    role: 'Frontend Developer',
    bio: 'Former AI Research Lead at Stanford, 15+ years in machine learning and enterprise AI.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
    accent: '#3b82f6',
  },
  {
    name: 'Tej Gohel',
    role: 'Algo Trading Bots Developer',
    bio: 'Pioneer in neural architecture design with multiple patents in deep learning systems.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
    accent: '#8b5cf6',
  },
  {
    name: 'Devarsh Solanki',
    role: 'Backend Developer',
    bio: 'Award-winning designer focused on creating human-centered AI experiences.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
    accent: '#6366f1',
  },
  {
    name: 'Dhruvit Loliyaniya',
    role: 'AI Automation Engineer',
    bio: 'Leading our commitment to responsible AI development and deployment.',
    image: 'https://i.pinimg.com/736x/fd/e0/05/fde005003e6ecd6ca3e7b8886da6e6d7.jpg',
    accent: '#a855f7',
  },
];

const values = [
  {
    icon: Target,
    title: 'Quality Driven',
    description: 'We deliver reliable, efficient, and high-quality technology solutions.',
    iconBg: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    borderTop: '#3b82f6',
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'We design solutions that address real business needs and create lasting impact.',
    iconBg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    borderTop: '#8b5cf6',
  },
  {
    icon: Heart,
    title: 'Integrity & Transparency',
    description: 'Honesty, clarity, and accountability are central to all we do.',
    iconBg: 'linear-gradient(135deg, #f43f5e, #e11d48)',
    borderTop: '#f43f5e',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We adhere to industry-standard security practices to protect systems and data.',
    iconBg: 'linear-gradient(135deg, #10b981, #059669)',
    borderTop: '#10b981',
  },
];



export function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════
          HERO — Building the Future of Technology
      ══════════════════════════════════════════ */}
      <section
        className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #ffffffff 0%, #5da7e4ff 50%, #bfe0ffff 100%)' }}
      >
        {/* Glow blobs */}
        <div
          className="absolute top-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase rounded-full px-5 py-2 mb-8"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#c7d2fe' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse inline-block" />
              About TechWorld
            </div>

            <h1 className="font-extrabold mb-6 leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Building the Future of
              <br />
              Advance Technology

            </h1>

            {/* <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#94a3b8' }}>
              We aim to make modern technology solutions accessible and effective for businesses of all sizes.
            </p> */}
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0,70 L1450,70 L1440,25 C1080,70 720,0 360,30 C240,40 120,60 0,25 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(237,233,254,0.6) 0%, transparent 70%)', filter: 'blur(40px)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="order-first lg:order-last"
            >
              <div className="relative">
                <div
                  className="absolute -top-3 -right-3 w-full h-full rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', opacity: 0.15 }}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ border: '1px solid #e2e8f0' }}>
                  <ImageWithFallback
                    src="https://res.cloudinary.com/dyxjqw88z/image/upload/v1772800381/about-us-support-help-ask-question-concept_sae5gu.jpg"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                  {/* Badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                    // className="rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl"
                    // style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)' }}
                    >
                      <div
                      // className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      // style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                      >
                        {/* <CheckCircle2 className="w-5 h-5 text-white" /> */}
                      </div>
                      <div>
                        {/* <p className="text-xs font-bold text-gray-900">Since 2022</p> */}
                        {/* <p className="text-xs text-gray-500">Delivering reliable digital solutions</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-last lg:order-first"
            >
              {/* <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5"
                style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                Who We Are
              </span> */}

              <h2 className="font-extrabold text-gray-900 mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Our{' '}
                <span style={{ background: 'linear-gradient(90deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Story
                </span>
              </h2>

              <div className="space-y-4 mb-8" style={{ color: '#374151', fontSize: '15px', lineHeight: '1.75' }}>
                <p>
                  Our journey started with a strong background in technology after completing our BCA and B.Tech studies. We first launched <strong className="text-gray-900">CodexDigital</strong>, where we spent about a year providing digital solutions and gaining valuable experience while working with different clients.
                </p>
                <p>
                  As our skills and services expanded, we decided to start <strong className="text-gray-900">TechWorld IT Company</strong> to offer a wider range of solutions with even better quality and professionalism. Our goal is to build modern, reliable apps and websites that meet business needs while staying within our client's budgets.
                </p>
                <p>
                  At TechWorld, we focus on delivering the best quality services with strong support. Simply visit the Contact page and fill out the form — our team will connect with you within 24 hours.
                </p>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OUR VALUES
      ══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5"
              style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', color: '#6d28d9' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#7c3aed' }} />
              What Drives Us
            </span>
            <h2 className="font-extrabold text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Our{' '}
              <span style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="relative bg-white rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                  style={{
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; }}
                >
                  {/* top accent border */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: value.borderTop }} />

                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: value.iconBg }}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MEET OUR LEADERSHIP
      ══════════════════════════════════════════ */}
      {/* <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #a855f7)' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5 mb-5"
              style={{ background: '#eef2ff', border: '1px solid #c7d2fe', color: '#4338ca' }}
            >
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#4f46e5' }} />
              The People Behind TechWorld
            </span>
            <h2 className="font-extrabold text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Meet Our{' '}
              <span style={{ background: 'linear-gradient(90deg, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Leadership
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Experienced leaders driving innovation and ethical technology development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2"
                  style={{ border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.12), 0 0 0 2px ${leader.accent}`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; }}
                >
                  <div className="relative h-56 overflow-hidden" style={{ background: `linear-gradient(135deg, ${leader.accent}33, ${leader.accent}11)` }}>
                    <ImageWithFallback
                      src={leader.image}
                      alt={`${leader.name}, ${leader.role}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${leader.accent}, transparent)` }} />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-xs font-semibold mb-3" style={{ color: leader.accent }}>{leader.role}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{leader.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════════
          QUALITY, SECURITY & RELIABILITY
      ══════════════════════════════════════════ */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #0f172a 100%)' }}
      >
        {/* Glow blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: '700px', height: '500px',
            background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            {/* Shield badge */}
            <div className="relative inline-flex mb-7">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{ background: 'rgba(251,191,36,0.3)', filter: 'blur(18px)', transform: 'scale(2.2)' }}
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
              >
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2
              className="font-extrabold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            >
              Quality, Security{' '}
              <span style={{ color: '#fbbf24' }}>&amp; Reliability</span>
            </h2>
            <p
              className="text-base max-w-3xl mx-auto leading-relaxed"
              style={{ fontSize: 'clamp(1rem, 2vw, 0.5rem)', color: '#94a3b8' }}
            >
              Every solution we deliver follows industry best practices, secure development
              standards, and a commitment to long-term reliability for our clients.
            </p>
          </motion.div>

          Three equal square cards — fixed 300×300
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '70px'
            }}
          >
            {[
              {
                icon: <Shield style={{ width: 32, height: 32, color: '#60a5fa' }} />,
                value: '100%',
                title: 'Secure Development Standards',
                sub: 'Every line of code follows strict security protocols.',
                accent: '#60a5fa',
                glow: 'rgba(96,165,250,0.18)',
                delay: 0.1,
              },
              {
                icon: <Target style={{ width: 32, height: 32, color: '#a78bfa' }} />,
                value: 'Zero',
                title: 'Compromise on Quality',
                sub: 'We never cut corners — precision in every delivery.',
                accent: '#a78bfa',
                glow: 'rgba(167,139,250,0.18)',
                delay: 0.2,
              },
              {
                icon: <Zap style={{ width: 32, height: 32, color: '#34d399' }} />,
                value: '24/7',
                title: 'System Support & Monitoring',
                sub: 'Round-the-clock availability for all our clients.',
                accent: '#34d399',
                glow: 'rgba(52,211,153,0.18)',
                delay: 0.3,
              },
            ].map((card) => (
              <motion.div
                key={card.value}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: card.delay }}
                viewport={{ once: true }}
                /* Fixed 300×300 square — same for all three */
                style={{
                  width: '300px',
                  height: '300px',
                  flexShrink: 0,
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.06)',
                  border: `1.5px solid ${card.accent}40`,
                  boxShadow: `inset 0 0 50px ${card.glow}`,
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '32px 24px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                whileHover={{ y: -8 }}
              >
                {/* Top accent line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    borderRadius: '20px 20px 0 0',
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                  }}
                />

                {/* Icon bubble */}
                <div
                  style={{
                    width: 60, height: 60,
                    borderRadius: '16px',
                    background: `${card.accent}18`,
                    border: `1.5px solid ${card.accent}50`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                  }}
                >
                  {card.icon}
                </div>

                {/* Stat value */}
                <div
                  style={{
                    fontSize: '2.75rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: card.accent,
                    marginBottom: '10px',
                  }}
                >
                  {card.value}
                </div>

                {/* Title */}
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#f1f5f9',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </div>

                {/* Sub text */}
                <div style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
                  {card.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
