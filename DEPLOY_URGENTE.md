# 🚨 SOLUCIÓN INMEDIATA - Hoplon Club

## ❌ Problema Actual

**Tu sitio https://hoplonclub.com.py/ está mostrando:**
```
403 Forbidden
```

Esto significa:
- ❌ Los archivos no están desplegados correctamente
- ❌ Faltan permisos o el archivo `index.html`
- ❌ Google Analytics NO puede recopilar datos porque el sitio no es accesible

## ✅ Solución Paso a Paso

### PASO 1: Accede a tu cPanel

1. Ve a: `https://hoplonclub.com.py/cpanel` o `https://cpanel.tuproveedor.com`
2. Ingresa con tu usuario y contraseña

### PASO 2: Abre el Administrador de Archivos

1. Busca **"File Manager"** o **"Administrador de Archivos"**
2. Haz clic para abrirlo

### PASO 3: Ve al Directorio Correcto

Dependiendo de tu configuración:
- **Opción A:** `public_html/` (para dominio principal)
- **Opción B:** `public_html/hoplonclub/` (si está en subdirectorio)

**Verifica qué archivos hay actualmente:**
- ¿Hay un archivo `index.html` o `index.php`?
- ¿Qué archivos y carpetas ves?

### PASO 4: Hacer Backup (IMPORTANTE)

Si hay archivos existentes:
1. Selecciona todos los archivos
2. Haz clic derecho → **"Compress"** o **"Comprimir"**
3. Nómbralo: `backup-hoplonclub-20251204.zip`
4. Descárgalo a tu computadora

### PASO 5: Limpiar el Directorio

1. Selecciona todos los archivos (EXCEPTO `.htaccess` si existe)
2. Haz clic en **"Delete"** o **"Eliminar"**
3. Confirma

### PASO 6: Subir el Nuevo ZIP

1. Haz clic en **"Upload"** o **"Subir"**
2. Selecciona el archivo: `hoplon-cpanel-20251203.zip`
3. **Espera a que termine la carga** (323 MB puede tardar 10-15 minutos)
4. Cierra la ventana de upload

### PASO 7: Extraer el Archivo

1. Vuelve al File Manager
2. Busca `hoplon-cpanel-20251203.zip`
3. Haz clic derecho → **"Extract"** o **"Extraer"**
4. Asegúrate de que se extraiga en el directorio actual
5. Espera a que termine

### PASO 8: Verificar la Estructura

Después de extraer, deberías ver:
```
public_html/
├── index.html          ← DEBE ESTAR AQUÍ
├── manifest.json
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── index-*.js
│   └── index-*.css
└── favicon/
```

### PASO 9: Configurar Permisos

1. Selecciona todos los archivos y carpetas
2. Haz clic derecho → **"Change Permissions"** o **"Cambiar permisos"**
3. Configura:
   - **Archivos:** `644` (rw-r--r--)
   - **Carpetas:** `755` (rwxr-xr-x)
4. Marca **"Recurse into subdirectories"**
5. Aplica solo a **directorios** primero, luego a **archivos**

### PASO 10: Crear/Verificar .htaccess

Crea un archivo `.htaccess` en la raíz con este contenido:

```apache
# Habilitar rewrite engine
RewriteEngine On

# Redirigir todo a index.html para React Router
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Habilitar compresión
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Configuración de cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### PASO 11: Eliminar el ZIP

1. Selecciona `hoplon-cpanel-20251203.zip`
2. Elimínalo para liberar espacio

### PASO 12: Verificar el Sitio

1. Abre: **https://hoplonclub.com.py/**
2. **Presiona Ctrl + Shift + R** (limpiar cache)
3. El sitio debería cargar correctamente ✅

---

## 🔍 Verificación de Google Analytics (Después del Deploy)

### 1. Verificar que el código está cargando

1. Abre: https://hoplonclub.com.py/
2. Presiona **F12** (DevTools)
3. Ve a la pestaña **Console**
4. Busca: `"Google Analytics cargado: G-SMTHG38GW3"`
5. Si lo ves → ✅ El código está funcionando

### 2. Verificar solicitudes a Google Analytics

1. En DevTools, ve a **Network**
2. Filtra por: `collect`
3. Navega por el sitio
4. Deberías ver solicitudes a:
   ```
   https://www.google-analytics.com/g/collect?...
   ```

### 3. Verificar en Google Analytics Tiempo Real

1. Ve a: https://analytics.google.com
2. Selecciona tu propiedad `G-SMTHG38GW3`
3. Ve a **Informes → Tiempo real**
4. Abre https://hoplonclub.com.py/ en otra pestaña
5. **En 5-10 segundos** deberías ver:
   - 👤 **1 usuario activo**
   - 📍 Tu ubicación en Paraguay
   - 📄 Páginas que estás visitando

### 4. Actualizar la URL en Google Analytics

1. Ve a **Administrar (⚙️)**
2. Columna **Propiedad** → **Flujos de datos**
3. Haz clic en tu flujo de datos web
4. **Verifica/Actualiza la URL del sitio web:**
   ```
   https://hoplonclub.com.py
   ```
5. Guarda los cambios

---

## 🎯 Checklist Final

- [ ] Subí el ZIP a cPanel
- [ ] Extraje los archivos correctamente
- [ ] El archivo `index.html` está en la raíz de `public_html/`
- [ ] Los permisos están configurados (644 archivos, 755 carpetas)
- [ ] El `.htaccess` está creado
- [ ] Abrí https://hoplonclub.com.py/ y el sitio carga
- [ ] Presioné F12 y veo "Google Analytics cargado"
- [ ] En Network veo solicitudes a "collect"
- [ ] En Google Analytics → Tiempo Real veo mi visita
- [ ] Actualicé la URL en la configuración de GA4

---

## 🚨 Si el 403 Forbidden Persiste

### Causa 1: Archivo index.html no en la raíz

**Verifica:**
```
¿El archivo index.html está exactamente aquí?
public_html/index.html
```

Si está en una subcarpeta como `public_html/dist/index.html`:
1. Mueve TODO el contenido de `dist/` a `public_html/`
2. O extrae el ZIP directamente en `public_html/`

### Causa 2: Permisos incorrectos

**Solución:**
1. Selecciona `index.html`
2. Permisos → `644`
3. Selecciona carpeta `public_html`
4. Permisos → `755`

### Causa 3: El dominio apunta a otra carpeta

**Verifica en cPanel:**
1. Ve a **Domains** o **Addon Domains**
2. Busca `hoplonclub.com.py`
3. Verifica que **Document Root** sea:
   ```
   /home/tuusuario/public_html
   ```
   O la carpeta correcta

---

## 📞 Necesitas Ayuda Adicional?

**Si después de seguir TODOS los pasos el sitio sigue con 403:**

1. Contacta a tu proveedor de hosting
2. Pídeles que verifiquen:
   - Los permisos del directorio
   - La configuración del dominio
   - Los logs de error de Apache

**O comparte:**
- Captura de pantalla de tu File Manager mostrando la estructura
- El contenido de `.htaccess`
- Los logs de error si tienes acceso

---

**Fecha:** Diciembre 4, 2025  
**Dominio:** https://hoplonclub.com.py/  
**ID GA:** G-SMTHG38GW3  
**Archivo ZIP:** hoplon-cpanel-20251203.zip (323 MB)
