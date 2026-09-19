import { MessageSquare, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-white to-slate-50">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.10), transparent 60%)',
        }}
      />
      <div className="container relative px-4 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 md:p-14 shadow-xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-solidPurple-600 to-solidBlue-600 bg-clip-text text-transparent">
                transformar
              </span>{' '}
              sua comunicação com clientes?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Agende uma demonstração gratuita e descubra como nossa solução pode ajudar o seu negócio.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/agendamento"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Agendar demonstração
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:border-solidPurple-300"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Falar com um especialista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
