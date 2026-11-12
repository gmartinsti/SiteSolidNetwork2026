import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartPulse,
  FileText,
  Receipt,
  Sparkles,
  Send,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendWebhook } from "@/utils/webhook";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ZeroDoxProductBanner from "@/components/home/ZeroDoxProductBanner";
import {
  featuredZerodoxProducts,
  zerodoxAdvantages,
  zerodoxPillars,
  zerodoxResults,
} from "@/data/zerodoxProducts";
import { BRAND_LOCKUP } from "@/lib/brandLogos";

const specialties = [
  {
    title: "Jornada do paciente",
    description:
      "Do agendamento ao acompanhamento: digitalize a experiência do paciente com fluidez, adesão e menos atrito operacional.",
    icon: HeartPulse,
  },
  {
    title: "Gestão documental",
    description:
      "Acervos e processos sem papel, com validade jurídica, OCR, indexação e armazenamento seguro em nuvem via ZeroDox.",
    icon: FileText,
  },
  {
    title: "Ciclo da receita",
    description:
      "Recepção, assinaturas, tramitação e envio ao convênio conectados — menos prazo, menos extravio, mais previsibilidade.",
    icon: Receipt,
  },
  {
    title: "Transformação digital e IA",
    description:
      "Modernização da operação de saúde integrada à infraestrutura, integrações e cloud Solid Network | NexCiclo.",
    icon: Sparkles,
  },
];

const NexCiclo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendWebhook(`Contato ${BRAND_LOCKUP}`, formData);
      toast({
        title: "Mensagem enviada",
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(`Erro ao enviar mensagem ${BRAND_LOCKUP}:`, error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <ZeroDoxProductBanner />

        <section className="border-b border-gray-100 bg-gray-50 py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Por que digitalizar com {BRAND_LOCKUP}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                O papel foi um avanço — nas demandas modernas de saúde, virou peso. O formato digital
                devolve agilidade, conformidade e economia.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {zerodoxPillars.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="especialidades" className="scroll-mt-28 bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Especialidades</h2>
              <p className="mt-4 text-lg text-gray-600">
                Capacidade completa em saúde digital — da jornada ao documento, do faturamento à
                transformação.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {specialties.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="sn-status text-[11px] tracking-[0.16em] text-cyan-700">
                VANTAGENS DO FORMATO DIGITAL
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Validade jurídica, segurança e produtividade
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Os mesmos princípios da ZeroDox aplicados à operação de saúde no ecossistema{" "}
                {BRAND_LOCKUP}.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {zerodoxAdvantages.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E6E1F2] bg-[#F7F6FB] p-6"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#120C2E] text-[#2EE6A6]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#16122B]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-center text-xs text-slate-500">
              *Exceto documentos de relevante valor histórico.
            </p>
          </div>
        </section>

        <section id="zerodox" className="scroll-mt-28 bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="sn-status text-[11px] tracking-[0.16em] text-cyan-700">
                CATÁLOGO ZERODOX
              </p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
                Produtos em destaque
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Módulos do PDF ZeroDox Saúde — da conversão médica à assinatura e ao ciclo da receita.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredZerodoxProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      {product.tagline}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {product.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-md bg-cyan-50 px-2 py-0.5 text-[11px] font-medium text-cyan-800"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Link to="/zerodox">
                <Button className="bg-[#06102e] text-white hover:bg-[#0a1a4a]">
                  Ver todas as soluções ZeroDox <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[#06102e] py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Resultados ZeroDox</h2>
              <p className="mt-3 text-white/70">
                Economia, eficiência, segurança e privacidade em escala.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {zerodoxResults.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center backdrop-blur"
                >
                  <p className="text-2xl font-bold text-cyan-300 md:text-3xl">{item.value}</p>
                  <p className="mt-2 text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato-nexciclo" className="scroll-mt-28 bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-5">
              <div className="space-y-4 lg:col-span-2">
                <div
                  className="relative overflow-hidden rounded-2xl p-7 text-white shadow-lg"
                  style={{
                    backgroundColor: "#06102e",
                    backgroundImage:
                      "radial-gradient(circle at 0% 0%, rgba(0,210,255,0.35), transparent 55%)",
                  }}
                >
                  <h3 className="text-xl font-semibold">Solicite um contato</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Conte sobre jornada do paciente, ZeroDox, ciclo da receita ou transformação
                    digital. Nossa equipe apresenta uma projeção alinhada à sua operação.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-white/85">
                    <li>· Especialistas em saúde digital</li>
                    <li>· Produtos ZeroDox no ecossistema {BRAND_LOCKUP}</li>
                    <li>· Retorno comercial ágil</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Formulário de contato
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  Preencha e nossa equipe retorna em breve.
                </p>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Digite seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Digite seu email"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="" disabled>
                        Selecione um assunto
                      </option>
                      <option value="ZeroDox">ZeroDox</option>
                      <option value="Jornada do paciente">Jornada do paciente</option>
                      <option value="Gestão documental">Gestão documental</option>
                      <option value="Ciclo da receita">Ciclo da receita</option>
                      <option value="Transformação digital e IA">Transformação digital e IA</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Conte um pouco sobre seu projeto ou desafio"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#0d2a6b] to-cyan-500 text-white hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Enviar mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default NexCiclo;
