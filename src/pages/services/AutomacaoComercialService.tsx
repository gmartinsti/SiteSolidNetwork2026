
import ServicePageTemplate from '@/components/ServicePageTemplate';

const AutomacaoComercialService = () => {
  return (
    <ServicePageTemplate
      title="Automação Comercial"
      description="Automatize processos de vendas e acelere o crescimento do seu negócio com nossas soluções inteligentes de automação comercial."
      imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      features={[
        {
          title: "Automação de Processos de Vendas",
          description: "Automatize etapas do funil de vendas, desde a qualificação de leads até o fechamento e pós-venda."
        },
        {
          title: "Chatbots para Pré-Qualificação",
          description: "Utilize chatbots para qualificar leads e direcionar apenas os potenciais clientes para sua equipe de vendas."
        },
        {
          title: "Sequências de Follow-up",
          description: "Configure sequências automáticas de e-mails e mensagens para nutrir leads e evitar que oportunidades sejam perdidas."
        },
        {
          title: "Gestão de Pipeline",
          description: "Visualize e gerencie todo o pipeline de vendas, com previsões de fechamento e alertas de oportunidades estagnadas."
        },
        {
          title: "Integração com CRM",
          description: "Conecte-se com seu CRM para manter uma visão unificada de clientes e oportunidades."
        },
        {
          title: "Relatórios de Performance",
          description: "Acompanhe métricas de vendas em tempo real, identificando pontos de melhoria no processo comercial."
        }
      ]}
      benefits={[
        {
          title: "Aumento na Taxa de Conversão",
          description: "Melhore suas taxas de conversão com processos mais eficientes e follow-ups consistentes."
        },
        {
          title: "Redução do Ciclo de Vendas",
          description: "Diminua o tempo entre o primeiro contato e o fechamento da venda com processos automatizados."
        },
        {
          title: "Escala nas Operações",
          description: "Expanda suas operações de vendas sem necessariamente aumentar sua equipe na mesma proporção."
        },
        {
          title: "Padronização de Processos",
          description: "Garanta que todos os leads recebam o mesmo tratamento de qualidade, independente do vendedor designado."
        }
      ]}
      backgroundColor="bg-yellow-50"
    />
  );
};

export default AutomacaoComercialService;
