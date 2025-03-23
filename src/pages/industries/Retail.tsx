// @ts-nocheck

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  Check,
  ShoppingCart,
  Smartphone,
  Package,
  CreditCard,
  Mail,
  LineChart,
  Truck,
  Tag,
  BarChart,
  Globe,
  Shield,
  Wallet,
  Clock,
  ChartBar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { LeftVector, MetricLine, RightVector } from "./RealEstate";
import VideoModal from "@/components/models/VideoModel";
import { useState } from "react";

export const Retail = () => {
  const { t } = useTranslation();
  const IntegrationPartners = () => {
    const { t } = useTranslation();
    const partners = t("retail.integrations.partners", {
      returnObjects: true,
    });

    return (
      <div className="mb-24 text-center">

        <h2 className="text-3xl font-bold mb-12">
          {t("realEstate.integrations.title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-6 rounded-lg bg-white/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="mt-4 text-lg font-semibold text-gray-700">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  // Translated content
  const content = {
    hero: t("retail.hero", { returnObjects: true }),
    features: t("retail.features.list", { returnObjects: true }),
    benefits: t("retail.benefits.list", { returnObjects: true }),
    metrics: t("retail.metrics", { returnObjects: true }) || {},
    integrations: t("retail.integrations", { returnObjects: true }) || [],
    testimonials: t("retail.testimonials", { returnObjects: true }) || [],
  };

  // Icon mapping
  const iconMap = {
    ShoppingCart: ShoppingCart,
    Smartphone: Smartphone,
    Package: Package,
    CreditCard: CreditCard,
    Mail: Mail,
    LineChart: LineChart,
    Truck: Truck,
    Tag: Tag,
    BarChart: BarChart,
    Globe: Globe,
    Shield: Shield,
    Wallet: Wallet,
  };

  // Add POS devices section component
  const POSDevicesSection = () => (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Complete POS Hardware Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Cash Register",
              description: "Modern touchscreen POS with integrated payments",
              image: "/mobile-pos.jpg", // Add your image

              features: ["Receipt printing", "Cash drawer", "Customer display"]
            },
            {
              title: "Mobile POS Terminals",
              description: "Portable payment solutions for flexible operations",
              image: "/pos-register.jpg", // Add your image

              features: ["Wireless connectivity", "Long battery life", "Compact design"]
            },
            {
              title: "Self-Service Kiosks",
              description: "Streamline customer checkout experience",
              image: "/kiosk.webp", // Add your image
              features: ["User-friendly interface", "Payment integration", "Queue management"]
            }
          ].map((device, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-transparent">
                <img
                  src={device.image}
                  alt={device.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{device.title}</h3>
                <p className="text-muted-foreground mb-4">{device.description}</p>
                <ul className="space-y-2">
                  {device.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  // Add Pricing Section component
  const PricingSection = () => {
    const [currency, setCurrency] = useState('RON');
    const prices = {
      basic: {
        eur: 79,
        ron: 355
      },
      standard: {
        eur: 94,
        ron: 445
      },
      growth: {
        eur: 99,
        ron: 445
      },
      setup: {
        eur: 299,
        ron: 1335
      },
      module: {
        eur: 15,
        ron: 67
      }
    };

    const getPrice = (priceKey) => {
      return currency === 'RON' ? prices[priceKey].ron : prices[priceKey].eur;
    };

    const handleWhatsAppClick = (packageName, price, modules = []) => {
      const message = encodeURIComponent(
        `Hello! I'm interested in the ${packageName} package (${price} ${currency}/month).\n` +
        `Setup fee: ${getPrice('setup')} ${currency}\n` +
        (modules.length > 0 ? `Selected modules: ${modules.join(', ')}\n` : '') +
        'Please provide more information about your restaurant.'
      );

      window.open(`https://wa.me/40729917823?text=${message}`, '_blank');
    };

    return (
      <section className="py-24 bg-gradient-to-tr from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("retail.pricing.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("retail.pricing.subtitle")}
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="text-sm font-medium">RON</span>
              <button
                onClick={() => setCurrency(currency === 'RON' ? 'EUR' : 'RON')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span
                  className={`${currency === 'EUR' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-primary transition-transform`}
                />
              </button>
              <span className="text-sm font-medium">EUR</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <div className="text-4xl font-bold text-primary">
                  {getPrice('basic')}
                  <span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  One-time setup: {getPrice('setup')} {currency}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Smart POS System</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Kitchen Display System</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Basic Stock Management</span>
                </li>
              </ul>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => handleWhatsAppClick('Basic', getPrice('basic'))}
              >
                Get Started
              </Button>
            </motion.div>

            {/* Standard Package */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">Standard</h3>
                <div className="text-4xl font-bold text-primary">
                  {getPrice('standard')}
                  <span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  One-time setup: {getPrice('setup')} {currency}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>All Basic Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Choose 1 Module:</span>
                </li>
                <li className="pl-7 text-sm">
                  • Purchase Module <span className="text-green-600 font-semibold">+{getPrice('module')} {currency}/month</span>
                </li>
                <li className="pl-7 text-sm">
                  • Loyalty Program <span className="text-green-600 font-semibold">+{getPrice('module')} {currency}/month</span>
                </li>
                <li className="pl-7 text-sm">
                  • Delivery Integration <span className="text-green-600 font-semibold">+{getPrice('module')} {currency}/month</span>
                </li>
              </ul>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => handleWhatsAppClick('Standard', getPrice('standard'), ['Choose 1 Module'])}
              >
                Get Started
              </Button>
            </motion.div>

            {/* Growth Bundle */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-primary"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-white">Best Value</Badge>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">Growth Bundle</h3>
                <div className="text-4xl font-bold text-primary">
                  {getPrice('growth')}
                  <span className="text-base font-normal text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  One-time setup: {getPrice('setup')} {currency}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>All Basic Features</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>2 Modules Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-green-600 font-semibold">Save {getPrice('module')} {currency}/month</span>
                </li>
              </ul>
              <Button
                className="w-full"
                onClick={() => handleWhatsAppClick('Growth Bundle', getPrice('growth'), ['2 Modules Included'])}
              >
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Trial Note */}
          <div className="text-center mt-12">
            <p className="text-lg font-medium text-primary">
              Try all features free for 14 days!
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-2">What's included in the Setup Fee?</h4>
                <p className="text-muted-foreground">
                  8-hour onboarding session including data migration, staff training, and system setup.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-2">Can I change modules later?</h4>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or change modules at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-2">How does the 14-day trial work?</h4>
                <p className="text-muted-foreground">
                  Start with full access to all features. No credit card required. Choose your plan at the end of the trial.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => handleWhatsAppClick('Custom Solution', 'Contact for quote')}
            >
              Contact Us for Custom Solutions
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 pt-32 pb-24"
    >
      <Helmet>
        <title>{t("retail.seo.title")}</title>
        <meta name="description" content={t("retail.seo.description")} />
        <meta name="keywords" content={t("retail.seo.keywords")} />
      </Helmet>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <Badge className="mb-4">{content.hero.badge}</Badge>
          <h1 className="text-5xl font-bold mb-6">{content.hero.title}</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="transition-all hover:-translate-y-1">
                {t('realEstate.hero.scheduleDemo')} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/partnership">
              <Button variant="outline" size="lg" className="transition-all hover:-translate-y-1">
                {t('realEstate.hero.becomePartner')}
              </Button>
            </Link>
          </div>
        </div>


        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24 truncate">
          <MetricLine
            icon={Clock}
            label={t('retail.metrics.setupTime')}
            value={t('retail.metrics.setupTimeValue')}
          />
          <MetricLine
            icon={Shield}
            label={t('retail.metrics.cost')}
            value={t('retail.metrics.costValue')}
          />
          <MetricLine
            icon={ChartBar}
            label={t('retail.metrics.efficiency')}
            value={t('retail.metrics.efficiencyValue')}
          />
        </div>
        {/* Image Section with Vectors */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute hidden md:flex left-0 top-1/2 -translate-y-1/2">
            <LeftVector />
          </div>

          <VideoModal video="https://www.youtube.com/embed/2oTiuFPgR_8?autoplay=1" photo="/retail.png" alt='Next-Gen Retail Platform
'/>


          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
            <RightVector />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5"
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16 z-50 overflow-hidden">

          <div className="container mx-auto px-4 text-center ">
            <Badge className="mb-6">{content.hero.badge}</Badge>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
            >
              {content.hero.title}

            </motion.h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  {content.hero.scheduleDemo}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {content.hero.contactSales}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("retail.features.title")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-8">
                        {IconComponent && (
                          <div className="mb-6 p-3 w-fit rounded-lg bg-primary/10">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                        )}
                        <h3 className="text-2xl font-semibold mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {feature.description}
                        </p>
                        <ul className="space-y-3">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Add new POS Devices section */}
        <POSDevicesSection />
        {/* Integration Partners */}
        <IntegrationPartners />
        {/* Add Pricing section */}
        <PricingSection />


      </motion.div>
    </div>
  );
};