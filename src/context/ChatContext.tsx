
import React, { createContext, useContext, useState, useEffect } from 'react';

type ChatContextType = {
  isChatOpen: boolean;
  toggleChat: () => void;
  closeChat: () => void;
  openChat: () => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get initial state from localStorage if available
  const [isChatOpen, setIsChatOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem('chat-open-state');
    return saved ? JSON.parse(saved) : true; // Default to open
  });

  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('chat-open-state', JSON.stringify(isChatOpen));
  }, [isChatOpen]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);
  const closeChat = () => setIsChatOpen(false);
  const openChat = () => setIsChatOpen(true);

  return (
    <ChatContext.Provider value={{ isChatOpen, toggleChat, closeChat, openChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
