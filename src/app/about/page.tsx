import { AboutHero } from "@/src/marketing/about-hero";
import { AboutStats } from "@/src/marketing/about-stats";
import { CompanyStory } from "@/src/marketing/company-story";
import { CTASection } from "@/src/marketing/cta-section";
import { Leadership } from "@/src/marketing/leadership";
import { MissionVisionValues } from "@/src/marketing/mission-vision-values";



export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <CompanyStory />
      <MissionVisionValues />
      <Leadership />
      <CTASection />
    </>
  );
}