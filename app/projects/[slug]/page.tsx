import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ProjectRepository } from '@/lib/repositories/project.repository';
import { LocalityRepository } from '@/lib/repositories/locality.repository';
import { formatIndianPrice } from '@/lib/formatters';
import { ArrowRight } from 'lucide-react';
import { Section, PageHeader, PrimaryButton } from '@/components/ui/minimal';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
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

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = ProjectRepository.getBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found | Gharapna' };
  }

  const locality = LocalityRepository.getBySlug(project.localitySlug);

  return {
    title: `${project.name}, ${locality?.name || 'PCMC'} | Verified Flats & Upfront Pricing`,
    description: `${project.name} in ${locality?.name || 'PCMC'}. Verified carpet areas and transparent pricing.`,
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  const projects = ProjectRepository.getAll();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = ProjectRepository.getBySlug(slug);

  if (!project) {
    notFound();
  }

  const locality = LocalityRepository.getBySlug(project.localitySlug);
  const minPrice = Math.min(...project.unitTypes.map((u) => u.indicativePriceMin));
  const bhkSummary = project.unitTypes.map((u) => `${u.bhk} BHK`).join(' & ');
  const carpetSummary = `${project.unitTypes[0]?.carpetAreaSqFtMin} - ${project.unitTypes[project.unitTypes.length - 1]?.carpetAreaSqFtMax} sq ft`;
  const img = getProjectImage(project.slug);

  const nameWords = project.name.split(' ');
  const prefix = nameWords.length > 1 ? nameWords.slice(0, -1).join(' ') : '';
  const accent = nameWords.length > 1 ? nameWords[nameWords.length - 1] : project.name;

  return (
    <Section size="standard" spacing="default">
      <div className="space-y-12">
        {/* Large Image (rounded-3xl) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-muted/10 shadow-sm">
          <Image
            src={img}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Title (one italic accent word) */}
        <PageHeader
          prefix={prefix}
          accent={accent}
          subtitle={project.tagline}
        />

        {/* Tabular Key Facts Layout */}
        <div className="rounded-3xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border text-sm">
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Starting Price</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                From {formatIndianPrice(minPrice)}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Configuration</span>
              <span className="font-bold text-base text-foreground block">
                {bhkSummary}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Carpet Area</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                {carpetSummary}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">RERA Registration</span>
              <span className="font-bold text-xs text-foreground tabular-nums block">
                {project.reraNumber}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-t divide-border text-sm">
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Locality</span>
              <Link
                href={`/locations/${project.localitySlug}`}
                className="font-medium text-sm text-foreground hover:text-coral-start transition-colors"
              >
                {locality?.name || 'PCMC'}, PCMC
              </Link>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Towers &amp; Floors</span>
              <span className="font-medium text-sm text-foreground block">
                {project.towersCount} Towers ({project.floorsDescription})
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Target Possession</span>
              <span className="font-medium text-sm text-foreground block">
                {project.possessionDate}
              </span>
            </div>
          </div>
        </div>

        {/* ONE Primary Action Button (coral gradient) */}
        <div className="pt-2">
          <PrimaryButton href={`/contact?project=${project.slug}`}>
            <span>Schedule Site Visit</span>
            <ArrowRight className="w-4 h-4" />
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
}
