import { ClientStats } from "@/src/marketing/client-stats";
import { CTASection } from "@/src/marketing/cta-section";
import { TestimonialsGrid } from "@/src/marketing/testimonial-grid";
import { TestimonialsHero } from "@/src/marketing/testimonial-hero";

export const metadata = {
  title: "Testimonials",
};
export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <ClientStats />
      <TestimonialsGrid />
      <CTASection />
    </>
  );
}