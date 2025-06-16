import { Send, Shield, Globe, Smartphone, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavigationItem {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
    icon?: LucideIcon;
  }[];
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: "Services",
    items: [
      {
        title: "Money Transfers",
        href: "/services/transfers",
        description:
          "Fast and secure money transfers from the UK to Somalia with competitive rates",
        icon: Send,
      },
      {
        title: "Mobile Money",
        href: "/services/mobile-money",
        description: "Instant transfers to mobile money accounts in Somalia",
        icon: Smartphone,
      },
      {
        title: "Cash Pickup",
        href: "/services/cash-pickup",
        description: "Convenient cash pickup locations across Somalia",
        icon: Wallet,
      },
    ],
  },
  {
    title: "Solutions",
    items: [
      {
        title: "Mobile App",
        href: "/solutions/mobile-app",
        description:
          "User-friendly mobile app for easy money transfers on the go",
        icon: Smartphone,
      },
      {
        title: "Security",
        href: "/solutions/security",
        description:
          "Bank-grade security and fraud protection for your transfers",
        icon: Shield,
      },
      {
        title: "Multi-language Support",
        href: "/solutions/language",
        description: "Full support in Somali and English languages",
        icon: Globe,
      },
    ],
  },
];

export const COMPANY_MILESTONES = [
  {
    id: "founding",
    year: "2024",
    month: "January",
    title: "Company Founded",
    description:
      "Garemit was founded with a mission to serve the Somali diaspora in the UK.",
    category: "launch" as const,
  },
  {
    id: "expansion",
    year: "2024",
    month: "March",
    title: "Mobile App Launch",
    description:
      "Launched our mobile app for convenient money transfers on the go.",
    category: "growth" as const,
  },
  {
    id: "team-growth",
    year: "2024",
    month: "April",
    title: "Community Support",
    description:
      "Expanded our support team with Somali-speaking representatives to better serve our community.",
    category: "team" as const,
  },
];

export const TRANSFER_FEATURES = [
  {
    id: "fast",
    title: "Fast Transfers",
    icon: "clock",
    description:
      "Send money instantly to mobile money accounts or arrange cash pickup at convenient locations across Somalia.",
    features: [
      "Instant mobile money transfers",
      "Same-day cash pickup",
      "Real-time transfer tracking",
      "Instant notifications",
    ],
  },
  {
    id: "secure",
    title: "Bank-Grade Security",
    icon: "shield",
    description:
      "Your money is protected with the highest level of security. We're fully regulated and your funds are always safe with us.",
    features: [
      "End-to-end encryption",
      "Two-factor authentication",
      "Fraud protection",
      "Secure verification process",
    ],
  },
  {
    id: "affordable",
    title: "Competitive Rates",
    icon: "wallet",
    description:
      "Send more money home with our competitive rates and no hidden fees. We believe in transparent pricing.",
    features: [
      "Low transfer fees",
      "No hidden charges",
      "Best exchange rates",
      "Transparent pricing",
    ],
  },
  {
    id: "community",
    title: "Built for Somalis",
    icon: "users",
    description:
      "We understand your needs because we're part of the same community. Our platform is designed with Somali culture and values at heart.",
    features: [
      "Somali language support",
      "Cultural understanding",
      "Community-focused service",
      "Local expertise",
    ],
  },
];

