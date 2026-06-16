import JsonLd from "@/src/components/seo/JsonLd";
import type { IsapreDetail } from "@/src/data/isapres";
import { SEO_ASSETS, SITE, absoluteUrl } from "@/src/lib/seo/site";

type Props = {
  isapre: IsapreDetail;
};

export default function IsaprePageSeo({ isapre }: Props) {
  const url = absoluteUrl(`/isapres/${isapre.slug}`);
  const homeUrl = absoluteUrl();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Isapres",
        item: absoluteUrl("/#isapres"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isapre.name,
        item: url,
      },
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cotización de planes ${isapre.name}`,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: homeUrl,
      logo: absoluteUrl(SEO_ASSETS.logo),
    },
    areaServed: SITE.country,
    url,
    description: isapre.pitch,
    offers: isapre.plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      price: plan.priceUF,
      priceCurrency: "CLF",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.priceUF,
        priceCurrency: "CLF",
        unitText: "UF base mensual",
      },
    })),
  };

  return <JsonLd data={[breadcrumb, service]} />;
}
