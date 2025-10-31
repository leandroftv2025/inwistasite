import { PiggyBank, Zap, Wallet } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Investments = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: PiggyBank,
      title: t("investments.feature1"),
      description: t("investments.feature1Desc"),
    },
    {
      icon: Zap,
      title: t("investments.feature2"),
      description: t("investments.feature2Desc"),
    },
    {
      icon: Wallet,
      title: t("investments.feature3"),
      description: t("investments.feature3Desc"),
    },
  ];

  return (
    <section id="investimentos" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-card opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground dark:text-white">
            {t("investments.title")}
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto">
            {t("investments.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary dark:bg-[hsl(var(--turquoise-neon))] p-3 rounded-xl w-fit mb-4">
                <feature.icon className="w-8 h-8 text-white dark:text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white">{feature.title}</h3>
              <p className="text-foreground dark:text-white">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="bg-primary dark:bg-[hsl(var(--turquoise-neon))] hover:bg-[hsl(var(--turquoise-neon))] dark:hover:bg-white text-white dark:text-primary dark:hover:text-primary transition-all hover:scale-105 shadow-glow"
          >
            {t("hero.learnMore")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Investments;
