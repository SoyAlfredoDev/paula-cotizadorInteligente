import NavbarSection from "@/section/NavbarSection";
import HeroSection from "@/section/HeroSection";
import HowItWorksSection from "@/section/HowItWorksSection";
import IsapresSection from "@/section/IsapresSection";
import FooterSection from "@/section/FooterSection";

export default function Home() {
  return (
    <main className="flex-1">
      <NavbarSection />
      <HeroSection />
      <IsapresSection />
      <HowItWorksSection />
      <FooterSection />
    </main>
  );
}
