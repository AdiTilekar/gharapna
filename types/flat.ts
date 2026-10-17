export interface Flat {
  id: string;
  slug: string; // e.g. "2-bhk-flat-in-wakad-pune"
  projectSlug: string;
  projectName: string;
  localitySlug: string;
  localityName: string;
  bhk: 1 | 2 | 3 | 4;
  carpetAreaSqFt: number;
  floor: number;
  totalFloors: number;
  facing: 'East' | 'West' | 'North' | 'North-East';
  indicativePrice: number;
  possessionStatus: 'under-construction' | 'ready-to-move';
  possessionDate: string;
  isDemo: true;
}

export interface FlatFilters {
  localitySlugs?: string[];
  bhk?: number[];
  minBudget?: number;
  maxBudget?: number;
  minCarpetArea?: number;
  maxCarpetArea?: number;
  possessionStatus?: ('under-construction' | 'ready-to-move')[];
  facing?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'carpet-asc' | 'carpet-desc';
}
