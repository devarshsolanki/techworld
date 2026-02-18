/**
 * Book Demo API Server
 * Handles booking submissions, expert management, and time-slot availability
 * 
 * To use this backend:
 * 1. Install dependencies: npm install express cors dotenv mongoose
 * 2. Create a .env file with DATABASE_URL and PORT
 * 3. Run this file: node server.js
 * 
 * Frontend API calls should point to: http://localhost:5000/api
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ==================== In-Memory Database (Mock) ====================
// In production, replace with actual MongoDB/PostgreSQL

let bookings = []; // Array to store bookings
let experts = {
  React: [
    {
      id: 'expert-1',
      name: 'Sarah Chen',
      title: 'Senior React Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
      bio: '8+ years building scalable React applications',
      technologies: ['React', 'TypeScript', 'Next.js'],
    },
    {
      id: 'expert-2',
      name: 'John Smith',
      title: 'React Architecture Specialist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
      bio: 'Expert in React performance optimization',
      technologies: ['React', 'Redux', 'Testing'],
    },
  ],
  'Next.js': [
    {
      id: 'expert-3',
      name: 'Emma Johnson',
      title: 'Full Stack Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emma',
      bio: 'Specializing in Next.js and modern web applications',
      technologies: ['Next.js', 'React', 'Node.js'],
    },
  ],
  'Node.js': [
    {
      id: 'expert-4',
      name: 'Michael Brown',
      title: 'Backend Engineer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
      bio: 'Building scalable backend systems with Node.js',
      technologies: ['Node.js', 'Express', 'MongoDB'],
    },
    {
      id: 'expert-5',
      name: 'Lisa Wang',
      title: 'DevOps & Backend Specialist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
      bio: 'Expert in Node.js microservices and deployment',
      technologies: ['Node.js', 'Docker', 'AWS'],
    },
  ],
  MERN: [
    {
      id: 'expert-6',
      name: 'Alex Rodriguez',
      title: 'Full Stack Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
      bio: 'Expert in complete MERN stack development',
      technologies: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js'],
    },
  ],
  Python: [
    {
      id: 'expert-7',
      name: 'David Kumar',
      title: 'Python Developer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
      bio: 'Specialized in Python web development and data science',
      technologies: ['Python', 'Django', 'FastAPI'],
    },
  ],
  'Machine Learning': [
    {
      id: 'expert-8',
      name: 'Priya Patel',
      title: 'ML Engineer',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      bio: 'Experienced in building ML models and AI solutions',
      technologies: ['Python', 'TensorFlow', 'Machine Learning'],
    },
  ],
};

// ==================== API Routes ====================

/**
 * GET /api/technologies
 * Get all available technologies
 */
app.get('/api/technologies', (req, res) => {
  const technologies = Object.keys(experts).sort();
  res.json({ data: technologies });
});

/**
 * GET /api/experts/:technology
 * Get experts for a specific technology
 * 
 * Params: technology (string)
 * Response: { data: Expert[] }
 */
app.get('/api/experts/:technology', (req, res) => {
  const { technology } = req.params;
  const expertList = experts[technology] || [];

  if (expertList.length === 0) {
    return res.status(404).json({
      error: `No experts found for technology: ${technology}`,
    });
  }

  res.json({ data: expertList });
});

/**
 * GET /api/time-slots/:expertId
 * Get available time slots for an expert
 * 
 * Params: expertId (string)
 * Query: startDate (optional, ISO format)
 * Response: { data: TimeSlot[] }
 */
app.get('/api/time-slots/:expertId', (req, res) => {
  const { expertId } = req.params;
  const { startDate } = req.query;

  const slots = generateTimeSlots(expertId, startDate);
  res.json({ data: slots });
});

/**
 * POST /api/bookings
 * Submit a new booking
 * 
 * Body: {
 *   fullName: string,
 *   email: string,
 *   phone: string,
 *   technology: string,
 *   expertId: string,
 *   preferredDate: string (ISO format),
 *   preferredTime: string (HH:MM format)
 * }
 * 
 * Response: {
 *   bookingId: string,
 *   fullName: string,
 *   email: string,
 *   technology: string,
 *   expertName: string,
 *   dateTime: string,
 *   message: string
 * }
 */
