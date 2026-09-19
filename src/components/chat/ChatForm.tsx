
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

interface ChatFormProps {
  onSubmit: (formData: FormData) => void;
  onStart?: () => void;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  product: string;
}

const ChatForm = ({ onSubmit, onStart }: ChatFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    product: 'SolidSkye'
  });
  
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, informe seu nome para continuar.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.phone.trim()) {
      toast({
        title: "Telefone obrigatório",
        description: "Por favor, informe seu telefone para continuar.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, informe um email válido para continuar.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);
      onSubmit(formData);
      toast({
        title: "Conversa aberta",
        description: "O WhatsApp vai abrir agora.",
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // List of products
  const products = [
    'SolidSkye', 
    'Solid DNS', 
    'Tráfego Pago', 
    'Gestão Smart', 
    'Suporte Smart', 
    'Desenvolvimento Web', 
    'Automação Comercial', 
    'Gestão de Mídias Sociais', 
    'Marketing Digital'
  ];

  const fieldClass =
    "h-9 rounded-xl border-[#E6E1F2] bg-white text-sm text-[#16122B] placeholder:text-[#16122B]/35 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-0";

  if (step === 0) {
    return (
      <button
        type="button"
        onClick={() => {
          setStep(1);
          onStart?.();
        }}
        className="flex w-full items-center justify-center rounded-full bg-[#120C2E] py-2.5 pl-1.5 pr-4 text-sm font-semibold text-white transition-colors hover:bg-[#1c1544] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2"
      >
        <span className="mr-2.5 h-5 w-1 rounded-full bg-[#2EE6A6]" aria-hidden="true" />
        Informar meus dados
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <div>
        <Label htmlFor="name" className="sn-status text-[10px] uppercase tracking-[0.14em] text-[#16122B]/55">Nome</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={fieldClass}
          placeholder="Seu nome"
          required
        />
      </div>
      <div>
        <Label htmlFor="phone" className="sn-status text-[10px] uppercase tracking-[0.14em] text-[#16122B]/55">Telefone</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className={fieldClass}
          placeholder="(00) 00000-0000"
          required
        />
      </div>
      <div>
        <Label htmlFor="email" className="sn-status text-[10px] uppercase tracking-[0.14em] text-[#16122B]/55">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className={fieldClass}
          placeholder="voce@empresa.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="product" className="sn-status text-[10px] uppercase tracking-[0.14em] text-[#16122B]/55">Produto</Label>
        <select
          id="product"
          name="product"
          value={formData.product}
          onChange={handleInputChange}
          className="flex h-9 w-full rounded-xl border border-[#E6E1F2] bg-white px-3 text-sm text-[#16122B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6]"
          required
        >
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-1 flex w-full items-center justify-center rounded-full bg-[#120C2E] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1c1544] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2EE6A6] focus-visible:ring-offset-2 disabled:opacity-60"
        disabled={isSubmitting}
      >
        <span className="mr-2.5 h-4 w-1 rounded-full bg-[#2EE6A6]" aria-hidden="true" />
        {isSubmitting ? 'Abrindo o WhatsApp...' : 'Abrir conversa no WhatsApp'}
      </button>
    </form>
  );
};

export default ChatForm;
