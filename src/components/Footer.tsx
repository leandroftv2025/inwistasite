import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              inwista
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              A plataforma que conecta o sistema financeiro tradicional com o futuro digital.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#como-funciona" className="text-foreground/70 hover:text-primary transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#cartao" className="text-foreground/70 hover:text-primary transition-colors">
                  Cartão
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-foreground/70 hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#expansao" className="text-foreground/70 hover:text-primary transition-colors">
                  Expansão Global
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-foreground/70">
                <Mail size={16} className="text-primary" />
                <span>contato@inwista.com</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/70">
                <Phone size={16} className="text-primary" />
                <span>+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2 text-foreground/70">
                <MapPin size={16} className="text-primary" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            © 2025 Inwista — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
