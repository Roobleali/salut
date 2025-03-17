import { Helmet } from "react-helmet";
import { ShoppingCart, Package, MessageSquare, BarChart, CreditCard, Globe, Truck, Zap, ArrowRight } from "lucide-react";

const features = [
    {
        icon: ShoppingCart,
        title: "No-Code Store Creation",
        description: "Create your perfect online store in minutes with our AI-based website builder. Use dedicated business themes and drag-and-drop building blocks for stylish product pages.",
        image: "/images/ecommerce/store-creation.jpg"
    },
    {
        icon: Package,
        title: "Adaptive Products",
        description: "Display your products in all their facets with configurable sizes, colors, and variants. Automated stock management updates in real-time for each variant.",
        image: "/images/ecommerce/product-management.jpg"
    },
    {
        icon: MessageSquare,
        title: "Customer Engagement",
        description: "Build stronger relationships with real-time chat support and customer reviews. Help customers find their next best buy with smart recommendations.",
        image: "/images/ecommerce/customer-engagement.jpg"
    },
    {
        icon: BarChart,
        title: "Analytics & Growth",
        description: "Track your store's performance with built-in analytics. Build advanced reports and cross-check data to make informed business decisions.",
        image: "/images/ecommerce/analytics.jpg"
    },
    {
        icon: CreditCard,
        title: "Payment Integration",
        description: "Offer a variety of payment options to your customers. Seamlessly integrate with popular payment providers for secure transactions.",
        image: "/images/ecommerce/payments.jpg"
    },
    {
        icon: Globe,
        title: "Market Adaptability",
        description: "Expand your reach with integrations to major marketplaces like Amazon and Facebook. Reach more customers where they shop.",
        image: "/images/ecommerce/marketplace.jpg"
    },
    {
        icon: Truck,
        title: "Flexible Shipping",
        description: "Offer multiple shipping options including click and collect. Let customers shop online and pick up orders at your store.",
        image: "/images/ecommerce/shipping.jpg"
    },
    {
        icon: Zap,
        title: "Smart Features",
        description: "Boost sales with upselling and cross-selling features. Automate inventory management and streamline your operations.",
        image: "/images/ecommerce/features.jpg"
    }
];

const Ecommerce = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>E-commerce Solutions | Salut Enterprise</title>
                <meta name="description" content="Create and manage your online store with our comprehensive e-commerce platform." />
                <meta property="og:title" content="E-commerce Solutions | Salut Enterprise" />
                <meta property="og:description" content="Create and manage your online store with our comprehensive e-commerce platform." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/solutions/ecommerce" />
                <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="E-commerce Solutions | Salut Enterprise" />
                <meta name="twitter:description" content="Create and manage your online store with our comprehensive e-commerce platform." />
                <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Your Complete E-commerce Solution
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            So good, it's easy to setup - yet stunningly complete. Design appealing product pages and manage your entire business from one unified platform.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50"
                            >
                                Start Selling Online
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Setup Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            No-Code Mode
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Your perfect online store should be easy to create and maintain
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "AI-Based Builder", description: "Generate your store in no time" },
                            { title: "Dedicated Themes", description: "Professional designs for every business" },
                            { title: "Drag & Drop", description: "Design stylish product pages easily" }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-pink-600">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            All the Features You Need
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Everything required to run a successful online store
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-pink-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                    </div>
                                    <p className="mt-4 text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Free Forever, Unlimited Users
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Start selling online with our free e-commerce platform. No hidden fees, no limits on products or customers.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                        >
                            Start Your Store Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ecommerce; 