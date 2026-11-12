import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zerodoxProducts } from "@/data/zerodoxProducts";

const AUTOPLAY_MS = 8000;

const chipSpots = [
  "top-[2%] left-[2%]",
  "top-[16%] right-[0%]",
  "top-[36%] left-[0%]",
  "top-[48%] right-[1%]",
  "top-[68%] left-[6%]",
  "top-[80%] right-[4%]",
];

const ZeroDoxProductBanner = () => {
  const [current, setCurrent] = useState(0);
  const product = zerodoxProducts[current];
  const Icon = product.icon;

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % zerodoxProducts.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, []);

  const go = (dir: 1 | -1) =>
    setCurrent((c) => (c + dir + zerodoxProducts.length) % zerodoxProducts.length);

  return (
    <section
      id="zerodox-produtos"
      className="relative scroll-mt-28 overflow-hidden bg-[#0f0a2e] text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(55% 60% at 20% 20%, rgba(0,210,255,0.28) 0%, transparent 60%), radial-gradient(50% 55% at 90% 80%, rgba(46,230,166,0.16) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />

      <div className="container relative px-4 py-16 md:px-6 md:py-24">
        <div className="mb-8 flex flex-col gap-2 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="sn-status text-[11px] tracking-[0.18em] text-cyan-300">
              ZERODOX · PRODUTOS
            </p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              Soluções que eliminam o papel da operação
            </h2>
          </div>
          <Link
            to="/zerodox"
            className="inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
          >
            Ver página ZeroDox <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              ZeroDox · {product.tagline}
            </span>
            <h3 className="text-3xl font-bold leading-[1.08] tracking-tight md:text-[3.15rem]">
              <span className="bg-gradient-to-r from-[#d8b4fe] via-white to-[#7dd3fc] bg-clip-text text-transparent">
                {product.name}
              </span>
            </h3>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/zerodox">
                <Button className="h-auto rounded-full bg-white px-6 py-3.5 font-semibold text-[#0f0a2e] shadow-[0_12px_30px_-12px_rgba(255,255,255,0.7)] hover:bg-slate-100">
                  Conhecer ZeroDox <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#contato-nexciclo">
                <Button
                  variant="outline"
                  className="h-auto rounded-full border-white/25 bg-white/5 px-6 py-3.5 text-white backdrop-blur hover:bg-white/10 hover:text-white"
                >
                  Falar com especialista
                </Button>
              </a>
            </div>
          </div>

          <div className="relative hidden h-[420px] lg:block">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-[58%] h-56 w-56 -translate-x-1/2 rounded-full border border-dashed border-white/10" />

            <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 text-white shadow-lg shadow-cyan-500/30">
              <Icon className="h-12 w-12" strokeWidth={1.5} />
            </div>

            {product.highlights.slice(0, 6).map((label, i) => (
              <div
                key={`${product.id}-${label}`}
                className={`sn-float absolute ${chipSpots[i]} flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2.5 shadow-[0_16px_40px_-18px_rgba(15,10,46,0.9),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-xl`}
                style={{ animationDelay: `${i * 0.45}s` }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-teal-400 text-white">
                  <span className="text-[11px] font-bold">{i + 1}</span>
                </div>
                <span className="whitespace-nowrap text-[13px] font-medium text-white/95">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 lg:hidden">
            {product.highlights.map((label) => (
              <div
                key={label}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-md"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Slide anterior"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex max-w-[min(100%,28rem)] flex-wrap justify-center gap-1.5">
            {zerodoxProducts.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir para ${item.name}`}
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
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZeroDoxProductBanner;
