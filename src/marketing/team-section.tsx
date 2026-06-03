
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { Surface } from "./surface";

export function TeamSection() {
  const team = [
    {
      name: "Product Strategy Team",
      role: "Business Analysis & Planning",
    },
    {
      name: "Design Team",
      role: "UI/UX & Brand Experience",
    },
    {
      name: "Engineering Team",
      role: "Development & Deployment",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Leadership & Team
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            The people behind every project.
          </h2>

          <p className="mt-6 max-w-2xl text-muted-foreground">
            Outpro combines strategy, design and engineering expertise to
            deliver high-quality digital solutions.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {team.map((member) => (
            <Surface
              key={member.name}
              className="p-8"
            >
              <div className="mb-6 aspect-square rounded-2xl bg-muted" />

              <h3 className="text-xl font-semibold">
                {member.name}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {member.role}
              </p>
            </Surface>
          ))}
        </div>
      </Container>
    </Section>
  );
}