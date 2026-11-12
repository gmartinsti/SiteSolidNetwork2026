import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { zerodoxProducts } from "@/data/zerodoxProducts";
import { BRAND_LOCKUP } from "@/lib/brandLogos";

const AUTOPLAY_MS = 7000;

const ZeroDoxSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const product = zerodoxProducts[current];
  const Icon = product.icon;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % zerodoxProducts.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, current]);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? zerodoxProducts.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % zerodoxProducts.length);
  };

  return (
    <section
      id="zerodox"
      className="relative scroll-mt-28 overflow-hidden"
      style={{
        backgroundColor: "#06102e",
        backgroundImage:
          "radial-gradient(ellipse at 15% 20%, rgba(0,210,255,0.22), transparent 50%), radial-gradient(ellipse at 90% 80%, rgba(46,230,166,0.12), transparent 45%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />

      <div className="container relative px-4 py-16 md:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="sn-status text-[11px] tracking-[0.18em] text-cyan-300">
              ZERODOX · EFICIÊNCIA DIGITAL
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Soluções ZeroDox para saúde
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
              Menos é mais, zero é tudo — gestão documental e ciclo da receita com validade jurídica
              no ecossistema {BRAND_LOCKUP}.
            </p>
          </div>
          <Link
            to="/zerodox"
            className="inline-flex items-center text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
          >
            Ver todas as soluções <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-white">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              ZeroDox · Eficiência Digital
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300/90">
                {product.tagline}
              </p>
              <h3 className="mt-1 text-3xl font-bold md:text-5xl">{product.name}</h3>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              {product.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {product.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/zerodox"
                className="inline-flex items-center rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#06102e] transition-colors hover:bg-cyan-300"
              >
                Conhecer ZeroDox <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/nexciclo"
                className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Saúde Digital
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="absolute -inset-6 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden="true" />
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md shadow-2xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-gradient-to-bl from-cyan-400/20 to-transparent" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-[3rem] bg-gradient-to-tr from-teal-400/15 to-transparent" />
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 text-white shadow-lg shadow-cyan-500/20">
                  <Icon className="h-12 w-12" strokeWidth={1.5} />
                </div>
                <p className="mt-6 text-2xl font-bold text-white">{product.name}</p>
                <p className="mt-2 text-sm text-white/65">{product.tagline}</p>
                <div className="mt-8 grid w-full grid-cols-2 gap-2">
                  {product.highlights.slice(0, 4).map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-[#06102e]/40 px-3 py-2.5 text-xs font-medium text-cyan-100"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Slide anterior"
              className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Próximo slide"
              className="rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-wrap justify-end gap-1.5">
            {zerodoxProducts.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Ir para ${item.name}`}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === current ? "w-7 bg-cyan-300" : "w-2.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZeroDoxSlider;
