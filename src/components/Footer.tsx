import { Link } from "react-router-dom";
import { BRAND_LOCKUP, nexcicloLogo, solidnetworkLogo } from "@/lib/brandLogos";
import { siteEmail, siteEmailHref, sitePhones } from "@/lib/contact";

const company = [
  { to: "/nexciclo", label: "Quem Somos" },
  { to: "/nexciclo", label: BRAND_LOCKUP },
  { to: "/blog", label: "Blog" },
  { to: "/contato", label: "Contato" },
];

const services = [
  { to: "/solidflow", label: "SolidFlow" },
  { to: "/api-builder", label: "API Builder" },
  { to: "/cloud/infracloud", label: "InfraCloud" },
  { to: "/nexciclo", label: "Saúde Digital" },
  { to: "/zerodox", label: "ZeroDox" },
];

const Footer = () => {
  return (
    <footer className="bg-[#120C2E] text-white">
      <div className="container grid gap-10 px-4 py-14 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex flex-wrap items-center gap-5">
            <Link
              to="/"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
            >
              <img
                src={solidnetworkLogo("dark")}
                alt={BRAND_LOCKUP}
                className="h-20 w-auto object-contain md:h-28"
              />
            </Link>
            <span className="h-16 w-px bg-white/15 md:h-20" aria-hidden="true" />
            <Link
              to="/nexciclo"
              className="inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
            >
              <img
                src={nexcicloLogo("dark")}
                alt={BRAND_LOCKUP}
                className="h-[4.5rem] w-auto object-contain md:h-24"
              />
            </Link>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            Tecnologia, integração e transformação digital. {BRAND_LOCKUP}.
          </p>
        </div>

        <div>
          <h2 className="sn-status text-[11px] tracking-[0.16em] text-[#2EE6A6]">EMPRESA</h2>
          <ul className="mt-4 space-y-2.5">
            {company.map((item) => (
              <li key={`${item.to}-${item.label}`}>
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
              <li key={`${item.to}-${item.label}`}>
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
            {sitePhones.map((phone) => (
              <li key={phone.tel}>
                <a
                  href={phone.tel}
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
                >
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteEmailHref}
                className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
              >
                {siteEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="sn-status container px-4 py-5 text-[11px] tracking-wide text-white/40 md:px-6">
          © 2026 {BRAND_LOCKUP}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
