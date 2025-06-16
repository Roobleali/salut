import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navigation: {
        titles: {
          Home: "Home",
          About: "About",
          Services: "Services",
          Contact: "Contact",
        },
        items: {
          Home: [{ title: "Home", href: "/", icon: "home" }],
          About: [
            { title: "About Us", href: "/about", icon: "information-circle" },
          ],
          Services: [
            { title: "Money Transfers", href: "/services", icon: "money" },
            { title: "Mobile Money", href: "/services", icon: "phone" },
            {
              title: "Cash Pickup",
              href: "/services",
              icon: "building-storefront",
            },
          ],
          Contact: [{ title: "Contact", href: "/contact", icon: "envelope" }],
        },
        cta: "Get Started",
      },
      services: {
        hero: {
          title: "Our Services",
          subtitle:
            "Fast, secure, and affordable money transfers for the Somali diaspora",
          cta: "Start Sending Money",
          contact: "Contact Us",
        },
        services: {
          title: "Our Services",
          subtitle: "Choose the service that best fits your needs",
        },
        money_transfers: {
          title: "Money Transfers",
          description:
            "Send money quickly and securely to your loved ones in Somalia",
          features: {
            fast: "Instant transfers to major cities",
            secure: "Bank-grade security",
            affordable: "Competitive exchange rates",
            convenient: "Multiple payment options",
          },
        },
        mobile_money: {
          title: "Mobile Money",
          description: "Send money directly to mobile wallets in Somalia",
          features: {
            instant: "Instant delivery to mobile wallets",
            anywhere: "Send from anywhere in the UK",
            secure: "Secure transactions",
            easy: "Easy to use mobile app",
          },
        },
        cash_pickup: {
          title: "Cash Pickup",
          description:
            "Send money for cash pickup at our extensive network of locations",
          features: {
            wide_network: "Wide network of pickup locations",
            instant: "Instant availability",
            secure: "Secure pickup process",
            convenient: "Convenient locations",
          },
        },
        benefits: {
          title: "Why Choose Garemit",
          items: [
            "Fast and secure transfers",
            "Competitive exchange rates",
            "No hidden fees",
            "24/7 customer support",
            "Easy to use platform",
            "Trusted by the Somali community",
          ],
        },
        cta: {
          title: "Ready to Send Money?",
          subtitle:
            "Join thousands of satisfied customers who trust Garemit for their remittance needs",
          button: "Get Started",
        },
      },
      contact: {
        pageTitle: "Contact Garemit",
        pageSubtitle:
          "We're here to help. Reach out to our team for support, questions, or partnership opportunities.",
        trustElements: {
          support: {
            title: "24/7 Support",
            description:
              "Our team is always available to assist you with your remittance needs.",
          },
          security: {
            title: "Secure & Trusted",
            description:
              "Your data and transfers are protected with industry-leading security.",
          },
          clients: {
            title: "Thousands of Clients",
            description:
              "Trusted by the Somali community in the UK and beyond.",
          },
          expert: {
            title: "Remittance Experts",
            description:
              "Years of experience serving the diaspora with care and professionalism.",
          },
        },
        contactInfo: {
          title: "Contact Information",
          email: {
            label: "Email",
            value: "info@garemit.com",
          },
          phone: {
            label: "Phone",
            value: "+44 1234 567890",
          },
          address: {
            label: "Address",
            value: "Garemit Ltd.\n123 Somali Street\nLondon, UK",
          },
          response: {
            title: "Fast Response",
            description: "We aim to respond to all inquiries within 24 hours.",
          },
        },
        form: {
          title: "Send Us a Message",
          name: {
            label: "Your Name",
            placeholder: "Enter your full name",
          },
          email: {
            label: "Your Email",
            placeholder: "Enter your email address",
          },
          company: {
            label: "Company (optional)",
            placeholder: "Enter your company name",
          },
          message: {
            label: "Message",
            placeholder: "How can we help you?",
          },
          submit: "Send Message",
          sending: "Sending...",
          success: {
            title: "Message Sent!",
            description:
              "Thank you for contacting Garemit. We will get back to you soon.",
          },
          error: {
            title: "Error",
            description:
              "There was a problem sending your message. Please try again.",
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
