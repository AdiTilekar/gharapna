import { Metadata } from 'next';
import { Suspense } from 'react';
import { FlatRepository } from '@/lib/repositories/flat.repository';
import { FlatsCatalogClient } from '@/components/flat/FlatsCatalogClient';
import { PageHeader, Section } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Flats for Sale in PCMC, Pune | Verified Units',
  description:
    'Search verified flats across Wakad, Ravet, Pimple Saudagar, Nigdi, Moshi, and Charholi with upfront cost breakups.',
};

export default function FlatsCatalogPage() {
  const flats = FlatRepository.getAll();

  return (
    <Section size="wide" spacing="default">
      <div className="space-y-10">
        <PageHeader
          prefix="Verified"
          accent="Flats"
          suffix="in Pimpri-Chinchwad"
        />

        <Suspense fallback={<div className="py-20 text-center text-xs text-muted">Loading flats...</div>}>
          <FlatsCatalogClient initialFlats={flats} />
        </Suspense>
      </div>
    </Section>
  );
}
