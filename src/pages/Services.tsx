import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { generateServiceSchema, generateBreadcrumbSchema } from '../lib/structuredData';

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  key: string;
}

interface ServicesTranslation {
  benefits: {
    items: string[];
  };
}

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: ChartBarIcon,
      key: 'project_management'
    },
    {
      icon: UserGroupIcon,
      key: 'crm'
    },
    {
      icon: DocumentTextIcon,
      key: 'billing'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      key: 'communication'
    },
    {
      icon: ClipboardDocumentListIcon,
      key: 'agreements'
    },
    {
      icon: DevicePhoneMobileIcon,
      key: 'mobile'
    },
    {
      icon: ArrowPathIcon,
      key: 'workflows'
    },
    {
      icon: PresentationChartLineIcon,
      key: 'analytics'
    }
  ];

  const benefits = (t('services.benefits.items', { returnObjects: true }) as string[]);
  const featureTitles = features.map(feature => t(`services.features.${feature.key}.title`));

  // Prepare structured data
  const serviceSchema = generateServiceSchema(
    t('services.hero.title'),
    t('services.hero.subtitle'),
    featureTitles,
    t
  );

  const breadcrumbSchema = generateBreadcrumbSchema('services', t);

  return (
    <Layout ariaLabel={t('services.hero.title')}>
      <SEO
        title={t('services.hero.title')}
        description={t('services.hero.subtitle')}
        keywords="enterprise software, business solutions, project management, CRM, billing, communication tools, service management, mobile solutions, workflow automation, business analytics"
        structuredData={[serviceSchema, breadcrumbSchema]}
        alternates={{
          en: 'https://salut-enterprise.com/services',
          ro: 'https://salut-enterprise.com/ro/services'
        }}
      />

      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              {t('services.hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            >
              {t('services.hero.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {t('services.hero.cta')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                {t('services.hero.contact')}
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20" aria-labelledby="features-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.features.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.article
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`services.features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 mb-2">
                  {t(`services.features.${feature.key}.desire`)}
                </p>
                <p className="text-gray-500">
                  {t(`services.features.${feature.key}.outcome`)}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="benefits-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="benefits-title" className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.benefits.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit: string, index: number) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-700">{benefit}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" aria-labelledby="cta-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="cta-title" className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('services.cta.subtitle')}
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t('services.cta.button')}
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
