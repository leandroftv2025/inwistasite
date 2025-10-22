import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.png";
import cardTurquoise from "@/assets/card-turquoise.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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
              <span className="block text-foreground">Banco Digital</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Conectado ao
              </span>
              <span className="block text-foreground text-3xl sm:text-4xl lg:text-5xl mt-2">
                Mundo das Criptomoedas
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Gerencie seus ativos digitais com a facilidade de um banco tradicional.
              <span className="block mt-2 font-medium text-primary">
                PIX instantâneo, stablecoin e muito mais em um único app.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all text-base sm:text-lg px-6 sm:px-8 py-6 animate-glow"
              >
                Baixe o app
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 py-6"
              >
                Saiba mais
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
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            + Cartão Internacional Incluso
          </h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Gaste sem vender seus ativos. Use seu saldo digital em qualquer lugar do mundo.
          </p>
          <div className="flex justify-center">
            <img 
              src={cardTurquoise} 
              alt="Cartão Inwista" 
              className="w-full max-w-md drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
