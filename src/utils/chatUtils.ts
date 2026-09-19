
import { FormData } from "@/components/chat/ChatForm";

export const formatWhatsAppMessage = (formData: FormData): string => {
  const message = `Olá! Meu nome é ${formData.name}. Gostaria de mais informações sobre ${formData.product}.`;
  return message;
};

export const openWhatsAppChat = (formData: FormData): void => {
  // Format phone number (remove non-numeric characters)
  const phoneNumber = formData.phone.replace(/\D/g, '');
  
  // Create WhatsApp message
  const message = formatWhatsAppMessage(formData);
  
  // Open WhatsApp with the pre-filled message
  window.open(`https://wa.me/5531983177452?text=${encodeURIComponent(message)}`, '_blank');
};
