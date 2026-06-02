import { Button } from "@/components/ui/button";
import { Surface } from "./surface";
import { Section } from "../components/layout/section";
import { Container } from "../components/layout/container";

export function CTASection() {
  return (
    <Section>
      <Container>
        <Surface className="p-12 md:p-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to build your next digital product?
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Let's discuss your goals and create solutions that drive measurable business growth.
            </p>

            <Button
              size="lg"
              className="mt-10"
            >
              Start a Project
            </Button>
          </div>
        </Surface>
      </Container>
    </Section>
  );
}