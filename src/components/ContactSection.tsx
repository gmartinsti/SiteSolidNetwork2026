import { Link } from "react-router-dom";

const contacts = [
  { label: "Cidade", value: "Belo Horizonte, MG" },
  { label: "Telefone", value: "(31) 98317-7452", href: "tel:+5531983177452" },
  { label: "E-mail", value: "comercial@solidnetwork.com.br", href: "mailto:comercial@solidnetwork.com.br" },
];

const ContactSection = () => {
  return (
    <section className="border-t border-[#E6E1F2] bg-white">
      <div className="container grid gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="sn-status text-[11px] tracking-[0.16em] text-[#120C2E]/45">CONVERSA</p>
          <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-[-0.03em] text-[#120C2E] md:text-4xl">
            Conte o que precisa integrar.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#16122B]/75">
            Marque uma reunião ou fale direto. Atendemos empresas de saúde e de tecnologia, a partir de Belo Horizonte.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/agendamento"
              className="inline-flex items-center justify-center rounded-full bg-[#120C2E] py-2.5 pl-1.5 pr-5 text-sm font-semibold text-white transition-colors hover:bg-[#1c1544] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
            >
              <span className="mr-2.5 h-5 w-1 rounded-full bg-[#2EE6A6]" aria-hidden="true" />
              Agendar reunião
            </Link>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center rounded-full border border-[#E6E1F2] bg-white px-5 py-2.5 text-sm font-semibold text-[#16122B] transition-colors hover:border-[#120C2E]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
            >
              Fale com um especialista
            </Link>
          </div>
        </div>

        <dl className="divide-y divide-[#E6E1F2] border-y border-[#E6E1F2]">
          {contacts.map((item) => (
            <div key={item.label} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-4">
              <dt className="sn-status text-[11px] tracking-[0.14em] text-[#120C2E]/45">{item.label}</dt>
              <dd className="text-sm font-semibold text-[#16122B]">
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-[#120C2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ContactSection;
