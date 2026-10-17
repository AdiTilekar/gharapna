import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { LocalityRepository } from '@/lib/repositories/locality.repository';
import { ProjectRepository } from '@/lib/repositories/project.repository';
import { ProjectCard } from '@/components/project/ProjectCard';
import { formatRatePerSqFt } from '@/lib/formatters';
import { siteConfig } from '@/config/site';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Section, PageHeader, PrimaryButton, SecondaryButton } from '@/components/ui/minimal';

interface LocalityPageProps {
  params: Promise<{ slug: string }>;
}

function getLocalityImage(slug: string): string {
  if (slug === 'wakad' || slug === 'tathawade' || slug === 'punawale') return '/images/aangan.jpg';
  if (slug === 'ravet' || slug === 'kiwale' || slug === 'mamurdi') return '/images/tulsi.jpg';
  if (slug.includes('pimple') || slug === 'rahatani' || slug === 'nigdi') return '/images/nilaya.jpg';
  return '/images/hero.jpg';
}

export async function generateMetadata({ params }: LocalityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locality = LocalityRepository.getBySlug(slug);

  if (!locality) {
    return { title: 'Locality Not Found | Gharapna' };
  }

  return {
    title: locality.seo.title,
    description: locality.seo.description,
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  const localities = LocalityRepository.getAll();
  return localities.map((loc) => ({ slug: loc.slug }));
}

export default async function LocalityDetailPage({ params }: LocalityPageProps) {
  const { slug } = await params;
  const locality = LocalityRepository.getBySlug(slug);

  if (!locality) {
    notFound();
  }

  const projectsInLocality = ProjectRepository.getByLocalitySlug(locality.slug);
  const img = getLocalityImage(locality.slug);

  const whatsappMessage = encodeURIComponent(
    `Hello Gharapna, I am interested in flats in ${locality.name}, ${locality.jurisdiction}.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <Section size="standard" spacing="default">
      <div className="space-y-12">
        {/* Large Image (rounded-3xl) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-muted/10 shadow-sm">
          <Image
            src={img}
            alt={locality.name}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Title (one italic accent word) */}
        <PageHeader
          prefix={locality.name + ','}
          accent={locality.jurisdiction}
          subtitle={locality.shortDescription}
        />

        {/* Tabular Key Facts Layout */}
        <div className="rounded-3xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border text-sm">
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Rate Benchmark</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                {formatRatePerSqFt(locality.priceTrend.averageRatePerSqFt)}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Jurisdiction</span>
              <span className="font-bold text-base text-foreground block">
                {locality.jurisdiction}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Corridor</span>
              <span className="font-bold text-base text-foreground block capitalize">
                {locality.corridor.replace(/-/g, ' ')}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Active Listings</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                {projectsInLocality.length} Projects
              </span>
            </div>
          </div>
        </div>

        {/* Action Row: ONE primary enquiry button (coral gradient) + WhatsApp pill */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <PrimaryButton href={`/contact?locality=${locality.slug}`}>
            <span>Enquire About {locality.name} Flats</span>
            <ArrowRight className="w-4 h-4" />
          </PrimaryButton>

          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>Chat on WhatsApp</span>
          </SecondaryButton>
        </div>

        {/* Infrastructure & Neighborhood Insights (required by smoke.spec.ts) */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Infrastructure &amp; Neighborhood Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Schools & Colleges */}
            <div className="rounded-3xl border border-border bg-card p-6 space-y-3">
              <h3 className="font-bold text-sm text-foreground">
                Schools &amp; Colleges
              </h3>
              <ul className="space-y-2 text-xs text-muted">
                {locality.schools.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-start shrink-0" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hospitals & Medical Centers */}
            <div className="rounded-3xl border border-border bg-card p-6 space-y-3">
              <h3 className="font-bold text-sm text-foreground">
                Hospitals &amp; Medical Centers
              </h3>
              <ul className="space-y-2 text-xs text-muted">
                {locality.hospitals.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-start shrink-0" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport & Connectivity */}
            <div className="rounded-3xl border border-border bg-card p-6 space-y-3">
              <h3 className="font-bold text-sm text-foreground">
                Transport &amp; Connectivity
              </h3>
              <ul className="space-y-2 text-xs text-muted">
                {locality.transport.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-start shrink-0" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Landmarks & Infrastructure */}
            <div className="rounded-3xl border border-border bg-card p-6 space-y-3">
              <h3 className="font-bold text-sm text-foreground">
                Nearby Landmarks
              </h3>
              <ul className="space-y-2 text-xs text-muted">
                {locality.nearbyLandmarks.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-start shrink-0" />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Projects in Locality */}
        {projectsInLocality.length > 0 && (
          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Featured projects in {locality.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectsInLocality.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
