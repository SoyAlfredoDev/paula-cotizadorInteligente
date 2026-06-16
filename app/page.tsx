import NavbarSection from "@/section/NavbarSection";
import Hero from "@/src/components/sections/Hero";
import Isapres from "@/src/components/sections/Isapres";
import HowItWorks from "@/src/components/sections/HowItWorks";
import HealthCalculator from "@/src/components/sections/HealthCalculator";
import IsapreInfo from "@/src/components/sections/IsapreInfo";
import Testimonials from "@/src/components/sections/Testimonials";
import FooterSection from "@/section/FooterSection";

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <NavbarSection />
      <Hero />
      <Isapres />
      <HowItWorks />
      <HealthCalculator />
      <IsapreInfo />
      <Testimonials />
      <FooterSection />
    </main>
  );
}
