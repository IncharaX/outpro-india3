import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";

export function CompanyStory() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              A partner focused on business outcomes.
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground">
            <p>
              Outpro was created with a simple mission: help businesses leverage
              technology to achieve measurable growth.
            </p>

            <p>
              By combining strategy, design and engineering, we deliver
              solutions that improve customer experiences and operational
              efficiency.
            </p>

            <p>
              Our approach is centered around long-term partnerships, not just
              project delivery.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}