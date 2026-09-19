import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Check,
  ArrowRight,
  Inbox,
  Bot,
  GitBranch,
  Users,
  Send,
  Database,
  BarChart3,
  Plug,
  Smartphone,
  Hash,
  Tag,
  Megaphone,
  Star,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Inbox,
    title: "Central de Atendimento Multicanal",
    description:
      "Gerencie conversas de WhatsApp, Instagram e Facebook em uma única interface intuitiva e centralizada.",
    accent: "from-solidPurple-600 to-solidPurple-400",
  },
  {
    icon: Bot,
    title: "Chatbot Inteligente",
    description:
      "Configure fluxos de atendimento automatizados para respostas rápidas e qualificação de leads.",
    accent: "from-solidBlue-dark to-solidBlue-DEFAULT",
  },
  {
    icon: GitBranch,
    title: "Distribuição Automática",
    description:
      "Direcione automaticamente as conversas para os atendentes disponíveis ou departamentos específicos.",
    accent: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Users,
    title: "Carteira de Clientes",
    description:
      "Organize seus contatos em carteiras para facilitar o gerenciamento e acompanhamento.",
    accent: "from-solidPurple-700 to-solidBlue-DEFAULT",
  },
  {
    icon: Send,
    title: "Sequências de Mensagens",
    description:
      "Crie sequências automáticas para nutrir leads e manter relacionamento contínuo com clientes.",
    accent: "from-solidBlue-DEFAULT to-solidPurple-500",
  },
  {
    icon: Database,
    title: "CRM Integrado",
    description:
      "Mantenha um histórico completo de todas as interações com seus clientes em um CRM nativo.",
    accent: "from-solidPurple-500 to-solidPurple-300",
  },
  {
    icon: BarChart3,
    title: "Relatórios Analíticos",
    description:
      "Acompanhe tempo de resposta, taxa de conversão, SLA e satisfação do cliente em tempo real.",
    accent: "from-emerald-500 to-solidBlue-light",
  },
  {
    icon: Plug,
    title: "Integrações via API",
    description:
      "Conecte facilmente ERP, e-commerce e sistemas internos através de nossa API REST documentada.",
    accent: "from-solidPurple-600 to-solidBlue-DEFAULT",
  },
  {
    icon: Smartphone,
    title: "Aplicativo Mobile",
    description:
      "Acesse e gerencie atendimentos de qualquer lugar pelos apps iOS e Android com notificações em tempo real.",
    accent: "from-solidBlue-light to-solidPurple-400",
  },
  {
    icon: Hash,
    title: "Múltiplos Números",
    description:
      "Administre diversos números de WhatsApp em uma única plataforma centralizada e segura.",
    accent: "from-solidPurple-700 to-solidPurple-500",
  },
  {
    icon: Tag,
    title: "Tags e Filtros",
    description:
      "Organize conversas e contatos com tags personalizadas e filtros avançados de busca.",
    accent: "from-emerald-600 to-emerald-400",
  },
  {
    icon: Megaphone,
    title: "Mensagens em Massa",
    description:
      "Envie comunicados importantes para grupos segmentados de clientes com governança e auditoria.",
    accent: "from-solidPurple-600 to-solidBlue-dark",
  },
];

const testimonials = [
  {
    initial: "M",
    name: "Marcos Silva",
    role: "CEO, TechSolutions",
    quote:
      "O Type Talk revolucionou nosso atendimento ao cliente. Reduzimos o tempo de resposta em 70% e aumentamos a conversão em 35%.",
    gradient: "from-solidPurple-600 to-solidPurple-400",
  },
  {
    initial: "C",
    name: "Carla Mendes",
    role: "Diretora Comercial, Lumina",
    quote:
      "A automação nos permitiu escalar o atendimento sem ampliar a equipe. Clientes mais satisfeitos e time mais produtivo.",
    gradient: "from-solidBlue-dark to-solidBlue-DEFAULT",
  },
  {
    initial: "R",
    name: "Rafael Costa",
    role: "Gerente de Marketing, VitaStore",
    quote:
      "A integração entre WhatsApp e nossa loja virtual trouxe um aumento de 40% nas vendas. O suporte da Solid Network foi excepcional.",
    gradient: "from-emerald-600 to-emerald-400",
  },
];

const TypeTalkFeatures = () => {
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
                Funcionalidades
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Tudo o que sua operação precisa em{" "}
                <span className="bg-gradient-to-r from-solidPurple-300 via-white to-solidBlue-light bg-clip-text text-transparent">
                  uma só plataforma
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300">
                Conheça os recursos que tornam o Type Talk a escolha ideal para
                empresas que querem escalar o atendimento digital com governança
                e qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Link to="/contato">
                  <Button
                    size="lg"
                    className="bg-white text-[#0f0a2e] hover:bg-slate-100 shadow-lg shadow-solidPurple-900/40"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Solicitar demonstração
                  </Button>
                </Link>
                <Link to="/type-talk">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    Voltar para visão geral
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.2em] text-solidPurple-700 font-semibold">
                Recursos da plataforma
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0f0a2e]">
                Desenhado para times corporativos de atendimento
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Funcionalidades pensadas para produtividade, automação e
                inteligência de dados em escala.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description, accent }) => (
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
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {description}
                  </p>
                  <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-solidPurple-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[0.2em] text-solidPurple-700 font-semibold">
                Cases de sucesso
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#0f0a2e]">
                O que nossos clientes dizem
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg">
                Empresas que transformaram seu atendimento com o Type Talk.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map(({ initial, name, role, quote, gradient }) => (
                <div
                  key={name}
                  className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <Quote className="absolute top-4 right-4 h-6 w-6 text-solidPurple-100" />
                  <div className="flex items-center mb-4">
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg mr-3 shadow-md`}
                    >
                      {initial}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f0a2e]">{name}</p>
                      <p className="text-xs text-slate-500">{role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    "{quote}"
                  </p>
                </div>
              ))}
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
              Pronto para transformar seu atendimento?
            </h2>
            <p className="md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Fale com nossos especialistas e descubra como o Type Talk pode
              ajudar sua empresa a crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button
                  size="lg"
                  className="bg-white text-[#0f0a2e] hover:bg-slate-100 shadow-lg"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Solicitar demonstração
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

export default TypeTalkFeatures;
