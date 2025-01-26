// @ts-nocheck

import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { contentfulClient } from '../config/contentful';
import { Calendar, ArrowLeft, Share2, ChevronRight, User } from 'lucide-react';
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

const isValidTagsArray = (tags: any): tags is string[] => {
    return Array.isArray(tags) && tags.every(tag => typeof tag === 'string');
};

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

export const BlogPost = () => {
    const [, params] = useRoute('/blog/:slug');
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!params?.slug) return;

            try {
                const response = await contentfulClient.getEntries<BlogPost>({
                    content_type: 'blogPost',
                    'fields.title[match]': params.slug.split('-').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')
                });

                if (response.items.length > 0) {
                    const fetchedPost = {
                        sys: response.items[0].sys,
                        fields: response.items[0].fields,
                        metadata: response.items[0].metadata,
                    } as unknown as BlogPost;

                    setPost(fetchedPost);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [params?.slug]);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;

    if (!post) return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Post not found</h2>
            <Link href="/blog">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                    <ArrowLeft size={20} />
                    <span>Back to blog</span>
                </button>
            </Link>
        </div>
    );

    const sharePost = () => {
        if (navigator.share) {
            navigator.share({
                title: post.fields.title,
                text: post.fields.excerpt,
                url: window.location.href,
            });
        }
    };

    return (
        <div className="relative overflow-hidden bg-white pt-20 pb-24">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <Link href="/blog">
                    <button className="flex overflow-hidden z-50 items-center space-x-2 text-gray-600 hover:text-blue-600 mb-5">
                        <ArrowLeft size={20} />
                        <span>Back to all posts</span>
                    </button>
                </Link>

                <article className="prose lg:prose-xl max-w-none">
                    {post.fields.featuredImage && (
                        <div className="rounded-xl overflow-hidden mb-10">
                            <img
                                src={post.fields.featuredImage.fields.file.url}
                                alt={post.fields.featuredImage.fields.description || post.fields.title}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                    )}

                    <div className="mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">{post.fields.title}</h1>

                        <div className="flex items-center justify-between flex-wrap gap-6">
                            <div className="flex items-center space-x-2 text-gray-600">
                                <Calendar size={18} />
                                <time>{new Date(post.sys.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                            </div>

                            <button onClick={sharePost} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                                <Share2 size={18} />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>

                    {post.fields.author && (
                        <div className="bg-gray-50 rounded-xl p-6 mb-12">
                            <div className="flex items-center space-x-4">
                                {post.fields.author.fields.avatar ? (
                                    <img
                                        src={post.fields.author.fields.avatar.fields.file.url}
                                        alt={post.fields.author.fields.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                        <User size={24} className="text-blue-600" />
                                    </div>
                                )}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{post.fields.author.fields.name}</h3>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-12 prose prose-lg prose-blue">
                        {documentToReactComponents(post.fields.content)}
                    </div>

                    {isValidTagsArray(post.fields.tags) && (
                        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t">
                            {post.fields.tags.map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">{tag}</span>
                            ))}
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
};