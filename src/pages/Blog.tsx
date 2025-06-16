import { Helmet } from "react-helmet";
import { Link } from "wouter";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of  Resource Planning: AI and Automation",
        excerpt: "Discover how artificial intelligence and automation are transforming ERP systems and revolutionizing business operations.",
        category: "nology",
        date: "2024-03-15",
        readTime: "8 min read",
        image: "/blog/erp-future.jpg",
        slug: "future-of--resource-planning"
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

    return (
        <>
            <Helmet>
                <title>Blog | Dolcenera Franchising - Management Insights</title>
                <meta name="description" content="Stay updated with the latest insights on management, digital transformation, and industry trends. Expert analysis and best practices from Dolcenera Franchising." />
                <meta name="keywords" content="ERP blog, management, digital transformation, manufacturing insights, retail, business automation, Dolcenera Franchising" />

                {/* Open Graph tags */}
                <meta property="og:title" content="Dolcenera Franchising Blog" />
                <meta property="og:description" content="Expert analysis and best practices from Dolcenera Franchising." />
                <meta property="og:type" content="blog" />
                <meta property="og:url" content="https://dolcenera.com/blog" />
                <meta property="og:image" content="https://dolcenera.com/blog/og-image.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dolcenera Franchising Blog" />
                <meta name="twitter:description" content="Expert analysis and best practices from Dolcenera Franchising." />
                <meta name="twitter:image" content="https://dolcenera.com/blog/og-image.jpg" />

                {/* Structured data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Dolcenera Franchising Blog",
                        "description": "Management insights and industry trends from Dolcenera Franchising",
                        "url": "https://dolcenera.com/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Dolcenera Franchising",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://dolcenera.com/logo.jpeg"
                            }
                        },
                        "blogPost": BLOG_POSTS.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "image": `https://dolcenera.com${post.image}`,
                            "datePublished": post.date,
                            "author": {
                                "@type": "Organization",
                                "name": "Dolcenera Franchising"
                            }
                        }))
                    })}
                </script>

                <meta name="author" content="Dolcenera Franchising" />
                <link rel="canonical" href="https://dolcenera.com/blog" />
                <link rel="alternate" hrefLang="en" href="https://dolcenera.com/blog" />
                <link rel="alternate" hrefLang="ro" href="https://dolcenera.com/ro/blog" />
            </Helmet>

            <div className="min-h-screen bg-white">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-bold text-center mb-8">Management Insights Dolcenera Franchising</h1>
                        <p className="text-xl text-gray-600 text-center mb-12">
                            Expert analysis, industry trends, and best practices for modern management from Dolcenera Franchising
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