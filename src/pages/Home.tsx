import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { useTranslation, Trans } from "react-i18next";
import { Helmet } from "react-helmet";
import { Link } from "wouter";

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('common.company_name')} | Enterprise Management Solutions</title>
        <meta name="description" content="Transform your business with Salut Enterprise's comprehensive ERP solutions. AI-powered tools for manufacturing, retail, real estate, and professional services." />
        <meta name="keywords" content="ERP solutions, enterprise management, business transformation, AI-powered tools, manufacturing software, retail management, real estate software" />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${t('common.company_name')} | Enterprise Management Solutions`} />
        <meta property="og:description" content="Transform your business with Salut Enterprise's comprehensive ERP solutions. AI-powered tools for manufacturing, retail, real estate, and professional services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://salutenterprise.com" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('common.company_name')} | Enterprise Management Solutions`} />
        <meta name="twitter:description" content="Transform your business with Salut Enterprise's comprehensive ERP solutions. AI-powered tools for manufacturing, retail, real estate, and professional services." />
        <meta name="twitter:image" content="/og-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Salut Enterprise" />
        <link rel="canonical" href="https://salutenterprise.com" />

        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://salutenterprise.com" />
        <link rel="alternate" hrefLang="ro" href="https://salutenterprise.com/ro" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Salut Enterprise",
            "url": "https://salutenterprise.com",
            "logo": "https://salutenterprise.com/logo.jpeg",
            "description": "Enterprise management solutions provider specializing in ERP, manufacturing, retail, and real estate software.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bucharest",
              "addressCountry": "Romania"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+40 743 118 879",
              "contactType": "sales",
              "email": "info@saluttech.ro"
            }
          })}
        </script>
      </Helmet>

      <Hero />

      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background" aria-labelledby="comparison-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl -z-10"></div>
            <h2 id="comparison-title" className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              {t('common.company_name')}
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('home.comparison.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl blur-2xl -z-10"></div>

            {/* Traditional Software Card */}
            <div className="p-8 rounded-xl bg-white/80 backdrop-blur shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                {t('home.comparison.traditional.title')}
              </h3>
              <div className="space-y-4">
                {(t('home.comparison.traditional.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI-Powered Solutions Card */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur shadow-xl">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {t('home.comparison.ai.title')}
              </h3>
              <div className="space-y-4">
                {(t('home.comparison.ai.items', { returnObjects: true }) as string[]).map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8" role="list">
            {SERVICES?.map((service) => (
              <div key={service.id} role="listitem">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-primary/5 via-background to-primary/10 py-24 backdrop-blur-sm" aria-labelledby="why-choose-title">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="why-choose-title" className="text-4xl font-bold mb-6">
                <Trans i18nKey="home.hero.why_choose">
                  Why Choose
                  <span className="curved-underline ml-3 gradient-heading">
                    {t('common.company_name')}
                  </span>
                </Trans>
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {/* Scalable Feature Card */}
              <article className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('home.features.scalable.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('home.features.scalable.description')}
                </p>
              </article>

              {/* Integration Feature Card */}
              <article className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('home.features.integration.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('home.features.integration.description')}
                </p>
              </article>

              {/* Support Feature Card */}
              <article className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('home.features.support.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('home.features.support.description')}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background/95 to-primary/5" aria-labelledby="quick-links-title">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 id="quick-links-title" className="text-3xl font-bold text-center mb-12">
              Explore Our Solutions
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Industries */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary">Industries</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/industries/manufacturing" className="text-gray-600 hover:text-primary transition-colors">
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/retail" className="text-gray-600 hover:text-primary transition-colors">
                      Retail & E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/real-estate" className="text-gray-600 hover:text-primary transition-colors">
                      Real Estate
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/hospitality" className="text-gray-600 hover:text-primary transition-colors">
                      Hospitality
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary">Solutions</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/solutions/erp" className="text-gray-600 hover:text-primary transition-colors">
                      ERP System
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/cloud-management" className="text-gray-600 hover:text-primary transition-colors">
                      Cloud Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/integration" className="text-gray-600 hover:text-primary transition-colors">
                      Integration Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/support" className="text-gray-600 hover:text-primary transition-colors">
                      Enterprise Support
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="text-gray-600 hover:text-primary transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation" className="text-gray-600 hover:text-primary transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" className="text-gray-600 hover:text-primary transition-colors">
                      Support Center
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-primary">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-600 hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/privacy-policy" className="text-gray-600 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}