import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FlatRepository } from '@/lib/repositories/flat.repository';
import { ProjectRepository } from '@/lib/repositories/project.repository';
import { LocalityRepository } from '@/lib/repositories/locality.repository';
import { calculatePriceBreakup } from '@/lib/calculators';
import { PriceBreakup } from '@/components/trust/PriceBreakup';
import { formatIndianPrice, formatArea, formatRatePerSqFt } from '@/lib/formatters';
import { siteConfig } from '@/config/site';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Section, PageHeader, PrimaryButton, SecondaryButton } from '@/components/ui/minimal';

interface FlatPageProps {
  params: Promise<{ slug: string }>;
}

function getFlatImage(projectName: string, localitySlug: string): string {
  const p = projectName.toLowerCase();
  if (p.includes('aangan') || localitySlug === 'wakad') return '/images/aangan.jpg';
  if (p.includes('tulsi') || localitySlug === 'ravet') return '/images/tulsi.jpg';
  if (p.includes('nilaya') || localitySlug === 'pimple-saudagar') return '/images/nilaya.jpg';
  return '/images/hero.jpg';
}

export async function generateMetadata({ params }: FlatPageProps): Promise<Metadata> {
  const { slug } = await params;
  const flat = FlatRepository.getBySlug(slug);

  if (!flat) {
    return { title: 'Flat Not Found | Gharapna' };
  }

  return {
    title: `${flat.bhk} BHK Flat in ${flat.localityName}, PCMC | ${flat.projectName}`,
    description: `${flat.bhk} BHK flat in ${flat.projectName}, ${flat.localityName}. Upfront cost breakup and verified carpet areas.`,
    robots: { index: false, follow: false },
  };
}

export async function generateStaticParams() {
  const flats = FlatRepository.getAll();
  return flats.map((f) => ({ slug: f.slug }));
}

export default async function FlatDetailPage({ params }: FlatPageProps) {
  const { slug } = await params;
  const flat = FlatRepository.getBySlug(slug);

  if (!flat) {
    notFound();
  }

  const project = ProjectRepository.getBySlug(flat.projectSlug);
  const locality = LocalityRepository.getBySlug(flat.localitySlug);
  const breakup = calculatePriceBreakup(flat.indicativePrice, flat.carpetAreaSqFt);
  const img = getFlatImage(flat.projectName, flat.localitySlug);

  const whatsappMessage = encodeURIComponent(
    `Hello Gharapna, I am interested in the ${flat.bhk} BHK flat (Floor ${flat.floor}) at ${flat.projectName}, ${flat.localityName}.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  return (
    <Section size="standard" spacing="default">
      <div className="space-y-12">
        {/* Large Image (rounded-3xl) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-muted/10 shadow-sm">
          <Image
            src={img}
            alt={`${flat.bhk} BHK at ${flat.projectName}`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Title (one italic accent word) */}
        <PageHeader
          prefix={`${flat.bhk} BHK at`}
          accent={flat.projectName}
          subtitle={`Floor ${flat.floor} of ${flat.totalFloors} • ${flat.facing} Facing • ${flat.possessionStatus}`}
        />

        {/* Tabular Key Facts Layout */}
        <div className="rounded-3xl border border-border overflow-hidden bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border text-sm">
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">All-In Price</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                {formatIndianPrice(flat.indicativePrice)}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Carpet Area</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                {formatArea(flat.carpetAreaSqFt)}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Rate / Sq Ft</span>
              <span className="font-bold text-base text-foreground tabular-nums block">
                {formatRatePerSqFt(Math.round(flat.indicativePrice / flat.carpetAreaSqFt))}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">RERA Registration</span>
              <span className="font-bold text-xs text-foreground tabular-nums block">
                {project?.reraNumber || 'P52100XXXXXX [TO BE ADDED]'}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-t divide-border text-sm">
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Locality</span>
              <Link
                href={`/locations/${flat.localitySlug}`}
                className="font-medium text-sm text-foreground hover:text-coral-start transition-colors"
              >
                {flat.localityName}, PCMC
              </Link>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Possession Status</span>
              <span className="font-medium text-sm text-foreground block">
                {flat.possessionStatus}
              </span>
            </div>
            <div className="p-5 space-y-1">
              <span className="text-xs text-muted block">Floor &amp; Orientation</span>
              <span className="font-medium text-sm text-foreground block">
                Floor {flat.floor} • {flat.facing}
              </span>
            </div>
          </div>
        </div>

        {/* Action Row: ONE primary enquiry button (coral gradient) + WhatsApp pill */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <PrimaryButton href={`/contact?flat=${flat.slug}`}>
            <span>Enquire About This Unit</span>
            <ArrowRight className="w-4 h-4" />
          </PrimaryButton>

          <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 text-emerald-500" />
            <span>Chat on WhatsApp</span>
          </SecondaryButton>
        </div>

        {/* Transparent Cost Breakup */}
        <PriceBreakup
          breakup={breakup}
          carpetAreaSqFt={flat.carpetAreaSqFt}
          unitLabel={`${flat.bhk} BHK • Floor ${flat.floor}`}
        />
      </div>
    </Section>
  );
}
