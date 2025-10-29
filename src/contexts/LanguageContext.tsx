import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    "header.platform": "Plataforma",
    "header.card": "Cartão Internacional",
    "header.investments": "Investimentos",
    "header.vision": "Visão Global",
    "header.contact": "Contato",
    "header.access": "Acesso",
    "header.spotlight": "Spotlight",
    "header.login": "Entrar",
    "header.download": "Baixar App",
    "header.getCard": "Quero meu cartão",
    
    // Hero
    "hero.title": "Banco Digital Conectado ao Mundo das Criptomoedas",
    "hero.subtitle": "A plataforma completa para gestão de investimentos, cartão internacional e acesso ao mercado cripto. Tudo em um só lugar.",
    "hero.downloadApp": "Baixe o app",
    "hero.learnMore": "Saiba mais",
    "hero.cardTitle": "Cartão Internacional Inwista",
    "hero.cardDescription": "Utilize em qualquer lugar do mundo com diversos ativos financeiros. Cripto, fiat e muito mais.",
    
    // Platform
    "platform.title": "Você não precisa vender seus ativos para usar",
    "platform.subtitle": "Use seu cartão internacional com diversos ativos financeiros",
    "platform.feature1": "Painel Intuitivo",
    "platform.feature1Desc": "Interface moderna e fácil de usar",
    "platform.feature2": "Múltiplos Ativos",
    "platform.feature2Desc": "Suporte para crypto e fiat",
    "platform.feature3": "Segurança 24/7",
    "platform.feature3Desc": "Monitoramento constante",
    
    // Investments
    "investments.title": "Não Deixe Seu Dinheiro Parado",
    "investments.subtitle": "Invista e faça seu patrimônio render",
    "investments.feature1": "Rendimento Automático",
    "investments.feature1Desc": "Seus ativos trabalhando por você",
    "investments.feature2": "Diversificação",
    "investments.feature2Desc": "Múltiplas opções de investimento",
    "investments.feature3": "Liquidez Imediata",
    "investments.feature3Desc": "Acesse quando precisar",
    
    // Card
    "card.title": "Cartão Internacional",
    "card.subtitle": "Use em qualquer lugar do mundo",
    "card.feature1": "Aceito Globalmente",
    "card.feature1Desc": "Milhões de estabelecimentos",
    "card.feature2": "Múltiplas Moedas",
    "card.feature2Desc": "Cripto e fiat em um só cartão",
    "card.feature3": "Cashback",
    "card.feature3Desc": "Ganhe em cada compra",
    
    // Contact
    "contact.title": "Suporte 24/7",
    "contact.subtitle": "Estamos aqui para ajudar",
    "contact.phone": "0800 xxx xxxx",
    "contact.chat": "Chat Especializado",
    "contact.email": "contato@inwista.com",
    
    // Footer
    "footer.rights": "Todos os direitos reservados",
    "footer.about": "A plataforma que conecta o sistema financeiro tradicional com o futuro digital.",
    "footer.links": "Links Úteis",
    "footer.contact": "Contato",
    "footer.location": "São Paulo, Brasil",
  },
  en: {
    // Header
    "header.platform": "Platform",
    "header.card": "International Card",
    "header.investments": "Investments",
    "header.vision": "Global Vision",
    "header.contact": "Contact",
    "header.access": "Access",
    "header.spotlight": "Spotlight",
    "header.login": "Login",
    "header.download": "Download App",
    "header.getCard": "Get my card",
    
    // Hero
    "hero.title": "Digital Bank Connected to the World of Cryptocurrencies",
    "hero.subtitle": "The complete platform for investment management, international card and crypto market access. All in one place.",
    "hero.downloadApp": "Download app",
    "hero.learnMore": "Learn more",
    "hero.cardTitle": "Inwista International Card",
    "hero.cardDescription": "Use anywhere in the world with various financial assets. Crypto, fiat and much more.",
    
    // Platform
    "platform.title": "You don't need to sell your assets to use them",
    "platform.subtitle": "Use your international card with various financial assets",
    "platform.feature1": "Intuitive Dashboard",
    "platform.feature1Desc": "Modern and easy-to-use interface",
    "platform.feature2": "Multiple Assets",
    "platform.feature2Desc": "Support for crypto and fiat",
    "platform.feature3": "24/7 Security",
    "platform.feature3Desc": "Constant monitoring",
    
    // Investments
    "investments.title": "Don't Let Your Money Sit Idle",
    "investments.subtitle": "Invest and make your wealth grow",
    "investments.feature1": "Automatic Returns",
    "investments.feature1Desc": "Your assets working for you",
    "investments.feature2": "Diversification",
    "investments.feature2Desc": "Multiple investment options",
    "investments.feature3": "Immediate Liquidity",
    "investments.feature3Desc": "Access when you need",
    
    // Card
    "card.title": "International Card",
    "card.subtitle": "Use anywhere in the world",
    "card.feature1": "Globally Accepted",
    "card.feature1Desc": "Millions of establishments",
    "card.feature2": "Multiple Currencies",
    "card.feature2Desc": "Crypto and fiat in one card",
    "card.feature3": "Cashback",
    "card.feature3Desc": "Earn on every purchase",
    
    // Contact
    "contact.title": "24/7 Support",
    "contact.subtitle": "We're here to help",
    "contact.phone": "+1 800 xxx xxxx",
    "contact.chat": "Specialized Chat",
    "contact.email": "contact@inwista.com",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.about": "The platform that connects traditional financial system with the digital future.",
    "footer.links": "Useful Links",
    "footer.contact": "Contact",
    "footer.location": "São Paulo, Brazil",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
