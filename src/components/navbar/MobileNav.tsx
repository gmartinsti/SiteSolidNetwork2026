import { Home, Layers, HeartPulse, Users, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileNavItem from './MobileNavItem';
import HeaderVideoButton from './HeaderVideoButton';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  const solutionsItems = [
    { to: "/solidflow", label: "SolidFlow" },
    { to: "/api-builder", label: "API Builder" },
    { to: "/zerodox", label: "ZeroDox" },
    { to: "/cloud/dbaas", label: "DBaaS" },
    { to: "/cloud/infracloud", label: "Gestão InfraCloud" },
    { to: "/cloud/virtual-server", label: "Servidor Virtual" },
    { to: "/servicos/dba/sql-server", label: "SQL Server" },
  ];

  return (
    <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-6.75rem)] overflow-y-auto border-t border-[#E6E1F2] bg-[#F7F6FB] px-4 py-4 shadow-[0_24px_40px_-28px_rgba(18,12,46,0.55)] lg:hidden">
      <nav className="flex flex-col gap-1" aria-label="Principal">
        <MobileNavItem
          label="Início"
          to="/"
          icon={<Home className="mr-2 h-5 w-5 text-solidPurple-700" />}
          onClick={onClose}
        />
        <MobileNavItem
          label="Soluções"
          icon={<Layers className="mr-2 h-5 w-5 text-teal-600" />}
          subItems={solutionsItems}
          onClick={onClose}
        />
        <MobileNavItem
          label="Saúde Digital"
          to="/nexciclo"
          icon={<HeartPulse className="mr-2 h-5 w-5 text-cyan-600" />}
          onClick={onClose}
        />
        <MobileNavItem
          label="Quem Somos"
          to="/nexciclo"
          icon={<Users className="mr-2 h-5 w-5 text-indigo-600" />}
          onClick={onClose}
        />

        <HeaderVideoButton variant="menu" onActivate={onClose} />

        <a
          href="https://solidup.solidnetwork.com.br/portal/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center justify-center rounded-md border border-solidPurple-200 px-4 py-3 text-sm font-medium text-solidPurple-800"
          onClick={onClose}
        >
          <User className="mr-2 h-4 w-4" />
          Área do Cliente
        </a>

        <Link
          to="/contato"
          className="mt-2 inline-flex items-center justify-center rounded-md bg-[#1a1147] px-4 py-3 text-sm font-semibold text-white"
          onClick={onClose}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Fale com um especialista
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
