
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Cloud, Shield, Server, Link as LinkIcon, Database, Clock, Lock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolidSkye = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  SolidSkye Backup
                </h1>
                <p className="text-gray-700 md:text-xl">
                  Soluções de backup em nuvem seguras, confiáveis e escaláveis para empresas de todos os tamanhos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link to="/contato">
                    <Button className="bg-solidPurple-600 hover:bg-solidPurple-700">
                      Falar com especialista
                    </Button>
                  </Link>
                  <Link to="/solidskye/solucoes">
                    <Button variant="outline">
                      Explorar soluções
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="SolidSkye Backup"
                  className="mx-auto rounded-lg shadow-xl object-cover aspect-video"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Recursos Avançados
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Nossa solução oferece tudo que você precisa para proteger seus dados
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Backup em Nuvem</h3>
                <p className="text-gray-600">Armazene seus backups em nossa infraestrutura segura na nuvem com replicação redundante.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Criptografia Avançada</h3>
                <p className="text-gray-600">Proteção de dados com criptografia AES-256 em trânsito e em repouso para máxima segurança.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Backup de Servidores</h3>
                <p className="text-gray-600">Suporte para Windows, Linux, macOS, VMware, Hyper-V e muito mais.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Backup de Bancos de Dados</h3>
                <p className="text-gray-600">Proteção para SQL Server, MySQL, PostgreSQL, MongoDB e outros bancos de dados populares.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Retenção Configurável</h3>
                <p className="text-gray-600">Defina políticas de retenção personalizadas para atender às suas necessidades de conformidade.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <LinkIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrações</h3>
                <p className="text-gray-600">Integração com ferramentas populares de monitoramento, PSA e ferramentas de negócios.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Por que escolher o SolidSkye?
              </h2>
              <p className="mt-4 text-gray-600 md:text-lg">
                Confiabilidade, segurança e facilidade de uso em uma única solução
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Segurança de Nível Empresarial</h3>
                  <p className="text-gray-600">Proteja seus dados com criptografia de ponta a ponta, autenticação de dois fatores e mais.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suporte Especializado</h3>
                  <p className="text-gray-600">Nossa equipe está disponível 24/7 para ajudar com qualquer problema ou dúvida.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Infraestrutura Redundante</h3>
                  <p className="text-gray-600">Seus dados são armazenados em múltiplos data centers para garantir disponibilidade máxima.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex gap-4">
                <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Escalabilidade</h3>
                  <p className="text-gray-600">Cresça conforme suas necessidades, pagando apenas pelo armazenamento que utilizar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Pronto para proteger seus dados?
            </h2>
            <p className="md:text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como o SolidSkye pode ajudar na proteção dos dados da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Falar com especialista
                </Button>
              </Link>
              <Link to="/solidskye/solucoes">
                <Button variant="outline" className="border-white text-white hover:bg-blue-700">
                  Ver soluções
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolidSkye;
