import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  availableTechnologies,
  getExpertsByTechnology,
  getAvailableTimeSlots,
  validateBookingForm,
  validateBasicInfo,
  submitBooking,
  type Expert,
  type TimeSlot,
  type BookingFormData,
  type BookingConfirmation,
} from '../services/bookingService';
import { toast } from 'sonner';

type FormStep = 'basic-info' | 'technology' | 'expert' | 'time-slot' | 'confirmation';

export function BookDemoPage() {
  const [currentStep, setCurrentStep] = useState<FormStep>('basic-info');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    fullName: '',
    email: '',
    phone: '',
    technology: '',
    expertId: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [selectedExperts, setSelectedExperts] = useState<Expert[]>([]);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(
    null
  );

  // Update experts when technology changes
  useEffect(() => {
    if (formData.technology) {
      const experts = getExpertsByTechnology(formData.technology);
      setSelectedExperts(experts);
      // Reset expert selection
      setFormData((prev) => ({
        ...prev,
        expertId: '',
      }));
    }
  }, [formData.technology]);

  // Update time slots when expert is selected
  useEffect(() => {
    if (formData.expertId) {
      const slots = getAvailableTimeSlots(formData.expertId);
      setAvailableSlots(slots);
      // Reset time slot selection
      setFormData((prev) => ({
        ...prev,
        preferredDate: '',
        preferredTime: '',
      }));
    }
  }, [formData.expertId]);

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

  const handleSelectChange = (name: string, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
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
        console.log('Validation failed:', validation.errors);
        return;
      }
      setFormErrors({});
      console.log('Moving to technology step');
      setCurrentStep('technology');
    } else if (currentStep === 'technology') {
      if (!formData.technology) {
        setFormErrors({ technology: 'Please select a technology' });
        return;
      }
      setFormErrors({});
      console.log('Moving to expert step');
      setCurrentStep('expert');
    } else if (currentStep === 'expert') {
      if (!formData.expertId) {
        setFormErrors({ expertId: 'Please select an expert' });
        return;
      }
      setFormErrors({});
      console.log('Moving to time-slot step');
      setCurrentStep('time-slot');
    } else if (currentStep === 'time-slot') {
      if (!formData.preferredDate || !formData.preferredTime) {
        setFormErrors({
          preferredDate: !formData.preferredDate
            ? 'Please select a date'
            : '',
          preferredTime: !formData.preferredTime ? 'Please select a time' : '',
        });
        return;
      }
      console.log('Submitting booking');
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
    if (currentStep === 'technology') setCurrentStep('basic-info');
    else if (currentStep === 'expert') setCurrentStep('technology');
    else if (currentStep === 'time-slot') setCurrentStep('expert');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      technology: '',
      expertId: '',
      preferredDate: '',
      preferredTime: '',
    });
    setFormErrors({});
    setSelectedExperts([]);
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
    <div className="min-h-screen pt-32 pb-16 px-4 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--navy)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">
            Book Your Demo
          </h1>
          <p className="text-gray-600 text-lg">
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
            className="mb-8"
          >
            <div className="flex justify-between mb-8">
              {[
                { step: 'basic-info', label: 'Your Info' },
                { step: 'technology', label: 'Technology' },
                { step: 'expert', label: 'Expert' },
                { step: 'time-slot', label: 'Schedule' },
              ].map((item, index) => (
                <div key={item.step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      currentStep === item.step
                        ? 'bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] text-white scale-110'
                        : ['basic-info', 'technology', 'expert'].includes(
                              currentStep
                            ) &&
                            ['basic-info', 'technology', 'expert', 'time-slot']
                              .indexOf(item.step) <
                              [
                                'basic-info',
                                'technology',
                                'expert',
                                'time-slot',
                              ].indexOf(currentStep)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {['basic-info', 'technology', 'expert', 'time-slot'].indexOf(
                      item.step
                    ) <
                    ['basic-info', 'technology', 'expert', 'time-slot'].indexOf(
                      currentStep
                    ) ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <p className="text-sm font-medium text-gray-600 ml-2">
                    {item.label}
                  </p>

                  {index < 3 && (
                    <div
                      className="flex-1 h-0.5 mx-3 bg-gray-200"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
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
            <Card className="p-8 border-gray-200">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Let's get started
              </h2>

              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName || ''}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="mt-2 border-gray-300"
                  />
                  {formErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="mt-2 border-gray-300"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className="mt-2 border-gray-300"
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="button"
                onClick={validateAndProceed}
                className="w-full mt-8 gradient-primary text-white py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          )}

          {/* Step 2: Technology Selection */}
          {currentStep === 'technology' && (
            <Card className="p-8 border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Select Your Technology
              </h2>
              <p className="text-gray-600 mb-6">
                Choose the technology you'd like a demo for
              </p>

              <div className="mb-6">
                <Label className="text-gray-700 font-medium">
                  Technology *
                </Label>
                <Select
                  value={formData.technology || ''}
                  onValueChange={(value) =>
                    handleSelectChange('technology', value)
                  }
                >
                  <SelectTrigger className="mt-2 border-gray-300">
                    <SelectValue placeholder="Select a technology" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableTechnologies.map((tech) => (
                      <SelectItem key={tech} value={tech}>
                        {tech}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {formErrors.technology && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {formErrors.technology}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="flex-1 py-3 rounded-2xl"
                  type="button"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={validateAndProceed}
                  className="flex-1 gradient-primary text-white py-3 rounded-2xl flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Expert Selection */}
          {currentStep === 'expert' && (
            <Card className="p-8 border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Choose Your Expert
              </h2>
              <p className="text-gray-600 mb-6">
                Select from our available experts for {formData.technology}
              </p>

              <div className="space-y-3 mb-6">
                {selectedExperts.map((expert) => (
                  <div
                    key={expert.id}
                    onClick={() =>
                      handleSelectChange('expertId', expert.id)
                    }
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.expertId === expert.id
                        ? 'border-[var(--accent-blue-end)] bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">
                          {expert.name}
                        </p>
                        <p className="text-sm text-[var(--accent-blue-end)] font-medium">
                          {expert.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {expert.bio}
                        </p>
                      </div>
                      {formData.expertId === expert.id && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {formErrors.expertId && (
                <p className="text-red-500 text-sm mb-4 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {formErrors.expertId}
                </p>
              )}

              <div className="flex gap-3">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="flex-1 py-3 rounded-2xl"
                  type="button"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={validateAndProceed}
                  className="flex-1 gradient-primary text-white py-3 rounded-2xl flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          )}

          {/* Step 4: Time Slot Selection */}
          {currentStep === 'time-slot' && (
            <Card className="p-8 border-gray-200">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                Schedule Your Demo
              </h2>
              <p className="text-gray-600 mb-6">
                Select your preferred date and time
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Date Selection */}
                <div>
                  <Label className="text-gray-700 font-medium">
                    Preferred Date *
                  </Label>
                  <Select
                    value={formData.preferredDate || ''}
                    onValueChange={(value) =>
                      handleSelectChange('preferredDate', value)
                    }
                  >
                    <SelectTrigger className="mt-2 border-gray-300">
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
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.preferredDate}
                    </p>
                  )}
                </div>

                {/* Time Selection */}
                <div>
                  <Label className="text-gray-700 font-medium">
                    Preferred Time *
                  </Label>
                  <Select
                    value={formData.preferredTime || ''}
                    onValueChange={(value) =>
                      handleSelectChange('preferredTime', value)
                    }
                    disabled={!formData.preferredDate}
                  >
                    <SelectTrigger className="mt-2 border-gray-300">
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
                    <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {formErrors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 p-4 rounded-xl mb-6">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Summary:</span>{' '}
                  Demo for {formData.technology} with{' '}
                  {selectedExperts.find((e) => e.id === formData.expertId)
                    ?.name || 'your selected expert'}{' '}
                  on {formData.preferredDate && formatDate(formData.preferredDate)} at{' '}
                  {formData.preferredTime || 'your selected time'}
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={goBack}
                  variant="outline"
                  className="flex-1 py-3 rounded-2xl"
                  type="button"
                >
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={validateAndProceed}
                  disabled={isLoading}
                  className="flex-1 gradient-primary text-white py-3 rounded-2xl"
                >
                  {isLoading ? 'Submitting...' : 'Confirm Booking'}
                </Button>
              </div>
            </Card>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 'confirmation' && confirmation && (
            <Card className="p-8 border-gray-200 border-green-500 bg-green-50">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="flex justify-center mb-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </motion.div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Booking Confirmed!
                </h2>
                <p className="text-gray-600 mb-6">{confirmation.message}</p>

                <div className="bg-white rounded-xl p-6 mb-6 text-left space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Booking ID</p>
                    <p className="font-semibold text-gray-900">
                      {confirmation.bookingId}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Your Name</p>
                    <p className="font-semibold text-gray-900">
                      {confirmation.fullName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">
                      {confirmation.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Technology</p>
                    <p className="font-semibold text-gray-900">
                      {confirmation.technology}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Expert</p>
                    <p className="font-semibold text-gray-900">
                      {confirmation.expertName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Scheduled Date & Time</p>
                    <p className="font-semibold text-gray-900">
                      {confirmation.dateTime}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">
                  A confirmation email has been sent to {confirmation.email}. You
                  can cancel or reschedule up to 24 hours before your demo.
                </p>

                <Button
                  onClick={resetForm}
                  className="w-full gradient-primary text-white py-3 rounded-2xl"
                >
                  Book Another Demo
                </Button>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
}
