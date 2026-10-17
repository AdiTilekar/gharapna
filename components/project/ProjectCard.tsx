'use client';

import { Project } from '@/types/project';
import { formatIndianPrice } from '@/lib/formatters';
import { LOCALITIES } from '@/data/localities';
import { Card } from '@/components/ui/minimal';

interface ProjectCardProps {
  project: Project;
}

function getProjectImage(slug: string): string {
  switch (slug) {
    case 'aangan-residences':
      return '/images/aangan.jpg';
    case 'tulsi-greens':
      return '/images/tulsi.jpg';
    case 'nilaya-heights':
      return '/images/nilaya.jpg';
    case 'vihaan-park':
      return '/images/tulsi.jpg';
    case 'ekta-enclave':
      return '/images/aangan.jpg';
    case 'shreyas-square':
      return '/images/nilaya.jpg';
    default:
      return '/images/hero.jpg';
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const locality = LOCALITIES.find((l) => l.slug === project.localitySlug);
  const minPrice = Math.min(...project.unitTypes.map((u) => u.indicativePriceMin));
  const bhkSummary = project.unitTypes.map((u) => `${u.bhk} BHK`).join(', ');
  const img = getProjectImage(project.slug);

  return (
    <Card
      href={`/projects/${project.slug}`}
      imageSrc={img}
      imageAlt={project.name}
      title={project.name}
      price={`From ${formatIndianPrice(minPrice)}`}
      subtitle={`${locality?.name || 'PCMC'} • ${bhkSummary} • ${project.possessionDate}`}
    />
  );
}
