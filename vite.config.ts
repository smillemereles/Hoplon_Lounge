// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      src: path.resolve(__dirname, "./src"), // 👈 clave para que funcionen imports "src/..."
    },
  },
  build: {
    // Optimizaciones para Vercel
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
        },
      },
    },
  },
  // Configuración para assets estáticos
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.gif", "**/*.svg"],
});
