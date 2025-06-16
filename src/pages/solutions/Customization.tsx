import { Helmet } from "react-helmet";
import { Settings, Code, Puzzle, Zap, Shield, Clock } from "lucide-react";

const features = [
    {
        icon: Code,
        title: "Custom Development",
        description: "Tailored software solutions built to match your specific business requirements and workflows.",
    },
    {
        icon: Puzzle,
        title: "Module Integration",
        description: "Seamless integration of custom modules with existing systems and third-party applications.",
    },
    {
        icon: Zap,
        title: "Performance Optimization",
        description: "Enhanced system performance through custom optimizations and efficient code practices.",
    },
    {
        icon: Shield,
        title: "Security Enhancements",
        description: "Additional security layers and compliance features tailored to your industry requirements.",
    },
    {
        icon: Clock,
        title: "Rapid Development",
        description: "Agile development methodology ensuring quick delivery of custom solutions.",
    },
    {
        icon: Settings,
        title: "Flexible Configuration",
        description: "Customizable settings and configurations to adapt to your business needs.",
    },
];

const Customization = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Customization Services | dolcenera </title>
                <meta name="description" content="Tailored solutions to meet your specific business needs and requirements." />
                <meta property="og:title" content="Customization Services | dolcenera " />
                <meta property="og:description" content="Tailored solutions to meet your specific business needs and requirements." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://garemit.com/solutions/customization" />
                <meta property="og:image" content="https://garemit.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Customization Services | dolcenera " />
                <meta name="twitter:description" content="Tailored solutions to meet your specific business needs and requirements." />
                <meta name="twitter:image" content="https://garemit.com/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Customization
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            Tailored software solutions and integrations designed to match your unique business requirements and workflows.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                        Our Customization Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Requirements Analysis</h3>
                            <p className="mt-2 text-gray-600">Understanding your specific needs and objectives</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Solution Design</h3>
                            <p className="mt-2 text-gray-600">Creating detailed nical specifications</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Development</h3>
                            <p className="mt-2 text-gray-600">Building your custom solution</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-purple-600 font-bold">4</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">Testing & Deployment</h3>
                            <p className="mt-2 text-gray-600">Ensuring quality and smooth implementation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Ready to Customize Your Solution?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Let's discuss how we can tailor our solutions to your specific needs.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Customization; 