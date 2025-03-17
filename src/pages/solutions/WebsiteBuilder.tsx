import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Sparkles, Globe, Layout, Smartphone, Image, Zap, Globe2, Search, BarChart, ArrowRight, ShoppingCart, Package, MessageSquare, CreditCard, Truck } from "lucide-react";

const websiteFeatures = [
    {
        icon: Layout,
        title: "Drag & Drop Builder",
        description: "Craft your site like a designer with our intuitive drag-and-drop interface. Make precise adjustments, add filters, and animate elements directly on the page.",
        image: "/images/website-builder/drag-drop.jpg"
    },
    {
        icon: Sparkles,
        title: "AI-Powered Creation",
        description: "Let AI suggest your website layout and content based on your industry. Boost your copy-writing with ChatGPT integration for better content generation.",
        image: "/images/website-builder/ai-assistant.jpg"
    },
    {
        icon: Smartphone,
        title: "Mobile Responsive",
        description: "Your website automatically adapts to all devices. Control what's visible on mobile with our responsive design tools.",
        image: "/images/website-builder/mobile-responsive.jpg"
    },
    {
        icon: Image,
        title: "3M+ Free Photos",
        description: "Access a vast library of high-quality images from Unsplash to enhance your website's visual appeal.",
        image: "/images/website-builder/imagery.jpg"
    }
];

const ecommerceFeatures = [
    {
        icon: ShoppingCart,
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
    }
];

const additionalFeatures = [
    {
        icon: Globe2,
        title: "Multi-Language Support",
        description: "Install different languages and translate content directly from any page with our built-in translation tools.",
        image: "/images/website-builder/translation.jpg"
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Write search engine-friendly content with our integrated SEO tools to improve your website's visibility.",
        image: "/images/website-builder/seo.jpg"
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
    }
];

const WebsiteBuilder = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Website & E-commerce Builder | Salut Enterprise</title>
                <meta name="description" content="Create your professional website and online store in minutes with our AI-powered builder. Free forever with unlimited users and hosting included." />
                <meta property="og:title" content="Website & E-commerce Builder | Salut Enterprise" />
                <meta property="og:description" content="Create your professional website and online store in minutes with our AI-powered builder. Free forever with unlimited users and hosting included." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/solutions/website-builder" />
                <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Website & E-commerce Builder | Salut Enterprise" />
                <meta name="twitter:description" content="Create your professional website and online store in minutes with our AI-powered builder. Free forever with unlimited users and hosting included." />
                <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-36 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Your Complete Online Presence
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            So good, it's easy to setup - yet stunningly complete. Design appealing pages and manage your entire business from one unified platform.
                        </p>
                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                            >
                                Get Started Free
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
                            Your perfect online presence should be easy to create and maintain
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Set your business", description: "Tell us about your business" },
                            { title: "Add your logo", description: "Upload your brand identity" },
                            { title: "Select features", description: "Choose what you need" },
                            { title: "Choose theme", description: "Pick your favorite design" }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Website Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Website Features
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Everything you need to create a professional website
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {websiteFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="object-cover w-full h-full"
                                    /> */}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-indigo-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                                    </div>
                                    <p className="mt-4 text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <video
                            src="https://download.odoocdn.com/videos/odoo_com/video_website.webm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="rounded-lg w-full  mx-auto h-auto shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* E-commerce Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            E-commerce Features
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Everything you need to run a successful online store
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {ecommerceFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="object-cover w-full h-full"
                                    /> */}
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
                    <video
                        src="https://download.odoocdn.com/videos/odoo_com/video_ecommerce.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="rounded-lg mt-10 w-full  mx-auto h-auto shadow-lg"
                    />
                </div>
            </section>

            {/* Additional Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Additional Features
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            Extra tools to enhance your online presence
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {additionalFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="object-cover w-full h-full"
                                    /> */}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-purple-600 mr-3" />
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
                        Your website and online store are free forever with our One App Free plan, including hosting, unlimited support, and maintenance. No ads or limits.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Start Building Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteBuilder; 