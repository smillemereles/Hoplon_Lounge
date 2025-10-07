import { motion } from "framer-motion";
import HoplonNavigation from "src/components/HoplonNavigation";
import HoplonFooter from "src/components/HoplonFooter";

const bebidas = [
 {
    name: "Caipirinha",
    price: "30.000Gs",
    ingredients: "La esencia de la costa carioca brasilera: cachaza mezclada a la cachaça con un galope embriagador de menta con la brisa ácida de limón. Resultado: los sabores auténticos clásicos sobre un trago de RG."
  },
  {
    name: "Daiquiri Frozen de Frutilla",
    price: "35.000Gs",
    ingredients: "Un clásico reverdado: la dulzura de las frutillas frescas se fusiona con la acidez perfecta de la lima y la fuerza sutil del ron blanco. Servido con hielo fracturado, sabor perfecto para los amantes de los momentos frescos y exquisitos."
  },
  {
    name: "Piña Colada",
    price: "35.000Gs",
    ingredients: "Descubre el misterio de un clásico tropical: cremoso... y piña vibrante se fusionan con el aroma del coco tostado. Luces de coco y ron cristalino coronan esta experiencia refrescante."
  },
  {
    name: "Moscow Mule",
    price: "45.000Gs",
    ingredients: "Vodka, jengibre picante y cítrico en una mezcla refrescante y vibrante. Servido en vaso de cobre con menta y naranja deshidratada. Una experiencia única para conquistar la noche."
  },
  {
    name: "Aperol Spritz Premium",
    price: "35.000Gs",
    ingredients: "Aperol Spritz Premium: vibrante rebarbado con un toque de naranja fresca decorada con frutas frescas como frambuesa, durazno, lima y menta, en una copa balanceada y llamativa."
  },
  {
    name: "Mocktail (Bebida Sin Alcohol)",
    price: "30.000Gs",
    ingredients: "El Néctar Helado de la Victoria celebra sus frutos: Sprite con menta fresca, frozen de mango, frambuesas y limón. Refrescante y vibrante, es el brindis especial por Esparta de corona con abanico de mango y cereza, ofreciendo sabor más fresco del día."
  },
  {
    name: "Gin Tónico Cítrico",
    price: "30.000Gs",
    ingredients: "La frescura del gin realzada con vibrantes notas de cítricos. Un clásico revitalizado. Servido con lima, ralladura de naranja, una rama de romero, un cóctel refrescante y aromático."
  }
];

const MenuBebidas = () => {
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
              BEBIDAS
            </h1>
            <div className="w-24 h-1 bg-hoplon-gold mx-auto mb-6"></div>
            <p className="text-xl text-hoplon-gold font-medium max-w-2xl mx-auto">
              Vinos, cocteles y destilados de primera calidad
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {bebidas.map((item, index) => (
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

export default MenuBebidas;
