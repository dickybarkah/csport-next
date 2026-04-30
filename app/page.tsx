import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Marquee2 } from "@/components/sections/Marquee2";
import { Features } from "@/components/sections/Features";
import { FacilitiesGrid } from "@/components/sections/FacilitiesGrid";
import { Events } from "@/components/sections/Events";
import { StudioClasses } from "@/components/sections/StudioClasses";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Features />
        <FacilitiesGrid />
        <Events />
        <StudioClasses />
        <WhyJoin />
        <Marquee2 />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
