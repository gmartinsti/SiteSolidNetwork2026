import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import IntegrationTools from "@/components/IntegrationTools";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X, MessageSquare, ArrowRight, ShieldCheck, Clock, Users } from "lucide-react";

type Cell = boolean | string;

const plans = ["Essential", "Pro", "Plus+", "Advanced"] as const;

const comparison: { label: string; values: Cell[] }[] = [
  { label: "Usuários inclusos", values: ["3", "5", "10", "20"] },
  { label: "Central de atendimento", values: [true, true, true, true] },
  { label: "CRM", values: [true, true, true, true] },
  { label: "Disparo de Mensagem", values: [true, true, true, true] },
  { label: "Distribuição automática", values: [true, true, true, true] },
  { label: "Carteiras de Cliente", values: [true, true, true, true] },
  { label: "Chatbot de Atendimento", values: [true, true, true, true] },
  { label: "Integrações (Webhook + API)", values: ["Limitado", true, true, true] },
  { label: "Versão Mobile", values: [true, true, true, true] },
  { label: "Suporte prioritário", values: [false, true, true, true] },
];

const stats = [
  { icon: Users, value: "+500", label: "Empresas atendidas" },
  { icon: Clock, value: "24/7", label: "Atendimento contínuo" },
  { icon: ShieldCheck, value: "99,9%", label: "Disponibilidade" },
];

const renderCell = (v: Cell, highlight = false) => {
  if (v === true)
    return (
      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${highlight ? "bg-solidPurple-100 text-solidPurple-700" : "bg-emerald-100 text-emerald-700"}`}>
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  if (v === false)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <X className="h-3.5 w-3.5" />
      </span>
    );
  return <span className="text-sm font-medium text-slate-700">{v}</span>;
};

const Planos = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0f0a2e] text-white">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 15% 10%, rgba(124,58,237,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 90% 90%, rgba(93,138,247,0.30) 0%, transparent 60%)",
            }}
          />
          <div className="container relative px-4 md:px-6 py-20 md:py-24">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-solidPurple-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-solidGreen-DEFAULT" />
                Planos & Preços
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Escolha o plano ideal para{" "}
                <span className="bg-gradient-to-r from-solidPurple-300 via-white to-solidBlue-light bg-clip-text text-transparent">
                  o seu negócio
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                Soluções flexíveis e escaláveis para transformar a comunicação
                com seus clientes, do time enxuto à operação corporativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link to="/contato">
                  <Button
                    size="lg"
                    className="bg-white text-[#0f0a2e] hover:bg-slate-100 shadow-lg shadow-solidPurple-900/40"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Falar com especialista
                  </Button>
                </Link>
                <a href="#comparativo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    Comparar planos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="container px-4 md:px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4 justify-center md:justify-start">
                  <div className="h-12 w-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Icon className="h-5 w-5 text-solidPurple-700" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0f0a2e]">{value}</div>
                    <div className="text-sm text-slate-600">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PricingSection />

        <IntegrationTools />

        {/* Comparison */}
        <section id="comparativo" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-solidPurple-700 font-semibold">
                Comparativo detalhado
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0f0a2e]">
                O que cada plano oferece
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Compare lado a lado e encontre o plano que melhor se ajusta à
                sua operação.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#0f0a2e] to-[#1a1147] text-white">
                      <th className="py-5 px-6 text-left text-xs uppercase tracking-[0.18em] font-semibold">
                        Funcionalidades
                      </th>
                      {plans.map((p, i) => (
                        <th
                          key={p}
                          className={`py-5 px-6 text-center text-sm font-semibold ${
                            i === 2 ? "bg-white/5" : ""
                          }`}
                        >
                          <div className="flex flex-col items-center gap-1">
                            <span>{p}</span>
                            {i === 2 && (
                              <span className="text-[10px] uppercase tracking-wider bg-solidGreen-DEFAULT text-[#0f0a2e] px-2 py-0.5 rounded-full font-bold">
                                Recomendado
                              </span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, idx) => (
                      <tr
                        key={row.label}
                        className={`border-b border-slate-100 last:border-0 ${
                          idx % 2 === 1 ? "bg-slate-50/60" : ""
                        }`}
                      >
                        <td className="py-4 px-6 text-left font-medium text-[#0f0a2e]">
                          {row.label}
                        </td>
                        {row.values.map((v, i) => (
                          <td
                            key={i}
                            className={`py-4 px-6 text-center ${
                              i === 2 ? "bg-solidPurple-50/40" : ""
                            }`}
                          >
                            {renderCell(v, i === 2)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-[#1a1147] hover:bg-[#0f0a2e] text-white shadow-lg shadow-solidPurple-900/30"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contratar plano
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#0f0a2e] text-white">
          <div
            aria-hidden
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(50% 80% at 50% 0%, rgba(124,58,237,0.35) 0%, transparent 70%), radial-gradient(40% 60% at 100% 100%, rgba(93,138,247,0.25) 0%, transparent 70%)",
            }}
          />
          <div className="container relative px-4 md:px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ainda em dúvida sobre qual plano escolher?
            </h2>
            <p className="md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Nossos especialistas ajudam você a desenhar a solução ideal para o
              tamanho e maturidade da sua operação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-white text-[#0f0a2e] hover:bg-slate-100 shadow-lg"
                >
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

export default Planos;
