
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { Surface } from "./surface";

export function MissionVisionValues() {
  const items = [
    {
      title: "Mission",
      description:
        "Deliver digital solutions that create measurable business impact.",
    },
    {
      title: "Vision",
      description:
        "Become a trusted partner for organizations embracing digital transformation.",
    },
    {
      title: "Values",
      description:
        "Innovation, transparency, quality and long-term collaboration.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <Surface
              key={item.title}
              className="p-8"
            >
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-muted-foreground">
                {item.description}
              </p>
            </Surface>
          ))}
        </div>
      </Container>
    </Section>
  );
}