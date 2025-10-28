import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platform from "@/components/Platform";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Investments from "@/components/Investments";
import Expansion from "@/components/Expansion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Platform />
      <HowItWorks />
      <div id="cartao">
        <Benefits />
      </div>
      <Investments />
      <Expansion />
      <Contact />
      <div id="acesso">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
