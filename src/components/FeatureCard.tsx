import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fadeIn">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-solidPurple-600 to-solidBlue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white shadow-lg shadow-solidPurple-600/20 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[#0f0a2e] group-hover:text-solidPurple-700 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
