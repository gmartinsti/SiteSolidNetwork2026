
import React from 'react';
import { X, Check, Minus } from 'lucide-react';
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PlansComparisonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PlansComparisonDialog = ({ open, onOpenChange }: PlansComparisonDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 bg-white overflow-hidden">
        <DialogHeader className="sticky top-0 z-10 bg-white px-6 py-4 border-b">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-solidPurple-600 text-xl font-semibold">Planos</DialogTitle>
            <DialogClose className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <X className="h-4 w-4" />
            </DialogClose>
          </div>
          <div className="grid grid-cols-5 gap-4 py-2 font-medium">
            <div className="col-span-1"></div>
            <div className="col-span-1 text-center">Essential</div>
            <div className="col-span-1 text-center">Pro</div>
            <div className="col-span-1 text-center">Plus+</div>
            <div className="col-span-1 text-center">Advanced</div>
          </div>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="bg-gray-50 px-6 py-2 w-full justify-start gap-4 h-auto border-b">
              <TabsTrigger value="general" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Geral
              </TabsTrigger>
              <TabsTrigger value="canais" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Canais
              </TabsTrigger>
              <TabsTrigger value="adicionais" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Adicionais
              </TabsTrigger>
              <TabsTrigger value="ativacao" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Ativação
              </TabsTrigger>
              <TabsTrigger value="inbox" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Inbox
              </TabsTrigger>
              <TabsTrigger value="contatos" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Gestão de Contatos
              </TabsTrigger>
              <TabsTrigger value="crm" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                CRM
              </TabsTrigger>
              <TabsTrigger value="automacao" className="data-[state=active]:bg-solidPurple-100 data-[state=active]:text-solidPurple-600">
                Automação
              </TabsTrigger>
            </TabsList>
            
            <div className="px-6 py-4">
              <TabsContent value="general" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">Informações Gerais</h3>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Usuários Inclusos</div>
                    <div className="col-span-1 text-center">03</div>
                    <div className="col-span-1 text-center">05</div>
                    <div className="col-span-1 text-center">10</div>
                    <div className="col-span-1 text-center">20</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Custo de infraestrutura por usuário ativo (Acima de 5.000)</div>
                    <div className="col-span-1 text-center">R$ 0,09</div>
                    <div className="col-span-1 text-center">R$ 0,09</div>
                    <div className="col-span-1 text-center">R$ 0,09</div>
                    <div className="col-span-1 text-center">R$ 0,09</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Usuário ativo/mês (Até 5000)</div>
                    <div className="col-span-1 text-center">Isento</div>
                    <div className="col-span-1 text-center">Isento</div>
                    <div className="col-span-1 text-center">Isento</div>
                    <div className="col-span-1 text-center">Isento</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="canais" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">CANAIS</h3>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Usuários Inclusos</div>
                    <div className="col-span-1 text-center">03</div>
                    <div className="col-span-1 text-center">05</div>
                    <div className="col-span-1 text-center">10</div>
                    <div className="col-span-1 text-center">20</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Canais</div>
                    <div className="col-span-1 text-center">
                      <div className="flex justify-center space-x-1">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs">W</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="flex justify-center space-x-1">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs">W</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
                          <span className="text-white text-xs">I</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs">D</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="flex justify-center space-x-1">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs">W</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
                          <span className="text-white text-xs">I</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs">D</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 text-center">
                      <div className="flex justify-center space-x-1">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-xs">W</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
                          <span className="text-white text-xs">I</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                          <span className="text-white text-xs">D</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="adicionais" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">ADICIONAIS</h3>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Usuário Adicional</div>
                    <div className="col-span-1 text-center">R$ 107/mês</div>
                    <div className="col-span-1 text-center">R$ 87/mês</div>
                    <div className="col-span-1 text-center">R$ 57/mês</div>
                    <div className="col-span-1 text-center">R$ 47/mês</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">WhatsApp Adicional</div>
                    <div className="col-span-1 text-center">R$ 89/mês</div>
                    <div className="col-span-1 text-center">R$ 89/mês</div>
                    <div className="col-span-1 text-center">R$ 89/mês</div>
                    <div className="col-span-1 text-center">R$ 89/mês</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Direct ou Messenger Adicional</div>
                    <div className="col-span-1 text-center">R$ 69/mês</div>
                    <div className="col-span-1 text-center">R$ 69/mês</div>
                    <div className="col-span-1 text-center">R$ 69/mês</div>
                    <div className="col-span-1 text-center">R$ 69/mês</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Pagamentos</div>
                    <div className="col-span-1 text-center">R$ 99/mês</div>
                    <div className="col-span-1 text-center">R$ 99/mês</div>
                    <div className="col-span-1 text-center">R$ 99/mês</div>
                    <div className="col-span-1 text-center">R$ 99/mês</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="ativacao" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">ATIVAÇÃO</h3>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Taxa de Implantação</div>
                    <div className="col-span-1 text-center">R$ 1.090,00</div>
                    <div className="col-span-1 text-center">R$ 1.490,00</div>
                    <div className="col-span-1 text-center">R$ 1.990,00</div>
                    <div className="col-span-1 text-center">R$ 2.499,00</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">WhatsApp Adicional</div>
                    <div className="col-span-1 text-center">R$ 99</div>
                    <div className="col-span-1 text-center">R$ 99</div>
                    <div className="col-span-1 text-center">R$ 99</div>
                    <div className="col-span-1 text-center">R$ 99</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Direct ou Messenger Adicional</div>
                    <div className="col-span-1 text-center">R$ 69</div>
                    <div className="col-span-1 text-center">R$ 69</div>
                    <div className="col-span-1 text-center">R$ 69</div>
                    <div className="col-span-1 text-center">R$ 69</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="inbox" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">INBOX</h3>
                  
                  {[
                    "Central de Atendimento",
                    "Criação de Setores",
                    "Fila de Espera",
                    "Resultado dos atendimentos",
                    "Modelo de Mensagens",
                    "Respostas Rápidas",
                    "Conclusão em massa de atendimento",
                    "Tempo de segurança para envio de Mensagem",
                    "Transferir Conversas",
                    "Permissões específicas para usuários",
                    "Supervisão de Conversas"
                  ].map((feature, index) => (
                    <div key={index} className="grid grid-cols-5 border-b pb-4">
                      <div className="col-span-1 font-medium">{feature}</div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Distribuição automática de atendimento</div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contatos" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">GESTÃO DE CONTATOS</h3>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Etiquetas</div>
                    <div className="col-span-1 text-center">10</div>
                    <div className="col-span-1 text-center">Ilimitado</div>
                    <div className="col-span-1 text-center">Ilimitado</div>
                    <div className="col-span-1 text-center">Ilimitado</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Campos Personalizados</div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">Ilimitado</div>
                    <div className="col-span-1 text-center">Ilimitado</div>
                    <div className="col-span-1 text-center">Ilimitado</div>
                  </div>
                  
                  {[
                    "Histórico de Conversas",
                    "Importação de Contatos",
                    "Rastrear Origem dos Leads",
                    "Tracking de Navegação do Site"
                  ].map((feature, index) => (
                    <div key={index} className="grid grid-cols-5 border-b pb-4">
                      <div className="col-span-1 font-medium">{feature}</div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Carteiras de Cliente</div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="crm" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">CRM</h3>
                  
                  {[
                    "Funis (Kanban)",
                    "Etapas Personalizadas",
                    "Exportação de Dados", 
                    "Campos Personalizados",
                    "Disparo em Massa"
                  ].map((feature, index) => (
                    <div key={index} className="grid grid-cols-5 border-b pb-4">
                      <div className="col-span-1 font-medium">{feature}</div>
                      <div className="col-span-1 text-center">
                        <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                      <div className="col-span-1 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </div>
                    </div>
                  ))}
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Quantidade de Funis</div>
                    <div className="col-span-1 text-center">-</div>
                    <div className="col-span-1 text-center">2</div>
                    <div className="col-span-1 text-center">5</div>
                    <div className="col-span-1 text-center">10</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Base de Contatos</div>
                    <div className="col-span-1 text-center">-</div>
                    <div className="col-span-1 text-center">Ilimitada</div>
                    <div className="col-span-1 text-center">Ilimitada</div>
                    <div className="col-span-1 text-center">Ilimitada</div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="automacao" className="mt-0">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-solidPurple-800">AUTOMAÇÃO E INTEGRAÇÕES</h3>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Chatbot de Atendimento</div>
                    <div className="col-span-1 text-center">2</div>
                    <div className="col-span-1 text-center">3</div>
                    <div className="col-span-1 text-center">5</div>
                    <div className="col-span-1 text-center">10</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Chatbot de Automação</div>
                    <div className="col-span-1 text-center">1</div>
                    <div className="col-span-1 text-center">2</div>
                    <div className="col-span-1 text-center">2</div>
                    <div className="col-span-1 text-center">4</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Chatbot com Webhooks</div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Sequência</div>
                    <div className="col-span-1 text-center">1</div>
                    <div className="col-span-1 text-center">2</div>
                    <div className="col-span-1 text-center">2</div>
                    <div className="col-span-1 text-center">4</div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Botão do WhatsApp</div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">Webhook</div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 border-b pb-4">
                    <div className="col-span-1 font-medium">API</div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Minus className="h-5 w-5 text-gray-400 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                    <div className="col-span-1 text-center">
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PlansComparisonDialog;
