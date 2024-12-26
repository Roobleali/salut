import { Shield, Lock, Server, Mail, } from 'lucide-react';

const PrivacyPolicy = () => {
    const badges = [
        {
            src: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/673db370b9053b1820ae60e4_GBPR%20Badge.png",
            alt: "GDPR Compliant"
        },
        {
            src: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/673db370928a767c7dff59df_AICPA%20SOC%202%20Badge.png",
            alt: "SOC 2"
        },
        {
            src: "https://cdn.prod.website-files.com/64b66ad2d48ca7a912ddf3eb/673db370208c8a257629beed_ISO%2027001%20Badge.png",
            alt: "ISO 27001"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12 mt-24">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Last updated: December 26, 2024</p>
                </div>

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-8 mb-12">
                    {badges.map((badge, index) => (
                        <img
                            key={index}
                            src={badge.src}
                            alt={badge.alt}
                            className="h-24 w-auto object-contain"
                        />
                    ))}
                </div>

                {/* Rest of the component remains identical */}
                {/* Key Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Lock className="text-blue-600 mb-4 h-8 w-8" />
                        <h3 className="font-semibold text-lg mb-2">Secure Storage</h3>
                        <p className="text-gray-600">Data securely hosted in Frankfurt, Germany with state-of-the-art encryption</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Shield className="text-blue-600 mb-4 h-8 w-8" />
                        <h3 className="font-semibold text-lg mb-2">GDPR Compliant</h3>
                        <p className="text-gray-600">Full compliance with EU data protection regulations</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Server className="text-blue-600 mb-4 h-8 w-8" />
                        <h3 className="font-semibold text-lg mb-2">Data Control</h3>
                        <p className="text-gray-600">Full control over your personal data with right to access and deletion</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                        <p className="text-gray-700 mb-4">We collect the following personal information to provide you access to our platform:</p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li className="mb-2">Full name</li>
                            <li className="mb-2">Email address</li>
                            <li className="mb-2">Password (encrypted)</li>
                            <li className="mb-2">Usage data and platform interactions</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-700 mb-4">Your information is used for:</p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li className="mb-2">Account creation and management</li>
                            <li className="mb-2">Platform access and authentication</li>
                            <li className="mb-2">Service improvement and personalization</li>
                            <li className="mb-2">Communication about service updates</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
                        <p className="text-gray-700 mb-4">
                            All data is stored in DigitalOcean facilities in Frankfurt, Germany. We implement industry-standard security measures including:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li className="mb-2">End-to-end encryption</li>
                            <li className="mb-2">Regular security audits</li>
                            <li className="mb-2">Access controls and monitoring</li>
                            <li className="mb-2">ISO 27001 certified infrastructure</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
                        <p className="text-gray-700 mb-4">Under GDPR, you have the right to:</p>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li className="mb-2">Access your personal data</li>
                            <li className="mb-2">Request data correction or deletion</li>
                            <li className="mb-2">Withdraw consent at any time</li>
                            <li className="mb-2">Data portability</li>
                        </ul>
                    </section>
                </div>

                {/* Contact Section */}
                <div className="bg-blue-50 rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Mail className="text-blue-600 h-6 w-6" />
                        <h2 className="text-2xl font-semibold">Contact Us</h2>
                    </div>
                    <p className="text-gray-700 mb-4">For any privacy-related questions or concerns, contact our Data Protection Officer:</p>
                    <a href="mailto:info@saluttech.ro" className="text-blue-600 hover:text-blue-700">
                        info@saluttech.ro
                    </a>
                    <p className="text-gray-700 mt-4">
                        Salut Tech SRL<br />
                        CUI : 49702253 <br />
                        Bucharest, Romania
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;