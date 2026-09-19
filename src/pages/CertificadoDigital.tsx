
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Info, Shield, FileText, Monitor, Smartphone, CreditCard, Cloud, Calendar, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { Link } from "react-router-dom";
import PageHeader from "@/components/ui/PageHeader";

interface CertificateType {
  id: string;
  name: string;
  description: string;
}

interface CertificateMedia {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface CertificateValidity {
  id: string;
  months: number;
  label: string;
}

const CertificadoDigital = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [selectedValidity, setSelectedValidity] = useState<string | null>(null);

  const certificateTypes: CertificateType[] = [
    {
      id: 'e-cpf',
      name: 'e-CPF',
      description: 'Para pessoas físicas, o e-CPF é a identidade digital do cidadão.'
    },
    {
      id: 'e-cnpj',
      name: 'e-CNPJ',
      description: 'Para empresas, o e-CNPJ é a identidade digital da pessoa jurídica.'
    },
    {
      id: 'nfe',
      name: 'NF-e',
      description: 'Para emissão de notas fiscais eletrônicas e acesso aos serviços da SEFAZ.'
    }
  ];

  const certificateMedia: CertificateMedia[] = [
    {
      id: 'cloud',
      name: 'Certificado em Nuvem',
      icon: <Cloud className="h-12 w-12 mb-4 text-solidPurple-600" />,
      description: 'Armazenado em ambiente seguro na nuvem, sem a necessidade de dispositivos físicos.'
    },
    {
      id: 'token',
      name: 'Token',
      icon: <Shield className="h-12 w-12 mb-4 text-solidPurple-600" />,
      description: 'Dispositivo portátil semelhante a um pen drive, que permite a mobilidade do certificado.'
    },
    {
      id: 'card',
      name: 'Cartão',
      icon: <CreditCard className="h-12 w-12 mb-4 text-solidPurple-600" />,
      description: 'Smart card que requer uma leitora para ser utilizado em computadores.'
    }
  ];

  const certificateValidities: CertificateValidity[] = [
    {
      id: '12',
      months: 12,
      label: '1 ano'
    },
    {
      id: '24',
      months: 24,
      label: '2 anos'
    },
    {
      id: '36',
      months: 36,
      label: '3 anos'
    }
  ];

  const handleTypeClick = (id: string) => {
    setSelectedType(id);
  };

  const handleMediaClick = (id: string) => {
    setSelectedMedia(id);
  };

  const handleValidityClick = (id: string) => {
    setSelectedValidity(id);
  };

  const getSelectedInfo = () => {
    if (!selectedType || !selectedMedia || !selectedValidity) return null;
    
    const type = certificateTypes.find(t => t.id === selectedType);
    const media = certificateMedia.find(m => m.id === selectedMedia);
    const validity = certificateValidities.find(v => v.id === selectedValidity);
    
    if (!type || !media || !validity) return null;
    
    return { type, media, validity };
  };

  const selected = getSelectedInfo();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-800 to-solidPurple-800 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <PageHeader
                  title="Certificado Digital AR PULSE CERTIFICAÇÃO DIGITAL"
                  subtitle="Com a certificação digital da AR PULSE, você realiza assinaturas e transações eletrônicas com segurança e validade jurídica."
                  className="text-left items-start !mb-8"
                />
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="white-purple" size="lg">
                    Comprar agora
                  </Button>
                  <Link to="/agendamento">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg">
                      <Calendar className="mr-2 h-5 w-5" /> Agendar Demonstração
                    </Button>
                  </Link>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20" size="lg">
                    <MessageSquare className="mr-2 h-5 w-5" /> Falar com um consultor
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Certificado Digital"
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Certificate Builder Section - IMPROVED LAYOUT */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <PageHeader 
              title="Monte seu Certificado Digital"
              subtitle="Escolha as opções que melhor atendem às suas necessidades"
            />
            
