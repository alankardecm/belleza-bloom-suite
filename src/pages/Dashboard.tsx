import { Calendar, TrendingUp, LayoutDashboard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  // Dados de exemplo
  const stats = [
    {
      title: "Faturamento Mensal",
      value: "R$ 18.450",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-beauty-lilac"
    },
    {
      title: "Agendamentos Hoje",
      value: "8",
      change: "+2",
      icon: Calendar,
      color: "text-beauty-rose"
    },
    {
      title: "Clientes Ativos",
      value: "127",
      change: "+8",
      icon: LayoutDashboard,
      color: "text-beauty-lilac"
    },
    {
      title: "Taxa de Ocupação",
      value: "89%",
      change: "+5%",
      icon: Smartphone,
      color: "text-beauty-rose"
    }
  ];

  const agendamentosHoje = [
    { horario: "09:00", cliente: "Maria Silva", servico: "Corte + Escova", status: "confirmado" },
    { horario: "10:30", cliente: "Ana Santos", servico: "Manicure", status: "em-andamento" },
    { horario: "14:00", cliente: "Carla Rodrigues", servico: "Coloração", status: "agendado" },
    { horario: "15:30", cliente: "Fernanda Lima", servico: "Hidratação", status: "agendado" },
    { horario: "17:00", cliente: "Juliana Costa", servico: "Design de Sobrancelhas", status: "agendado" }
  ];

  const servicosPopulares = [
    { nome: "Corte + Escova", quantidade: 45, receita: "R$ 4.950" },
    { nome: "Manicure", quantidade: 38, receita: "R$ 1.520" },
    { nome: "Design de Sobrancelhas", quantidade: 32, receita: "R$ 1.280" },
    { nome: "Coloração", quantidade: 18, receita: "R$ 3.600" },
    { nome: "Hidratação", quantidade: 15, receita: "R$ 1.125" }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Bem-vinda de volta! Aqui está um resumo do seu negócio hoje.</p>
          </div>
          <Button className="bg-gradient-beauty text-white hover:opacity-90 shadow-soft">
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
                  <span className="text-beauty-lilac">{stat.change}</span> em relação ao mês anterior
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
                  {agendamentosHoje.map((agendamento, index) => (
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
                  ))}
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
                  {servicosPopulares.map((servico, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-soft">
                      <div>
                        <p className="font-medium text-foreground text-sm">{servico.nome}</p>
                        <p className="text-xs text-muted-foreground">{servico.quantidade} serviços</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-beauty-lilac text-sm">{servico.receita}</p>
                      </div>
                    </div>
                  ))}
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
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <Calendar size={24} className="text-beauty-lilac" />
                <span className="text-sm">Novo Agendamento</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <LayoutDashboard size={24} className="text-beauty-rose" />
                <span className="text-sm">Cadastrar Cliente</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <TrendingUp size={24} className="text-beauty-lilac" />
                <span className="text-sm">Ver Relatórios</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
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