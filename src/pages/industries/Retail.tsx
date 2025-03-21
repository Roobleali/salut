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
  const PricingSection = () => (
    <section className="py-24 bg-gradient-to-tr from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Flexible Pricing Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$49",
              period: "/month",
              features: ["Basic POS features", "1 register", "Email support"]
            },
            {
              name: "Professional",
              price: "$99",
              period: "/month",
              features: ["Advanced POS features", "3 registers", "24/7 support", "Hardware included"]
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              features: ["Full POS suite", "Unlimited registers", "Dedicated support", "Custom integration"]
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                  <span className="text-base font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

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

        {/* Add Pricing section */}
        <PricingSection />

        {/* Integration Partners */}
        <IntegrationPartners />
      </motion.div>
    </div>
  );
};