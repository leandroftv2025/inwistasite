import { DollarSign, Shield, CreditCard, ArrowRight, Repeat } from "lucide-react";

const steps = [
  {
    icon: DollarSign,
    number: "01",
    title: "Depósito via PIX",
    description: "Faça depósitos instantâneos em reais usando PIX. Rápido, seguro e sem complicação."
  },
  {
    icon: Repeat,
    number: "02",
    title: "Conversão para Stablecoin",
    description: "Seu saldo é automaticamente convertido para stablecoins (USDT/USDC) com liquidez global."
  },
  {
    icon: Shield,
    number: "03",
    title: "Custódia Segura",
    description: "Seus ativos ficam protegidos em wallets MPC (Fireblocks) com segurança institucional."
  },
  {
    icon: CreditCard,
    number: "04",
    title: "Cartão Internacional",
    description: "Use seu cartão Inwista para compras globais sem vender seus ativos digitais."
  },
  {
    icon: ArrowRight,
    number: "05",
    title: "Saque via PIX Out",
    description: "Converta de volta para reais e saque quando quiser, de forma instantânea."
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(177 70% 50%) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground dark:text-white">
            Como <span className="text-primary dark:text-[hsl(var(--turquoise-neon))]">Funciona</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground dark:text-white max-w-3xl mx-auto">
            Um fluxo simples e seguro que conecta o sistema financeiro tradicional com o futuro digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full hover:border-[hsl(var(--turquoise-neon))] dark:hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                <div className="flex flex-col items-start space-y-4">
                  <div className="flex items-center justify-between w-full">
                    <div className="bg-primary dark:bg-[hsl(var(--turquoise-neon))] p-3 rounded-xl group-hover:bg-[hsl(var(--turquoise-neon))] dark:group-hover:bg-white transition-all">
                      <step.icon className="w-6 h-6 text-white dark:text-primary group-hover:text-white dark:group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20 dark:text-[hsl(var(--turquoise-neon))]/20">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground dark:text-white group-hover:text-[hsl(var(--turquoise-neon))] dark:group-hover:text-[hsl(var(--turquoise-neon))] transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-foreground dark:text-white text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-50"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
