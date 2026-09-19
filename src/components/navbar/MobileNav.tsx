import { HeartPulse, Code, Cloud, Package, User, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileNavItem from './MobileNavItem';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  if (!isOpen) return null;

  const cloudItems = [
    { to: "/cloud/dbaas", label: "DBaaS" },
    { to: "/cloud/infracloud", label: "Gestão InfraCloud" },
    { to: "/cloud/virtual-server", label: "Servidor Virtual" }
  ];

  const productsItems = [
    { to: "/cloud", label: "Cloud" },
    { to: "/cloud/dbaas", label: "DBaaS" },
    { to: "/cloud/infracloud", label: "Gestão InfraCloud" },
    { to: "/cloud/virtual-server", label: "Servidor Virtual" },
    { to: "/solidskye", label: "Backup" },
    { to: "/solidskye/solucoes", label: "Soluções de Backup" },
    { to: "/solidskye/armazenamento", label: "Armazenamento" },
    { to: "/solidskye/integracoes", label: "Integrações" },
    { to: "/servicos/dba/sql-server", label: "DBA" },
    { to: "/servicos/dba/sql-server", label: "SQL Server" },
    { to: "/servicos", label: "Serviços" },
    { to: "/solidflow", label: "SolidFlow" },
    { to: "/api-builder", label: "API Builder" },
  ];

  return (
    <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-6.75rem)] overflow-y-auto border-t border-[#E6E1F2] bg-[#F7F6FB] px-4 py-4 shadow-[0_24px_40px_-28px_rgba(18,12,46,0.55)] md:hidden">
      <nav className="flex flex-col gap-1" aria-label="Principal">
        <MobileNavItem
          label="SolidFlow"
          to="/solidflow"
          icon={<HeartPulse className="mr-2 h-5 w-5 text-teal-600" />}
          onClick={onClose}
        />
        <MobileNavItem
          label="API Builder"
          to="/api-builder"
          icon={<Code className="mr-2 h-5 w-5 text-indigo-600" />}
          onClick={onClose}
        />
        <MobileNavItem
          label="Cloud"
          icon={<Cloud className="mr-2 h-5 w-5 text-solidBlue-DEFAULT" />}
          subItems={cloudItems}
          onClick={onClose}
        />
        <MobileNavItem
          label="Produtos"
          icon={<Package className="mr-2 h-5 w-5 text-solidPurple-700" />}
          subItems={productsItems}
          onClick={onClose}
        />

        <a
          href="https://atendimento.solidnetwork.com.br/portal/pt-br/home"
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
