import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Database,
  Workflow,
  Shield,
  Zap,
  Plug,
  Cpu,
  GitBranch,
  Boxes,
  Cloud,
  Server,
  Lock,
  Activity,
  FileCode,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: Workflow, label: "Modelagem visual de endpoints" },
  { icon: Database, label: "Conexão com bancos & APIs" },
  { icon: Shield, label: "API Key, JWT e OAuth2" },
  { icon: Zap, label: "Cache, rate limit e throttling" },
  { icon: FileCode, label: "Documentação OpenAPI" },
  { icon: GitBranch, label: "Versionamento e rollback" },
];

const features = [
  {
    title: "Construção Visual",
    description:
      "Crie endpoints REST de forma visual, sem escrever código boilerplate.",
    icon: Workflow,
  },
  {
    title: "Fontes de Dados",
    description:
      "Integre PostgreSQL, MySQL, SQL Server, MongoDB e mais em minutos.",
    icon: Database,
  },
  {
    title: "Segurança Pronta",
    description:
      "API Key, JWT e OAuth2 configuráveis por rota com poucos cliques.",
    icon: Shield,
  },
  {
    title: "Alta Performance",
    description:
      "Cache, rate limit e escalonamento automático no runtime otimizado.",
    icon: Zap,
  },
];

const modules = [
  { icon: Cloud, title: "Cloud gerenciada", desc: "Escalabilidade automática, SLA e monitoramento 24/7." },
  { icon: Server, title: "On-premise", desc: "Rodando no seu datacenter, com total soberania de dados." },
  { icon: Code2, title: "Low-code & Code", desc: "Modelagem visual ou personalize com scripts customizados." },
  { icon: Plug, title: "Integrações", desc: "Webhooks, SolidFlow, TypeTalk e serviços externos." },
  { icon: Lock, title: "Governança", desc: "Auditoria de chamadas, logs e controle de acesso por rota." },
  { icon: Cpu, title: "Transformações", desc: "Adicione lógica em cada etapa do fluxo da requisição." },
];

const ApiBuilder = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#06102e] via-[#0a1a4a] to-[#0d2a6b] text-white">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
          <div className="container relative px-4 md:px-6 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fadeIn">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Construa, publique e gerencie APIs
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-cyan-300">API Builder</span> — APIs robustas em minutos, com governança
                </h1>
                <p className="text-lg text-white/80 max-w-xl">
                  Plataforma low-code para criar APIs REST integradas aos seus dados e serviços,
                  com segurança e performance de nível enterprise.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contato">
                    <Button className="bg-cyan-400 text-[#06102e] hover:bg-cyan-300 font-semibold px-6 py-6 h-auto rounded-lg shadow-lg shadow-cyan-500/20">
                      Fale com um especialista <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#recursos">
                    <Button variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 px-6 py-6 h-auto rounded-lg">
                      Conheça os recursos
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="relative grid gap-4">
                  {capabilities.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-3 w-fit hover:bg-white/10 transition-all"
                      style={{ marginLeft: `${(i % 3) * 40}px` }}
                    >
                      <div className="h-9 w-9 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-300">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tudo o que sua equipe precisa</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Do desenho da rota ao monitoramento em produção — em uma única plataforma.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 flex items-center justify-center text-white mb-4">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULO + PREVIEW */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0d2a6b]/15 bg-[#0d2a6b]/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#0d2a6b]">
                  <Boxes className="h-3.5 w-3.5" />
                  Plataforma API Builder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-[#0d2a6b] to-cyan-500 bg-clip-text text-transparent">Construa e escale</span>{" "}
                  suas integrações em qualquer ambiente
                </h2>
                <p className="text-gray-600 text-lg">
                  Disponível em <strong>Cloud gerenciada</strong> pela SolidNetwork ou <strong>On-premise</strong>
                  dentro da sua infraestrutura, com governança ponta a ponta.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {modules.map((f, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-[#0d2a6b] to-cyan-500 flex items-center justify-center text-white">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{f.title}</h3>
                        <p className="text-sm text-gray-600">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link to="/agendamento">
                    <Button className="bg-[#0d2a6b] text-white hover:bg-[#0a1f52] font-semibold px-6 py-6 h-auto rounded-lg">
                      Solicitar demonstração <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#0d2a6b]/10 to-cyan-400/20 blur-3xl rounded-full" />
                <div className="relative rounded-2xl border border-gray-200 bg-gradient-to-br from-[#06102e] to-[#0d2a6b] p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                    <span className="h-3 w-3 rounded-full bg-green-400/80" />
                    <span className="ml-3 text-xs text-white/60 font-mono">api-builder · /v1/clientes</span>
                  </div>
                  <pre className="text-[13px] leading-relaxed text-cyan-100 font-mono overflow-x-auto">
{`POST /v1/clientes
Authorization: Bearer ••••
Content-Type: application/json

{
  "nome": "Solid Network",
  "email": "contato@solidnetwork.com.br",
  "plano": "enterprise"
}

→ 201 Created  ·  14ms  ·  cached: false`}
                  </pre>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { k: "Endpoints", v: "128" },
                      { k: "Uptime", v: "99.99%" },
                      { k: "p95", v: "18ms" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
                        <div className="text-xs text-white/60">{s.k}</div>
                        <div className="text-lg font-bold text-white">{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PASSOS */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Como funciona</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Três passos para colocar uma nova API no ar.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Database, title: "1. Conecte sua fonte", desc: "Selecione um banco de dados, planilha ou serviço externo como origem dos dados." },
                { icon: Workflow, title: "2. Modele os endpoints", desc: "Defina rotas, parâmetros, validações e respostas em uma interface intuitiva." },
                { icon: Activity, title: "3. Publique e monitore", desc: "Faça deploy em um clique e acompanhe métricas, logs e uso em tempo real." },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 flex items-center justify-center text-white mb-4">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06102e] to-[#0d2a6b] text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para construir sua próxima API?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como o API Builder pode acelerar seus projetos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contato">
                <Button className="bg-cyan-400 text-[#06102e] hover:bg-cyan-300 font-semibold px-8 py-6 h-auto rounded-lg">
                  Fale conosco <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/agendamento">
                <Button variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 px-8 py-6 h-auto rounded-lg">
                  Agendar reunião
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

export default ApiBuilder;
