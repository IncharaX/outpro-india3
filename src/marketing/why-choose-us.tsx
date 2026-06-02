
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { Surface } from "./surface";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Business First",
      description:
        "Every decision is aligned with measurable business outcomes and long-term growth.",
    },
    {
      title: "Modern Technology",
      description:
        "We build with scalable, future-ready technologies that support growth and performance.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "We don't just deliver projects. We help businesses continuously improve and evolve.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Choose Outpro
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight">
            Built around business impact.
          </h2>

          <p className="mt-6 max-w-2xl text-muted-foreground">
            We combine strategy, design and engineering to help businesses move faster and grow smarter.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <Surface
              key={reason.title}
              className="p-8"
            >
              <h3 className="text-2xl font-semibold">
                {reason.title}
              </h3>

              <p className="mt-4 text-muted-foreground">
                {reason.description}
              </p>
            </Surface>
          ))}
        </div>
      </Container>
    </Section>
  );
}