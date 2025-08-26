// SRC/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import MenuEntradas from "./pages/MenuEntradas";
import MenuPlatos from "./pages/MenuPlatos";
import MenuBebidas from "./pages/MenuBebidas";
import MenuPostres from "./pages/MenuPostres";
import MenuParrilla from "./pages/MenuParrilla";
import MenuPicadas from "./pages/MenuPicadas";
import Gallery from "./pages/Gallery";
import Servicios from "./pages/Servicios";
import NotFound from "./pages/NotFound";
import MaintenanceNotice from "./pages/Maintenance";


const queryClient = new QueryClient();

export default function App() {
  const MAINTENANCE = import.meta.env.VITE_MAINTENANCE === "true";

  // 🔒 Modo mantenimiento global
  if (MAINTENANCE) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <MaintenanceNotice countdownMinutes={30} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // 🌐 App normal con rutas
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu/entradas" element={<MenuEntradas />} />
            <Route path="/menu/platos" element={<MenuPlatos />} />
            <Route path="/menu/picadas" element={<MenuPicadas />} />
            <Route path="/menu/parrilla" element={<MenuParrilla />} />
            <Route path="/menu/bebidas" element={<MenuBebidas />} />
            <Route path="/menu/postres" element={<MenuPostres />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/maintenance" element={<MaintenanceNotice countdownMinutes={30} />} />
            {/* catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
