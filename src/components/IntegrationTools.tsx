
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const IntegrationTools = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Coluna 1 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Criando conexões</h2>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-solidPurple-600">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Integrações TypeTalk</h3>
                    <p className="mt-1 text-sm text-gray-600">Entenda mais sobre as possibilidades de integração</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-solidPurple-600">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Acesse a documentação API</h3>
                    <p className="mt-1 text-sm text-gray-600">Saiba como utilizar a API da TypeTalk</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Coluna 2 */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">Ferramentas de integração</h2>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-solidPurple-600">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Componentes Make</h3>
                    <p className="mt-1 text-sm text-gray-600">Instale os componentes da TypeTalk na Make</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-solidPurple-600">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Componentes n8n</h3>
                    <p className="mt-1 text-sm text-gray-600">Acesse os componentes da TypeTalk na n8n</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Coluna 3 */}
          <div className="space-y-6">
            <div className="bg-purple-100 rounded-2xl p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-solidPurple-800 mb-4">
                  Conexão com as principais ferramentas disponíveis no mercado.
                </h2>
                <p className="text-sm text-solidPurple-700">
                  Unifique sua experiência de pagamento, gerencie sua agenda, crie formulários, automatize suas interações, otimize seus e-mails, impulsione seus anúncios e muito mais.
                </p>
              </div>
              
              <div className="absolute inset-0 opacity-20">
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-solidPurple-200"></div>
                <div className="absolute left-10 bottom-10 w-20 h-20 rounded-full bg-solidPurple-300"></div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6 relative z-10">
                {/* Ícones de integração */}
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-400">{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationTools;

