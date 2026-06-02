import { AboutHero } from "../marketing/about-hero";
import { CompanyStory } from "../marketing/company-story";
import { CTASection } from "../marketing/cta-section";
import { Leadership } from "../marketing/leadership";
import { MissionVisionValues } from "../marketing/mission-vision-values";


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVisionValues />
      <Leadership />
      <CTASection />
    </>
  );
}