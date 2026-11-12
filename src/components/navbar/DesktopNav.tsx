import { Home, Layers, HeartPulse, Users } from 'lucide-react';
import NavLink from './NavLink';
import DropdownMenu from './DropdownMenu';

const baseLink =
  "py-2 px-3 rounded-md text-[13px] font-semibold uppercase tracking-wide text-slate-700 transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solidPurple-400";

const solutionsItems = [
  { to: "/nexciclo", label: "Saúde digital", isHeader: true },
  { to: "/solidflow", label: "SolidFlow" },
  { to: "/api-builder", label: "API Builder" },
  { to: "/zerodox", label: "ZeroDox" },
  { to: "/cloud/dbaas", label: "Cloud", isHeader: true },
  { to: "/cloud/dbaas", label: "DBaaS" },
  { to: "/cloud/infracloud", label: "Gestão InfraCloud" },
  { to: "/cloud/virtual-server", label: "Servidor Virtual" },
  { to: "/servicos/dba/sql-server", label: "DBA", isHeader: true },
  { to: "/servicos/dba/sql-server", label: "SQL Server" },
];

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex lg:items-center lg:gap-0.5" aria-label="Principal">
      <NavLink to="/" className={`${baseLink} hover:bg-solidPurple-50/70 hover:text-solidPurple-800`}>
        <Home className="mr-1.5 h-4 w-4 text-solidPurple-700" />
        Início
      </NavLink>

      <DropdownMenu menuItems={solutionsItems} className={`${baseLink} hover:bg-teal-50/70 hover:text-teal-700`}>
        <Layers className="mr-1.5 h-4 w-4 text-teal-600" />
        Soluções
      </DropdownMenu>

      <NavLink to="/nexciclo" className={`${baseLink} hover:bg-cyan-50/70 hover:text-cyan-800`}>
        <HeartPulse className="mr-1.5 h-4 w-4 text-cyan-600" />
        Saúde Digital
      </NavLink>

      <NavLink to="/nexciclo" className={`${baseLink} hover:bg-indigo-50/70 hover:text-indigo-700`}>
        <Users className="mr-1.5 h-4 w-4 text-indigo-600" />
        Quem Somos
      </NavLink>
    </nav>
  );
};

export default DesktopNav;
