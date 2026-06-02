import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function ContactHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Let's discuss your next project.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Tell us about your goals, challenges and vision. We'll help you
            find the right digital solution.
          </p>
        </div>
      </Container>
    </Section>
  );
}