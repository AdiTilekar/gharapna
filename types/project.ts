export interface PriceBreakup {
  agreementValue: number;
  stampDuty: number;        // 7% in PCMC
  registrationFee: number;  // 1% capped at ₹30,000
  gst: number;              // 5% standard (or 1% affordable)
  maintenanceAdvance: number;
  parkingCharges: number;
  documentationCharges: number;
  allInTotal: number;
  ratePerCarpetSqFt: number;
}

export interface PaymentScheduleItem {
  stage: string;
  milestoneDescription: string;
  percentage: number;
  indicativeTimeline: string;
}

export interface ConstructionMilestone {
  step: number;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  sampleDate: string; // explicitly labelled sample
  description: string;
}

export interface VaultDocument {
  id: string;
  title: string;
  category: 'rera' | 'title' | 'commencement' | 'sanction-plan' | 'environmental';
  status: 'To be uploaded';
  fileFormat?: string;
  fileSize?: string;
}

export interface UnitType {
  id: string;
  bhk: 1 | 2 | 3 | 4;
  carpetAreaSqFtMin: number;
  carpetAreaSqFtMax: number;
  indicativePriceMin: number;
  indicativePriceMax: number;
  floors: string;
  facingOptions: ('East' | 'West' | 'North' | 'North-East')[];
  breakupSample: PriceBreakup;
}

export interface ProjectFaq {
  question: string;
  answer: string;
}

export interface Project {
  slug: string;
  name: string;
  localitySlug: string;
  tagline: string;
  towersCount: number;
  floorsDescription: string; // e.g. "G+22"
  possessionDate: string;   // e.g. "Dec 2028"
  possessionStatus: 'under-construction' | 'ready-to-move';
  reraNumber: string;       // "P52100XXXXXX [TO BE ADDED]"
  reraVerificationUrl?: string; // disabled until real
  amenities: string[];      // 8-12 amenities
  unitTypes: UnitType[];
  paymentSchedule: PaymentScheduleItem[];
  constructionTimeline: ConstructionMilestone[];
  documentsVault: VaultDocument[];
  faqs: ProjectFaq[];
  coordinates: {
    lat: number;
    lng: number;
  };
  priceDisclaimer: string;
  isDemo: true;
}
