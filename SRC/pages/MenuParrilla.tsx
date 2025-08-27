import { motion } from "framer-motion";
import HoplonNavigation from "src/components/HoplonNavigation";
import HoplonFooter from "src/components/HoplonFooter";

const parrilla = [
   {
    name: "Mix de Chorizos y Chipa Guazú Cremoso",
    price: "Gs.60.000",
    ingredients: "Tres chorizos asados, intensos y ahumados, acompañados por una porción de chipa guazú cremosa que une la dulzura del choclo con la riqueza del queso Paraguayo. Una combinación clásica que reconforta y conquista."
  },
  {
    name: "Ojo de Bife y Vegetales Asados",
    price: "Gs.80.000",
    ingredients: "Corte generoso de ojo de bife de 300gr, sellado a la parrilla para lograr una jugosidad profunda. Se acompaña de vegetales frescos asados al fuego. Una porción individual para los que respetan la carne... y la tratan como se merece."
  },
  {
    name: "Picaña, Papas Fritas y Ensalada Verde",
    price: "Gs.100.000",
    ingredients: "Picaña jugosa, cocinada al punto y cortada en finas fetas para realzar su sabor. Acompañada de papas fritas crujientes y una ensalada verde fresca. Una combinación simple, precisa y fiel al fuego."
  },
  {
    name: "Parrilla Hoplon Familiar",
    price: "Gs.215.000",
    ingredients: "Tres cortes jugosos de picaña, chorizo y chorizos parrilleros, sellados a la brasa hasta alcanzar su punto de gloria. Se acompañan con arroz pilaf, papas fritas doradas, ensalada rusa y salsas tradicionales: chimichurri, criolla y picante. Una alianza de fuego y sabor para conquistar la mesa."
  }
];
const MenuParrilla = () => {
  return (
    <div className="min-h-screen bg-hoplon-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-hoplon-black via-gray-900 to-hoplon-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
        <div className="w-full h-full bg-hoplon-gold rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
        <div className="w-full h-full bg-hoplon-garnet rounded-full blur-xl"></div>
      </div>
      
      <HoplonNavigation />
      
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-cinzel font-bold text-hoplon-white mb-6 tracking-wider">
              SABORES A LA PARILLA
            </h1>
            <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium max-w-2xl mx-auto">
                Carnes y pescados de la más alta calidad
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {parrilla.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-hoplon-black/40 backdrop-blur-sm border border-hoplon-gold/20 rounded-lg p-6 hover:border-hoplon-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-hoplon-gold/20">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-cinzel font-semibold text-hoplon-white group-hover:text-hoplon-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-hoplon-gold flex-shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.ingredients}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HoplonFooter />
    </div>
  );
};

export default MenuParrilla;