
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Globe, ArrowRight, Server, Lock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SolidDNS = () => {
  const features = [
    { 
      title: "DNS Redundante", 
      description: "Infraestrutura global distribuída em data centers em todo o mundo para máxima disponibilidade.",
      icon: Globe
    },
    { 
      title: "Proteção DDoS", 
      description: "Proteção avançada contra ataques DDoS para manter seus domínios sempre online.",
      icon: Shield
    },
    { 
      title: "Alta Performance", 
      description: "Resolução de DNS ultrarrápida com tempos de resposta menores que 30ms.",
      icon: Zap
    },
    { 
      title: "Painel Intuitivo", 
      description: "Interface amigável para gerenciar seus domínios e registros DNS com facilidade.",
      icon: Server
    },
    { 
      title: "DNSSEC", 
      description: "Suporte integrado para DNSSEC, garantindo a autenticidade das respostas DNS.",
      icon: Lock
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "R$0",
      period: "para sempre",
      description: "Ideal para projetos pessoais e pequenos sites",
      features: [
        "1 domínio",
        "50 registros DNS",
        "2 milhões de consultas/mês",
        "Painel de controle básico",
        "Proteção DDoS básica"
      ],
      limitations: [
        "Sem suporte prioritário",
        "Sem API",
        "Sem domínios adicionais"
      ]
    },
    {
      name: "Profissional",
      price: "R$39",
      period: "por mês",
      description: "Perfeito para pequenas e médias empresas",
      features: [
        "10 domínios",
        "500 registros DNS",
        "25 milhões de consultas/mês",
        "Painel de controle avançado",
        "Proteção DDoS avançada",
        "API REST",
        "Suporte prioritário",
        "DNSSEC incluído"
      ],
      limitations: []
    },
    {
      name: "Empresarial",
      price: "R$89",
      period: "por mês",
      description: "Para empresas com múltiplos domínios",
      features: [
        "50 domínios",
        "2.500 registros DNS",
        "100 milhões de consultas/mês",
        "Painel de controle completo",
        "Proteção DDoS premium",
        "API REST completa",
        "Suporte 24/7",
        "DNSSEC incluído",
        "Registros de auditoria",
        "Relatórios de tráfego"
      ],
      limitations: []
    },
    {
      name: "Personalizado",
      price: "Consulte",
      period: "preços especiais",
      description: "Soluções sob medida para grandes empresas",
      features: [
        "Domínios ilimitados",
        "Registros DNS ilimitados",
        "Consultas DNS ilimitadas",
        "Proteção DDoS enterprise",
        "API REST personalizada",
        "Suporte dedicado",
        "SLA garantido",
        "Integração personalizada",
        "Consultoria especializada"
      ],
      limitations: []
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Solid DNS
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-[600px]">
                  Sistema de gerenciamento de DNS rápido, seguro e confiável para seus domínios
                </p>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 mt-4">
                  <Button className="bg-white text-emerald-700 hover:bg-gray-100">
                    Comece Grátis
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Solid DNS"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Por que escolher o Solid DNS?
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                Nossa solução oferece uma experiência completa para gerenciamento de DNS, combinando velocidade, segurança e facilidade de uso.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 bg-gray-50" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Planos e Preços
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
                Escolha o plano ideal para suas necessidades
              </p>
            </div>
            
            <Tabs defaultValue="monthly" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
                <TabsTrigger value="monthly">Mensal</TabsTrigger>
                <TabsTrigger value="yearly">Anual (20% off)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="monthly" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {plans.map((plan, index) => (
                    <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md border ${index === 2 ? "border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50" : "border-gray-200"}`}>
                      <div className={`p-6 ${index === 2 ? "bg-emerald-50" : ""}`}>
                        <h3 className="text-lg font-bold">{plan.name}</h3>
                        <div className="mt-4 flex items-baseline">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="ml-1 text-gray-500">{plan.period}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                      </div>
                      
                      <div className="p-6 border-t border-gray-200 space-y-4">
                        <ul className="space-y-3">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                          
                          {plan.limitations.map((limitation, i) => (
                            <li key={i} className="flex items-start text-gray-400">
                              <svg className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Button className={`w-full ${index === 2 ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gray-800 hover:bg-gray-900"}`}>
                          {index === 3 ? "Fale Conosco" : "Começar Agora"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="yearly" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {plans.map((plan, index) => {
                    // Apply 20% discount for yearly plans
                    const yearlyPrice = plan.price === "R$0" || plan.price === "Consulte" 
                      ? plan.price 
                      : `R$${Math.round(parseInt(plan.price.replace('R$', '')) * 0.8 * 12)}`;
                    
                    return (
                      <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md border ${index === 2 ? "border-emerald-500 ring-2 ring-emerald-500 ring-opacity-50" : "border-gray-200"}`}>
                        <div className={`p-6 ${index === 2 ? "bg-emerald-50" : ""}`}>
                          <h3 className="text-lg font-bold">{plan.name}</h3>
                          <div className="mt-4 flex items-baseline">
                            <span className="text-3xl font-bold">{yearlyPrice}</span>
                            <span className="ml-1 text-gray-500">por ano</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
                        </div>
                        
                        <div className="p-6 border-t border-gray-200 space-y-4">
                          <ul className="space-y-3">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                            
                            {plan.limitations.map((limitation, i) => (
                              <li key={i} className="flex items-start text-gray-400">
                                <svg className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>{limitation}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <Button className={`w-full ${index === 2 ? "bg-emerald-600 hover:bg-emerald-700" : "bg-gray-800 hover:bg-gray-900"}`}>
                            {index === 3 ? "Fale Conosco" : "Começar Agora"}
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Pronto para ter o melhor DNS para seu negócio?
            </h2>
            <p className="md:text-xl mb-8 max-w-2xl mx-auto">
              Comece a usar o Solid DNS hoje mesmo e garanta mais velocidade e segurança para seus domínios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100">
                Criar Conta Grátis
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-emerald-700">
                Falar com Consultor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolidDNS;
