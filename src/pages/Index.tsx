import HoplonNavigation from "src/components/HoplonNavigation";
import HoplonHero from "src/components/HoplonHero";
import HoplonHistoria from "src/components/HoplonHistoria";
import HoplonMenuSemanal from "src/components/HoplonMenuSemanal";
import HoplonMenuCards from "src/components/HoplonMenuCards";
import HoplonReserva from "src/components/HoplonReserva";
import HoplonFooter from "src/components/HoplonFooter";

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
