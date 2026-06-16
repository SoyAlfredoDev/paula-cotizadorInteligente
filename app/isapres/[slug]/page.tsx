import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NavbarSection from "@/section/NavbarSection";
import FooterSection from "@/section/FooterSection";
import IsapreDetailView from "@/src/components/isapres/IsapreDetailView";
import { getAllIsapreSlugs, getIsapreBySlug } from "@/src/data/isapres";

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

  return {
    title: `Planes ${isapre.name} — Cotiza desde ${isapre.plans[0].priceUF} UF | Cotizador Inteligente`,
    description: `${isapre.tagline}. Compara planes, beneficios y cotiza ${isapre.name} gratis con asesoría experta.`,
  };
}

export default async function IsaprePage({ params }: PageProps) {
  const { slug } = await params;
  const isapre = getIsapreBySlug(slug);

  if (!isapre) notFound();

  return (
    <main className="flex-1 w-full overflow-x-hidden">
      <NavbarSection />
      <IsapreDetailView isapre={isapre} />
      <FooterSection />
    </main>
  );
}
