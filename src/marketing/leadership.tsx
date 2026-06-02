
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { Surface } from "./surface";

export function Leadership() {
  const leaders = [
    {
      name: "Alex Carter",
      role: "Founder & CEO",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Design",
    },
    {
      name: "David Miller",
      role: "Engineering Lead",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Leadership
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            Meet the team behind Outpro
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {leaders.map((leader) => (
            <Surface
              key={leader.name}
              className="p-8"
            >
              <div className="mb-6 aspect-square rounded-2xl bg-muted" />

              <h3 className="text-xl font-semibold">
                {leader.name}
              </h3>

              <p className="mt-2 text-muted-foreground">
                {leader.role}
              </p>
            </Surface>
          ))}
        </div>
      </Container>
    </Section>
  );
}