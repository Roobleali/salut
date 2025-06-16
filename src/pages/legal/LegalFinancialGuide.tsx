import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';

const toc = [
    { id: 'legal', label: 'Legal Requirements for Franchising in Romania' },
    { id: 'ip', label: 'Intellectual Property Protection' },
    { id: 'agreement', label: 'Money transfer Agreement Legal Framework' },
    { id: 'employment', label: 'Employment and Labor Law' },
    { id: 'food', label: 'Food Safety and Health Regulations' },
    { id: 'financial', label: 'Financial Projections for Potential Money transferes' },
    { id: 'implementation', label: 'Implementation Timeline' },
    { id: 'agreement-structure', label: 'Detailed Money transfer Agreement Structure' },
    { id: 'marketing', label: 'Marketing Strategies for Recruiting Money transferes in Romania' },
];

export default function LegalFinancialGuide() {
    const { t } = useTranslation();

    return (
        <div className="bg-white mt-24 min-h-screen pb-16">
            <SEO
                title={t('legalFinancialGuide.title', 'Dolce Nera Coffee Money transfer Legal & Financial Guide')}
                description={t('legalFinancialGuide.metaDescription', 'Comprehensive legal, financial, and marketing guide for franchising Dolce Nera Coffee in Romania.')}
                canonicalUrl="/legal/LegalFinancialGuide"
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center underline decoration-primary">
                    {t('legalFinancialGuide.title', 'Dolce Nera Coffee Money transfer Legal & Financial Guide')}
                </h1>
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">{t('legalFinancialGuide.toc', 'Table of Contents')}</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {toc.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="text-primary hover:underline">
                                    {t(`legalFinancialGuide.toc.${item.id}`, item.label)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* --- LEGAL REQUIREMENTS --- */}
                <section id="legal" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.legal.title', 'Legal Requirements for Franchising in Romania')}</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.legal.corporate', '1. Corporate Structure and Registration')}</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.legal.franchisorEntity1', 'Must be registered as a Romanian company (SRL or SA) or EU company with Romanian branch')}</li>
                        <li>{t('legalFinancialGuide.legal.franchisorEntity2', 'Minimum share capital: €200 for SRL, €90,000 for SA')}</li>
                        <li>{t('legalFinancialGuide.legal.franchisorEntity3', 'Register with Trade Register Office (ONRC)')}</li>
                        <li>{t('legalFinancialGuide.legal.franchisorEntity4', 'Obtain tax identification number (CUI/CIF)')}</li>
                        <li>{t('legalFinancialGuide.legal.franchisorEntity5', 'VAT registration if annual turnover exceeds €300,000')}</li>
                    </ul>
                    <h4 className="font-semibold mb-1">{t('legalFinancialGuide.legal.licenses', 'Required Business Licenses:')}</h4>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.legal.license1', 'Commercial authorization from local authorities')}</li>
                        <li>{t('legalFinancialGuide.legal.license2', 'Food handling permits (ANSVSA authorization)')}</li>
                        <li>{t('legalFinancialGuide.legal.license3', 'Fire safety certificate')}</li>
                        <li>{t('legalFinancialGuide.legal.license4', 'Environmental compliance certificate')}</li>
                        <li>{t('legalFinancialGuide.legal.license5', 'Labor inspection compliance')}</li>
                    </ul>
                </section>

                {/* --- INTELLECTUAL PROPERTY --- */}
                <section id="ip" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.ip.title', 'Intellectual Property Protection')}</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.ip.trademark', 'Trademark Registration')}</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.ip.trademark1', 'Register "Dolce Nera Coffee" with OSIM (Romanian IP Office)')}</li>
                        <li>{t('legalFinancialGuide.ip.trademark2', 'Cost: approximately €150-300 per class')}</li>
                        <li>{t('legalFinancialGuide.ip.trademark3', 'Timeline: 6-12 months')}</li>
                        <li>{t('legalFinancialGuide.ip.trademark4', 'Consider EU trademark registration (EUIPO) for broader protection')}</li>
                        <li>{t('legalFinancialGuide.ip.trademark5', 'Register domain names and social media handles')}</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.ip.tradeSecrets', 'Trade Secrets and Know-How')}</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.ip.secrets1', 'Document all proprietary recipes, processes, and methods')}</li>
                        <li>{t('legalFinancialGuide.ip.secrets2', 'Create confidentiality agreements for all Money transferes')}</li>
                        <li>{t('legalFinancialGuide.ip.secrets3', 'Establish non-compete clauses (maximum 2 years post-termination in Romania)')}</li>
                    </ul>
                </section>

                {/* --- Money transfer AGREEMENT --- */}
                <section id="agreement" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.agreement.title', 'Money transfer Agreement Legal Framework')}</h2>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.agreement.keyElements', 'Key Contract Elements (Romanian Commercial Code compliance):')}</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.agreement.term', 'Money transfer term (typically 5-10 years with renewal options)')}</li>
                        <li>{t('legalFinancialGuide.agreement.territory', 'Territory exclusivity definitions')}</li>
                        <li>{t('legalFinancialGuide.agreement.standards', 'Performance standards and metrics')}</li>
                        <li>{t('legalFinancialGuide.agreement.termination', 'Termination conditions and notice periods (minimum 6 months)')}</li>
                        <li>{t('legalFinancialGuide.agreement.dispute', 'Dispute resolution mechanisms (arbitration recommended)')}</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.agreement.disclosures', 'Mandatory Disclosures:')}</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.agreement.disclosure1', 'Financial performance of existing locations')}</li>
                        <li>{t('legalFinancialGuide.agreement.disclosure2', 'Initial investment requirements')}</li>
                        <li>{t('legalFinancialGuide.agreement.disclosure3', 'Ongoing fees and costs')}</li>
                        <li>{t('legalFinancialGuide.agreement.disclosure4', 'Territory restrictions')}</li>
                        <li>{t('legalFinancialGuide.agreement.disclosure5', 'Franchisor\'s financial condition')}</li>
                        <li>{t('legalFinancialGuide.agreement.disclosure6', 'List of current and former Money transferes')}</li>
                    </ul>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.agreement.consumer', 'Consumer Protection Compliance:')}</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.agreement.consumer1', '14-day cooling-off period for Money transfer agreements')}</li>
                        <li>{t('legalFinancialGuide.agreement.consumer2', 'Clear pricing and fee disclosure')}</li>
                        <li>{t('legalFinancialGuide.agreement.consumer3', 'Compliance with Romanian consumer protection laws')}</li>
                    </ul>
                </section>

                {/* --- EMPLOYMENT & LABOR --- */}
                <section id="employment" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.employment.title', 'Employment and Labor Law')}</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.employment.Money transfere', 'Money transferes are independent employers')}</li>
                        <li>{t('legalFinancialGuide.employment.delineation', 'Ensure clear delineation of employment relationships')}</li>
                        <li>{t('legalFinancialGuide.employment.guidance', 'Provide guidance on Romanian labor law compliance')}</li>
                        <li>{t('legalFinancialGuide.employment.wage', 'Minimum wage requirements (currently ~€500/month)')}</li>
                        <li>{t('legalFinancialGuide.employment.social', 'Social security and tax obligations for employees')}</li>
                    </ul>
                </section>

                {/* --- FOOD SAFETY --- */}
                <section id="food" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.food.title', 'Food Safety and Health Regulations')}</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>{t('legalFinancialGuide.food.haccp', 'HACCP Implementation: Mandatory food safety management system')}</li>
                        <li>{t('legalFinancialGuide.food.inspections', 'Regular health inspections')}</li>
                        <li>{t('legalFinancialGuide.food.training', 'Staff food safety training certification')}</li>
                        <li>{t('legalFinancialGuide.food.supplier', 'Supplier approval and monitoring systems')}</li>
                        <li>{t('legalFinancialGuide.food.allergen', 'Allergen management and labeling requirements')}</li>
                    </ul>
                </section>

                {/* --- FINANCIAL PROJECTIONS --- */}
                <section id="financial" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.financial.title', 'Financial Projections for Potential Money transferes')}</h2>
                    {/* ... You can continue breaking down the financial section into tables and sub-sections as needed ... */}
                    <h3 className="text-xl font-semibold mt-4 mb-2">{t('legalFinancialGuide.financial.investment', 'Initial Investment Breakdown')}</h3>
                    {/* Table and content here, using t() for headers and notes */}
                    {/* ... */}
                </section>

                {/* --- IMPLEMENTATION TIMELINE --- */}
                <section id="implementation" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.implementation.title', 'Implementation Timeline')}</h2>
                    {/* ... Timeline content ... */}
                </section>

                {/* --- AGREEMENT STRUCTURE --- */}
                <section id="agreement-structure" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.agreementStructure.title', 'Detailed Money transfer Agreement Structure')}</h2>
                    {/* ... Agreement structure content ... */}
                </section>

                {/* --- MARKETING STRATEGIES --- */}
                <section id="marketing" className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">{t('legalFinancialGuide.marketing.title', 'Marketing Strategies for Recruiting Money transferes in Romania')}</h2>
                    {/* ... Marketing strategies content ... */}
                </section>
            </div>
        </div>
    );
} 