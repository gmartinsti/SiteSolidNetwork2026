import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Check, ArrowRight, Code, Database, Globe, Phone, Search, Users, MonitorSmartphone, Lock, LayoutGrid } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

interface PlanFeature {
  feature: string;
  essencial: boolean | string | number;
  avancado: boolean | string | number;
  premium: boolean | string | number;
  ultimate: boolean | string | number;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SitesAssinatura = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('recursos');

  const planFeatures: PlanFeature[] = [
    { feature: "Hospedagem Premium", essencial: true, avancado: true, premium: true, ultimate: true },
    { feature: "Páginas Incluídas", essencial: "5", avancado: "10", premium: "15", ultimate: "20+" },
    { feature: "E-mails Profissionais", essencial: "3", avancado: "5", premium: "10", ultimate: "10" },
    { feature: "Integração WhatsApp", essencial: true, avancado: true, premium: true, ultimate: true },
    { feature: "Formulário de Agendamento", essencial: false, avancado: true, premium: true, ultimate: true },
    { feature: "Blog/Notícias", essencial: false, avancado: true, premium: true, ultimate: true },
    { feature: "SEO Básico", essencial: false, avancado: true, premium: false, ultimate: false },
    { feature: "SEO Avançado", essencial: false, avancado: false, premium: true, ultimate: true },
    { feature: "Backup Diário", essencial: false, avancado: false, premium: true, ultimate: true },
    { feature: "CRM Médico Solid", essencial: false, avancado: false, premium: false, ultimate: true },
    { feature: "Integrações Avançadas", essencial: false, avancado: false, premium: false, ultimate: true },
    { feature: "Consultoria de Marketing", essencial: false, avancado: false, premium: false, ultimate: true },
    { feature: "Alterações no Site (mês)", essencial: "1", avancado: "2", premium: "4", ultimate: "6" },
  ];

