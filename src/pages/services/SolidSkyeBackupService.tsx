
import ServicePageTemplate from '@/components/ServicePageTemplate';

const SolidSkyeBackupService = () => {
  return (
    <ServicePageTemplate
      title="SolidSkye Backup"
      description="Soluções de backup em nuvem seguras, confiáveis e escaláveis para empresas de todos os tamanhos. Proteja seus dados críticos contra perda, ransomware e desastres."
      imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      features={[
        {
          title: "Backup de Servidores",
          description: "Proteção completa para servidores físicos e virtuais, incluindo Windows Server, Linux, VMware e Hyper-V."
        },
        {
          title: "Backup de Estações",
          description: "Proteja os dados dos computadores da sua equipe com backup automático e recuperação simplificada."
        },
        {
          title: "Backup de Bancos de Dados",
          description: "Backup especializado para SQL Server, MySQL, PostgreSQL e outros bancos de dados populares."
        },
        {
          title: "Recuperação de Desastres",
          description: "Soluções de DR para recuperação rápida após ransomware, falhas de hardware ou desastres naturais."
        },
        {
          title: "Backup de Office 365",
          description: "Proteção para seus dados na nuvem, incluindo emails, arquivos, SharePoint e Teams."
        },
        {
          title: "Backup de Aplicações Críticas",
          description: "Proteção especial para aplicações empresariais como ERP, CRM e sistemas financeiros."
        }
      ]}
      benefits={[
        {
          title: "Proteção Contra Ransomware",
          description: "Proteja seus dados contra ataques de ransomware com backup imutável e detecção de ameaças."
        },
        {
          title: "Conformidade Regulatória",
          description: "Atenda aos requisitos de conformidade como LGPD, PCI DSS e outras regulamentações do setor."
        },
        {
          title: "Continuidade de Negócios",
          description: "Minimize o tempo de inatividade com soluções de recuperação rápida que mantêm seu negócio funcionando."
        },
        {
          title: "Redução de Custos",
          description: "Elimine os custos de hardware e manutenção com nossa solução baseada em nuvem com preços previsíveis."
        }
      ]}
      backgroundColor="bg-blue-50"
    />
  );
};

export default SolidSkyeBackupService;
