import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-background to-card"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/50 to-background"></div>
      
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="text-left space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">Premium Banking Experience</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
              {t("hero.title")}
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed font-light">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                className="group bg-gradient-primary hover:opacity-90 hover:bg-[hsl(var(--turquoise-neon))] transition-all hover:scale-105 text-base sm:text-lg px-8 py-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-glow"
              >
                {t("hero.downloadApp")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-white hover:bg-[hsl(var(--turquoise-neon))] hover:border-[hsl(var(--turquoise-neon))] hover:text-white hover:scale-105 transition-all text-base sm:text-lg px-8 py-7 backdrop-blur-sm"
              >
                {t("hero.learnMore")}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>Blockchain Security</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>180+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant gradient transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-background/80 to-card"></div>
    </section>
  );
};

export default Hero;
