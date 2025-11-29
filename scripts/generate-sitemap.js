import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
  "https://hoplonclub.com.py/",
  "https://hoplonclub.com.py/paraguayan-night-show",
  "https://hoplonclub.com.py/servicios",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u.endsWith("/") ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

const publicDir = path.join(__dirname, "..", "public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

// Crear directorio public si no existe
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(sitemapPath, sitemap);
console.log("✅ Sitemap generado exitosamente en public/sitemap.xml");
