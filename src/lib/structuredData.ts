import { useTranslation } from "react-i18next";

export const generateOrganizationSchema = (t: (key: string) => string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Salut Enterprise",
  url: "https://salut-enterprise.com",
  logo: "https://salut-enterprise.com/logo.png",
  description: t("common.organization.description"),
  sameAs: [
    "https://linkedin.com/company/salut-enterprise",
    "https://twitter.com/salut-enterprise",
    "https://facebook.com/salut-enterprise",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
    areaServed: "Worldwide",
  },
});

export const generateBreadcrumbSchema = (
  path: string,
  t: (key: string) => string
) => {
  const pathSegments = path.split("/").filter(Boolean);
  const breadcrumbItems = pathSegments.map((segment, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: t(`breadcrumbs.${segment}`),
    item: `https://salut-enterprise.com/${pathSegments
      .slice(0, index + 1)
      .join("/")}`,
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("breadcrumbs.home"),
        item: "https://salut-enterprise.com",
      },
      ...breadcrumbItems,
    ],
  };
};

export const generateServiceSchema = (
  title: string,
  description: string,
  features: string[],
  t: (key: string) => string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: title,
  description: description,
  provider: {
    "@type": "Organization",
    name: "Salut Enterprise",
    url: "https://salut-enterprise.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: features,
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Enterprise Services",
    itemListElement: features.map((feature, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: feature,
        description: t(
          `services.features.${feature
            .toLowerCase()
            .replace(/\s+/g, "_")}.description`
        ),
      },
    })),
  },
});

export const generateArticleSchema = (
  title: string,
  description: string,
  publishDate: string,
  author: string,
  image: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description: description,
  image: image,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "Salut Enterprise",
    logo: {
      "@type": "ImageObject",
      url: "https://salut-enterprise.com/logo.png",
    },
  },
  datePublished: publishDate,
  dateModified: publishDate,
});

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