app.post('/api/bookings', (req, res) => {
  const { fullName, email, phone, technology, expertId, preferredDate, preferredTime } =
    req.body;

  // Validation
  if (!fullName || !email || !phone || !technology || !expertId || !preferredDate || !preferredTime) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email address',
    });
  }

  // Phone validation
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({
      error: 'Invalid phone number',
    });
  }

  // Find expert
  const expert = Object.values(experts)
    .flat()
    .find((e) => e.id === expertId);

  if (!expert) {
    return res.status(404).json({
      error: 'Expert not found',
    });
  }

  // Create booking
  const bookingId = `DEMO-${Date.now()}`;
  const booking = {
    bookingId,
    fullName,
    email,
    phone,
    technology,
    expertId,
    expertName: expert.name,
    preferredDate,
    preferredTime,
    createdAt: new Date().toISOString(),
    status: 'confirmed',
  };

  // Save booking (in-memory)
  bookings.push(booking);

  // Return confirmation
  res.status(201).json({
    bookingId: booking.bookingId,
    fullName: booking.fullName,
    email: booking.email,
    technology: booking.technology,
    expertName: booking.expertName,
    dateTime: `${booking.preferredDate} at ${booking.preferredTime}`,
    message: `Thank you for booking a demo! Your session with ${expert.name} is scheduled for ${booking.preferredDate} at ${booking.preferredTime}.`,
  });
});

/**
 * GET /api/bookings
 * Get all bookings (admin only, implement auth in production)
 */
app.get('/api/bookings', (req, res) => {
  res.json({ data: bookings });
});

/**
 * GET /api/bookings/:bookingId
 * Get booking details by ID
 */
app.get('/api/bookings/:bookingId', (req, res) => {
  const { bookingId } = req.params;
  const booking = bookings.find((b) => b.bookingId === bookingId);

  if (!booking) {
    return res.status(404).json({
      error: 'Booking not found',
    });
  }

  res.json({ data: booking });
});

/**
 * Helper: Generate time slots for an expert
 */
function generateTimeSlots(expertId, startDate) {
  const slots = [];
  const today = startDate ? new Date(startDate) : new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 30);

  const hours = [9, 10, 11, 12, 13, 14, 15, 16];
  const minutes = [0, 30];

  let currentDate = new Date(today);
  currentDate.setHours(0, 0, 0, 0);

  while (currentDate < endDate) {
    // Only Monday-Friday
    if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
      for (const hour of hours) {
        for (const minute of minutes) {
          // Skip past slots
          if (
            currentDate.toDateString() === today.toDateString() &&
            (hour < today.getHours() ||
              (hour === today.getHours() && minute <= today.getMinutes()))
          ) {
            continue;
          }

          const dateString = currentDate.toISOString().split('T')[0];
          const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

          // Deterministic availability based on expertId + time
          const seed = expertId.charCodeAt(0) + hour + minute;
          const available = (seed % 10) < 8; // 80% availability

          slots.push({
            date: dateString,
            time: timeString,
            available,
          });
        }
      }
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return slots;
}

// ==================== Static Files & SPA Fallback ====================
// Serve static files from the build directory (frontend)
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

// SPA Fallback: For any route that doesn't match API or static files,
// serve index.html so React Router can handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ==================== Error Handler ====================

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
  });
});

// ==================== Start Server ====================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║          Book Demo API Server Running                       ║
╠════════════════════════════════════════════════════════════╣
║ Server:   http://localhost:${PORT}                              ║
║ API:      http://localhost:${PORT}/api                      ║
║                                                            ║
║ Available Endpoints:                                       ║
║ GET    /api/technologies                                  ║
║ GET    /api/experts/:technology                           ║
║ GET    /api/time-slots/:expertId                          ║
║ POST   /api/bookings                                      ║
║ GET    /api/bookings                                      ║
║ GET    /api/bookings/:bookingId                           ║
╠════════════════════════════════════════════════════════════╣
║ IMPORTANT: This uses in-memory storage (not persistent)   ║
║ For production, use a real database (MongoDB/PostgreSQL)  ║
╚════════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
