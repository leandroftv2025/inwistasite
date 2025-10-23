import worldMap from "@/assets/world-connections.jpg";

const Expansion = () => {
  return (
    <section id="expansao" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Conectando o Mundo
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto">
            <span className="block mb-2">Conectando o dinheiro real com o futuro digital.</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
              Brasil, América Latina, Europa e África.
            </span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
            <img 
              src={worldMap} 
              alt="Mapa de conexões globais Inwista" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {[
              { region: "América Latina", markets: "Expansão Regional" },
              { region: "América do Norte", markets: "USD & Stablecoin" },
              { region: "Ásia", markets: "Mercados Asiáticos" },
              { region: "Europa", markets: "SEPA & SWIFT" },
              { region: "África", markets: "Mercados Emergentes" },
              { region: "Oceania", markets: "Mercados do Pacífico" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-card backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{item.region}</h3>
                <p className="text-foreground/70 text-sm">{item.markets}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Nossa infraestrutura global permite que você faça transações em qualquer lugar do mundo,
            com a segurança e eficiência que você merece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expansion;
