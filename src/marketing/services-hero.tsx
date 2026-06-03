import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function ServicesHero() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
            Capabilities
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Services designed to help businesses move faster and grow smarter.
          </h1>
        </div>
      </Container>
    </Section>
  );
}