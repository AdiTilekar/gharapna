'use client';

import { useState, useMemo } from 'react';
import { Locality, CorridorType } from '@/types/locality';
import { LocalityCard } from './LocalityCard';

interface LocationsCatalogClientProps {
  initialLocalities: Locality[];
}

export function LocationsCatalogClient({ initialLocalities }: LocationsCatalogClientProps) {
  const [selectedCorridor, setSelectedCorridor] = useState<string>('all');

  const corridors: { id: CorridorType | 'all'; label: string }[] = [
    { id: 'all', label: 'All Corridors' },
    { id: 'west-it-belt', label: 'West / IT Belt' },
    { id: 'north-central', label: 'North-Central' },
    { id: 'central', label: 'Central PCMC' },
    { id: 'north-alandi-nashik', label: 'North / Spine Road' },
    { id: 'nearby-pmc-pmrda', label: 'Nearby PMC/PMRDA' },
  ];

  const filteredLocalities = useMemo(() => {
    if (selectedCorridor === 'all') return initialLocalities;
    return initialLocalities.filter((loc) => loc.corridor === selectedCorridor);
  }, [initialLocalities, selectedCorridor]);

  return (
    <div className="space-y-10 font-sans">
      {/* Slim Filter Row */}
      <div className="flex flex-wrap items-center gap-2 py-3 border-y border-border text-xs">
        {corridors.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCorridor(c.id)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCorridor === c.id
                ? 'bg-foreground text-background'
                : 'border border-border text-muted hover:text-foreground'
            }`}
          >
            {c.label}
          </button>
        ))}

        <span className="text-muted text-xs font-medium ml-auto">
          {filteredLocalities.length} areas
        </span>
      </div>

      {/* Grid of rounded-3xl cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {filteredLocalities.map((loc) => (
          <LocalityCard key={loc.slug} locality={loc} />
        ))}
      </div>
    </div>
  );
}
