import { Calendar, TrendingUp, LayoutDashboard, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Produtos = () => {
  const { toast } = useToast();
  
  // Para novos usuários, começamos com dados zerados
  const produtos = [];

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
              <div className="text-2xl font-bold text-foreground">0</div>
              <p className="text-xs text-beauty-rose">produtos</p>
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
              <div className="text-2xl font-bold text-foreground">0</div>
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
              <div className="text-2xl font-bold text-foreground">R$ 0,00</div>
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
              <div className="text-2xl font-bold text-foreground">0%</div>
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
              {produtos.length > 0 ? (
                produtos.map((produto) => {
                  const estoqueStatus = getEstoqueStatus(produto.estoque, produto.estoqueMinimo);
                  
                  return (
                    <div key={produto.id} className="bg-white rounded-lg p-6 shadow-soft hover:shadow-card transition-all duration-300">
                      {/* ... existing product content ... */}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8">
                  <LayoutDashboard className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-muted-foreground">Nenhum produto cadastrado</p>
                  <p className="text-sm text-muted-foreground/70">Comece cadastrando seus primeiros produtos</p>
                </div>
              )}
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