import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <img 
              src={new URL('@/assets/inwista-logo.png', import.meta.url).href} 
              alt="Inwista" 
              className="h-16 sm:h-20 lg:h-24"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("cartao")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Cartão
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("expansao")}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Expansão
            </button>
            <Button 
              onClick={() => scrollToSection("hero")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Quero meu cartão
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("cartao")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Cartão
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("expansao")}
              className="text-foreground/80 hover:text-primary transition-colors text-left"
            >
              Expansão
            </button>
            <Button 
              onClick={() => scrollToSection("hero")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity w-full"
            >
              Quero meu cartão
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
