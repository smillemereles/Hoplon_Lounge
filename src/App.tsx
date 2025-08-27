import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "@/lib/constants";
import Index from "./pages/Index";
import MenuEntradas from "./pages/MenuEntradas";
import MenuPlatos from "./pages/MenuPlatos";
import MenuBebidas from "./pages/MenuBebidas";
import MenuPostres from "./pages/MenuPostres";
import MenuParrilla from "./pages/MenuParrilla";
import MenuPicadas from "./pages/MenuPicadas";
import Gallery from "./pages/Gallery";
import Servicios from "./pages/Servicios";
import Maintenance from "./pages/Maintenance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Index />} />
          
          {/* Menu Routes */}
          <Route path={ROUTES.MENU.ENTRADAS} element={<MenuEntradas />} />
          <Route path={ROUTES.MENU.PICADAS} element={<MenuPicadas />} />
          <Route path={ROUTES.MENU.PLATOS} element={<MenuPlatos />} />
          <Route path={ROUTES.MENU.PARRILLA} element={<MenuParrilla />} />
          <Route path={ROUTES.MENU.BEBIDAS} element={<MenuBebidas />} />
          <Route path={ROUTES.MENU.POSTRES} element={<MenuPostres />} />
          
          {/* Other Routes */}
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.SERVICIOS} element={<Servicios />} />
          <Route path={ROUTES.MAINTENANCE} element={<Maintenance countdownMinutes={30} />} />
          
          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
