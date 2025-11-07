import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <img 
              src={new URL('@/assets/inwista-logo-blue.png', import.meta.url).href} 
              alt="Inwista" 
              className="h-16 sm:h-20 hover:scale-105 transition-transform duration-300 dark:hidden"
            />
            <img 
              src={new URL('@/assets/inwista-logo.png', import.meta.url).href} 
              alt="Inwista" 
              className="h-16 sm:h-20 hover:scale-105 transition-transform duration-300 hidden dark:block"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-all hover:scale-105 font-medium"
            >
              {t("header.platform")}
            </button>
            <button
              onClick={() => scrollToSection("plataforma")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-all hover:scale-105 font-medium"
            >
              {t("header.card")}
            </button>
            <button
              onClick={() => scrollToSection("investimentos")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-all hover:scale-105 font-medium"
            >
              {t("header.investments")}
            </button>
            <button
              onClick={() => scrollToSection("expansao")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-all hover:scale-105 font-medium"
            >
              {t("header.vision")}
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-all hover:scale-105 font-medium"
            >
              {t("header.contact")}
            </button>
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe size={16} />
                  <span className="hidden sm:inline">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("pt")}>
                  🇧🇷 Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login Button */}
            <Button
              variant="outline"
              size="sm"
              className="hover:scale-105 transition-transform hover:bg-[hsl(var(--turquoise-neon))] hover:text-white dark:hover:bg-white dark:hover:text-primary hover:border-[hsl(var(--turquoise-neon))] dark:hover:border-white"
              onClick={() => scrollToSection("acesso")}
            >
              {t("header.login")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-colors text-left font-medium"
            >
              {t("header.platform")}
            </button>
            <button
              onClick={() => scrollToSection("plataforma")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-colors text-left font-medium"
            >
              {t("header.card")}
            </button>
            <button
              onClick={() => scrollToSection("investimentos")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-colors text-left font-medium"
            >
              {t("header.investments")}
            </button>
            <button
              onClick={() => scrollToSection("expansao")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-colors text-left font-medium"
            >
              {t("header.vision")}
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-[hsl(var(--turquoise-neon))] dark:hover:text-white transition-colors text-left font-medium"
            >
              {t("header.contact")}
            </button>

            <div className="pt-4 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                className="w-full hover:bg-[hsl(var(--turquoise-neon))] hover:text-white dark:hover:bg-white dark:hover:text-primary hover:border-[hsl(var(--turquoise-neon))] dark:hover:border-white"
                onClick={() => {
                  scrollToSection("acesso");
                  setIsMenuOpen(false);
                }}
              >
                {t("header.login")}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
