
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Clínica Médica Saúde Total",
      category: "Site para Clínicas Médicas",
      image: "https://i.imgur.com/aM5LBFL.png",
      description: "Layout moderno com sistema de agendamento integrado e área de especialidades médicas.",
      url: "https://clinica.solidnetwork.com.br/"
    },
    {
      title: "Laboratório ModelLab",
      category: "Site para Laboratório",
      image: "https://i.imgur.com/9qTgGcE.png",
      description: "Design elegante com galeria de serviços, área de exames e integração com WhatsApp.",
      url: "https://labmodel.solidnetwork.com.br/"
    },
    {
      title: "Construções Solid",
      category: "Site para Construção",
      image: "https://i.imgur.com/XcmVYpF.png",
      description: "Interface moderna com portfólio de projetos e sistema completo de orçamentos.",
      url: "https://contrucoes.solidnetwork.com.br/"
    },
    {
      title: "E-commerce VitaStore",
      category: "Desenvolvimento Web + CRM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Desenvolvimento de loja virtual completa com integração ao Type Talk para atendimento via WhatsApp."
    },
    {
      title: "Campanha Digital TechSolutions",
      category: "Tráfego Pago + Marketing Digital",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Estratégia de tráfego pago e marketing digital que resultou em aumento de 150% em leads qualificados."
    },
    {
      title: "Gestão Integrada Lumina",
      category: "Gestão Smart + Automação Comercial",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Implementação de sistema de gestão integrado com automação de processos comerciais."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Nosso Portfólio
              </h1>
              <p className="text-gray-700 md:text-xl mb-8">
                Conheça alguns dos projetos que desenvolvemos e os resultados que alcançamos para nossos clientes
              </p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                    <p className="text-sm text-purple-200 mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 mb-3">{project.description}</p>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-medium text-purple-200 hover:text-white transition-colors"
                      >
                        Visitar site <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Nossos Serviços
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Conheça todas as soluções que oferecemos para impulsionar seu negócio
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link to="/servicos/crm" className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-solidPurple-600">CRM via WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-4">Integre seus canais de comunicação em uma única plataforma</p>
                <Button variant="link" className="p-0 text-solidPurple-600">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/servicos/trafego-pago" className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-solidPurple-600">Tráfego Pago</h3>
                <p className="text-sm text-gray-600 mb-4">Estratégias eficientes para maximizar seu ROI em campanhas digitais</p>
                <Button variant="link" className="p-0 text-solidPurple-600">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/servicos/desenvolvimento-web" className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-solidPurple-600">Desenvolvimento Web</h3>
                <p className="text-sm text-gray-600 mb-4">Sites, e-commerces e sistemas web personalizados para seu negócio</p>
                <Button variant="link" className="p-0 text-solidPurple-600">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/servicos/gestao-midias" className="group p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-solidPurple-600">Gestão de Mídias</h3>
                <p className="text-sm text-gray-600 mb-4">Estratégias de conteúdo e gestão de comunidade para suas redes sociais</p>
                <Button variant="link" className="p-0 text-solidPurple-600">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/servicos/marketing-digital">
                <Button className="bg-solidPurple-600 hover:bg-solidPurple-700">
                  Ver todos os serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-solidPurple-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Vamos trabalhar juntos?
            </h2>
            <p className="md:text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos discutir como podemos ajudar seu negócio a alcançar novos patamares.
            </p>
            <Link to="/contato">
              <Button className="bg-white text-solidPurple-600 hover:bg-gray-100">
                <MessageSquare className="mr-2 h-4 w-4" />
                Falar com um especialista
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
