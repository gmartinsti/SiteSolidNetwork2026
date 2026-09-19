import { X } from 'lucide-react';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
    <div className="flex items-center gap-3 bg-[#120C2E] px-4 py-3.5">
      <div className="min-w-0 flex-1">
        <p className="sn-status text-[10px] tracking-[0.16em] text-white/55">
          ATENDIMENTO
        </p>
        <h3 className="mt-1 text-[17px] font-semibold leading-none tracking-[-0.03em] text-white">
          SOL
        </h3>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
        aria-label="Fechar conversa"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ChatHeader;