export const ERP_IMPLEMENTATION_MILESTONES = [
  {
    id: "kick-off-meeting",
    duration: "3-5 days",
    title: "Kick-off Meeting",
    description:
      "Initial strategic consultation to define project scope and objectives",
    note: "Duration may vary based on project complexity",
    category: "initial" as const,
  },
  {
    id: "requirements-analysis",
    duration: "5-7 days",
    title: "Requirements Analysis",
    description:
      "Comprehensive assessment of business needs and system landscape",
    note: "Complexity of business processes impacts timeline",
    category: "planning" as const,
  },
  {
    id: "solution-design",
    duration: "5-7 days",
    title: "Solution Design",
    description: "Architectural planning and initial ERP system configuration",
    note: "Custom requirements may extend design phase",
    category: "design" as const,
  },
  {
    id: "implementation",
    duration: "10-14 days",
    title: "Implementation Phase",
    description: "System configuration, data migration, and custom development",
    note: "Varies significantly with system complexity and customization needs",
    category: "development" as const,
  },
  {
    id: "testing",
    duration: "3-5 days",
    title: "Comprehensive Testing",
    description:
      "System validation across functional and performance dimensions",
    note: "Depth of testing depends on system intricacy",
    category: "validation" as const,
  },
  {
    id: "training",
    duration: "2-3 days",
    title: "User Training",
    description:
      "Comprehensive training program for end-users and administrators",
    note: "Tailored to organizational size and system complexity",
    category: "enablement" as const,
  },
  {
    id: "go-live",
    duration: "2-3 days",
    title: "Go-Live and Transition",
    description: "Managed system deployment and initial support period",
    note: "Deployment complexity impacts timeline",
    category: "deployment" as const,
  },
];

export const VIDEO_TESTIMONIALS = [
  {
    id: "gourmet-coffee-testimonial",
    title: "From Legacy Systems to Modern  Solution",
    clientName: "Sherif Abdala",
    position: "CEO",
    company: "Gourmet Coffee",
    videoUrl:
      "https://res.cloudinary.com/do3dahfvh/video/upload/f_auto:video,q_auto/m59amoxkynlzn8jy7ows",
    thumbnail:
      "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747105/ttt1fmtpdnxfv3gagevm.png",
  },
  {
    id: "manufacturing-testimonial",
    title: "Smart Factory Success Story",
    clientName: "Sarah Johnson",
    position: "Plant Manager",
    company: "Manufacturing Inc.",
    videoUrl: "https://example.com/testimonials/manufacturing.mp4",
    thumbnail: "https://images.unsplash.com/photo-1565785755661-61aa53ca37c7",
  },
  {
    id: "retail-testimonial",
    title: "Multi-store Retail Transformation",
    clientName: "Michael Chen",
    position: "Retail Director",
    company: "StyleMart",
    videoUrl: "https://example.com/testimonials/stylemart.mp4",
    thumbnail: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62",
  },
];

