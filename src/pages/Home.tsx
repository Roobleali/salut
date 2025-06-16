import { Hero } from "@/components/sections/Hero";
import { Helmet } from "react-helmet";
import { UserIcon, UserPlusIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export function Home() {

  return (
    <>
      <Helmet>
        <title>Garemit | Fast & Secure Money Transfers for the Somali Diaspora</title>
        <meta name="description" content="Send money home safely and affordably with Garemit. Built for the Somali diaspora in the UK, offering fast transfers, fair rates, and multi-language support." />
        <meta name="keywords" content="money transfer, remittance, Somali diaspora, UK to Somalia, secure transfers, fair rates, mobile money" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Garemit | Fast & Secure Money Transfers for the Somali Diaspora" />
        <meta property="og:description" content="Send money home safely and affordably with Garemit. Built for the Somali diaspora in the UK, offering fast transfers, fair rates, and multi-language support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://garemit.com" />
        <meta property="og:image" content="https://garemit.com/og-image.jpg" />
        <meta property="og:site_name" content="Garemit" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garemit" />
        <meta name="twitter:creator" content="@garemit" />
        <meta name="twitter:title" content="Garemit | Fast & Secure Money Transfers for the Somali Diaspora" />
        <meta name="twitter:description" content="Send money home safely and affordably with Garemit. Built for the Somali diaspora in the UK, offering fast transfers, fair rates, and multi-language support." />
        <meta name="twitter:image" content="https://garemit.com/og-image.jpg" />

        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Garemit" />
        <link rel="canonical" href="https://garemit.com" />

        {/* Language alternates */}
        <link rel="alternate" hrefLang="en" href="https://garemit.com" />
        <link rel="alternate" hrefLang="so" href="https://garemit.com/so" />

        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Garemit",
            "url": "https://garemit.com",
            "logo": "https://garemit.com/logo.jpeg",
            "description": "Garemit is a trusted remittance platform built for the Somali diaspora in the UK, offering fast, secure, and affordable money transfers.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressCountry": "United Kingdom"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@garemit.com"
            }
          })}
        </script>
      </Helmet>

      <Hero />

      {/* Partners Section */}
      <section className="max-w-7xl rounded-lg mx-auto bg-blue-500 py-4 mb-2">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-10 md:gap-20">
          <img src="/partners/premiere_bank.svg" alt="Premier Bank" className="h-10 md:h-12 w-auto object-contain" />

          <img src="/partners/mpesa.svg" alt="M-PESA" className="h-10 md:h-12 w-auto object-contain" />

          <img src="/partners/evc.svg" alt="EVC Plus" className="h-10 md:h-12 w-auto object-contain" />
          <img src="/partners/hormuud.png" alt="hormuud EVC Plus" className="h-10 md:h-12 w-auto object-contain" />
          <img src="/partners/ibs_bank.png" alt="hormuud EVC Plus" className="h-10 md:h-12 w-auto object-contain" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16 mb-20 px-2 md:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-white to-primary/5 p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-primary-dark">How Garemit Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col h-full bg-white rounded-2xl shadow-md border border-primary/20 p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/30 text-lg font-bold text-primary">01</span>
                <UserIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary-dark">Create and verify your account</h3>
              <p className="text-gray-500 text-base mb-4">Sign up with your details and verify your account for a secure transfer process.</p>
              {/* Decorative SVG or placeholder */}
              <svg className="absolute left-0 bottom-0 w-32 h-16 opacity-20" viewBox="0 0 120 60"><path d="M0,60 Q60,0 120,60" stroke="#2563eb" strokeWidth="2" fill="none" /></svg>
            </div>
            {/* Step 2 */}
            <div className="relative flex flex-col h-full bg-white rounded-2xl shadow-md border border-primary/20 p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/30 text-lg font-bold text-primary">02</span>
                <UserPlusIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary-dark">Add a recipient and send money to them</h3>
              <p className="text-gray-500 text-base mb-4">Enter the recipient's information, choose the amount, and send the money easily with just a few taps.</p>
              {/* Example transfer UI */}
              <div className="flex items-center justify-between bg-primary/10 border border-primary/20 rounded-xl px-4 py-2 mb-2">
                <span className="text-primary-dark font-medium">Garaad Awil</span>
                <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 ml-2">Money delivered</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-primary/20 rounded-lg px-3 py-1 w-max">
                <img src="/flags/uk.svg" alt="UK Flag" className="w-5 h-4 rounded-sm" />
                <span className="text-sm font-medium text-primary-dark">GBP</span>
                <span className="mx-1 text-primary">→</span>
                <img src="/flags/so.svg" alt="Somalia Flag" className="w-5 h-4 rounded-sm" />
                <span className="text-sm font-medium text-primary-dark">SOS</span>
              </div>
              {/* Decorative SVG */}
              <svg className="absolute left-0 bottom-0 w-32 h-16 opacity-20" viewBox="0 0 120 60"><path d="M0,60 Q60,0 120,60" stroke="#2563eb" strokeWidth="2" fill="none" /></svg>
            </div>
            {/* Step 3 */}
            <div className="relative flex flex-col h-full bg-white rounded-2xl shadow-md border border-primary/20 p-8 overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/30 text-lg font-bold text-primary">03</span>
                <DevicePhoneMobileIcon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-primary-dark">Keep track of your transfers on the go</h3>
              <p className="text-gray-500 text-base mb-4">Stay updated with real-time notifications and track the status of your transfers from anywhere.</p>
              {/* Placeholder for device illustration */}
              <div className="w-full h-16 bg-primary/10 border border-dashed border-primary/30 rounded-xl flex items-center justify-center text-primary text-sm">Mobile & Web Tracking</div>
              {/* Decorative SVG */}
              <svg className="absolute left-0 bottom-0 w-32 h-16 opacity-20" viewBox="0 0 120 60"><path d="M0,60 Q60,0 120,60" stroke="#2563eb" strokeWidth="2" fill="none" /></svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto bg-gradient-to-br from-background via-primary/5 to-background" aria-labelledby="comparison-title">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl -z-10"></div>
            <h2 id="comparison-title" className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              <span className="border-b-4 border-primary pb-1 inline-block">Compare Garemit</span>
            </h2>
            <div className="text-xl font-semibold text-primary mb-8 text-center">
              Fast, Safe, and Fair Money Transfers for the Somali Diaspora
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl blur-2xl -z-10"></div>

            {/* Professional Comparison Table */}
            <div className="p-8 rounded-xl bg-white/95 backdrop-blur shadow-xl">
              <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
                Traditional Remittance <span className="font-normal text-gray-400">vs.</span> <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-extrabold">Garemit</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow text-base">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-gray-100 text-left font-semibold text-gray-700 uppercase tracking-wider">Feature</th>
                      <th className="py-3 px-4 bg-gray-100 text-left font-semibold text-gray-700 uppercase tracking-wider">Traditional</th>
                      <th className="py-3 px-4 bg-gray-100 text-left font-semibold text-primary uppercase tracking-wider">Garemit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Speed</td>
                      <td className="py-3 px-4 border-t border-gray-200">1–5 days (banks, agents)</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Instant or same-day</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Fees</td>
                      <td className="py-3 px-4 border-t border-gray-200">5–12% (hidden + FX margin)</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">1–3% flat, transparent</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Access</td>
                      <td className="py-3 px-4 border-t border-gray-200">Bank accounts or cash agents required</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Phone-to-phone, no bank needed</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Transparency</td>
                      <td className="py-3 px-4 border-t border-gray-200">Opaque, limited status updates</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Real-time status tracking</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Value Retention</td>
                      <td className="py-3 px-4 border-t border-gray-200">Value lost to middlemen</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Minimal loss, direct transfer</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">User Experience</td>
                      <td className="py-3 px-4 border-t border-gray-200">Long forms, queues, paperwork</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Simple, digital onboarding</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Availability</td>
                      <td className="py-3 px-4 border-t border-gray-200">Office hours only</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">24/7, anytime, anywhere</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Support</td>
                      <td className="py-3 px-4 border-t border-gray-200">Slow, disconnected agents</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Live chat, responsive team</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Currency Exchange</td>
                      <td className="py-3 px-4 border-t border-gray-200">Hidden FX rates</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Fair, market-based rates</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Trust</td>
                      <td className="py-3 px-4 border-t border-gray-200">Legacy institutions</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Built by diaspora, for diaspora</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-t border-gray-200">Community Impact</td>
                      <td className="py-3 px-4 border-t border-gray-200">Little reinvestment</td>
                      <td className="py-3 px-4 border-t border-gray-200 font-bold text-primary">Profits reinvested in Somali community</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className="bg-gradient-to-tr max-w-7xl mx-auto from-primary/5 via-background to-primary/10 py-24 backdrop-blur-sm" aria-labelledby="why-choose-title">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="why-choose-title" className="text-4xl font-bold mb-6">
                Why Choose Garemit?
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              {/* Trust Feature Card */}
              <article className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Built for Somalis, by Somalis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We understand your needs because we're part of the same community. Our platform is designed with Somali culture and values at heart.
                </p>
              </article>

              {/* Security Feature Card */}
              <article className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Bank-Grade Security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your money is protected with the highest level of security. We're fully regulated and your funds are always safe with us.
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
                  24/7 Community Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our support team speaks Somali and English. We're here to help you anytime, with the personal touch you deserve.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}