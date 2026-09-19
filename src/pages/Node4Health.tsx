import { Link } from "react-router-dom";
import { ArrowRight, Database, Globe, Server, FileCode, Activity, ShieldCheck, Workflow, HeartPulse, Cloud, Code2, Boxes, Zap, GitBranch, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const integrations = [
  { icon: Server, label: "ERP's, CRM's, E-commerces" },
  { icon: Globe, label: "APIs e Serviços Web" },
  { icon: Database, label: "Banco de Dados" },
  { icon: Activity, label: "SaaS e Legado" },
  { icon: FileCode, label: "TXT/CSV, XML, JSON" },
  { icon: HeartPulse, label: "Sistemas de Saúde (HL7/FHIR)" },
];

const solutions = [
  {
    title: "Integração ponta a ponta",
    description: "Do levantamento e desenvolvimento até a entrega e sustentação contínua das integrações.",
    icon: Workflow,
  },
  {
    title: "Saúde conectada",
    description: "Interoperabilidade entre prontuários, laboratórios, operadoras e dispositivos médicos.",
    icon: HeartPulse,
  },
  {
    title: "Segurança e conformidade",
    description: "LGPD, HIPAA e boas práticas de governança aplicadas a cada fluxo de dados.",
    icon: ShieldCheck,
  },
  {
    title: "Tecnologia escalável",
    description: "Arquitetura cloud-native, monitoramento 24/7 e SLAs adequados ao seu negócio.",
    icon: Server,
  },
];

const Node4Health = () => {
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
                  Integramos seu negócio de ponta a ponta
                </p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Solução completa <span className="text-cyan-300">de integração</span> para empresas de tecnologia e saúde
                </h1>
                <p className="text-lg text-white/80 max-w-xl">
                  O <strong>SolidFlow</strong> oferece desde o levantamento e desenvolvimento até a entrega e sustentação.
                  Foque no seu negócio enquanto cuidamos das suas integrações.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/contato">
                    <Button className="bg-cyan-400 text-[#06102e] hover:bg-cyan-300 font-semibold px-6 py-6 h-auto rounded-lg shadow-lg shadow-cyan-500/20">
                      Fale com um especialista <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="#solucoes">
                    <Button variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10 px-6 py-6 h-auto rounded-lg">
                      Conheça nossas soluções
                    </Button>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full" />
                <div className="relative grid gap-4">
                  {integrations.map((item, i) => (
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

        {/* SOLUTIONS */}
        <section id="solucoes" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Soluções SolidFlow</h2>
              <p className="mt-4 text-gray-600 text-lg">
                Integramos sistemas críticos da sua operação com confiabilidade e governança.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((s, i) => (
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

        {/* API BUILDER MODULE */}
        <section id="api-builder" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0d2a6b]/15 bg-[#0d2a6b]/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#0d2a6b]">
                  <Boxes className="h-3.5 w-3.5" />
                  Módulo SolidFlow
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-[#0d2a6b] to-cyan-500 bg-clip-text text-transparent">API Builder</span>{" "}
                  — crie, publique e gerencie APIs com governança
                </h2>
                <p className="text-gray-600 text-lg">
                  Modelagem visual, versionamento, autenticação, monitoramento e documentação automática.
                  Disponível em <strong>Cloud gerenciada</strong> pela SolidNetwork ou <strong>On-premise</strong>
                  dentro da sua infraestrutura.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Cloud, title: "Cloud gerenciada", desc: "Escalabilidade automática, SLA e monitoramento 24/7." },
                    { icon: Server, title: "On-premise", desc: "Rodando no seu datacenter, com total soberania de dados." },
                    { icon: Code2, title: "Low-code & Code", desc: "Crie endpoints com modelagem visual ou personalize via código." },
                    { icon: GitBranch, title: "Versionamento", desc: "Publicação controlada, ambientes e rollback seguro." },
                    { icon: Lock, title: "Segurança", desc: "OAuth2, JWT, rate limit e auditoria de chamadas." },
                    { icon: Zap, title: "Performance", desc: "Cache, throttling e baixa latência por design." },
                  ].map((f, i) => (
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
                  <Link to="/contato">
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
                    <span className="ml-3 text-xs text-white/60 font-mono">api-builder · /v1/orders</span>
                  </div>
                  <pre className="text-[13px] leading-relaxed text-cyan-100 font-mono overflow-x-auto">
{`POST /v1/orders
Authorization: Bearer ••••
Content-Type: application/json

{
  "customer_id": "c_8421",
  "items": [
    { "sku": "SKU-001", "qty": 2 }
  ]
}

→ 201 Created  ·  12ms  ·  cached: false`}
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

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#06102e] to-[#0d2a6b] text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para integrar seu negócio?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Converse com um especialista SolidFlow e descubra como simplificar suas integrações.
            </p>
            <Link to="/contato">
              <Button className="bg-cyan-400 text-[#06102e] hover:bg-cyan-300 font-semibold px-8 py-6 h-auto rounded-lg">
                Fale conosco <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Node4Health;
