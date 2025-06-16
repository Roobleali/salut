export const generateOrganizationSchema = (t: (key: string) => string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dolcenera",
  url: "https://dolcenera.com",
  logo: "https://dolcenera.com/logo.png",
  description: t("common.organization.description"),
  sameAs: [
    "https://linkedin.com/company/dolcenera",
    "https://twitter.com/dolcenera",
    "https://facebook.com/dolcenera",
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
  const breadcrumbItems = pathSegments.map((segment) => ({
    "@type": "ListItem",
    position: pathSegments.indexOf(segment) + 1,
    name: t(`breadcrumbs.${segment}`),
    item: `https://dolcenera.com/${pathSegments
      .slice(0, pathSegments.indexOf(segment) + 1)
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
        item: "https://dolcenera.com",
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
    name: "Dolcenera",
    url: "https://dolcenera.com",
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
    name: " Services",
    itemListElement: features.map((feature) => ({
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
    name: "Dolcenera",
    logo: {
      "@type": "ImageObject",
      url: "https://dolcenera.com/logo.png",
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
