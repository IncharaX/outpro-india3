import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function PortfolioHero() {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Selected projects and digital experiences we've delivered.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            A collection of projects focused on growth, usability and measurable business impact.
          </p>
        </div>
      </Container>
    </Section>
  );
}