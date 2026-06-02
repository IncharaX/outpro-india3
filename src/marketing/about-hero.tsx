import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function AboutHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            About Outpro
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            We help ambitious businesses transform ideas into scalable digital products and platforms.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Founded on the belief that technology should create measurable business value, we partner with organizations to design, build and scale modern digital experiences.
          </p>
        </div>
      </Container>
    </Section>
  );
}