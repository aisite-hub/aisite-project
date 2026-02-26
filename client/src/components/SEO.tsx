import { useEffect } from "react";

type JsonLd = Record<string, unknown>;

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  locale?: string;
  noindex?: boolean;
  keywords?: string;
  structuredData?: JsonLd | JsonLd[];
};

const DEFAULT_SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, "") ||
  "https://creacionlabs.ai";

function upsertMeta(
  selector: string,
  value: string,
  attr: "name" | "property" = "name",
) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${selector}"]`,
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, selector);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", value);
}

function upsertCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}

function normalizeUrl(path: string) {
  if (!path || path === "/") {
    return `${DEFAULT_SITE_URL}/`;
  }

  return `${DEFAULT_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function SEO({
  title,
  description,
  path = "/",
  image = "/favicon.png",
  type = "website",
  locale = "es_MX",
  noindex = false,
  keywords,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const absoluteUrl = normalizeUrl(path);
    const absoluteImageUrl = image.startsWith("http")
      ? image
      : `${DEFAULT_SITE_URL}${image.startsWith("/") ? image : `/${image}`}`;

    document.title = title;
    document.documentElement.setAttribute("lang", "es");

    upsertMeta("description", description);
    upsertMeta(
      "robots",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
    );
    upsertMeta("theme-color", "#0f172a");
    if (keywords) {
      upsertMeta("keywords", keywords);
    }

    upsertMeta("og:title", title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", type, "property");
    upsertMeta("og:url", absoluteUrl, "property");
    upsertMeta("og:image", absoluteImageUrl, "property");
    upsertMeta("og:locale", locale, "property");
    upsertMeta("og:site_name", "Creacion Labs", "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", absoluteImageUrl);

    upsertCanonical(absoluteUrl);

    document
      .querySelectorAll('script[type="application/ld+json"][data-seo="true"]')
      .forEach((el) => el.remove());

    const entries = structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : [];

    for (const entry of entries) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    }
  }, [
    title,
    description,
    path,
    image,
    type,
    locale,
    noindex,
    keywords,
    structuredData,
  ]);

  return null;
}
