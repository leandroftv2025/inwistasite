import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Zap, TrendingDown, Coins } from "lucide-react";
import cardPremium from "@/assets/card-premium.png";

const Platform = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Zap,
      title: t("platform.benefit1"),
      description: t("platform.benefit1Desc"),
    },
    {
      icon: TrendingDown,
      title: t("platform.benefit2"),
      description: t("platform.benefit2Desc"),
    },
    {
      icon: Coins,
      title: t("platform.benefit3"),
      description: t("platform.benefit3Desc"),
    },
  ];

  return (
    <section id="plataforma" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary dark:text-white">
            {t("platform.title")}
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto">
            {t("platform.subtitle")}
          </p>
        </div>

        {/* Card and Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto mt-8">
          {/* Card Image - Smaller */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative max-w-sm w-full">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
              <div className="relative transform hover:scale-105 transition-transform duration-700">
                <img 
                  src={cardPremium} 
                  alt="Cartão Inwista Premium" 
                  className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.7)] rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Benefits and Button */}
          <div className="space-y-6 animate-fade-in">
            {/* Benefits */}
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="flex gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-[hsl(var(--turquoise-neon))] dark:hover:border-white transition-all hover:scale-105 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary dark:bg-[hsl(var(--turquoise-neon))] flex items-center justify-center group-hover:bg-[hsl(var(--turquoise-neon))] dark:group-hover:bg-white transition-all">
                      <Icon className="w-6 h-6 text-white dark:text-primary group-hover:text-white dark:group-hover:text-primary transition-all" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/80 dark:text-white/80">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
            
            {/* Button below menu on the right */}
            <div className="flex justify-end mt-8">
              <Button 
                size="lg"
                className="group bg-primary dark:bg-[hsl(var(--turquoise-neon))] hover:bg-[hsl(var(--turquoise-neon))] dark:hover:bg-white text-white dark:text-primary dark:hover:text-primary transition-all hover:scale-105 text-base px-8 py-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-glow"
              >
                {t("platform.getCard")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
