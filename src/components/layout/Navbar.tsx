import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SECTIONS = ['Home', 'About', 'Contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/garemit.png"
              alt="Garemit"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {SECTIONS.map((section) => {
              if (section === 'Services') {
                return (
                  <div key={section} className="relative group">
                    <button className="text-gray-700 hover:text-primary transition-colors">
                      {t(`navigation.titles.${section}`)}
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1">
                        {(t(`navigation.items.${section}`, { returnObjects: true }) as Array<{ title: string; href: string; icon: string }>).map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={section}
                  href={section === 'Home' ? '/' : `/${section.toLowerCase()}`}
                  className={cn(
                    "text-gray-700 hover:text-primary transition-colors",
                    location === (section === 'Home' ? '/' : `/${section.toLowerCase()}`) && "text-primary"
                  )}
                >
                  {t(`navigation.titles.${section}`)}
                </Link>
              );
            })}
            <Button className="bg-primary text-white hover:bg-primary/90">
              {t('navigation.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-2 space-y-1">
              {SECTIONS.map((section) => {
                if (section === 'Services') {
                  return (
                    <div key={section} className="py-2">
                      <div className="text-gray-700 font-medium mb-2">
                        {t(`navigation.titles.${section}`)}
                      </div>
                      <div className="pl-4 space-y-1">
                        {(t(`navigation.items.${section}`, { returnObjects: true }) as Array<{ title: string; href: string; icon: string }>).map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-gray-600 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={section}
                    href={section === 'Home' ? '/' : `/${section.toLowerCase()}`}
                    className={cn(
                      "block py-2 text-gray-700 hover:text-primary",
                      location === (section === 'Home' ? '/' : `/${section.toLowerCase()}`) && "text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navigation.titles.${section}`)}
                  </Link>
                );
              })}
              <Button className="w-full bg-primary text-white hover:bg-primary/90 mt-4">
                {t('navigation.cta')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
