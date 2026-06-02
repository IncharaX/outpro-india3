import { Hero } from "../marketing/hero";
import { HeroMetrics } from "../marketing/hero-metrics";
import { PortfolioPreview } from "../marketing/portfolio-preview";
import { ServicesPreview } from "../marketing/services-preview";


export default function HomePage() {
  return (
    <>
      <Hero/>
      <HeroMetrics />
      <ServicesPreview/>
      <PortfolioPreview />
    </>
  );
}