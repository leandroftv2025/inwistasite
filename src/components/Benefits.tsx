import { Globe, Lock, Zap, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Globe,
    title: "Liquidez Global Instantânea",
    description: "Acesse mercados internacionais e movimente seu dinheiro sem fronteiras. Converta entre moedas com as melhores taxas do mercado."
  },
  {
    icon: Lock,
    title: "Segurança Institucional",
    description: "Seus ativos protegidos com a tecnologia MPC da Fireblocks, a mesma usada por grandes instituições financeiras globais."
  },
  {
    icon: Zap,
    title: "Conversão Automática",
    description: "Troque entre reais, dólares, euros e stablecoins de forma automática e transparente, sempre com as melhores taxas."
  },
  {
    icon: TrendingUp,
    title: "Liberdade Financeira",
    description: "Use seu cartão Inwista em qualquer lugar do mundo sem se preocupar com taxas abusivas ou burocracias bancárias."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 sm:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground dark:text-white">
            Por que <span className="text-primary dark:text-[hsl(var(--turquoise-neon))]">Inwista</span>?
          </h2>
          <p className="text-lg sm:text-xl text-foreground dark:text-white max-w-3xl mx-auto">
            Tecnologia de ponta para oferecer a melhor experiência financeira digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-card backdrop-blur-sm border-border/50 p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col space-y-4">
                <div className="bg-primary dark:bg-[hsl(var(--turquoise-neon))] p-4 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-[hsl(var(--turquoise-neon))] dark:group-hover:bg-white transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-white dark:text-primary group-hover:text-white dark:group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground dark:text-white group-hover:text-[hsl(var(--turquoise-neon))] dark:group-hover:text-[hsl(var(--turquoise-neon))] transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-foreground dark:text-white leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
