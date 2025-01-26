import { Hero } from "@/components/sections/Hero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SERVICES } from "@/lib/constants";
import { useTranslation, Trans } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Hero />

      <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl -z-10"></div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
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

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES?.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-tr from-primary/5 via-background to-primary/10 py-24 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
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
              <div className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('home.features.scalable.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('home.features.scalable.description')}
                </p>
              </div>

              {/* Integration Feature Card */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('home.features.integration.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('home.features.integration.description')}
                </p>
              </div>

              {/* Support Feature Card */}
              <div className="p-8 rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {t('home.features.support.title')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('home.features.support.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}