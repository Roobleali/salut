import React from "react";
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

const FEATURES = [
  {
    title: "Property Management 🏢",
    description: "Complete portfolio management and administration",
    features: [
      "Property Units Tracking",
      "Tenant Management",
      "Occupancy Reports",
      "Contracts & Documents",
      "Project Management"
    ]
  },
  {
    title: "Project Tracking 📋",
    description: "Comprehensive property administration",
    features: [
      "Project Monitoring",
      "Unit Records",
      "Customization Options",
      "Contract Management"
    ]
  },
  {
    title: "Sales & Rentals 🤝",
    description: "Sales and rental administration",
    features: [
      "Contract Generation",
      "Renewal Tracking",
      "Document Management",
      "Maintenance"
    ]
  },
  {
    title: "Property Maintenance 🔧",
    description: "Building maintenance management",
    features: [
      "Ticket System",
      "Vendor Management",
      "Scheduled Maintenance",
      "Utilities"
    ]
  },
  {
    title: "Utilities & Billing 💰",
    description: "Utility cost management",
    features: [
      "Meter Reading",
      "Automated Billing",
      "Custom Rates",
      "Financial Reports"
    ]
  },
  {
    title: "CRM & Clients 👥",
    description: "Customer relationship management",
    features: [
      "Client Profiles",
      "Interaction History",
      "Tasks & Follow-ups",
      "Automated Communication"
    ]
  },
];


const ADVANCED_FEATURES = [
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native mobile application for property managers, agents, and tenants with real-time updates",
    features: [
      "Real-time notifications",
      "Document access on-the-go",
      "Mobile maintenance requests",
      "Property viewing scheduler"
    ]
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Advanced analytics and automation powered by artificial intelligence",
    features: [
      "Predictive rent pricing",
      "Smart maintenance scheduling",
      "Automated contract processing",
      "Market trend analysis"
    ]
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Enhanced visibility for property listings on search engines",
    features: [
      "Automated meta descriptions",
      "SEO-optimized property pages",
      "Local SEO optimization",
      "Performance analytics"
    ]
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Seamless integration with Romanian payment processors",
    features: [
      "PayU integration",
      "Netopia support",
      "Automated invoicing",
      "Payment tracking"
    ]
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated communication system for all stakeholders",
    features: [
      "Email notifications",
      "SMS alerts",
      "Due date reminders",
      "Custom notification rules"
    ]
  },
  {
    icon: Users,
    title: "CRM System",
    description: "Comprehensive client relationship management",
    features: [
      "Client interaction tracking",
      "Lead management",
      "Task automation",
      "Performance analytics"
    ]
  },
  {
    icon: Share2,
    title: "Platform Integration",
    description: "Sync with major Romanian real estate platforms",
    features: [
      "Immobiliare.ro sync",
      "OLX.ro integration",
      "Automated listing updates",
      "Cross-platform analytics"
    ]
  },
  {
    icon: Megaphone,
    title: "Marketing Tools",
    description: "Integrated marketing and advertising solutions",
    features: [
      "Facebook Ads integration",
      "Google Ads management",
      "Campaign analytics",
      "Automated ad optimization"
    ]
  },
  {
    icon: Calculator,
    title: "Accounting Integration",
    description: "Seamless financial management and reporting",
    features: [
      "Saga accounting export",
      "E-factura integration",
      "Automated reconciliation",
      "Financial reporting",
      "BNR exchange rate integration 💶"

    ]
  }
];
const IntegrationPartners = () => {
  const partners = [
    {
      name: 'E-factura',
      logo: '/e-factura.webp', // Update with the correct path
    },

    {
      name: 'Saga Software',
      logo: '/saga-logo.png', // Update with the correct path
    },
    {
      name: 'SAF-T',
      logo: '/saft.webp', // Update with the correct path
    },
    {
      name: 'Property Listing ',
      logo: '/listing.png', // Update with the correct path
    },
  ];

  return (
    <div className="mb-24 text-center">
      <h2 className="text-3xl font-bold mb-12">IntegrationS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="p-6 rounded-lg bg-white/50 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-12 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
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
const Testimonials = () => {
  const testimonials = [
    {
      name: "Costel Ciobanu",
      company: "Coda Vinci SRL",
      rating: 5,
      text: "This software has completely revolutionized how we manage our real estate portfolio. We've reduced document processing time by 70% and doubled the number of transactions closed in the last 6 months. It's an investment truly worth every penny!",
      image: "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747019/yf8u9a5ql7xvyij3bywh.jpg",
    },
    {
      name: "Grigore Anica",
      company: "BREC Business and Real-Estate Consulting",
      rating: 5,
      text: "As a real estate consultant, I need precise and efficient tools. This platform provided exactly what I needed—from client management to detailed market analyses. My collaboration with clients has significantly improved, and their feedback is exceptional.",
      image: "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747070/jpoxov3qweqyokkfeyco.png",
    },
  ];




  return (
    <div className="  max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">What Our Clients Say
      </h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img
              className="w-16 h-16 rounded-full object-cover mb-4"
              src={testimonial.image}
              alt={testimonial.name}
            />
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

const MetricLine = ({ icon: Icon, label, value }: any) => (
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

const LeftVector = () => (
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

const RightVector = () => (
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

export function RealEstate() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 pt-32 pb-24"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-24 text-center">
          <Badge className="mb-4">Next-Gen Real Estate Solutions</Badge>
          <h1 className="text-5xl font-bold mb-6">Advanced Real Estate Management</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored for the Romanian market, with AI-powered features and seamless integrations.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#">
              <Button size="lg" className="transition-all hover:-translate-y-1">
                Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="transition-all hover:-translate-y-1">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Section with Vectors */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute hidden md:flex left-0 top-1/2 -translate-y-1/2">
            <LeftVector />
          </div>

          <img
            src="/Section.svg"
            alt="Real Estate Management"
            className="max-w-full overflow-hidden h-auto rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: '600px' }}
          />

          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2">
            <RightVector />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-24">
          <MetricLine
            icon={Clock}
            label="Setup Time"
            value="3 minute"
          />
          <MetricLine
            icon={Shield}
            label="Cost"
            value="Completlty Free"
          />
          <MetricLine
            icon={ChartBar}
            label="Efficiency Boost"
            value="75%"
          />
        </div>

        {/* Core Features Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">Core Features</h2>
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
          <h2 className="text-3xl font-bold text-center mb-16">Advanced Features & Integrations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANCED_FEATURES.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
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
            ))}
          </div>
        </div>


        {/* Integration Partners */}
        <IntegrationPartners />
        <Testimonials />

      </div>
    </motion.div>
  );
}

export default RealEstate;