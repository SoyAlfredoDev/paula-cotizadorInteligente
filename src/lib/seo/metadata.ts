import type { Metadata } from "next";
import { SEO_ASSETS, SITE, absoluteUrl } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  ogTitle,
  ogDescription,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(SEO_ASSETS.ogImage);

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [
        {
          url: imageUrl,
          width: SEO_ASSETS.ogImageWidth,
          height: SEO_ASSETS.ogImageHeight,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [imageUrl],
    },
    category: "health",
  };
}

export function buildRootMetadata(): Metadata {
  const imageUrl = absoluteUrl(SEO_ASSETS.ogImage);

  return {
    metadataBase: new URL(absoluteUrl()),
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: absoluteUrl() }],
    creator: SITE.name,
    publisher: SITE.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: SEO_ASSETS.logo,
      apple: SEO_ASSETS.logo,
    },
    openGraph: {
      images: [
        {
          url: imageUrl,
          width: SEO_ASSETS.ogImageWidth,
          height: SEO_ASSETS.ogImageHeight,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
  };
}
