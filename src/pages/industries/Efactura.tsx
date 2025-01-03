import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OnboardingModal } from "@/components/models/OnboardingModal";
import {
    CheckCircle,
    FileCheck,
    Cloud,
    Zap,
    Shield,
    CreditCard,
    Receipt,
    Bell,
    Star,
    Banknote,
    ArrowRight,
    PieChart,
    LineChart,
    Laptop,
} from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const BENEFITS = [
    { title: "Superior e-Factura Compliance", description: "Stay ahead with automated ANAF compliance and real-time validation.", icon: CheckCircle },
    { title: "Enterprise-Grade SAF-T", description: "Built for large-scale operations with automated reporting.", icon: FileCheck },
    { title: "Enterprise Cloud Architecture", description: "Scale confidently with our robust cloud infrastructure.", icon: Cloud },
    { title: "AI-Powered Automation", description: "Reduce manual work by 85% with intelligent automation.", icon: Zap },
    { title: "Bank-Level Security", description: "ISO 27001 certified with end-to-end encryption.", icon: Shield },
    { title: "Advanced Payment Processing", description: "Integrated with all major Romanian banks for real-time tracking.", icon: CreditCard },
    { title: "Multi-Entity Management", description: "Manage multiple companies effortlessly.", icon: CreditCard },
];

const FEATURES = [
    { title: "Advanced e-Factura Suite", description: "Surpass basic compliance with automated validation and batch processing.", icon: Receipt },
    { title: "Proactive Compliance", description: "Stay ahead of regulatory changes with AI-powered updates.", icon: Shield },
    { title: "Global Operations Ready", description: "Support for multiple currencies and international reporting standards.", icon: Banknote },
    { title: "Smart ANAF Integration", description: "Real-time synchronization with automated error correction.", icon: Bell },
    { title: "Executive Analytics", description: "Custom dashboards for financial performance insights.", icon: PieChart },
    { title: "Enterprise Integration Hub", description: "Seamless connection with Saga, WinMentor, and custom ERP systems.", icon: Laptop },
    { title: "Automated Collections", description: "Reduce outstanding payments by 60% with smart tracking.", icon: CreditCard },
    { title: "Financial Intelligence", description: "ML-powered forecasting and cash flow optimization.", icon: LineChart },
];

const SUCCESS_METRICS = [
    { icon: Star, value: "98.5%", label: "Client Satisfaction" },
    { icon: Zap, value: "85%", label: "Time Saved" },
    { icon: Shield, value: "99.9%", label: "Compliance Rate" },
];

const MetricLine = ({ icon: Icon, label, value }: any) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg">
        <div className="rounded-full bg-blue-50 p-4 mb-3">
            <Icon className="h-8 w-8 text-blue-600" />
        </div>
        <div className="text-3xl font-bold text-blue-600 mb-2">{value}</div>
        <div className="text-sm text-gray-600 text-center">{label}</div>
    </motion.div>
);

const FeatureGrid = ({ items }: any) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item: any) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                        <div className="rounded-full bg-blue-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                            <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
        ))}
    </div>
);

export default function EFactura() {
    const [showOnboarding, setShowOnboarding] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
            <Helmet>
                <title>Transform Your Invoicing with E-Factura Solutions</title>
                <meta name="description" content="Discover enterprise-grade e-invoicing solutions with automated compliance, AI-powered automation, and robust financial intelligence." />
                <meta name="keywords" content="e-invoicing, ANAF compliance, AI automation, financial intelligence, enterprise invoicing" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <header className="py-24 text-center">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">E-Invoicing Solutions</Badge>
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                    Transform Your Invoicing Process
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    The only enterprise-grade platform that combines advanced e-invoicing compliance and AI-powered financial intelligence.
                </p>
                <div className="flex justify-center gap-6">
                    <Button size="lg" onClick={() => setShowOnboarding(true)} className="bg-blue-600 hover:bg-blue-700 shadow-lg">
                        Get Started<ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        ROI Calculator
                    </Button>
                </div>
            </header>
            {/* Trust Indicators */}{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-24">
                {" "}
                {SUCCESS_METRICS.map((metric) => (
                    <MetricLine
                        key={metric.label}
                        icon={metric.icon}
                        label={metric.label}
                        value={metric.value}
                    />
                ))}{" "}
            </div>{" "}
            <main>
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                        <p className="text-xl text-gray-600">Built for efficiency and compliance</p>
                    </div>
                    <FeatureGrid items={FEATURES} />
                </section>
                <section className="py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Benefits of Our Solution</h2>
                        <p className="text-xl text-gray-600">Designed for scale and performance</p>
                    </div>
                    <FeatureGrid items={BENEFITS} />
                </section>
                <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Invoicing?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Join industry leaders who trust our platform for their invoicing needs.
                        </p>
                        <Button size="lg" variant="secondary" className="border-gray-500 bg-black hover:bg-blue-50 text-blue-600">
                            Schedule a Demo
                        </Button>
                    </div>
                </section>
            </main>
            <OnboardingModal open={showOnboarding} onOpenChange={setShowOnboarding} />
        </div>
    );
}
