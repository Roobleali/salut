// @ts-nocheck

import Timeline from '@/components/sections/ERPTimeline';
import { Badge } from '@/components/ui/badge';
import { motion } from "framer-motion";

import {
  ArrowRight, Check,
} from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ServiceFeature } from '@/components/sections/ServiceFeature';
import { useTranslation } from 'react-i18next';

const ERPSolutionsPage = () => {

  const { t } = useTranslation();

  const BENEFITS = [
    "All-in-One Solution: Integrate multiple business functions into a single platform, eliminating the hassle of managing disparate systems",
    "Modular Design: Select only the applications you need, creating a tailored solution that aligns with your specific business goals without unnecessary costs",
    "Scalability: As your business grows, easily scale your operations with our cloud-based solution that adapts to increasing demands",
    "Enhanced Customer Experience: Improve client interactions through effective CRM tools and self-service portals that foster loyalty and satisfaction",
    "Improved Financial Management: Simplify billing processes with integrated features that ensure timely payments and accurate financial reporting",
  ];
  const INDUSTRIES = [
    {
      title: "Manufacturing",
      desire: "Optimize production efficiency",
      outcome: "Streamline manufacturing processes with integrated planning, resource allocation, and quality control systems",
    },
    {
      title: "Professional Services",
      desire: "Enhance client project management",
      outcome: "Implement comprehensive service tracking, billing, and client communication tools for seamless professional workflows",
    },
    {
      title: "Healthcare",
      desire: "Improve patient care coordination",
      outcome: "Manage patient records, appointments, billing, and communication with integrated healthcare management solutions",
    },
    {
      title: "Construction",
      desire: "Manage complex project landscapes",
      outcome: "Track project timelines, resource allocation, subcontractor management, and financial workflows in real-time",
    },
    {
      title: "Retail",
      desire: "Optimize sales and inventory management",
      outcome: "Integrate point-of-sale systems, inventory tracking, customer relationship management, and financial reporting",
    },
    {
      title: "Education",
      desire: "Streamline administrative processes",
      outcome: "Manage student records, course scheduling, billing, communication, and institutional resource planning",
    },
    {
      title: "Financial Services",
      desire: "Ensure compliance and efficiency",
      outcome: "Implement robust reporting, client management, transaction tracking, and regulatory compliance tools",
    },
    {
      title: "Technology & Software",
      desire: "Accelerate product development",
      outcome: "Manage project timelines, resource allocation, client communications, and iterative development processes",
    }
  ];
  const milestones = t('erp.implementation_milestones', { returnObjects: true });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4">Enterprise Solutions</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                Transform Your Business with Comprehensive ERP Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                At Salut Enterprise, we understand that service companies are driven by the desire for efficiency, growth, and exceptional customer experiences.Tailored ERP solutions designed to meet your specific business needs across multiple industries


              </p>
              <div className="flex gap-4 justify-center">
                <a href="https://cal.com/salut">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* onboarding */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-700 text-center mb-8">
          Our Onboarding Process
        </h2>
        <div className="mt-12">
          <Timeline milestones={milestones} />
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600">
              Our comprehensive suite of features is designed to not just meet your desires but to turn them into tangible outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((feature, index) => (
              <ServiceFeature
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Salut Enterprise?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {BENEFITS.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the transformative power of Salut Enterprise today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>

  );
};

export default ERPSolutionsPage;