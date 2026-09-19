import { useState } from 'react';
import PricingCard from './PricingCard';
import PlansComparisonDialog from './PlansComparisonDialog';
import PageHeader from './ui/PageHeader';

const PricingSection = () => {
  const [compareDialogOpen, setCompareDialogOpen] = useState(false);
  
  const pricingPlans = [
    {
      title: "Essential",
      price: "487",
      users: "03 usuários",
      features: [
        "Também com Versão Mobile",
        "Central de atendimento",
        "CRM",
        "Disparo de Mensagem",
        "Distribuição automática de atendimento",
        "Carteiras de Cliente",
        "Sequências",
        "Chatbot de Atendimento",
        "Chatbot de Automação",
        "Integrações (Webhook + API)",
        "Versão Mobile"
      ],
      tag: <div className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 w-fit">Essential</div>
    },
    {
      title: "Pro",
      price: "687",
      users: "05 usuários",
      features: [
        "Também com Versão Mobile",
        "Central de atendimento",
        "CRM",
        "Disparo de Mensagem",
        "Distribuição automática de atendimento",
        "Carteiras de Cliente",
        "Sequências",
        "Chatbot de Atendimento",
        "Chatbot de Automação",
        "Integrações (Webhook + API)",
        "Versão Mobile"
      ],
      tag: <div className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 w-fit">Pro</div>
    },
    {
      title: "Plus+",
      price: "987",
      users: "10 usuários",
      features: [
        "Também com Versão Mobile",
        "Central de atendimento",
        "CRM",
        "Disparo de Mensagem",
        "Distribuição automática de atendimento",
        "Carteiras de Cliente",
        "Sequências",
        "Chatbot de Atendimento",
        "Chatbot de Automação",
        "Integrações (Webhook + API)",
        "Versão Mobile"
      ],
      isPopular: true,
      tag: <div className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 w-fit">Mais Escolhido</div>
    },
    {
      title: "Advanced",
      price: "1.487",
      users: "20 usuários",
      features: [
        "Também com Versão Mobile",
        "Central de atendimento",
        "CRM",
        "Disparo de Mensagem",
        "Distribuição automática de atendimento",
        "Carteiras de Cliente",
        "Sequências",
        "Chatbot de Atendimento",
        "Chatbot de Automação",
        "Integrações (Webhook + API)",
        "Versão Mobile"
      ],
      tag: <div className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 w-fit">Advanced</div>
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(45% 45% at 15% 15%, rgba(124,58,237,0.12) 0%, transparent 60%), radial-gradient(40% 40% at 85% 85%, rgba(93,138,247,0.12) 0%, transparent 60%)",
        }}
      />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-solidPurple-200 bg-solidPurple-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-solidPurple-700 font-semibold mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-solidPurple-600" />
            CRM Premium
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0f0a2e]">
            Planos simples e{' '}
            <span className="bg-gradient-to-r from-solidPurple-600 to-solidBlue-600 bg-clip-text text-transparent">
              flexíveis
            </span>
          </h2>
          <p className="mt-4 max-w-[700px] text-slate-600 md:text-lg">
            Escolha o melhor plano para sua empresa e transforme o seu atendimento digital
            por WhatsApp e Direct com a SolidNetwork.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              users={plan.users}
              features={plan.features}
              isPopular={plan.isPopular}
              tag={plan.tag}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setCompareDialogOpen(true)}
            className="inline-flex items-center justify-center rounded-lg bg-[#1a1147] hover:bg-[#0f0a2e] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-solidPurple-900/20 transition-all"
          >
            Comparar Planos
          </button>
        </div>
      </div>
      
      <PlansComparisonDialog 
        open={compareDialogOpen} 
        onOpenChange={setCompareDialogOpen} 
      />
    </section>
  );
};

export default PricingSection;
