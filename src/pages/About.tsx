import { TeamSpotlight } from "@/components/sections/TeamSpotlight";
import { Timeline } from "@/components/sections/Timeline";
import { TEAM_MEMBERS, COMPANY_MILESTONES } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <Helmet>
        <title>{t('about.hero.title')} | {t('common.company_name')}</title>
        <meta name="description" content={t('about.hero.description')} />
        <meta property="og:title" content={`${t('about.hero.title')} | ${t('common.company_name')}`} />
        <meta property="og:description" content={t('about.hero.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saluttech.ro/about" />
        <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('about.hero.title')} | ${t('common.company_name')}`} />
        <meta name="twitter:description" content={t('about.hero.description')} />
        <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1495521939206-a217db9df264"
                alt={t('about.hero.title')}
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-tr from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('about.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('about.values.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('about.values.innovation.title')}</h3>
              <p className="text-gray-600">{t('about.values.innovation.description')}</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('about.values.quality.title')}</h3>
              <p className="text-gray-600">{t('about.values.quality.description')}</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('about.values.customerSuccess.title')}</h3>
              <p className="text-gray-600">{t('about.values.customerSuccess.description')}</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t('about.values.integrity.title')}</h3>
              <p className="text-gray-600">{t('about.values.integrity.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">{t('about.journey.title')}</h2>
        <div className="mt-12">
          <Timeline milestones={COMPANY_MILESTONES} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pb-24">
        <h2 className="text-3xl font-bold text-center mb-12">{t('about.team.title')}</h2>
        <TeamSpotlight members={TEAM_MEMBERS} />
      </div>
    </div>
  );
}
