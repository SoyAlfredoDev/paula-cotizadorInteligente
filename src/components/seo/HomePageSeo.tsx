import JsonLd from "@/src/components/seo/JsonLd";
import { HOME_FAQS } from "@/src/data/seoFaqs";
import { ISAPRE_BRAND_KEYWORDS } from "@/src/lib/seo/keywords";
import { SEO_ASSETS, SITE, absoluteUrl } from "@/src/lib/seo/site";

export default function HomePageSeo() {
  const url = absoluteUrl();
  const logo = absoluteUrl(SEO_ASSETS.logo);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url,
    logo,
    description: SITE.tagline,
    areaServed: {
      "@type": "Country",
      name: SITE.country,
    },
    knowsAbout: [...ISAPRE_BRAND_KEYWORDS, "planes de salud", "cotización 7%", "Isapre Chile"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url,
    inLanguage: SITE.language,
    description: SITE.tagline,
    publisher: { "@id": `${url}#organization` },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cotización y comparación de Isapres en Chile",
    provider: { "@id": `${url}#organization` },
    areaServed: SITE.country,
    serviceType: "Comparador de planes de salud privada (Isapre)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CLP",
      description: "Cotización y asesoría gratuita, sin compromiso",
    },
    description:
      "Compara las 7 Isapres abiertas de Chile, simula tu 7% legal y recibe recomendaciones personalizadas de planes de salud.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={[organization, website, service, faqPage]} />;
}
