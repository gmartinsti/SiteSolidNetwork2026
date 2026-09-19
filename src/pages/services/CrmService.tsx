
import ServicePageTemplate from '@/components/ServicePageTemplate';

const CrmService = () => {
  return (
    <ServicePageTemplate
      title="CRM via WhatsApp"
      description="Transforme seu atendimento ao cliente com nossa solução de CRM integrada ao WhatsApp. Aumente sua eficiência operacional e melhore a experiência do cliente."
      imageSrc="/lovable-uploads/aeba8867-b7ed-457a-adb3-bef3a854e858.png"
      features={[
        {
          title: "Atendimento Multicanal",
          description: "Unifique todos os seus canais de comunicação em uma única plataforma, facilitando a gestão e aumentando a eficiência."
        },
        {
          title: "Chatbot Inteligente",
          description: "Automatize respostas para perguntas frequentes e direcione clientes para o setor correto através do nosso chatbot personalizado."
        },
        {
          title: "Distribuição Automática",
          description: "Distribua automaticamente os atendimentos entre sua equipe, garantindo que nenhum cliente fique sem resposta."
        },
        {
          title: "Histórico de Conversas",
          description: "Mantenha um histórico completo de todas as interações com seus clientes, proporcionando um atendimento mais personalizado."
        },
        {
          title: "Relatórios Detalhados",
          description: "Acompanhe métricas importantes como tempo de resposta, taxa de resolução e satisfação do cliente."
        },
        {
          title: "Integração com Sistemas",
          description: "Integre facilmente com seu ERP, e-commerce ou outros sistemas já utilizados pela sua empresa."
        }
      ]}
      benefits={[
        {
          title: "Aumento na Satisfação do Cliente",
          description: "Com respostas mais rápidas e precisas, melhore significativamente a experiência do cliente com sua marca."
        },
        {
          title: "Redução de Custos Operacionais",
          description: "Automatize processos repetitivos e aumente a produtividade da sua equipe, reduzindo custos operacionais."
        },
        {
          title: "Insights Valiosos",
          description: "Obtenha dados importantes sobre o comportamento dos seus clientes para tomar decisões mais assertivas."
        },
        {
          title: "Aumento nas Vendas",
          description: "Identifique oportunidades de upsell e cross-sell através das interações com os clientes."
        }
      ]}
      backgroundColor="bg-purple-50"
    />
  );
};

export default CrmService;
