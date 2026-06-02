import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";


export function ProcessSection() {
  const steps = [
    "Discover",
    "Design",
    "Develop",
    "Scale",
  ];

  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Process
          </p>

          <h2 className="mt-4 text-4xl font-semibold">
            How we work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="border p-8 rounded-3xl"
            >
              <p className="mb-4 text-sm text-muted-foreground">
                0{index + 1}
              </p>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}