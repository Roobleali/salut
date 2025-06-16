import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <Helmet>
        <title>{t('about.hero.title')} | {t('common.company_name')}</title>
        <meta name="description" content={t('about.hero.description')} />
        <meta property="og:title" content={`${t('about.hero.title')} | ${t('common.company_name')}`} />
        <meta property="og:description" content={t('about.hero.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dolcenera.ro/about" />
        <meta property="og:image" content="https://dolcenera.ro/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t('about.hero.title')} | ${t('common.company_name')}`} />
        <meta name="twitter:description" content={t('about.hero.description')} />
        <meta name="twitter:image" content="https://dolcenera.ro/og-image.jpg" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              About Garemit
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Fast, fair, and familiar — remittance built by Somalis, for Somalis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We built Garemit because we lived it. For years, sending money back home meant long waits, confusing fees, and systems that didn't speak our language — literally or culturally. Every transfer felt like a leap of faith.
                </p>
                <p className="text-lg leading-relaxed">
                  Our parents had to trust strangers with their hard-earned money, navigating complex systems that didn't understand our community's needs. We knew there had to be a better way.
                </p>
                <p className="text-lg leading-relaxed">
                  Garemit was born from that need — not in a boardroom, but in real conversations across dinner tables, community halls, and WhatsApp groups. Built by members of the Somali diaspora, for the Somali diaspora, Garemit makes remittance simple, safe, and stress-free. We're not just building a service; we're building trust within our community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  To make sending money home faster, safer, and more affordable — starting with the Somali community. We're on a mission to transform how diaspora communities connect with their loved ones back home.
                </p>
                <p className="text-lg leading-relaxed">
                  We believe financial tools should feel familiar, speak your language, and respect your values. Our mission is to empower families and communities through accessible, transparent, and trustworthy money movement. Every transfer is more than just a transaction — it's a lifeline, a connection, a promise kept.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Who We Serve</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We serve the Somali diaspora — across the UK and beyond — whether you're:
                </p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Supporting family back home with essential needs and dreams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Helping with school fees or medical bills, ensuring a brighter future</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Running a business between borders, building economic bridges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Or simply doing what Somalis have always done: looking out for each other, strengthening our community</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed">
                  Garemit is built for you. And while we start with our own community, our platform is designed to grow — to serve more people from underserved diaspora communities around the world. We're not just building a service; we're building a movement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">What Makes Garemit Different</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  We're not just another fintech app. We're your people. Here's what sets us apart:
                </p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Culturally in tune</strong> – We speak Somali. We understand urgency, family, and trust. We know the importance of every transfer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Transparent pricing</strong> – No hidden fees. No surprises. What you send is what arrives. We believe in complete honesty.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Mobile-first</strong> – Designed for busy lives and borderless living. Send money anytime, anywhere, with just a few taps.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Security first</strong> – Your data and money are protected with the latest encryption and compliance standards. Your trust is our priority.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span><strong>Built for scale</strong> – Today Somalis, tomorrow the global diaspora. We're growing with our community.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Garemit starts with Somalis — because that's who we are. But the need for fair, fast, and culturally-aware remittance goes far beyond one community. We see a world where every diaspora community has access to financial services that understand them.
                </p>
                <p className="text-lg leading-relaxed">
                  Our vision is to build a financial bridge for every diaspora community left behind by traditional banks and overpriced apps. We're creating a future where sending money home is as simple as sending a message.
                </p>
                <p className="text-lg leading-relaxed">
                  We're building something powerful — from the ground up, from one community outwards. This is more than a business; it's a movement for financial inclusion and community empowerment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Us</h2>
              <p className="text-xl text-gray-700 mb-8">
                Whether you're sending £50 or £500, helping a loved one or building a business — Garemit is here for you. Every transfer matters, every connection counts.
              </p>
              <p className="text-xl text-gray-700">
                Rooted in community. Built for trust. Ready to grow. Together, we're making remittance better for everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
