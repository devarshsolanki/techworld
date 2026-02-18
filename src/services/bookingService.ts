/**
 * Booking Service
 * Handles expert data, time-slot availability, and booking submissions
 * 
 * Key Logic:
 * - Technologies map to multiple experts
 * - Each expert has available slots for the next 30 days
 * - Time slots are 1-hour duration with 30-minute intervals
 * - Backend should validate and persist bookings to a database
 */

export interface Expert {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  technologies: string[];
}

export interface TimeSlot {
  date: string;
  time: string;
  available: boolean;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  technologies: string[];
  services: string[];
  expertId: string;
  preferredDate: string;
  preferredTime: string;
}

export interface BookingConfirmation {
  bookingId: string;
  fullName: string;
  email: string;
  technologies: string[];
  services: string[];
  expertName: string;
  dateTime: string;
  message: string;
}

/**
 * Available services for booking
 */
export const availableServices = [
  'Website Development',
  'Web App Development',
  'Mobile App Development',
  'E-commerce Development',
  'UI/UX Design',
  'Backend/API Development',
  'Automation / AI Integration',
];

/**
 * Mock expert data
 * In production, this would come from a database
 */
const experts: Record<string, Expert[]> = {
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

/**
 * Available technologies for booking
 */
export const availableTechnologies = Object.keys(experts).sort();

/**
 * Get experts for a specific technology
 */
export function getExpertsByTechnology(technology: string): Expert[] {
  return experts[technology] || [];
}

/**
 * Generate time slots for the next 30 days
 * Slots are available Monday-Friday, 9 AM - 5 PM, every 30 minutes
 * 
 * Returns: Array of available time slots
 */
export function getAvailableTimeSlots(
  expertId: string,
  startDate?: string
): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const today = startDate ? new Date(startDate) : new Date();
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() + 30);

  // Business hours: 9 AM to 5 PM
  const hours = [9, 10, 11, 12, 13, 14, 15, 16];
  const minutes = [0, 30];

  let currentDate = new Date(today);
  currentDate.setHours(0, 0, 0, 0);

  while (currentDate < endDate) {
    // Only include Monday (1) to Friday (5)
    if (currentDate.getDay() >= 1 && currentDate.getDay() <= 5) {
      for (const hour of hours) {
        for (const minute of minutes) {
          // Skip slots that have already passed today
          if (
            currentDate.toDateString() === today.toDateString() &&
            (hour < today.getHours() ||
              (hour === today.getHours() && minute <= today.getMinutes()))
          ) {
            continue;
          }

          const dateString = currentDate.toISOString().split('T')[0];
          const timeString = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

          // Simulate 80% availability (deterministic based on expertId + time)
          const seed = expertId.charCodeAt(0) + hour + minute;
          const available = (seed % 10) < 8; // 80% chance of availability

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

/**
 * Validate booking form data - for FINAL submission only
 * Returns: { isValid: boolean, errors: Record<string, string> }
 */
export function validateBookingForm(
  data: Partial<BookingFormData>
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (basic: at least 10 digits)
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Technologies validation
  if (!data.technologies || data.technologies.length === 0) {
    errors.technologies = 'Please select at least one technology';
  }

  // Services validation
  if (!data.services || data.services.length === 0) {
    errors.services = 'Please select at least one service';
  }

  // Expert validation
  if (!data.expertId || data.expertId.trim() === '') {
    errors.expertId = 'Please select an expert';
  }

  // Date validation
  if (!data.preferredDate || data.preferredDate.trim() === '') {
    errors.preferredDate = 'Please select a date';
  }

  // Time validation
  if (!data.preferredTime || data.preferredTime.trim() === '') {
    errors.preferredTime = 'Please select a time slot';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validate basic info fields (Step 1)
 * Returns: { isValid: boolean, errors: Record<string, string> }
 */
export function validateBasicInfo(data: Partial<BookingFormData>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (basic: at least 10 digits)
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!data.phone || !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'Please enter a valid phone number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Submit booking (mock implementation)
 * In production, this would send data to backend API
 * 
 * Endpoint: POST /api/bookings
 * Body: BookingFormData
 * Response: BookingConfirmation
 */
export async function submitBooking(
  data: BookingFormData
): Promise<BookingConfirmation> {
  // Validate data
  const validation = validateBookingForm(data);
  if (!validation.isValid) {
    throw new Error(
      `Validation failed: ${JSON.stringify(validation.errors)}`
    );
  }

  try {
    // In production: POST to backend
    // const response = await fetch('/api/bookings', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // const result = await response.json();

    // Mock API response
    // For multiple technologies, we'll pick the first one's expert or a default
    const primaryTech = data.technologies[0];
    const expert = experts[primaryTech]?.find(
      (e) => e.id === data.expertId
    ) || { name: 'Technical Team' };
    
    const dateTime = `${data.preferredDate} at ${data.preferredTime}`;

    const confirmation: BookingConfirmation = {
      bookingId: `DEMO-${Date.now()}`,
      fullName: data.fullName,
      email: data.email,
      technologies: data.technologies,
      services: data.services,
      expertName: expert.name,
      dateTime,
      message: `Thank you for booking a demo! Your session with our ${expert.name} is scheduled for ${dateTime}. We will discuss: ${data.services.join(', ')} using ${data.technologies.join(', ')}.`,
    };

    return confirmation;
  } catch (error) {
    throw new Error(`Failed to submit booking: ${error}`);
  }
}
