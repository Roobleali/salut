import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import { generateServiceSchema, generateBreadcrumbSchema } from '../lib/structuredData';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.money_transfers.title'),
      description: t('services.money_transfers.description'),
      image: '/images/services/money-transfers.jpg',
      features: [
        t('services.money_transfers.features.fast'),
        t('services.money_transfers.features.secure'),
        t('services.money_transfers.features.affordable'),
        t('services.money_transfers.features.convenient')
      ],
      id: 'money-transfers'
    },
    {
      title: t('services.mobile_money.title'),
      description: t('services.mobile_money.description'),
      image: '/images/services/mobile-money.jpg',
      features: [
        t('services.mobile_money.features.instant'),
        t('services.mobile_money.features.anywhere'),
        t('services.mobile_money.features.secure'),
        t('services.mobile_money.features.easy')
      ],
      id: 'mobile-money'
    },
    {
      title: t('services.cash_pickup.title'),
      description: t('services.cash_pickup.description'),
      image: '/images/services/cash-pickup.jpg',
      features: [
        t('services.cash_pickup.features.wide_network'),
        t('services.cash_pickup.features.instant'),
        t('services.cash_pickup.features.secure'),
        t('services.cash_pickup.features.convenient')
      ],
      id: 'cash-pickup'
    }
  ];

  // Debug logging
  console.log('Services data:', services);
  services.forEach(service => {
    console.log(`Features for ${service.id}:`, service.features);
  });

  const benefits = (t('services.benefits.items', { returnObjects: true }) as string[]);
  const featureTitles = services.map(service => service.title);

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
        keywords="money transfers, mobile money, cash pickup, remittance, Somali diaspora, UK to Somalia"
        structuredData={[serviceSchema, breadcrumbSchema]}
        alternates={{
          en: 'https://garemit.com/services',
          so: 'https://garemit.com/so/services'
        }}
      />

      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-primary opacity-90"></div>
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
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                {t('services.hero.cta')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                {t('services.hero.contact')}
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-white" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="services-title" className="text-3xl font-bold text-gray-900 mb-4">
              {t('services.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.services.subtitle')}
            </p>
          </div>
          {/* Service cards removed. You can add a new layout here if needed. */}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white" aria-labelledby="benefits-title">
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
      <section className="py-20 bg-white" aria-labelledby="cta-title">
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
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              {t('services.cta.button')}
            </button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
