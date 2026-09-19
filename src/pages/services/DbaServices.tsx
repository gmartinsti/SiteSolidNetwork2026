import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Database,
  Server,
  Shield,
  Globe,
  MessageSquare,
  Check,
  Activity,
  Clock,
  Zap,
  GitBranch,
  HardDrive,
  Award,
  ArrowRight,
  Cpu,
  LineChart,
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Administração de Banco de Dados',
    description:
      'Gerenciamento completo de bancos SQL Server: instalação, configuração, monitoramento e tuning de performance.',
  },
  {
    icon: Server,
    title: 'Alta Disponibilidade',
    description:
      'Always On, Failover Clusters e Mirroring para garantir continuidade dos sistemas críticos.',
  },
  {
    icon: Shield,
    title: 'Segurança de Dados',
    description:
      'Auditoria de acessos, políticas de segurança, criptografia TDE e proteção de dados sensíveis (LGPD).',
  },
  {
    icon: GitBranch,
    title: 'Migração e Upgrades',
    description:
      'Migração entre versões e para cloud (Azure SQL, AWS RDS) com planejamento e mínimo downtime.',
  },
  {
    icon: Activity,
    title: 'Monitoramento 24x7',
    description:
      'Monitoramento proativo com alertas, dashboards de performance e resposta a incidentes em tempo real.',
  },
  {
    icon: HardDrive,
    title: 'Backup & Disaster Recovery',
    description:
      'Estratégias de backup full/diferencial, retenção, testes de restore e planos completos de DR.',
  },
];

const benefits = [
  'Redução de até 70% no tempo de resposta de queries críticas',
  'SLA de disponibilidade de 99,9% para ambientes corporativos',
  'DBAs certificados Microsoft com mais de 10 anos de experiência',
  'Conformidade com LGPD, ISO 27001 e boas práticas Microsoft',
  'Atendimento sob demanda, mensal ou em regime 24x7',
  'Relatórios mensais de saúde e capacidade do ambiente',
];

const stats = [
  { value: '99,9%', label: 'SLA de disponibilidade' },
  { value: '24x7', label: 'Monitoramento ativo' },
  { value: '+15', label: 'Anos de experiência' },
  { value: '+200', label: 'Bancos administrados' },
];

const process = [
  { step: '01', title: 'Diagnóstico', desc: 'Análise completa do ambiente atual, métricas de performance e gargalos.' },
  { step: '02', title: 'Plano de Ação', desc: 'Plano detalhado de tuning, segurança e alta disponibilidade.' },
  { step: '03', title: 'Implementação', desc: 'Execução do plano com janelas controladas e mínimo impacto.' },
  { step: '04', title: 'Operação Contínua', desc: 'Monitoramento 24x7, ajustes finos e relatórios mensais.' },
];

const DbaServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0f0a2e] text-white">
          {/* decorative gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.35),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.3),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-[size:48px_48px]" />

          <div className="container relative px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6 animate-fadeIn">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs font-medium text-white/85">
                  <Award className="h-3.5 w-3.5 text-solidGreen-light" />
                  DBAs certificados Microsoft
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  DBA{' '}
                  <span className="bg-gradient-to-r from-solidPurple-400 via-white to-solidBlue-light bg-clip-text text-transparent">
                    SQL Server
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-xl">
                  Administração especializada, alta disponibilidade e tuning de performance para
                  ambientes SQL Server corporativos — operados por DBAs sêniores 24x7.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link to="/contato">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-solidPurple-600 to-solidBlue-600 hover:opacity-90 text-white shadow-lg shadow-solidPurple-900/30"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Falar com um especialista
                    </Button>
                  </Link>
                  <a href="#funcionalidades">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      Conhecer o serviço
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 max-w-md">
                  {stats.slice(0, 2).map((s) => (
                    <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 backdrop-blur p-4">
                      <div className="text-2xl font-bold text-white">{s.value}</div>
                      <div className="text-xs text-white/70 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual card */}
              <div className="relative animate-fadeIn">
                <div className="absolute -inset-4 bg-gradient-to-tr from-solidPurple-600/30 to-solidBlue-600/30 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider text-white/50">
                      SQL Server Monitor
                    </span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { icon: Activity, label: 'CPU Médio', value: '23%', tone: 'emerald' },
                      { icon: Cpu, label: 'Memória utilizada', value: '64%', tone: 'blue' },
                      { icon: LineChart, label: 'Queries/seg', value: '1.842', tone: 'purple' },
                      { icon: Clock, label: 'Tempo médio de resposta', value: '12ms', tone: 'emerald' },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-lg bg-white/5 border border-white/5 px-4 py-3"
                      >
                        <div className="flex items-center gap-3 text-white/80 text-sm">
                          <row.icon className="h-4 w-4 text-solidPurple-300" />
                          {row.label}
                        </div>
                        <span className="font-mono text-sm font-semibold text-white">{row.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-white/60">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Todos os serviços operacionais
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="container px-4 md:px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-solidPurple-700 to-solidBlue-600 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="funcionalidades" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-solidPurple-700 bg-solidPurple-50 px-3 py-1 rounded-full mb-3">
                Funcionalidades
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Tudo o que seu SQL Server precisa
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Cobertura completa do ciclo de vida do seu banco de dados — da implantação à operação 24x7.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-solidPurple-200 hover:shadow-xl hover:shadow-solidPurple-100/50 transition-all"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white shadow-md group-hover:scale-110 transition-transform">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS + IMAGE */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-solidPurple-200/60 to-solidBlue-200/60 blur-2xl rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Administração de Banco de Dados SQL Server"
                  className="relative rounded-2xl shadow-xl object-cover aspect-[4/3] w-full"
                />
              </div>

              <div>
                <div className="inline-block text-xs font-semibold uppercase tracking-wider text-solidPurple-700 bg-solidPurple-100 px-3 py-1 rounded-full mb-3">
                  Por que contratar
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  Resultados que impactam o seu negócio
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Mais performance, mais segurança e mais disponibilidade — com governança e suporte de
                  especialistas dedicados.
                </p>

                <ul className="mt-8 space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-solidPurple-700 bg-solidPurple-50 px-3 py-1 rounded-full mb-3">
                Como trabalhamos
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Processo simples, resultado consistente
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <div
                  key={p.step}
                  className="relative rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6"
                >
                  <div className="text-5xl font-bold bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 bg-clip-text text-transparent">
                    {p.step}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  {i < process.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-solidPurple-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#0f0a2e] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.4),transparent_55%),radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.35),transparent_60%)]" />
          <div className="container relative px-4 md:px-6 py-20 text-center">
            <Zap className="h-10 w-10 mx-auto text-solidGreen-light mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Pronto para um SQL Server mais rápido e seguro?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-white/80 md:text-lg">
              Converse com um DBA sênior e receba um diagnóstico gratuito do seu ambiente.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-white text-[#0f0a2e] hover:bg-white/90 shadow-xl"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Falar com um especialista
                </Button>
              </Link>
              <Link to="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  Solicitar diagnóstico gratuito
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

export default DbaServices;
