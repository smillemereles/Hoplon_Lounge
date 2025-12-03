# Guía de Configuración y Verificación de Google Analytics 4

## ✅ Configuración Implementada

### 1. **Script de Google Analytics en index.html**
- ✅ Google tag (gtag.js) cargado con ID: `G-SMTHG38GW3`
- ✅ Configuración de consentimiento para GDPR
- ✅ Configuración optimizada para Single Page Applications (SPA)
- ✅ Debug mode disponible para pruebas

### 2. **Tracking Automático de Páginas**
- ✅ Componente `usePageTracking` hook implementado
- ✅ Rastreo automático de cambios de ruta en React Router
- ✅ Pageviews se envían en cada navegación

### 3. **Librería de Eventos Personalizados** (`src/lib/analytics.ts`)
Funciones disponibles para rastrear:
- `sendPageView()` - Vista de página
- `sendEvent()` - Evento genérico
- `trackButtonClick()` - Clics en botones
- `trackNavigation()` - Navegación
- `trackReservation()` - Acciones de reserva
- `trackMenuInteraction()` - Interacciones con menú
- `trackGalleryView()` - Vista de galería
- `trackVideoPlay()` - Reproducción de video
- `trackScroll()` - Profundidad de scroll
- `trackFormSubmit()` - Envío de formularios

## 🔍 Verificación de la Instalación

### Paso 1: Verificar en el Navegador (Inmediato)

1. **Abrir Chrome DevTools** (F12)
2. **Ir a la pestaña Console**
3. **Buscar el mensaje**: `"Google Analytics cargado: G-SMTHG38GW3"`
4. **Verificar que aparece**: `"GA4 Pageview enviado: /"`

### Paso 2: Usar la Extensión Google Tag Assistant

1. Instalar [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Visitar tu sitio web
3. Hacer clic en el icono de la extensión
4. Verificar que aparece el tag `G-SMTHG38GW3` en verde

### Paso 3: Verificar en Tiempo Real en Google Analytics

1. Ir a [Google Analytics](https://analytics.google.com)
2. Seleccionar tu propiedad `G-SMTHG38GW3`
3. Ir a **Informes → Tiempo real**
4. Abrir tu sitio web en otra pestaña
5. **Deberías ver tu visita en tiempo real** (aparece en 5-10 segundos)

### Paso 4: Activar Debug Mode (Para Desarrollo)

En `index.html`, cambia:
```javascript
debug_mode: false, // Cambiar a true para depuración
```

a:
```javascript
debug_mode: true, // Modo de depuración activado
```

Luego en DevTools:
1. Ir a **Network** → Filtrar por "collect"
2. Navegar por el sitio
3. Verás las solicitudes a Google Analytics

## 🔧 Solución de Problemas

### Problema 1: "No se recopilan datos"

**Posibles causas:**
- ✅ Bloqueador de anuncios (AdBlock, uBlock Origin)
- ✅ Navegación privada/incógnito
- ✅ Extensiones de privacidad
- ✅ DNS filtrado (NextDNS, Pi-hole)

**Solución:**
- Desactivar bloqueadores temporalmente
- Probar en modo normal (no incógnito)
- Usar otro navegador/dispositivo

### Problema 2: "Las etiquetas no están configuradas correctamente"

**Verificar:**
1. El ID de medición es correcto (`G-SMTHG38GW3`)
2. El script está en el `<head>` antes de otros scripts
3. No hay errores de JavaScript en la consola

### Problema 3: "Datos no aparecen en informes"

**Nota importante:**
- Los datos en tiempo real aparecen en 5-10 segundos
- Los informes estándar pueden tardar **24-48 horas**
- Si acabas de crear la propiedad, espera 24 horas

## 📊 Eventos que se Rastrean Automáticamente

Por defecto, GA4 rastrea:
- ✅ `page_view` - Vista de página
- ✅ `scroll` - Scroll del 90%
- ✅ `click` - Clics en enlaces salientes
- ✅ `view_search_results` - Búsqueda en el sitio
- ✅ `file_download` - Descargas

## 🎯 Cómo Usar los Eventos Personalizados

### Ejemplo 1: Rastrear clic en botón de reserva

```typescript
import { trackReservation } from "@/lib/analytics";

// En tu componente
<Button onClick={() => {
  trackReservation("click_reservar", {
    location: "hero_section",
    timestamp: new Date().toISOString()
  });
}}>
  Reservar Ahora
</Button>
```

### Ejemplo 2: Rastrear vista de galería

```typescript
import { trackGalleryView } from "@/lib/analytics";

useEffect(() => {
  trackGalleryView("main_gallery");
}, []);
```

### Ejemplo 3: Rastrear interacción con menú

```typescript
import { trackMenuInteraction } from "@/lib/analytics";

<Card onClick={() => {
  trackMenuInteraction("entradas", "card_click");
}}>
  Ver Entradas
</Card>
```

## 🚀 Próximos Pasos

### 1. Configurar Conversiones en Google Analytics

1. Ir a **Administrar → Eventos**
2. Marcar eventos importantes como conversiones:
   - `reservation_action`
   - `form_submit`
   - `button_click` (filtrado por botón de reserva)

### 2. Configurar Audiencias

1. Ir a **Administrar → Audiencias**
2. Crear audiencias personalizadas:
   - Usuarios que vieron el menú
   - Usuarios que intentaron reservar
   - Usuarios que vieron la galería

### 3. Vincular con Google Ads (si aplica)

1. Ir a **Administrar → Enlaces de productos**
2. Vincular con Google Ads para remarketing

## 📝 Checklist de Verificación

- [ ] Script de GA4 en `index.html`
- [ ] ID de medición correcto (`G-SMTHG38GW3`)
- [ ] Mensaje de consola confirmando carga
- [ ] Visitas aparecen en Tiempo Real
- [ ] Pageviews se registran en cada navegación
- [ ] Bloqueadores de anuncios desactivados para pruebas
- [ ] Debug mode probado (opcional)
- [ ] Eventos personalizados funcionando (opcional)

## 🛠️ Comandos Útiles

```bash
# Compilar y previsualizar localmente
npm run build
npm run preview

# Modo desarrollo con hot reload
npm run dev

# Desplegar a producción (Vercel)
git add .
git commit -m "fix: configurar Google Analytics correctamente"
git push origin main
```

## 📞 Contacto y Soporte

Si después de 48 horas no ves datos:
1. Verificar que el ID `G-SMTHG38GW3` es correcto en Google Analytics
2. Comprobar que la propiedad está activa
3. Revisar permisos de usuario en GA4
4. Contactar a soporte de Google Analytics

---

**Última actualización:** Diciembre 2025
**Versión:** 1.0.0
