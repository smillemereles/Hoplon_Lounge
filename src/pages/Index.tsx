import { Helmet } from "react-helmet";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonHero from "@/components/HoplonHero";
import HoplonHistoria from "@/components/HoplonHistoria";
import HoplonMenuSemanal from "@/components/HoplonMenuSemanal";
import HoplonMenuCards from "@/components/HoplonMenuCards";
import HoplonReserva from "@/components/HoplonReserva";
import HoplonFooter from "@/components/HoplonFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Hoplon Lounge – Restaurante en Ciudad del Este</title>
        <meta
          name="description"
          content="Experiencias únicas, coctelería espartana y shows en Ciudad del Este. Reserva tu mesa en Hoplon Lounge."
        />
        <meta
          name="keywords"
          content="bar en Ciudad del Este, coctelería, restaurante Paraguay, shows en vivo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Hoplon Lounge" />
        <meta
          property="og:title"
          content="Hoplon Lounge – Restaurante en Ciudad del Este"
        />
        <meta
          property="og:description"
          content="Experiencias únicas, coctelería espartana y shows en Ciudad del Este."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hoplon-lounge.vercel.app" />
        <meta
          property="og:image"
          content="https://hoplon-lounge.vercel.app/preview.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_PY" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hoplon Lounge – Restaurante en Ciudad del Este"
        />
        <meta
          name="twitter:description"
          content="Experiencias únicas, coctelería espartana y shows en Ciudad del Este."
        />
        <meta
          name="twitter:image"
          content="https://hoplon-lounge.vercel.app/preview.jpg"
        />
      </Helmet>
      <HoplonNavigation />
      <HoplonHero />
      <HoplonHistoria />
      <HoplonMenuSemanal />
      <HoplonMenuCards />
      <HoplonReserva />
      <HoplonFooter />
    </div>
  );
};

export default Index;
