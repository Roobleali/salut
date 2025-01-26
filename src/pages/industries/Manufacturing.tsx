import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Factory, Cog, LineChart, Clock, Shield, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function Manufacturing() {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FEATURES = [
    {
      title: t("manufacturing.features.realTime.title"),
      description: t("manufacturing.features.realTime.description"),
      benefit: t("manufacturing.features.realTime.benefit"),
      icon: Clock
    },
    {
      title: t("manufacturing.features.automatedWorkOrders.title"),
      description: t("manufacturing.features.automatedWorkOrders.description"),
      benefit: t("manufacturing.features.automatedWorkOrders.benefit"),
      icon: Cog
    },
    {
      title: t("manufacturing.features.inventoryManagement.title"),
      description: t("manufacturing.features.inventoryManagement.description"),
      benefit: t("manufacturing.features.inventoryManagement.benefit"),
      icon: Boxes
    },
    {
      title: t("manufacturing.features.bom.title"),
      description: t("manufacturing.features.bom.description"),
      benefit: t("manufacturing.features.bom.benefit"),
      icon: Factory
    },
    {
      title: t("manufacturing.features.qualityControl.title"),
      description: t("manufacturing.features.qualityControl.description"),
      benefit: t("manufacturing.features.qualityControl.benefit"),
      icon: Shield
    }
  ];

  const ADVANTAGES = [
    {
      title: t("manufacturing.advantages.comprehensiveIntegration.title"),
      description: t("manufacturing.advantages.comprehensiveIntegration.description"),
      icon: Factory
    },
    {
      title: t("manufacturing.advantages.customizationFlexibility.title"),
      description: t("manufacturing.advantages.customizationFlexibility.description"),
      icon: Cog
    },
    {
      title: t("manufacturing.advantages.costEffectiveSolution.title"),
      description: t("manufacturing.advantages.costEffectiveSolution.description"),
      icon: LineChart
    },
    {
      title: t("manufacturing.advantages.regulatoryCompliance.title"),
      description: t("manufacturing.advantages.regulatoryCompliance.description"),
      icon: Shield
    }
  ];

  const OPERATIONAL_BENEFITS = [
    {
      title: t("manufacturing.operationalBenefits.enhancedVisibility.title"),
      description: t("manufacturing.operationalBenefits.enhancedVisibility.description")
    },
    {
      title: t("manufacturing.operationalBenefits.costOptimization.title"),
      description: t("manufacturing.operationalBenefits.costOptimization.description")
    },
    {
      title: t("manufacturing.operationalBenefits.increasedProductivity.title"),
      description: t("manufacturing.operationalBenefits.increasedProductivity.description")
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t("manufacturing.seo.title")}</title>
        <meta name="description" content={t("manufacturing.seo.description")} />
        <meta name="keywords" content={t("manufacturing.seo.keywords")} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <div className="relative pt-20 md:pt-28 lg:pt-32 pb-12 md:pb-16 lg:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 lg:mb-20">
              <Badge variant="outline" className="mb-4 md:mb-6">
                {t("manufacturing.enterpriseBadge")}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent leading-tight">
                {t("manufacturing.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
                {t("manufacturing.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-base md:text-lg px-6 md:px-8">
                    {t("manufacturing.hero.scheduleDemo")} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8">
                    {t("manufacturing.hero.contactSales")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Advantages Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-7xl mx-auto mb-16 md:mb-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                {t("manufacturing.sections.keyAdvantages")}
              </h2>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {ADVANTAGES.map((advantage, index) => (
                  <motion.div
                    key={advantage.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <advantage.icon className="h-8 w-8 text-primary flex-shrink-0" />
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold mb-3">{advantage.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-7xl mx-auto mb-16 md:mb-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                {t("manufacturing.sections.enterpriseFeatures")}
              </h2>
              <Card className="overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[200px] font-bold text-base md:text-lg">
                            {t("manufacturing.sections.feature")}
                          </TableHead>
                          <TableHead className="font-bold text-base md:text-lg">
                            {t("manufacturing.sections.description")}
                          </TableHead>
                          <TableHead className="w-[250px] font-bold text-base md:text-lg">
                            {t("manufacturing.sections.benefits")}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {FEATURES.map((feature) => (
                          <TableRow key={feature.title} className="hover:bg-muted/50">
                            <TableCell className="font-semibold text-primary">
                              <div className="flex items-center gap-2">
                                <feature.icon className="h-5 w-5" />
                                {feature.title}
                              </div>
                            </TableCell>
                            <TableCell>{feature.description}</TableCell>
                            <TableCell className="text-gray-600">{feature.benefit}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Operational Benefits Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                {t("manufacturing.sections.operationalImpact")}
              </h2>
              <div className="grid gap-6 md:gap-8">
                {OPERATIONAL_BENEFITS.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 md:gap-6 p-4 md:p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300"
                  >
                    <Check className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}