import type { Testimonial } from '../types/content';
import { SectionHeading } from './SectionHeading';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => (
  <section className="testimonials">
    <SectionHeading
      eyebrow="Trusted partners"
      title="Proof from past feasts"
      description="Culinary directors, brides, and brand teams rely on us for seamless roasted pig experiences."
    />
    <div className="testimonials__grid">
      {testimonials.map((testimonial) => (
        <blockquote key={testimonial.name} className="card testimonial-card">
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

