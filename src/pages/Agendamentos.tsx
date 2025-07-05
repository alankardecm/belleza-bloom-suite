import { Calendar, Clock, FileText, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Agendamentos = () => {
  const agendamentos = [
    {
      id: 1,
      data: "2024-01-15",
      horario: "09:00",
      cliente: "Maria Silva",
      telefone: "(11) 99999-9999",
      servico: "Corte + Escova",
      preco: "R$ 120,00",
      status: "confirmado",
      profissional: "Ana Paula",
      observacoes: "Cliente prefere corte mais curto"
    },
    {
      id: 2,
      data: "2024-01-15",
      horario: "10:30",
      cliente: "Carla Santos",
      telefone: "(11) 88888-8888",
      servico: "Manicure + Pedicure",
      preco: "R$ 80,00",
      status: "em-andamento",
      profissional: "Beatriz",
      observacoes: "Esmalte vermelho"
    },
    {
      id: 3,
      data: "2024-01-15",
      horario: "14:00",
      cliente: "Fernanda Lima",
      telefone: "(11) 77777-7777",
      servico: "Coloração Completa",
      preco: "R$ 250,00",
      status: "agendado",
      profissional: "Ana Paula",
      observacoes: "Teste de mecha necessário"
    },
    {
      id: 4,
      data: "2024-01-15",
      horario: "15:30",
      cliente: "Juliana Costa",
      telefone: "(11) 66666-6666",
      servico: "Design de Sobrancelhas",
      preco: "R$ 45,00",
      status: "agendado",
      profissional: "Carla",
      observacoes: ""
    },
    {
      id: 5,
      data: "2024-01-15",
      horario: "17:00",
      cliente: "Patrícia Oliveira",
      telefone: "(11) 55555-5555",
      servico: "Hidratação + Escova",
      preco: "R$ 90,00",
      status: "pendente",
      profissional: "Ana Paula",
      observacoes: "Cabelo muito ressecado"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmado': return 'bg-beauty-lilac text-white';
      case 'em-andamento': return 'bg-beauty-rose text-white';
      case 'agendado': return 'bg-beauty-rose-light text-beauty-gray';
      case 'pendente': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmado': return 'Confirmado';
      case 'em-andamento': return 'Em Andamento';
      case 'agendado': return 'Agendado';
      case 'pendente': return 'Pendente';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Agendamentos</h1>
            <p className="text-muted-foreground">Gerencie todos os agendamentos do seu salão</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Buscar por cliente ou serviço..." 
              className="w-full sm:w-80"
            />
            <Button className="bg-gradient-beauty text-white hover:opacity-90 shadow-soft">
              Novo Agendamento
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Hoje
              </CardTitle>
              <Calendar className="w-4 h-4 text-beauty-lilac" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-beauty-lilac">agendamentos</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Esta Semana
              </CardTitle>
              <Clock className="w-4 h-4 text-beauty-rose" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">42</div>
              <p className="text-xs text-beauty-rose">agendamentos</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Taxa de Ocupação
              </CardTitle>
              <Percent className="w-4 h-4 text-beauty-lilac" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">89%</div>
              <p className="text-xs text-beauty-lilac">do horário disponível</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Faturamento Hoje
              </CardTitle>
              <FileText className="w-4 h-4 text-beauty-rose" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">R$ 585</div>
              <p className="text-xs text-beauty-rose">em 8 serviços</p>
            </CardContent>
          </Card>
        </div>

        {/* Agendamentos List */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">Agendamentos de Hoje</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {agendamentos.map((agendamento) => (
                <div key={agendamento.id} className="bg-white rounded-lg p-6 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-beauty-lilac font-bold text-lg">
                          {agendamento.horario}
                        </div>
                        <Badge className={getStatusColor(agendamento.status)}>
                          {getStatusText(agendamento.status)}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-semibold text-foreground text-lg">{agendamento.cliente}</p>
                          <p className="text-sm text-muted-foreground">{agendamento.telefone}</p>
                          <p className="text-sm text-beauty-lilac font-medium mt-1">
                            Profissional: {agendamento.profissional}
                          </p>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground">{agendamento.servico}</p>
                          <p className="text-beauty-rose font-semibold text-lg">{agendamento.preco}</p>
                          {agendamento.observacoes && (
                            <p className="text-sm text-muted-foreground italic mt-1">
                              Obs: {agendamento.observacoes}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col gap-2">
                      <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                        WhatsApp
                      </Button>
                      {agendamento.status === 'agendado' && (
                        <Button 
                          size="sm" 
                          className="bg-gradient-beauty text-white hover:opacity-90"
                        >
                          Confirmar
                        </Button>
                      )}
                      {agendamento.status === 'confirmado' && (
                        <Button 
                          size="sm" 
                          className="bg-beauty-rose text-white hover:opacity-90"
                        >
                          Iniciar
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <Calendar size={20} className="text-beauty-lilac" />
                <span className="text-sm">Ver Calendário</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <Clock size={20} className="text-beauty-rose" />
                <span className="text-sm">Reagendar</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <FileText size={20} className="text-beauty-lilac" />
                <span className="text-sm">Relatório</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <Percent size={20} className="text-beauty-rose" />
                <span className="text-sm">Lembretes</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Agendamentos;