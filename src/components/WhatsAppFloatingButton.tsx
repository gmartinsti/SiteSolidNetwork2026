
import React, { useEffect } from 'react';
import { useChat } from '@/context/ChatContext';
import ChatWindow from './chat/ChatWindow';
import ChatToggleButton from './chat/ChatToggleButton';

const WhatsAppFloatingButton = () => {
  const { isChatOpen, toggleChat } = useChat();

  useEffect(() => {
    // Clean up external script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[data-companyid="6e3d12de-8827-41e5-9834-1af102bf0537"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isChatOpen && <ChatWindow onClose={toggleChat} />}
      <ChatToggleButton isOpen={isChatOpen} onClick={toggleChat} />
    </div>
  );
};

export default WhatsAppFloatingButton;
