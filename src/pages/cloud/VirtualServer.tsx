import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Server,
  Cloud,
  Settings,
  Shield,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Cpu,
  HardDrive,
  Gauge,
  Zap,
  Activity,
  Layers,
  Globe,
  Lock,
} from 'lucide-react';

const VirtualServer = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Performance Dedicada',
      description:
        'Processadores Intel Xeon / AMD EPYC de última geração e vCPUs dedicadas para cargas críticas sem disputa de recursos.',
    },
    {
      icon: HardDrive,
      title: 'Armazenamento NVMe',
      description:
        'Discos SSD NVMe de alta IOPS, com snapshots automáticos e expansão a quente sem indisponibilidade.',
    },
    {
      icon: Zap,
      title: 'Escala Elástica',
      description:
        'Aumente ou reduza CPU, RAM e disco em minutos — vertical ou horizontalmente — pagando apenas pelo que usar.',
    },
    {
      icon: Shield,
      title: 'Segurança Gerenciada',
      description:
        'Firewall, anti-DDoS de até 10 Gbps, hardening, atualizações e backups automáticos inclusos.',
    },
    {
      icon: Globe,
      title: 'Multi-Cloud & Multi-Região',
      description:
        'Provisionamento em AWS, Azure, GCP ou em nosso data center privado, com replicação geográfica opcional.',
    },
    {
      icon: Settings,
      title: 'Gestão Simplificada',
      description:
        'Painel intuitivo com métricas em tempo real, automação por API e suporte de engenheiros sempre que precisar.',
    },
  ];

  const benefits = [
    {
      title: 'Alta Performance',
      description: 'Servidores otimizados com NVMe, rede 10G e processadores de última geração.',
    },
    {
      title: 'SLA de 99,95%',
      description: 'Disponibilidade garantida em contrato, com redundância de hardware e energia.',
    },
    {
      title: 'Escalabilidade Instantânea',
      description: 'Atenda picos de demanda em minutos, sem necessidade de migração ou downtime.',
    },
    {
      title: 'Backup & Snapshots',
      description: 'Pontos de restauração automáticos e retenção configurável para proteger seus dados.',
    },
    {
      title: 'Segurança em Camadas',
      description: 'Anti-DDoS, firewall, isolamento de rede e monitoramento contínuo de ameaças.',
    },
    {
      title: 'Suporte 24x7',
      description: 'Engenheiros especialistas em infraestrutura disponíveis a qualquer hora, todos os dias.',
    },
  ];

  const useCases = [
    { icon: Globe, title: 'Hospedagem de Aplicações', description: 'Sites, APIs e SaaS com performance consistente e baixa latência.' },
    { icon: Layers, title: 'Ambientes de Dev/Homolog', description: 'Réplicas idênticas de produção para validar releases com segurança.' },
    { icon: Server, title: 'ERPs e Sistemas Críticos', description: 'SAP, TOTVS, Oracle e outros sistemas corporativos com alta disponibilidade.' },
    { icon: Activity, title: 'Bancos de Dados', description: 'Infra dimensionada para alta IOPS, ideal para SQL Server, PostgreSQL e MySQL.' },
  ];

  const stats = [
    { icon: Gauge, value: '99,95%', label: 'SLA de uptime' },
    { icon: Zap, value: '< 5 min', label: 'Provisionamento' },
    { icon: Shield, value: '10 Gbps', label: 'Anti-DDoS incluso' },
    { icon: Activity, value: '24x7', label: 'Suporte especializado' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
            <div className="absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-teal-500 blur-3xl" />
          </div>

          <div className="container relative px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
                  <Server className="h-4 w-4" />
                  Virtual Server as a Service
                </span>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                  Servidores virtuais{' '}
                  <span className="bg-gradient-to-r from-cyan-300 to-teal-400 bg-clip-text text-transparent">
                    rápidos, seguros e elásticos
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-xl">
                  Infraestrutura virtual de alto desempenho da Solid Network com recursos dedicados,
                  escalabilidade instantânea e suporte especializado 24x7.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link to="/contato">
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Solicitar orçamento
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Sem fidelidade</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Setup em minutos</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-400" /> Backup incluso</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-teal-500/30 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-6 shadow-2xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-3 text-xs text-slate-400">solid-cloud · vm-prod-01</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-5">
                    {stats.map((s) => (
                      <div key={s.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
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
              <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">Funcionalidades</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Infraestrutura virtual pronta para produção
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Tudo o que você precisa para rodar aplicações críticas com previsibilidade e segurança.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div key={f.title} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 text-white mb-4 group-hover:scale-110 transition-transform">
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
                <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">Por que escolher</p>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  Performance e confiabilidade para suas aplicações
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Servidores virtuais Solid Network entregam o equilíbrio perfeito entre desempenho, segurança
                  e custo, com suporte de quem entende de infraestrutura.
                </p>
                <Link to="/contato" className="inline-block mt-6">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Solicitar proposta <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/40 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                      <CheckCircle2 className="h-5 w-5 text-cyan-700" />
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
              <p className="text-sm font-semibold text-cyan-700 uppercase tracking-wider">Casos de uso</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                Ideal para qualquer carga de trabalho
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((u) => (
                <div key={u.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <u.icon className="h-8 w-8 text-teal-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{u.title}</h3>
                  <p className="text-sm text-slate-600">{u.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 bg-gradient-to-r from-cyan-700 via-teal-700 to-cyan-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute top-0 left-1/3 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          </div>
          <div className="container relative px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para subir seu servidor virtual?
            </h2>
            <p className="md:text-xl text-cyan-100 mb-8">
              Fale com um especialista da Solid Network e monte a infraestrutura ideal para o seu projeto em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" className="bg-white text-cyan-700 hover:bg-cyan-50 font-semibold">
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

export default VirtualServer;
