
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { Surface } from "./surface";

export function FounderNote() {
  return (
    <Section>
      <Container>
        <Surface className="p-12 md:p-20">
          <blockquote className="max-w-4xl text-3xl font-semibold leading-relaxed">
            "Technology should solve business problems, not create them."
          </blockquote>

          <p className="mt-8 text-muted-foreground">
            — Founder, Outpro
          </p>
        </Surface>
      </Container>
    </Section>
  );
}