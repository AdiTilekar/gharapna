export const siteConfig = {
  name: 'Gharapna',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://gharapna.com',
  tagline: 'Your own home in Pimpri-Chinchwad, with every number shown upfront.',
  description:
    'Honest, trust-first property discovery across Pimpri-Chinchwad (PCMC), Pune. Verified carpet areas, upfront price breakups, RERA compliance tracking, and zero hidden charges.',
  phone: process.env.NEXT_PUBLIC_PHONE || '+91 98000 00000',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP || '919800000000',
  email: process.env.NEXT_PUBLIC_EMAIL || 'enquiry@gharapna.com',
  address:
    process.env.NEXT_PUBLIC_ADDRESS ||
    'Chinchwad Station Road, Pimpri-Chinchwad, Pune 411019, Maharashtra',
  isDemoMode: process.env.NEXT_PUBLIC_DEMO_MODE === 'true',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Localities', href: '/locations' },
    { label: 'Projects', href: '/projects' },
    { label: 'Flats', href: '/flats' },
    { label: 'Tools', href: '/tools' },
    { label: 'Why Gharapna', href: '/why-gharapna' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  responsePromise: 'We reply within 2 hours, 9:00 AM – 8:00 PM IST',
};
