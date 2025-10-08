import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const MenuCarnes = () => {
  return (
    <div className="min-h-screen bg-hoplon-black">
      <HoplonNavigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-cinzel text-hoplon-gold text-center mb-8">
            Menú de Carnes
          </h1>
          <p className="text-hoplon-white text-center">
            Próximamente disponible
          </p>
        </div>
      </section>
      <HoplonFooter />
    </div>
  );
};

export default MenuCarnes;
