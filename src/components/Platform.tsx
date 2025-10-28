import { Laptop, TrendingUp, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Platform = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Laptop,
      title: t("platform.feature1"),
      description: t("platform.feature1Desc"),
    },
    {
      icon: TrendingUp,
      title: t("platform.feature2"),
      description: t("platform.feature2Desc"),
    },
    {
      icon: Shield,
      title: t("platform.feature3"),
      description: t("platform.feature3Desc"),
    },
  ];

  return (
    <section id="plataforma" className="py-20 sm:py-32 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t("platform.title")}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("platform.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-card rounded-3xl p-8 border border-primary/30 hover:scale-[1.02] transition-all duration-500 animate-fade-in">
          <div className="aspect-video bg-background/50 rounded-xl flex items-center justify-center border border-border/50">
            <iframe
              src="https://3bitcom.replit.app/"
              className="w-full h-full rounded-xl"
              title="Platform Demo"
              allow="fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
