import { Button } from "@/components/ui/button";
import { LearnAnimation } from "@/components/LearnAnimation";
import { OnboardingModal } from "@/components/models/OnboardingModal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Hero() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent pt-20 pb-24" aria-labelledby="hero-title">
      {/* Decorative Elements */}
      <div className="absolute inset-0 animate-fade-in" aria-hidden="true">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 pt-12 lg:pt-16 relative">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in text-center">
            <div className="space-y-10">
              <h1 id="hero-title" className="text-5xl lg:text-6xl font-bold tracking-tight animate-slide-in">
                <span className="block mb-4">
                  {t('home.hero.title')}
                  <span className="relative ml-2">
                    SME's
                    <svg
                      className="absolute -bottom-1 left-0 w-full"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,5 Q50,9 100,5"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-primary"
                      />
                    </svg>
                  </span>
                  !
                </span>
                <span className="block mt-2 font-medium text-primary text-3xl">
                  {t('home.hero.subtitle')}
                  <br />
                  <p className="mt-4 text-gray-500 text-sm font-bold font-serif">
                    {t('home.hero.e_invoicing')}
                  </p>
                </span>
                <div className="flex -mb-5 items-center justify-center" aria-hidden="true">
                  <img src="https://odoocdn.com/openerp_website/static/src/img/graphics/arrow_doodle_1.svg" alt="" />
                </div>
              </h1>
              <div className="flex justify-center gap-4 animate-fade-in">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setShowOnboarding(true)}
                >
                  {t('home.hero.cta')}
                </Button>
              </div>

              <div className="container max-w-4xl mx-auto px-4">
                <LearnAnimation />
              </div>
            </div>
          </div>
        </div>
      </div>

      <OnboardingModal
        open={showOnboarding}
        onOpenChange={setShowOnboarding}
      />
    </section>
  );
}