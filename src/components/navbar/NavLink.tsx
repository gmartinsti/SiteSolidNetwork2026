
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({ to, children, className = '', onClick }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
