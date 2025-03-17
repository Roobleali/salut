import { Helmet } from "react-helmet";
import { Database, ArrowRight, Shield, Clock, Users } from "lucide-react";

const features = [
    {
        icon: Database,
        title: "Data Migration",
        description: "Seamless transfer of your existing data with zero loss and complete integrity.",
    },
    {
        icon: Shield,
        title: "Secure Process",
        description: "Enterprise-grade security measures ensuring your data remains protected throughout the migration.",
    },
    {
        icon: Clock,
        title: "Minimal Downtime",
        description: "Optimized migration process designed to minimize business disruption.",
    },
    {
        icon: Users,
        title: "Expert Support",
        description: "Dedicated migration team providing guidance and support throughout the process.",
    },
];

const migrationSteps = [
    {
        title: "Assessment",
        description: "Comprehensive analysis of your current system and data structure.",
        details: [
            "System architecture review",
            "Data mapping and analysis",
            "Customization assessment",
            "Integration requirements",
        ],
    },
    {
        title: "Planning",
        description: "Detailed migration strategy and timeline development.",
        details: [
            "Migration roadmap creation",
            "Resource allocation",
            "Risk assessment",
            "Backup strategy",
        ],
    },
    {
        title: "Execution",
        description: "Careful execution of the migration plan with continuous monitoring.",
        details: [
            "Data transfer",
            "System configuration",
            "Integration setup",
            "Testing and validation",
        ],
    },
    {
        title: "Completion",
        description: "Final verification and transition to the new system.",
        details: [
            "Data verification",
            "User acceptance testing",
            "Performance optimization",
            "Go-live support",
        ],
    },
];

const Migration = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Migration Services | Salut Enterprise</title>
                <meta name="description" content="Seamless migration services to help you transition to our enterprise solutions." />
                <meta property="og:title" content="Migration Services | Salut Enterprise" />
                <meta property="og:description" content="Seamless migration services to help you transition to our enterprise solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/solutions/migration" />
                <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Migration Services | Salut Enterprise" />
                <meta name="twitter:description" content="Seamless migration services to help you transition to our enterprise solutions." />
                <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Enterprise Migration
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            Seamless system migration services designed to minimize disruption and ensure zero data loss.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <feature.icon className="w-12 h-12 text-orange-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Process Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                        Our Migration Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {migrationSteps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="bg-white rounded-lg shadow-lg p-6">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="text-orange-600 font-bold">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 mb-4">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="flex items-center text-gray-600">
                                                <span className="w-2 h-2 bg-orange-600 rounded-full mr-2"></span>
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {index < migrationSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                                        <ArrowRight className="w-6 h-6 text-orange-600" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Ready to Migrate Your System?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Let's discuss your migration needs and create a tailored plan for your business.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Migration; 