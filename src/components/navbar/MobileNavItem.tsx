
import { ReactNode, useState } from 'react';
import NavLink from './NavLink';

interface MobileNavItemProps {
  label: string;
  to?: string;
  icon?: ReactNode;
  subItems?: Array<{
    to: string;
    label: string;
  }>;
  onClick?: () => void;
}

const MobileNavItem = ({ label, to, icon, subItems, onClick }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (subItems && subItems.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (to && !subItems) {
    return (
      <NavLink 
        to={to} 
        className="rounded-xl px-3 py-2.5 text-[15px] font-semibold text-[#16122B] hover:bg-white"
        onClick={handleClick}
      >
        <div className="flex items-center">
          {icon && icon}
          {label}
        </div>
      </NavLink>
    );
  }

  return (
    <>
      <button
        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[15px] font-semibold text-[#16122B] w-full hover:bg-white"
        onClick={handleToggle}
      >
        <div className="flex items-center">
          {icon && icon}
          {label}
        </div>
        {subItems && subItems.length > 0 && (
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
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        )}
      </button>

      {isOpen && subItems && (
        <div className="ml-3 flex flex-col gap-0.5 rounded-xl bg-white p-1.5">
          {subItems.map((item, index) => (
            <NavLink 
              key={index}
              to={item.to} 
              className="rounded-lg px-3 py-2 text-sm text-[#16122B]/80 hover:bg-[#F7F6FB] hover:text-[#120C2E]"
              onClick={handleClick}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNavItem;
