import { Calendar, TrendingUp, LayoutDashboard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isNewUser, setIsNewUser] = useState(true);
  
  // Para novos usuários, começamos com dados zerados
  const stats = [
    {
      title: "Faturamento Mensal",
      value: "R$ 0,00",
      change: "Comece agora!",
      icon: TrendingUp,
      color: "text-beauty-lilac"
    },
    {
      title: "Agendamentos Hoje",
      value: "0",
      change: "Cadastre agendamentos",
      icon: Calendar,
      color: "text-beauty-rose"
    },
    {
      title: "Clientes Ativos",
      value: "0",
      change: "Cadastre clientes",
      icon: LayoutDashboard,
      color: "text-beauty-lilac"
    },
    {
      title: "Taxa de Ocupação",
      value: "0%",
      change: "Inicie o trabalho",
      icon: Smartphone,
      color: "text-beauty-rose"
    }
  ];

  const agendamentosHoje = [];
  const servicosPopulares = [];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vindo ao BeautyManager! Configure seu salão e comece a gerenciar seus agendamentos.</p>
          </div>
          <Button 
            className="bg-gradient-beauty text-white hover:opacity-90 shadow-soft"
            onClick={() => toast({ title: "Novo Agendamento", description: "Funcionalidade em desenvolvimento" })}
          >
            Novo Agendamento
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-elegant transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`w-10 h-10 ${stat.color} bg-white rounded-lg shadow-soft flex items-center justify-center`}>
                  <stat.icon size={20} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-beauty-lilac">
                  <span className="text-beauty-lilac">{stat.change}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Agendamentos de Hoje */}
          <div className="lg:col-span-2">
            <Card className="shadow-card bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Agendamentos de Hoje</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {agendamentosHoje.length > 0 ? (
                    agendamentosHoje.map((agendamento, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-soft hover:shadow-card transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="text-beauty-lilac font-semibold text-lg">
                            {agendamento.horario}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{agendamento.cliente}</p>
                            <p className="text-sm text-muted-foreground">{agendamento.servico}</p>
                          </div>
                        </div>
                        <Badge 
                          className={`
                            ${agendamento.status === 'confirmado' ? 'bg-beauty-lilac text-white' : ''}
                            ${agendamento.status === 'em-andamento' ? 'bg-beauty-rose text-white' : ''}
                            ${agendamento.status === 'agendado' ? 'bg-beauty-rose-light text-beauty-gray' : ''}
                          `}
                        >
                          {agendamento.status === 'confirmado' && 'Confirmado'}
                          {agendamento.status === 'em-andamento' && 'Em Andamento'}
                          {agendamento.status === 'agendado' && 'Agendado'}
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">Nenhum agendamento para hoje</p>
                      <p className="text-sm text-muted-foreground/70">Comece cadastrando seus primeiros agendamentos</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Serviços Mais Populares */}
          <div>
            <Card className="shadow-card bg-gradient-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Serviços Populares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servicosPopulares.length > 0 ? (
                    servicosPopulares.map((servico, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-soft">
                        <div>
                          <p className="font-medium text-foreground text-sm">{servico.nome}</p>
                          <p className="text-xs text-muted-foreground">{servico.quantidade} serviços</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-beauty-lilac text-sm">{servico.receita}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <TrendingUp className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">Nenhum serviço cadastrado</p>
                      <p className="text-sm text-muted-foreground/70">Comece realizando seus primeiros atendimentos</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300"
                onClick={() => toast({ title: "Novo Agendamento", description: "Redirecionando para agendamentos..." })}
              >
                <Calendar size={24} className="text-beauty-lilac" />
                <span className="text-sm">Novo Agendamento</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300"
                onClick={() => toast({ title: "Cadastrar Cliente", description: "Redirecionando para clientes..." })}
              >
                <LayoutDashboard size={24} className="text-beauty-rose" />
                <span className="text-sm">Cadastrar Cliente</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300"
                onClick={() => toast({ title: "Relatórios", description: "Funcionalidade em desenvolvimento" })}
              >
                <TrendingUp size={24} className="text-beauty-lilac" />
                <span className="text-sm">Ver Relatórios</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300"
                onClick={() => toast({ title: "WhatsApp", description: "Integração em desenvolvimento" })}
              >
                <Smartphone size={24} className="text-beauty-rose" />
                <span className="text-sm">Integração WhatsApp</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;