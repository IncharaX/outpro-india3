import { CaseStudiesGrid } from "@/src/marketing/case-studies-grid";
import { CTASection } from "@/src/marketing/cta-section";
import { PortfolioHero } from "@/src/marketing/portfolio-hero";


export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <CaseStudiesGrid />
      <CTASection />
    </>
  );
}