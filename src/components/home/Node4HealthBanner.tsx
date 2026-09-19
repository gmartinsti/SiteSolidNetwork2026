import { useState, useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Globe,
  Server,
  FileCode,
  Activity,
  HeartPulse,
  Cloud,
  Boxes,
  Workflow,
  Shield,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Slide = {
  badge: string;
  titleParts: { text: string; tone: "muted" | "white" | "gradient" }[];
  description: ReactNode;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
  chips: { icon: typeof Server; label: string }[];
};

const slides: Slide[] = [
  {
    badge: "Integramos seu negócio de ponta a ponta",
    titleParts: [
      { text: "Solução completa", tone: "muted" },
      { text: "de integração", tone: "white" },
      { text: "para", tone: "muted" },
      { text: "empresas de tecnologia e saúde", tone: "gradient" },
    ],
    description: (
      <>
        Apresentamos o <strong className="text-white">SolidFlow</strong>. Oferecemos soluções desde o levantamento e
        desenvolvimento até a entrega e sustentação.
        <br />
        <strong className="text-white">Foque no seu negócio enquanto cuidamos das suas integrações.</strong>
      </>
    ),
    primaryCta: { label: "Fale com um especialista", to: "/contato" },
    secondaryCta: { label: "Conheça nossas soluções", to: "/solidflow" },
    chips: [
      { icon: Server, label: "ERP's, CRM's, E-commerces" },
      { icon: Globe, label: "APIs e Serviços Web" },
      { icon: Database, label: "Banco de Dados" },
      { icon: Activity, label: "SaaS e Legado" },
      { icon: FileCode, label: "TXT/CSV, XML, JSON" },
      { icon: HeartPulse, label: "Sistemas de Saúde" },
    ],
  },
  {
    badge: "Crie, publique e gerencie APIs em minutos",
    titleParts: [
      { text: "API Builder", tone: "gradient" },
      { text: "—", tone: "muted" },
      { text: "do design à operação", tone: "white" },
      { text: "em nuvem ou on-premise", tone: "muted" },
    ],
    description: (
      <>
        O <strong className="text-white">API Builder</strong> é o módulo do SolidFlow para{" "}
        <strong className="text-white">modelar, versionar, publicar e monitorar APIs</strong> com governança total.
        <br />
        Use em <strong className="text-white">Cloud gerenciada</strong> pela SolidNetwork ou{" "}
        <strong className="text-white">On-premise</strong> dentro da sua infraestrutura.
      </>
    ),
    primaryCta: { label: "Conhecer o API Builder", to: "/api-builder" },
    secondaryCta: { label: "Falar com especialista", to: "/contato" },
    chips: [
      { icon: Workflow, label: "Design & Versionamento" },
      { icon: Cloud, label: "Cloud gerenciada" },
      { icon: Server, label: "On-premise" },
      { icon: Shield, label: "Segurança & Governança" },
      { icon: Zap, label: "Baixa latência" },
      { icon: Boxes, label: "Integração com ERPs e SaaS" },
    ],
  },
];

const chipSpots = [
  "top-[2%] left-[2%]",
  "top-[16%] right-[0%]",
  "top-[36%] left-[0%]",
  "top-[48%] right-[1%]",
  "top-[68%] left-[6%]",
  "top-[80%] right-[4%]",
];

const Node4HealthBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setCurrent((c) => (c + dir + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden bg-[#0f0a2e] text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 transition-opacity duration-700"
        style={{
          background:
            current === 0
              ? "radial-gradient(55% 60% at 15% 10%, rgba(124,58,237,0.40) 0%, transparent 60%), radial-gradient(50% 55% at 90% 90%, rgba(93,138,247,0.35) 0%, transparent 60%)"
              : "radial-gradient(55% 60% at 85% 15%, rgba(37,99,235,0.40) 0%, transparent 60%), radial-gradient(50% 55% at 10% 85%, rgba(168,85,247,0.35) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="container relative px-4 py-16 md:px-6 md:py-24">
        {slides.map((slide, idx) => (
          <div
            key={slide.badge}
            className={`grid items-center gap-12 transition-opacity duration-700 lg:grid-cols-2 ${
              idx === current
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 px-4 py-16 opacity-0 md:px-6 md:py-24"
            }`}
            aria-hidden={idx !== current}
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                {slide.badge}
              </span>
              <h1 className="text-3xl font-bold leading-[1.08] tracking-tight md:text-[3.15rem]">
                {slide.titleParts.map((part) => (
                  <span
                    key={part.text}
                    className={
                      part.tone === "muted"
                        ? "text-white/65"
                        : part.tone === "white"
                        ? "text-white"
                        : "bg-gradient-to-r from-[#d8b4fe] via-white to-[#7dd3fc] bg-clip-text text-transparent"
                    }
                  >
                    {part.text}{" "}
                  </span>
                ))}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">{slide.description}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to={slide.primaryCta.to}>
                  <Button className="h-auto rounded-full bg-white px-6 py-3.5 font-semibold text-[#0f0a2e] shadow-[0_12px_30px_-12px_rgba(255,255,255,0.7)] hover:bg-slate-100">
                    {slide.primaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to={slide.secondaryCta.to}>
                  <Button
                    variant="outline"
                    className="h-auto rounded-full border-white/25 bg-white/5 px-6 py-3.5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
                  >
                    {slide.secondaryCta.label}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden h-[500px] lg:block">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/35 blur-3xl" />
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-[58%] h-56 w-56 -translate-x-1/2 rounded-full border border-dashed border-white/10" />
              {slide.chips.map((item, i) => (
                <div
                  key={item.label}
                  className={`sn-float absolute ${chipSpots[i]} flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 shadow-[0_16px_40px_-18px_rgba(15,10,46,0.9),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl transition-colors hover:border-white/35 hover:bg-white/[0.14]`}
                  style={{ animationDelay: `${i * 0.45}s` }}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7c3aed] to-[#5d8af7] text-white shadow-[0_0_18px_rgba(125,211,252,0.35)]">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="whitespace-nowrap text-[13px] font-medium text-white/95">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 lg:hidden">
              {slide.chips.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-solidPurple-600 to-solidBlue-600">
                    <item.icon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="relative z-10 mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Slide anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.badge}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  i === current ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Node4HealthBanner;
