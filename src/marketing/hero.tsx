import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";
import { Section } from "../components/layout/section";
import { Container } from "../components/layout/container";


export function Hero() {
  return (
    <section className="bg-black text-white">
      <Container>
        <div className="max-w-5xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Modern Digital Solutions
          </p>

          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Building digital experiences that help businesses grow.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            We design, develop and scale high-performance digital products,
            websites and business solutions that create measurable impact.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="lg">
              Get Started
              <ArrowRight size={18} />
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}