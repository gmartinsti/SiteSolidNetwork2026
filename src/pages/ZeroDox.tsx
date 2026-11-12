import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { zerodoxProducts, zerodoxResults } from "@/data/zerodoxProducts";
import { BRAND_LOCKUP } from "@/lib/brandLogos";

const ZeroDox = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section
          className="relative overflow-hidden text-white"
          style={{
            backgroundColor: "#06102e",
            backgroundImage:
              "radial-gradient(ellipse at 18% 15%, rgba(0,210,255,0.28), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(46,230,166,0.12), transparent 50%)",
          }}
        >
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
          <div className="container relative px-4 py-20 md:px-6 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="sn-status text-[11px] tracking-[0.18em] text-cyan-300">
                ZERODOX · EFICIÊNCIA DIGITAL
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
                Menos é mais,{" "}
                <span className="text-cyan-300">Zero é tudo</span>
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Mesma validade jurídica do impresso, com mais praticidade, segurança e economia.
                Soluções ZeroDox para gestão documental e ciclo da receita no ecossistema{" "}
                {BRAND_LOCKUP}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="#solucoes-zerodox">
                  <Button className="h-auto rounded-lg bg-cyan-400 px-6 py-6 font-semibold text-[#06102e] hover:bg-cyan-300">
                    Ver soluções <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link to="/contato">
                  <Button
                    variant="outline"
                    className="h-auto rounded-lg border-white/40 bg-transparent px-6 py-6 text-white hover:bg-white/10"
                  >
                    Fale com um especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="solucoes-zerodox" className="scroll-mt-28 bg-gray-50 py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Soluções ZeroDox</h2>
              <p className="mt-4 text-lg text-gray-600">
                Módulos para digitalizar processos de saúde com validade jurídica e operação em nuvem.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {zerodoxProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <div
                    key={product.id}
                    className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0d2a6b] to-cyan-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                      {product.tagline}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {product.highlights.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-cyan-50 px-2 py-0.5 text-[11px] font-medium text-cyan-800"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#06102e] py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Resultados</h2>
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

        <section className="bg-white py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#E6E1F2] bg-[#F7F6FB] p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-[#16122B] md:text-3xl">
                ZeroDox no ecossistema {BRAND_LOCKUP}
              </h2>
              <p className="mt-4 text-slate-600">
                Gestão documental e ciclo da receita com {BRAND_LOCKUP}, integrados à infraestrutura
                e às soluções tecnológicas — uma única empresa.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/nexciclo">
                  <Button className="bg-[#06102e] text-white hover:bg-[#0a1a4a]">
                    Conhecer {BRAND_LOCKUP}
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button variant="outline" className="border-[#06102e]/20 text-[#06102e]">
                    Fale com um especialista
                  </Button>
                </Link>
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

export default ZeroDox;
