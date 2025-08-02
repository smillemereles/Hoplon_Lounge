import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const platos = [
  {
    name: "Chuletón de Buey Madurado 60 Días",
    price: "€52",
    ingredients: "1.2kg de chuletón madurado en cámara, sal de Cádiz, aceite de oliva virgen extra"
  },
  {
    name: "Wagyu Español A5",
    price: "€68",
    ingredients: "Wagyu español grado A5, flor de sal, aceite de trufa negra, verduras de temporada"
  },
  {
    name: "Cordero Lechal Asado al Horno",
    price: "€42",
    ingredients: "Paletilla de cordero lechal, hierbas aromáticas, ajo confitado, jugo natural"
  },
  {
    name: "Rodaballo Salvaje del Cantábrico",
    price: "€38",
    ingredients: "Rodaballo salvaje, espuma de mariscos, verduras de huerta, aceite de perejil"
  },
  {
    name: "Secreto Ibérico de Bellota",
    price: "€36",
    ingredients: "Secreto ibérico bellota, reducción de vino tinto, setas de temporada"
  },
  {
    name: "Lubina en Costra de Sal",
    price: "€34",
    ingredients: "Lubina salvaje, costra de sal marina, limón confitado, aceite de hierbas"
  },
  {
    name: "Cochinillo Segoviano Confitado",
    price: "€45",
    ingredients: "Cochinillo segoviano, costra de romero, jugo natural, patatas panadera"
  },
  {
    name: "Rape en Salsa Verde",
    price: "€32",
    ingredients: "Rape fresco, almejas, espárragos verdes, salsa verde tradicional"
  }
];

const MenuPlatos = () => {
  return (
    <div className="min-h-screen bg-hoplon-white">
      <HoplonNavigation />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-hoplon-black mb-4">
              Platos Principales
            </h1>
            <p className="text-xl text-hoplon-garnet font-medium">
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
                  <div className="border-b border-hoplon-gold/30 pb-6 mb-6 group-hover:border-hoplon-gold transition-colors duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-serif font-semibold text-hoplon-black group-hover:text-hoplon-garnet transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-hoplon-gold flex-shrink-0 ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
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