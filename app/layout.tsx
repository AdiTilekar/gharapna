import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { MinimalHomeNav } from '@/components/layout/MinimalHomeNav';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['italic', 'normal'],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Gharapna | Verified Flats in PCMC, Pune',
    template: '%s | Gharapna',
  },
  description: siteConfig.description,
  keywords: [
    'flats in pcmc',
    'flats in pimpri chinchwad',
    '2 bhk in wakad',
    'flats in ravet',
    'flats in pimple saudagar',
    'gharapna real estate pune',
  ],
  authors: [{ name: 'Gharapna Real Estate Advisory' }],
  robots: siteConfig.isDemoMode
    ? {
        index: false,
        follow: false,
        nocache: true,
      }
    : {
        index: true,
        follow: true,
      },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    title: 'Gharapna | Verified Flats Across PCMC, Pune',
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Gharapna',
    image: 'https://gharapna.com/logo.png',
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chinchwad Station Road',
      addressLocality: 'Pimpri-Chinchwad',
      addressRegion: 'Maharashtra',
      postalCode: '411019',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.6279,
      longitude: 73.8009,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {siteConfig.isDemoMode && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors font-sans antialiased">
        <MinimalHomeNav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
