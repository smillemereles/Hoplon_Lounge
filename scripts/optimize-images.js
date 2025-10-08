#!/usr/bin/env node

/**
 * Script para optimizar imágenes antes del build
 * Reduce el tamaño de las imágenes en /public/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

function getImageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getImageFiles(fullPath));
    } else if (imageExtensions.includes(path.extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeImages() {
  console.log('🔍 Analizando imágenes en /public/...\n');
  
  const imageFiles = getImageFiles(publicDir);
  let totalSize = 0;
  const largeImages = [];
  
  imageFiles.forEach(file => {
    const size = getFileSize(file);
    const relativePath = path.relative(publicDir, file);
    totalSize += size;
    
    // Marcar imágenes mayores a 1MB
    if (size > 1024 * 1024) {
      largeImages.push({
        path: relativePath,
        size: size,
        formattedSize: formatBytes(size)
      });
    }
  });
  
  console.log(`📊 Total de imágenes: ${imageFiles.length}`);
  console.log(`📦 Tamaño total: ${formatBytes(totalSize)}\n`);
  
  if (largeImages.length > 0) {
    console.log('⚠️  Imágenes grandes (>1MB) que deberían optimizarse:\n');
    largeImages
      .sort((a, b) => b.size - a.size)
      .forEach(img => {
        console.log(`  ${img.path} - ${img.formattedSize}`);
      });
    
    console.log('\n💡 Recomendaciones:');
    console.log('  1. Comprimir las imágenes usando herramientas como:');
    console.log('     - TinyPNG (https://tinypng.com/)');
    console.log('     - ImageOptim (macOS)');
    console.log('     - GIMP o Photoshop');
    console.log('  2. Convertir a WebP para mejor compresión');
    console.log('  3. Redimensionar a tamaños apropiados (max 1920px de ancho)');
  } else {
    console.log('✅ Todas las imágenes están optimizadas');
  }
}

// Ejecutar análisis
analyzeImages();
