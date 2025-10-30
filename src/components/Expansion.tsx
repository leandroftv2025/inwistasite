import worldConnections from "@/assets/world-connections.jpg";

const Expansion = () => {
  return (
    <section id="expansao" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={worldConnections} 
                alt="Conecte seu dinheiro à Blockchain" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expansion;
