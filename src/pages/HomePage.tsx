import React from 'react';
import { Hero } from '../components/Hero';
import { ProcessSteps } from '../components/ProcessSteps';
import { ProductCards } from '../components/ProductCards';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProcessSteps />
      <ProductCards />
      <TestimonialCarousel />
    </div>
  );
}
