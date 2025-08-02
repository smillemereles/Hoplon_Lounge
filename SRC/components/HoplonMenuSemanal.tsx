import { motion } from "framer-motion";

const menuItems = [
  {
    name: "Chuletón de Buey Madurado",
    price: "€45",
    ingredients: "1kg de chuletón madurado 45 días, sal de Cádiz, aceite de oliva virgen extra"
  },
  {
    name: "Cordero Lechal Asado",
    price: "€38",
    ingredients: "Paletilla de cordero lechal, hierbas de la sierra, ajo confitado"
  },
  {
    name: "Pulpo a la Gallega Premium",
    price: "€32",
    ingredients: "Pulpo de ría, patatas cachelo, pimentón de La Vera, aceite de oliva"
  },
  {
    name: "Ibérico de Bellota",
    price: "€42",
    ingredients: "Secreto ibérico de bellota, reducción de vino tinto, setas de temporada"
  },
  {
    name: "Rodaballo Salvaje",
    price: "€36",
    ingredients: "Rodaballo salvaje del Cantábrico, espuma de mariscos, verduras de huerta"
  },
  {
    name: "Cochinillo Confitado",
    price: "€40",
    ingredients: "Cochinillo segoviano, costra de hierbas, jugo natural"
  },
  {
    name: "Tartar de Atún Rojo",
    price: "€28",
    ingredients: "Atún rojo de almadraba, aguacate, soja, wasabi, sésamo negro"
  },
  {
    name: "Wagyu Español",
    price: "€65",
    ingredients: "Wagyu español A5, flor de sal, aceite de trufa negra"
  }
];

const HoplonMenuSemanal = () => {
  return (
    <section className="py-24 bg-hoplon-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-hoplon-black mb-4">
            Esta Semana
          </h2>
          <p className="text-xl text-hoplon-garnet font-medium">
            Menús Especiales
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
  );
};

export default HoplonMenuSemanal;