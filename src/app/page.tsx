import { AboutHero } from "../marketing/about-hero";
import { CompanyStory } from "../marketing/company-story";
import { CTASection } from "../marketing/cta-section";
import { WhyChooseUs } from "@/src/marketing/why-choose-us";
import { MissionVisionValues } from "../marketing/mission-vision-values";


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <WhyChooseUs />
      <MissionVisionValues />

      <CTASection />
    </>
  );
}