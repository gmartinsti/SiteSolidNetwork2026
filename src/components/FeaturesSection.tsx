
import { MessageSquare, Rocket, CreditCard, Package, Zap, Settings } from 'lucide-react';
import FeatureCard from './FeatureCard';

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  featuresGrid?: boolean;
}

const FeaturesSection = ({ title, subtitle, featuresGrid = true }: FeaturesSectionProps) => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Suporte e atendimento por WhatsApp",
      description: "Monte sua central de atendimento e garanta a melhor experiência para seu cliente."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Disparo de mensagens em massa",
      description: "Realize Campanhas de Marketing por WhatsApp e alcance seus clientes."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Pagamentos por WhatsApp",
      description: "Realize cobranças pelo WhatsApp e aproveite o momento de compra o seu cliente."
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Atendimento automatizado",
      description: "Crie o seu Chatbot e automatize o seu atendimento. Seus clientes com respostas 24 horas por dia."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "CRM baseado em conversas",
      description: "Tenha funis de vendas painéis de tarefas e projetos baseado nas conversas geradas por leads e clientes."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automação",
      description: "Crie automações para facilitar a sua operação e construa fluxos de cadência de acordo com sua necessidade."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Chatbot",
      description: "Com uma configuração descomplicada, você coloca o seu assistente virtual para trabalhar em minutos."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "CRM",
      description: "Integrado de forma impecável ao WhatsApp, o CRM não só otimiza seu funil de vendas, mas também a gestão de tarefas."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "ATENDIMENTO",
      description: "Nosso módulo de Atendimento é sinônimo de simplicidade e estabilidade. Centralize as conversas de WhatsApp, Instagram Direct e Messenger."
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 10% 0%, rgba(124,58,237,0.10) 0%, transparent 60%), radial-gradient(40% 40% at 100% 100%, rgba(93,138,247,0.10) 0%, transparent 60%)",
        }}
      />
      <div className="container relative px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-solidPurple-200 bg-solidPurple-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-solidPurple-700 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-solidPurple-600" />
            Funcionalidades
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#0f0a2e]">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-to-r from-solidPurple-600 to-solidBlue-600 bg-clip-text text-transparent">
              {title.split(' ').slice(-1)}
            </span>
          </h2>
          <p className="max-w-[700px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {subtitle}
          </p>
        </div>
        
        {featuresGrid ? (
          <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-12 mt-12">
            {[0, 1, 2].map((rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {features.slice(rowIndex * 3, rowIndex * 3 + 3).map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
