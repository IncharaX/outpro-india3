import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function TestimonialsHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonials
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Trusted by businesses that value quality and results.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Here's what our clients say about working with Outpro.
          </p>
        </div>
      </Container>
    </Section>
  );
}