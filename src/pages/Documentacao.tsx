import { BookOpen, Calendar, Users, TrendingUp, Smartphone, Clock, CreditCard, Settings, HelpCircle, Search, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

const Documentacao = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const guias = [
    {
      icon: Calendar,
      title: "Agendamentos",
      description: "Como criar, gerenciar e organizar seus agendamentos",
      topics: [
        "Criar novo agendamento",
        "Confirmar agendamentos",
        "Reagendar clientes",
        "Cancelar agendamentos",
        "Visualizar agenda do dia"
      ]
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastro e gerenciamento completo da sua base de clientes",
      topics: [
        "Cadastrar novos clientes",
        "Histórico de atendimentos",
        "Preferências do cliente",
        "Sistema de fidelidade",
        "Aniversariantes do mês"
      ]
    },
    {
      icon: TrendingUp,
      title: "Relatórios Financeiros",
      description: "Controle completo das suas receitas e despesas",
      topics: [
        "Relatório diário de vendas",
        "Faturamento mensal",
        "Serviços mais vendidos",
        "Controle de gastos",
        "Metas e projeções"
      ]
    },
    {
      icon: Smartphone,
      title: "Integrações",
      description: "WhatsApp, Instagram e outras integrações sociais",
      topics: [
        "Conectar WhatsApp Business",
        "Configurar Instagram",
        "Mensagens automáticas",
        "Confirmações por WhatsApp",
        "Marketing digital"
      ]
    }
  ];

  const faq = [
    {
      pergunta: "Como faço para criar um novo agendamento?",
      resposta: "Para criar um novo agendamento, clique no botão 'Novo Agendamento' no dashboard ou vá para a seção Agendamentos e clique em '+'. Preencha os dados do cliente, selecione o serviço, data e horário desejado."
    },
    {
      pergunta: "Como posso cancelar ou reagendar um atendimento?",
      resposta: "Na sua agenda, clique no agendamento desejado. Você verá as opções para 'Reagendar' ou 'Cancelar'. Para reagendar, selecione a nova data e horário. Para cancelar, confirme a ação e opcionalmente adicione um motivo."
    },
    {
      pergunta: "Como configurar as notificações do WhatsApp?",
      resposta: "Vá em Configurações > Integrações > WhatsApp. Conecte sua conta do WhatsApp Business e ative as notificações automáticas. Você pode personalizar as mensagens de confirmação, lembretes e follow-up."
    },
    {
      pergunta: "Como visualizar o faturamento do mês?",
      resposta: "No dashboard principal, você verá o card 'Faturamento Mensal'. Para relatórios detalhados, vá em Relatórios e selecione o período desejado. Você pode filtrar por serviços, profissionais ou formas de pagamento."
    },
    {
      pergunta: "Como cadastrar um novo cliente?",
      resposta: "Vá para a seção Clientes e clique em 'Novo Cliente'. Preencha as informações básicas como nome, telefone, e-mail. Você também pode adicionar preferências, observações e histórico de atendimentos."
    },
    {
      pergunta: "Como funciona o sistema de fidelidade?",
      resposta: "O sistema de fidelidade acumula pontos a cada serviço realizado. Configure as regras em Configurações > Fidelidade. Seus clientes podem trocar pontos por descontos ou serviços gratuitos."
    },
    {
      pergunta: "Posso acessar o sistema pelo celular?",
      resposta: "Sim! Nossa plataforma é totalmente responsiva. Você pode acessar pelo navegador do seu celular ou tablet. Todas as funcionalidades estão disponíveis na versão mobile."
    },
    {
      pergunta: "Como fazer backup dos meus dados?",
      resposta: "Seus dados são automaticamente salvos em nuvem. Para exportar relatórios ou dados específicos, vá em Configurações > Exportar Dados. Você pode baixar relatórios em PDF ou planilhas Excel."
    }
  ];

  const filteredFaq = faq.filter(item => 
    item.pergunta.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.resposta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-beauty rounded-xl flex items-center justify-center shadow-soft">
              <BookOpen className="text-white" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Documentação</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo o que você precisa saber para usar sua plataforma BeautyManager com máxima eficiência
          </p>
        </div>

        {/* Quick Start */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <Clock className="text-beauty-lilac" size={24} />
              <span>Início Rápido</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-beauty-lilac text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground">Configure seu Perfil</h3>
                <p className="text-sm text-muted-foreground">Adicione informações do seu salão e configure suas preferências</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-beauty-rose text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground">Cadastre seus Serviços</h3>
                <p className="text-sm text-muted-foreground">Adicione todos os serviços que você oferece com preços e duração</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-beauty-lilac text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground">Faça seu Primeiro Agendamento</h3>
                <p className="text-sm text-muted-foreground">Cadastre um cliente e crie seu primeiro agendamento</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guias Principais */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Guias Completos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {guias.map((guia, index) => (
              <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-soft flex items-center justify-center">
                      <guia.icon className="text-beauty-lilac" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{guia.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{guia.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {guia.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-beauty-rose rounded-full" />
                        <span className="text-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4 hover:shadow-soft transition-all duration-300">
                    Ver Guia Completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Perguntas Frequentes</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Buscar nas perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>
          
          <Card className="shadow-card bg-gradient-card border-0">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-2">
                {filteredFaq.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-beauty-lilac/20 rounded-lg px-4">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="text-beauty-lilac mt-0.5" size={16} />
                        <span className="font-medium text-foreground">{item.pergunta}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-7">
                      <p className="text-muted-foreground leading-relaxed">{item.resposta}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {filteredFaq.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Nenhuma pergunta encontrada para "{searchTerm}"</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recursos Adicionais */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="text-beauty-lilac" size={20} />
                <span>Recursos Avançados</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">API e Integrações</span>
                  <Badge variant="secondary">Pro</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Relatórios Personalizados</span>
                  <Badge variant="secondary">Essencial</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Múltiplas Unidades</span>
                  <Badge variant="secondary">Pro</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Backup Automático</span>
                  <Badge className="bg-beauty-lilac text-white">Incluído</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="text-beauty-rose" size={20} />
                <span>Precisa de Ajuda?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-beauty-lilac" size={16} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">suporte@beautymanager.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-beauty-rose" size={16} />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-beauty-lilac" size={16} />
                  <div>
                    <p className="font-medium text-foreground">Horário de Atendimento</p>
                    <p className="text-sm text-muted-foreground">Seg-Sex: 8h às 18h</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-beauty text-white hover:opacity-90 mt-4">
                  Entrar em Contato
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <Card className="shadow-card bg-gradient-beauty border-0 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">💡 Dica Pro</h3>
            <p className="text-lg opacity-90 mb-4">
              Use as confirmações automáticas por WhatsApp para reduzir faltas em até 70%!
            </p>
            <p className="opacity-75">
              Configure em Integrações → WhatsApp → Mensagens Automáticas
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentacao;