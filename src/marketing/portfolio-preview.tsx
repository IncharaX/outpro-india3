

import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { projects } from "../data/projects";

import { PortfolioCard } from "./portfolio-card";

import { SectionHeading } from "./section-heading";

export function PortfolioPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Selected Projects & Case Studies"
          description="A snapshot of the digital experiences and solutions we've delivered."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}