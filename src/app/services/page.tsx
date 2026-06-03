import { CTASection } from "@/src/marketing/cta-section";
import { ProcessSection } from "@/src/marketing/process-section";
import { ServiceComparison } from "@/src/marketing/service-comparison";
import { ServicesHero } from "@/src/marketing/services-hero";
import { ServicesList } from "@/src/marketing/services-list";

export const metadata = {
  title: "Services",
};
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceComparison />
      <ProcessSection />
      <CTASection />
    </>
  );
}