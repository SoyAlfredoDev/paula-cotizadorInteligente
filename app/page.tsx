import type { Metadata } from "next";
import NavbarSection from "@/section/NavbarSection";
import Hero from "@/src/components/sections/Hero";
import Isapres from "@/src/components/sections/Isapres";
import HowItWorks from "@/src/components/sections/HowItWorks";
import HealthCalculator from "@/src/components/sections/HealthCalculator";
import IsapreInfo from "@/src/components/sections/IsapreInfo";
import Testimonials from "@/src/components/sections/Testimonials";
import FaqSection from "@/src/components/sections/FaqSection";
import FooterSection from "@/section/FooterSection";
import HomePageSeo from "@/src/components/seo/HomePageSeo";
import { HOME_KEYWORDS } from "@/src/lib/seo/keywords";
import { buildPageMetadata } from "@/src/lib/seo/metadata";
import { SITE } from "@/src/lib/seo/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Cotizar Isapre Chile 2026 — Comparador Gratis de las 7 Isapres | Cotizador Inteligente",
  description:
    "Cotiza y compara las 7 Isapres de Chile gratis: Banmédica, Colmena, Consalud, Cruz Blanca, Nueva Masvida, Vida Tres y Esencial. Simula tu 7% legal, encuentra el mejor plan según tu sueldo y recibe asesoría sin compromiso.",
  path: "/",
  keywords: [...HOME_KEYWORDS],
  ogTitle: `${SITE.name} — Compara y cotiza Isapres en Chile gratis`,
  ogDescription:
    "Encuentra tu plan de salud ideal en minutos. Comparador de las 7 Isapres abiertas, calculadora del 7% y cotización 100% gratuita.",
});

export default function Home() {
  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <HomePageSeo />
      <NavbarSection />
      <Hero />
      <Isapres />
      <HowItWorks />
      <HealthCalculator />
      <IsapreInfo />
      <Testimonials />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
