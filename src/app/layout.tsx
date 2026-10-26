import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import '@fontsource/great-vibes';
import './globals.css';
import Providers from './providers';
import { site } from '@/config/site';

const description =
  'Reliable, detailed cleaning for homes, businesses and industrial spaces in Salt Lake City, Utah and surrounding areas. Standard, deep, commercial and industrial cleaning done with care and respect. Call or text ' +
  site.phone.display +
  '. Hablamos español.';

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Home & Commercial Cleaning in Salt Lake City, UT`,
    template: `%s | ${site.shortName}`,
  },
  description,
  keywords: [
    'house cleaning Salt Lake City',
    'apartment cleaning Salt Lake City',
    'deep cleaning Salt Lake City',
    'home cleaning Utah',
    'maid service Salt Lake City',
    'cleaning service near me',
    'commercial cleaning Salt Lake City',
    'office cleaning Salt Lake City',
    'industrial cleaning Utah',
    'warehouse cleaning Salt Lake City',
    'limpieza de casas Salt Lake City',
    'limpieza profunda Utah',
    'servicio de limpieza en español Utah',
    'limpieza comercial e industrial Utah',
    ...site.location.areasServed.map((c) => `house cleaning ${c}`),
  ],
  metadataBase: new URL(site.url),
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    url: site.url,
    locale: 'en_US',
    alternateLocale: 'es_US',
    siteName: site.name,
    title: `${site.name} — Residential & Commercial Cleaning in Salt Lake City`,
    description,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Residential & Commercial Cleaning in Salt Lake City`,
    description,
    images: ['/images/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* ── Schema.org LocalBusiness — SEO local ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HouseCleaningService',
              name: site.name,
              alternateName: site.shortName,
              slogan: site.tagline,
              description,
              url: site.url,
              logo: `${site.url}/images/brand/logo.png`,
              image: `${site.url}/images/og-image.jpg`,
              telephone: site.phone.e164,
              address: {
                '@type': 'PostalAddress',
                addressLocality: site.location.city,
                addressRegion: site.location.region,
                addressCountry: site.location.country,
              },
              areaServed: site.location.areasServed.map((name) => ({ '@type': 'City', name })),
              knowsLanguage: ['en', 'es'],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Cleaning Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Standard House Cleaning' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Industrial Cleaning' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Cleaning' } },
                ],
              },
            }),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
