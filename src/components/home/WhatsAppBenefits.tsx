
import BenefitsSection from "@/components/BenefitsSection";

const WhatsAppBenefits = () => {
  const benefits = [
    {
      title: "Integração Completa",
      description: "Integre todos os seus canais de comunicação em uma única plataforma",
      link: "/servicos/integracao"
    },
    {
      title: "Automação de Atendimento",
      description: "Automatize suas respostas e economize tempo com atendimento inteligente",
      link: "/servicos/automacao"
    },
    {
      title: "Aumento de Conversão",
      description: "Melhore suas taxas de conversão com um atendimento mais rápido e eficiente",
      link: "/servicos/conversao"
    }
  ];

  return (
    <BenefitsSection 
      title="Benefícios do CRM via WhatsApp"
      subtitle="Descubra como nossa solução pode transformar a forma como sua empresa se comunica com os clientes"
      benefits={benefits}
    />
  );
};

export default WhatsAppBenefits;
