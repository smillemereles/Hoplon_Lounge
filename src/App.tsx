import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { usePageTracking } from "@/hooks/usePageTracking";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import MenuEntradas from "./pages/MenuEntradas";
import MenuPicadas from "./pages/MenuPicadas";
import MenuBebidas from "./pages/MenuBebidas";
import MenuPostres from "./pages/MenuPostres";
import Servicios from "./pages/Servicios";
import NotFound from "./pages/NotFound";
import MenuPlatos from "./pages/MenuPlatos";
import MenuParrilla from "./pages/MenuParrilla";
import ParaguayanNightShow from "./pages/ParaguayanNightShow";

const queryClient = new QueryClient();

// Componente interno para usar el hook de tracking
function AppRoutes() {
  usePageTracking();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu-entradas" element={<MenuEntradas />} />
        <Route path="/menu-picadas" element={<MenuPicadas />} />
        <Route path="/menu-bebidas" element={<MenuBebidas />} />
        <Route path="/menu-postres" element={<MenuPostres />} />
        <Route path="/menu-platos" element={<MenuPlatos />} />
        <Route path="/menu-parrilla" element={<MenuParrilla />} />
        <Route
          path="/paraguayan-night-show"
          element={<ParaguayanNightShow />}
        />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
