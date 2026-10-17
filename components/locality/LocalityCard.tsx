'use client';

import { Locality } from '@/types/locality';
import { PROJECTS } from '@/data/projects';
import { formatRatePerSqFt } from '@/lib/formatters';
import { Card } from '@/components/ui/minimal';

interface LocalityCardProps {
  locality: Locality;
}

function getLocalityImage(slug: string): string {
  if (slug === 'wakad' || slug === 'tathawade' || slug === 'punawale') return '/images/aangan.jpg';
  if (slug === 'ravet' || slug === 'kiwale' || slug === 'mamurdi') return '/images/tulsi.jpg';
  if (slug.includes('pimple') || slug === 'rahatani' || slug === 'nigdi') return '/images/nilaya.jpg';
  return '/images/hero.jpg';
}

export function LocalityCard({ locality }: LocalityCardProps) {
  const projectCount = PROJECTS.filter((p) => p.localitySlug === locality.slug).length;
  const img = getLocalityImage(locality.slug);

  return (
    <Card
      href={`/locations/${locality.slug}`}
      imageSrc={img}
      imageAlt={locality.name}
      title={locality.name}
      price={formatRatePerSqFt(locality.priceTrend.averageRatePerSqFt)}
      subtitle={`${locality.jurisdiction} • ${projectCount > 0 ? `${projectCount} active projects` : 'Coming soon'}`}
    />
  );
}
