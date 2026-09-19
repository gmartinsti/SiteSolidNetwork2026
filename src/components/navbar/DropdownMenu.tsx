
import { Link } from 'react-router-dom';
import { ReactNode, useState } from 'react';

interface DropdownItemProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
  isHeader?: boolean;
}

export const DropdownItem = ({ to, children, onClick, isHeader }: DropdownItemProps) => {
  return (
    <Link
      to={to}
      className={`block rounded-md px-3 py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-solidPurple-400 ${isHeader
        ? 'mt-2 border-l-2 border-solidPurple-600 bg-gray-50 font-semibold text-gray-800 first:mt-0'
        : 'text-gray-700 hover:bg-gray-100 hover:text-solidPurple-600'}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

interface DropdownProps {
  children: ReactNode;
  menuItems: Array<{
    to: string;
    label: string;
    isHeader?: boolean;
    onClick?: () => void;
  }>;
  className?: string;
}

const DropdownMenu = ({ children, menuItems, className = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        className={`flex items-center gap-1 transition-colors ${className}`}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={`absolute left-0 top-full z-50 mt-1 w-64 origin-top-left rounded-md border border-gray-100 bg-white p-2 shadow-lg ring-1 ring-black/5 transition-all duration-200
        ${isOpen ? 'visible scale-100 opacity-100' : 'invisible scale-95 opacity-0'}`}
      >
        <div className="max-h-[75vh] overflow-y-auto py-1">
          {menuItems.map((item, index) => (
            <DropdownItem 
              key={index} 
              to={item.to} 
              isHeader={item.isHeader}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </DropdownItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
