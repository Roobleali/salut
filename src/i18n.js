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
                "Sincronizare Immobiliare.ro",
                "Integrare OLX.ro",
                "Actualizări automate listări",
                "Analitică cross-platform",
              ],
              icon: "Share2",
            },
            {
              title: "Marketing Tools",
              description: "Integrated marketing and advertising solutions",
              features: [
                "Integrare Facebook Ads",
                "Management Google Ads",
                "Analitică campanii",
                "Optimizare automată anunțuri",
              ],
              icon: "Megaphone",
            },
            {
              title: "Accounting Integration",
              description: "Seamless financial management and reporting",
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
          setupTime: "Timp Configurare",
          setupTimeValue: "3 Zile",
          cost: "începe",
          costValue: "50 €",
          efficiency: "Creștere Eficiență",
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
        features: {
          title: "Core Features",
          list: [
            {
              icon: "ShoppingCart",
              title: "Smart POS System",
              description:
                "Modern point-of-sale with AI-powered recommendations",
              features: [
                "Offline operation",
                "Customer recognition",
                "Dynamic pricing",
                "Loyalty program integration",
              ],
            },
            {
              icon: "Package",
              title: "Kitchen Display System",
              description:
                "Streamline kitchen operations with digital order management",
              features: [
                "Real-time order updates",
                "Order prioritization",
                "Kitchen analytics",
                "Mobile notifications",
              ],
            },
            {
              icon: "LineChart",
              title: "Inventory Management",
              description: "AI-powered inventory control and forecasting",
              features: [
                "Demand forecasting",
                "Automatic reordering",
                "Supplier management",
                "Stock alerts",
              ],
            },
            {
              icon: "Globe",
              title: "Online Ordering",
              description: "Seamless integration with delivery platforms",
              features: [
                "Delivery platform integration",
                "Order synchronization",
                "Menu management",
                "Customer tracking",
              ],
            },
            {
              icon: "Shield",
              title: "Security & Compliance",
              description:
                "Enterprise-grade security and regulatory compliance",
              features: [
                "Data encryption",
                "Role-based access",
                "Audit logging",
                "GDPR compliance",
              ],
            },
            {
              icon: "Wallet",
              title: "Payment Processing",
              description: "Flexible payment solutions for all needs",
              features: [
                "Multiple payment methods",
                "Split payments",
                "Refund management",
                "Financial reporting",
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
          allBasicFeatures: "All Basic Features",
          chooseOneModule: "Choose 1 Module",
          bestValue: "Best Value",
          getStarted: "Get Started",
          setupFee: "Setup Fee",
          basic: {
            title: "Basic",
            price: "79",
            setup: "299",
            features: [
              "Smart POS System",
              "Kitchen Display System",
              "Basic Stock Management",
              "Cash Register Integration",
              "Multiple Payment Methods",
              "Table Management",
              "Priority Support Response",
            ],
          },
          standard: {
            title: "Standard",
            price: "94",
            setup: "299",
            features: [
              "All Basic Features",
              "Purchase Module",
              "Loyalty Program",
              "Delivery Integration",
            ],
            modules: [
              "Self-Ordering Services (QR Code Demo)",
              "E-Factura Integration",
              "Saga Connector",
              "Website & Ecommerce",
              "Purchase Module",
              "Loyalty Program",
              "Delivery Integration",
              "Advanced Analytics",
              "Customer Management",
            ],
          },
          growth: {
            title: "Growth Bundle",
            price: "99",
            setup: "299",
            features: ["All Basic Features", "Save 67 RON/month"],
            modulesIncluded: "All Modules Included",
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
