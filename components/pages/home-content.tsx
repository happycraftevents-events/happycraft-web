"use client";

import { PartnerSlider } from "@/components/partner-slider";
import { Testimonials } from "@/components/testimonials";
import { FAQAccordion } from "@/components/faq-accordion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HeroSection } from "@/components/pages/hero-section";
import { AboutSection } from "@/components/pages/about-section";
import { SignatureEventsSection } from "@/components/pages/signature-events-section";
import { ServiceLocationsSection } from "@/components/pages/service-locations-section";

export function HomeContent() {
  return (
    <>
      <HeroSection />
      <PartnerSlider />
      <AboutSection />
      <SignatureEventsSection />
      <ServiceLocationsSection />
      <FAQAccordion />
    </>
  );
}
