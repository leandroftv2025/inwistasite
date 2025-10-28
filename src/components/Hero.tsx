import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import appMockup from "@/assets/hero-banner.png";
import cardNew from "@/assets/card-new.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                {t("hero.title")}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 text-base sm:text-lg px-6 sm:px-8 py-6 animate-glow shadow-glow"
              >
                {t("hero.downloadApp")}
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all text-base sm:text-lg px-6 sm:px-8 py-6"
              >
                {t("hero.learnMore")}
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img 
                src={appMockup} 
                alt="App Inwista" 
                className="relative w-full max-w-sm lg:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Card Section - Secondary Feature */}
        <div className="mt-16 sm:mt-24 text-center animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:scale-105 transition-transform duration-300">
            {t("hero.cardTitle")}
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            {t("hero.cardDescription")}
          </p>
          <div className="flex justify-center animate-float">
            <img 
              src={cardNew} 
              alt="Cartão Inwista" 
              className="w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
