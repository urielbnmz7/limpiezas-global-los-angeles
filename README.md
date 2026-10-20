# Limpiezas Global Los Ángeles — Sitio web

Sitio de una sola página para un servicio de limpieza de casas y apartamentos en Salt Lake City, UT.
Bilingüe (inglés como idioma principal, con botón EN / ES).

## Stack (el mismo de Krystal Tax)
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 3
- i18n propio: `src/lib/i18n.ts` + `src/contexts/LanguageContext.tsx`
- Deploy: Vercel (todas las rutas se prerenderizan como estáticas)

Diferencias con Krystal Tax:
- Sin formulario ni Resend: el contacto es solo por **llamada y SMS**.
- Las fuentes se sirven desde el propio sitio con `@fontsource` (Inter, Playfair Display, Great Vibes), no desde Google Fonts.
- Los datos del negocio (nombre, teléfono, ciudades, dominio) viven en `src/config/site.ts`.

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

## Estructura
```
src/
  app/            layout (SEO + Schema.org), page, robots, sitemap, íconos
  components/
    layout/       Navbar, Footer
    sections/     Hero, Services, WhyUs, ServiceArea, Contact
    ui/           Brand, LanguageToggle, FloatingContact, Icons
  config/site.ts  datos del negocio (única fuente de verdad)
  contexts/       LanguageContext
  lib/i18n.ts     textos EN / ES
public/images/    logo, og-image
```

## Pendientes antes de publicar
- [x] Dominio: limpiezagloballosangeles.com
- [ ] Confirmar las ciudades que atiende el cliente → `site.location.areasServed`
- [ ] Redes sociales del cliente (si tiene)
- [ ] Fotos (ver `public/images/IMAGENES.md`)

## Migración a dinámico
- Los textos (`i18n.ts`) y los datos (`site.ts`) están separados de los componentes: se pueden mover a un CMS o a una base de datos sin tocar el diseño.
- Para indexar las dos versiones de idioma en Google, el siguiente paso sería usar rutas `/en` y `/es` (i18n de Next.js) en lugar del cambio de idioma en el navegador.
