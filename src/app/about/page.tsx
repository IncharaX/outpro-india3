import { AboutHero } from "@/src/marketing/about-hero";
import { CompanyStory } from "@/src/marketing/company-story";
import { CompanyTimeline } from "@/src/marketing/company-timeline";
import { CTASection } from "@/src/marketing/cta-section";
import { FounderNote } from "@/src/marketing/founder-note";
import { MissionVisionValues } from "@/src/marketing/mission-vision-values";
import { TeamSection } from "@/src/marketing/team-section";
import { WhyChooseUs } from "@/src/marketing/why-choose-us";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <CompanyTimeline />
      <FounderNote />
      <CompanyStory />
      <WhyChooseUs />
      <MissionVisionValues />
      <TeamSection />
      <CTASection />
    </>
  );
}