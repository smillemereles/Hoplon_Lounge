#!/usr/bin/env node

/**
 * Script para descargar imágenes de placeholder temporales
 * Ejecutar con: node scripts/download-images.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

// Lista de imágenes que necesita el proyecto
const requiredImages = [
  'LOGO HOPLON SIMPLIFICADO CREMA.png',
  'hero front page.png',
  'hoplonexterior.jpg',
  'RESERVA.JPG.jpg',
  'bailarinas4.jpg',
  'LOUNGE.JPG.jpg',
  'CATERING.JPG.JPG',
  'IMG_1940.MOV',
  'parrilla2.jpg.jpg',
  'BORIBORI.JPG.jpg',
  'CARNES.JPG.jpg',
  'pinhacolada.jpg.jpg',
  'caipirinhas.jpg.jpg',
  'daikirifrozen,jpg.jpg',
  'picsina.jpg.JPG',
  'PICANHA.JPG.JPG',
  'gindepomelo.jpg.jpg',
  'logoexterior.jpg.jpg',
  'SOPA.JPG.jpg',
  'tabla-de-frios.jgp.JPG',
  'parrilla.jpg.jpg',
  'BUFFET,JPG.jpg',
  'buffet2.jpg.jpg',
  'postres1.jpg',
  'postres2.jpg',
  'postre3.jpg',
  'mesas1.jpg',
  'mesas2.jpg',
  'mesas3.jpg',
  'mesas4.jpg',
  'exterior.jpg.JPG',
  'estructura de mesas.jpg.jpg',
  'preparaciondemesa.jpg',
  'moscomulle.jpg.jpg',
  'vistadecamarotes.JPG',
  'mesaslounge.jpg.JPG',
  'upscalemedia-transformed (1).png'
];

// Función para crear una imagen placeholder
function createPlaceholderImage(filename) {
  const ext = path.extname(filename);
  const name = path.basename(filename, ext);
  
  if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
    // Crear un SVG placeholder simple
    const svgContent = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#f0f0f0"/>
      <text x="200" y="150" font-family="Arial" font-size="16" text-anchor="middle" fill="#666">
        ${name}
      </text>
      <text x="200" y="170" font-family="Arial" font-size="12" text-anchor="middle" fill="#999">
        Placeholder Image
      </text>
    </svg>`;
    
    const outputPath = path.join(publicDir, filename.replace(ext, '.svg'));
    fs.writeFileSync(outputPath, svgContent);
    console.log(`✅ Creado placeholder SVG para: ${filename}`);
  } else if (ext === '.mov') {
    // Crear un archivo de texto placeholder para videos
    const textContent = `Este es un placeholder para el video: ${filename}\n\nPara obtener el video real, contacta al equipo de desarrollo.`;
    const outputPath = path.join(publicDir, filename.replace(ext, '.txt'));
    fs.writeFileSync(outputPath, textContent);
    console.log(`✅ Creado placeholder TXT para: ${filename}`);
  }
}

// Función principal
function main() {
  console.log('🚀 Iniciando descarga de imágenes placeholder...\n');
  
  // Verificar que el directorio public existe
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    console.log('📁 Directorio public creado');
  }
  
  // Crear placeholders para todas las imágenes requeridas
  requiredImages.forEach(createPlaceholderImage);
  
  console.log('\n✨ Proceso completado!');
  console.log('📝 Los archivos placeholder se han creado en el directorio public/');
  console.log('🔄 Reemplaza estos archivos con las imágenes reales cuando las tengas');
  console.log('📖 Consulta public/README.md para más información');
}

// Ejecutar el script
main().catch(console.error); 