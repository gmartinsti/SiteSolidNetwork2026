
import ServicePageTemplate from '@/components/ServicePageTemplate';

const MarketingDigitalService = () => {
  return (
    <ServicePageTemplate
      title="Marketing Digital"
      description="Desenvolva uma estratégia completa de marketing digital para aumentar sua visibilidade online, atrair mais clientes e impulsionar seus resultados de negócio."
      imageSrc="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      features={[
        {
          title: "Estratégia Omnichannel",
          description: "Desenvolvimento de estratégias integradas para diversos canais digitais, criando uma experiência consistente para o cliente."
        },
        {
          title: "SEO (Otimização para Buscadores)",
          description: "Otimização do seu site para melhorar o posicionamento nos resultados de busca orgânica do Google e outros buscadores."
        },
        {
          title: "Marketing de Conteúdo",
          description: "Criação e distribuição de conteúdo relevante para atrair, engajar e converter seu público-alvo."
        },
        {
          title: "Email Marketing",
          description: "Estratégias de comunicação via email para nutrição de leads, relacionamento com clientes e aumento de vendas."
        },
        {
          title: "Inbound Marketing",
          description: "Metodologia completa para atrair, converter, fechar e encantar clientes através de conteúdo relevante."
        },
        {
          title: "Análise de Dados e Performance",
          description: "Monitoramento constante de métricas e indicadores para otimização contínua das estratégias."
        }
      ]}
      benefits={[
        {
          title: "ROI Mensurável",
          description: "Acompanhe o retorno sobre investimento das suas ações de marketing com métricas precisas e em tempo real."
        },
        {
          title: "Alcance Global",
          description: "Expanda o alcance do seu negócio para além das fronteiras físicas, atingindo potenciais clientes em qualquer lugar."
        },
        {
          title: "Personalização da Comunicação",
          description: "Direcione mensagens específicas para diferentes segmentos do seu público, aumentando a relevância e a conversão."
        },
        {
          title: "Adaptabilidade",
          description: "Ajuste rapidamente suas estratégias com base em dados e resultados, maximizando a eficácia das suas campanhas."
        }
      ]}
      backgroundColor="bg-cyan-50"
    />
  );
};

export default MarketingDigitalService;
