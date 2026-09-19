import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { format, addDays, setHours, setMinutes, isBefore, isAfter, isSameDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { sendWebhook } from "@/utils/webhook";

const Agendamento = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  // Morning time slots: 8:00 to 12:00
  const morningSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"
  ];

  // Afternoon time slots: 13:00 to 18:00
  const afternoonSlots = [
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  // Function to disable weekends and past dates
  const disabledDays = (date: Date) => {
    const day = date.getDay();
    const isWeekend = day === 0 || day === 6;
    const isPastDate = isBefore(date, new Date()) && !isSameDay(date, new Date());
    return isWeekend || isPastDate;
  };

  // Limit calendar to next 30 days
  const toDate = addDays(new Date(), 30);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !selectedTime || !name || !email || !phone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const agendamentoData = {
        nome: name,
        email,
        telefone: phone,
        data: date.toISOString(),
        hora: selectedTime,
      };

      console.log("Agendamento solicitado:", agendamentoData);
      await sendWebhook("Agendamento", agendamentoData);

      
      
      toast({
        title: "Agendamento realizado com sucesso!",
        description: `Você receberá um email em ${email} com os detalhes da reunião.`,
      });
      
      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Erro ao agendar reunião:", error);
      toast({
        title: "Erro ao agendar",
        description: "Ocorreu um erro ao tentar agendar sua reunião. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Agende uma Reunião
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Escolha o melhor dia e horário para conversarmos
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Selecione uma data</CardTitle>
                <CardDescription>
                  Disponível de segunda a sexta-feira
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={disabledDays}
                  fromDate={new Date()}
                  toDate={toDate}
                  locale={ptBR}
                  className="rounded-md border mx-auto"
                />
              </CardContent>
            </Card>
            
            {date && (
              <Card>
                <CardHeader>
                  <CardTitle>Horários disponíveis</CardTitle>
                  <CardDescription>
                    Para {format(date, "dd 'de' MMMM", { locale: ptBR })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-medium">Manhã</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {morningSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="mb-2 font-medium">Tarde</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {afternoonSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            className="w-full"
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            {date && selectedTime && (
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Seus dados</CardTitle>
                  <CardDescription>
                    Preencha suas informações para confirmar o agendamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome completo</Label>
                        <Input
                          id="name"
                          placeholder="Digite seu nome"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          placeholder="(00) 00000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-600">
                        Você está agendando uma reunião para o dia{" "}
                        <strong>{format(date, "dd 'de' MMMM", { locale: ptBR })}</strong> às{" "}
                        <strong>{selectedTime}</strong>.
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Um link para a reunião no Microsoft Teams será enviado para o seu email.
                      </p>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Agendamento;
