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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

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

  return (
    <>
      <Helmet>
        <title>{t("retail.seo.title")}</title>
        <meta name="description" content={t("retail.seo.description")} />
        <meta name="keywords" content={t("retail.seo.keywords")} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5"
      >
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
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
        <IntegrationPartners />
      </motion.div>
    </>
  );
};
