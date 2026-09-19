import { Check, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  users: string;
  features: string[];
  isPopular?: boolean;
  color?: string;
  tag?: ReactNode;
}

const whatsappNumber = "5531983177452";

const PricingCard = ({
  title,
  price,
  users,
  features,
  isPopular = false,
  tag,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-7 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
        isPopular
          ? 'bg-gradient-to-br from-solidPurple-600 via-solidPurple-700 to-solidBlue-700 text-white shadow-2xl shadow-solidPurple-600/40 ring-1 ring-white/20 scale-[1.02]'
          : 'bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-solidPurple-200'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0f0a2e] shadow-lg">
          <Sparkles className="h-3 w-3" />
          Mais escolhido
        </div>
      )}

      {tag && !isPopular && <div className="mb-3">{tag}</div>}
      {isPopular && tag && <div className="mb-3 opacity-0">{tag}</div>}

      <div>
        <h3
          className={`text-xl font-bold ${
            isPopular ? 'text-white' : 'text-[#0f0a2e]'
          }`}
        >
          {title}
        </h3>
        <div className="mt-4 flex items-baseline">
          <span
            className={`text-4xl font-extrabold tracking-tight ${
              isPopular ? 'text-white' : 'text-[#0f0a2e]'
            }`}
          >
            R${price}
          </span>
          <span
            className={`ml-1 text-sm ${
              isPopular ? 'text-white/80' : 'text-slate-500'
            }`}
          >
            /mês
          </span>
        </div>
        <p
          className={`mt-1 text-sm ${
            isPopular ? 'text-white/80' : 'text-slate-500'
          }`}
        >
          {users}
        </p>
      </div>

      <div
        className={`my-6 h-px ${
          isPopular ? 'bg-white/15' : 'bg-slate-100'
        }`}
      />

      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div
              className={`mr-2.5 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                isPopular
                  ? 'bg-white/20'
                  : 'bg-gradient-to-br from-solidPurple-600 to-solidBlue-600'
              }`}
            >
              <Check className="h-3 w-3 text-white" />
            </div>
            <span
              className={`text-sm ${
                isPopular ? 'text-white/95' : 'text-slate-700'
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          `Olá, gostaria de contratar o plano ${title}.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 w-full inline-block rounded-lg py-2.5 px-4 text-center text-sm font-semibold transition-all ${
          isPopular
            ? 'bg-white text-solidPurple-700 hover:bg-slate-100 shadow-lg'
            : 'bg-gradient-to-r from-solidPurple-600 to-solidBlue-600 text-white hover:shadow-lg hover:shadow-solidPurple-600/30'
        }`}
        aria-label={`Contratar plano ${title} via WhatsApp`}
      >
        Contratar
      </a>
    </div>
  );
};

export default PricingCard;
