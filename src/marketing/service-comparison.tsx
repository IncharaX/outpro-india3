import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function ServiceComparison() {
  const items = [
    {
      title: "Traditional Agencies",
      points: [
        "Project focused",
        "Slow delivery cycles",
        "Limited technical ownership",
      ],
    },
    {
      title: "Outpro",
      points: [
        "Business outcome focused",
        "Rapid iteration",
        "Full product ownership",
      ],
    },
  ];

  return (
    <Section>
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border p-10"
            >
              <h3 className="mb-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <ul className="space-y-4">
                {item.points.map((point) => (
                  <li key={point}>
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}