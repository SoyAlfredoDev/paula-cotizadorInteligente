/**
 * Configuración global del sitio para SEO y redes sociales.
 * Define NEXT_PUBLIC_SITE_URL en producción (ej. https://tudominio.cl).
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://cotizadorinteligente.cl";
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "Cotizador Inteligente",
  legalName: "Cotizador Inteligente Chile",
  tagline: "Compara las 7 Isapres de Chile y cotiza gratis",
  locale: "es_CL",
  language: "es",
  country: "Chile",
  email: "contacto@cotizadorinteligente.cl",
  twitterHandle: "@cotizadorinteligente",
} as const;

export const SEO_ASSETS = {
  ogImage: "/images/og-cotizador-inteligente.png",
  logo: "/images/logo-cotizador-inteligente.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
