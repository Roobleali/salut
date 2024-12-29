import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Check,
    ArrowRight,
    FileCheck,
    Clock,
    Shield,
    BarChart,
    Globe,
    Building2,
    Bell,
    Banknote,
    RefreshCw,
    Languages
} from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
    {
        title: "Real-Time ANAF Integration",
        description: "Receive instant notifications for new messages and updates from ANAF platform.",
        icon: Bell
    },
    {
        title: "Multi-Currency Support",
        description: "Generate invoices in any currency with automatic RON conversion using BNR exchange rates.",
        icon: Banknote
    },
    {
        title: "Multi-Company Management",
        description: "Manage multiple companies under one dashboard with separate workflows and reports.",
        icon: Building2
    },
    {
        title: "Automated BNR Exchange Rates",
        description: "Daily automatic updates of exchange rates from Romanian National Bank (BNR).",
        icon: RefreshCw
    },
    {
        title: "Smart Validation Engine",
        description: "Real-time validation ensuring compliance with latest ANAF requirements.",
        icon: Shield
    },
    {
        title: "International Trading Support",
        description: "Handle both domestic and international invoices with built-in VAT rules.",
        icon: Globe
    },
    {
        title: "Multi-Language Interface",
        description: "Switch between Romanian, English, and other languages instantly.",
        icon: Languages
    },
    {
        title: "Advanced Analytics",
        description: "Get insights into your invoicing patterns and compliance metrics.",
        icon: BarChart
    }
];

const BENEFITS = [
    "Compliant with January 2024 Romanian e-Factura regulations",
    "Instant ANAF message notifications",
    "Automated BNR exchange rate updates",
    "Multi-company support with separate workflows",
    "Real-time validation and error checking",
    "International trading support with VAT rules",
    "Multi-language interface",
    "Comprehensive audit trails"
];

const METRICS = [
    { label: "Processing Time Saved", value: "85%" },
    { label: "Error Reduction", value: "99%" },
    { label: "Compliance Rate", value: "100%" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function EFactura() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-blue-50 pt-32 pb-24">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <Badge className="mb-4 bg-blue-100 text-blue-800">Romanian e-Factura Solution</Badge>
                    <h1 className="text-4xl font-bold mb-6">
                        Complete Romanian e-Factura Platform
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        One platform for all your e-Factura needs. Get instant ANAF notifications, automatic BNR rates,
                        and support for multiple companies and currencies.
                    </p>
                    <motion.div
                        className="flex gap-4 justify-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Schedule Demo
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    {FEATURES.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="h-full"
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col items-center text-center gap-4">
                                        <feature.icon className="h-8 w-8 text-blue-600" />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Compliance Notice */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-50 rounded-lg p-8 mb-24"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold mb-4">Real-Time ANAF Integration</h2>
                        <p className="text-gray-700">
                            Stay updated with instant notifications from ANAF. Our platform continuously
                            synchronizes with ANAF's systems to ensure you never miss important updates
                            or messages.
                        </p>
                    </div>
                </motion.div>

                {/* Benefits Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto mb-24"
                >
                    <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {BENEFITS.map((benefit) => (
                            <motion.div
                                key={benefit}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Metrics Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-8 text-center">
                                Trusted by Romanian Businesses
                            </h3>

                            <div className="grid sm:grid-cols-3 gap-8 mb-8">
                                {METRICS.map((metric) => (
                                    <motion.div
                                        key={metric.label}
                                        initial={{ scale: 0.9 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        className="text-center"
                                    >
                                        <div className="text-3xl font-bold text-blue-600 mb-2">
                                            {metric.value}
                                        </div>
                                        <div className="text-sm text-gray-600">{metric.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="text-center mt-8"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                                    Get Started Today
                                </Button>
                            </motion.div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}