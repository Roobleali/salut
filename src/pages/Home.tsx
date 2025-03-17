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
        <meta name="description" content="Transform your business with Salut Enterprise's comprehensive ERP solutions. Our AI-powered tools streamline operations across manufacturing, retail, real estate, and professional services. Boost efficiency and drive growth." />
        <meta name="keywords" content="ERP solutions, enterprise management, business transformation, AI-powered tools, manufacturing software, retail management, real estate software, cloud ERP, business automation" />

        {/* Open Graph tags */}
        <meta property="og:title" content={`${t('common.company_name')} | Enterprise Management Solutions`} />
        <meta property="og:description" content="Transform your business with Salut Enterprise's comprehensive ERP solutions. Our AI-powered tools streamline operations across manufacturing, retail, real estate, and professional services. Boost efficiency and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saluttech.ro" />
        <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
        <meta property="og:site_name" content="Salut Enterprise" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@salutenterprise" />
        <meta name="twitter:creator" content="@salutenterprise" />
        <meta name="twitter:title" content={`${t('common.company_name')} | Enterprise Management Solutions`} />
        <meta name="twitter:description" content="Transform your business with Salut Enterprise's comprehensive ERP solutions. Our AI-powered tools streamline operations across manufacturing, retail, real estate, and professional services. Boost efficiency and drive growth." />
        <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Salut Enterprise" />
        <link rel="canonical" href="https://salutenterprise.com" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </script>

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
                    <Link href="/resources" className="text-gray-600 hover:text-primary transition-colors">
                      Resources & Guides
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

      {/* Add social sharing buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://saluttech.ro')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1877F2] text-white p-2 rounded-full hover:bg-[#1877F2]/90 transition-colors"
          aria-label="Share on Facebook"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://saluttech.ro')}&text=${encodeURIComponent('Transform your business with Salut Enterprise\'s comprehensive ERP solutions')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1DA1F2] text-white p-2 rounded-full hover:bg-[#1DA1F2]/90 transition-colors"
          aria-label="Share on Twitter"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent('https://saluttech.ro')}&title=${encodeURIComponent('Salut Enterprise | Enterprise Management Solutions')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077B5] text-white p-2 rounded-full hover:bg-[#0077B5]/90 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </>
  );
}