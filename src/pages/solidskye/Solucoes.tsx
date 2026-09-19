import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Server, Cloud, Laptop, Database, FileText, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Server,
    title: 'Backup de Servidores',
    description: 'Proteção completa para servidores físicos e virtuais, garantindo a continuidade do seu negócio.',
    items: ['Windows Server, Linux e macOS', 'Hyper-V, VMware e Virtualbox', 'Backup completo, incremental e diferencial'],
  },
  {
    icon: Database,
    title: 'Backup de Bancos de Dados',
    description: 'Proteção especializada para seus bancos de dados críticos com recuperação pontual.',
    items: ['SQL Server e MySQL', 'PostgreSQL e MongoDB', 'Backup online sem interrupção'],
  },
  {
    icon: Laptop,
    title: 'Backup de Estações',
    description: 'Proteja os dados dos computadores dos seus colaboradores com backup automatizado.',
    items: ['Windows, macOS e Linux', 'Backup automático em segundo plano', 'Auto-recuperação pelo usuário'],
  },
  {
    icon: Cloud,
    title: 'Backup de SaaS',
    description: 'Proteção para seus dados em aplicativos na nuvem como Microsoft 365 e Google Workspace.',
    items: ['Email, OneDrive e SharePoint', 'Google Drive e Gmail', 'Recuperação granular de dados'],
  },
  {
    icon: FileText,
    title: 'Backup de Arquivos',
    description: 'Proteção para seus arquivos importantes com versionamento e fácil recuperação.',
    items: ['Compartilhamentos de rede', 'Versionamento de arquivos', 'Backup de longo prazo'],
  },
  {
    icon: Shield,
    title: 'Disaster Recovery',
    description: 'Soluções de recuperação de desastres para garantir a continuidade do seu negócio.',
    items: ['Recuperação em minutos, não horas', 'Virtualização instantânea', 'Testes automatizados de recuperação'],
  },
];

const Solucoes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{
            backgroundColor: '#0f0a2e',
            backgroundImage:
              'radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(93,138,247,0.30), transparent 60%)',
          }}
        >
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <Shield className="mr-1.5 h-3 w-3" /> Proteção de ponta a ponta
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Soluções de{' '}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#5d8af7] bg-clip-text text-transparent">
                  Backup empresarial
                </span>
              </h1>
              <p className="mt-5 text-lg text-white/70 md:text-xl">
                Proteja seus dados valiosos com nossas soluções completas, projetadas para empresas de todos os tamanhos e setores.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                    Solicitar demonstração
                  </Button>
                </Link>
                <Link to="/planos">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                    Ver planos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                Nossas Soluções
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                Oferecemos soluções completas para proteção de dados em diversos ambientes.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map(({ icon: Icon, title, description, items }) => (
                <div
                  key={title}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white mb-4 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{description}</p>
                  <ul className="space-y-2 mb-6">
                    {items.map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contato">
                    <Button variant="outline" className="w-full border-slate-300 hover:border-solidPurple-500 hover:text-solidPurple-600">
                      Saiba mais
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden py-20"
          style={{
            backgroundColor: '#0f0a2e',
            backgroundImage:
              'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(93,138,247,0.30), transparent 60%)',
          }}
        >
          <div className="container relative px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white mb-4">
              Encontre a solução ideal para o seu negócio
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar você a escolher a melhor estratégia de backup para sua empresa.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                <Zap className="mr-2 h-4 w-4" /> Agendar consultoria gratuita
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solucoes;
