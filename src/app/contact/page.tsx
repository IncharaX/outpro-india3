import { ContactFormSection } from "@/src/marketing/contact-form-section";
import { ContactHero } from "@/src/marketing/contact-hero";

export const metadata = {
  title: "Contact",
};
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
    </>
  );
}