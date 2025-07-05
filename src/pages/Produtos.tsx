import { Calendar, TrendingUp, LayoutDashboard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Produtos = () => {
  const { toast } = useToast();
  const produtos = [
    {
      id: 1,
      nome: "Shampoo Hidratante Premium",
      categoria: "Cuidados Capilares",
      preco: "R$ 89,90",
      estoque: 15,
      estoqueMinimo: 5,
      fornecedor: "Beauty Supply Co.",
      ultimaCompra: "2024-01-05",
      vendidos: 28,
      margem: "45%"
    },
    {
      id: 2,
      nome: "Esmalte Gel UV - Vermelho",
      categoria: "Unhas",
      preco: "R$ 24,50",
      estoque: 8,
      estoqueMinimo: 10,
      fornecedor: "Nail Pro",
      ultimaCompra: "2024-01-10",
      vendidos: 45,
      margem: "60%"
    },
    {
      id: 3,
      nome: "Creme Anti-idade Gold",
      categoria: "Facial",
      preco: "R$ 156,00",
      estoque: 22,
      estoqueMinimo: 8,
      fornecedor: "Skincare Elite",
      ultimaCompra: "2024-01-08",
      vendidos: 12,
      margem: "55%"
    },
    {
      id: 4,
      nome: "Tintura Permanente - Loiro",
      categoria: "Coloração",
      preco: "R$ 67,90",
      estoque: 3,
      estoqueMinimo: 5,
      fornecedor: "Color Master",
      ultimaCompra: "2024-01-12",
      vendidos: 31,
      margem: "40%"
    },
    {
      id: 5,
      nome: "Máscara Reconstrutora",
      categoria: "Cuidados Capilares",
      preco: "R$ 124,90",
      estoque: 18,
      estoqueMinimo: 6,
      fornecedor: "Hair Care Plus",
      ultimaCompra: "2024-01-07",
      vendidos: 22,
      margem: "48%"
    }
  ];

  const getEstoqueStatus = (estoque: number, minimo: number) => {
    if (estoque <= minimo) return { color: 'bg-destructive text-white', text: 'Baixo' };
    if (estoque <= minimo * 2) return { color: 'bg-beauty-rose text-white', text: 'Atenção' };
    return { color: 'bg-beauty-lilac text-white', text: 'Normal' };
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Produtos & Estoque</h1>
            <p className="text-muted-foreground">Controle seu inventário e otimize suas vendas</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              placeholder="Buscar produto..." 
              className="w-full sm:w-80"
            />
            <Button 
              className="bg-gradient-beauty text-white hover:opacity-90 shadow-soft"
              onClick={() => toast({ title: "Novo Produto", description: "Formulário de cadastro será aberto" })}
            >
              Novo Produto
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Produtos
              </CardTitle>
              <LayoutDashboard className="w-4 h-4 text-beauty-lilac" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">87</div>
              <p className="text-xs text-beauty-lilac">+5 este mês</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Estoque Baixo
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-beauty-rose" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-beauty-rose">produtos em alerta</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Valor do Estoque
              </CardTitle>
              <Calendar className="w-4 h-4 text-beauty-lilac" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">R$ 12.450</div>
              <p className="text-xs text-beauty-lilac">inventário total</p>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Margem Média
              </CardTitle>
              <Smartphone className="w-4 h-4 text-beauty-rose" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">52%</div>
              <p className="text-xs text-beauty-rose">de lucro</p>
            </CardContent>
          </Card>
        </div>

        {/* Produtos List */}
        <Card className="shadow-card bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">Inventário de Produtos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {produtos.map((produto) => {
                const estoqueStatus = getEstoqueStatus(produto.estoque, produto.estoqueMinimo);
                
                return (
                  <div key={produto.id} className="bg-white rounded-lg p-6 shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground text-lg">{produto.nome}</h3>
                          <Badge variant="outline" className="text-beauty-gray">
                            {produto.categoria}
                          </Badge>
                          <Badge className={estoqueStatus.color}>
                            {estoqueStatus.text}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Preço de Venda</p>
                            <p className="font-semibold text-beauty-lilac text-lg">{produto.preco}</p>
                            <p className="text-beauty-rose font-medium">Margem: {produto.margem}</p>
                          </div>
                          
                          <div>
                            <p className="text-muted-foreground">Estoque Atual</p>
                            <p className="font-semibold text-foreground text-lg">
                              {produto.estoque} unidades
                            </p>
                            <p className="text-muted-foreground">Mín: {produto.estoqueMinimo}</p>
                          </div>

                          <div>
                            <p className="text-muted-foreground">Performance</p>
                            <p className="font-semibold text-foreground">{produto.vendidos} vendidos</p>
                            <p className="text-muted-foreground text-xs">Última compra: {produto.ultimaCompra}</p>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mt-2">
                          Fornecedor: {produto.fornecedor}
                        </p>
                      </div>

                      <div className="flex flex-row lg:flex-col gap-2">
                        <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                          Editar
                        </Button>
                        <Button variant="outline" size="sm" className="hover:shadow-soft transition-all duration-300">
                          Histórico
                        </Button>
                        {produto.estoque <= produto.estoqueMinimo && (
                          <Button 
                            size="sm" 
                            className="bg-beauty-rose text-white hover:opacity-90"
                          >
                            Comprar
                          </Button>
                        )}
                        <Button 
                          size="sm" 
                          className="bg-gradient-beauty text-white hover:opacity-90"
                        >
                          Vender
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                <span className="text-sm">Lista de Compras</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <TrendingUp size={20} className="text-beauty-rose" />
                <span className="text-sm">Relatório Vendas</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <LayoutDashboard size={20} className="text-beauty-lilac" />
                <span className="text-sm">Categorias</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center space-y-2 hover:shadow-soft transition-all duration-300">
                <Smartphone size={20} className="text-beauty-rose" />
                <span className="text-sm">Inventário</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Produtos;