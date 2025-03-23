import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const resources = {
  en: {
    translation: {
      navigation: {
        dashboard: "Dashboard",
        compliance: "Compliance",
        costs: "Cost Management",
        settings: "Settings",
        support: "Support",
      },
      dashboard: {
        title: "Enterprise-Grade Cloud Management",
        subtitle:
          "Fully Managed Cloud Solutions with GDPR-Compliant German Infrastructure",
        metrics: {
          uptime: "Uptime",
          costs: "Monthly Costs",
          compliance: "Compliance Score",
          tickets: "Open Tickets",
        },
        actions: {
          startTrial: "Start Free Trial",
          requestDemo: "Request Demo",
          configure: "Configure",
          viewDetails: "View Details",
          export: "Export Report",
        },
      },
      services: {
        hosting: {
          title: "Hosting",
          features: [
            "Dedicated Servers",
            "Cloud Clusters",
            "Auto-Scaling",
            "99.99% Uptime",
          ],
        },
        domain: {
          title: "Domain",
          features: [
            "Registration",
            "DNS Management",
            "SSL Certificates",
            "WHOIS Privacy",
          ],
        },
        email: {
          title: "Email",
          features: [
            "Business Email",
            "Spam Filtering",
            "IMAP/POP3",
            "Webmail Access",
          ],
        },
        backup: {
          title: "Backup",
          features: [
            "Daily Snapshots",
            "Disaster Recovery",
            "Versioning",
            "Encrypted Storage",
          ],
        },
        security: {
          title: "Security",
          features: [
            "DDoS Protection",
            "Firewalls",
            "SIEM Monitoring",
            "Penetration Testing",
          ],
        },
      },
      compliance: {
        title: "Compliance Dashboard",
        heatmap: "Compliance Heatmap",
        status: "Status",
        lastCheck: "Last Check",
        nextAudit: "Next Audit",
        certificates: {
          gdpr: "GDPR Compliant",
          german: "German Data Law",
          iso: "ISO 27001",
          soc2: "SOC 2 Type II",
        },
      },
      costs: {
        title: "Cost Management",
        comparison: "Cost Comparison",
        forecast: "Cost Forecast",
        optimization: "Optimization Suggestions",
        breakdown: "Cost Breakdown",
      },
      onboarding: {
        process: "          Our Onboarding Process",
        title: "      Transform Your Business with Comprehensive ERP Solutions",
        desc: "                At Salut Enterprise, we understand that service companies are driven by the desire for efficiency, growth, and exceptional customer experiences.Tailored ERP solutions designed to meet your specific business needs across multiple industries",
      },
      pageTitle: "Let's Transform Your Business Together",
      pageSubtitle:
        "Join hundreds of industry leaders who've already upgraded their enterprise solutions with Salut Tech",
      trustElements: {
        support: {
          title: "24/7 Support",
          description: "Quick response time with dedicated support team",
        },
        security: {
          title: "Enterprise Security",
          description: "ISO 27001 certified, GDPR compliant solutions",
        },
        clients: {
          title: "500+ Clients",
          description: "Trusted by leading companies worldwide",
        },
        expert: {
          title: "Industry Expert",
          description: "10+ years of enterprise solutions",
        },
      },
      contactInfo: {
        title: "Contact Information",
        email: {
          label: "Email",
          value: "info@saluttech.ro",
        },
        phone: {
          label: "Phone",
          value: "+40 743 118 879",
        },
        address: {
          label: "Address",
          value: "Bucharest\nRomania",
        },
        response: {
          title: "Quick Response Guarantee",
          description:
            "Our team typically responds within 24 hours to all inquiries",
        },
      },
      form: {
        title: "Send us a message",
        name: {
          label: "Name",
          placeholder: "Your name",
          error: "Name must be at least 2 characters",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
          error: "Invalid email address",
        },
        company: {
          label: "Company",
          placeholder: "Your company",
          error: "Company name must be at least 2 characters",
        },
        message: {
          label: "Message",
          placeholder: "How can we help transform your business?",
          error: "Message must be at least 10 characters",
        },
        submit: "Send Message",
        sending: "Sending...",
        success: {
          title: "Message sent successfully",
          description: "We'll get back to you within 24 hours.",
        },
        error: {
          title: "Error sending message",
          description: "Please try again or contact us directly.",
        },
      },
      nav: {
        industries: "Industries",
        modules: "Modules",
        resources: "Resources",
        solutions: "Our Solutions",
        about: "About Us",
        manufacturing: {
          title: "Manufacturing",
          description:
            "End-to-end manufacturing management with MRP, production planning and quality control",
        },
        estate: {
          title: "Real Estate",
          description:
            "Complete property management solution for leasing, maintenance, and tenant portals",
        },
        retail: {
          title: "Hospitality",

          description:
            "Integrated POS, inventory and e-commerce solutions for modern retail",
        },
        services: {
          title: "Professional Services",

          description:
            "Project management and service tracking for consulting firms",
        },
        construction: {
          title: "Construction",

          description:
            "Project cost estimation, material tracking and regulatory compliance",
        },

        healthcare: {
          title: "Healthcare",

          description:
            "Patient management and medical inventory tracking systems",
        },
        education: {
          title: "Education",

          description:
            "Student information and educational resource management",
        },
      },
      menu: {
        crm: "CRM",
        sales: "Sales",
        purchase: "Purchase",
        inventory: "Inventory",
        manufacturing: "Manufacturing",
        accounting: "Accounting",
        project_management: "Project Management",
        hr: "HR & Recruitment",
        ecommerce: "Website & E-commerce",
        pos: "Point of Sale",
        field_service: "Field Service",
        marketing: "Marketing Automation",
      },
      common: {
        company_name: "Salut Enterprise",
        learn_more: "Learn More",
        features: "Features",
        why_choose: "Why Choose",
        market_features: "Market Features",
        schedule_demo: "Schedule Demo",
        contact_sales: "Contact Sales",
        read_more: "Read More",
        get_started: "Get Started",
        contact_us: "Contact Us",
        our_features: "Our Features",
        benefits: "Benefits",
        testimonials: "Testimonials",
        case_studies: "Case Studies",
        about_us: "About Us",
      },
      contact: {
        sales: "Contact Sales",
        title: "Contact Us",
        subtitle: "Get in touch with our team",
        form: {
          name: "Your Name",
          email: "Email Address",
          message: "Message",
          submit: "Send Message",
        },
      },
      industries: {
        manufacturing: {
          title: "Enterprise Manufacturing Suite",
          subtitle:
            "Advanced manufacturing solutions tailored for modern industries",
          description:
            "Complete manufacturing management system with integrated MRP, real-time planning, and quality control",
          badge: "Manufacturing Excellence",
          features: {
            title: "Key Features",
            planning: {
              title: "Production Planning",
              description:
                "Advanced MRP system with real-time production scheduling",
            },
            quality: {
              title: "Quality Control",
              description:
                "Comprehensive quality management and testing protocols",
            },
            supply: {
              title: "Supply Chain",
              description:
                "End-to-end supply chain visibility and optimization",
            },
            cost: {
              title: "Cost Management",
              description: "Detailed cost tracking and financial analytics",
            },
            compliance: {
              title: "Compliance",
              description: "Automated compliance with industry standards",
            },
            documents: {
              title: "E-Document Integration",
              description:
                "Seamless integration with Romanian e-Factura system",
            },
          },
          romania_specific: {
            title: "Romanian Market Features",
            features: {
              efactura: "E-Factura Compliance and Integration",
              fiscal: "Romanian Fiscal Code Management",
              supply_chain: "Local Supply Chain Optimization",
              eu_export: "EU Export Documentation",
              labor: "Romanian Labor Law Compliance",
              inventory: "Regional Inventory Management",
            },
          },
        },
      },
      home: {
        hero: {
          title: "Enterprise Solutions for Modern Business",
          subtitle:
            "Comprehensive software solutions tailored for your industry",
          transform: "Transform Your Enterprise",
          unlock_growth:
            "Unlock unprecedented growth with our suite of cutting-edge enterprise solutions.",
          why_choose: "Why Leading Companies Choose",
          company_exp:
            "Experience the perfect fusion of enterprise-grade reliability and modern innovation.",
          platform_evolves:
            "Our platform evolves with your ambitions, providing the foundation for sustainable growth and digital excellence.",
        },

        features: {
          why_choose: "Why Leading Companies Choose",
          scalable: {
            title: "Infinite Scalability",
            description:
              "Future-proof architecture that grows with your ambitions. Scale from startup to enterprise with zero growing pains.",
          },
          integration: {
            title: "Perfect Integration",
            description:
              "Seamlessly connect your entire digital ecosystem. Unified operations across all platforms and systems.",
          },
          support: {
            title: "24/7 Elite Support",
            description:
              "Expert assistance at your fingertips. Our dedicated team ensures your success around the clock.",
          },
        },
      },
      button: {
        demo: "Schedule Demo",
        learn_more: "Learn More",
        contact_sales: "Contact Sales",
        get_started: "Get Started",
        submit: "Submit",
        send: "Send",
        view_more: "View More",
        try_now: "Try Now",
      },
      language: {
        select: "Select Language",
        english: "English",
        romanian: "Romanian",
      },
      gradients: {
        customizer: {
          title: "Gradient Customizer",
          page_title: "Gradient Customization Toolkit",
          page_description:
            "Create beautiful, customized gradients for your enterprise application",
          preset: "Preset",
          select_preset: "Select a preset",
          start_color: "Start Color",
          end_color: "End Color",
          direction: "Direction",
          preview: "Gradient Preview",
          copy_classes: "Copy Gradient Classes",
        },
        directions: {
          right: "Right",
          bottom_right: "Bottom Right",
          top_right: "Top Right",
          bottom: "Bottom",
        },
      },
      glossary: {
        title: "Industry Terminology Glossary",
        description:
          "Comprehensive guide to industry-specific terms and definitions",
        search_placeholder: "Search terms...",
        all_industries: "All Industries",
        example: "Example",
        no_results: "No terms found",
      },
      erp: {
        implementation_milestones: [
          {
            id: "kick-off-meeting",
            duration: "3-5 days",
            title: "Kick-off Meeting",
            description:
              "Initial strategic consultation to define project scope and objectives",
            note: "Duration may vary based on project complexity",
            category: "initial",
          },
          {
            id: "requirements-analysis",
            duration: "5-7 days",
            title: "Requirements Analysis",
            description:
              "Comprehensive assessment of business needs and system landscape",
            note: "Complexity of business processes impacts timeline",
            category: "planning",
          },
          {
            id: "solution-design",
            duration: "5-7 days",
            title: "Solution Design",
            description:
              "Architectural planning and initial ERP system configuration",
            note: "Custom requirements may extend design phase",
            category: "design",
          },
          {
            id: "implementation",
            duration: "10-14 days",
            title: "Implementation Phase",
            description:
              "System configuration, data migration, and custom development",
            note: "Varies significantly with system complexity and customization needs",
            category: "development",
          },
          {
            id: "testing",
            duration: "3-5 days",
            title: "Comprehensive Testing",
            description:
              "System validation across functional and performance dimensions",
            note: "Depth of testing depends on system intricacy",
            category: "validation",
          },
          {
            id: "training",
            duration: "2-3 days",
            title: "User Training",
            description:
              "Comprehensive training program for end-users and administrators",
            note: "Tailored to organizational size and system complexity",
            category: "enablement",
          },
          {
            id: "go-live",
            duration: "2-3 days",
            title: "Go-Live and Transition",
            description: "Managed system deployment and initial support period",
            note: "Deployment complexity impacts timeline",
            category: "deployment",
          },
        ],
      },
      navigation: {
        titles: {
          Industries: "Industries",
          Solutions: "Solutions",
          Resources: "Resources",
        },
        items: {
          Industries: [
            {
              title: "Manufacturing",
              href: "/erp-system/manufacturing",
              description:
                "End-to-end manufacturing management with MRP, production planning and quality control",
            },
            {
              title: "Real Estate",
              href: "/erp-system/real-estate",
              description:
                "Complete property management solution for leasing, maintenance, and tenant portals",
            },
            {
              title: "Hospitality",
              href: "/erp-system/retail",
              description:
                "Integrated POS, inventory and e-commerce solutions for modern retail",
            },
            {
              title: "Professional Services",
              href: "/erp-system/services",
              description:
                "Project management and service tracking for consulting firms",
            },
          ],
          Solutions: [
            {
              title: "ERP TimeLine",
              href: "/solutions/erp",
              description:
                "Integrated enterprise resource planning for comprehensive business management",
            },
            {
              title: "Cloud Management",
              href: "/solutions/cloud-management",
              description:
                "Scalable cloud infrastructure and service optimization",
            },
            {
              title: "Marketing",
              href: "#",
              description:
                "Advanced marketing strategy and digital campaign management",
            },
            {
              title: "Integration & Customization",
              href: "#",
              description:
                "Seamless system integration and tailored business process optimization",
            },
            {
              title: "Support & Maintenance",
              href: "#",
              description:
                "Comprehensive technical support and proactive system maintenance",
            },
            {
              title: "Custom Website & E-commerce",
              href: "/solutions/website-builder",
              description:
                "Custom web development and powerful e-commerce platform solutions",
            },
          ],
          Resources: [
            {
              title: "About Us",
              href: "/about",
              description: "Learn more about our company and mission",
            },
            {
              title: "News",
              href: "/blog",
              description:
                "Stay Up to date, About Product update, And tech news",
            },
            {
              title: "Case Studies",
              href: "/case-studies",
              description: "Success stories from our clients",
            },
          ],
        },
      },
      home: {
        comparison: {
          subtitle:
            "Choose the future of business management with our AI-powered solutions",
          traditional: {
            title: "Traditional Software",
            items: [
              "Do Nothing: Relying on outdated systems that hinder growth.",
              "Limited Customization: One-size-fits-all solutions that don't cater to your unique needs.",
              "Time-Consuming Processes: Manual tasks that waste valuable hours.",
              "High Costs: Expensive licenses and hidden fees.",
              "Stagnant Growth: Lack of innovative features to propel your business forward.",
              "Lack of Support: Minimal access to expert guidance and mentorship.",
              "Risk of Obsolescence: Falling behind competitors embracing modern technologies.",
              "Complex Interfaces: Difficult to navigate, requiring extensive training.",
              "Rigid Pricing: Inflexible pricing models that can strain your budget.",
              "Outdated Technology: Technology that doesn't keep pace with industry advancements.",
              "Data Security Concerns: Vulnerable systems that put sensitive business information at risk.",
              "Inefficient Scalability: Tools that fail to grow with your business, limiting long-term potential.",
            ],
          },
          ai: {
            title: "Impress the Future with AI",
            items: [
              "Increase Profits: Optimize operations to maximize your revenue potential.",
              "Save Time: Streamline processes with automation, freeing up your schedule for strategic growth.",
              "Eliminate Manual Tasks: Let AI handle routine activities, reducing errors and enhancing efficiency.",
              "Cut Costs: Lower operational expenses with cost-effective solutions and transparent pricing.",
              "Boost Productivity: Advanced tools designed to enhance your team's performance and output.",
              "Enhance Customization: Tailor features to meet your franchise's specific needs and goals.",
              "Seamless Integration: Easily incorporate our software with your existing systems for smooth transitions.",
              "Scalable Solutions: Grow your business without worrying about software limitations.",
              "Real-Time Analytics: Make informed decisions with up-to-the-minute data insights.",
              "No Experience Needed: Designed for all skill levels with user-friendly interfaces.",
            ],
          },
        },
        features: {
          scalable: {
            title: "Infinite Scalability",
            description:
              "Future-proof architecture that grows with your ambitions. Scale from startup to enterprise with zero growing pains.",
          },
          integration: {
            title: "Perfect Integration",
            description:
              "Seamlessly connect your entire digital ecosystem. Unified operations across all platforms and systems.",
          },
          support: {
            title: "24/7 Elite Support",
            description:
              "Expert assistance at your fingertips. Our dedicated team ensures your success around the clock.",
          },
        },
        hero: {
          title: "Cloud Based ERP for",
          subtitle:
            "We deliver tailored software that drives growth and efficiency across industries.",
          e_invoicing: "Free E-Invoicing Software",
          cta: "Get Started",
        },
        steps: {
          manage: {
            title: "Manage",
            description:
              "Streamline operations with our integrated management solutions",
          },
          automate: {
            title: "Automate",
            description:
              "Boost your marketing! Automate for greater reach and smarter engagement!",
          },
          succeed: {
            title: "Succeed",
            description:
              "Achieve your business goals with proven success metrics",
          },
        },
      },
      services: {
        hero: {
          title: "Transform Your Business with Salut Enterprise",
          subtitle:
            "At Salut Enterprise, we understand that service companies are driven by the desire for efficiency, growth, and exceptional customer experiences.",
          cta: "Start Your Journey",
          contact: "Contact Sales",
        },
        features: {
          title: "Key Features",
          subtitle:
            "Our comprehensive suite of features is designed to not just meet your desires but to turn them into tangible outcomes.",
          project_management: {
            title: "Project Management",
            desire: "Achieve seamless project execution",
            outcome:
              "Utilize Gantt charts and Kanban views for clear task visualization and progress tracking, ensuring projects are completed on time and within budget",
          },
          crm: {
            title: "Customer Relationship Management (CRM)",
            desire: "Build lasting relationships with clients",
            outcome:
              "Capture and nurture leads effectively, enhancing conversion rates and maintaining detailed interaction records to elevate service delivery",
          },
          billing: {
            title: "Billing and Invoicing",
            desire: "Simplify financial processes",
            outcome:
              "Automate invoicing directly from projects, ensuring timely payments and reducing administrative burdens with recurring billing options",
          },
          communication: {
            title: "Integrated Communication Tools",
            desire: "Foster collaboration among teams",
            outcome:
              "Enable real-time communication through integrated messaging and dashboards, ensuring everyone is aligned and informed",
          },
          agreements: {
            title: "Service Agreements Management",
            desire: "Streamline service operations",
            outcome:
              "Efficiently manage service agreements, simplifying tracking and renewal processes for enhanced operational flow",
          },
          mobile: {
            title: "Mobile Accessibility",
            desire: "Manage your business on-the-go",
            outcome:
              "Access all features from mobile devices, empowering you to oversee operations anytime, anywhere",
          },
          workflows: {
            title: "Customizable Workflows",
            desire: "Tailor processes to fit your needs",
            outcome:
              "Automate repetitive tasks with customizable workflows that enhance efficiency across departments",
          },
          analytics: {
            title: "Reporting and Analytics",
            desire: "Make informed decisions based on data",
            outcome:
              "Leverage built-in analytics tools to monitor performance metrics, enabling strategic decision-making for sustained growth",
          },
        },
        benefits: {
          title: "Why Choose Salut Enterprise?",
          items: [
            "All-in-One Solution: Integrate multiple business functions into a single platform, eliminating the hassle of managing disparate systems",
            "Modular Design: Select only the applications you need, creating a tailored solution that aligns with your specific business goals without unnecessary costs",
            "Scalability: As your business grows, easily scale your operations with our cloud-based solution that adapts to increasing demands",
            "Enhanced Customer Experience: Improve client interactions through effective CRM tools and self-service portals that foster loyalty and satisfaction",
            "Improved Financial Management: Simplify billing processes with integrated features that ensure timely payments and accurate financial reporting",
          ],
        },
        cta: {
          title: "Ready to Transform Your Business?",
          subtitle:
            "Experience the transformative power of Salut Enterprise today.",
          button: "Get Started Now",
        },
      },
      manufacturing: {
        seo: {
          title:
            "Enterprise Manufacturing Solutions | Smart Factory Management",
          description:
            "Transform your manufacturing operations with our AI-powered enterprise solutions. Features include real-time monitoring, automated work orders, and quality control.",
          keywords:
            "manufacturing software, enterprise manufacturing, smart factory, production management, quality control, inventory management",
        },
        enterpriseBadge: "Enterprise Manufacturing",
        hero: {
          title: "Intelligent Manufacturing Solutions for Modern Industry",
          subtitle:
            "Transform your production operations with our AI-powered platform designed for manufacturing excellence in the digital age.",
          scheduleDemo: "Schedule Demo",
          contactSales: "Contact Sales",
        },
        testimonials: {
          title: "What Our Clients Say",
          clients: [
            {
              name: "Sherif Abdala",
              company: "Gourmet coffee SRL",
              rating: 5,
              text: "This software has completely revolutionized how we manage our Manufacturing. We've reduced production  time by 50% and doubled transactions closed in the last 6 months!",
              image:
                "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747105/ttt1fmtpdnxfv3gagevm.png",
            },
          ],
        },
        metrics: {
          setupTime: "Setup Time",
          setupTimeValue: "2 Days",
          cost: "Cost",
          costValue: "50 €",
          efficiency: "Efficiency Boost",
          efficiencyValue: "70%",
        },
        features: {
          realTime: {
            title: "Real-Time Production Monitoring",
            description:
              "Live updates on every stage of the manufacturing process.",
            benefit: "Enhanced transparency and operational efficiency",
          },
          automatedWorkOrders: {
            title: "Automated Work Orders",
            description:
              "Smart scheduling and prioritization of production tasks.",
            benefit: "Improved workflow and reduced downtime",
          },
          inventoryManagement: {
            title: "Inventory Management",
            description: "Automated stock replenishment and barcode scanning.",
            benefit: "Minimized errors and optimal stock levels",
          },
          bom: {
            title: "Bill of Materials (BoM)",
            description:
              "Complex product configurations with multi-level BoMs.",
            benefit: "Streamlined inventory and reduced waste",
          },
          qualityControl: {
            title: "Quality Control Tools",
            description: "Dedicated quality checks throughout production.",
            benefit: "Consistent product quality assurance",
          },
        },
        advantages: {
          comprehensiveIntegration: {
            title: "Comprehensive Integration",
            description:
              "Seamlessly connect manufacturing, inventory, sales, and accounting in a single platform for real-time insights and streamlined operations.",
          },
          customizationFlexibility: {
            title: "Customization & Flexibility",
            description:
              "Modular design allows businesses to tailor the software to their specific needs, supporting unique operational requirements and industry standards.",
          },
          costEffectiveSolution: {
            title: "Cost-Effective Solution",
            description:
              "Accessible pricing model designed for businesses of all sizes, offering enterprise-grade features without the traditional high costs.",
          },
          regulatoryCompliance: {
            title: "Regulatory Compliance",
            description:
              "Built-in compliance features and automated reporting tools to meet industry standards and regulatory requirements.",
          },
        },
        operationalBenefits: {
          enhancedVisibility: {
            title: "Enhanced Visibility",
            description:
              "Real-time data access for informed decision-making on inventory, production stages, and order status.",
          },
          costOptimization: {
            title: "Cost Optimization",
            description:
              "Smart resource allocation and integrated quality management to minimize waste and improve utilization.",
          },
          increasedProductivity: {
            title: "Increased Productivity",
            description:
              "Automated workflows and intelligent scheduling driving significant efficiency gains across operations.",
          },
        },
        sections: {
          keyAdvantages: "Key Platform Advantages",
          enterpriseFeatures: "Enterprise Manufacturing Features",
          operationalImpact: "Operational Impact",
          feature: "Feature",
          description: "Description",
          benefits: "Benefits",
        },
      },
      realEstate: {
        seo: {
          title:
            "Advanced Real Estate Management Solutions | Property Management Software",
          description:
            "Comprehensive real estate solutions with AI-powered features for property management, automated billing, and market analytics.",
          keywords:
            "real estate software, property management, rental management, real estate CRM, property solutions",
        },
        hero: {
          badge: "Next-Gen Real Estate Solutions",
          title: "Advanced Real Estate Management",
          subtitle:
            "Comprehensive real estate solutions with AI-powered features and seamless integrations.",
          scheduleDemo: "Schedule Demo",
          becomePartner: "Become Partner",
        },
        features: {
          title: "Core Features",
          list: [
            {
              title: "Property Management 🏢",
              description: "Complete portfolio management and administration",
              features: [
                "Property Units Tracking",
                "Tenant Management",
                "Occupancy Reports",
                "Contracts & Documents",
                "Project Management",
              ],
            },
            {
              title: "Project Tracking 📋",
              description: "Comprehensive property administration",
              features: [
                "Project Monitoring",
                "Unit Records",
                "Customization Options",
                "Contract Management",
              ],
            },
            {
              title: "Sales & Rentals 🤝",
              description: "Sales and rental administration",
              features: [
                "Contract Generation",
                "Renewal Tracking",
                "Document Management",
                "Maintenance",
              ],
            },
            {
              title: "Property Maintenance 🔧",
              description: "Building maintenance management",
              features: [
                "Ticket System",
                "Vendor Management",
                "Scheduled Maintenance",
                "Utilities",
              ],
            },
            {
              title: "Utilities & Billing 💰",
              description: "Utility cost management",
              features: [
                "Meter Reading",
                "Automated Billing",
                "Custom Rates",
                "Financial Reports",
              ],
            },
            {
              title: "CRM & Clients 👥",
              description: "Customer relationship management",
              features: [
                "Client Profiles",
                "Interaction History",
                "Tasks & Follow-ups",
                "Automated Communication",
              ],
            },
          ],
        },
        advancedFeatures: {
          title: "Advanced Features & Integrations",
          list: [
            {
              title: "Mobile App",
              description:
                "Native mobile application for property managers, agents, and tenants with real-time updates",
              features: [
                "Real-time notifications",
                "Document access on-the-go",
                "Mobile maintenance requests",
                "Property viewing scheduler",
              ],
              icon: "Smartphone",
            },
            {
              title: "AI/ML Integration",
              description:
                "Advanced analytics and automation powered by artificial intelligence",
              features: [
                "Predictive rent pricing",
                "Smart maintenance scheduling",
                "Automated contract processing",
                "Market trend analysis",
              ],
              icon: "Brain",
            },
            {
              title: "SEO Optimization",
              description:
                "Enhanced visibility for property listings on search engines",
              features: [
                "Automated meta descriptions",
                "SEO-optimized property pages",
                "Local SEO optimization",
                "Performance analytics",
              ],
              icon: "Search",
            },
            {
              title: "Payment Integration",
              description:
                "Seamless integration with Romanian payment processors",
              features: [
                "PayU integration",
                "Netopia support",
                "Automated invoicing",
                "Payment tracking",
              ],
              icon: "CreditCard",
            },
            {
              title: "Smart Notifications",
              description:
                "Automated communication system for all stakeholders",
              features: [
                "Email notifications",
                "SMS alerts",
                "Due date reminders",
                "Custom notification rules",
              ],
              icon: "Bell",
            },
            {
              title: "CRM System",
              description: "Comprehensive client relationship management",
              features: [
                "Client interaction tracking",
                "Lead management",
                "Task automation",
                "Performance analytics",
              ],
              icon: "Users",
            },
            {
              title: "Platform Integration",
              description: "Sync with major Romanian real estate platforms",
              features: [
                "Immobiliare.ro sync",
                "OLX.ro integration",
                "Automated listing updates",
                "Cross-platform analytics",
              ],
              icon: "Share2",
            },
            {
              title: "Marketing Tools",
              description: "Integrated marketing and advertising solutions",
              features: [
                "Facebook Ads integration",
                "Google Ads management",
                "Campaign analytics",
                "Automated ad optimization",
              ],
              icon: "Megaphone",
            },
            {
              title: "Accounting Integration",
              description: "Seamless financial management and reporting",
              features: [
                "Saga accounting export",
                "E-factura integration",
                "Automated reconciliation",
                "Financial reporting",
                "BNR exchange rate integration 💶",
              ],
              icon: "Calculator",
            },
          ],
        },
        testimonials: {
          title: "What Our Clients Say",
          clients: [
            {
              name: "Costel Ciobanu",
              company: "Coda Vinci SRL",
              rating: 5,
              text: "This software has completely revolutionized how we manage our real estate portfolio. We've reduced document processing time by 70% and doubled transactions closed in the last 6 months!",
              image: "https://res.cloudinary.com/...",
            },
            {
              name: "Grigore Anica",
              company: "BREC Consulting",
              rating: 5,
              text: "As a real estate consultant, I need precise tools. This platform provided exactly what I needed - client management to detailed market analyses. Client feedback is exceptional!",
              image: "https://res.cloudinary.com/...",
            },
          ],
        },
        metrics: {
          setupTime: "Setup Time",
          setupTimeValue: "3 Days",
          cost: "Starting",
          costValue: "50 €",
          efficiency: "Efficiency Boost",
          efficiencyValue: "75%",
        },
        integrations: {
          title: "Integration Partners",
          partners: [
            { name: "E-factura", logo: "/e-factura.webp" },
            { name: "Saga Software", logo: "/saga-logo.png" },
            { name: "SAF-T Compliance", logo: "/saft.webp" },
            { name: "Property Listings", logo: "/listing.png" },
          ],
        },
      },
      retail: {
        seo: {
          title: "Restaurant POS System & Management Software | SalutTech",
          description:
            "Complete restaurant management solution with POS, kitchen display, inventory, and more. Perfect for restaurants in Romania. Start free trial today!",
          keywords:
            "restaurant pos, restaurant management software, kitchen display system, restaurant inventory, restaurant software romania, horeca pos",
        },
        hero: {
          badge: "Retail Revolution",
          title: "Next-Gen Retail Platform",
          subtitle:
            "Unify online and offline operations with AI-driven insights and real-time inventory across all sales channels",
          scheduleDemo: "Schedule Demo",
          contactSales: "Contact Sales",
        },
        features: {
          title: "Core Capabilities",
          list: [
            {
              title: "Omnichannel Commerce 🛍️",
              description:
                "Seamless integration of physical stores, e-commerce, and mobile sales",
              features: [
                "Unified inventory management",
                "Cross-channel customer profiles",
                "Real-time stock visibility",
                "Centralized order management",
              ],
            },
            {
              title: "POS Inteligent 💳",
              description: "Sistem point-of-sale cu recomandări bazate pe AI",
              features: [
                "Funcționare offline",
                "Recunoaștere clienți",
                "Prețuri dinamice",
                "Integrare program loialitate",
              ],
            },
            {
              title: "AI pentru Stocuri 📦",
              description: "Sistem predictiv de gestionare stocuri",
              features: [
                "Prognoză cerere",
                "Reaprovizionare automată",
                "Management furnizori",
                "Alertă stocuri stagnante",
              ],
            },
            {
              title: "Customer360 👤",
              description: "Unified customer experience management",
              features: [
                "Istoric cumpărături",
                "Analiză comportament",
                "Marketing personalizat",
                "Mapare journey omnichannel",
              ],
            },
            {
              title: "Retail Analytics 📊",
              description: "Real-time business intelligence dashboard",
              features: [
                "Sales performance",
                "Inventory turnover",
                "Staff productivity",
                "Profit margin analysis",
              ],
            },
            {
              title: "E-commerce Hub 🌐",
              description: "Built-in online store management",
              features: [
                "Mobile-responsive design",
                "SEO optimization",
                "Payment gateway integration",
                "Abandoned cart recovery",
              ],
            },
          ],
        },
        benefits: {
          title: "Business Impact",
          list: [
            "35% faster checkout process",
            "28% reduction in stockouts",
            "40% improvement in customer retention",
            "22% lower operational costs",
            "50+ pre-built analytics reports",
            "Real-time mobile alerts",
          ],
        },
        integrations: {
          title: "Seamless Integrations",
          partners: [
            { name: "FiscalNet", logo: "/fiscalnet_logo.png" },
            { name: "E-factura", logo: "/e-factura.webp" },
            { name: "Saga Software", logo: "/saga-logo.png" },
            { name: "Shopify", logo: "/shopify.webp" },
          ],
        },
        testimonials: {
          title: "Retail Leader Success Stories",
          clients: [
            {
              name: "Sarah Johnson",
              company: "UrbanFashion Chain",
              rating: 5,
              text: "The omnichannel features helped us reduce inventory costs by 30% while improving customer satisfaction scores.",
              image: "/testimonials/fashion.jpg",
            },
            {
              name: "Michael Chen",
              company: "TechGadgets Pro",
              rating: 5,
              text: "Real-time analytics helped us identify top-performing products and optimize shelf space allocation.",
              image: "/testimonials/electronics.jpg",
            },
          ],
        },
        metrics: {
          setupTime: "Implementation Time",
          setupTimeValue: "1 Week",
          cost: "ROI Achieved",
          costValue: "2 Months",
          efficiency: "Process Efficiency Gain",
          efficiencyValue: "65%",
        },
        pricing: {
          title: "Simple, Transparent Pricing",
          subtitle:
            "Choose the perfect plan for your restaurant. All plans include our core POS system with 14-day free trial.",
          basic: {
            title: "Basic",
            price: "355",
            setup: "1335",
            features: [
              "Smart POS System",
              "Kitchen Display System",
              "Basic Stock Management",
            ],
          },
          standard: {
            title: "Standard",
            price: "445",
            setup: "1335",
            features: [
              "All Basic Features",
              "Choose 1 Module",
              "Purchase Module",
              "Loyalty Program",
              "Delivery Integration",
            ],
          },
          growth: {
            title: "Growth Bundle",
            price: "445",
            setup: "1335",
            features: [
              "All Basic Features",
              "2 Modules Included",
              "Save 67 RON/month",
            ],
          },
          trial: "Try all features free for 14 days!",
          faq: {
            title: "Frequently Asked Questions",
            setup: {
              question: "What's included in the Setup Fee?",
              answer:
                "8-hour onboarding session including data migration, staff training, and system setup.",
            },
            modules: {
              question: "Can I change modules later?",
              answer:
                "Yes, you can upgrade or change modules at any time. Changes will be reflected in your next billing cycle.",
            },
            trial: {
              question: "How does the 14-day trial work?",
              answer:
                "Start with full access to all features. No credit card required. Choose your plan at the end of the trial.",
            },
          },
          cta: "Contact Us for Custom Solutions",
        },
      },
      common: {
        company_name: "Salut Enterprise",
        learn_more: "Learn More",
        features: "Features",
      },
      websiteBuilder: {
        hero: {
          title: "Your Complete Online Presence",
          subtitle:
            "So good, it's easy to setup - yet stunningly complete. Design appealing pages and manage your entire business from one unified platform.",
          cta: "Get Started Free",
        },
        quickSetup: {
          title: "No-Code Mode",
          subtitle:
            "Your perfect online presence should be easy to create and maintain",
          steps: {
            business: {
              title: "Set your business",
              description: "Tell us about your business",
            },
            logo: {
              title: "Add your logo",
              description: "Upload your brand identity",
            },
            features: {
              title: "Select features",
              description: "Choose what you need",
            },
            theme: {
              title: "Choose theme",
              description: "Pick your favorite design",
            },
          },
        },
        websiteFeatures: {
          title: "Website Features",
          subtitle: "Everything you need to create a professional website",
          dragDrop: {
            title: "Drag & Drop Builder",
            description:
              "Creează site-ul ca un designer cu interfața noastră intuitivă drag-and-drop. Fă ajustări precise, adaugă filtre și animează elementele direct pe pagină.",
          },
          ai: {
            title: "AI-Powered Creation",
            description:
              "Let AI suggest your website layout and content based on your industry. Boost your copy-writing with ChatGPT integration for better content generation.",
          },
          mobile: {
            title: "Mobile Responsive",
            description:
              "Your website automatically adapts to all devices. Control what's visible on mobile with our responsive design tools.",
          },
          photos: {
            title: "3M+ Free Photos",
            description:
              "Accesează o vastă bibliotecă de imagini de calitate de la Unsplash pentru a îmbunătăți aspectul vizual al site-ului tău.",
          },
        },
        ecommerceFeatures: {
          title: "E-commerce Features",
          subtitle: "Everything you need to run a successful online store",
          products: {
            title: "Adaptive Products",
            description:
              "Display your products in all their facets with configurable sizes, colors, and variants. Automated stock management updates in real-time for each variant.",
          },
          engagement: {
            title: "Customer Engagement",
            description:
              "Build stronger relationships with real-time chat support and customer reviews. Help customers find their next best buy with smart recommendations.",
          },
          analytics: {
            title: "Analytics & Growth",
            description:
              "Track your store's performance with built-in analytics. Build advanced reports and cross-check data to make informed business decisions.",
          },
          payments: {
            title: "Payment Integration",
            description:
              "Offer a variety of payment options to your customers. Seamlessly integrate with popular payment providers for secure transactions.",
          },
        },
        additionalFeatures: {
          title: "Additional Features",
          subtitle: "Extra tools to enhance your online presence",
          language: {
            title: "Multi-Language Support",
            description:
              "Install different languages and translate content directly from any page with our built-in translation tools.",
          },
          seo: {
            title: "SEO Optimization",
            description:
              "Write search engine-friendly content with our integrated SEO tools to improve your website's visibility.",
          },
          market: {
            title: "Market Adaptability",
            description:
              "Expand your reach with integrations to major marketplaces like Amazon and Facebook. Reach more customers where they shop.",
          },
          shipping: {
            title: "Flexible Shipping",
            description:
              "Offer multiple shipping options including click and collect. Let customers shop online and pick up orders at your store.",
          },
        },
        pricing: {
          title: "Free Forever, Unlimited Users",
          subtitle:
            "Your website and online store are free forever with our One App Free plan, including hosting, unlimited support, and maintenance. No ads or limits.",
          cta: "Start Building Now",
        },
      },
      about: {
        hero: {
          title: "About Salut Enterprise",
          description:
            "Salut Enterprise is a leading provider of enterprise software solutions, specializing in comprehensive business management systems that help organizations streamline their operations and achieve their full potential.",
        },
        mission: {
          title: "Our Mission",
          description:
            "We are committed to delivering innovative, scalable, and integrated software solutions that empower businesses to thrive in an increasingly digital world. Our focus is on providing enterprise-grade technology that is both powerful and user-friendly.",
        },
        values: {
          title: "Our Values",
          innovation: {
            title: "Innovation",
            description:
              "Constantly evolving our solutions to meet changing business needs",
          },
          quality: {
            title: "Quality",
            description:
              "Maintaining the highest standards in software development",
          },
          customerSuccess: {
            title: "Customer Success",
            description: "Dedicated to helping our clients achieve their goals",
          },
          integrity: {
            title: "Integrity",
            description: "Operăm cu transparență și practici etice de afaceri",
          },
        },
        journey: {
          title: "Our Journey",
        },
        team: {
          title: "Meet Our Leadership Team",
        },
      },
      thankYou: {
        meta: {
          title: "Thank You - Salut Enterprise",
          description:
            "Thank you for contacting Salut Enterprise. We appreciate your interest and will get back to you shortly.",
        },
        title: "Thank You!",
        message:
          "We have received your message and will get back to you as soon as possible.",
        whatNext: {
          title: "What happens next?",
          step1: "Our team will review your message within 24 hours",
          step2: "A dedicated specialist will be assigned to assist you",
          step3: "We will contact you via email or phone to discuss your needs",
        },
        backHome: "Return to Homepage",
      },
    },
  },
  ro: {
    translation: {
      navigation: {
        dashboard: "Panou de Control",
        compliance: "Conformitate",
        costs: "Gestiunea Costurilor",
        settings: "Setări",
        support: "Suport",
      },
      dashboard: {
        title: "Management Cloud de Nivel Enterprise",
        subtitle:
          "Soluții Cloud Gestionate Complet cu Infrastructură Germană Conformă GDPR",
        metrics: {
          uptime: "Timp de Funcționare",
          costs: "Costuri Lunare",
          compliance: "Scor Conformitate",
          tickets: "Tichete Deschise",
        },
        actions: {
          startTrial: "Început Perioadă de Probă",
          requestDemo: "Solicită Demo",
          configure: "Configurează",
          viewDetails: "Vezi Detalii",
          export: "Exportă Raport",
        },
      },
      services: {
        hosting: {
          title: "Găzduire",
          features: [
            "Servere Dedicate",
            "Clustere Cloud",
            "Scalare Automată",
            "Uptime 99.99%",
          ],
        },
        domain: {
          title: "Domeniu",
          features: [
            "Înregistrare",
            "Management DNS",
            "Certificate SSL",
            "Confidențialitate WHOIS",
          ],
        },
        email: {
          title: "Email",
          features: [
            "Email Business",
            "Filtrare Spam",
            "IMAP/POP3",
            "Acces Webmail",
          ],
        },
        backup: {
          title: "Backup",
          features: [
            "Snapshot-uri Zilnice",
            "Recuperare Date",
            "Versionare",
            "Stocare Criptată",
          ],
        },
        security: {
          title: "Securitate",
          features: [
            "Protecție DDoS",
            "Firewalls",
            "Monitorizare SIEM",
            "Testare Penetrare",
          ],
        },
      },
      compliance: {
        title: "Panou Conformitate",
        heatmap: "Hartă Termică Conformitate",
        status: "Status",
        lastCheck: "Ultima Verificare",
        nextAudit: "Următorul Audit",
        certificates: {
          gdpr: "Conform GDPR",
          german: "Legea Germană a Datelor",
          iso: "ISO 27001",
          soc2: "SOC 2 Tip II",
        },
      },
      costs: {
        title: "Gestiunea Costurilor",
        comparison: "Comparație Costuri",
        forecast: "Prognoză Costuri",
        optimization: "Sugestii Optimizare",
        breakdown: "Defalcare Costuri",
      },
      onboarding: {
        process: "Procesul nostru de integrare",
        title: "  Transformați-vă afacerea cu soluții ERP cuprinzătoare",
        desc: "La Salut Enterprise, înțelegem că companiile de servicii sunt conduse de dorința de eficiență, creștere și experiențe excepționale pentru clienți. Soluții ERP personalizate concepute pentru a satisface nevoile dvs. specifice de afaceri din mai multe industrii.",
      },
      pageTitle: "Să Transformăm Împreună Afacerea Ta",
      pageSubtitle:
        "Alătură-te sutelor de lideri din industrie care și-au modernizat deja soluțiile enterprise cu Salut Tech",
      trustElements: {
        support: {
          title: "Suport 24/7",
          description: "Timp de răspuns rapid cu echipă dedicată de suport",
        },
        security: {
          title: "Securitate Enterprise",
          description: "Certificat ISO 27001, soluții conforme GDPR",
        },
        clients: {
          title: "500+ Clienți",
          description: "De încredere pentru companii lidere la nivel mondial",
        },
        expert: {
          title: "Expert în Industrie",
          description: "Peste 10 ani de soluții enterprise",
        },
      },
      contactInfo: {
        title: "Informații de Contact",
        email: {
          label: "Email",
          value: "info@saluttech.ro",
        },
        phone: {
          label: "Telefon",
          value: "+40 743 118 879",
        },
        address: {
          label: "Adresă",
          value: "București\nRomânia",
        },
        response: {
          title: "Garanția Răspunsului Rapid",
          description:
            "Echipa noastră răspunde de obicei în 24 de ore la toate solicitările",
        },
      },
      form: {
        title: "Trimite-ne un mesaj",
        name: {
          label: "Nume",
          placeholder: "Numele tău",
          error: "Numele trebuie să aibă cel puțin 2 caractere",
        },
        email: {
          label: "Email",
          placeholder: "email@tau.ro",
          error: "Adresă de email invalidă",
        },
        company: {
          label: "Companie",
          placeholder: "Compania ta",
          error: "Numele companiei trebuie să aibă cel puțin 2 caractere",
        },
        message: {
          label: "Mesaj",
          placeholder: "Cum putem să îți transformăm afacerea?",
          error: "Mesajul trebuie să aibă cel puțin 10 caractere",
        },
        submit: "Trimite Mesaj",
        sending: "Se trimite...",
        success: {
          title: "Mesaj trimis cu succes",
          description: "Îți vom răspunde în maxim 24 de ore.",
        },
        error: {
          title: "Eroare la trimiterea mesajului",
          description:
            "Te rugăm să încerci din nou sau să ne contactezi direct.",
        },
      },
      nav: {
        industries: "Industrii",
        modules: "Module",
        resources: "Resurse",
        solutions: "Soluțiile Noastre",
        about: "Despre Noi",
        manufacturing: {
          title: "Producție",

          description:
            "Management complet al producției cu MRP, planificare și control al calității",
        },
        real_estate: {
          title: "Imobiliare",

          description:
            "Soluție completă de administrare imobiliară pentru închiriere, întreținere și portaluri pentru chiriași",
        },
        retail: {
          title: "Hospitality",

          description:
            "Soluții integrate POS, inventar și e-commerce pentru retail modern",
        },
        services: {
          title: "Servicii Profesionale",

          description:
            "Management de proiect și urmărirea serviciilor pentru firme de consultanță",
        },
        construction: {
          title: "Construcții",

          description:
            "Estimarea costurilor proiectelor, urmărirea materialelor și conformitate cu reglementările",
        },

        healthcare: {
          title: "Sănătate",

          description:
            "Managementul pacienților și urmărirea inventarului medical",
        },
        education: {
          title: "Educație",

          description:
            "Managementul informațiilor studenților și al resurselor educaționale",
        },
      },
      menu: {
        crm: "CRM",
        sales: "Vânzări",
        purchase: "Achiziții",
        inventory: "Inventar",
        manufacturing: "Producție",
        accounting: "Contabilitate",
        project_management: "Management Proiecte",
        hr: "HR și Recrutare",
        ecommerce: "Website și E-commerce",
        pos: "Point of Sale",
        field_service: "Servicii de Teren",
        marketing: "Automatizare Marketing",
      },
      common: {
        company_name: "Salut Enterprise",
        learn_more: "Află Mai Multe",
        features: "Funcționalități",
        why_choose: "De Ce Să Alegi",
        market_features: "Caracteristici de Piață",
        schedule_demo: "Programează Demo",
        contact_sales: "Contactează Vânzări",
        read_more: "Citește Mai Mult",
        get_started: "Începe Acum",
        contact_us: "Contactează-ne",
        our_features: "Funcționalitățile Noastre",
        benefits: "Beneficii",
        testimonials: "Testimoniale",
        case_studies: "Studii de Caz",
        about_us: "Despre Noi",
      },
      contact: {
        sales: "Contactează Vânzări",
        title: "Contactează-ne",
        subtitle: "Intră în legătură cu echipa noastră",
        form: {
          name: "Numele Tău",
          email: "Adresa de Email",
          message: "Mesaj",
          submit: "Trimite Mesaj",
        },
      },
      industries: {
        manufacturing: {
          title: "Suită Enterprise pentru Producție",
          subtitle:
            "Soluții avansate de producție adaptate industriilor moderne",
          description:
            "Sistem complet de management al producției cu MRP integrat, planificare în timp real și control al calității",
          badge: "Excelență în Producție",
          features: {
            title: "Funcționalități Principale",
            planning: {
              title: "Planificarea Producției",
              description: "Sistem MRP avansat cu programare în timp real",
            },
            quality: {
              title: "Controlul Calității",
              description:
                "Management comprehensiv al calității și protocoale de testare",
            },
            supply: {
              title: "Lanț de Aprovizionare",
              description:
                "Vizibilitate și optimizare end-to-end a lanțului de aprovizionare",
            },
            cost: {
              title: "Managementul Costurilor",
              description:
                "Urmărirea detaliată a costurilor și analiză financiară",
            },
            compliance: {
              title: "Conformitate",
              description:
                "Conformitate automatizată cu standardele industriei",
            },
            documents: {
              title: "Integrare E-Documente",
              description: "Integrare perfectă cu sistemul e-Factura românesc",
            },
          },
          romania_specific: {
            title: "Funcționalități pentru Piața Românească",
            features: {
              efactura: "Conformitate și Integrare e-Factura",
              fiscal: "Gestionarea Codului Fiscal Românesc",
              supply_chain: "Optimizare Lanț de Aprovizionare Local",
              eu_export: "Documentație Export UE",
              labor: "Conformitate cu Legislația Muncii",
              inventory: "Management Inventar Regional",
            },
          },
        },
      },
      home: {
        hero: {
          title: "Soluții Enterprise pentru Afaceri Moderne",
          subtitle: "Soluții software complete adaptate pentru industria ta",
          transform: "Transformă-ți Întreprinderea",
          unlock_growth:
            "Deblochează o creștere fără precedent cu suita noastră de soluții enterprise de ultimă generație.",
          why_choose: "De Ce Companiile Lider Aleg",
          company_exp:
            "Experimentează fuziunea perfectă dintre fiabilitatea la nivel enterprise și inovația modernă.",
          platform_evolves:
            "Platforma noastră evoluează odată cu ambițiile tale, oferind fundația pentru o creștere sustenabilă și excelență digitală.",
        },
        features: {
          scalable: {
            title: "Scalabilitate Infinită",
            description:
              "Arhitectură pregătită pentru viitor care crește odată cu ambițiile tale. Scalează de la startup la enterprise fără probleme.",
          },
          integration: {
            title: "Integrare Perfectă",
            description:
              "Conectează-ți perfect întregul ecosistem digital. Operațiuni unificate pe toate platformele și sistemele.",
          },
          support: {
            title: "Suport Elite 24/7",
            description:
              "Asistență expertă la îndemâna ta. Echipa noastră dedicată îți asigură succesul non-stop.",
          },
        },
      },
      button: {
        demo: "Programează Demo",
        learn_more: "Află Mai Multe",
        contact_sales: "Contactează Vânzări",
        get_started: "Începe Acum",
        submit: "Trimite",
        send: "Trimite",
        view_more: "Vezi Mai Mult",
        try_now: "Încearcă Acum",
      },
      language: {
        select: "Selectează Limba",
        english: "Engleză",
        romanian: "Română",
      },
      gradients: {
        customizer: {
          title: "Personalizare Gradient",
          page_title: "Instrument de Personalizare Gradient",
          page_description:
            "Creează gradiente frumoase și personalizate pentru aplicația ta enterprise",
          preset: "Presetare",
          select_preset: "Selectează o presetare",
          start_color: "Culoare de Start",
          end_color: "Culoare de Final",
          direction: "Direcție",
          preview: "Previzualizare Gradient",
          copy_classes: "Copiază Clasele Gradient",
        },
        directions: {
          right: "Dreapta",
          bottom_right: "Dreapta Jos",
          top_right: "Dreapta Sus",
          bottom: "Jos",
        },
      },
      glossary: {
        title: "Glosar de Terminologie Industrială",
        description:
          "Ghid complet al termenilor și definițiilor specifice industriei",
        search_placeholder: "Caută termeni...",
        all_industries: "Toate Industriile",
        example: "Exemplu",
        no_results: "Nu s-au găsit termeni",
      },
      erp: {
        implementation_milestones: [
          {
            id: "kick-off-meeting",
            duration: "3-5 zile",
            title: "Întâlnire Inițială",
            description:
              "Consultație strategică inițială pentru definirea domeniului și obiectivelor proiectului",
            note: "Durata poate varia în funcție de complexitatea proiectului",
            category: "initial",
          },
          {
            id: "requirements-analysis",
            duration: "5-7 zile",
            title: "Analiză de Cerințe",
            description:
              "Evaluare cuprinzătoare a nevoilor de afaceri și a peisajului sistemului",
            note: "Complexitatea proceselor de afaceri influențează calendarul",
            category: "planning",
          },
          {
            id: "solution-design",
            duration: "5-7 zile",
            title: "Proiectare Soluție",
            description:
              "Planificare arhitecturală și configurare inițială a sistemului ERP",
            note: "Cerințele personalizate pot extinde faza de proiectare",
            category: "design",
          },
          {
            id: "implementation",
            duration: "10-14 zile",
            title: "Faza de Implementare",
            description:
              "Configurare sistem, migrare date și dezvoltare personalizată",
            note: "Variază semnificativ în funcție de complexitatea sistemului și nevoile de personalizare",
            category: "development",
          },
          {
            id: "testing",
            duration: "3-5 zile",
            title: "Testare Cuprinzătoare",
            description:
              "Validarea sistemului pe dimensiuni funcționale și de performanță",
            note: "Profunzimea testării depinde de intricitatea sistemului",
            category: "validation",
          },
          {
            id: "training",
            duration: "2-3 zile",
            title: "Instruire Utilizatori",
            description:
              "Program cuprinzător de instruire pentru utilizatori finali și administratori",
            note: "Adaptat dimensiunii organizaționale și complexității sistemului",
            category: "enablement",
          },
          {
            id: "go-live",
            duration: "2-3 zile",
            title: "Lansare și Tranziție",
            description:
              "Implementare sistem gestionată și perioadă inițială de suport",
            note: "Complexitatea implementării influențează calendarul",
            category: "deployment",
          },
        ],
      },
      navigation: {
        titles: {
          Industries: "Industrii",
          Solutions: "Soluții",
          Resources: "Resurse",
        },
        items: {
          Industries: [
            {
              title: "Producție",
              href: "/erp-system/manufacturing",
              description:
                "Management complet al producției cu MRP, planificare și control al calității",
            },
            {
              title: "Imobiliare",
              href: "/erp-system/real-estate",
              description:
                "Soluție completă de administrare imobiliară pentru închiriere, întreținere și portaluri pentru chiriași",
            },
            {
              title: "Ospitalitate",
              href: "/erp-system/retail",
              description:
                "Soluții integrate POS, inventar și e-commerce pentru retail modern",
            },
            {
              title: "Servicii Profesionale",
              href: "/erp-system/services",
              description:
                "Management de proiect și urmărirea serviciilor pentru firme de consultanță",
            },
            {
              title: "Ospitalitate",
              href: "/erp-system/hospitality",
              description:
                "Sisteme de rezervări și management al experienței oaspeților",
            },
            {
              title: "E-facturare",
              href: "/erp-system/e-factura",
              description: "Management informații și resurse educaționale",
            },
          ],
          Solutions: [
            {
              title: "Etape ERP",
              href: "/solutions/erp",
              description:
                "Planificare integrată a resurselor întreprinderii pentru management cuprinzător de afaceri",
            },
            {
              title: "Management Cloud",
              href: "/solutions/cloud-management",
              description:
                "Infrastructură cloud scalabilă și optimizare servicii",
            },
            {
              title: "Marketing",
              href: "#",
              description:
                "Strategie de marketing avansată și management de campanii digitale",
            },
            {
              title: "Integrare & Personalizare",
              href: "#",
              description:
                "Integrare sistem fără probleme și optimizare personalizată a proceselor de afaceri",
            },
            {
              title: "Suport & Mentenanță",
              href: "/solutions/support",
              description:
                "Suport tehnic cuprinzător și mentenanță proactivă a sistemului",
            },
            {
              title: "Website & E-commerce Personalizat",
              href: "/solutions/website-builder",
              description:
                "Dezvoltare web personalizată și soluții de platformă e-commerce puternice",
            },
          ],
          Resources: [
            {
              title: "Despre Noi",
              href: "/about",
              description: "Află mai multe despre compania și misiunea noastră",
            },
            {
              title: "Noutăți",
              href: "/blog",
              description:
                "Rămâi la curent cu actualizări de produs și știri tehnice",
            },
            {
              title: "Studii de Caz",
              href: "/case-studies",
              description: "Povești de succes de la clienții noștri",
            },
          ],
        },
      },
      home: {
        hero: {
          title: "ERP în Cloud pentru",
          subtitle:
            "Oferim software personalizat care stimulează creșterea și eficiența în toate industriile.",
          e_invoicing: "Software Gratuit E-Factura",
          cta: "Începe Acum",
        },
        steps: {
          manage: {
            title: "Gestionați",
            description:
              "Simplificați operațiunile cu soluțiile noastre integrate de management",
          },
          automate: {
            title: "Automatizați",
            description:
              "Îmbunătățiți-vă marketingul! Automatizați pentru o atingere mai mare și angajament mai inteligent!",
          },
          succeed: {
            title: "Reușiți",
            description:
              "Atingeți-vă obiectivele de afaceri cu metrici de succes dovedite",
          },
        },
        comparison: {
          subtitle:
            "Alegeți viitorul managementului afacerilor cu soluțiile noastre propulsate de AI",
          traditional: {
            title: "Software Tradițional",
            items: [
              "Nimic Nou: Bazarea pe sisteme învechite care împiedică creșterea.",
              "Personalizare Limitata: Soluții generice care nu răspund nevoilor specifice.",
              "Procese Consumatoare de Timp: Sarcini manuale care irosesc ore prețioase.",
              "Costuri Mari: Licențe scumpe și taxe ascunse.",
              "Creștere Stagnantă: Lipsa caracteristicilor inovatoare.",
              "Lipsă Suport: Acces limitat la îndrumare profesională.",
              "Risc de Obsolescență: Rămânerea în urma concurenței.",
              "Interfețe Complexe: Necesită training extins.",
              "Prețuri Rigide: Modele de prețuri inflexibile.",
              "Tehnologie Depășită: Tehnologie care nu ține pasul cu evoluțiile.",
              "Probleme de Securitate: Sisteme vulnerabile.",
              "Scalabilitate Ineficientă: Unelte care nu evoluează odată cu afacerea.",
            ],
          },
          ai: {
            title: "Impressionați Viitorul cu AI",
            items: [
              "Creșteți Profiturile: Optimizați operațiunile pentru profit maxim.",
              "Economisiți Timp: Automatizați procesele pentru eficiență maximă.",
              "Eliminați Sarcinile Manuale: Lăsați AI să gestioneze activitățile repetitive.",
              "Reduceți Costurile: Soluții rentabile cu prețuri transparente.",
              "Sporiți Productivitatea: Unelte avansate pentru performanță maximă.",
              "Personalizare Îmbunătățită: Funcții adaptate nevoilor specifice.",
              "Integrare Perfectă: Compatibilitate cu sistemele existente.",
              "Soluții Scalabile: Creșteți fără limitări software.",
              "Analize în Timp Real: Decizii bazate pe date actuale.",
              "Fără Experiență Necesară: Interfețe ușor de utilizat.",
            ],
          },
        },
        features: {
          scalable: {
            title: "Scalabilitate Infinită",
            description:
              "Arhitectură modernă care crește odată cu afacerea ta. Scalare fără efort de la startup la enterprise.",
          },
          integration: {
            title: "Integrare Perfectă",
            description:
              "Conectează-ți întregul ecosistem digital. Operațiuni unificate pe toate platformele.",
          },
          support: {
            title: "Suport Elite 24/7",
            description:
              "Asistență expertă non-stop. Echipa noastră dedicată îți asigură succesul permanent.",
          },
        },
      },
      services: {
        hero: {
          title: "Transformă-ți Afacerea cu Salut Enterprise",
          subtitle:
            "La Salut Enterprise, înțelegem că companiile de servicii sunt conduse de dorința de eficiență, creștere și experiențe excepționale pentru clienți.",
          cta: "Începe Călătoria",
          contact: "Contactează Vânzări",
        },
        features: {
          title: "Funcționalități Principale",
          subtitle:
            "Suita noastră cuprinzătoare de funcționalități este proiectată nu doar pentru a satisface dorințele tale, ci pentru a le transforma în rezultate tangibile.",
          project_management: {
            title: "Management Proiecte",
            desire: "Realizează execuția perfectă a proiectelor",
            outcome:
              "Utilizează diagrame Gantt și vizualizări Kanban pentru vizualizarea clară a sarcinilor și urmărirea progresului, asigurând finalizarea proiectelor la timp și în buget",
          },
          crm: {
            title: "Management Relații Clienți (CRM)",
            desire: "Construiește relații durabile cu clienții",
            outcome:
              "Captează și dezvoltă lead-uri eficient, îmbunătățind ratele de conversie și menținând înregistrări detaliate ale interacțiunilor pentru a îmbunătăți livrarea serviciilor",
          },
          billing: {
            title: "Facturare și Invoicing",
            desire: "Simplifică procesele financiare",
            outcome:
              "Automatizează facturarea direct din proiecte, asigurând plăți la timp și reducând sarcinile administrative cu opțiuni de facturare recurentă",
          },
          communication: {
            title: "Instrumente de Comunicare Integrate",
            desire: "Favorizează colaborarea între echipe",
            outcome:
              "Activează comunicarea în timp real prin mesagerie și dashboard-uri integrate, asigurând că toată lumea este aliniată și informată",
          },
          agreements: {
            title: "Management Acorduri de Servicii",
            desire: "Optimizează operațiunile de servicii",
            outcome:
              "Gestionează eficient acordurile de servicii, simplificând procesele de urmărire și reînnoire pentru un flux operațional îmbunătățit",
          },
          mobile: {
            title: "Accesibilitate Mobilă",
            desire: "Gestionează-ți afacerea în mișcare",
            outcome:
              "Accesează toate funcționalitățile de pe dispozitive mobile, permițându-ți să supervizezi operațiunile oriunde, oricând",
          },
          workflows: {
            title: "Fluxuri de Lucru Personalizabile",
            desire: "Adaptează procesele la nevoile tale",
            outcome:
              "Automatizează sarcinile repetitive cu fluxuri de lucru personalizabile care îmbunătățesc eficiența în toate departamentele",
          },
          analytics: {
            title: "Raportare și Analiză",
            desire: "Ia decizii informate bazate pe date",
            outcome:
              "Folosește instrumentele integrate de analiză pentru a monitoriza metricile de performanță, permițând luarea de decizii strategice pentru o creștere susținută",
          },
        },
        benefits: {
          title: "De Ce Să Alegi Salut Enterprise?",
          items: [
            "Soluție Tot-În-Unu: Integrează multiple funcții de afaceri într-o singură platformă, eliminând dificultățile gestionării sistemelor disparate",
            "Design Modular: Selectează doar aplicațiile de care ai nevoie, creând o soluție personalizată care se aliniază cu obiectivele specifice ale afacerii tale fără costuri inutile",
            "Scalabilitate: Pe măsură ce afacerea ta crește, scalează ușor operațiunile cu soluția noastră bazată pe cloud care se adaptează la cerințele în creștere",
            "Experiență Clienți Îmbunătățită: Îmbunătățește interacțiunile cu clienții prin instrumente CRM eficiente și portaluri self-service care promovează loialitatea și satisfacția",
            "Management Financiar Îmbunătățit: Simplifică procesele de facturare cu funcții integrate care asigură plăți la timp și raportare financiară precisă",
          ],
        },
        cta: {
          title: "Gata să Transformi Afacerea?",
          subtitle:
            "Experimentează puterea transformativă a Salut Enterprise astăzi.",
          button: "Începe Acum",
        },
      },
      manufacturing: {
        seo: {
          title:
            "Soluții de Producție pentru Întreprinderi | Management Fabrica Inteligentă",
          description:
            "Transformați operațiunile de producție cu soluțiile noastre bazate pe inteligență artificială. Caracteristici includ monitorizare în timp real, comenzi de lucru automate și control calitate.",
          keywords:
            "software producție, producție întreprindere, fabrică inteligentă, management producție, control calitate, gestionare stocuri",
        },
        enterpriseBadge: "Producție Industrială",
        hero: {
          title: "Soluții Inteligente de Producție pentru Industria Modernă",
          subtitle:
            "Transformați operațiunile de producție cu platforma noastră bazată pe inteligență artificială, concepută pentru excelență în producția din era digitală.",
          scheduleDemo: "Programează Demo",
          contactSales: "Contactează Vânzări",
        },
        features: {
          realTime: {
            title: "Monitorizare Producție în Timp Real",
            description:
              "Actualizări live pentru fiecare etapă a procesului de producție.",
            benefit: "Transparență sporită și eficiență operațională",
          },
          automatedWorkOrders: {
            title: "Comenzi de Lucru Automate",
            description:
              "Programare inteligentă și priorizare a sarcinilor de producție.",
            benefit: "Flux de lucru îmbunătățit și timpi morti reduși",
          },
          inventoryManagement: {
            title: "Gestionare Stocuri",
            description: "Reaprovizionare automată și scanare coduri de bare.",
            benefit: "Erori minimizate și niveluri optime de stoc",
          },
          bom: {
            title: "Listă de Materiale (BoM)",
            description:
              "Configurații complexe de produse cu liste de materiale multi-nivel.",
            benefit:
              "Gestionare eficientă a stocurilor și reducere a deșeurilor",
          },
          qualityControl: {
            title: "Instrumente Control Calitate",
            description:
              "Verificări de calitate dedicate pe parcursul producției.",
            benefit: "Asigurarea calității consistente a produselor",
          },
        },
        advantages: {
          comprehensiveIntegration: {
            title: "Integrare Cuprinzătoare",
            description:
              "Conectați perfect producția, stocurile, vânzările și contabilitatea într-o singură platformă pentru informații în timp real și operațiuni eficiente.",
          },
          customizationFlexibility: {
            title: "Personalizare și Flexibilitate",
            description:
              "Design modular care permite adaptarea software-ului la nevoile specifice, suportând cerințe operaționale unice și standarde industriale.",
          },
          costEffectiveSolution: {
            title: "Soluție Rentabilă",
            description:
              "Model de prețuri accesibil pentru afaceri de toate dimensiunile, oferind funcții de nivel enterprise fără costurile tradiționale mari.",
          },
          regulatoryCompliance: {
            title: "Conformitate Regulatorie",
            description:
              "Funcții de conformitate integrate și instrumente de raportare automate pentru a îndeplini standardele industriale și cerințele de reglementare.",
          },
        },
        operationalBenefits: {
          enhancedVisibility: {
            title: "Vizibilitate Sporită",
            description:
              "Acces la date în timp real pentru luarea de decizii informate privind stocurile, etapele de producție și starea comenzilor.",
          },
          costOptimization: {
            title: "Optimizare Costuri",
            description:
              "Alocare inteligentă a resurselor și gestionare integrată a calității pentru a minimiza deșeurile și a îmbunătăți utilizarea.",
          },
          increasedProductivity: {
            title: "Productivitate Crescută",
            description:
              "Fluxuri de lucru automate și programare inteligentă care conduc la creșteri semnificative de eficiență în operațiuni.",
          },
        },
        sections: {
          keyAdvantages: "Avantaje Cheie ale Platformei",
          enterpriseFeatures: "Funcții Enterprise pentru Producție",
          operationalImpact: "Impact Operațional",
          feature: "Funcție",
          description: "Descriere",
          benefits: "Beneficii",
        },
      },
      realEstate: {
        seo: {
          title:
            "Soluții Avansate de Management Immobiliar | Software Gestionare Proprietăți",
          description:
            "Soluții complete de management immobiliar cu funcții AI pentru gestionare proprietăți, facturare automată și analize de piață.",
          keywords:
            "software gestionare proprietăți, management chirie, CRM immobiliar, soluții proprietăți",
        },
        hero: {
          badge: "Soluții Next-Gen pentru Immobiliare",
          title: "Management Immobiliar Avansat",
          subtitle:
            "Soluții complete de management immobiliar cu funcții bazate pe inteligență artificială și integrări perfecte.",
          scheduleDemo: "Programează Demo",
          becomePartner: "Devino Partener",
        },
        features: {
          title: "Funcții Principale",
          list: [
            {
              title: "Gestionare Proprietăți 🏢",
              description: "Administrare completă a portofoliului",
              features: [
                "Urmărire unități",
                "Management chiriași",
                "Rapoarte ocupare",
                "Contracte și documente",
                "Management proiecte",
              ],
            },
            {
              title: "Urmărire Proiecte 📋",
              description: "Administrare completă a proprietăților",
              features: [
                "Monitorizare proiecte",
                "Înregistrări unități",
                "Opțiuni personalizate",
                "Management contracte",
              ],
            },
            {
              title: "Vânzări & Închirieri 🤝",
              description: "Administrare vânzări și închirieri",
              features: [
                "Generare contracte",
                "Urmărire reînnoiri",
                "Gestionare documente",
                "Întreținere",
              ],
            },
            {
              title: "Întreținere Proprietăți 🔧",
              description: "Management întreținere clădiri",
              features: [
                "Sistem ticketing",
                "Management furnizori",
                "Întreținere programată",
                "Utilități",
              ],
            },
            {
              title: "Utilități & Facturare 💰",
              description: "Management costuri utilități",
              features: [
                "Citire contoare",
                "Facturare automată",
                "Tarife personalizate",
                "Rapoarte financiare",
              ],
            },
            {
              title: "CRM & Clienți 👥",
              description: "Management relații clienți",
              features: [
                "Profiluri clienți",
                "Istoric interacțiuni",
                "Task-uri și follow-up",
                "Comunicare automată",
              ],
            },
          ],
        },
        advancedFeatures: {
          title: "Funcții Avansate și Integrări",
          list: [
            {
              title: "Aplicație Mobilă",
              description:
                "Aplicație mobilă pentru manageri, agenți și chiriași cu actualizări în timp real",
              features: [
                "Notificări în timp real",
                "Acces documente mobil",
                "Cereri întreținere mobile",
                "Programări vizionări",
              ],
              icon: "Smartphone",
            },
            {
              title: "Integrare AI/ML",
              description:
                "Analitică avansată și automatizări cu inteligență artificială",
              features: [
                "Preț chirie predictiv",
                "Programare inteligentă întreținere",
                "Procesare automată contracte",
                "Analiză tendințe piață",
              ],
              icon: "Brain",
            },
            {
              title: "Optimizare SEO",
              description:
                "Vizibilitate crescută pentru listări pe motoare de căutare",
              features: [
                "Descrieri meta automate",
                "Pagini optimizate SEO",
                "Optimizare SEO locală",
                "Analitică performanță",
              ],
              icon: "Search",
            },
            {
              title: "Integrare Plăți",
              description: "Integrare cu procesatoare de plăți românești",
              features: [
                "Integrare PayU",
                "Suport Netopia",
                "Facturare automată",
                "Urmărire plăți",
              ],
              icon: "CreditCard",
            },
            {
              title: "Notificări Inteligente",
              description:
                "Sistem de comunicare automat pentru toate părțile implicate",
              features: [
                "Notificări email",
                "Alertă SMS",
                "Memento termene limită",
                "Reguli personalizate notificări",
              ],
              icon: "Bell",
            },
            {
              title: "Sistem CRM",
              description: "Management comprehensiv al relațiilor cu clienții",
              features: [
                "Urmărire interacțiuni",
                "Management lead-uri",
                "Automatizare task-uri",
                "Analitică performanță",
              ],
              icon: "Users",
            },
            {
              title: "Integrare Platforme",
              description: "Sincronizare cu platforme imobiliare românești",
              features: [
                "Sincronizare Immobiliare.ro",
                "Integrare OLX.ro",
                "Actualizări automate listări",
                "Analitică cross-platform",
              ],
              icon: "Share2",
            },
            {
              title: "Unelte Marketing",
              description: "Soluții integrate de marketing și publicitate",
              features: [
                "Integrare Facebook Ads",
                "Management Google Ads",
                "Analitică campanii",
                "Optimizare automată anunțuri",
              ],
              icon: "Megaphone",
            },
            {
              title: "Integrare Contabilitate",
              description: "Management financiar și raportare perfectă",
              features: [
                "Export contabilitate Saga",
                "Integrare E-factură",
                "Reconcilieri automate",
                "Raportare financiară",
                "Integrare curs BNR 💶",
              ],
              icon: "Calculator",
            },
          ],
        },
        testimonials: {
          title: "Ce Spun Clienții Noștri",
          clients: [
            {
              name: "Costel Ciobanu",
              company: "Coda Vinci SRL",
              rating: 5,
              text: "Acest software a revoluționat complet gestionarea portofoliului nostru. Am redus timpul de procesare a documentelor cu 70% și am dublat tranzacțiile închise în ultimele 6 luni!",
              image:
                "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747019/yf8u9a5ql7xvyij3bywh.jpg",
            },
            {
              name: "Grigore Anica",
              company: "BREC Consulting",
              rating: 5,
              text: "Ca consultant imobiliar, am nevoie de instrumente precise. Această platformă oferă exact ce necesit - de la managementul clienților la analize de piață detaliate. Feedback-ul clienților este excepțional!",
              image:
                "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747070/jpoxov3qweqyokkfeyco.png",
            },
          ],
        },
        metrics: {
          setupTime: "Timp Configurare",
          setupTimeValue: "3 Zile",
          cost: "începe",
          costValue: "50 €",
          efficiency: "Creștere Eficiență",
          efficiencyValue: "75%",
        },
        integrations: {
          title: "Parteneri de Integrare",
          partners: [
            { name: "E-factura", logo: "/e-factura.webp" },
            { name: "Saga Software", logo: "/saga-logo.png" },
            { name: "Conformare SAF-T", logo: "/saft.webp" },
            { name: "Listări Proprietăți", logo: "/listing.png" },
          ],
        },
      },
      retail: {
        seo: {
          title: "Soluții Management Retail | Platformă Comerț Unificat",
          description:
            "Transformă operațiunile retail cu gestionare inteligentă a stocurilor, comerț unificat și management al experienței clienților. Crește vânzările pe toate canalele.",
          keywords:
            "software retail, comerț omnichannel, sistem POS, gestionare stocuri, analitică retail, integrare e-commerce",
        },
        hero: {
          badge: "Revoluție Retail",
          title: "Platformă Modernă de  Retail",
          subtitle:
            "Unifică operațiunile online și offline cu analize bazate pe AI și gestiune stocuri în timp real",
          scheduleDemo: "Programează Demo",
          contactSales: "Contactează Vânzări",
        },
        features: {
          title: "Funcționalități Principale",
          list: [
            {
              title: "Comerț Unificat 🛍️",
              description:
                "Integrare perfectă a magazinelor fizice, e-commerce și vânzări mobile",
              features: [
                "Gestionare stocuri unificată",
                "Profile clienți cross-canal",
                "Vizibilitate stocuri în timp real",
                "Management centralizat comenzi",
              ],
            },
            {
              title: "POS Inteligent 💳",
              description: "Sistem point-of-sale cu recomandări bazate pe AI",
              features: [
                "Funcționare offline",
                "Recunoaștere clienți",
                "Prețuri dinamice",
                "Integrare program loialitate",
              ],
            },
            {
              title: "AI pentru Stocuri 📦",
              description: "Sistem predictiv de gestionare stocuri",
              features: [
                "Prognoză cerere",
                "Reaprovizionare automată",
                "Management furnizori",
                "Alertă stocuri stagnante",
              ],
            },
            {
              title: "Customer360 👤",
              description: "Management unificat al experienței clienților",
              features: [
                "Istoric cumpărături",
                "Analiză comportament",
                "Marketing personalizat",
                "Mapare journey omnichannel",
              ],
            },
            {
              title: "Analitică Retail 📊",
              description: "Dashboard inteligentă în timp real",
              features: [
                "Performanță vânzări",
                "Rotație stocuri",
                "Productivitate personal",
                "Analiză marje profit",
              ],
            },
            {
              title: "Hub E-commerce 🌐",
              description: "Management integrat magazin online",
              features: [
                "Design responsive",
                "Optimizare SEO",
                "Integrare gateway plăți",
                "Recuperare coșuri abandonate",
              ],
            },
          ],
        },
        benefits: {
          title: "Impact Afaceri",
          list: [
            "Checkout cu 35% mai rapid",
            "Reducere 28% stocuri epuizate",
            "Îmbunătățire 40% fidelizare clienți",
            "Costuri operaționale cu 22% mai mici",
            "50+ rapoarte predefinite",
            "Alertă mobile în timp real",
          ],
        },
        integrations: {
          title: "Integrări Perfecte",

          partners: [
            { name: "FiscalNet", logo: "/fiscalnet_logo.png" },
            { name: "E-factura", logo: "/e-factura.webp" },
            { name: "Saga Software", logo: "/saga-logo.png" },
            { name: "Shopify", logo: "/shopify.webp" },
          ],
        },
        metrics: {
          setupTime: "Timp Configurare",
          setupTimeValue: "3 Zile",
          cost: "Cost",
          costValue: "50 €",
          efficiency: "Creștere Eficiență",
          efficiencyValue: "75%",
        },
        testimonials: {
          title: "Succesul Antreprenorilor",
          clients: [
            {
              name: "Ana Popescu",
              company: "UrbanFashion România",
              rating: 5,
              text: "Funcțiile omnichannel ne-au ajutat să reducem costurile cu stocurile cu 30% crescând satisfacția clienților.",
              image: "/testimonials/fashion.jpg",
            },
            {
              name: "Andrei Ionescu",
              company: "TechGadgets RO",
              rating: 5,
              text: "Analiza în timp real ne-a ajutat să optimizăm spațiul în rafturi și să creștem vânzările.",
              image: "/testimonials/electronics.jpg",
            },
          ],
        },
        metrics: {
          setupTime: "Timp Implementare",
          setupTimeValue: "4 Săptămâni",
          cost: "ROI Realizat",
          costValue: "6 Luni",
          efficiency: "Eficiență Crescută",
          efficiencyValue: "65%",
        },
        pricing: {
          title: "Simple, Transparent Pricing",
          subtitle:
            "Choose the perfect plan for your restaurant. All plans include our core POS system with 14-day free trial.",
          basic: {
            title: "Basic",
            price: "355",
            setup: "1335",
            features: [
              "Smart POS System",
              "Kitchen Display System",
              "Basic Stock Management",
            ],
          },
          standard: {
            title: "Standard",
            price: "445",
            setup: "1335",
            features: [
              "All Basic Features",
              "Choose 1 Module",
              "Purchase Module",
              "Loyalty Program",
              "Delivery Integration",
            ],
          },
          growth: {
            title: "Growth Bundle",
            price: "445",
            setup: "1335",
            features: [
              "All Basic Features",
              "2 Modules Included",
              "Save 67 RON/month",
            ],
          },
          trial: "Try all features free for 14 days!",
          faq: {
            title: "Frequently Asked Questions",
            setup: {
              question: "What's included in the Setup Fee?",
              answer:
                "8-hour onboarding session including data migration, staff training, and system setup.",
            },
            modules: {
              question: "Can I change modules later?",
              answer:
                "Yes, you can upgrade or change modules at any time. Changes will be reflected in your next billing cycle.",
            },
            trial: {
              question: "How does the 14-day trial work?",
              answer:
                "Start with full access to all features. No credit card required. Choose your plan at the end of the trial.",
            },
          },
          cta: "Contact Us for Custom Solutions",
        },
      },
      common: {
        company_name: "Salut Enterprise",
        learn_more: "Află Mai Multe",
        features: "Features",
      },
      websiteBuilder: {
        hero: {
          title: "Prezența Ta Online Completă",
          subtitle:
            "Atât de bun, încât este ușor de configurat - dar complet. Proiectează pagini atractive și gestionează-ți întreaga afacere dintr-o singură platformă unificată.",
          cta: "Începe Gratuit",
        },
        quickSetup: {
          title: "Modul Fără Cod",
          subtitle:
            "Prezența ta online perfectă ar trebui să fie ușor de creat și întreținut",
          steps: {
            business: {
              title: "Configurează-ți afacerea",
              description: "Spune-ne despre afacerea ta",
            },
            logo: {
              title: "Adaugă logo-ul",
              description: "Încarcă identitatea ta de brand",
            },
            features: {
              title: "Selectează funcționalități",
              description: "Alege ce ai nevoie",
            },
            theme: {
              title: "Alege tema",
              description: "Alege designul preferat",
            },
          },
        },
        websiteFeatures: {
          title: "Funcționalități Website",
          subtitle: "Tot ce ai nevoie pentru a crea un website profesional",
          dragDrop: {
            title: "Constructor Drag & Drop",
            description:
              "Creează site-ul ca un designer cu interfața noastră intuitivă drag-and-drop. Fă ajustări precise, adaugă filtre și animează elementele direct pe pagină.",
          },
          ai: {
            title: "Creare cu AI",
            description:
              "Lasă AI-ul să sugereze layout-ul și conținutul site-ului în funcție de industria ta. Îmbunătățește-ți copywriting-ul cu integrarea ChatGPT pentru o generare mai bună a conținutului.",
          },
          mobile: {
            title: "Responsive pe Mobile",
            description:
              "Site-ul tău se adaptează automat la toate dispozitivele. Controlează ce este vizibil pe mobile cu instrumentele noastre de design responsive.",
          },
          photos: {
            title: "3M+ Fotografii Gratuite",
            description:
              "Accesează o vastă bibliotecă de imagini de calitate de la Unsplash pentru a îmbunătăți aspectul vizual al site-ului tău.",
          },
        },
        ecommerceFeatures: {
          title: "Funcționalități E-commerce",
          subtitle:
            "Tot ce ai nevoie pentru a gestiona un magazin online de succes",
          products: {
            title: "Produse Adaptative",
            description:
              "Afișează produsele tale în toate aspectele lor cu dimensiuni, culori și variante configurabile. Gestionarea stocurilor se actualizează automat în timp real pentru fiecare variantă.",
          },
          engagement: {
            title: "Interacțiune cu Clienții",
            description:
              "Construiește relații mai puternice cu suport chat în timp real și recenzii de la clienți. Ajută clienții să găsească următoarea lor achiziție cu recomandări inteligente.",
          },
          analytics: {
            title: "Analiză și Creștere",
            description:
              "Urmărește performanța magazinului cu analitice integrate. Construiește rapoarte avansate și verifică datele pentru a lua decizii informate.",
          },
          payments: {
            title: "Integrare Plăți",
            description:
              "Oferă clienților o varietate de opțiuni de plată. Integrează fără probleme cu furnizorii populari de plăți pentru tranzacții sigure.",
          },
        },
        additionalFeatures: {
          title: "Funcționalități Adiționale",
          subtitle:
            "Instrumente suplimentare pentru a îmbunătăți prezența ta online",
          language: {
            title: "Suport Multi-Limbă",
            description:
              "Instalează diferite limbi și traduce conținutul direct din orice pagină cu instrumentele noastre integrate de traducere.",
          },
          seo: {
            title: "Optimizare SEO",
            description:
              "Scrie conținut optimizat pentru motoarele de căutare cu instrumentele noastre integrate SEO pentru a îmbunătăți vizibilitatea site-ului tău.",
          },
          market: {
            title: "Adaptabilitate la Piață",
            description:
              "Extinde-ți raza de acțiune cu integrarea cu marketplace-uri majore precum Amazon și Facebook. Ajungi la mai mulți clienți acolo unde cumpără.",
          },
          shipping: {
            title: "Livrare Flexibilă",
            description:
              "Oferă multiple opțiuni de livrare, inclusiv click și ridicare. Lasă clienții să cumpere online și să ridice comenzile de la magazinul tău.",
          },
        },
        pricing: {
          title: "Gratuit Pentru Totdeauna, Utilizatori Nelimitați",
          subtitle:
            "Site-ul și magazinul tău online sunt gratuite pentru totdeauna cu planul nostru One App Free, inclusiv găzduire, suport nelimitat și întreținere. Fără reclame sau limite.",
          cta: "Începe Acum",
        },
      },
      about: {
        hero: {
          title: "Despre Salut Enterprise",
          description:
            "Salut Enterprise este un furnizor de lider al soluțiilor software enterprise, specializat în sisteme complete de management de afaceri care ajută organizațiile să-și eficientizeze operațiunile și să-și atingă potențialul maxim.",
        },
        mission: {
          title: "Misiunea Noastră",
          description:
            "Ne angajăm să oferim soluții software inovatoare, scalabile și integrate care împuternicesc afacerile să prospere într-o lume din ce în ce mai digitală. Ne concentrăm pe furnizarea tehnologiei de nivel enterprise care este atât puternică, cât și ușor de utilizat.",
        },
        values: {
          title: "Valorile Noastre",
          innovation: {
            title: "Inovație",
            description:
              "Evoluăm constant soluțiile noastre pentru a răspunde nevoilor în schimbare ale afacerilor",
          },
          quality: {
            title: "Calitate",
            description:
              "Menținem cele mai înalte standarde în dezvoltarea software",
          },
          customerSuccess: {
            title: "Succesul Clienților",
            description:
              "Dedicați ajutării clienților noștri să-și atingă obiectivele",
          },
          integrity: {
            title: "Integritate",
            description: "Operăm cu transparență și practici etice de afaceri",
          },
        },
        journey: {
          title: "Călătoria Noastră",
        },
        team: {
          title: "Cunoaște Echipa Noastră de Conducere",
        },
      },
      thankYou: {
        meta: {
          title: "Mulțumim - Salut Enterprise",
          description:
            "Vă mulțumim că ați contactat Salut Enterprise. Apreciem interesul dumneavoastră și vă vom răspunde în curând.",
        },
        title: "Mulțumim!",
        message:
          "Am primit mesajul dumneavoastră și vă vom răspunde cât mai curând posibil.",
        whatNext: {
          title: "Ce urmează?",
          step1:
            "Echipa noastră va analiza mesajul dumneavoastră în termen de 24 de ore",
          step2: "Un specialist dedicat va fi desemnat să vă asiste",
          step3:
            "Vă vom contacta prin email sau telefon pentru a discuta nevoile dumneavoastră",
        },
        backHome: "Înapoi la Pagina Principală",
      },
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
