import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// ⚠️ Usa imports relativos para evitar problemas de alias en Vercel (case-sensitive)
const Index = lazy(() => import("./pages/Index"));
const MenuEntradas = lazy(() => import("./pages/MenuEntradas"));
const MenuPlatos = lazy(() => import("./pages/MenuPlatos"));
const MenuBebidas = lazy(() => import("./pages/MenuBebidas"));
const MenuPostres = lazy(() => import("./pages/MenuPostres"));
const MenuParrilla = lazy(() => import("./pages/MenuParrilla"));
const MenuPicadas = lazy(() => import("./pages/MenuPicadas"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Servicios = lazy(() => import("./pages/Servicios"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Si tu Maintenance exporta default:
import MaintenanceNotice from "./pages/Maintenance";
// Si exportaras named, usarías: import { MaintenanceNotice } from "./pages/Maintenance";

function Loader() {
  return (
    <div className="min-h-screen grid place-items-center text-white/80">
      <div className="text-center">
        <p className="text-lg">Cargando…</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Index />} />

        {/* Menú */}
        <Route path="/menu/entradas" element={<MenuEntradas />} />
        <Route path="/menu/platos" element={<MenuPlatos />} />
        <Route path="/menu/picadas" element={<MenuPicadas />} />
        <Route path="/menu/parrilla" element={<MenuParrilla />} />
        <Route path="/menu/bebidas" element={<MenuBebidas />} />
        <Route path="/menu/postres" element={<MenuPostres />} />

        {/* Otras secciones */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/servicios" element={<Servicios />} />

        {/* Mantenimiento (ruta directa) */}
        <Route
          path="/maintenance"
          element={<MaintenanceNotice countdownMinutes={30} />}
        />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}