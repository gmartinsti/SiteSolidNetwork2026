
import ServicePageTemplate from '@/components/ServicePageTemplate';

const TrafegoPagoService = () => {
  return (
    <ServicePageTemplate
      title="Tráfego Pago"
      description="Aumente sua visibilidade online e atraia mais clientes qualificados com nossas estratégias personalizadas de tráfego pago para diferentes plataformas."
      imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      features={[
        {
          title: "Google Ads",
          description: "Campanhas otimizadas para o Google Search, Display, Shopping e YouTube, garantindo o melhor ROI para seu investimento."
        },
        {
          title: "Meta Ads",
          description: "Estratégias eficientes para Facebook e Instagram Ads, atingindo seu público-alvo com precisão."
        },
        {
          title: "LinkedIn Ads",
          description: "Campanhas direcionadas para o LinkedIn, perfeitas para negócios B2B e recrutamento."
        },
        {
          title: "Remarketing",
          description: "Estratégias de remarketing para reconquistar visitantes que não converteram na primeira visita."
        },
        {
          title: "Gestão de Orçamento",
          description: "Administração eficiente do seu budget de mídia, maximizando resultados e minimizando custos."
        },
        {
          title: "Relatórios Detalhados",
          description: "Análises completas de performance com métricas relevantes para seu negócio."
        }
      ]}
      benefits={[
        {
          title: "Resultados Rápidos",
          description: "Diferente do SEO, o tráfego pago traz resultados imediatos, permitindo que você comece a receber visitas e conversões logo após o início das campanhas."
        },
        {
          title: "Segmentação Precisa",
          description: "Direcione suas campanhas exatamente para o público que tem maior probabilidade de se interessar pelo seu produto ou serviço."
        },
        {
          title: "Controle Total de Custos",
          description: "Defina exatamente quanto deseja investir em cada campanha, com a flexibilidade de ajustar seu orçamento a qualquer momento."
        },
        {
          title: "Dados Mensuráveis",
          description: "Acompanhe em tempo real o desempenho das suas campanhas e faça ajustes baseados em dados concretos."
        }
      ]}
      backgroundColor="bg-blue-50"
    />
  );
};

export default TrafegoPagoService;
