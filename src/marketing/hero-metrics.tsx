import { Container } from "../components/layout/container";

export function HeroMetrics() {
  const metrics = [
    {
      value: "50+",
      label: "Projects Delivered",
    },
    {
      value: "20+",
      label: "Active Clients",
    },
    {
      value: "99%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <Container>
      <div className="grid grid-cols-3 gap-6 border-t py-10">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <h3 className="font-medium">
              {metric.value}
            </h3>

            <p className="mt-3 text-sm font-medium text-muted-foreground">
            {metric.label}</p>
            
          </div>
        ))}
      </div>
    </Container>
  );
}