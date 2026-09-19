import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Server,
  Shield,
  Settings,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Activity,
  Layers,
  Zap,
  TrendingUp,
  Gauge,
  Lock,
  GitBranch,
  DollarSign,
} from 'lucide-react';

const InfraCloud = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Gestão Multi-Cloud',
      description:
        'Gerenciamento unificado de recursos em AWS, Azure, GCP e nuvem privada, com visão única de custos e performance.',
    },
    {
      icon: Activity,
      title: 'Monitoramento 24x7',
      description:
        'Observabilidade completa com alertas em tempo real, dashboards personalizados e atuação preventiva pelo NOC da Solid.',
    },
    {
      icon: Shield,
      title: 'Segurança Avançada',
      description:
        'Proteção contra ameaças, gestão de identidades e acessos, hardening e conformidade com LGPD, ISO 27001 e PCI-DSS.',
    },
    {
      icon: Settings,
      title: 'Automação & IaC',
      description:
        'Deploy, escala, backup e recuperação automatizados com Terraform, Ansible e pipelines CI/CD prontos para produção.',
    },
    {
      icon: DollarSign,
      title: 'FinOps',
      description:
        'Rightsizing contínuo, reservas inteligentes e governança de custos para reduzir o gasto em nuvem sem perder performance.',
    },
    {
      icon: GitBranch,
      title: 'DevOps as a Service',
      description:
        'Pipelines, containers e Kubernetes gerenciados por engenheiros certificados, acelerando entregas e padronizando ambientes.',
    },
  ];

  const benefits = [
    {
      title: 'Redução de Custos',
      description: 'Economia média de 30% nos gastos de nuvem com otimização contínua e rightsizing de recursos.',
    },
    {
      title: 'Alta Disponibilidade',
      description: 'Arquitetura multi-zona e multi-região garantindo resiliência e continuidade do negócio.',
    },
    {
      title: 'Agilidade Operacional',
      description: 'Provisionamento de novos ambientes em minutos através de Infrastructure as Code.',
    },
    {
      title: 'Expertise Certificada',
      description: 'Equipe certificada AWS, Azure e GCP desenhando e operando a melhor arquitetura para o seu caso.',
    },
    {
      title: 'Compliance & Auditoria',
      description: 'Trilhas de auditoria, relatórios e controles prontos para LGPD, ISO 27001, SOC 2 e PCI-DSS.',
    },
    {
      title: 'Suporte Proativo',
      description: 'NOC 24x7 monitorando, agindo e reportando antes que o problema chegue ao seu usuário.',
    },
  ];

  const useCases = [
    { icon: Layers, title: 'Migração para a Nuvem', description: 'Planejamento, lift-and-shift e modernização de cargas legadas com risco controlado.' },
    { icon: Zap, title: 'Ambientes de Alta Carga', description: 'Plataformas web, e-commerce e SaaS com elasticidade automática e CDN global.' },
    { icon: Server, title: 'Hybrid Cloud', description: 'Integração de data centers on-premise com a nuvem pública sob uma gestão única.' },
    { icon: Shield, title: 'Compliance & Dados Sensíveis', description: 'Ambientes regulados com criptografia, segregação e trilha completa.' },
  ];

  const stats = [
    { icon: Gauge, value: '99,99%', label: 'Disponibilidade' },
    { icon: TrendingUp, value: '30%', label: 'Redução de custos' },
    { icon: Activity, value: '24x7', label: 'NOC + Suporte' },
    { icon: Cloud, value: '3+', label: 'Provedores certificados' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
            <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-purple-500 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  <Cloud className="h-4 w-4" />
                  Gestão de Infraestrutura em Nuvem
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                  Sua nuvem,{' '}
                  <span className="bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
                    gerenciada de ponta a ponta
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-xl">
                  A Solid Network projeta, opera e otimiza sua infraestrutura multi-cloud com foco em
                  disponibilidade, segurança e redução de custos.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link to="/contato">
                    <Button size="lg" className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Solicitar consultoria
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-indigo-300" /> AWS · Azure · GCP</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-indigo-300" /> NOC 24x7</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-indigo-300" /> FinOps incluso</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-500/30 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 shadow-2xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-400">solid-cloud · multi-cloud-ops</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-5">
                    {stats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <s.icon className="h-5 w-5 text-indigo-300 mb-2" />
                        <div className="text-2xl font-bold">{s.value}</div>
                        <div className="text-xs text-slate-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Funcionalidades</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Uma plataforma completa de operação cloud
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Tudo o que sua equipe precisa para tirar o máximo da nuvem com previsibilidade de custos e operação.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="lg:sticky lg:top-24">
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Por que escolher</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  Benefícios que aceleram o seu negócio
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Mais do que infraestrutura: uma parceria estratégica para que sua empresa cresça com nuvem
                  confiável, segura e eficiente.
                </p>
                <Link to="/contato" className="inline-block mt-6">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Solicitar proposta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                      <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{b.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Casos de uso</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Feito para qualquer estágio da sua jornada cloud
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((u) => (
                <div key={u.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <u.icon className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{u.title}</h3>
                  <p className="text-sm text-slate-600">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-purple-300 blur-3xl" />
          </div>
          <div className="container relative px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para colocar sua nuvem nas melhores mãos?
            </h2>
            <p className="md:text-xl text-indigo-100 mb-8">
              Fale com um especialista da Solid Network e descubra como a Gestão InfraCloud pode reduzir custos
              e elevar a disponibilidade do seu ambiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Falar com especialista
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

export default InfraCloud;
