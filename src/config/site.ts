/**
 * Datos del negocio — única fuente de verdad.
 * Cuando el sitio migre a dinámico, esto puede venir de un CMS / base de datos.
 */
export const site = {
  name: 'Limpiezas Global Los Ángeles',
  shortName: 'Limpiezas Global',
  tagline: 'Tu espacio, nuestro compromiso',
  url: 'https://limpiezagloballosangeles.com',

  phone: {
    display: '(385) 386-1816',
    e164: '+13853861816',
  },

  location: {
    city: 'Salt Lake City',
    region: 'UT',
    regionName: 'Utah',
    country: 'US',
    // TODO: confirmar con el cliente las ciudades exactas que atiende
    areasServed: [
      'Salt Lake City',
      'West Valley City',
      'West Jordan',
      'South Jordan',
      'Murray',
      'Sandy',
      'Taylorsville',
      'Millcreek',
    ],
  },
} as const;

export const telHref = `tel:${site.phone.e164}`;
export const smsHref = `sms:${site.phone.e164}`;
