import { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatForm, { FormData } from './ChatForm';
import { openWhatsAppChat } from '@/utils/chatUtils';
import { Toaster } from '@/components/ui/toaster';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [step, setStep] = useState(0);

  const handleSubmit = (formData: FormData) => {
    try {
      openWhatsAppChat(formData);
      setStep(0);
    } catch (error) {
      console.error('Error opening WhatsApp chat:', error);
    }
  };

  return (
    <div className="sn-chat mb-3 w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#E6E1F2] bg-white shadow-[0_24px_50px_-28px_rgba(18,12,46,0.65)] animate-fade-in">
      <ChatHeader onClose={onClose} />
      <ChatMessages step={step} />
      <div className="border-t border-[#E6E1F2] bg-white px-4 py-3.5">
        <ChatForm onSubmit={handleSubmit} onStart={() => setStep(1)} />
      </div>
      <Toaster />
    </div>
  );
};

export default ChatWindow;
