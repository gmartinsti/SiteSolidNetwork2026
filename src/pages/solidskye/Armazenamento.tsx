import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { HardDrive, Shield, RefreshCw, Zap, BarChart, Cloud, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: HardDrive, title: 'Armazenamento de Objetos', description: 'Armazenamento de objetos altamente escalável compatível com S3 para seus backups e arquivos.' },
  { icon: Shield, title: 'Criptografia de Dados', description: 'Criptografia AES-256 para todos os seus dados, tanto em trânsito quanto em repouso.' },
  { icon: RefreshCw, title: 'Replicação Geográfica', description: 'Seus dados são replicados em múltiplos data centers para garantir disponibilidade máxima.' },
  { icon: Zap, title: 'Alto Desempenho', description: 'Discos SSD e conexões de alta velocidade garantem desempenho excepcional.' },
  { icon: BarChart, title: 'Monitoramento em Tempo Real', description: 'Acompanhe o uso de armazenamento e desempenho com nosso painel de controle intuitivo.' },
  { icon: Cloud, title: 'Escalabilidade', description: 'Aumente ou diminua seu armazenamento conforme necessário, pagando apenas pelo que usar.' },
];

const plans = [
  {
    name: 'Básico',
    subtitle: 'Ideal para pequenas empresas',
    price: 'R$0,15',
    items: ['Até 1TB de armazenamento', 'Criptografia AES-256', 'Replicação em 2 locais'],
    featured: false,
  },
  {
    name: 'Profissional',
    subtitle: 'Para empresas em crescimento',
    price: 'R$0,12',
    items: ['De 1TB a 10TB de armazenamento', 'Criptografia AES-256', 'Replicação em 3 locais', 'Discos SSD de alto desempenho'],
    featured: true,
  },
  {
    name: 'Empresarial',
    subtitle: 'Para grandes corporações',
    price: 'R$0,10',
    items: ['Mais de 10TB de armazenamento', 'Criptografia AES-256', 'Replicação em 5 locais', 'Discos SSD de alto desempenho', 'Relatórios avançados'],
    featured: false,
  },
];

const Armazenamento = () => {
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
                <Cloud className="mr-1.5 h-3 w-3" /> Cloud Storage de alta performance
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Armazenamento{' '}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#5d8af7] bg-clip-text text-transparent">
                  SolidSkye
                </span>
              </h1>
              <p className="mt-5 text-lg text-white/70 md:text-xl">
                Armazenamento em nuvem seguro, escalável e de alto desempenho para seus backups e arquivos importantes.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                    Consultar planos
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                    Falar com especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                Recursos de Armazenamento
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                Infraestrutura de última geração para armazenar seus dados com segurança.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white mb-4 shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
                  <p className="text-slate-600 text-sm">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                Planos de Armazenamento
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                Opções flexíveis para empresas de todos os tamanhos.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? 'bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white shadow-2xl scale-105'
                      : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-950">
                      <Star className="h-3 w-3" /> Mais Popular
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-1 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                  <p className={`mb-4 text-sm ${plan.featured ? 'text-white/80' : 'text-slate-600'}`}>{plan.subtitle}</p>
                  <div className={`text-4xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                    <span className={`text-base font-normal ${plan.featured ? 'text-white/80' : 'text-slate-600'}`}> /GB/mês</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start text-sm">
                        <Check className={`h-4 w-4 mr-2 shrink-0 mt-0.5 ${plan.featured ? 'text-emerald-300' : 'text-emerald-500'}`} />
                        <span className={plan.featured ? 'text-white/90' : 'text-slate-700'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contato">
                    <Button
                      className={`w-full ${
                        plan.featured
                          ? 'bg-white text-solidPurple-700 hover:bg-white/90'
                          : 'bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90'
                      }`}
                    >
                      Contratar
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-slate-600">
                Precisa de um plano personalizado?{' '}
                <Link to="/contato" className="text-solidPurple-600 hover:underline font-medium">
                  Entre em contato conosco
                </Link>
                .
              </p>
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
              Pronto para armazenar seus dados com segurança?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Entre em contato agora mesmo e descubra como o SolidSkye Storage pode ajudar sua empresa.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                Falar com especialista
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Armazenamento;
