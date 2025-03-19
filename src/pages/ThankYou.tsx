import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ThankYou() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t('thankYou.meta.title', 'Thank You - Salut Enterprise')}</title>
                <meta
                    name="description"
                    content={t('thankYou.meta.description', 'Thank you for contacting Salut Enterprise. We appreciate your interest and will get back to you shortly.')}
                />
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <CheckCircleIcon className="mx-auto h-24 w-24 text-green-500" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">
                            {t('thankYou.title', 'Thank You!')}
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
                            {t('thankYou.message', 'We have received your message and will get back to you as soon as possible.')}
                        </p>

                        <div className="bg-white shadow rounded-lg p-6 max-w-lg mx-auto">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">
                                {t('thankYou.whatNext.title', 'What happens next?')}
                            </h2>
                            <ul className="text-left space-y-4">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                                        <CheckCircleIcon />
                                    </span>
                                    <span className="ml-3">
                                        {t('thankYou.whatNext.step1', 'Our team will review your message within 24 hours')}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                                        <CheckCircleIcon />
                                    </span>
                                    <span className="ml-3">
                                        {t('thankYou.whatNext.step2', 'A dedicated specialist will be assigned to assist you')}
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 text-green-500">
                                        <CheckCircleIcon />
                                    </span>
                                    <span className="ml-3">
                                        {t('thankYou.whatNext.step3', 'We will contact you via email or phone to discuss your needs')}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <a
                                href="/"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {t('thankYou.backHome', 'Return to Homepage')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
} 