  const benefits: Benefit[] = [
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Desenvolvimento Especializado",
      description: "Utilizamos as melhores tecnologias para criar sites rápidos, seguros e otimizados para a área da saúde."
    },
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-green-500" />,
      title: "Design Responsivo",
      description: "Todos os nossos sites são perfeitamente adaptados para visualização em qualquer dispositivo."
    },
    {
      icon: <Search className="h-10 w-10 text-orange-500" />,
      title: "SEO Otimizado",
      description: "Estrutura de código e conteúdo pensados para um melhor posicionamento nos mecanismos de busca."
    },
    {
      icon: <Database className="h-10 w-10 text-purple-500" />,
      title: "Infraestrutura Robusta",
      description: "Hospedagem de alto desempenho com 99,9% de uptime garantido para seu site."
    },
    {
      icon: <Users className="h-10 w-10 text-red-500" />,
      title: "Foco no Paciente",
      description: "Interfaces intuitivas que facilitam o contato entre seus pacientes e sua clínica."
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-700" />,
      title: "Segurança Garantida",
      description: "Certificados SSL em todos os sites para proteger os dados dos seus pacientes."
    },
  ];

  const renderSiteExamples = () => {
    switch (activeTab) {
      case 'recursos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-transform hover:transform hover:scale-105">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        );
      case 'exemplos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/aM5LBFL.png" 
                  alt="Site de Clínica Médica" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-md">
                  Modelo Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Site para Clínicas Médicas</h3>
                <p className="text-gray-600 mb-4">Layout moderno com sistema de agendamento integrado e área de especialidades médicas.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://clinica.solidnetwork.com.br/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Ver site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/9qTgGcE.png" 
                  alt="Site de Laboratório" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white px-3 py-1 m-2 rounded-md">
                  Modelo Avançado
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Site para Laboratório</h3>
                <p className="text-gray-600 mb-4">Design elegante com galeria de serviços, área de exames e integração com WhatsApp.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://labmodel.solidnetwork.com.br/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Ver site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/XcmVYpF.png"
                  alt="Site de Construções" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-1 m-2 rounded-md">
                  Modelo Ultimate
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Site para Construção</h3>
                <p className="text-gray-600 mb-4">Interface moderna com portfólio de projetos e sistema completo de orçamentos.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://contrucoes.solidnetwork.com.br/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Ver site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/9qTgGcE.png" 
                  alt="Site de Laboratório" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-0 left-0 bg-orange-600 text-white px-3 py-1 m-2 rounded-md">
                  Modelo Essencial
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Site para Consultório</h3>
                <p className="text-gray-600 mb-4">Apresentação profissional com formulários de contato e integração com redes sociais.</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://labmodel.solidnetwork.com.br/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      Ver site
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 'depoimentos':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="text-5xl text-gray-200 absolute top-4 left-4 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6">O site da minha clínica ficou excelente! Superou todas as expectativas e já percebemos um aumento significativo nos agendamentos online. O suporte da equipe é sempre rápido e eficiente.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-blue-600">DP</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Dra. Patricia Santos</h4>
                    <p className="text-sm text-gray-500">Clínica Médica Saúde Total</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="text-5xl text-gray-200 absolute top-4 left-4 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6">Estava procurando uma solução completa para meu consultório quando encontrei os sites por assinatura da Solid. A integração com WhatsApp e o sistema de agendamento simplificou muito o meu dia a dia.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-green-600">RM</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Dr. Ricardo Mendes</h4>
                    <p className="text-sm text-gray-500">Odontologia Estética</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="text-5xl text-gray-200 absolute top-4 left-4 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6">A consultoria de marketing incluída no plano Ultimate foi um diferencial incrível. Os insights e orientações da equipe ajudaram a posicionar minha clínica em destaque na região.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-purple-600">CF</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Dra. Carla Fernandes</h4>
                    <p className="text-sm text-gray-500">Centro Médico Vida</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 relative">
              <div className="text-5xl text-gray-200 absolute top-4 left-4 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-gray-600 italic mb-6">Profissionalismo e agilidade! Meu site ficou pronto em 5 dias e com uma qualidade impressionante. O processo de atualização mensal também é muito eficiente.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-orange-600">AM</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Dr. André Martins</h4>
                    <p className="text-sm text-gray-500">Fisioterapia e Reabilitação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Sites por Assinatura para Área da Saúde
                </h1>
                <p className="text-xl text-white/90">
                  Já imaginou ter um site profissional, moderno e totalmente adaptado à área da saúde, com entrega em até 7 dias e investimento a partir de apenas R$350,00 por mês?
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link to="/agendamento">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      <Calendar className="mr-2 h-4 w-4" />
                      Agendar Demonstração
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                {videoPlaying ? (
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/HtZJTAfvbEc?autoplay=1" 
                    title="Sites por Assinatura para Área da Saúde" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  />
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Sites por Assinatura para Área da Saúde" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <button
                      onClick={() => setVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                      aria-label="Reproduzir vídeo"
                    >
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[10px] border-b-transparent ml-2"></div>
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefícios Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Por que escolher nossos Sites por Assinatura?</h2>
              <p className="mt-4 text-lg text-gray-600">Diferenciais que fazem a Solid Network ser referência em sites para a área da saúde</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-blue-50 p-6 rounded-lg transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-white w-16 h-16 rounded-full shadow-inner flex items-center justify-center mb-4 mx-auto">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Especialistas em Saúde Digital</h3>
                <p className="text-gray-600 text-center">Know-how focado no público da área da saúde, entendendo as necessidades específicas do seu negócio.</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-white w-16 h-16 rounded-full shadow-inner flex items-center justify-center mb-4 mx-auto">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Hospedagem Premium</h3>
                <p className="text-gray-600 text-center">Alta velocidade, segurança e estabilidade com 99,9% de uptime garantido para seu site.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-white w-16 h-16 rounded-full shadow-inner flex items-center justify-center mb-4 mx-auto">
                  <LayoutGrid className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">E-mails Profissionais</h3>
                <p className="text-gray-600 text-center">Domínio próprio para fortalecer sua marca, com e-mails profissionais personalizados.</p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg transition-all hover:shadow-md hover:-translate-y-1">
                <div className="bg-white w-16 h-16 rounded-full shadow-inner flex items-center justify-center mb-4 mx-auto">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Atualizações Constantes</h3>
                <p className="text-gray-600 text-center">Seu site sempre moderno e seguro com atualizações regulares e suporte especializado.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Showcase Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Conheça Nossos Sites</h2>
              <p className="mt-4 text-lg text-gray-600">Sites modernos e profissionais desenvolvidos para a área da saúde</p>
            </div>
            
            <div className="flex border-b border-gray-200 mb-8">
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'recursos' ? 'border-b-2 border-solidPurple-600 text-solidPurple-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('recursos')}
              >
                Recursos
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'exemplos' ? 'border-b-2 border-solidPurple-600 text-solidPurple-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('exemplos')}
              >
                Exemplos de Sites
              </button>
              <button 
                className={`px-6 py-3 font-medium ${activeTab === 'depoimentos' ? 'border-b-2 border-solidPurple-600 text-solidPurple-600' : 'text-gray-500'}`}
                onClick={() => setActiveTab('depoimentos')}
              >
                Depoimentos
              </button>
            </div>
            
            {renderSiteExamples()}
          </div>
        </section>
        
        {/* Planos Section with Improved Design */}
        <section id="planos" className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Planos de Sites por Assinatura</h2>
              <p className="mt-4 text-lg text-gray-600">Escolha o plano ideal para o seu negócio na área da saúde</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Plano Essencial */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold">Essencial</h3>
                  <div className="mt-2 text-3xl font-bold">R$350<span className="text-lg font-normal">/mês</span></div>
                  <p className="mt-2 text-sm text-gray-600">Ideal para profissionais autônomos</p>
                  <div className="mt-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-sm inline-block font-medium">
                    5 páginas incluídas
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Hospedagem segura (99,9% uptime)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>3 contas de e-mail profissional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Site responsivo</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Layout personalizado para saúde</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração com WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Certificado SSL (site seguro)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>1 alteração no site por mês</span>
                  </li>
                </ul>
                <Link to="/agendamento" className="block w-full">
                  <Button className="w-full">Agendar Demonstração</Button>
                </Link>
              </div>
              
              {/* Plano Avançado */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">Popular</div>
                <div className="text-center mb-6">
                  <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold">Avançado</h3>
                  <div className="mt-2 text-3xl font-bold">R$550<span className="text-lg font-normal">/mês</span></div>
                  <p className="mt-2 text-sm text-gray-600">Ideal para clínicas de médio porte</p>
                  <div className="mt-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-sm inline-block font-medium">
                    10 páginas incluídas
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><b>Tudo do Plano Essencial</b></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>5 contas de e-mail profissional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formulário de agendamento online</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração com Google Maps</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Área de depoimentos de pacientes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Página de Blog/Notícias</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO Básico</span>
                  </li>
                </ul>
                <Link to="/agendamento" className="block w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Agendar Demonstração</Button>
                </Link>
              </div>
              
              {/* Plano Premium */}
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <div className="mt-2 text-3xl font-bold">R$750<span className="text-lg font-normal">/mês</span></div>
                  <p className="mt-2 text-sm text-gray-600">Ideal para clínicas maiores</p>
                  <div className="mt-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1 text-sm inline-block font-medium">
                    15 páginas incluídas
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span><b>Tudo do Plano Avançado</b></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>10 contas de e-mail profissional</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração de lembretes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Área de destaques para procedimentos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Backup diário do site e e-mails</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>SEO Avançado</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>4 alterações gratuitas por mês</span>
                  </li>
                </ul>
                <Link to="/agendamento" className="block w-full">
                  <Button className="w-full">Agendar Demonstração</Button>
                </Link>
              </div>
              
              {/* Plano Ultimate */}
              <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg text-white transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
                  <h3 className="text-2xl font-bold">Ultimate</h3>
                  <div className="mt-2 text-3xl font-bold">R$950<span className="text-lg font-normal">/mês</span></div>
                  <p className="mt-2 text-sm text-white/80">Ideal para clínicas e hospitais</p>
                  <div className="mt-2 bg-white/20 text-white rounded-full px-4 py-1 text-sm inline-block font-medium">
                    20+ páginas incluídas
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span><b>Tudo do Plano Premium</b></span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração com CRM Médico Solid</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dashboard de Agendamento Interno</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Integração com ERPs médicos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fluxos de comunicação automática</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>Consultoria trimestral de marketing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                    <span>6 alterações gratuitas por mês</span>
                  </li>
                </ul>
                <Link to="/agendamento" className="block w-full">
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Agendar Demonstração</Button>
                </Link>
              </div>
            </div>
            
            {/* Tabela de comparação de recursos */}
            <div className="mt-16 overflow-x-auto">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left border-b-2 border-gray-200">Recurso</th>
                      <th className="p-4 text-center border-b-2 border-gray-200">Essencial</th>
                      <th className="p-4 text-center border-b-2 border-gray-200">Avançado</th>
                      <th className="p-4 text-center border-b-2 border-gray-200">Premium</th>
                      <th className="p-4 text-center border-b-2 border-gray-200">Ultimate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planFeatures.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="p-4 border-b border-gray-100 font-medium">{item.feature}</td>
                        <td className="p-4 text-center border-b border-gray-100">
                          {typeof item.essencial === "boolean" ? 
                            item.essencial ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-red-500">-</span> : 
                            <span className="font-medium">{item.essencial}</span>}
                        </td>
                        <td className="p-4 text-center border-b border-gray-100">
                          {typeof item.avancado === "boolean" ? 
                            item.avancado ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-red-500">-</span> : 
                            <span className="font-medium">{item.avancado}</span>}
                        </td>
                        <td className="p-4 text-center border-b border-gray-100">
                          {typeof item.premium === "boolean" ? 
                            item.premium ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-red-500">-</span> : 
                            <span className="font-medium">{item.premium}</span>}
                        </td>
                        <td className="p-4 text-center border-b border-gray-100">
                          {typeof item.ultimate === "boolean" ? 
                            item.ultimate ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <span className="text-red-500">-</span> : 
                            <span className="font-medium">{item.ultimate}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Observações */}
            <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-bold mb-4">Observações Finais</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">•</div>
                  <span>Setup inicial (implantação e customização) cobrado separadamente: a partir de R$800,00.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">•</div>
                  <span>Contrato mínimo de 12 meses.</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 mt-0.5">•</div>
                  <span>Integrações especiais podem ter custos adicionais, conforme necessidade do cliente.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-solidPurple-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 mx-auto mb-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h2 className="text-3xl font-bold mb-4">Pronto para ter um site profissional para sua clínica?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Agende uma demonstração gratuita e descubra como nossos sites por assinatura podem transformar a presença digital do seu negócio na área da saúde.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/agendamento">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto shadow-lg font-medium">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Demonstração Gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default SitesAssinatura;
