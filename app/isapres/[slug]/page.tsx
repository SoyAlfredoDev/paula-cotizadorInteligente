import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavbarSection from "@/section/NavbarSection";
import FooterSection from "@/section/FooterSection";
import IsapreDetailView from "@/src/components/isapres/IsapreDetailView";
import IsaprePageSeo from "@/src/components/seo/IsaprePageSeo";
import { getAllIsapreSlugs, getIsapreBySlug } from "@/src/data/isapres";
import { getIsapreKeywords } from "@/src/lib/seo/keywords";
import { buildPageMetadata } from "@/src/lib/seo/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllIsapreSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const isapre = getIsapreBySlug(slug);
  if (!isapre) return { title: "Isapre no encontrada" };

  const minPrice = isapre.plans[0].priceUF;

  return buildPageMetadata({
    title: `Cotizar ${isapre.name} 2026 — Planes desde ${minPrice} UF | Comparador Isapre Chile`,
    description: `${isapre.tagline}. Compara planes ${isapre.name}, beneficios, cobertura hospitalaria (${isapre.hospitalCoverage}) y cotiza gratis con asesoría experta. ${isapre.plansCatalog}+ planes disponibles.`,
    path: `/isapres/${slug}`,
    keywords: getIsapreKeywords(isapre.name, slug),
    ogTitle: `Planes ${isapre.name} — Cotiza desde ${minPrice} UF base`,
    ogDescription: isapre.pitch,
  });
}

export default async function IsaprePage({ params }: PageProps) {
  const { slug } = await params;
  const isapre = getIsapreBySlug(slug);

  if (!isapre) notFound();

  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <IsaprePageSeo isapre={isapre} />
      <NavbarSection />
      <IsapreDetailView isapre={isapre} />
      <FooterSection />
    </main>
  );
}
