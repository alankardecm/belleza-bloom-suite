import { Calendar, TrendingUp, LayoutDashboard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const Clientes = () => {
  const { toast } = useToast();
  const clientes = [
    {
      id: 1,
      nome: "Maria Silva",
      telefone: "(11) 99999-9999",
      email: "maria@email.com",
      aniversario: "15/03",
      ultimoServico: "2024-01-10",
      totalGasto: "R$ 1.250,00",
      pontosFidelidade: 125,
      preferencias: ["Corte moderno", "Escova modeladora"],
      status: "VIP",
      proximoAgendamento: "2024-01-20"
    },
    {
      id: 2,
      nome: "Ana Santos",
      telefone: "(11) 88888-8888",
      email: "ana@email.com",
      aniversario: "22/07",
      ultimoServico: "2024-01-12",
      totalGasto: "R$ 890,00",
      pontosFidelidade: 89,
      preferencias: ["Manicure francesa", "Hidratação"],
      status: "Regular",
      proximoAgendamento: ""
    },
    {
      id: 3,
      nome: "Carla Rodrigues",
      telefone: "(11) 77777-7777",
      email: "carla@email.com",
      aniversario: "05/12",
      ultimoServico: "2024-01-08",
      totalGasto: "R$ 2.150,00",
      pontosFidelidade: 215,
      preferencias: ["Coloração loira", "Tratamentos capilares"],
      status: "Premium",
      proximoAgendamento: "2024-01-18"
    },
    {
      id: 4,
      nome: "Fernanda Lima",
      telefone: "(11) 66666-6666",
      email: "fernanda@email.com",
      aniversario: "30/09",
      ultimoServico: "2024-01-14",
      totalGasto: "R$ 450,00",
      pontosFidelidade: 45,
      preferencias: ["Design de sobrancelhas", "Limpeza de pele"],
      status: "Novo",
      proximoAgendamento: "2024-01-25"
    },
    {
      id: 5,
      nome: "Juliana Costa",
      telefone: "(11) 55555-5555",
      email: "juliana@email.com",
      aniversario: "18/04",
      ultimoServico: "2024-01-11",
      totalGasto: "R$ 780,00",
      pontosFidelidade: 78,
      preferencias: ["Massagem relaxante", "Tratamentos faciais"],
      status: "Regular",
      proximoAgendamento: ""
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Premium': return 'bg-beauty-lilac text-white';
      case 'VIP': return 'bg-gradient-beauty text-white';
      case 'Regular': return 'bg-beauty-rose-light text-beauty-gray';
      case 'Novo': return 'bg-beauty-rose text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getInitials = (nome: string) => {
    return nome.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
            <p className="text-muted-foreground">Gerencie seu relacionamento com os clientes</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Buscar cliente..." 
              className="w-full sm:w-80"
            />
            <Button 
              className="bg-gradient-beauty text-white hover:opacity-90 shadow-soft"
              onClick={() => toast({ title: "Novo Cliente", description: "Formulário de cadastro será aberto" })}
            >
              Novo Cliente
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Clientes
              </CardTitle>
              <LayoutDashboard className="w-4 h-4 text-beauty-lilac" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">127</div>
              <p className="text-xs text-beauty-lilac">+8 este mês</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Clientes VIP
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-beauty-rose" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">23</div>
              <p className="text-xs text-beauty-rose">18% do total</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Aniversariantes
              </CardTitle>
              <Calendar className="w-4 h-4 text-beauty-lilac" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-beauty-lilac">neste mês</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Ticket Médio
              </CardTitle>
              <Smartphone className="w-4 h-4 text-beauty-rose" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">R$ 145</div>
              <p className="text-xs text-beauty-rose">por atendimento</p>
            </CardContent>
          </Card>
        </div>

        {/* Clientes List */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">Lista de Clientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientes.map((cliente) => (
                <div key={cliente.id} className="bg-white rounded-lg p-6 shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-gradient-beauty text-white font-semibold">
                          {getInitials(cliente.nome)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground text-lg">{cliente.nome}</h3>
                          <Badge className={getStatusColor(cliente.status)}>
                            {cliente.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{cliente.telefone}</p>
                        <p className="text-sm text-muted-foreground">{cliente.email}</p>
                      </div>
                    </div>

                    <div className="flex-1 grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Último Serviço</p>
                        <p className="font-medium text-foreground">{cliente.ultimoServico}</p>
                        <p className="text-beauty-rose font-semibold">{cliente.totalGasto}</p>
                      </div>
                      
                      <div>
                        <p className="text-muted-foreground">Pontos Fidelidade</p>
                        <p className="font-medium text-beauty-lilac text-lg">{cliente.pontosFidelidade} pts</p>
                        <p className="text-muted-foreground">Aniversário: {cliente.aniversario}</p>
                      </div>

                      <div>
                        <p className="text-muted-foreground">Preferências</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {cliente.preferencias.map((pref, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {pref}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col gap-2">
                      <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                        Ver Perfil
                      </Button>
                      <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                        WhatsApp
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-gradient-beauty text-white hover:opacity-90"
                      >
                        Agendar
                      </Button>
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
                <span className="text-sm">Aniversariantes</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <TrendingUp size={20} className="text-beauty-rose" />
                <span className="text-sm">Programa Fidelidade</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <LayoutDashboard size={20} className="text-beauty-lilac" />
                <span className="text-sm">Relatório Clientes</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <Smartphone size={20} className="text-beauty-rose" />
                <span className="text-sm">Campanha Marketing</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Clientes;