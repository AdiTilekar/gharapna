export type CorridorType =
  | 'west-it-belt'
  | 'north-central'
  | 'central'
  | 'north-alandi-nashik'
  | 'nearby-pmc-pmrda';

export type JurisdictionType = 'PCMC' | 'PMRDA' | 'PMC';

export interface InfrastructureItem {
  name: string;
  type: 'school' | 'hospital' | 'transport' | 'landmark' | 'upcoming';
  detail: string;
  sourceNote: '[VERIFY]' | '[SOURCE TO ADD]';
}

export interface Locality {
  slug: string;
  name: string;
  corridor: CorridorType;
  jurisdiction: JurisdictionType;
  shortDescription: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  nearbyLandmarks: InfrastructureItem[];
  schools: InfrastructureItem[];
  hospitals: InfrastructureItem[];
  transport: InfrastructureItem[];
  upcomingInfrastructure: InfrastructureItem[];
  priceTrend: {
    averageRatePerSqFt: number;
    trendPercentageYearly: number;
    note: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  status: 'active' | 'coming-soon';
  isDemo: true;
}
