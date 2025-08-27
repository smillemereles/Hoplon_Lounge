import { Toaster } from "src/components/ui/toaster";
import { Toaster as Sonner } from "src/components/ui/sonner";
import { TooltipProvider } from "src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MenuEntradas from "./pages/MenuEntradas";
import MenuPlatos from "./pages/MenuPlatos";
import MenuBebidas from "./pages/MenuBebidas";
import MenuPostres from "./pages/MenuPostres";
import Gallery from "./pages/Gallery";
import Servicios from "./pages/Servicios";
import NotFound from "./pages/NotFound";
import MenuParrilla from "./pages/MenuParrilla";
import MenuPicadas from "./pages/MenuPicadas";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu/entradas" element={<MenuEntradas />} />
          <Route path="/menu/platos" element={<MenuPlatos />} />
          <Route path="/menu/bebidas" element={<MenuBebidas />} />
          <Route path="/menu/postres" element={<MenuPostres />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/menu/parrilla" element={<MenuParrilla />} />
          <Route path="/menu/picadas" element={<MenuPicadas />} />
          r
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;