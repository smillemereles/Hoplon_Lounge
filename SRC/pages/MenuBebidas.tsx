import { motion } from "framer-motion";
import HoplonNavigation from "@/components/HoplonNavigation";
import HoplonFooter from "@/components/HoplonFooter";

const bebidas = [
  {
    name: "Vega Sicilia Único 2010",
    price: "€180",
    ingredients: "Vino tinto reserva gran reserva, Ribera del Duero, madera noble"
  },
  {
    name: "Whisky Macallan 18 Años",
    price: "€45",
    ingredients: "Whisky escocés single malt, 18 años, barricas de roble jerez"
  },
  {
    name: "Gin Tonic Premium Hendrick's",
    price: "€18",
    ingredients: "Gin Hendrick's, tónica Fever-Tree, pepino, enebro, limón"
  },
  {
    name: "Champagne Dom Pérignon 2012",
    price: "€220",
    ingredients: "Champagne vintage, método champenoise, burbujas elegantes"
  },
  {
    name: "Old Fashioned de Autor",
    price: "€16",
    ingredients: "Bourbon premium, azúcar demerara, bitter de naranja, cereza"
  },
  {
    name: "Martini Dry Clásico",
    price: "€14",
    ingredients: "Gin premium, vermut seco, aceituna española, twist de limón"
  },
  {
    name: "Rioja Gran Reserva 2015",
    price: "€35",
    ingredients: "Tempranillo, crianza 24 meses, D.O.Ca. Rioja, taninos sedosos"
  },
  {
    name: "Manhattan Premium",
    price: "€18",
    ingredients: "Whisky americano, vermut rojo, bitter Angostura, cereza confitada"
  }
];

const MenuBebidas = () => {
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
              Bebidas
            </h1>
            <p className="text-xl text-hoplon-garnet font-medium">
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

export default MenuBebidas;