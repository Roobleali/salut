import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
    ariaLabel?: string;
    role?: string;
}

export const Layout: React.FC<LayoutProps> = ({
    children,
    className = '',
    ariaLabel,
    role
}) => {
    const { t } = useTranslation();

    return (
        <div className={`min-h-screen flex flex-col max-w-7xl mx-auto px-4 ${className}`}>
            {/* Skip to main content link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
            >
                {t('common.skip_to_main')}
            </a>

            {/* Main content wrapper */}
            <motion.main
                id="main-content"
                role={role || 'main'}
                aria-label={ariaLabel}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
            >
                {children}
            </motion.main>

            {/* Footer */}
            <footer
                role="contentinfo"
                aria-label={t('common.footer')}
                className="bg-gray-900 text-white py-12"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h2 className="text-lg font-semibold mb-4">{t('footer.company')}</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/about" className="hover:text-blue-400 transition-colors">
                                        {t('footer.about')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers" className="hover:text-blue-400 transition-colors">
                                        {t('footer.careers')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-blue-400 transition-colors">
                                        {t('footer.contact')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">{t('footer.solutions')}</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/solutions/website-builder" className="hover:text-blue-400 transition-colors">
                                        {t('footer.website_builder')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/solutions/ecommerce" className="hover:text-blue-400 transition-colors">
                                        {t('footer.ecommerce')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/solutions/" className="hover:text-blue-400 transition-colors">
                                        {t('footer.')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">{t('footer.resources')}</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/blog" className="hover:text-blue-400 transition-colors">
                                        {t('footer.blog')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/case-studies" className="hover:text-blue-400 transition-colors">
                                        {t('footer.case_studies')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/glossary" className="hover:text-blue-400 transition-colors">
                                        {t('footer.glossary')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4">{t('footer.legal')}</h2>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/legal/privacy" className="hover:text-blue-400 transition-colors">
                                        {t('footer.privacy')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/legal/terms" className="hover:text-blue-400 transition-colors">
                                        {t('footer.terms')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/legal/cookies" className="hover:text-blue-400 transition-colors">
                                        {t('footer.cookies')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p>&copy; {new Date().getFullYear()} {t('common.company_name')}. {t('footer.rights')}</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout; 