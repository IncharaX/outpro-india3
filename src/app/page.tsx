import { CTASection } from "../marketing/cta-section";
import { Hero } from "../marketing/hero";
import { HeroMetrics } from "../marketing/hero-metrics";
import { PortfolioPreview } from "../marketing/portfolio-preview";
import { ServicesPreview } from "../marketing/services-preview";
import { TestimonialsPreview } from "../marketing/testimonials-preview";

export default function HomePage() {
  return (
    <>
      <Hero/>
      <HeroMetrics />
      <ServicesPreview/>
      <PortfolioPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}