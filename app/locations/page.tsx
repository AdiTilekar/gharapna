import { Metadata } from 'next';
import { LocalityRepository } from '@/lib/repositories/locality.repository';
import { LocationsCatalogClient } from '@/components/locality/LocationsCatalogClient';
import { PageHeader, Section } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Localities in Pimpri-Chinchwad (PCMC) | Living Corridors',
  description:
    'Comprehensive directory of 27 localities across PCMC and adjoining corridors.',
};

export default function LocationsHubPage() {
  const localities = LocalityRepository.getAll();

  return (
    <Section size="wide" spacing="default">
      <div className="space-y-10">
        <PageHeader
          prefix="Living"
          accent="corridors"
          suffix="in Pimpri-Chinchwad"
        />

        <LocationsCatalogClient initialLocalities={localities} />
      </div>
    </Section>
  );
}
