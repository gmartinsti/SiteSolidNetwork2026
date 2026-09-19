import React from 'react';

interface ChatMessagesProps {
  step: number;
}

const BotBubble = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-2.5 max-w-[92%] animate-fadeIn">
    <div className="rounded-2xl rounded-bl-md border border-[#E6E1F2] bg-white px-3.5 py-3">
      <p className="text-[13.5px] leading-relaxed text-[#16122B]">{children}</p>
    </div>
  </div>
);

const ChatMessages = ({ step }: ChatMessagesProps) => {
  return (
    <div className="sn-chat-scroll max-h-64 overflow-y-auto bg-[#EFEBF8] px-4 py-4">
      <BotBubble>
        Olá. Sou a <span className="font-semibold">SOL</span>, da Solid Network. Posso te indicar o produto certo.
      </BotBubble>

      <BotBubble>
        Para começar, preciso do seu nome, e-mail e telefone.
      </BotBubble>

      {step > 0 && (
        <div className="mb-1 flex justify-end animate-fadeIn">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-[#120C2E] px-3.5 py-3">
            <p className="text-[13.5px] leading-relaxed text-white">Pode perguntar.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
