import { Metadata } from 'next';
import { MinimalHero } from '@/components/home/MinimalHero';
import { MinimalFeaturedProjects } from '@/components/home/MinimalFeaturedProjects';

export const metadata: Metadata = {
  title: 'Gharapna | Find your own home in Pimpri-Chinchwad',
  description:
    'Discover verified flats in Pimpri-Chinchwad (PCMC), Pune with transparent pricing upfront.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen transition-colors">
      {/* 1. Full-Bleed 100vh Hero with Headline & Floating Search Bar */}
      <MinimalHero />

      {/* 2. Featured Projects (3 large image cards, rounded-3xl) */}
      <MinimalFeaturedProjects />
    </div>
  );
}
