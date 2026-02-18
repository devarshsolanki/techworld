import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  availableTechnologies,
  availableServices, // Added availableServices
  getExpertsByTechnology,
  getAvailableTimeSlots,
  validateBasicInfo,
  submitBooking,
  type TimeSlot,
  type BookingFormData,
  type BookingConfirmation,
} from '../services/bookingService';
import { toast } from 'sonner';
import { Checkbox } from '../components/ui/checkbox'; // Assuming Checkbox exists in UI components

type FormStep = 'basic-info' | 'requirements' | 'time-slot' | 'confirmation';

export function BookDemoPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<FormStep>('basic-info');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    fullName: '',
    email: '',
    phone: '',
    technologies: [],
    services: [],
    expertId: 'team-expert', // Default/auto-assigned
    preferredDate: '',
    preferredTime: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(
    null
  );

  // Update time slots when currentStep is 'time-slot'
  useEffect(() => {
    if (currentStep === 'time-slot') {
      // Use a default expert or first selected tech to get slots
      const primaryTech = formData.technologies?.[0] || 'React';
      const experts = getExpertsByTechnology(primaryTech);
      const expertId = experts[0]?.id || 'expert-1';
      const slots = getAvailableTimeSlots(expertId);
      setAvailableSlots(slots);
      
      setFormData((prev) => ({
        ...prev,
        expertId: expertId,
        preferredDate: '',
        preferredTime: '',
      }));
    }
  }, [currentStep, formData.technologies]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: keyof BookingFormData, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (formErrors[name as string]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as string];
        return newErrors;
      });
    }
  };

  const validateAndProceed = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log('validateAndProceed called, currentStep:', currentStep);
    
    if (currentStep === 'basic-info') {
      const validation = validateBasicInfo({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
      });

      if (!validation.isValid) {
        setFormErrors(validation.errors);
        return;
      }
      setFormErrors({});
      setCurrentStep('requirements');
    } else if (currentStep === 'requirements') {
      const errors: Record<string, string> = {};
      if (!formData.services || formData.services.length === 0) {
        errors.services = 'Please select at least one service';
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }
      setFormErrors({});
      setCurrentStep('time-slot');
    } else if (currentStep === 'time-slot') {
      if (!formData.preferredDate || !formData.preferredTime) {
        setFormErrors({
          preferredDate: !formData.preferredDate ? 'Please select a date' : '',
          preferredTime: !formData.preferredTime ? 'Please select a time' : '',
        });
        return;
      }
      handleSubmitBooking();
    }
  };

  const handleSubmitBooking = async () => {
    setIsLoading(true);
    try {
      const result = await submitBooking(formData as BookingFormData);
      setConfirmation(result);
      setCurrentStep('confirmation');
      toast.success('Booking confirmed! Check your email for details.');
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : 'Failed to submit booking'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    if (currentStep === 'requirements') setCurrentStep('basic-info');
    else if (currentStep === 'time-slot') setCurrentStep('requirements');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      technologies: [],
      services: [],
      expertId: 'team-expert',
      preferredDate: '',
      preferredTime: '',
    });
    setFormErrors({});
    setAvailableSlots([]);
    setConfirmation(null);
    setCurrentStep('basic-info');
  };

  // Helper to get available dates
  const getAvailableDates = (): string[] => {
    const dates = new Set<string>();
    availableSlots.forEach((slot) => {
      if (slot.available) {
        dates.add(slot.date);
      }
    });
    return Array.from(dates).sort();
  };

  // Helper to get available times for selected date
  const getAvailableTimesForDate = (date: string): string[] => {
    const times = new Set<string>();
    availableSlots
      .filter((slot) => slot.date === date && slot.available)
      .forEach((slot) => {
        times.add(slot.time);
      });
    return Array.from(times).sort();
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen pt-20 sm:pt-32 pb-16 px-3 sm:px-4 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[var(--navy)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">
            Book Your Demo
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-2">
            Schedule a personalized demo with our experts and explore how we can
            help your projects succeed.
          </p>
        </motion.div>

        {/* Progress Steps */}
        {confirmation === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <div className="flex justify-between mb-10 sm:mb-12 gap-2 sm:gap-4">
              {[
                { step: 'basic-info', label: 'Basic Info' },
                { step: 'requirements', label: 'Service Type' },
                { step: 'time-slot', label: 'Schedule' },
              ].map((item, index) => {
                const stepIndex = ['basic-info', 'requirements', 'time-slot'].indexOf(item.step);
                const currentIndex = ['basic-info', 'requirements', 'time-slot'].indexOf(currentStep);
                const isCompleted = stepIndex < currentIndex;
                const isActive = currentStep === item.step;
                const isFuture = stepIndex > currentIndex;

                return (
                  <div key={item.step} className="flex flex-col items-center flex-1 relative group">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 z-10 ${
                        isActive
                          ? 'bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] text-white shadow-lg ring-4 ring-blue-100 scale-110'
                          : isCompleted
                          ? 'bg-green-600 text-white'
                          : 'bg-white border-2 border-gray-200 text-gray-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <span className="text-sm sm:text-base">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="mt-3 text-center">
                      <p className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5 ${
                        isActive ? 'text-[var(--accent-blue-end)]' : isCompleted ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        Step {index + 1}
                      </p>
                      <p className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${
                        isActive ? 'text-gray-900' : isCompleted ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {item.label}
                      </p>
                    </div>

                    {index < 2 && (
                      <div
                        className={`absolute top-5 sm:top-6 left-1/2 w-full h-[2px] -z-0 transition-colors duration-500 ${
                          isCompleted ? 'bg-green-500' : 'bg-gray-200'
                        }`}
                        aria-hidden="true"
                        style={{ transform: 'translateX(20px)', width: 'calc(100% - 40px)' }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Form Steps */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Basic Info */}
          {currentStep === 'basic-info' && (
            <Card className="p-4 sm:p-6 md:p-8 border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                Let's get started
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-sm sm:text-base text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName || ''}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="mt-2 border-gray-300 text-sm sm:text-base"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="mt-2 border-gray-300 text-sm sm:text-base"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 border-gray-300 text-sm sm:text-base"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="button"
                onClick={validateAndProceed}
                className="w-full mt-6 sm:mt-8 gradient-primary text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          )}

          {/* Step 2: Requirements Selection */}
          {currentStep === 'requirements' && (
            <Card className="p-4 sm:p-6 md:p-8 border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                Your Requirements
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Tell us what you need for your project
              </p>

              <div className="space-y-6">
                {/* Service Types */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">
                    Select the services you are interested in *
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {availableServices.map((service) => (
                      <div
                        key={service}
                        className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                          formData.services?.includes(service)
                            ? 'border-[var(--accent-blue-end)] bg-blue-50'
                            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          const current = formData.services || [];
                          const updated = current.includes(service)
                            ? current.filter((s) => s !== service)
                            : [...current, service];
                          setFormData((prev) => ({ ...prev, services: updated }));
                          if (formErrors.services) {
                            setFormErrors((prev) => {
                              const newErrors = { ...prev };
                              delete newErrors.services;
                              return newErrors;
                            });
                          }
                        }}
                      >
                        <Checkbox
                          checked={formData.services?.includes(service)}
                          onCheckedChange={() => {}} // Handled by div click
                          id={`service-${service}`}
                        />
                        <Label
                          htmlFor={`service-${service}`}
                          className="text-sm sm:text-base font-medium cursor-pointer flex-1"
                        >
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {formErrors.services && (
                    <p className="text-red-500 text-xs sm:text-sm mt-3 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {formErrors.services}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="flex-1 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base"
                  type="button"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={validateAndProceed}
                  className="flex-1 gradient-primary text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Time Slot Selection */}
          {currentStep === 'time-slot' && (
            <Card className="p-4 sm:p-6 md:p-8 border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-900">
                Schedule Your Demo
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Select your preferred date and time
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 mb-4 sm:mb-6">
                {/* Date Selection */}
                <div>
                  <Label className="text-sm sm:text-base text-gray-700 font-medium">
                    Preferred Date *
                  </Label>
                  <Select
                    value={formData.preferredDate || ''}
                    onValueChange={(value: string) =>
                      handleSelectChange('preferredDate', value)
                    }
                  >
                    <SelectTrigger className="mt-2 border-gray-300 text-sm sm:text-base">
                      <SelectValue placeholder="Select a date" />
                    </SelectTrigger>
                    <SelectContent>
                      {getAvailableDates().map((date) => (
                        <SelectItem key={date} value={date}>
                          {formatDate(date)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formErrors.preferredDate && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {formErrors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div>
                  <Label className="text-sm sm:text-base text-gray-700 font-medium">
                    Preferred Time *
                  </Label>
                  <Select
                    value={formData.preferredTime || ''}
                    onValueChange={(value: string) =>
                      handleSelectChange('preferredTime', value)
                    }
                    disabled={!formData.preferredDate}
                  >
                    <SelectTrigger className="mt-2 border-gray-300 text-sm sm:text-base">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.preferredDate &&
                        getAvailableTimesForDate(formData.preferredDate).map(
                          (time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          )
                        )}
                    </SelectContent>
                  </Select>
                  {formErrors.preferredTime && (
                    <p className="text-red-500 text-xs sm:text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {formErrors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                <h4 className="font-bold text-gray-900 mb-2">Booking Summary:</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Services:</span>{' '}
                    {formData.services?.join(', ')}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Schedule:</span>{' '}
                    {formData.preferredDate && formatDate(formData.preferredDate)} at{' '}
                    {formData.preferredTime || 'Selected time'}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="flex-1 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base"
                  type="button"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={validateAndProceed}
                  disabled={isLoading}
                  className="flex-1 gradient-primary text-white py-2.5 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base"
                >
                  {isLoading ? 'Submitting...' : 'Confirm Booking'}
                </Button>
              </div>
            </Card>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 'confirmation' && confirmation && (
            <Card className="p-4 sm:p-6 md:p-8 border-gray-200 border-green-500 bg-green-50">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="flex justify-center mb-4 sm:mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
                </motion.div>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                  Booking Confirmed!
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">{confirmation.message}</p>

                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 text-left space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Booking ID</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 break-all">
                      {confirmation.bookingId}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Your Name</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900">
                      {confirmation.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900 break-all">
                      {confirmation.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Requirements</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900">
                      {confirmation.services.join(', ')}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Scheduled Date & Time</p>
                    <p className="font-semibold text-xs sm:text-sm text-gray-900">
                      {confirmation.dateTime}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 px-2">
                  A confirmation email has been sent to {confirmation.email}. You
                  can cancel or reschedule up to 24 hours before your demo.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => navigate('/')}
                    variant="outline"
                    className="flex-1 border-gray-300 text-gray-700 py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base flex items-center justify-center gap-2"
                  >
                    <Home className="w-4 h-4" /> Go to Home Page
                  </Button>
                  <Button
                    onClick={resetForm}
                    className="flex-1 gradient-primary text-white py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base"
                  >
                    Book Another Demo
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
