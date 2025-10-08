import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "PARAGUAYAN NIGHTS SHOW",
    description:
      " Nuestro show de danzas paraguayas, donde la cultura y la tradición se unen para ofrecerte una velada inolvidable. Sumérgete en la música y el baile mientras degustas nuestros platos típicos.",
    image: "PUBLIC/bailarinas4.jpg",
  },
  {
    title: "LOUNGE BAR",
    description:
      " Disfruta de una experiencia única en nuestro Lounge Bar, donde la elegancia y el confort se unen para ofrecerte un ambiente exclusivo. Saborea nuestros cócteles artesanales y una selección de vinos premium mientras te relajas en un entorno sofisticado.",
    image: "PUBLIC/LOUNGE.JPG.jpg",
  },
  {
    title: "CATERING & EVENTS",
    description:
      "Ofrecemos servicios de catering para eventos privados y corporativos, adaptandonos a tus necesidades y presupuesto. Desde cenas elegantes hasta fiestas informales, nuestro equipo se encargará de cada detalle para que tu evento sea un éxito.",
    image: "public/CATERING.JPG",
  },
];

const HoplonMenuCards = () => {
  return (
    <section
      id="menu"
      className="py-24 relative overflow-hidden"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* VIDEO DE FONDO - Reemplaza el gradiente */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="PUBLIC/IMG_1940.MOV" type="video/mp4" />
        {/* Fallback para navegadores que no soporten el video */}
        <div className="absolute inset-0 bg-gradient-to-b from-hoplon-black to-hoplon-garnet"></div>
      </video>

      {/* Overlay oscuro para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 z-2">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hoplon-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-hoplon-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-hoplon-white mb-4 uppercase tracking-wider">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-hoplon-gold font-medium">
            En Hoplon Club diseñamos experiencias memorables que fusionan
            cultura, gastronomía y hospitalidad. Cada servicio está pensado para
            satisfacer distintas necesidades de nuestros clientes, desde el
            turismo cultural hasta eventos corporativos y sociales, siempre con
            identidad y excelencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-hoplon-white shadow-2xl hover:shadow-hoplon-gold/20 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 className="text-2xl font-serif font-bold text-hoplon-black mb-3 group-hover:text-hoplon-garnet transition-colors duration-300">
                    {category.title}
                  </motion.h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-hoplon-gold/10 to-hoplon-garnet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Gold Border on Hover */}
                <motion.div className="absolute inset-0 border-2 border-hoplon-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoplonMenuCards;
