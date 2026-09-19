import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Check,
  ArrowRight,
  Bot,
  BarChart3,
  Plug,
  Headphones,
  Smartphone,
  Users,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: MessageSquare,
    title: "Atendimento Unificado",
    desc: "WhatsApp, Instagram e Facebook em uma única caixa de entrada colaborativa.",
    accent: "from-solidPurple-600 to-solidPurple-400",
  },
  {
    icon: Bot,
    title: "Automação Inteligente",
    desc: "Chatbots e fluxos automatizados que respondem 24/7 e qualificam leads.",
    accent: "from-solidBlue-dark to-solidBlue-DEFAULT",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    desc: "Dashboards de performance, SLA, satisfação e produtividade da equipe.",
    accent: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Plug,
    title: "Integração com APIs",
    desc: "Conecte ERP, CRM, e-commerce e sistemas internos via API REST.",
    accent: "from-solidPurple-700 to-solidBlue-DEFAULT",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    desc: "Equipe técnica brasileira pronta para apoiar implantação e operação.",
    accent: "from-solidBlue-DEFAULT to-solidPurple-500",
  },
  {
    icon: Smartphone,
    title: "Aplicativo Mobile",
    desc: "Atenda de qualquer lugar pelo app iOS e Android com notificações em tempo real.",
    accent: "from-solidPurple-500 to-solidPurple-300",
  },
];

const stats = [
  { icon: Users, value: "+500", label: "Empresas atendidas" },
  { icon: Clock, value: "24/7", label: "Atendimento contínuo" },
  { icon: ShieldCheck, value: "99,9%", label: "Disponibilidade" },
  { icon: Sparkles, value: "+3x", label: "Produtividade da equipe" },
];

const TypeTalk = () => {
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
          <div className="container relative px-4 md:px-6 py-20 md:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-solidPurple-200 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-solidGreen-DEFAULT" />
                  CRM Omnichannel
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  Type Talk:{" "}
                  <span className="bg-gradient-to-r from-solidPurple-300 via-white to-solidBlue-light bg-clip-text text-transparent">
                    CRM via WhatsApp
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-xl">
                  Centralize WhatsApp, Instagram Direct e Facebook Messenger em
                  uma única plataforma corporativa de atendimento, automação e
                  inteligência de dados.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link to="/contato">
                    <Button
                      size="lg"
                      className="bg-white text-[#0f0a2e] hover:bg-slate-100 shadow-lg shadow-solidPurple-900/40"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Falar com um especialista
                    </Button>
                  </Link>
                  <Link to="/type-talk/features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      Ver funcionalidades
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-solidPurple-600/40 via-solidBlue-DEFAULT/30 to-transparent blur-2xl" />
                <div className="relative aspect-video w-full rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/HtZJTAfvbEc?autoplay=0"
                    title="CRM via WhatsApp - TypeTalk"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="container px-4 md:px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-4">
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

        {/* Benefits */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.2em] text-solidPurple-700 font-semibold">
                Por que Type Talk
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0f0a2e]">
                Uma plataforma desenhada para times de atendimento corporativos
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Tudo o que sua operação precisa para escalar conversas com
                governança, dados e qualidade.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, desc, accent }) => (
                <div
                  key={title}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 shadow-md`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#0f0a2e]">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                  <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-solidPurple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature highlight */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-solidPurple-700 font-semibold">
                  Operação centralizada
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0f0a2e]">
                  Mais conversas, menos atrito
                </h2>
                <p className="mt-4 text-slate-600 md:text-lg">
                  Distribua atendimentos automaticamente, padronize respostas e
                  acompanhe cada interação em uma linha do tempo única do
                  cliente.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Distribuição automática por filas e SLAs",
                    "Histórico completo e unificado por cliente",
                    "Templates aprovados e respostas rápidas",
                    "Tags, notas internas e transferência entre agentes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-solidPurple-100 text-solidPurple-700 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-solidPurple-200/60 via-solidBlue-light/40 to-transparent blur-2xl" />
                <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl p-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-solidPurple-600 to-solidBlue-DEFAULT" />
                    <div>
                      <div className="text-sm font-semibold text-[#0f0a2e]">Maria Silva</div>
                      <div className="text-xs text-slate-500">WhatsApp • Online</div>
                    </div>
                    <span className="ml-auto text-[10px] uppercase tracking-wider bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">
                      Em atendimento
                    </span>
                  </div>
                  <div className="space-y-3 py-5">
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2 text-sm text-slate-800">
                      Olá! Gostaria de saber mais sobre o plano corporativo.
                    </div>
                    <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-br from-solidPurple-600 to-solidPurple-700 text-white px-4 py-2 text-sm">
                      Claro, Maria! Posso te enviar uma proposta personalizada agora mesmo.
                    </div>
                    <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-2 text-sm text-slate-800">
                      Perfeito, aguardo!
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                    <div className="flex-1 h-9 rounded-lg bg-slate-50 border border-slate-200 px-3 flex items-center text-xs text-slate-400">
                      Digite sua mensagem...
                    </div>
                    <Button size="sm" className="bg-solidPurple-700 hover:bg-solidPurple-800 text-white">
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>
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
              Transforme seu atendimento hoje mesmo
            </h2>
            <p className="md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como o Type Talk pode
              revolucionar a comunicação com seus clientes.
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

export default TypeTalk;
