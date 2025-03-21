import React from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Users,
  CloudCog,
  Factory,
  ShoppingBag,
  Building2,
  Briefcase,
  Menu,
  X,
  ShoppingCart,
  Settings,
  Wrench,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "../LanguageSelector";

const iconMap: Record<string, Record<string, JSX.Element>> = {
  Industries: {
    '/erp-system/manufacturing': <Factory className="w-4 h-4" aria-hidden="true" />,
    '/erp-system/real-estate': <Building2 className="w-4 h-4" aria-hidden="true" />,
    '/erp-system/retail': <ShoppingBag className="w-4 h-4" aria-hidden="true" />,
    '/erp-system/services': <Briefcase className="w-4 h-4" aria-hidden="true" />,
  },
  Solutions: {
    '/solutions/erp': <Users className="w-4 h-4" aria-hidden="true" />,
    '/solutions/cloud-management': <CloudCog className="w-4 h-4" aria-hidden="true" />,
    '/solutions/marketing': <ShoppingCart className="w-4 h-4" aria-hidden="true" />,
    '/solutions/integration': <Settings className="w-4 h-4" aria-hidden="true" />,
    '/solutions/support': <Wrench className="w-4 h-4" aria-hidden="true" />,
    '/solutions/website-builder': <Globe className="w-4 h-4" aria-hidden="true" />,
  },
};

const getIcon = (href: string, section: string): JSX.Element | null => {
  return iconMap[section]?.[href] || null;
};

const SECTIONS = ['Industries', 'Solutions', 'Resources'] as const;

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  const navigationTitles = t('navigation.titles', { returnObjects: true }) as Record<string, string>;
  const navigationItems = t('navigation.items', { returnObjects: true }) as Record<string, Array<{
    title: string;
    href: string;
    description: string;
  }>>;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <img
              src="/logo.jpeg"
              alt="Salut Enterprise Logo"
              className="w-full max-w-[150px] h-auto"
            />
          </Link>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {SECTIONS.map((sectionKey) => (
                  <NavigationMenuItem key={sectionKey}>
                    <NavigationMenuTrigger>
                      {navigationTitles[sectionKey]}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={cn(
                        "grid gap-3 p-6",
                        ['Industries', 'Solutions'].includes(sectionKey)
                          ? "w-[600px] grid-cols-2"
                          : "w-[400px]"
                      )}>
                        {navigationItems[sectionKey].map((subItem) => (
                          <li key={subItem.href} className="row-span-3">
                            <NavigationMenuLink asChild>
                              <Link href={subItem.href}>
                                <a className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200",
                                  "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5",
                                  "focus:bg-gradient-to-r focus:from-primary/20 focus:to-primary/10"
                                )}>
                                  <div className="flex items-center gap-2 text-sm font-medium leading-none mb-2">
                                    {getIcon(subItem.href, sectionKey)}
                                    <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                                      {subItem.title}
                                    </span>
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </a>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              {t("contact.sales")}
            </Link>
          </div>
        </div>
      </div>

      <div className={cn(
        "lg:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto h-[calc(100vh-4rem)] bg-background flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-8 hide-scrollbar">
            {SECTIONS.map((sectionKey) => (
              <div key={sectionKey} className="pb-6 border-b last:border-b-0">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 sticky top-0 bg-white py-2">
                  {navigationTitles[sectionKey]}
                </h3>
                <ul className="grid gap-3">
                  {navigationItems[sectionKey].map((subItem) => (
                    <motion.li
                      key={subItem.href}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href={subItem.href}>
                        <a
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {getIcon(subItem.href, sectionKey)}
                          <div>
                            <span className="font-medium">{subItem.title}</span>
                            <p className="text-sm text-muted-foreground">
                              {subItem.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sticky bottom-0 bg-white p-4 border-t">
            <div className="flex flex-col gap-4">
              <LanguageSelector />
              <Link href="/contact">
                <a>
                  <Button size="lg" className="w-full">
                    {t("contact.sales")}
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}