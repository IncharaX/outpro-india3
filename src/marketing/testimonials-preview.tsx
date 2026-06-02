
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { testimonials } from "../data/testimonials";
import { SectionHeading } from "./section-heading";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted By Growing Businesses"
          description="What our clients say about working with us."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
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