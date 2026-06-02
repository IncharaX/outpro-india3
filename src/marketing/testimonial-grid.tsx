
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { testimonials } from "../data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsGrid() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}