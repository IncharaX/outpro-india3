
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { services } from "../data/services";
import { SectionHeading } from "./section-heading";
import { ServiceItem } from "./service-item";

export function ServicesPreview() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Services That Help Businesses Scale"
          description="Strategy, design and engineering services focused on measurable business outcomes."
        />

        <div className="mt-16">
          {services.map((service) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}