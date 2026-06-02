import { Button } from "@/components/ui/button";

import { Surface } from "./surface";
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";

export function ContactFormSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <Surface className="p-10">
            <h2 className="mb-8 text-2xl font-semibold">
              Send an Inquiry
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border p-4"
              />

              <Button size="lg">
                Submit Inquiry
              </Button>
            </form>
          </Surface>

          <Surface className="p-10">
            <h2 className="text-2xl font-semibold">
              Contact Information
            </h2>

            <div className="mt-8 space-y-8">
              <div>
                <p className="font-medium">
                  Email
                </p>

                <p className="mt-2 text-muted-foreground">
                  hello@outpro.com
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Phone
                </p>

                <p className="mt-2 text-muted-foreground">
                  +91 98765 43210
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Location
                </p>

                <p className="mt-2 text-muted-foreground">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </Surface>
        </div>
      </Container>
    </Section>
  );
}