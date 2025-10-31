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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary dark:text-[hsl(var(--turquoise-neon))]">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-foreground dark:text-white max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-[hsl(var(--turquoise-neon))] dark:hover:border-white transition-all duration-300 hover:scale-105 hover:shadow-glow text-center animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary dark:bg-[hsl(var(--turquoise-neon))] p-4 rounded-full w-fit mx-auto mb-6 group-hover:bg-[hsl(var(--turquoise-neon))] dark:group-hover:bg-white transition-all">
                <method.icon className="w-8 h-8 text-white dark:text-primary group-hover:text-white dark:group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground dark:text-white">{method.title}</h3>
              <p className="text-foreground dark:text-white mb-6">{method.description}</p>
              <Button
                variant="outline"
                className="border-primary dark:border-[hsl(var(--turquoise-neon))] text-primary dark:text-[hsl(var(--turquoise-neon))] hover:bg-[hsl(var(--turquoise-neon))] dark:hover:bg-white hover:text-white dark:hover:text-primary hover:border-[hsl(var(--turquoise-neon))] dark:hover:border-white hover:scale-105 transition-all"
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
