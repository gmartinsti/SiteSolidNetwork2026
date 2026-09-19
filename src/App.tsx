
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Index from "./pages/Index";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import CrmService from "./pages/services/CrmService";
import TrafegoPagoService from "./pages/services/TrafegoPagoService";
import DesenvolvimentoWebService from "./pages/services/DesenvolvimentoWebService";
import AutomacaoComercialService from "./pages/services/AutomacaoComercialService";
import GestaoMidiasService from "./pages/services/GestaoMidiasService";
import MarketingDigitalService from "./pages/services/MarketingDigitalService";
import SolidSkyeBackupService from "./pages/services/SolidSkyeBackupService";
import DbaServices from "./pages/services/DbaServices";
import TypeTalk from "./pages/TypeTalk";
import TypeTalkFeatures from "./pages/TypeTalkFeatures";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import SolidSkye from "./pages/SolidSkye";
import Solucoes from "./pages/solidskye/Solucoes";
import Armazenamento from "./pages/solidskye/Armazenamento";
import Integracoes from "./pages/solidskye/Integracoes";
import SolidDNS from "./pages/SolidDNS";
import Agendamento from "./pages/Agendamento";
import DBaaS from "./pages/cloud/DBaaS";
import InfraCloud from "./pages/cloud/InfraCloud";
import VirtualServer from "./pages/cloud/VirtualServer";
import SitesAssinatura from "./pages/SitesAssinatura";
import CertificadoDigital from "./pages/CertificadoDigital";
import Node4Health from "./pages/Node4Health";
import ApiBuilder from "./pages/ApiBuilder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ChatProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/solid-dns" element={<SolidDNS />} />
            <Route path="/agendamento" element={<Agendamento />} />
            <Route path="/sites-assinatura" element={<SitesAssinatura />} />
            <Route path="/certificado-digital" element={<CertificadoDigital />} />
            <Route path="/solidflow" element={<Node4Health />} />
            <Route path="/node4health" element={<Node4Health />} />
            <Route path="/api-builder" element={<ApiBuilder />} />
            
            {/* TypeTalk routes */}
            <Route path="/type-talk" element={<TypeTalk />} />
            <Route path="/type-talk/features" element={<TypeTalkFeatures />} />
            
            {/* Services routes */}
            <Route path="/servicos/crm" element={<CrmService />} />
            <Route path="/servicos/trafego-pago" element={<TrafegoPagoService />} />
            <Route path="/servicos/desenvolvimento-web" element={<DesenvolvimentoWebService />} />
            <Route path="/servicos/automacao-comercial" element={<AutomacaoComercialService />} />
            <Route path="/servicos/gestao-midias" element={<GestaoMidiasService />} />
            <Route path="/servicos/marketing-digital" element={<MarketingDigitalService />} />
            <Route path="/servicos/solidskye-backup" element={<SolidSkyeBackupService />} />
            
            {/* DBA Services routes */}
            <Route path="/servicos/dba/sql-server" element={<DbaServices />} />
            
            {/* SolidSkye routes */}
            <Route path="/solidskye" element={<SolidSkye />} />
            <Route path="/solidskye/solucoes" element={<Solucoes />} />
            <Route path="/solidskye/armazenamento" element={<Armazenamento />} />
            <Route path="/solidskye/integracoes" element={<Integracoes />} />
            
            {/* Cloud routes */}
            <Route path="/cloud/dbaas" element={<DBaaS />} />
            <Route path="/cloud/infracloud" element={<InfraCloud />} />
            <Route path="/cloud/virtual-server" element={<VirtualServer />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
