
import ServicePageTemplate from '@/components/ServicePageTemplate';

const GestaoMidiasService = () => {
  return (
    <ServicePageTemplate
      title="Gestão de Mídias Sociais"
      description="Potencialize sua presença nas redes sociais com nossa gestão estratégica, criando conteúdo relevante e engajando seu público-alvo."
      imageSrc="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      features={[
        {
          title: "Planejamento Estratégico",
          description: "Desenvolvimento de estratégias alinhadas aos objetivos do seu negócio e ao comportamento do seu público-alvo."
        },
        {
          title: "Criação de Conteúdo",
          description: "Produção de textos, imagens e vídeos profissionais e alinhados à identidade visual da sua marca."
        },
        {
          title: "Gestão de Comunidade",
          description: "Monitoramento e resposta a comentários e mensagens, criando relacionamento com sua audiência."
        },
        {
          title: "Calendário Editorial",
          description: "Planejamento de conteúdo com antecedência, garantindo consistência e relevância nas publicações."
        },
        {
          title: "Análise de Resultados",
          description: "Monitoramento constante de métricas relevantes para entender o desempenho das suas redes sociais."
        },
        {
          title: "Gestão de Crises",
          description: "Preparação e execução de planos de contenção em caso de crises de imagem nas redes sociais."
        }
      ]}
      benefits={[
        {
          title: "Construção de Autoridade",
          description: "Posicione sua marca como referência no seu segmento através de conteúdo relevante e consistente."
        },
        {
          title: "Aumento de Engajamento",
          description: "Crie uma comunidade engajada ao redor da sua marca, aumentando o alcance orgânico das suas publicações."
        },
        {
          title: "Geração de Leads",
          description: "Transforme seguidores em leads qualificados através de estratégias específicas de conversão."
        },
        {
          title: "Fortalecimento da Marca",
          description: "Reforce o reconhecimento da sua marca e seus valores através de uma presença digital consistente."
        }
      ]}
      backgroundColor="bg-pink-50"
    />
  );
};

export default GestaoMidiasService;
