import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    twitterImage?: string;
    structuredData?: Record<string, any>;
    noindex?: boolean;
    alternates?: {
        [key: string]: string;
    };
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = 'https://dolcenera.com/og-image.jpg',
    twitterImage = 'https://dolcenera.com/twitter-card.jpg',
    structuredData,
    noindex = false,
    alternates
}) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const baseUrl = 'https://dolcenera.com';

    // Default keywords if none provided
    const defaultKeywords = ' software, business solutions, digital transformation, cloud services, IT solutions, business automation,  management, digital innovation';

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title} | dolcenera </title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
            <meta name="language" content={currentLang} />
            <link rel="canonical" href={canonicalUrl || `${baseUrl}${window.location.pathname}`} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={`${title} | dolcenera `} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl || `${baseUrl}${window.location.pathname}`} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="dolcenera " />
            <meta property="og:locale" content={currentLang} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | dolcenera `} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={twitterImage} />

            {/* Alternate Language Links */}
            {alternates && Object.entries(alternates).map(([lang, url]) => (
                <link key={lang} rel="alternate" hrefLang={lang} href={url} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${window.location.pathname}`} />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO; 