'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, Section } from '@/components/ui/minimal';

interface FeaturedProjectItem {
  slug: string;
  name: string;
  localityName: string;
  startingPrice: string;
  imageSrc: string;
}

const FEATURED_PROJECTS: FeaturedProjectItem[] = [
  {
    slug: 'aangan-residences',
    name: 'Aangan Residences',
    localityName: 'Wakad',
    startingPrice: 'From Rs 85 L',
    imageSrc: '/images/aangan.jpg',
  },
  {
    slug: 'tulsi-greens',
    name: 'Tulsi Greens',
    localityName: 'Ravet',
    startingPrice: 'From Rs 48 L',
    imageSrc: '/images/tulsi.jpg',
  },
  {
    slug: 'nilaya-heights',
    name: 'Nilaya Heights',
    localityName: 'Pimple Saudagar',
    startingPrice: 'From Rs 90 L',
    imageSrc: '/images/nilaya.jpg',
  },
];

export function MinimalFeaturedProjects() {
  return (
    <Section size="wide" spacing="spacious">
      {/* Section Header */}
      <div className="flex items-baseline justify-between mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Featured projects
        </h2>
        <Link
          href="/projects"
          className="text-xs sm:text-sm font-medium text-muted hover:text-foreground inline-flex items-center gap-1 group transition-colors"
        >
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* 3 Large Image Cards (rounded-3xl, whole card clickable, image zooms slightly) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {FEATURED_PROJECTS.map((project) => (
          <Card
            key={project.slug}
            href={`/projects/${project.slug}`}
            imageSrc={project.imageSrc}
            imageAlt={project.name}
            title={project.name}
            price={project.startingPrice}
            subtitle={project.localityName}
          />
        ))}
      </div>
    </Section>
  );
}
