import { motion } from "framer-motion";
import HoplonNavigation from "src/components/HoplonNavigation";
import HoplonFooter from "src/components/HoplonFooter";

const platos = [
   {
    name: "Pechuga de Pollo Marinada, en Colchón de Vegetales",
    price: "Gs.40.000",
    ingredients: "Pechuga de pollo marinada con especias nobles, asada al punto y servida sobre un colchón de vegetales salteados. Ligero, sabroso y con el equilibrio de un guerrero."
  },
  {
    name: "Lomo de Perseo",
    price: "Gs.90.000",
    ingredients: "Medallón de lomo a la parrilla, tierno y jugoso, servido sobre un cremoso aligot de mandioca. Este pure excepcional, elaborado con mandioca y una mezcla rica de quesos, ofrece una textura elástica y un sabor que eleva la experiencia. Perseo tal vez haya vencido a Medusa y Andrómeda. Valiente y astuto, siempre luchó con honor y propósito."
  },
  {
    name: "Lachopp (Milanesa) de Ares, con Patatas y Morrones",
    price: "Gs.45.000",
    ingredients: "Milanesa jugosa española de filete de ternera relleno con jamón y queso intenso, empanizado y frita hasta alcanzar su color doradísimo. Se sirve con patatas doradas y morrones asados. Un plato que lleva el nombre de Ares por su fuerza, intensidad y su coraza. *Pita, Dios de la guerra, era temido hasta por los campos de batalla. Impulsivo, feroz y apasionado, simboliza la fuerza bruta y el coraje sin límites*"
  },
  {
    name: "Salmón con Puré Cremoso de Zapallo",
    price: "Gs.50.000",
    ingredients: "Salmón fresco sobre cama de puré cremoso de zapallo butternut, terminado con hierbas aromáticas y un toque de limón. Una combinación armoniosa que celebra los sabores de temporada."
  }
];

const MenuPlatos = () => {
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
              PLATOS PRINCIPALES
            </h1>
            <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium max-w-2xl mx-auto">
              Carnes y pescados de la más alta calidad
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {platos.map((item, index) => (
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

export default MenuPlatos;