export const CASE_STUDIES = [
  {
    id: "gourmet-coffee",
    title: "Gourmet Coffee's Journey to Modern  Solutions",
    industry: "Manufacturing & HORECA",
    challenge:
      "As Romania's pioneering coffee producer since 1996, Gourmet Coffee faced challenges with fragmented systems (Winmentor and SagaSoft), limiting their ability to efficiently manage production tracking, quality control, and market differentiation. They needed a solution that could handle their diverse operations while maintaining their commitment to premium quality.",
    solution:
      "Implemented a comprehensive  solution that unified their production management, quality control, and distribution operations. The system was tailored to support their unique coffee blend customization process and streamline their private labeling capabilities.",
    results: [
      "Streamlined production tracking and quality control",
      "Enhanced coffee blend customization capabilities",
      "Improved inventory and distribution management",
      "Efficient private label management system",
      "Real-time production monitoring and analytics",
      "Seamless integration of all business operations",
    ],
    testimonial: {
      quote:
        "The transition from our legacy systems to dolcenera's solution has revolutionized how we manage our coffee production and distribution operations. As Romania's first company specialized in private labeling of coffee, we needed a system that could handle our unique requirements, and this solution has exceeded our expectations.",
      author: "Sherif Abdala",
      position: "CEO",
      company: "Gourmet Coffee",
    },
    videoUrl:
      "https://res.cloudinary.com/do3dahfvh/video/upload/f_auto:video,q_auto/m59amoxkynlzn8jy7ows",
  },

  {
    id: "brec-real-estate",
    title: "Brec Business & Real Estate Consulting Digital Transformation",
    industry: "Real Estate",
    challenge:
      "As a growing real estate consulting firm in Bucharest, Brec faced challenges in managing increasing volumes of data and client interactions. They needed a unified platform to streamline their operations and improve client management.",
    solution:
      "Integrated a customized real estate software solution with comprehensive CRM, property management tools, and mobile accessibility for agents",
    results: [
      "40% reduction in property listing management time",
      "30% improvement in client satisfaction",
      "Enhanced data management efficiency",
      "Automated property listing updates",
      "Improved team collaboration",
      "Real-time market analytics access",
    ],
    testimonial: {
      quote:
        "The integrated software solution has revolutionized our real estate operations. The centralized platform has dramatically improved our efficiency and enabled us to better serve our growing client base in Bucharest.",
      author: "Grigore Anica",
      position: "CEO",
      company: "Brec Business & Real Estate Consulting SRL",
    },
    videoUrl:
      "https://res.cloudinary.com/do3dahfvh/video/upload/v1734621913/7982cf6b-2687-43f1-b24e-bdadebc9777a_elwl2b.mov",
  },
  {
    id: "dolcenera-coffee",
    title: "Dolcenera Coffee Shops Digital Revolution",
    industry: "Manufacturing & HORECA",
    challenge:
      "Prior to the software implementation, Dolcenera coffee shops faced challenges with inefficient inventory management, slow service times, and difficulties in tracking customer preferences, impacting their ability to maintain competitive advantage in the market.",
    solution:
      "Implemented comprehensive software solution with POS system, inventory management, CRM tools, and analytics dashboard to streamline operations and enhance customer experience",
    results: [
      "30% reduction in order processing times",
      "40% increase in customer satisfaction",
      "25% reduction in inventory waste",
      "Enhanced customer data analytics",
      "Improved staff efficiency through training",
      "Real-time monitoring of operations",
    ],
    testimonial: {
      quote:
        "The software has revolutionized how we interact with customers. We've seen remarkable improvements in customer satisfaction and operational efficiency across all our locations.",
      author: "Operations Director",
      position: "Director of Operations",
      company: "Dolcenera Coffee Shops",
    },
    // No video available for this case study - using placeholder
  },
  {
    id: "codavinci-property",
    title: "Codavinci SRL Property Management Transformation",
    industry: "Real Estate",
    challenge:
      "The agency struggled with fragmented systems for utility tracking and payment collections, leading to inefficiencies, delayed payments, and communication issues with tenants.",
    solution:
      "Implemented a comprehensive property management software solution focused on automated utility tracking, payment collection, and tenant communication.",
    results: [
      "40% reduction in manual tracking time",
      "30% decrease in late payments",
      "Enhanced tenant satisfaction with portal access",
      "Real-time utility consumption monitoring",
      "Streamlined payment collection process",
      "Improved financial reporting accuracy",
    ],
    testimonial: {
      quote:
        "The property management software has revolutionized how we handle utility tracking and tenant communications. The automation features have significantly improved our operational efficiency and tenant satisfaction levels.",
      author: "Costel Ciobanu",
      position: "CEO",
      company: "Codavinci SRL",
    },
    // No video available for this case study - using placeholder
  },
];

export const TEAM_MEMBERS = [
  {
    id: "ceo",
    name: "Shakuur Ally",
    role: "CEO & Founder",
    bio: "Extensive experience across multiple software industries, bringing innovative solutions to  challenges.",
    expertise: ["Strategic Planning", "Digital Transformation", " Solutions"],
    image:
      "https://res.cloudinary.com/do3dahfvh/image/upload/v1697357976/lx7l2p8rpywnz5jfn5oa.jpg",
    social: {
      facebook: "https://www.facebook.com/dolcenerashop",
      instagram: "https://www.instagram.com/dolceneracoffee",
    },
  },
  {
    id: "sales-director",
    name: "Sherif Abdala",
    role: "Sales Director",
    bio: "Leading our sales initiatives and client relationships to drive growth and success.",
    expertise: ["Sales Strategy", "Client Relations", "Business Development"],
    image:
      "https://res.cloudinary.com/do3dahfvh/image/upload/v1731747105/ttt1fmtpdnxfv3gagevm.png",
    social: {
      facebook: "https://www.facebook.com/dolcenerashop",
      instagram: "https://www.instagram.com/dolceneracoffee",
    },
  },
];

// Removed duplicate COMPANY_MILESTONES declaration
