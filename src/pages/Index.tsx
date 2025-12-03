import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonHero from "@/components/HoplonHero";
import HoplonHistoria from "@/components/HoplonHistoria";
import HoplonMenuCards from "@/components/HoplonMenuCards";
import HoplonReserva from "@/components/HoplonReserva";
import HoplonFooter from "@/components/HoplonFooter";

const Index = () => {
  useScrollNavigation();

  return (
    <div className="min-h-screen bg-hoplon-black">
      <HoplonNavigation />
      <HoplonHero />
      <HoplonHistoria />
      <HoplonMenuCards />
      <HoplonReserva />
      <HoplonFooter />
    </div>
  );
};

export default Index;
