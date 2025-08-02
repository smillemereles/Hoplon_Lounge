import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const HoplonFooter = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-hoplon-black py-16">
      <div className="container mx-auto px-6">
        {/* Logo and Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h3 
            className="text-3xl font-serif font-bold text-hoplon-gold mb-6"
            whileHover={{ scale: 1.05 }}
          >
            HOPLON LOUNGE
          </motion.h3>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-hoplon-white/10 rounded-full flex items-center justify-center hover:bg-hoplon-gold hover:text-hoplon-black transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 20px hsl(var(--hoplon-gold) / 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-hoplon-white" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-8 text-sm"
        >
          {[
            "Política de Privacidad",
            "Términos y Condiciones", 
            "Política de Cookies",
            "Contacto"
          ].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-hoplon-white/70 hover:text-hoplon-gold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-hoplon-gold to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-hoplon-white/80 font-medium">
            © 2025 Hoplon Lounge —{" "}
            <span className="text-hoplon-gold font-serif">
              Forjado con honor y sabor.
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default HoplonFooter;