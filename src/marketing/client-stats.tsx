import { Container } from "../components/layout/container";


export function ClientStats() {
  const stats = [
    {
      value: "99%",
      label: "Client Satisfaction",
    },
    {
      value: "50+",
      label: "Projects Delivered",
    },
    {
      value: "20+",
      label: "Long-Term Clients",
    },
  ];

  return (
    <section className="border-y py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}