import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MessageSquare, Mail, Phone, MapPin, Send, Shield, Zap, Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sendWebhook } from "@/utils/webhook";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log("Mensagem de contato:", formData);
      await sendWebhook("Contato site", formData);

      
      
      toast({
        title: "Mensagem enviada",
        description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      console.error("Erro ao enviar mensagem:", error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Zap className="mr-1.5 h-3 w-3" /> Resposta em até 1h útil
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Vamos conversar sobre o{' '}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#5d8af7] bg-clip-text text-transparent">
                  futuro da sua empresa
                </span>
              </h1>
              <p className="mt-5 text-lg text-white/70 md:text-xl">
                Nossa equipe está pronta para entender seu desafio e propor a melhor solução em tecnologia, cloud e atendimento.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="https://wa.me/5531983177452" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90">
                    <MessageSquare className="mr-2 h-4 w-4" /> Falar no WhatsApp
                  </Button>
                </a>
                <Link to="/agendamento">
                  <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                    <Calendar className="mr-2 h-4 w-4" /> Agendar reunião
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick info cards */}
        <section className="border-b border-gray-100 bg-gray-50/60 py-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: Phone, label: 'Telefone', value: '(31) 98317-7452', href: 'tel:+5531983177452' },
                { icon: Mail, label: 'Email', value: 'comercial@solidnetwork.com.br', href: 'mailto:comercial@solidnetwork.com.br' },
                { icon: MapPin, label: 'Endereço', value: 'Belo Horizonte, MG' },
              ].map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-solidPurple-200 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-solidPurple-600 to-[#5d8af7] text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{label}</p>
                      <p className="truncate text-sm font-semibold text-gray-900">{value}</p>
                    </div>
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">{content}</a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="contact" className="mx-auto max-w-5xl">
              <TabsList className="mx-auto mb-10 grid w-full max-w-md grid-cols-2 rounded-full bg-gray-100 p-1">
                <TabsTrigger value="contact" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Enviar Mensagem
                </TabsTrigger>
                <TabsTrigger value="schedule" className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  Agendar Reunião
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contact">
                <div className="grid items-start gap-8 lg:grid-cols-5">
                  {/* Side panel */}
                  <div className="space-y-4 lg:col-span-2">
                    <div
                      className="relative overflow-hidden rounded-2xl p-7 text-white shadow-lg"
                      style={{
                        backgroundColor: '#0f0a2e',
                        backgroundImage:
                          'radial-gradient(circle at 0% 0%, rgba(124,58,237,0.5), transparent 50%), radial-gradient(circle at 100% 100%, rgba(93,138,247,0.4), transparent 50%)',
                      }}
                    >
                      <h3 className="text-xl font-semibold">Por que falar com a gente?</h3>
                      <ul className="mt-5 space-y-3 text-sm text-white/85">
                        {[
                          { icon: Zap, text: 'Diagnóstico gratuito do seu cenário' },
                          { icon: Shield, text: 'Soluções escaláveis e seguras' },
                          { icon: Users, text: 'Equipe técnica especializada' },
                          { icon: Clock, text: 'Atendimento ágil e humano' },
                        ].map(({ icon: Icon, text }) => (
                          <li key={text} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span>{text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                          <MessageSquare className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h3 className="text-base font-semibold">Suporte rápido</h3>
                      </div>
                      <p className="mt-3 text-sm text-gray-600">
                        Já é cliente? Fale direto com nossa equipe de atendimento pelo WhatsApp.
                      </p>
                      <a href="https://wa.me/5531983177452" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                        <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
                          <MessageSquare className="mr-2 h-4 w-4" /> Iniciar conversa
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8 lg:col-span-3">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Envie uma mensagem</h2>
                    <p className="mt-1 text-sm text-gray-600">Preencha o formulário e retornaremos rapidamente.</p>
                    <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                      <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome *</Label>
                          <Input id="name" value={formData.name} onChange={handleInputChange} placeholder="Digite seu nome" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Digite seu email" required />
                        </div>
                      </div>
                      <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input id="phone" value={formData.phone} onChange={handleInputChange} placeholder="(00) 00000-0000" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa</Label>
                          <Input id="company" value={formData.company} onChange={handleInputChange} placeholder="Nome da sua empresa" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto *</Label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          required
                        >
                          <option value="" disabled>Selecione um assunto</option>
                          <option value="Vendas">Vendas</option>
                          <option value="Suporte">Suporte</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Outro">Outro</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="flex min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          placeholder="Conte um pouco sobre seu projeto ou desafio"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-solidPurple-600 to-solidPurple-700 text-white hover:opacity-90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : (<><Send className="mr-2 h-4 w-4" /> Enviar mensagem</>)}
                      </Button>
                      <p className="text-center text-xs text-gray-500">
                        Ao enviar, você concorda com nossa política de privacidade.
                      </p>
                    </form>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schedule">
                <div
                  className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl p-10 text-center text-white shadow-lg"
                  style={{
                    backgroundColor: '#0f0a2e',
                    backgroundImage:
                      'radial-gradient(circle at 20% 0%, rgba(124,58,237,0.5), transparent 55%), radial-gradient(circle at 80% 100%, rgba(93,138,247,0.4), transparent 55%)',
                  }}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold md:text-3xl">Agende uma reunião com nossos especialistas</h2>
                  <p className="mx-auto mt-3 max-w-lg text-white/75">
                    Reserve um horário para uma demonstração personalizada de nossas soluções ou para tirar suas dúvidas com nossa equipe.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
                      <Clock className="h-4 w-4" /> 30 minutos
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5">
                      <MessageSquare className="h-4 w-4" /> Microsoft Teams
                    </div>
                  </div>
                  <Link to="/agendamento" className="mt-8 inline-block">
                    <Button size="lg" className="bg-white text-solidPurple-700 hover:bg-gray-100">
                      <Calendar className="mr-2 h-4 w-4" /> Ver horários disponíveis
                    </Button>
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Contato;
