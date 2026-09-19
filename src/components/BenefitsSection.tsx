
import { Check, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from './ui/PageHeader';

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: {
    title: string;
    description: string;
    link?: string;
  }[];
}

const BenefitsSection = ({ title, subtitle, benefits }: BenefitsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <PageHeader title={title} subtitle={subtitle} />

        <div className="mx-auto grid gap-6 md:grid-cols-3 md:gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col hover:shadow-xl hover:-translate-y-1 hover:border-solidPurple-300 transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white shadow-md">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-solidPurple-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 mb-5 flex-grow text-sm">{benefit.description}</p>
              {benefit.link && (
                <Link
                  to={benefit.link}
                  className="mt-auto inline-flex items-center text-sm font-medium text-solidPurple-600 hover:text-solidPurple-700"
                >
                  Saiba mais
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
