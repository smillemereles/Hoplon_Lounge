# 🚀 Guía de Deploy a cPanel - Hoplon Lounge

## 📦 Archivos Disponibles

Se han generado dos archivos comprimidos con el mismo contenido:

- **`hoplon-cpanel-20251203.zip`** (323 MB) - Formato ZIP estándar
- **`hoplon-cpanel-20251203.tar.gz`** (323 MB) - Formato TAR.GZ comprimido

**Usa el que prefieras, ambos contienen lo mismo.**

## ✅ Contenido del Paquete

El paquete incluye todos los archivos compilados de la carpeta `dist/`:

- ✅ `index.html` - Página principal
- ✅ `assets/` - JavaScript, CSS y otros recursos
- ✅ `manifest.json` - Configuración PWA
- ✅ `robots.txt` - Configuración para buscadores
- ✅ `sitemap.xml` - Mapa del sitio
- ✅ `favicon/` - Iconos del sitio
- ✅ `README.md` - Documentación

## 📋 Últimas Actualizaciones Incluidas

Esta versión incluye:

1. ✅ **Google Analytics 4 configurado correctamente**
   - Script optimizado para SPAs
   - Configuración de consentimiento GDPR
   - Tracking automático de páginas
   - ID: `G-SMTHG38GW3`

2. ✅ **Botón RESERVAR funcionando**
   - Scroll suave a la sección de reservas
   - Funciona en desktop y mobile
   - Tracking de eventos implementado

3. ✅ **Optimizaciones**
   - Assets optimizados
   - Favicons completos
   - Sitemap actualizado

## 🔧 Instrucciones de Deploy en cPanel

### Paso 1: Acceder a cPanel

1. Ingresa a tu cPanel: `https://tu-dominio.com/cpanel`
2. Usuario: `tu-usuario`
3. Contraseña: `tu-contraseña`

### Paso 2: Ir al Administrador de Archivos

1. Busca **"File Manager"** o **"Administrador de Archivos"**
2. Haz clic para abrirlo

### Paso 3: Navegar al Directorio Correcto

Dependiendo de tu configuración, ve a:

- `public_html/` (para dominio principal)
- `public_html/hoplon/` (para subdirectorio)
- O el directorio que uses para tu sitio

### Paso 4: Hacer Backup del Sitio Actual (Importante)

1. Selecciona todos los archivos actuales
2. Haz clic en **"Compress"** o **"Comprimir"**
3. Nómbralo: `backup-hoplon-YYYYMMDD.zip`
4. Descárgalo a tu computadora

### Paso 5: Eliminar Archivos Antiguos

1. Selecciona todos los archivos del directorio
2. Haz clic en **"Delete"** o **"Eliminar"**
3. Confirma la eliminación

**⚠️ Importante:** NO elimines:

- `.htaccess` (si existe)
- Archivos de configuración de dominio
- Carpetas como `cgi-bin` o `mail`

### Paso 6: Subir el Archivo ZIP

1. Haz clic en **"Upload"** o **"Subir"**
2. Selecciona el archivo `hoplon-cpanel-20251203.zip`
3. Espera a que termine la carga (puede tardar varios minutos)
4. Cierra la ventana de upload

### Paso 7: Extraer el Archivo

1. Vuelve al File Manager
2. Busca el archivo `hoplon-cpanel-20251203.zip`
3. Haz clic derecho → **"Extract"** o **"Extraer"**
4. Confirma que se extraiga en el directorio actual
5. Espera a que termine la extracción

### Paso 8: Eliminar el ZIP

1. Selecciona el archivo `hoplon-cpanel-20251203.zip`
2. Haz clic en **"Delete"** o **"Eliminar"**

### Paso 9: Configurar .htaccess (Si no existe)

Crea un archivo `.htaccess` con el siguiente contenido:

```apache
# Habilitar rewrite engine
RewriteEngine On

# Redirigir todo a index.html para React Router
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Configuración de compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Configuración de cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Seguridad
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

### Paso 10: Verificar el Deploy

1. Abre tu sitio en el navegador
2. Presiona `Ctrl + Shift + R` para limpiar cache
3. Verifica que todo funciona:
   - ✅ Página principal carga
   - ✅ Navegación funciona
   - ✅ Imágenes se ven
   - ✅ Botón RESERVAR hace scroll
   - ✅ Menú desplegable funciona

### Paso 11: Verificar Google Analytics

1. Abre las Herramientas de Desarrollo (F12)
2. Ve a la pestaña **Console**
3. Busca: `"Google Analytics cargado: G-SMTHG38GW3"`
4. Ve a [Google Analytics](https://analytics.google.com)
5. Informes → Tiempo real
6. Deberías ver tu visita activa

## 🔍 Solución de Problemas

### Problema: "Page Not Found" en rutas

**Solución:** Verifica que el `.htaccess` esté configurado correctamente

### Problema: Las imágenes no cargan

**Solución:**

1. Verifica los permisos de carpetas (755)
2. Verifica que la carpeta `assets/` esté completa

### Problema: El sitio no carga

**Solución:**

1. Verifica que `index.html` esté en el directorio raíz correcto
2. Revisa los logs de error en cPanel
3. Verifica que el dominio apunte correctamente

### Problema: Google Analytics no funciona

**Solución:**

1. Verifica que no haya bloqueadores de anuncios
2. Espera 24-48 horas para que aparezcan datos en informes
3. Usa "Tiempo Real" para verificación inmediata

## 📊 Verificación de Estructura

Después del deploy, tu estructura debería verse así:

```
public_html/
├── index.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── README.md
├── .htaccess
├── assets/
│   ├── index-DbcMtbKd.js
│   ├── index-BFMCkomF.css
│   ├── ui-BK7og-jF.js
│   └── vendor-CQeHmLAp.js
└── favicon/
    └── (archivos de favicon)
```

## 🔄 Para Futuros Deploys

1. Ejecuta `npm run build` en tu proyecto local
2. Crea un nuevo ZIP: `python -c "import shutil; shutil.make_archive('hoplon-cpanel-YYYYMMDD', 'zip', 'dist')"`
3. Sigue los pasos 4-10 de arriba

## 📝 Notas Importantes

- ⚠️ Los archivos `.zip` NO deben subirse a GitHub (ya están en `.gitignore`)
- ✅ Mantén siempre un backup antes de cada deploy
- ✅ Verifica Google Analytics después de cada deploy
- ✅ Limpia el cache del navegador para ver cambios

## 📞 Soporte

Si tienes problemas:

1. Revisa los logs de error en cPanel
2. Verifica la consola del navegador (F12)
3. Comprueba que el dominio apunte correctamente
4. Contacta al soporte de tu hosting si persisten los problemas

---

**Fecha de generación:** Diciembre 3, 2025
**Versión:** 1.5.0
**Tamaño del paquete:** ~323 MB
**Google Analytics ID:** G-SMTHG38GW3
