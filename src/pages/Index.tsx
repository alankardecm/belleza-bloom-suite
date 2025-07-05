import { Calendar, TrendingUp, LayoutDashboard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-beauty.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative bg-gradient-beauty">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Transforme seu Negócio de Beleza
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
                A plataforma completa para gestão de salões, clínicas estéticas e profissionais da beleza
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-elegant hover:shadow-card transition-all duration-300">
                    Começar Teste Gratuito
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300">
                    Ver Demonstração
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Tudo que você precisa em uma só plataforma
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simplifique sua rotina e maximize seus resultados com nossas ferramentas inteligentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Agendamento Inteligente",
                description: "Sistema completo com confirmações automáticas e lembretes via WhatsApp",
                color: "text-beauty-lilac"
              },
              {
                icon: TrendingUp,
                title: "Controle Financeiro",
                description: "Relatórios detalhados, controle de receitas e despesas em tempo real",
                color: "text-beauty-rose"
              },
              {
                icon: LayoutDashboard,
                title: "CRM Avançado",
                description: "Histórico completo dos clientes, preferências e sistema de fidelidade",
                color: "text-beauty-lilac"
              },
              {
                icon: Smartphone,
                title: "Integração Social",
                description: "Conecte WhatsApp e Instagram para atendimento direto e marketing",
                color: "text-beauty-rose"
              }
            ].map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 group hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 ${feature.color} bg-white rounded-2xl shadow-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                business: "Estúdio Bella Vita",
                content: "Desde que comecei a usar a plataforma, meu faturamento aumentou 40%. O sistema de agendamentos é perfeito!",
                rating: 5
              },
              {
                name: "Ana Santos",
                business: "Clínica Renascer",
                content: "A integração com WhatsApp revolucionou meu atendimento. Não consigo mais trabalhar sem essa ferramenta.",
                rating: 5
              },
              {
                name: "Carla Rodrigues",
                business: "Salão Glamour",
                content: "O controle financeiro me deu uma visão clara do negócio. Agora sei exatamente onde investir.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="shadow-card bg-gradient-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-beauty-lilac text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-beauty-gray text-sm">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Planos que se adaptam ao seu negócio
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece grátis e cresça conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Teste Gratuito",
                price: "R$ 0",
                period: "/15 dias",
                features: [
                  "Até 50 agendamentos",
                  "5 clientes cadastrados",
                  "Relatórios básicos",
                  "Suporte por email"
                ],
                popular: false,
                cta: "Começar Agora"
              },
              {
                name: "Plano Essencial",
                price: "R$ 97",
                period: "/mês",
                features: [
                  "Agendamentos ilimitados",
                  "CRM completo",
                  "Integração WhatsApp",
                  "Relatórios avançados",
                  "Sistema de fidelidade",
                  "Suporte prioritário"
                ],
                popular: true,
                cta: "Mais Popular"
              },
              {
                name: "Plano Pro",
                price: "R$ 197",
                period: "/mês",
                features: [
                  "Tudo do Essencial",
                  "Múltiplas unidades",
                  "API personalizada",
                  "Integração Instagram",
                  "Consultor dedicado",
                  "Treinamento personalizado"
                ],
                popular: false,
                cta: "Máxima Performance"
              }
            ].map((plan, index) => (
              <Card key={index} className={`shadow-card border-0 relative overflow-hidden hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'bg-gradient-beauty text-white transform scale-105' : 'bg-gradient-card'
              }`}>
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-white text-beauty-lilac">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-white opacity-80' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-center ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                        <span className={`w-2 h-2 rounded-full mr-3 ${plan.popular ? 'bg-white' : 'bg-beauty-lilac'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/dashboard">
                    <Button 
                      className={`w-full text-lg py-3 ${
                        plan.popular 
                          ? 'bg-white text-beauty-lilac hover:bg-white/90' 
                          : 'bg-gradient-beauty text-white hover:opacity-90'
                      } transition-all duration-300`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-beauty">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Junte-se a mais de 10.000 profissionais que já revolucionaram seus negócios de beleza
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-xl px-12 py-4 shadow-elegant hover:shadow-card transition-all duration-300">
                Começar Teste Gratuito de 15 Dias
              </Button>
            </Link>
            <p className="text-sm mt-4 opacity-70">
              Sem cartão de crédito • Cancelamento a qualquer momento
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-beauty-lilac mb-4">BeautyManager</h3>
            <p className="text-muted-foreground mb-6">
              A plataforma completa para gestão de negócios de beleza
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-beauty-lilac transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-beauty-lilac transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-beauty-lilac transition-colors">
                Suporte
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              © 2024 BeautyManager. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;