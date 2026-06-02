import { AboutHero } from "@/src/marketing/about-hero";
import { AboutStats } from "@/src/marketing/about-stats";
import { CompanyStory } from "@/src/marketing/company-story";
import { CTASection } from "@/src/marketing/cta-section";

import { MissionVisionValues } from "@/src/marketing/mission-vision-values";
import { WhyChooseUs } from "@/src/marketing/why-choose-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <CompanyStory />
      <WhyChooseUs />
      <MissionVisionValues />

      <CTASection />
    </>
  );
}