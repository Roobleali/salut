import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";

const RESOURCES = [
    {
        id: 1,
        title: "ERP Implementation Guide",
        description: "A comprehensive guide to successfully implementing an ERP system in your organization.",
        type: "Guide",
        downloadUrl: "/resources/erp-implementation-guide.pdf",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Digital Transformation Checklist",
        description: "A step-by-step checklist to help you plan and execute your digital transformation journey.",
        type: "Checklist",
        downloadUrl: "/resources/digital-transformation-checklist.pdf",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Industry Best Practices",
        description: "Collection of best practices for various industries including manufacturing, retail, and real estate.",
        type: "Whitepaper",
        downloadUrl: "/resources/industry-best-practices.pdf",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        )
    }
];

export function Resources() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Resources | {t('common.company_name')} - Enterprise Management Resources</title>
                <meta name="description" content="Access valuable resources, guides, and best practices for enterprise management, digital transformation, and business optimization." />
                <meta name="keywords" content="ERP resources, business guides, digital transformation, enterprise management, industry best practices" />

                {/* Open Graph tags */}
                <meta property="og:title" content={`Resources | ${t('common.company_name')} - Enterprise Management Resources`} />
                <meta property="og:description" content="Access valuable resources, guides, and best practices for enterprise management, digital transformation, and business optimization." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/resources" />
                <meta property="og:image" content="https://saluttech.ro/resources/og-image.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Resources | ${t('common.company_name')} - Enterprise Management Resources`} />
                <meta name="twitter:description" content="Access valuable resources, guides, and best practices for enterprise management, digital transformation, and business optimization." />
                <meta name="twitter:image" content="https://saluttech.ro/resources/og-image.jpg" />

                {/* Structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": `${t('common.company_name')} Resources`,
                        "description": "Enterprise management resources and guides",
                        "url": "https://saluttech.ro/resources",
                        "itemListElement": RESOURCES.map((resource, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "WebPage",
                                "name": resource.title,
                                "description": resource.description,
                                "url": `https://saluttech.ro${resource.downloadUrl}`
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-center mb-8">Enterprise Management Resources</h1>
                        <p className="text-xl text-gray-600 text-center mb-12">
                            Access valuable guides, checklists, and best practices to help you transform your business
                        </p>

                        <div className="grid gap-8">
                            {RESOURCES.map((resource) => (
                                <article key={resource.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            {resource.icon}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                                    {resource.type}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
                                            <p className="text-gray-600 mb-6">{resource.description}</p>
                                            <a
                                                href={resource.downloadUrl}
                                                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                                                download
                                            >
                                                Download resource →
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Newsletter signup */}
                        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-center mb-4">Get More Resources</h2>
                            <p className="text-gray-600 text-center mb-6">
                                Subscribe to our newsletter to receive new resources and updates
                            </p>
                            <form className="max-w-md mx-auto flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 