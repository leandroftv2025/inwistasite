import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import cardImage from "@/assets/inwista-card.jpg";
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
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 sm:space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Cartão de</span>
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Pagamento
              </span>
              <span className="block text-foreground text-3xl sm:text-4xl lg:text-5xl mt-2">
                gaste sem vender seus ativos.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              Transforme seu saldo digital em poder de compra global.
              <span className="block mt-2 font-medium text-primary">
                PIX, stablecoin e cartão internacional, tudo em um só lugar.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-all text-base sm:text-lg px-6 sm:px-8 py-6 animate-glow"
              >
                Comece agora
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
                src={cardImage} 
                alt="Cartão Inwista" 
                className="relative w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
