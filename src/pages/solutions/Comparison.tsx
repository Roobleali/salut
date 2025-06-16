import React from 'react';
import { Helmet } from "react-helmet";
import { Sparkles, Globe, ShoppingCart, MessageSquare, Package, Layout as LayoutIcon } from "lucide-react";
import Layout from '../../components/Layout';

interface Feature {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

interface Category {
    category: string;
    features: Feature[];
}

const mainFeatures: Category[] = [
    {
        category: "Website Builder",
        features: [
            {
                icon: Sparkles,
                title: "AI Assistance",
                description: "AI-powered layout suggestions and ChatGPT integration for content generation, making website creation effortless.",
            },
            {
                icon: Globe,
                title: "Cost & Accessibility",
                description: "Free forever with unlimited users, including hosting and maintenance - perfect for small businesses.",
            },
            {
                icon: LayoutIcon,
                title: "Design Flexibility",
                description: "Drag-and-drop building blocks, mobile responsiveness, and free imagery from Unsplash.",
            },
        ],
    },
    {
        category: "E-commerce Platform",
        features: [
            {
                icon: ShoppingCart,
                title: "No-Code Building",
                description: "AI-based website builder with dedicated themes for easy store creation.",
            },
            {
                icon: Package,
                title: "Product Management",
                description: "Adaptive products with variants, automated stock updates, and upselling features.",
            },
            {
                icon: MessageSquare,
                title: "Customer Engagement",
                description: "Real-time chat and review displays with Google Analytics integration.",
            },
        ],
    },
];

const comparisonTables = [
    {
        title: "Core Features Comparison",
        features: [
            {
                name: "Cost",
                websiteBuilder: "Free forever, 1-year free domain",
                ecommerce: "Free forever, 1-year free domain",
            },
            {
                name: "AI Assistance",
                websiteBuilder: "Layout suggestions, ChatGPT content",
                ecommerce: "AI-based builder, no-code mode",
            },
            {
                name: "Design Tools",
                websiteBuilder: "Drag-and-drop, mobile responsive",
                ecommerce: "Drag-and-drop, 3M+ free photos",
            },
            {
                name: "Product Features",
                websiteBuilder: "N/A",
                ecommerce: "Adaptive products, stock management",
            },
            {
                name: "Integration",
                websiteBuilder: "SEO, analytics",
                ecommerce: "Payment providers, Google Analytics",
            },
        ],
    },
    {
        title: "Additional Features",
        features: [
            {
                name: "Language Support",
                websiteBuilder: "Translation available",
                ecommerce: "N/A",
            },
            {
                name: "Market Adaptability",
                websiteBuilder: "N/A",
                ecommerce: "Integration with Amazon, Facebook",
            },
            {
                name: "Customer Interaction",
                websiteBuilder: "N/A",
                ecommerce: "Real-time chat, reviews",
            },
            {
                name: "Shipping Options",
                websiteBuilder: "N/A",
                ecommerce: "Click and collect, shipping",
            },
        ],
    },
];

const Comparison = () => {
    return (
        <Layout ariaLabel="Solution Comparison">
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                <Helmet>
                    <title>Solution Comparison | dolcenera </title>
                    <meta name="description" content="Compare our website builder and e-commerce solutions to find the perfect fit for your business." />
                    <meta property="og:title" content="Solution Comparison | dolcenera " />
                    <meta property="og:description" content="Compare our website builder and e-commerce solutions to find the perfect fit for your business." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://garemit.com/solutions/comparison" />
                    <meta property="og:image" content="https://garemit.com/og-image.jpg" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Solution Comparison | dolcenera " />
                    <meta name="twitter:description" content="Compare our website builder and e-commerce solutions to find the perfect fit for your business." />
                    <meta name="twitter:image" content="https://garemit.com/og-image.jpg" />
                </Helmet>

                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                                Solution Comparison
                            </h1>
                            <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                                Compare our website builder and e-commerce solutions to find the perfect fit for your business needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Main Features Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {mainFeatures.map((category, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
                                    <div className="space-y-6">
                                        {category.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-start">
                                                <feature.icon className="w-6 h-6 text-indigo-600 mt-1 mr-4" />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                                    <p className="mt-1 text-gray-600">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Tables Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {comparisonTables.map((table, tableIndex) => (
                            <div key={tableIndex} className="mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">{table.title}</h2>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Feature
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Website Builder
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    E-commerce Platform
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {table.features.map((feature, featureIndex) => (
                                                <tr key={featureIndex}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {feature.name}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {feature.websiteBuilder}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {feature.ecommerce}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Ready to Choose Your Solution?
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Let's discuss which solution best fits your business needs.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </section>

                {/* New Comparison Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
                            ⚖️ Traditional Remittance vs. Garemit
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                                        <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Traditional Remittance</th>
                                        <th className="py-3 px-4 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">🚀 Garemit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Speed</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🐌 1–5 days (banks, agents)</td>
                                        <td className="py-3 px-4 border-t border-gray-200">⚡ Instant or same-day (blockchain rails)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Fees</td>
                                        <td className="py-3 px-4 border-t border-gray-200">💸 5–12% (hidden + FX margin)</td>
                                        <td className="py-3 px-4 border-t border-gray-200">💰 1–3% transparent flat rate</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Access</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🏦 Requires bank accounts or cash agents</td>
                                        <td className="py-3 px-4 border-t border-gray-200">📱 Phone-to-phone, no bank needed</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Transparency</td>
                                        <td className="py-3 px-4 border-t border-gray-200">❌ Opaque: "Your money is being processed"</td>
                                        <td className="py-3 px-4 border-t border-gray-200">✅ Real-time status tracking</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Energy Loss (Physics)</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🔥 High friction — money loses value via middlemen</td>
                                        <td className="py-3 px-4 border-t border-gray-200">♻️ Conservation of value — minimal loss</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">User Experience</td>
                                        <td className="py-3 px-4 border-t border-gray-200">😓 Long forms, queues, ID photocopies</td>
                                        <td className="py-3 px-4 border-t border-gray-200">😌 Smooth onboarding, digital-first</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Hours</td>
                                        <td className="py-3 px-4 border-t border-gray-200">⏰ Office hours only</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🕐 24/7 anytime, anywhere</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Support</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🧱 Disconnected agents, slow support</td>
                                        <td className="py-3 px-4 border-t border-gray-200">💬 Live chat + smart notifications</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Currency Exchange</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🤐 Hidden FX rates</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🔍 Fair market rates (via stablecoin logic)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 border-t border-gray-200">Trust</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🤔 Relies on legacy institutions</td>
                                        <td className="py-3 px-4 border-t border-gray-200">🤝 Built by diaspora, for diaspora</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Comparison; 