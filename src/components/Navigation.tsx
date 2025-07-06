import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Calendar, TrendingUp, LayoutDashboard, Smartphone, BookOpen, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { title: "Agendamentos", path: "/agendamentos", icon: Calendar },
    { title: "Clientes", path: "/clientes", icon: Smartphone },
    { title: "Produtos", path: "/produtos", icon: TrendingUp },
    { title: "Documentação", path: "/documentacao", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Não mostrar navegação na página inicial ou de auth  
  if (location.pathname === "/" || location.pathname === "/auth") {
    return null;
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-gradient-card border-b shadow-soft z-50 h-16">
        <div className="flex items-center justify-between px-4 h-full">
          <h2 className="text-xl font-bold text-beauty-lilac">BeautyManager</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-beauty-lilac-light"
          >
            {collapsed ? "☰" : "✕"}
          </Button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 h-full bg-gradient-card border-r shadow-soft transition-all duration-300 z-40",
        "md:top-0",
        "max-md:top-16",
        collapsed && "max-md:-translate-x-full",
        collapsed ? "md:w-16" : "md:w-64",
        "max-md:w-64"
      )}>
        {/* Desktop Header */}
        <div className="hidden md:block p-4 border-b">
          <div className="flex items-center justify-between">
            {!collapsed && (
              <h2 className="text-xl font-bold text-beauty-lilac">BeautyManager</h2>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-beauty-lilac-light"
            >
              {collapsed ? "→" : "←"}
            </Button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:shadow-soft",
                isActive(item.path)
                  ? "bg-gradient-beauty text-white shadow-soft"
                  : "text-foreground hover:bg-beauty-lilac-light"
              )}
            >
              <item.icon size={20} />
              {(!collapsed || window.innerWidth < 768) && (
                <span className="font-medium">{item.title}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Info */}
        {(!collapsed || window.innerWidth < 768) && (
          <div className="absolute bottom-4 left-4 right-4 space-y-3">
            <div className="bg-white rounded-lg p-3 shadow-soft">
              <p className="font-semibold text-foreground text-sm">
                {user?.email || 'Usuário'}
              </p>
              <p className="text-xs text-muted-foreground">Plano Essencial</p>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => signOut()}
              className="w-full flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
            >
              <LogOut size={16} />
              Sair
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Overlay */}
      {!collapsed && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
};

export default Navigation;