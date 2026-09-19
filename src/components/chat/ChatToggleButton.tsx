import { X, MessageSquare } from 'lucide-react';

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatToggleButton = ({ isOpen, onClick }: ChatToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#120C2E] text-white shadow-[0_14px_30px_-16px_rgba(18,12,46,0.8)] transition-colors hover:bg-[#1c1544] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
      aria-label={isOpen ? 'Fechar conversa com a SOL' : 'Abrir conversa com a SOL'}
    >
      {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
    </button>
  );
};

export default ChatToggleButton;
