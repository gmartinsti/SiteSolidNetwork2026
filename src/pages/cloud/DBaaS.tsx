import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Database,
  Shield,
  TrendingUp,
  Cloud,
  Lock,
  Activity,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  HardDrive,
  Clock,
  Gauge,
  Server,
  Zap,
  Layers,
} from 'lucide-react';

const DBaaS = () => {
  const features = [
    {
      icon: Database,
      title: 'Gerenciamento Completo',
      description:
        'Administração total do SQL Server: provisionamento, monitoramento, tuning, backup e manutenção proativa por DBAs certificados Microsoft.',
    },
    {
      icon: Shield,
      title: 'Alta Disponibilidade',
      description:
        'Always On Availability Groups, failover automático e arquitetura redundante com SLA de 99,9% para manter sua operação sempre no ar.',
    },
    {
      icon: TrendingUp,
      title: 'Escalabilidade Elástica',
      description:
        'Aumente CPU, memória e armazenamento sob demanda, com zero downtime e cobrança proporcional ao uso.',
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud',
      description:
        'Implantação em Azure SQL, AWS RDS for SQL Server, ou em nosso data center privado, com portabilidade entre provedores.',
    },
    {
      icon: Lock,
      title: 'Segurança & Compliance',
      description:
        'Criptografia TDE, controle de acesso granular, auditoria nativa e conformidade com LGPD, ISO 27001 e PCI DSS.',
    },
    {
      icon: Activity,
      title: 'Monitoramento 24x7',
      description:
        'NOC ativo, alertas inteligentes e dashboards em tempo real para acompanhar performance e disponibilidade do SQL Server.',
    },
  ];

  const stats = [
    { value: '99,9%', label: 'SLA garantido', icon: Gauge },
    { value: '24x7', label: 'Suporte especializado', icon: Clock },
    { value: '40%', label: 'Redução média de custos', icon: TrendingUp },
    { value: '500+', label: 'SQL Server gerenciados', icon: HardDrive },
  ];

  const benefits = [
    {
      title: 'Redução de até 40% nos custos',
      description: 'Elimine investimentos em hardware e otimize a alocação da sua equipe técnica.',
    },
    {
      title: 'Time-to-market mais rápido',
      description: 'Provisione SQL Server pronto para produção em minutos, não semanas.',
    },
    {
      title: 'Backups automáticos e PITR',
      description: 'Retenção configurável e Point-in-Time Recovery para restaurar dados a qualquer momento.',
    },
    {
      title: 'Tuning contínuo de performance',
      description: 'Nossos especialistas analisam queries, índices e estatísticas para extrair o máximo do SQL Server.',
    },
    {
      title: 'Suporte especializado 24x7',
      description: 'DBAs certificados Microsoft disponíveis a qualquer hora para incidentes críticos.',
    },
    {
      title: 'Migração assistida',
      description: 'Planejamento e execução completa da migração do seu ambiente SQL Server atual sem interrupções.',
    },
  ];

  const useCases = [
    {
      icon: Layers,
      title: 'Aplicações SaaS',
      description: 'Escale sua plataforma com SQL Server sem se preocupar com infraestrutura de dados.',
    },
    {
      icon: Zap,
      title: 'E-commerce',
      description: 'Performance e disponibilidade nos picos de venda e datas sazonais.',
    },
    {
      icon: Server,
      title: 'Sistemas legados',
      description: 'Modernize bancos SQL Server críticos com migração gradual e segura para a nuvem.',
    },
    {
      icon: Activity,
      title: 'Analytics & BI',
      description: 'Infraestrutura otimizada para cargas analíticas e data warehouses com SQL Server.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
            <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  <Database className="h-4 w-4" />
                  SQL Server as a Service
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                  SQL Server{' '}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    gerenciado por especialistas
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-xl">
                  O DBaaS da Solid Network entrega alta disponibilidade, performance e segurança
                  para seu SQL Server, para que seu time foque no que importa: o seu produto.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link to="/contato">
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Falar com especialista
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Sem fidelidade
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Setup em minutos
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Migração gratuita
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 shadow-2xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-400">solid-dbaas · sql-server-prod</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-5">
                    {stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl bg-white/5 border border-white/10 p-4"
                      >
                        <s.icon className="h-5 w-5 text-cyan-400 mb-2" />
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
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Funcionalidades
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Tudo o que você precisa para operar SQL Server em escala
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Um conjunto completo de recursos para garantir performance, segurança e
                disponibilidade do seu SQL Server.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 group-hover:scale-110 transition-transform">
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
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  Por que escolher
                </p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  Benefícios que aceleram o seu negócio
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Mais do que infraestrutura, oferecemos uma parceria estratégica para que sua empresa
                  cresça com SQL Server confiável e disponível.
                </p>
                <Link to="/contato" className="inline-block mt-6">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Solicitar proposta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
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
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                Casos de uso
              </p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Feito para qualquer tipo de aplicação
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((u) => (
                <div
                  key={u.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <u.icon className="h-8 w-8 text-cyan-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{u.title}</h3>
                  <p className="text-sm text-slate-600">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-gradient-to-r from-blue-700 via-blue-800 to-cyan-700 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          </div>
          <div className="container relative px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para deixar seu SQL Server nas melhores mãos?
            </h2>
            <p className="md:text-xl text-blue-100 mb-8">
              Fale agora com um especialista da Solid Network e descubra como o DBaaS para SQL Server pode reduzir
              custos e aumentar a confiabilidade da sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold">
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

export default DBaaS;
