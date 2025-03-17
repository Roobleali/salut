import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export function NotFound() {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>404 - Page Not Found | {t('common.company_name')}</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-background">
                <div className="text-center px-4">
                    <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been moved. Let's get you back on track!
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        <Link href="/" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-primary mb-2">Home Page</h3>
                            <p className="text-sm text-gray-600">Return to our homepage</p>
                        </Link>

                        <Link href="/solutions" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-primary mb-2">Our Solutions</h3>
                            <p className="text-sm text-gray-600">Explore our products and services</p>
                        </Link>

                        <Link href="/contact" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-primary mb-2">Contact Us</h3>
                            <p className="text-sm text-gray-600">Get in touch with our team</p>
                        </Link>

                        <Link href="/support" className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h3 className="font-semibold text-primary mb-2">Support Center</h3>
                            <p className="text-sm text-gray-600">Find help and documentation</p>
                        </Link>
                    </div>

                    <div className="mt-12">
                        <p className="text-sm text-gray-500">
                            If you believe this is a mistake, please{" "}
                            <Link href="/contact" className="text-primary hover:underline">
                                contact our support team
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
} 