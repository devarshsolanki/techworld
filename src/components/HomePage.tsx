import React from 'react';
import { Hero } from './Hero';
import { ProcessSteps } from './ProcessSteps';
import { ProductCards } from './ProductCards';
import { TestimonialCarousel } from './TestimonialCarousel';
import { BlogPreview } from './BlogPreview';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProcessSteps />
      <ProductCards />
      <TestimonialCarousel />
      <BlogPreview />
    </div>
  );
}
