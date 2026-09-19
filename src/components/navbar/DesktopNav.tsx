import { HeartPulse, Code, Cloud, Package } from 'lucide-react';
import NavLink from './NavLink';
import DropdownMenu from './DropdownMenu';

const baseLink =
  "py-2 px-3 rounded-md text-[13px] font-semibold uppercase tracking-wide text-slate-700 transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solidPurple-400";

const DesktopNav = () => {
  const cloudItems = [
    { to: "/cloud/dbaas", label: "DBaaS" },
    { to: "/cloud/infracloud", label: "Gestão InfraCloud" },
    { to: "/cloud/virtual-server", label: "Servidor Virtual" }
  ];

  const productsItems = [
    { to: "/cloud", label: "Cloud", isHeader: true },
    { to: "/cloud/dbaas", label: "DBaaS" },
    { to: "/cloud/infracloud", label: "Gestão InfraCloud" },
    { to: "/cloud/virtual-server", label: "Servidor Virtual" },
    { to: "/solidskye", label: "Backup", isHeader: true },
    { to: "/solidskye/solucoes", label: "Soluções de Backup" },
    { to: "/solidskye/armazenamento", label: "Armazenamento" },
    { to: "/solidskye/integracoes", label: "Integrações" },
    { to: "/servicos/dba/sql-server", label: "DBA", isHeader: true },
    { to: "/servicos/dba/sql-server", label: "SQL Server" },
    { to: "/servicos", label: "Serviços", isHeader: true },
    { to: "/solidflow", label: "SolidFlow" },
    { to: "/api-builder", label: "API Builder" },
  ];

  return (
    <nav className="hidden md:flex md:items-center md:gap-0.5" aria-label="Principal">
      <NavLink to="/solidflow" className={`${baseLink} hover:bg-teal-50/70 hover:text-teal-700`}>
        <HeartPulse className="mr-1.5 h-4 w-4 text-teal-600" />
        SolidFlow
      </NavLink>

      <NavLink to="/api-builder" className={`${baseLink} hover:bg-indigo-50/70 hover:text-indigo-700`}>
        <Code className="mr-1.5 h-4 w-4 text-indigo-600" />
        API Builder
      </NavLink>

      <DropdownMenu menuItems={cloudItems} className={`${baseLink} hover:bg-solidPurple-50/70 hover:text-solidPurple-800`}>
        <Cloud className="mr-1.5 h-4 w-4 text-solidBlue-DEFAULT" />
        Cloud
      </DropdownMenu>

      <DropdownMenu menuItems={productsItems} className={`${baseLink} hover:bg-solidPurple-50/70 hover:text-solidPurple-800`}>
        <Package className="mr-1.5 h-4 w-4 text-solidPurple-700" />
        Produtos
      </DropdownMenu>
    </nav>
  );
};

export default DesktopNav;
