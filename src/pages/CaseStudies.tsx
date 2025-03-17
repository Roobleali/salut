import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const CASE_STUDIES = [
  {
    id: 1,
    title: "How a Manufacturing Company Increased Efficiency by 40%",
    excerpt: "Learn how a leading manufacturer transformed their operations with our ERP solution, resulting in significant cost savings and improved productivity.",
    industry: "Manufacturing",
    results: [
      "40% increase in operational efficiency",
      "25% reduction in inventory costs",
      "30% faster order processing"
    ],
    image: "/case-studies/manufacturing-success.jpg",
    slug: "manufacturing-efficiency-case-study"
  },
  {
    id: 2,
    title: "Digital Transformation in Retail: A Success Story",
    excerpt: "Discover how a retail chain modernized their operations and improved customer experience through our integrated solutions.",
    industry: "Retail",
    results: [
      "35% increase in sales",
      "50% reduction in stockouts",
      "45% improvement in customer satisfaction"
    ],
    image: "/case-studies/retail-transformation.jpg",
    slug: "retail-transformation-case-study"
  },
  {
    id: 3,
    title: "Real Estate Portfolio Management Revolution",
    excerpt: "See how a property management company streamlined their operations and improved tenant satisfaction with our platform.",
    industry: "Real Estate",
    results: [
      "60% faster lease processing",
      "40% reduction in maintenance costs",
      "25% increase in tenant retention"
    ],
    image: "/case-studies/real-estate-success.jpg",
    slug: "real-estate-portfolio-case-study"
  }
];

export function CaseStudies() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Case Studies | {t('common.company_name')} - Success Stories</title>
        <meta name="description" content="Explore real-world success stories of businesses that transformed their operations with Salut Enterprise solutions. Learn how our clients achieved remarkable results." />
        <meta name="keywords" content="ERP case studies, business transformation, success stories, manufacturing efficiency, retail technology, real estate management" />

        {/* Open Graph tags */}
        <meta property="og:title" content={`Case Studies | ${t('common.company_name')} - Success Stories`} />
        <meta property="og:description" content="Explore real-world success stories of businesses that transformed their operations with Salut Enterprise solutions. Learn how our clients achieved remarkable results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saluttech.ro/case-studies" />
        <meta property="og:image" content="https://saluttech.ro/case-studies/og-image.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Case Studies | ${t('common.company_name')} - Success Stories`} />
        <meta name="twitter:description" content="Explore real-world success stories of businesses that transformed their operations with Salut Enterprise solutions. Learn how our clients achieved remarkable results." />
        <meta name="twitter:image" content="https://saluttech.ro/case-studies/og-image.jpg" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `${t('common.company_name')} Case Studies`,
            "description": "Success stories of businesses transformed by our solutions",
            "url": "https://saluttech.ro/case-studies",
            "itemListElement": CASE_STUDIES.map((study, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Article",
                "headline": study.title,
                "description": study.excerpt,
                "image": `https://saluttech.ro${study.image}`,
                "author": {
                  "@type": "Organization",
                  "name": "Salut Enterprise"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Success Stories</h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Discover how businesses are transforming their operations with our solutions
            </p>

            <div className="grid gap-8">
              {CASE_STUDIES.map((study) => (
                <article key={study.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:w-48"
                        src={study.image}
                        alt={study.title}
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                          {study.industry}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">
                        <Link href={`/case-studies/${study.slug}`} className="hover:text-primary transition-colors">
                          {study.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-6">{study.excerpt}</p>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Key Results:</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                      >
                        Read full case study →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600 mb-6">
                Let's discuss how our solutions can help you achieve similar results
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}