// @ts-nocheck

import { useState, useEffect } from 'react';
import { Link, } from 'wouter';
import { contentfulClient } from '../../config/contentful';
import { Calendar, ChevronRight, User, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { EntrySkeletonType } from 'contentful';

// Utility function to create SEO-friendly slug
const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
};

interface Author {
    fields: {
        name: string;
        avatar: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
    };
}

interface BlogPost extends EntrySkeletonType {
    sys: {
        id: string;
        createdAt: string;
        contentTypeId?: string;
    };
    fields: {
        title: string;
        excerpt: string;
        content: any;
        tags: string[] | undefined;
        featuredImage?: {
            fields: {
                file: {
                    url: string;
                };
                description: string;
            };
        };
        author: {
            fields: Author['fields'];
        };
    };
}



export const BlogList = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await contentfulClient.getEntries<BlogPost>({
                    content_type: 'blogPost',
                    order: ['-sys.createdAt'],
                });

                const postsWithContentTypeId = response.items.map(post => ({
                    ...post,
                    sys: {
                        ...post.sys,
                        contentTypeId: post.sys.contentType.sys.id,
                    },
                    contentTypeId: ''
                }));

                setPosts(postsWithContentTypeId);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

    return (
        <>
            <Helmet>
                <title>Latest Articles | Blog</title>
                <meta name="description" content="Discover the latest trends and insights from our blog." />
            </Helmet>

            <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent pt-20 pb-24">
                {/* Decorative Elements */}
                <div className="absolute inset-0 animate-fade-in">
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
                    <img src="https://cdn.prod.website-files.com/65c091ad1249c93370811afe/66052604a11d997b98ff7063_map-bg%402x.png" alt="" className='opacity-20' />
                </div>

                <div className="container mx-auto px-4 pt-12 lg:pt-16 relative">
                    <div className="flex flex-col items-center max-w-4xl mx-auto">
                        <div className="space-y-8 animate-fade-in text-center">
                            <div className="space-y-10">
                                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in ">
                                    <span className="block mb-4">
                                        ERP, Security &
                                        <span className="relative ml-3">
                                            AI Updates
                                            <svg
                                                className="absolute -bottom-1 left-0 w-full"
                                                viewBox="0 0 100 10"
                                                preserveAspectRatio="none"
                                            >
                                                <path
                                                    d="M0,5 Q50,9 100,5"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    fill="none"
                                                    className="text-primary"
                                                />
                                            </svg>
                                        </span>
                                        !
                                    </span>
                                    <span className="block mt-2 font-medium text-primary text-3xl">

                                        Discover the latest trends in ERP, AI, and security for 2025 to keep your business ahead of the curve. Stay informed and ready for the future!
                                    </span>
                                    <div className="flex -mb-5 items-center justify-center">
                                        <img src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_1.svg" alt="" />
                                    </div>
                                </h1>
                                <div className="relative max-w-xl mx-auto">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        // value={searchTerm}
                                        // onChange={(e) => setSearchTerm(e.target.value)}
                                        className="block   border-gray-300 w-full pl-10 pr-4 py-3 border border-transparent rounded-xl text-gray-900 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


            </div >

            <div className="max-w-6xl mx-auto px-4 py-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.sys.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                            {post.fields.featuredImage && (
                                <div className="aspect-[3/2] overflow-hidden">
                                    <img
                                        src={post.fields.featuredImage.fields.file.url}
                                        alt={post.fields.featuredImage.fields.description || post.fields.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                                    <Calendar size={16} />
                                    <time>{new Date(post.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                                </div>

                                <Link href={`/blog/${createSlug(post.fields.title)}`}>
                                    <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-blue-600 line-clamp-2">{post.fields.title}</h3>
                                </Link>

                                <p className="text-gray-600 mb-4 line-clamp-2 flex-grow">{post.fields.excerpt}</p>

                                {post.fields.author && (
                                    <div className='flex items-center justify-between text-center'>
                                        <div className="flex items-center space-x-3">
                                            {post.fields.author.fields.avatar ? (
                                                <img
                                                    src={post.fields.author.fields.avatar.fields.file.url}
                                                    alt={post.fields.author.fields.name}
                                                    className="w-8 h-8 rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <User size={16} className="text-blue-600" />
                                                </div>
                                            )}
                                            <span className="font-medium text-gray-900 text-sm">{post.fields.author.fields.name}</span>
                                        </div>
                                        <Link href={`/blog/${createSlug(post.fields.title)}`}>
                                            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                                                <span>Read More</span>
                                                <ChevronRight size={18} />
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};

