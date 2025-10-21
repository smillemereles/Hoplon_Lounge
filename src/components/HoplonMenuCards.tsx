import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "PARAGUAYAN NIGHT SHOW",
    description:
      " Nuestro show de danzas paraguayas, donde la cultura y la tradición se unen para ofrecerte una velada inolvidable. Sumérgete en la música y el baile mientras degustas nuestros platos típicos.",
    image: "/bailarinas4.jpg",
  },
  {
    title: "LOUNGE BAR",
    description:
      " Disfruta de una experiencia única en nuestro Lounge Bar, donde la elegancia y el confort se unen para ofrecerte un ambiente exclusivo. Saborea nuestros cócteles artesanales y una selección de vinos premium mientras te relajas en un entorno sofisticado.",
    image: "/LOUNGE.jpg",
  },
  {
    title: "CATERING & EVENTS",
    description:
      "Ofrecemos servicios de catering para eventos privados y corporativos, adaptandonos a tus necesidades y presupuesto. Desde cenas elegantes hasta fiestas informales, nuestro equipo se encargará de cada detalle para que tu evento sea un éxito.",
    image: "/CATERING.JPG",
  },
];

const HoplonMenuCards = () => {
  return (
    <section
      id="menu"
      className="py-24 relative overflow-hidden"
      style={{ scrollMarginTop: "80px" }}
    >
      {/* VIDEO DE FONDO */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/[HOPLON] VIDEO 15S.mp4" type="video/mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-hoplon-black to-hoplon-garnet"></div>
      </video>

      {/* Overlay oscuro para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-black/50 z-1"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 z-2">
        <div className="absolute top-20 left-10 w-32 h-32 bg-hoplon-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-hoplon-gold rounded-full blur-3xl"></div>
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
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-hoplon-gold/95 to-hoplon-gold-dark/90 backdrop-blur-sm shadow-2xl hover:shadow-xl hover:shadow-hoplon-gold/40 transition-all duration-500 border border-hoplon-gold/30 hover:border-hoplon-gold/60">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hoplon-black/60 to-transparent"></div>

                  {/* Decorative overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-hoplon-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Decorative elements */}
                  <div className="absolute top-2 left-2">
                    <div className="w-8 h-1 bg-hoplon-black/20"></div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <div className="w-6 h-6 border border-hoplon-black/20 rotate-45"></div>
                  </div>

                  <motion.h3
                    className="text-xl font-cinzel font-bold text-hoplon-black mb-3 group-hover:text-hoplon-black/90 transition-colors duration-300 uppercase tracking-wider"
                    whileHover={{ scale: 1.02 }}
                  >
                    {category.title}
                  </motion.h3>

                  <div className="w-12 h-0.5 bg-hoplon-black/30 mb-3 group-hover:w-16 transition-all duration-300"></div>

                  <p className="text-hoplon-black/90 leading-relaxed font-medium group-hover:text-hoplon-black transition-colors duration-300 text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Enhanced hover effects */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-hoplon-gold/10 to-hoplon-gold-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

                {/* Subtle glow effect */}
                <motion.div className="absolute -inset-1 bg-gradient-to-r from-hoplon-gold via-hoplon-gold-dark to-hoplon-gold rounded-xl opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-hoplon-gold/20 to-hoplon-gold-dark/30 backdrop-blur-sm rounded-xl p-8 border border-hoplon-gold/40 hover:border-hoplon-gold/60 hover:shadow-lg hover:shadow-hoplon-gold/30 transition-all duration-300 max-w-2xl mx-auto">
            <h3 className="text-2xl font-cinzel font-bold text-hoplon-white mb-4 tracking-wider">
              ¿Interesado en nuestros servicios?
            </h3>
            <p className="text-hoplon-gold/90 mb-6 font-medium">
              Contactanos para conocer más detalles y crear la experiencia
              perfecta para ti
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mx-auto"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HoplonMenuCards;
