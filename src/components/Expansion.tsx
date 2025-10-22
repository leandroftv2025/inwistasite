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
            {/* Animated connection lines overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Brazil as central point (South America location) */}
              <circle cx="280" cy="400" r="8" fill="hsl(185 80% 45%)" className="opacity-90">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
              </circle>
              
              {/* Connection to North America */}
              <path d="M 280 400 Q 200 250 150 180" stroke="hsl(185 80% 45%)" strokeWidth="2.5" fill="none" opacity="0" className="connection-line">
                <animate attributeName="opacity" values="0;0.7;0" dur="4s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="0 500; 250 250; 500 0" dur="4s" repeatCount="indefinite" />
              </path>
              
              {/* Connection to Europe */}
              <path d="M 280 400 Q 400 300 520 220" stroke="hsl(185 80% 45%)" strokeWidth="2.5" fill="none" opacity="0" className="connection-line">
                <animate attributeName="opacity" values="0;0.7;0" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="stroke-dasharray" values="0 500; 250 250; 500 0" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
              </path>
              
              {/* Connection to Africa */}
              <path d="M 280 400 Q 450 380 580 350" stroke="hsl(185 80% 45%)" strokeWidth="2.5" fill="none" opacity="0" className="connection-line">
                <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="stroke-dasharray" values="0 500; 250 250; 500 0" dur="5s" repeatCount="indefinite" begin="1s" />
              </path>
              
              {/* Connection to Asia */}
              <path d="M 280 400 Q 600 300 780 280" stroke="hsl(185 80% 45%)" strokeWidth="2.5" fill="none" opacity="0" className="connection-line">
                <animate attributeName="opacity" values="0;0.7;0" dur="5.5s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="stroke-dasharray" values="0 600; 300 300; 600 0" dur="5.5s" repeatCount="indefinite" begin="1.5s" />
              </path>
              
              {/* Connection to Oceania */}
              <path d="M 280 400 Q 650 480 850 450" stroke="hsl(185 80% 45%)" strokeWidth="2.5" fill="none" opacity="0" className="connection-line">
                <animate attributeName="opacity" values="0;0.7;0" dur="6s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="stroke-dasharray" values="0 600; 300 300; 600 0" dur="6s" repeatCount="indefinite" begin="2s" />
              </path>
              
              {/* Endpoint dots with pulse and delayed animations */}
              <circle cx="150" cy="180" r="5" fill="hsl(185 80% 45%)">
                <animate attributeName="opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                <animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="520" cy="220" r="5" fill="hsl(185 80% 45%)">
                <animate attributeName="opacity" values="0;1;0" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
                <animate attributeName="r" values="5;7;5" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="580" cy="350" r="5" fill="hsl(185 80% 45%)">
                <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" begin="1s" />
                <animate attributeName="r" values="5;7;5" dur="5s" repeatCount="indefinite" begin="1s" />
              </circle>
              <circle cx="780" cy="280" r="5" fill="hsl(185 80% 45%)">
                <animate attributeName="opacity" values="0;1;0" dur="5.5s" repeatCount="indefinite" begin="1.5s" />
                <animate attributeName="r" values="5;7;5" dur="5.5s" repeatCount="indefinite" begin="1.5s" />
              </circle>
              <circle cx="850" cy="450" r="5" fill="hsl(185 80% 45%)">
                <animate attributeName="opacity" values="0;1;0" dur="6s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="r" values="5;7;5" dur="6s" repeatCount="indefinite" begin="2s" />
              </circle>
            </svg>
            
            <img 
              src={worldMap} 
              alt="Mapa de conexões globais Inwista" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {[
              { region: "Brasil", markets: "PIX & Stablecoin" },
              { region: "América Latina", markets: "Expansão Regional" },
              { region: "Europa", markets: "SEPA & SWIFT" },
              { region: "África", markets: "Mercados Emergentes" }
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
