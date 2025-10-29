import { useLanguage } from "@/contexts/LanguageContext";
import cardPremium from "@/assets/card-premium.png";

const Platform = () => {
  const { t } = useLanguage();

  return (
    <section id="plataforma" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t("platform.title")}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("platform.subtitle")}
          </p>
        </div>

        {/* Card Image */}
        <div className="flex justify-center animate-fade-in">
          <div className="relative max-w-2xl">
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
      </div>
    </section>
  );
};

export default Platform;
