import { Helmet } from "react-helmet";
import { Users, BookOpen, Clock, Award, Target } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "User Training",
        description: "Comprehensive training for end-users to maximize system utilization and productivity.",
    },
    {
        icon: BookOpen,
        title: "Administrator Training",
        description: "Advanced training for system administrators to manage and maintain the platform effectively.",
    },
    {
        icon: Clock,
        title: "Flexible Scheduling",
        description: "Training sessions available at your convenience, with options for onsite or remote delivery.",
    },
    {
        icon: Award,
        title: "Certification Programs",
        description: "Official certification programs to validate expertise and enhance professional development.",
    },
    {
        icon: Target,
        title: "Custom Training",
        description: "Tailored training programs designed to address your specific business needs and workflows.",
    },
];

const trainingPrograms = [
    {
        title: "Basic User Training",
        duration: "2-3 days",
        description: "Essential skills for daily system operations and basic functionality.",
        topics: [
            "System navigation and interface",
            "Basic data entry and management",
            "Report generation",
            "Common workflows",
        ],
    },
    {
        title: "Advanced User Training",
        duration: "3-4 days",
        description: "In-depth training for power users and advanced system features.",
        topics: [
            "Advanced reporting and analytics",
            "Custom workflow creation",
            "Data import/export",
            "Integration features",
        ],
    },
    {
        title: "Administrator Training",
        duration: "4-5 days",
        description: "Comprehensive training for system administrators and IT staff.",
        topics: [
            "System configuration",
            "User management",
            "Security settings",
            "Backup and maintenance",
        ],
    },
];

const Training = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Helmet>
                <title>Training Services | Salut Enterprise</title>
                <meta name="description" content="Comprehensive training services to help your team master our enterprise solutions." />
                <meta property="og:title" content="Training Services | Salut Enterprise" />
                <meta property="og:description" content="Comprehensive training services to help your team master our enterprise solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://saluttech.ro/solutions/training" />
                <meta property="og:image" content="https://saluttech.ro/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Training Services | Salut Enterprise" />
                <meta name="twitter:description" content="Comprehensive training services to help your team master our enterprise solutions." />
                <meta name="twitter:image" content="https://saluttech.ro/og-image.jpg" />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
                            Enterprise Training
                        </h1>
                        <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
                            Comprehensive training programs designed to empower your team with the knowledge and skills needed for optimal system utilization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Programs Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                        Available Training Programs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trainingPrograms.map((program, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                                <p className="text-green-600 font-medium mb-4">Duration: {program.duration}</p>
                                <p className="text-gray-600 mb-4">{program.description}</p>
                                <ul className="space-y-2">
                                    {program.topics.map((topic, topicIndex) => (
                                        <li key={topicIndex} className="flex items-center text-gray-600">
                                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Ready to Enhance Your Team's Skills?
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Contact us to discuss your training needs and schedule a consultation.
                    </p>
                    <div className="mt-8">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Training; 