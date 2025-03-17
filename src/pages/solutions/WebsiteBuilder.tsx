import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Sparkles, Globe, Layout, Smartphone, Image, Zap, Globe2, Search, BarChart, ArrowRight, ShoppingCart, Package, MessageSquare, CreditCard, Truck } from "lucide-react";

const websiteFeatures = [
    {
        icon: Layout,
        translationKey: "dragDrop",
        image: "/images/website-builder/drag-drop.jpg"
    },
    {
        icon: Sparkles,
        translationKey: "ai",
        image: "/images/website-builder/ai-assistant.jpg"
    },
    {
        icon: Smartphone,
        translationKey: "mobile",
        image: "/images/website-builder/mobile-responsive.jpg"
    },
    {
        icon: Image,
        translationKey: "photos",
        image: "/images/website-builder/imagery.jpg"
    }
];

const ecommerceFeatures = [
    {
        icon: ShoppingCart,
        translationKey: "products",
        image: "/images/ecommerce/product-management.jpg"
    },
    {
        icon: MessageSquare,
        translationKey: "engagement",
        image: "/images/ecommerce/customer-engagement.jpg"
    },
    {
        icon: BarChart,
        translationKey: "analytics",
        image: "/images/ecommerce/analytics.jpg"
    },
    {
        icon: CreditCard,
        translationKey: "payments",
        image: "/images/ecommerce/payments.jpg"
    }
];

const additionalFeatures = [
    {
        icon: Globe2,
        translationKey: "language",
        image: "/images/website-builder/translation.jpg"
    },
    {
        icon: Search,
        translationKey: "seo",
        image: "/images/website-builder/seo.jpg"
    },
    {
        icon: Globe,
        translationKey: "market",
        image: "/images/ecommerce/marketplace.jpg"
    },
    {
        icon: Truck,
        translationKey: "shipping",
        image: "/images/ecommerce/shipping.jpg"
    }
];

const WebsiteBuilder = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>{t('websiteBuilder.hero.title')} | {t('common.company_name')}</title>
                <meta name="description" content={t('websiteBuilder.hero.subtitle')} />
                <meta property="og:title" content={`${t('websiteBuilder.hero.title')} | ${t('common.company_name')}`} />
                <meta property="og:description" content={t('websiteBuilder.hero.subtitle')} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/solutions/website-builder" />
                <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${t('websiteBuilder.hero.title')} | ${t('common.company_name')}`} />
                <meta name="twitter:description" content={t('websiteBuilder.hero.subtitle')} />
                <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative pt-36 py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            {t('websiteBuilder.hero.title')}
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            {t('websiteBuilder.hero.subtitle')}
                        </p>
                        <div className="mt-8">
                            <a
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                            >
                                {t('websiteBuilder.hero.cta')}
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
                            {t('websiteBuilder.quickSetup.title')}
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            {t('websiteBuilder.quickSetup.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { key: 'business' },
                            { key: 'logo' },
                            { key: 'features' },
                            { key: 'theme' }
                        ].map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {t(`websiteBuilder.quickSetup.steps.${step.key}.title`)}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {t(`websiteBuilder.quickSetup.steps.${step.key}.description`)}
                                </p>
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
                            {t('websiteBuilder.websiteFeatures.title')}
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            {t('websiteBuilder.websiteFeatures.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {websiteFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* <img
                                        src={feature.image}
                                        alt={t(`websiteBuilder.websiteFeatures.${feature.translationKey}.title`)}
                                        className="object-cover w-full h-full"
                                    /> */}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-indigo-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {t(`websiteBuilder.websiteFeatures.${feature.translationKey}.title`)}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-gray-600">
                                        {t(`websiteBuilder.websiteFeatures.${feature.translationKey}.description`)}
                                    </p>
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
                            className="rounded-lg w-full mx-auto h-auto shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* E-commerce Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            {t('websiteBuilder.ecommerceFeatures.title')}
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            {t('websiteBuilder.ecommerceFeatures.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {ecommerceFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* <img
                                        src={feature.image}
                                        alt={t(`websiteBuilder.ecommerceFeatures.${feature.translationKey}.title`)}
                                        className="object-cover w-full h-full"
                                    /> */}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-pink-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {t(`websiteBuilder.ecommerceFeatures.${feature.translationKey}.title`)}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-gray-600">
                                        {t(`websiteBuilder.ecommerceFeatures.${feature.translationKey}.description`)}
                                    </p>
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
                        className="rounded-lg mt-10 w-full mx-auto h-auto shadow-lg"
                    />
                </div>
            </section>

            {/* Additional Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            {t('websiteBuilder.additionalFeatures.title')}
                        </h2>
                        <p className="mt-4 text-xl text-gray-600">
                            {t('websiteBuilder.additionalFeatures.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {additionalFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* <img
                                        src={feature.image}
                                        alt={t(`websiteBuilder.additionalFeatures.${feature.translationKey}.title`)}
                                        className="object-cover w-full h-full"
                                    /> */}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <feature.icon className="w-6 h-6 text-purple-600 mr-3" />
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {t(`websiteBuilder.additionalFeatures.${feature.translationKey}.title`)}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-gray-600">
                                        {t(`websiteBuilder.additionalFeatures.${feature.translationKey}.description`)}
                                    </p>
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
                        {t('websiteBuilder.pricing.title')}
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('websiteBuilder.pricing.subtitle')}
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            {t('websiteBuilder.pricing.cta')}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebsiteBuilder; 