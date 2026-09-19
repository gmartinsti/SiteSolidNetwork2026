import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, MessageSquare, Phone, Mail } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sn-header sticky top-0 z-50 w-full">
      <div className="bg-[#120C2E] text-white">
        <div className="container flex h-8 items-center justify-between gap-4 px-4 md:px-6">
          <div className="sn-status flex min-w-0 items-center gap-2.5 text-[11px] leading-none">
            <span className="shrink-0 font-medium tracking-[0.12em] text-white/90">
              Integrações B2B
            </span>
            <span className="hidden h-3 w-px shrink-0 bg-white/15 sm:block" aria-hidden="true" />
            <span className="truncate text-white/55">
              <span className="sm:hidden">desde 2010</span>
              <span className="hidden sm:inline">Saúde e tecnologia · desde 2010</span>
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-4 text-[12px] leading-none">
            <a
              href="tel:+5531983177452"
              className="flex items-center gap-1.5 text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <Phone className="h-3.5 w-3.5" />
              (31) 98317-7452
            </a>
            <span className="hidden h-3 w-px bg-white/15 lg:block" aria-hidden="true" />
            <a
              href="mailto:comercial@solidnetwork.com.br"
              className="hidden items-center gap-1.5 text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 lg:flex"
            >
              <Mail className="h-3.5 w-3.5" />
              comercial@solidnetwork.com.br
            </a>
          </div>
        </div>
      </div>

      <div
        className={`w-full border-b bg-white transition-shadow duration-300 ${
          scrolled ? 'border-solidPurple-100 shadow-[0_8px_24px_-16px_rgba(26,17,71,0.35)]' : 'border-transparent'
        }`}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-solidPurple-700 via-solidBlue-DEFAULT to-teal-400" />
        <div className="container flex h-[72px] items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex min-w-0 items-center gap-6 lg:gap-8">
            <Link
              to="/"
              className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
            >
              <img
                src="/lovable-uploads/ee2a951f-2e4d-4681-ab6b-be222874c0d0.png"
                alt="Solid Network"
                className="h-11 md:h-12"
              />
            </Link>

            <span className="hidden h-8 w-px bg-[#E6E1F2] md:block" aria-hidden="true" />

            <DesktopNav />
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://atendimento.solidnetwork.com.br/portal/pt-br/home"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center rounded-md px-3 py-2 text-sm font-medium text-solidPurple-800 transition-colors hover:bg-solidPurple-50 hover:text-solidPurple-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solidPurple-400 md:inline-flex"
            >
              <User className="mr-2 h-4 w-4" />
              Área do Cliente
            </a>

            <Link
              to="/contato"
              className="hidden items-center justify-center rounded-md bg-[#1a1147] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#241a5e] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solidPurple-400 focus-visible:ring-offset-2 md:inline-flex"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Fale com um especialista
            </Link>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-[#120C2E] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
