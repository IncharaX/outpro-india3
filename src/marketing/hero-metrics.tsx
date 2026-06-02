import { Container } from "../components/layout/container";

export function HeroMetrics() {
  const metrics = [
    {
      value: "50+",
      label: "Projects",
    },
    {
      value: "20+",
      label: "Clients",
    },
    {
      value: "99%",
      label: "Satisfaction",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-3 gap-6 border-t py-10">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <h3 className="text-3xl font-semibold">
              {metric.value}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}