
import ServicePageTemplate from '@/components/ServicePageTemplate';

const DesenvolvimentoWebService = () => {
  return (
    <ServicePageTemplate
      title="Desenvolvimento Web"
      description="Criamos soluções web personalizadas, responsivas e otimizadas para conversão, ajudando sua empresa a estabelecer uma presença digital forte e eficiente."
      imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      features={[
        {
          title: "Sites Institucionais",
          description: "Desenvolvimento de sites modernos e responsivos que representam a identidade da sua marca e comunicam sua proposta de valor."
        },
        {
          title: "E-commerce",
          description: "Criação de lojas virtuais completas, com gerenciamento de produtos, integrações de pagamento e logística."
        },
        {
          title: "Landing Pages",
          description: "Páginas otimizadas para conversão, ideais para campanhas específicas e lançamentos de produtos ou serviços."
        },
        {
          title: "Sistemas Web",
          description: "Desenvolvimento de sistemas personalizados para necessidades específicas do seu negócio, como ERPs, CRMs e plataformas de gestão."
        },
        {
          title: "Websites com CMS",
          description: "Sites com sistemas de gerenciamento de conteúdo que permitem atualizações fáceis, sem conhecimento técnico."
        },
        {
          title: "Otimização e Performance",
          description: "Implementação de boas práticas para garantir velocidade de carregamento e boa experiência do usuário."
        }
      ]}
      benefits={[
        {
          title: "Presença Digital Profissional",
          description: "Transmita credibilidade e profissionalismo para seus clientes através de uma presença digital bem estruturada."
        },
        {
          title: "Experiência do Usuário Otimizada",
          description: "Garantimos que seu site seja intuitivo e agradável de navegar, incentivando o engajamento e a conversão."
        },
        {
          title: "SEO-Friendly",
          description: "Desenvolvemos seguindo as melhores práticas de SEO, facilitando o ranqueamento nos motores de busca."
        },
        {
          title: "Escalabilidade",
          description: "Nossas soluções são construídas pensando no crescimento do seu negócio, permitindo expansões e atualizações futuras."
        }
      ]}
      backgroundColor="bg-indigo-50"
    />
  );
};

export default DesenvolvimentoWebService;
