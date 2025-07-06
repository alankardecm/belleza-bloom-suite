import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [salonName, setSalonName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { user, signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let result;
      
      if (isLogin) {
        result = await signIn(email, password);
      } else {
        if (!salonName.trim()) {
          toast({
            title: "Erro",
            description: "Por favor, informe o nome do seu salão",
            variant: "destructive"
          });
          setLoading(false);
          return;
        }
        result = await signUp(email, password, salonName);
      }

      if (result.error) {
        let errorMessage = "Erro inesperado";
        
        if (result.error.message.includes('Invalid login credentials')) {
          errorMessage = "Email ou senha incorretos";
        } else if (result.error.message.includes('User already registered')) {
          errorMessage = "Este email já está cadastrado. Tente fazer login.";
        } else if (result.error.message.includes('Password should be at least 6 characters')) {
          errorMessage = "A senha deve ter pelo menos 6 caracteres";
        } else if (result.error.message.includes('Unable to validate email')) {
          errorMessage = "Email inválido";
        }

        toast({
          title: isLogin ? "Erro no Login" : "Erro no Cadastro",
          description: errorMessage,
          variant: "destructive"
        });
      } else {
        if (!isLogin) {
          toast({
            title: "Cadastro realizado!",
            description: "Bem-vindo ao BeautyManager! Você será redirecionado em instantes.",
          });
        } else {
          toast({
            title: "Login realizado!",
            description: "Bem-vindo de volta!",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-beauty flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-elegant mb-4">
            <Sparkles className="w-8 h-8 text-beauty-lilac" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">BeautyManager</h1>
          <p className="text-white/80">Gerencie seu salão com elegância</p>
        </div>

        <Card className="shadow-elegant border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-foreground">
              {isLogin ? 'Entrar na sua conta' : 'Criar nova conta'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={isLogin ? 'login' : 'signup'} onValueChange={(value) => setIsLogin(value === 'login')}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Cadastrar</TabsTrigger>
              </TabsList>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <TabsContent value="login" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white border-beauty-lilac-light focus:border-beauty-lilac"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="bg-white border-beauty-lilac-light focus:border-beauty-lilac pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4 mt-0">
                  <div className="space-y-2">
                    <Label htmlFor="salonName">Nome do Salão</Label>
                    <Input
                      id="salonName"
                      type="text"
                      placeholder="Salão Bella Vita"
                      value={salonName}
                      onChange={(e) => setSalonName(e.target.value)}
                      required={!isLogin}
                      className="bg-white border-beauty-lilac-light focus:border-beauty-lilac"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white border-beauty-lilac-light focus:border-beauty-lilac"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Senha</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Configure uma senha (min. 6 caracteres)"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                        className="bg-white border-beauty-lilac-light focus:border-beauty-lilac pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-beauty text-white hover:opacity-90 shadow-soft" 
                  disabled={loading}
                >
                  {loading ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Criar Conta')}
                </Button>
              </form>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            Ao continuar, você concorda com nossos termos de uso
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;