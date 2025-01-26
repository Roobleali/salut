import { motion } from "framer-motion";
import { Settings2, TrendingUp, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LearnAnimation() {
  const { t } = useTranslation();

  const steps = [
    {
      id: "manage",
      icon: Settings2,
      title: t("home.steps.manage.title"),
      description: t("home.steps.manage.description"),
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      id: "automate",
      icon: TrendingUp,
      title: t("home.steps.automate.title"),
      description: t("home.steps.automate.description"),
      color: "from-green-500/20 to-green-600/20",
    },
    {
      id: "succeed",
      icon: Trophy,
      title: t("home.steps.succeed.title"),
      description: t("home.steps.succeed.description"),
      color: "from-yellow-500/20 to-yellow-600/20",
    },
  ];

  return (
    <div className="relative py- overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} blur-xl`} />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-2">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-full border-t-2 border-dashed border-primary/30"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}