# NeuroVisual - Bio-Enlaces e Inclusión Neurodivergente

Página de bio-enlaces accesible e inclusiva basada en la identidad visual de **NeuroVisual**, optimizada para familias, profesionales, docentes y personas dentro del espectro autista (TEA) y neurodiversidad.

---

## 🛠️ Configuración para GitHub Pages

El proyecto ya está completamente configurado y optimizado para publicarse en **GitHub Pages** sin errores 404 ni problemas con rutas de imágenes o scripts:

1. **Rutas Relativas Configurada (`base: './'`)**: En `vite.config.ts` se definió `base: './'` para garantizar que todos los archivos CSS, JavaScript e imágenes se carguen sin importar el nombre de tu repositorio.
2. **Archivo `.nojekyll`**: Incluido en la carpeta `public/` para evitar que el servidor de GitHub Pages omita carpetas con guiones bajos o archivos estáticos.
3. **Manejo de Errores 404 (`404.html`)**: Incluido en `public/404.html` para redireccionar correctamente cualquier ruta no encontrada.

---

## 🚀 Pasos para Desplegar en GitHub Pages

### Opción A: Despliegue con GitHub Actions (Recomendado)

1. Sube este código a tu repositorio en GitHub.
2. Ve a la pestaña **Settings** (Configuración) de tu repositorio en GitHub.
3. En el menú lateral izquierdo, selecciona **Pages**.
4. En **Source** (Fuente), selecciona **GitHub Actions**.
5. GitHub detectará automáticamente el proyecto Vite React y publicará tu sitio en:
   `https://<tu-usuario>.github.io/<nombre-repositorio>/`

---

### Opción B: Despliegue manual con la rama `gh-pages`

1. Ejecuta el comando de compilación:
   ```bash
   npm run build
   ```
2. La carpeta resultante `dist/` contendrá todo el sitio listo para producción.
3. Publica el contenido de la carpeta `dist/` en la rama `gh-pages` de tu repositorio.
