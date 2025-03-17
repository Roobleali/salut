import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of Enterprise Resource Planning: AI and Automation",
        excerpt: "Discover how artificial intelligence and automation are transforming ERP systems and revolutionizing business operations.",
        category: "Technology",
        date: "2024-03-15",
        readTime: "8 min read",
        image: "/blog/erp-future.jpg",
        slug: "future-of-enterprise-resource-planning"
    },
    {
        id: 2,
        title: "How to Choose the Right ERP System for Your Manufacturing Business",
        excerpt: "A comprehensive guide to selecting an ERP system that aligns with your manufacturing needs and business goals.",
        category: "Manufacturing",
        date: "2024-03-10",
        readTime: "10 min read",
        image: "/blog/erp-selection.jpg",
        slug: "choose-right-erp-manufacturing"
    },
    {
        id: 3,
        title: "Digital Transformation in Retail: Success Stories and Best Practices",
        excerpt: "Learn from successful retail businesses that have transformed their operations through digital solutions.",
        category: "Retail",
        date: "2024-03-05",
        readTime: "7 min read",
        image: "/blog/retail-transformation.jpg",
        slug: "digital-transformation-retail"
    }
];

export function Blog() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>Blog | {t('common.company_name')} - Enterprise Management Insights</title>
                <meta name="description" content="Stay updated with the latest insights on enterprise management, digital transformation, and industry trends. Expert analysis and best practices from Salut Enterprise." />
                <meta name="keywords" content="ERP blog, enterprise management, digital transformation, manufacturing insights, retail technology, business automation" />

                {/* Open Graph tags */}
                <meta property="og:title" content={`Blog | ${t('common.company_name')} - Enterprise Management Insights`} />
                <meta property="og:description" content="Stay updated with the latest insights on enterprise management, digital transformation, and industry trends. Expert analysis and best practices from Salut Enterprise." />
                <meta property="og:type" content="blog" />
                <meta property="og:url" content="https://saluttech.ro/blog" />
                <meta property="og:image" content="https://saluttech.ro/blog/og-image.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`Blog | ${t('common.company_name')} - Enterprise Management Insights`} />
                <meta name="twitter:description" content="Stay updated with the latest insights on enterprise management, digital transformation, and industry trends. Expert analysis and best practices from Salut Enterprise." />
                <meta name="twitter:image" content="https://saluttech.ro/blog/og-image.jpg" />

                {/* Structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": `${t('common.company_name')} Blog`,
                        "description": "Enterprise management insights and industry trends",
                        "url": "https://saluttech.ro/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Salut Enterprise",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://saluttech.ro/logo.jpeg"
                            }
                        },
                        "blogPost": BLOG_POSTS.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "image": `https://saluttech.ro${post.image}`,
                            "datePublished": post.date,
                            "author": {
                                "@type": "Organization",
                                "name": "Salut Enterprise"
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-center mb-8">Enterprise Management Insights</h1>
                        <p className="text-xl text-gray-600 text-center mb-12">
                            Expert analysis, industry trends, and best practices for modern enterprise management
                        </p>

                        <div className="grid gap-8">
                            {BLOG_POSTS.map((post) => (
                                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                    <div className="md:flex">
                                        <div className="md:flex-shrink-0">
                                            <img
                                                className="h-48 w-full object-cover md:w-48"
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                                    {post.category}
                                                </span>
                                                <span className="text-gray-500 text-sm">{post.readTime}</span>
                                            </div>
                                            <h2 className="text-2xl font-bold mb-4">
                                                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                                    {post.title}
                                                </Link>
                                            </h2>
                                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500">{post.date}</span>
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    className="text-primary hover:text-primary/80 font-medium"
                                                >
                                                    Read more →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Newsletter signup */}
                        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-center mb-4">Stay Updated</h2>
                            <p className="text-gray-600 text-center mb-6">
                                Subscribe to our newsletter for the latest insights and industry updates
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