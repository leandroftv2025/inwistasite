import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="animate-fade-in">
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 hover:scale-105 transition-transform duration-300 inline-block">
              inwista
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {t("footer.about")}
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#plataforma" className="text-foreground/70 hover:text-primary transition-all hover:translate-x-1 inline-block">
                  {t("header.platform")}
                </a>
              </li>
              <li>
                <a href="#cartao" className="text-foreground/70 hover:text-primary transition-all hover:translate-x-1 inline-block">
                  {t("header.card")}
                </a>
              </li>
              <li>
                <a href="#investimentos" className="text-foreground/70 hover:text-primary transition-all hover:translate-x-1 inline-block">
                  {t("header.investments")}
                </a>
              </li>
              <li>
                <a href="#expansao" className="text-foreground/70 hover:text-primary transition-all hover:translate-x-1 inline-block">
                  {t("header.vision")}
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors group">
                <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span>{t("contact.email")}</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors group">
                <Phone size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span>{t("contact.phone")}</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/70 hover:text-primary transition-colors group">
                <MapPin size={16} className="text-primary group-hover:scale-110 transition-transform" />
                <span>{t("footer.location")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-foreground/60 text-sm">
            © 2025 Inwista — {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
