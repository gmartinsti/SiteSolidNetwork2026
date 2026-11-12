import type { LucideIcon } from "lucide-react";
import {
  FileScan,
  MonitorSmartphone,
  TabletSmartphone,
  ScanLine,
  Send,
  Workflow,
  FileSignature,
  UsersRound,
  PenLine,
  MessageCircleHeart,
  BadgeCheck,
  Search,
  Cloud,
  Shield,
  FileCheck2,
  Layers,
} from "lucide-react";

export type ZeroDoxProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
  featured?: boolean;
};

export const zerodoxProducts: ZeroDoxProduct[] = [
  {
    id: "x-same",
    name: "X-SAME",
    tagline: "Conversão de arquivos médicos",
    description:
      "Conversão de arquivos médicos com validade jurídica. Reconhecimento óptico de caracteres, ferramentas de indexação e operação 100% em nuvem — mesma validade do impresso, com muito mais praticidade.",
    highlights: ["OCR", "Indexação", "Validade jurídica", "100% nuvem"],
    icon: FileScan,
    featured: true,
  },
  {
    id: "guiche-digital",
    name: "Guichê Digital",
    tagline: "Solicitação de serviços",
    description:
      "Satisfação para seus pacientes e praticidade para a operação: guichê virtual, protocolo eletrônico e solicitação enviada diretamente ao responsável — sem filas de papel.",
    highlights: ["Guichê virtual", "Protocolo eletrônico", "Encaminhamento direto"],
    icon: MonitorSmartphone,
    featured: true,
  },
  {
    id: "recept-i",
    name: "Recept-I",
    tagline: "Recepção inteligente",
    description:
      "Recepção sem papel: coleta de documentos e assinaturas por tablet, trâmite 100% digital, agilidade e segurança para o ciclo de receita — zero extravios.",
    highlights: ["Sem papel", "Tablet", "Ciclo de receita", "Zero extravios"],
    icon: TabletSmartphone,
    featured: true,
  },
  {
    id: "doxcapture",
    name: "DoxCapture",
    tagline: "Digitalização com validade jurídica",
    description:
      "Transforme papel em workflow e base de dados valiosa. Buscas avançadas, armazenamento 100% em nuvem e liberdade para descartar o impresso* com a mesma validade comprobatória.",
    highlights: ["Validade jurídica", "Workflow", "Buscas avançadas", "Nuvem"],
    icon: ScanLine,
    featured: true,
  },
  {
    id: "dox-send",
    name: "Dox-Send",
    tagline: "Canal com o SIAD",
    description:
      "Envio de documentos para o convênio com automação. Integração com o SIAD que acelera o ciclo da receita e reduz retrabalho operacional.",
    highlights: ["SIAD", "Convênios", "Automação", "Ciclo da receita"],
    icon: Send,
    featured: true,
  },
  {
    id: "doxflow",
    name: "DoxFlow",
    tagline: "BPM ZeroDox",
    description:
      "O BPM ZeroDox: crie fluxos de aprovação e assinatura digital sem gerar papel. Agilidade, segurança, armazenamento em nuvem e zero extravios.",
    highlights: ["BPM", "Aprovações", "Assinatura digital", "Zero extravios"],
    icon: Workflow,
    featured: true,
  },
  {
    id: "contract-i",
    name: "Contract-I",
    tagline: "Gestão digital de contratos",
    description:
      "Digitalize contratos existentes com validade jurídica. Analise, aprove e minute no ambiente virtual, com alertas relevantes e acesso de qualquer lugar.",
    highlights: ["Contratos", "Workflow", "Alertas", "Acesso remoto"],
    icon: FileSignature,
  },
  {
    id: "rh-digital",
    name: "RH Digital",
    tagline: "Contratos de trabalho e serviços",
    description:
      "Crie vagas e processos de aprovação em poucos cliques. Analise, aprove e contrate no ambiente virtual, com alertas relevantes para o RH.",
    highlights: ["Vagas", "Aprovações", "Contratação", "Alertas"],
    icon: UsersRound,
  },
  {
    id: "sign",
    name: "Sign",
    tagline: "Assinatura digital",
    description:
      "Assine de qualquer lugar com certificação pessoal avançada ou qualificada, plena validade jurídica e conformidade com as exigências legais.",
    highlights: ["Qualquer lugar", "Validade jurídica", "Conformidade"],
    icon: PenLine,
    featured: true,
  },
  {
    id: "ouvidoria-digital",
    name: "Ouvidoria Digital",
    tagline: "Canal com o paciente",
    description:
      "Canal de atendimento para pacientes: solicitações mais práticas, feedbacks valiosos e entrega de qualidade — com rastreabilidade ponta a ponta.",
    highlights: ["Atendimento", "Feedback", "Qualidade", "Rastreabilidade"],
    icon: MessageCircleHeart,
  },
];

export const featuredZerodoxProducts = zerodoxProducts.filter((p) => p.featured);

export const zerodoxResults = [
  { value: "+1 milhão", label: "Documentos convertidos com validade legal" },
  { value: "+500 mil", label: "Assinaturas e tramitações eletrônicas por dia" },
  { value: "+600 mil", label: "Folhas reduzidas · cerca de 3 mil árvores preservadas" },
  { value: "19 estados", label: "Expansão em menos de 3 anos" },
];

export const zerodoxAdvantages = [
  {
    title: "Conversão com validade jurídica",
    description: "Converta documentos, acervos e processos com a mesma validade comprobatória do impresso.",
    icon: FileCheck2,
  },
  {
    title: "OCR e buscas por indexação",
    description: "Encontre tudo com poucos cliques graças ao reconhecimento de caracteres e indexação.",
    icon: Search,
  },
  {
    title: "Assinaturas avançadas e qualificadas",
    description: "Mais agilidade para faturamentos e aprovações com certificação pessoal adequada a cada demanda.",
    icon: BadgeCheck,
  },
  {
    title: "Liberdade para descartar papel*",
    description: "Mesma validade comprobatória dos documentos impressos — exceto os de relevante valor histórico.",
    icon: Layers,
  },
  {
    title: "Workflow digital",
    description: "Fluxos de trabalho com a praticidade do ambiente virtual ZeroDox, do início ao fim.",
    icon: Workflow,
  },
  {
    title: "Segurança em nuvem",
    description: "Documentos salvos com criptografia, acessíveis de qualquer lugar, em conformidade com a LGPD.",
    icon: Shield,
  },
];

export const zerodoxPillars = [
  {
    title: "Menos papel, mais produtividade",
    description:
      "Troque gastos com papel por eficiência: reduza custos, prazos e riscos de extravio eliminando o impresso nos processos de saúde.",
    icon: Cloud,
  },
  {
    title: "Ciclo da receita acelerado",
    description:
      "Da recepção ao envio ao convênio: digitalize, assine e tramite documentos com rastreabilidade até o faturamento.",
    icon: Send,
  },
  {
    title: "Conformidade e LGPD",
    description:
      "Coleta, armazenamento e tratamento de dados em conformidade com a LGPD, com validade jurídica e ritos formais preservados.",
    icon: Shield,
  },
];
