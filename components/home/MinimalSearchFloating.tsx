'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { LOCALITIES } from '@/data/localities';

export function MinimalSearchFloating() {
  const router = useRouter();
  const [selectedLocality, setSelectedLocality] = useState<string>('');
  const [selectedBhk, setSelectedBhk] = useState<string>('');
  const [selectedBudget, setSelectedBudget] = useState<string>('');

  // Primary active PCMC localities
  const activeLocalities = LOCALITIES.filter((loc) => loc.status === 'active');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (selectedLocality) {
      params.set('locality', selectedLocality);
    }
    if (selectedBhk) {
      params.set('bhk', selectedBhk);
    }
    if (selectedBudget) {
      params.set('budget', selectedBudget);
    }

    const query = params.toString();
    router.push(query ? `/flats?${query}` : '/flats');
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto font-sans">
      {/* Desktop Search Pill (Hidden on Mobile) */}
      <div className="hidden md:flex items-center justify-between bg-card rounded-full p-2 pl-8 pr-2 shadow-2xl border border-border transition-all">
        {/* Field 1: Area */}
        <div className="flex-1 text-left pr-4 cursor-pointer">
          <label
            htmlFor="search-area-desktop"
            className="text-[10px] uppercase font-bold tracking-wider text-muted block select-none cursor-pointer"
          >
            Area
          </label>
          <select
            id="search-area-desktop"
            value={selectedLocality}
            onChange={(e) => setSelectedLocality(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none cursor-pointer py-1"
          >
            <option value="" className="bg-background text-foreground">
              All Areas (PCMC)
            </option>
            {activeLocalities.map((loc) => (
              <option
                key={loc.slug}
                value={loc.slug}
                className="bg-background text-foreground"
              >
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Divider */}
        <div className="h-9 w-px bg-border" aria-hidden="true" />

        {/* Field 2: BHK */}
        <div className="flex-1 text-left px-5 cursor-pointer">
          <label
            htmlFor="search-bhk-desktop"
            className="text-[10px] uppercase font-bold tracking-wider text-muted block select-none cursor-pointer"
          >
            BHK
          </label>
          <select
            id="search-bhk-desktop"
            value={selectedBhk}
            onChange={(e) => setSelectedBhk(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none cursor-pointer py-1"
          >
            <option value="" className="bg-background text-foreground">
              Any BHK
            </option>
            <option value="1 BHK" className="bg-background text-foreground">
              1 BHK
            </option>
            <option value="2 BHK" className="bg-background text-foreground">
              2 BHK
            </option>
            <option value="3 BHK" className="bg-background text-foreground">
              3 BHK
            </option>
          </select>
        </div>

        {/* Divider */}
        <div className="h-9 w-px bg-border" aria-hidden="true" />

        {/* Field 3: Budget */}
        <div className="flex-1 text-left px-5 cursor-pointer">
          <label
            htmlFor="search-budget-desktop"
            className="text-[10px] uppercase font-bold tracking-wider text-muted block select-none cursor-pointer"
          >
            Budget
          </label>
          <select
            id="search-budget-desktop"
            value={selectedBudget}
            onChange={(e) => setSelectedBudget(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-foreground focus:outline-none cursor-pointer py-1"
          >
            <option value="" className="bg-background text-foreground">
              Any Budget
            </option>
            <option value="5000000" className="bg-background text-foreground">
              Under ₹50 Lakh
            </option>
            <option value="10000000" className="bg-background text-foreground">
              Up to ₹1.00 Crore
            </option>
            <option value="15000000" className="bg-background text-foreground">
              Up to ₹1.50 Crore
            </option>
            <option value="20000000" className="bg-background text-foreground">
              ₹1.50 Crore+
            </option>
          </select>
        </div>

        {/* Coral Gradient Search Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-coral-start to-coral-end hover:opacity-95 text-white font-semibold text-sm px-8 py-3.5 rounded-full flex items-center gap-2 shadow-md transition-all duration-200 active:scale-95 shrink-0 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>

      {/* Mobile Search Card (Stacked for Touch Ergonomics) */}
      <div className="md:hidden bg-card/95 backdrop-blur-md rounded-3xl p-5 shadow-2xl border border-border space-y-3.5 text-left">
        <div>
          <label
            htmlFor="search-area-mobile"
            className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1"
          >
            Area
          </label>
          <select
            id="search-area-mobile"
            value={selectedLocality}
            onChange={(e) => setSelectedLocality(e.target.value)}
            className="w-full bg-muted/10 rounded-2xl px-3.5 py-2.5 text-sm font-semibold text-foreground border border-border focus:outline-none"
          >
            <option value="" className="bg-background text-foreground">All Areas (PCMC)</option>
            {activeLocalities.map((loc) => (
              <option key={loc.slug} value={loc.slug} className="bg-background text-foreground">
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="search-bhk-mobile"
              className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1"
            >
              BHK
            </label>
            <select
              id="search-bhk-mobile"
              value={selectedBhk}
              onChange={(e) => setSelectedBhk(e.target.value)}
              className="w-full bg-muted/10 rounded-2xl px-3 py-2.5 text-sm font-semibold text-foreground border border-border focus:outline-none"
            >
              <option value="" className="bg-background text-foreground">Any BHK</option>
              <option value="1 BHK" className="bg-background text-foreground">1 BHK</option>
              <option value="2 BHK" className="bg-background text-foreground">2 BHK</option>
              <option value="3 BHK" className="bg-background text-foreground">3 BHK</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="search-budget-mobile"
              className="text-[10px] uppercase font-bold tracking-wider text-muted block mb-1"
            >
              Budget
            </label>
            <select
              id="search-budget-mobile"
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full bg-muted/10 rounded-2xl px-3 py-2.5 text-sm font-semibold text-foreground border border-border focus:outline-none"
            >
              <option value="" className="bg-background text-foreground">Any Budget</option>
              <option value="5000000" className="bg-background text-foreground">&lt; ₹50 L</option>
              <option value="10000000" className="bg-background text-foreground">&le; ₹1 Cr</option>
              <option value="15000000" className="bg-background text-foreground">&le; ₹1.5 Cr</option>
              <option value="20000000" className="bg-background text-foreground">₹1.5 Cr+</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-coral-start to-coral-end hover:opacity-95 text-white font-semibold text-sm py-3.5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <Search className="w-4 h-4" />
          <span>Search Flats</span>
        </button>
      </div>
    </form>
  );
}
