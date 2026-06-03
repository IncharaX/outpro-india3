import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";

export function CompanyTimeline() {
  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
    },
    {
      year: "2021",
      title: "First Major Client",
    },
    {
      year: "2023",
      title: "50+ Projects Delivered",
    },
    {
      year: "2025",
      title: "Expanded Service Offerings",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="max-w-4xl">
          <h2 className="mb-12 text-3xl font-semibold">
            Journey
          </h2>

          <div className="space-y-8">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="flex gap-10 border-b pb-8"
              >
                <div className="w-24 font-bold">
                  {item.year}
                </div>

                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}