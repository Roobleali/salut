import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  ArrowRight,
  Clock,
  Shield,
  ChartBar,
  Smartphone,
  Brain,
  Search,
  CreditCard,
  Bell,
  Users,
  Share2,
  Megaphone,
  Calculator
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import VideoModal from "@/components/models/VideoModel";

interface Feature {
  title: string;
  description: string;
  features: string[];
}

interface AdvancedFeature {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

interface Partner {
  name: string;
  logo: string;
}

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  text: string;
  image: string;
}

const IntegrationPartners = () => {
  const { t } = useTranslation();
  const partners = t('realEstate.integrations.partners', { returnObjects: true }) as Partner[];

  return (
    <div className="mb-24 text-center">
      <h2 className="text-3xl font-bold mb-12">{t('realEstate.integrations.title')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <div key={partner.name} className="p-6 rounded-lg bg-white/50 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-12 flex items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
            </div>
            <span className="mt-4 text-lg font-semibold text-gray-700">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export const LeftVector = () => (
  <svg viewBox="0 0 100 200" className="w-24 h-auto">
    <path
      d="M10 100 Q 40 50, 90 80 T 90 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary/30"
    />
    <circle cx="90" cy="80" r="4" fill="currentColor" className="text-primary" />
  </svg>
);

export const RightVector = () => (
  <svg viewBox="0 0 100 200" className="w-24 h-auto">
    <path
      d="M90 100 Q 60 50, 10 80 T 10 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-primary/30"
    />
    <circle cx="10" cy="80" r="4" fill="currentColor" className="text-primary" />
  </svg>
);

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('realEstate.testimonials.clients', { returnObjects: true }) as Testimonial[];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        {t('realEstate.testimonials.title')}
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            {/* <img
              className="w-16 h-16 rounded-full object-cover mb-4"
              src={testimonial.image}
              alt={testimonial.name}
            /> */}

            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.company}</p>
            <div className="flex justify-center mt-2 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path d="M12 2l2.9 5.8 6.3.9-4.6 4.4 1.1 6.3-5.7-3-5.7 3 1.1-6.3-4.6-4.4 6.3-.9L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MetricLine = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center"
  >
    <div className="rounded-full bg-primary/10 p-3 mb-2">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </motion.div>
);

export function RealEstate() {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FEATURES = t('realEstate.features.list', { returnObjects: true }) as Feature[];
  const ADVANCED_FEATURES = t('realEstate.advancedFeatures.list', { returnObjects: true }) as AdvancedFeature[];

  const iconComponents = {
    Smartphone,
    Brain,
    Search,
    CreditCard,
    Bell,
    Users,
    Share2,
    Megaphone,
    Calculator
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 pt-32 pb-24"
    >
      <Helmet>
        <title>{t('realEstate.seo.title')}</title>
        <meta name="description" content={t('realEstate.seo.description')} />
        <meta name="keywords" content={t('realEstate.seo.keywords')} />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <Badge className="mb-4">{t('realEstate.hero.badge')}</Badge>
          <h1 className="text-5xl font-bold mb-6">{t('realEstate.hero.title')}</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t('realEstate.hero.subtitle')}
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
            label={t('realEstate.metrics.setupTime')}
            value={t('realEstate.metrics.setupTimeValue')}
          />
          <MetricLine
            icon={Shield}
            label={t('realEstate.metrics.cost')}
            value={t('realEstate.metrics.costValue')}
          />
          <MetricLine
            icon={ChartBar}
            label={t('realEstate.metrics.efficiency')}
            value={t('realEstate.metrics.efficiencyValue')}
          />
        </div>
        {/* Image Section with Vectors */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute hidden md:flex left-0 top-1/2 -translate-y-1/2">
            <LeftVector />
          </div>

          <VideoModal src='https://www.youtube.com/embed/9mGwVLKyibo?autoplay=1' image='/ Section.svg' alt='real estate software' />


          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
            <RightVector />
          </div>
        </div>
        {/* Core Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('realEstate.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <Card key={feature.title} className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((subFeature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-gray-700">{subFeature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t('realEstate.advancedFeatures.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANCED_FEATURES.map((feature, index) => {
              const IconComponent = iconComponents[feature.icon as keyof typeof iconComponents];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                        </div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.features.map((subFeature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-gray-700">{subFeature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            }
            )}
          </div>
        </div>

        <IntegrationPartners />
        <Testimonials />
      </div>
    </motion.div>
  );
}

export default RealEstate;