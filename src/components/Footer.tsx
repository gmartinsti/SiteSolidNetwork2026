import { Link } from "react-router-dom";

const company = [
  { to: "/portfolio", label: "Portfólio" },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
];

const services = [
  { to: "/solidflow", label: "SolidFlow" },
  { to: "/api-builder", label: "API Builder" },
  { to: "/cloud/infracloud", label: "InfraCloud" },
  { to: "/solidskye", label: "Backup" },
];

const Footer = () => {
  return (
    <footer className="bg-[#120C2E] text-white">
      <div className="container grid gap-10 px-4 py-14 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link
            to="/"
            className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
          >
            <img
              src="/lovable-uploads/ee2a951f-2e4d-4681-ab6b-be222874c0d0.png"
              alt="Solid Network"
              className="h-12 brightness-0 invert"
            />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            O futuro do seu negócio em boas mãos.
          </p>
        </div>

        <div>
          <h2 className="sn-status text-[11px] tracking-[0.16em] text-[#2EE6A6]">EMPRESA</h2>
          <ul className="mt-4 space-y-2.5">
            {company.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="sn-status text-[11px] tracking-[0.16em] text-[#2EE6A6]">SERVIÇOS</h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="sn-status text-[11px] tracking-[0.16em] text-[#2EE6A6]">CONTATO</h2>
          <ul className="sn-status mt-4 space-y-2.5 text-[12px] text-white/75">
            <li>Belo Horizonte, MG</li>
            <li>
              <a href="tel:+5531983177452" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]">
                (31) 98317-7452
              </a>
            </li>
            <li>
              <a href="mailto:comercial@solidnetwork.com.br" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]">
                comercial@solidnetwork.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="sn-status container px-4 py-5 text-[11px] tracking-wide text-white/40 md:px-6">
          © 2026 Solid Network
        </p>
      </div>
    </footer>
  );
};

export default Footer;
