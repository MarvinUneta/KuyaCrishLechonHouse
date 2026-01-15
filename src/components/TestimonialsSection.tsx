import type { Testimonial } from '../types/content';
import { SectionHeading } from './SectionHeading';

const QuoteIcon = () => (
  <div className="testimonial-card__quote-icon" aria-hidden="true">
    “
  </div>
);

export const TestimonialsSection = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <section className="section testimonials">
    <SectionHeading
      eyebrow="Trusted by the Best"
      title="Our Partners' Praise"
      description="From culinary directors to brand teams, our partners trust us for unforgettable events."
    />
    <div className="testimonials__grid">
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name} className="testimonial-card">
          <QuoteIcon />
          <p>“{testimonial.quote}”</p>
          <footer>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </footer>
        </blockquote>
      ))}
    </div>
  </section>
);