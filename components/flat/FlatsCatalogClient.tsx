'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Flat } from '@/types/flat';
import { LOCALITIES } from '@/data/localities';
import { formatIndianPrice, formatArea } from '@/lib/formatters';
import { Card } from '@/components/ui/minimal';

interface FlatsCatalogClientProps {
  initialFlats: (Flat & { coordinates: { lat: number; lng: number } })[];
}

function getFlatImage(projectName: string, localitySlug: string): string {
  const p = projectName.toLowerCase();
  if (p.includes('aangan') || localitySlug === 'wakad') return '/images/aangan.jpg';
  if (p.includes('tulsi') || localitySlug === 'ravet') return '/images/tulsi.jpg';
  if (p.includes('nilaya') || localitySlug === 'pimple-saudagar') return '/images/nilaya.jpg';
  return '/images/hero.jpg';
}

export function FlatsCatalogClient({ initialFlats }: FlatsCatalogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State from URL
  const [selectedLocality, setSelectedLocality] = useState<string>(
    searchParams.get('locality') || searchParams.get('localities') || 'all'
  );
  const [selectedBhk, setSelectedBhk] = useState<string>(
    searchParams.get('bhk') || 'all'
  );
  const [budgetRange, setBudgetRange] = useState<string>(
    searchParams.get('budget') || 'all'
  );
  const [sortBy, setSortBy] = useState<string>(
    searchParams.get('sort') || 'price-asc'
  );

  // Sync to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedLocality && selectedLocality !== 'all') params.set('locality', selectedLocality);
    if (selectedBhk && selectedBhk !== 'all') params.set('bhk', selectedBhk);
    if (budgetRange && budgetRange !== 'all') params.set('budget', budgetRange);
    if (sortBy && sortBy !== 'price-asc') params.set('sort', sortBy);

    const queryString = params.toString();
    router.replace(`/flats${queryString ? `?${queryString}` : ''}`, { scroll: false });
  }, [selectedLocality, selectedBhk, budgetRange, sortBy, router]);

  // Filter & sort logic
  const filteredFlats = useMemo(() => {
    let list = [...initialFlats];

    // Locality
    if (selectedLocality !== 'all') {
      list = list.filter((f) => f.localitySlug === selectedLocality);
    }

    // BHK
    if (selectedBhk !== 'all') {
      list = list.filter((f) => f.bhk === Number(selectedBhk));
    }

    // Budget
    if (budgetRange === 'under-60') {
      list = list.filter((f) => f.indicativePrice < 6000000);
    } else if (budgetRange === '60-90') {
      list = list.filter((f) => f.indicativePrice >= 6000000 && f.indicativePrice <= 9000000);
    } else if (budgetRange === '90-120') {
      list = list.filter((f) => f.indicativePrice > 9000000 && f.indicativePrice <= 12000000);
    } else if (budgetRange === 'above-120') {
      list = list.filter((f) => f.indicativePrice > 12000000);
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'price-asc') return a.indicativePrice - b.indicativePrice;
      if (sortBy === 'price-desc') return b.indicativePrice - a.indicativePrice;
      if (sortBy === 'area-desc') return b.carpetAreaSqFt - a.carpetAreaSqFt;
      return 0;
    });

    return list;
  }, [initialFlats, selectedLocality, selectedBhk, budgetRange, sortBy]);

  const activeLocalities = useMemo(() => {
    return LOCALITIES.filter((l) => l.status === 'active');
  }, []);

  return (
    <div className="space-y-10 font-sans">
      {/* Slim Filter Row */}
      <div className="flex flex-wrap items-center gap-3 py-3 border-y border-border text-xs">
        {/* Locality */}
        <select
          value={selectedLocality}
          onChange={(e) => setSelectedLocality(e.target.value)}
          className="bg-transparent border border-border text-foreground rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer"
        >
          <option value="all" className="bg-background text-foreground">All Localities</option>
          {activeLocalities.map((loc) => (
            <option key={loc.slug} value={loc.slug} className="bg-background text-foreground">
              {loc.name}
            </option>
          ))}
        </select>

        {/* BHK */}
        <select
          value={selectedBhk}
          onChange={(e) => setSelectedBhk(e.target.value)}
          className="bg-transparent border border-border text-foreground rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer"
        >
          <option value="all" className="bg-background text-foreground">Any BHK</option>
          <option value="1" className="bg-background text-foreground">1 BHK</option>
          <option value="2" className="bg-background text-foreground">2 BHK</option>
          <option value="3" className="bg-background text-foreground">3 BHK</option>
        </select>

        {/* Budget */}
        <select
          value={budgetRange}
          onChange={(e) => setBudgetRange(e.target.value)}
          className="bg-transparent border border-border text-foreground rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer"
        >
          <option value="all" className="bg-background text-foreground">Any Budget</option>
          <option value="under-60" className="bg-background text-foreground">Under ₹60 L</option>
          <option value="60-90" className="bg-background text-foreground">₹60 L - ₹90 L</option>
          <option value="90-120" className="bg-background text-foreground">₹90 L - ₹1.2 Cr</option>
          <option value="above-120" className="bg-background text-foreground">Above ₹1.2 Cr</option>
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-transparent border border-border text-foreground rounded-full px-4 py-2 font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer ml-auto"
        >
          <option value="price-asc" className="bg-background text-foreground">Price: Low to High</option>
          <option value="price-desc" className="bg-background text-foreground">Price: High to Low</option>
          <option value="area-desc" className="bg-background text-foreground">Area: Large to Small</option>
        </select>

        {/* Results Count */}
        <span className="text-muted text-xs font-medium pl-1">
          {filteredFlats.length} flats
        </span>
      </div>

      {/* Grid of rounded-3xl cards matching Featured Projects */}
      {filteredFlats.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-sm text-muted">
            No flats found matching your selected criteria.
          </p>
          <button
            onClick={() => {
              setSelectedLocality('all');
              setSelectedBhk('all');
              setBudgetRange('all');
              setSortBy('price-asc');
            }}
            className="mt-3 text-xs font-semibold text-coral-start hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {filteredFlats.map((flat) => {
            const img = getFlatImage(flat.projectName, flat.localitySlug);
            return (
              <Card
                key={flat.id}
                href={`/flats/${flat.slug}`}
                imageSrc={img}
                imageAlt={`${flat.bhk} BHK at ${flat.projectName}`}
                title={`${flat.bhk} BHK • ${flat.projectName}`}
                price={formatIndianPrice(flat.indicativePrice)}
                subtitle={`${flat.localityName} • ${formatArea(flat.carpetAreaSqFt)} • Floor ${flat.floor}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