            <div className="rounded-xl shadow-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 md:p-10">
              <div className="space-y-16">
                {/* Step 1: Choose Certificate Type */}
                <div className="transition-all duration-500 hover:transform hover:translate-y-[-5px]">
                  <h3 className="text-xl font-bold mb-8 flex items-center">
                    <span className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md text-lg">1</span>
                    Escolha o tipo de certificado
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {certificateTypes.map((type) => (
                      <div
                        key={type.id}
                        onClick={() => handleTypeClick(type.id)}
                        className={`p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          selectedType === type.id
                            ? "border-2 border-solidPurple-600 bg-gradient-to-br from-solidPurple-50 to-white shadow-lg"
                            : "border border-gray-200 bg-white hover:border-solidPurple-300 hover:shadow-md"
                        }`}
                      >
                        <h4 className="font-bold text-xl mb-4 text-solidPurple-800">{type.name}</h4>
                        <p className="text-gray-700 mb-6">{type.description}</p>
                        {selectedType === type.id && (
                          <div className="mt-4 text-solidPurple-700 flex items-center font-medium animate-fadeIn">
                            <Check className="h-5 w-5 mr-2" /> Selecionado
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Step 2: Choose Media */}
                <div className="transition-all duration-500 hover:transform hover:translate-y-[-5px]">
                  <h3 className="text-xl font-bold mb-8 flex items-center">
                    <span className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md text-lg">2</span>
                    Escolha a mídia
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {certificateMedia.map((media) => (
                      <div
                        key={media.id}
                        onClick={() => handleMediaClick(media.id)}
                        className={`p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          selectedMedia === media.id
                            ? "border-2 border-solidPurple-600 bg-gradient-to-br from-solidPurple-50 to-white shadow-lg"
                            : "border border-gray-200 bg-white hover:border-solidPurple-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-solidPurple-100 p-6 rounded-full mb-6">
                            {media.icon}
                          </div>
                          <h4 className="font-bold text-xl mb-3 text-solidPurple-800">{media.name}</h4>
                          <p className="text-gray-700 mb-4">{media.description}</p>
                          {selectedMedia === media.id && (
                            <div className="mt-4 text-solidPurple-700 flex items-center font-medium animate-fadeIn">
                              <Check className="h-5 w-5 mr-2" /> Selecionado
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Step 3: Choose Validity */}
                <div className="transition-all duration-500 hover:transform hover:translate-y-[-5px]">
                  <h3 className="text-xl font-bold mb-8 flex items-center">
                    <span className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-800 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 shadow-md text-lg">3</span>
                    Escolha a validade
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {certificateValidities.map((validity) => (
                      <div
                        key={validity.id}
                        onClick={() => handleValidityClick(validity.id)}
                        className={`p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          selectedValidity === validity.id
                            ? "border-2 border-solidPurple-600 bg-gradient-to-br from-solidPurple-50 to-white shadow-lg"
                            : "border border-gray-200 bg-white hover:border-solidPurple-300 hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="text-5xl font-bold bg-gradient-to-br from-solidPurple-700 to-blue-600 bg-clip-text text-transparent mb-4">{validity.label}</div>
                          <p className="text-gray-700 mb-4">{validity.months} meses de validade</p>
                          {selectedValidity === validity.id && (
                            <div className="mt-4 text-solidPurple-700 flex items-center font-medium animate-fadeIn">
                              <Check className="h-5 w-5 mr-2" /> Selecionado
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Summary - IMPROVED DESIGN */}
              <div className="mt-16 p-10 bg-white border-2 border-solidPurple-100 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8 text-center text-solidPurple-800">Resumo da sua escolha</h3>
                
                {selected ? (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="p-6 bg-gradient-to-br from-solidPurple-50 to-solidPurple-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                        <div className="font-medium text-gray-600 mb-2">Tipo de certificado</div>
                        <div className="font-bold text-xl text-solidPurple-800">{selected.type.name}</div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-solidPurple-50 to-solidPurple-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                        <div className="font-medium text-gray-600 mb-2">Mídia</div>
                        <div className="font-bold text-xl text-solidPurple-800">{selected.media.name}</div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-solidPurple-50 to-solidPurple-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                        <div className="font-medium text-gray-600 mb-2">Validade</div>
                        <div className="font-bold text-xl text-solidPurple-800">{selected.validity.label}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-5 pt-8">
                      <Button variant="purple" size="lg" className="px-8 py-6 text-base font-semibold">
                        Avançar para a compra
                      </Button>
                      <Link to="/agendamento">
                        <Button variant="outline-purple" size="lg" className="px-8 py-6 text-base font-semibold">
                          <Calendar className="mr-2 h-5 w-5" /> Agendar Demonstração
                        </Button>
                      </Link>
                      <Button variant="outline-purple" size="lg" className="px-8 py-6 text-base font-semibold">
                        <MessageSquare className="mr-2 h-5 w-5" /> Falar com Especialista
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-dashed border-gray-300">
                    <Info className="h-16 w-16 text-solidPurple-300 mx-auto mb-5" />
                    <p className="text-xl text-gray-600">Selecione as opções acima para visualizar o resumo do seu certificado</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-solidPurple-50 to-solidPurple-100">
          <div className="container mx-auto px-4">
            <PageHeader
              title="Por que escolher a AR PULSE CERTIFICAÇÃO DIGITAL?"
              subtitle="Oferecemos soluções completas em certificação digital"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform duration-300 hover:transform hover:scale-105">
                <Shield className="h-14 w-14 text-solidPurple-700 mb-5" />
                <h3 className="text-2xl font-bold mb-4">Segurança garantida</h3>
                <p className="text-gray-700">Nossos certificados digitais seguem rigorosos padrões de segurança, garantindo a proteção e autenticidade das suas informações.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform duration-300 hover:transform hover:scale-105">
                <FileText className="h-14 w-14 text-solidPurple-700 mb-5" />
                <h3 className="text-2xl font-bold mb-4">Validade jurídica</h3>
                <p className="text-gray-700">Documentos assinados com nossos certificados têm validade jurídica, seguindo a legislação brasileira e padrões internacionais.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transition-transform duration-300 hover:transform hover:scale-105">
                <Monitor className="h-14 w-14 text-solidPurple-700 mb-5" />
                <h3 className="text-2xl font-bold mb-4">Suporte especializado</h3>
                <p className="text-gray-700">Equipe de especialistas pronta para auxiliar em todas as etapas, desde a escolha até a instalação e utilização do seu certificado.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <PageHeader
              title="Perguntas Frequentes"
              subtitle="Tire suas dúvidas sobre certificados digitais"
            />
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="p-8 bg-solidPurple-50 rounded-xl border border-solidPurple-100">
                <h3 className="text-xl font-bold mb-3 text-solidPurple-800">O que é um certificado digital?</h3>
                <p className="text-gray-700">O certificado digital é uma identidade eletrônica que garante autenticidade e integridade em transações eletrônicas.</p>
              </div>
              
              <div className="p-8 bg-solidPurple-50 rounded-xl border border-solidPurple-100">
                <h3 className="text-xl font-bold mb-3 text-solidPurple-800">Qual a diferença entre e-CPF e e-CNPJ?</h3>
                <p className="text-gray-700">O e-CPF é destinado para pessoas físicas, enquanto o e-CNPJ é para pessoas jurídicas. Ambos permitem assinar documentos digitalmente e acessar serviços governamentais.</p>
              </div>
              
              <div className="p-8 bg-solidPurple-50 rounded-xl border border-solidPurple-100">
                <h3 className="text-xl font-bold mb-3 text-solidPurple-800">Como funciona o certificado em nuvem?</h3>
                <p className="text-gray-700">O certificado em nuvem é armazenado em um ambiente seguro online, permitindo que você assine documentos e realize transações de qualquer dispositivo com acesso à internet.</p>
              </div>
              
              <div className="p-8 bg-solidPurple-50 rounded-xl border border-solidPurple-100">
                <h3 className="text-xl font-bold mb-3 text-solidPurple-800">Quais documentos preciso para solicitar um certificado?</h3>
                <p className="text-gray-700">Para pessoas físicas, é necessário documento de identificação com foto e CPF. Para pessoas jurídicas, além dos documentos do responsável, são necessários documentos da empresa como CNPJ e contrato social.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-solidPurple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para adquirir seu certificado digital?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              A AR PULSE CERTIFICAÇÃO DIGITAL oferece soluções personalizadas para suas necessidades.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="white-purple" size="lg" className="px-8 py-3 text-base">
                Comprar agora
              </Button>
              <Link to="/agendamento">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 px-8 py-3 text-base">
                  <Calendar className="mr-2 h-5 w-5" /> Agendar Demonstração
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20 px-8 py-3 text-base">
                <MessageSquare className="mr-2 h-5 w-5" /> Falar com um consultor
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default CertificadoDigital;
