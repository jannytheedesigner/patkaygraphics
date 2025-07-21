// pages/about.tsx
import { PageHero } from "@/components/pageHero";
import { Story } from "@/components/about/story";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImpactStats } from "@/components/impact-stats";
import { Testimonials } from "@/components/testimonials";
import { MissionAndVision } from "@/components/about/missionAndVision";
import { CallToAction } from "@/components/call-to-action";
import { CoreValues } from "@/components/about/coreValues";

export default function About() {
  return (
    <div className="bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="About HerVoice Malawi"
          subtitle="Learn more about our mission and the amazing work we do."
          backgroundImage="/assets/website-assets/about-hero.jpg"
          height="min-h-[60vh]"
        />

        {/* Founder Story */}
        <Story />

        {/* Mission & Vision */}
        <MissionAndVision />

        {/* Core Values */}
        <CoreValues />

        <ImpactStats />

        {/* Testimonial */}
        <Testimonials />

        {/* Call to Action */}
        <CallToAction />
      </main>
    </div>
  );
}
