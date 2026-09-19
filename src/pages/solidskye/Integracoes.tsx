import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Zap,
  BarChart4,
  Clock,
  Terminal,
  MessageSquare,
  FileText,
  Puzzle,
  GitBranch,
  Plug,
} from 'lucide-react';

const IntegrationCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-solidBlue-600 text-white mb-4 shadow-md">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm">{description}</p>
  </div>
);

const psaIntegrations = [
  { icon: Zap, title: 'ConnectWise Manage', description: 'Sincronize clientes, empresas e contratos. Crie tickets automaticamente quando ocorrerem falhas de backup.' },
  { icon: BarChart4, title: 'Autotask', description: 'Integração bidirecional com Autotask para clientes, tickets e faturamento de armazenamento.' },
  { icon: Clock, title: 'Syncro', description: 'Sincronize clientes e dispositivos, além de criar tickets automaticamente quando necessário.' },
  { icon: MessageSquare, title: 'Kaseya BMS', description: 'Integração completa com Kaseya BMS para gerenciamento de clientes e serviços.' },
  { icon: FileText, title: 'HaloPSA', description: 'Sincronize sua base de clientes e gere tickets automaticamente para agilizar o suporte.' },
  { icon: Terminal, title: 'Atera', description: 'Integração nativa com Atera para um gerenciamento unificado de serviços de TI.' },
];

const rmmIntegrations = [
  { icon: Puzzle, title: 'N-able RMM', description: 'Implante e monitore agentes de backup diretamente da sua console N-able.' },
  { icon: GitBranch, title: 'ConnectWise Automate', description: 'Plugin integrado para implantação e monitoramento de backups em larga escala.' },
  { icon: Zap, title: 'Datto RMM', description: 'Componente nativo para integração com a plataforma Datto RMM.' },
  { icon: Terminal, title: 'NinjaOne', description: 'Integração bidirecional para gerenciar backups e monitores diretamente do NinjaOne.' },
  { icon: MessageSquare, title: 'Kaseya VSA', description: 'Integração profunda com Kaseya VSA para gerenciamento centralizado de backups.' },
  { icon: Clock, title: 'Atera', description: 'Utilize scripts e integrações para gerenciar backups diretamente do Atera.' },
];

const moreIntegrations = [
  'Microsoft 365', 'Google Workspace', 'QuickBooks', 'Xero', 'Slack', 'Jira',
  'Salesforce', 'AWS', 'Azure', 'Digital Ocean', 'Cloudflare', 'Stripe',
];

const Integracoes = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{
            backgroundColor: '#0f0a2e',
            backgroundImage:
              'radial-gradient(ellipse at 20% 20%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(93,138,247,0.30), transparent 60%)',
          }}
        >
          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <Plug className="mr-1.5 h-3 w-3" /> Mais de 30 integrações nativas
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Integrações{' '}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#5d8af7] bg-clip-text text-transparent">
                  SolidSkye
                </span>
              </h1>
              <p className="mt-5 text-lg text-white/70 md:text-xl">
                Conecte o SolidSkye Backup com suas ferramentas favoritas para maximizar produtividade e automação.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                    Solicitar demonstração
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                    Falar com especialista
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PSA Integrations */}
        <section className="py-20 bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                Integrações com PSA
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                Sincronize clientes, tickets e faturamento com suas ferramentas de PSA.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {psaIntegrations.map((i) => (
                <IntegrationCard key={i.title} {...i} />
              ))}
            </div>
          </div>
        </section>

        {/* RMM Integrations */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                Integrações com RMM
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                Gerencie backups diretamente da sua ferramenta de RMM preferida.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rmmIntegrations.map((i) => (
                <IntegrationCard key={i.title} {...i} />
              ))}
            </div>
          </div>
        </section>

        {/* API Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-5">
                <span className="inline-flex items-center rounded-full bg-solidPurple-100 px-3 py-1 text-xs font-medium text-solidPurple-700">
                  <Terminal className="mr-1.5 h-3 w-3" /> Developer-friendly
                </span>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                  API Completa para Desenvolvedores
                </h2>
                <p className="text-slate-600 md:text-lg">
                  Nossa API RESTful permite integrar o SolidSkye Backup com qualquer aplicação ou serviço. Crie integrações personalizadas para atender às necessidades específicas do seu negócio.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-solidPurple-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Documentação completa e exemplos de código</span>
                  </li>
                  <li className="flex items-start">
                    <Terminal className="h-5 w-5 text-solidPurple-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Autenticação segura via OAuth 2.0</span>
                  </li>
                  <li className="flex items-start">
                    <GitBranch className="h-5 w-5 text-solidPurple-500 mr-2 shrink-0 mt-0.5" />
                    <span className="text-slate-700">Suporte para webhooks para eventos em tempo real</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <Link to="/contato">
                    <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                      Acessar documentação da API
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                  style={{
                    background:
                      'radial-gradient(ellipse, rgba(124,58,237,0.5), transparent 70%)',
                  }}
                />
                <div className="relative bg-slate-900 p-6 rounded-2xl shadow-2xl border border-slate-800">
                  <div className="flex gap-1.5 mb-4">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <pre className="text-emerald-300 text-xs md:text-sm overflow-x-auto">
                    <code>{`// Exemplo de código para a API SolidSkye
const SolidSkye = require('solidskye-api');

const client = new SolidSkye.Client({
  apiKey: 'sua-chave-api',
  tenant: 'seu-tenant'
});

client.devices.list()
  .then(devices => {
    console.log(\`Encontrados \${devices.length} dispositivos\`);
    return Promise.all(
      devices.map(device =>
        client.backups.start(device.id)
      )
    );
  })
  .then(() => console.log('Backups iniciados!'))
  .catch(error => console.error('Erro:', error.message));`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* More Integrations */}
        <section className="py-20 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
                Mais Integrações
              </h2>
              <p className="mt-4 text-slate-600 md:text-lg max-w-2xl mx-auto">
                O SolidSkye se integra com dezenas de outros serviços e plataformas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {moreIntegrations.map((integration) => (
                <div
                  key={integration}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-center hover:shadow-md hover:border-solidPurple-300 transition-all"
                >
                  <p className="font-medium text-slate-700 text-sm">{integration}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/contato">
                <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                  Ver todas as integrações
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative overflow-hidden py-20"
          style={{
            backgroundColor: '#0f0a2e',
            backgroundImage:
              'radial-gradient(ellipse at 30% 50%, rgba(124,58,237,0.35), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(93,138,247,0.30), transparent 60%)',
          }}
        >
          <div className="container relative px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white mb-4">
              Vamos integrar com seu ambiente
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Entre em contato para uma demonstração personalizada das integrações que podem beneficiar seu negócio.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                Agendar demonstração
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Integracoes;
