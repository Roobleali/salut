import { Helmet } from "react-helmet";
import { Shield, Clock, Server, Users } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Enterprise-Grade Security",
        description: "Advanced security measures including SSL encryption, regular backups, and DDoS protection to keep your data safe.",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Round-the-clock technical support with guaranteed response times and dedicated support team.",
    },
    {
        icon: Server,
        title: "High Availability",
        description: "99.9% uptime guarantee with redundant infrastructure and automatic failover systems.",
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Dedicated team of certified professionals providing proactive monitoring and maintenance.",
    },
];

const HostingSupport = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Hosting & Support Services | Salut Enterprise</title>
                <meta name="description" content="Enterprise-grade hosting and support services to keep your systems running smoothly." />
                <meta property="og:title" content="Hosting & Support Services | Salut Enterprise" />
                <meta property="og:description" content="Enterprise-grade hosting and support services to keep your systems running smoothly." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/solutions/hosting-support" />
                <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Hosting & Support Services | Salut Enterprise" />
                <meta name="twitter:description" content="Enterprise-grade hosting and support services to keep your systems running smoothly." />
                <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Enterprise Hosting & Support
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            Reliable hosting infrastructure and expert support services to ensure your business operations run smoothly 24/7.
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
                                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Ready to Get Started?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Contact us today to discuss your hosting and support needs.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HostingSupport; 