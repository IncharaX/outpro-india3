import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function AboutHero() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Outpro was founded to help businesses turn ideas into scalable digital products.
          </h1>
        </div>
      </Container>
    </Section>
  );
}