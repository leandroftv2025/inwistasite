import { Phone, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: t("contact.phone"),
      description: "Atendimento 24/7",
      action: "Ligar agora",
    },
    {
      icon: MessageCircle,
      title: t("contact.chat"),
      description: "Resposta em minutos",
      action: "Iniciar chat",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      description: "Resposta em 24h",
      action: "Enviar email",
    },
  ];

  return (
    <section id="contato" className="py-20 sm:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary p-4 rounded-full w-fit mx-auto mb-6">
                <method.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{method.title}</h3>
              <p className="text-foreground/70 mb-6">{method.description}</p>
              <Button
                variant="outline"
                className="hover:bg-primary/10 hover:scale-105 transition-all"
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
