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
