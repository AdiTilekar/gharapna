import { Locality } from '@/types/locality';

export const LOCALITIES: Locality[] = [
  // ==========================================
  // WEST / IT BELT CORRIDOR
  // ==========================================
  {
    slug: 'wakad',
    name: 'Wakad',
    corridor: 'west-it-belt',
    jurisdiction: 'PCMC',
    status: 'active',
    isDemo: true,
    coordinates: { lat: 18.5987, lng: 73.7663 },
    shortDescription:
      'Wakad stands as one of the most prominent residential hubs in western Pimpri-Chinchwad, favored heavily by software professionals due to its immediate proximity to the Hinjewadi Rajiv Gandhi Infotech Park. Flanked by the Mumbai-Bengaluru highway, the area provides seamless interstate and intercity transit. Wakad is distinguished by modern high-rise gated communities, bustling commercial avenues, prominent international schools, and comprehensive retail options. With rapid ongoing municipal developments and wide arterial roads, it represents a balanced neighborhood offering contemporary lifestyle conveniences and strong long-term residential appeal across PCMC.',
    nearbyLandmarks: [
      { name: 'Mumbai-Bengaluru Highway Bypass', type: 'landmark', detail: 'Key arterial transit corridor [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'D-Mart Wakad', type: 'landmark', detail: 'Prominent neighborhood retail center', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Wisdom World School', type: 'school', detail: 'Reputed ICSE curriculum institution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'EuroSchool Wakad', type: 'school', detail: 'CBSE affiliated campus', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Lifepoint Multispeciality Hospital', type: 'hospital', detail: '24/7 critical and emergency care center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Surya Mother & Child Super Specialty Hospital', type: 'hospital', detail: 'Specialized healthcare facility', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'PMPML Bus Junctions', type: 'transport', detail: 'Direct connectivity to Hinjewadi and Pune city [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Upcoming Metro Line 3 Corridor', type: 'transport', detail: 'Proposed elevated transit connectivity [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Proposed Ring Road Node', type: 'upcoming', detail: 'Planned regional bypass network [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 7200,
      trendPercentageYearly: 6.5,
      note: 'Indicative historical trend for sample evaluation [VERIFY]',
    },
    seo: {
      title: 'Flats in Wakad, Pimpri Chinchwad | 2 & 3 BHK Homes | Gharapna',
      description: 'Explore verified residential flats in Wakad, PCMC. Transparent pricing, verified carpet areas, and RERA status tracking close to Hinjewadi IT Park.',
      keywords: ['flats in wakad', '2 bhk in wakad', '3 bhk flats wakad pcmc', 'rera flats in wakad pune'],
    },
  },
  {
    slug: 'ravet',
    name: 'Ravet',
    corridor: 'west-it-belt',
    jurisdiction: 'PCMC',
    status: 'active',
    isDemo: true,
    coordinates: { lat: 18.6534, lng: 73.7441 },
    shortDescription:
      'Ravet is widely recognized as the gateway to the Mumbai-Pune Expressway, making it an exceptionally strategic location for frequent commuters between Pune and Mumbai. Over recent years, Ravet has evolved into an educational and residential center, boasting premier professional colleges and thoughtfully planned residential townships. Its strategic positioning provides convenient access to both the industrial belts of PCMC and the technology campuses of Hinjewadi. With wide internal avenues, riverside breeze, and upcoming commercial clusters, Ravet appeals strongly to families seeking spacious homes and long-term infrastructural growth potential.',
    nearbyLandmarks: [
      { name: 'Mumbai-Pune Expressway Toll Exit', type: 'landmark', detail: 'Direct express access gateway [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Pavana Riverfront', type: 'landmark', detail: 'Natural geographic boundary and green stretch', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'D.Y. Patil Dnyanshanti School', type: 'school', detail: 'K-12 campus located in Ravet [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'S.B. Patil Public School', type: 'school', detail: 'CBSE affiliated campus', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Ojas Multispeciality Hospital', type: 'hospital', detail: 'Tertiary healthcare services [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Akurdi Railway Station Connectivity', type: 'transport', detail: 'Suburban local train terminal connection [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'BRTS Corridor Node', type: 'transport', detail: 'Dedicated bus rapid transit route [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Ravet-Kiwale Waterfront Development', type: 'upcoming', detail: 'Proposed municipal promenade [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6400,
      trendPercentageYearly: 7.2,
      note: 'Indicative historical trend for sample evaluation [VERIFY]',
    },
    seo: {
      title: 'Flats in Ravet, PCMC | 1 & 2 BHK Affordable Luxury | Gharapna',
      description: 'Discover flats in Ravet near the Mumbai-Pune Expressway. Upfront price breakups, RERA compliance tracking, and transparent carpet areas.',
      keywords: ['flats in ravet', '1 bhk in ravet', '2 bhk in ravet pcmc', 'flats near mumbai pune expressway'],
    },
  },
  {
    slug: 'tathawade',
    name: 'Tathawade',
    corridor: 'west-it-belt',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6189, lng: 73.7547 },
    shortDescription:
      'Tathawade has emerged as a major educational and residential hotspot nestled seamlessly between Wakad and the Hinjewadi IT corridor. The area houses several leading university campuses, business schools, and junior colleges, creating a vibrant student and young-professional demographic. With ongoing civic infrastructure upgrades by PCMC, Tathawade offers modern high-rise gated communities at relatively accessible price points compared to central Wakad, making it popular among first-time homebuyers and long-term rental investors.',
    nearbyLandmarks: [
      { name: 'Indira College Campus', type: 'landmark', detail: 'Prominent landmark educational cluster [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Blossom Public School', type: 'school', detail: 'Reputed school campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Aditya Birla Memorial Hospital nearby', type: 'hospital', detail: 'Multi-specialty quaternary care [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'National Highway 48 Proximity', type: 'transport', detail: 'Immediate highway access [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Grade Separator Junctions', type: 'upcoming', detail: 'PCMC traffic decongestion project [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6700,
      trendPercentageYearly: 6.8,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Tathawade, PCMC | Properties Coming Soon | Gharapna',
      description: 'Find future verified residential projects in Tathawade, PCMC. Honest real estate advice with complete price transparency.',
      keywords: ['flats in tathawade', 'tathawade real estate pcmc'],
    },
  },
  {
    slug: 'punawale',
    name: 'Punawale',
    corridor: 'west-it-belt',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6321, lng: 73.7482 },
    shortDescription:
      'Punawale is an expanding residential neighborhood positioned strategically between Wakad and Ravet along the western boundary of PCMC. Known for its tranquil environment and rapidly modernizing roadway infrastructure, Punawale has caught the attention of leading real estate developers creating large integrated townships. Its easy access to Hinjewadi via arterial bypass roads makes it a compelling alternative for IT professionals seeking larger carpet areas within competitive budgets.',
    nearbyLandmarks: [
      { name: 'Katope Nagar Greens', type: 'landmark', detail: 'Residential pocket and community center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Lotus Business School', type: 'school', detail: 'Educational institute [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Life Care Hospital', type: 'hospital', detail: 'Local healthcare center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Punawale Underpass Access', type: 'transport', detail: 'Direct access to bypass highway [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'PCMC Smart City Road Widening', type: 'upcoming', detail: 'Widened DP roads under execution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6100,
      trendPercentageYearly: 7.0,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Punawale, PCMC | Verified Property Listings | Gharapna',
      description: 'Explore upcoming residential properties in Punawale, Pimpri Chinchwad. Transparent figures, RERA status, and clean carpet areas.',
      keywords: ['flats in punawale', 'punawale pcmc flats'],
    },
  },
  {
    slug: 'kiwale',
    name: 'Kiwale',
    corridor: 'west-it-belt',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6672, lng: 73.7319 },
    shortDescription:
      'Kiwale marks the northern gateway of the western PCMC corridor, situated right at the junction where the Mumbai-Pune Expressway originates and connects with the Katraj-Dehu Road bypass. Due to its strategic logistics and transport position, Kiwale has experienced noticeable residential development characterized by open green spaces, scenic hill views, and lower density living. It is ideal for industrial executives, expressway commuters, and families desiring quiet surroundings with rapid expressway connectivity.',
    nearbyLandmarks: [
      { name: 'Mukhai Temple & Ghats', type: 'landmark', detail: 'Historic local landmark [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Kendriya Vidyalaya Dehu Road nearby', type: 'school', detail: 'Central government school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Cantonment General Hospital nearby', type: 'hospital', detail: 'Community hospital facility [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Dehu Road Railway Station', type: 'transport', detail: 'Suburban train connectivity [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Proposed Ring Road Intersection', type: 'upcoming', detail: 'Outer ring road node [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5600,
      trendPercentageYearly: 5.9,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Kiwale, PCMC | Emerging Expressway Hub | Gharapna',
      description: 'Discover upcoming flats in Kiwale, PCMC near the Mumbai-Pune Expressway. Transparent real estate information with Gharapna.',
      keywords: ['flats in kiwale', 'kiwale real estate pcmc'],
    },
  },
  {
    slug: 'mamurdi',
    name: 'Mamurdi',
    corridor: 'west-it-belt',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6812, lng: 73.7198 },
    shortDescription:
      'Mamurdi is the westernmost suburban precinct of Pimpri-Chinchwad, recognized for its peaceful semi-urban charm, lush topography, and direct access to the Mumbai-Pune Expressway corridor. With prestigious national developers acquiring extensive land banks here, Mamurdi is rapidly transforming into a resort-style township destination. Homeowners in Mamurdi enjoy fresh air, expansive clubhouse developments, and hassle-free weekend commutes toward Lonavala and Mumbai.',
    nearbyLandmarks: [
      { name: 'MCA Pune International Cricket Stadium nearby', type: 'landmark', detail: 'Major sports venue located nearby [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Symbiosis Skills & Professional University nearby', type: 'school', detail: 'Higher education campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Pawana Multispeciality Hospital', type: 'hospital', detail: 'Healthcare facility [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Ghorawadi Railway Station nearby', type: 'transport', detail: 'Suburban local halt [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Expressway Service Road Augmentation', type: 'upcoming', detail: 'Access infrastructure expansion [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5800,
      trendPercentageYearly: 6.2,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Mamurdi, PCMC | Township Homes | Gharapna',
      description: 'Explore upcoming township developments in Mamurdi, PCMC. Honest property data and verified numbers.',
      keywords: ['flats in mamurdi', 'mamurdi pcmc flats'],
    },
  },

  // ==========================================
  // NORTH-CENTRAL CORRIDOR
  // ==========================================
  {
    slug: 'pimple-saudagar',
    name: 'Pimple Saudagar',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'active',
    isDemo: true,
    coordinates: { lat: 18.5982, lng: 73.7978 },
    shortDescription:
      'Pimple Saudagar is widely considered the crown jewel of modern urban living in Pimpri-Chinchwad. Characterized by wide tree-lined boulevards, meticulously planned residential sectors, and an extraordinary concentration of fine-dining, supermarkets, and parks, it represents an established, aspirational neighborhood. Pimple Saudagar offers swift access to both Hinjewadi IT Park and Pune central districts via Aundh and Wakad. It is home to upscale gated societies, renowned schools, and advanced medical infrastructure, making it the preferred choice for discerning families and senior corporate executives.',
    nearbyLandmarks: [
      { name: 'Linear Garden Pimple Saudagar', type: 'landmark', detail: 'Renowned urban green park and jogging track [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Kunegaon Market Avenue', type: 'landmark', detail: 'High-street retail and dining zone', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'P.K. International School', type: 'school', detail: 'Established educational institute [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Challenger Public School', type: 'school', detail: 'Modern CBSE curriculum campus', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Lotus Multispeciality Hospital', type: 'hospital', detail: '24-hour emergency and surgical hospital [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Maxcare Hospital', type: 'hospital', detail: 'Comprehensive medical center', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Nashik Phata - Wakad BRTS Corridor', type: 'transport', detail: 'Fast rapid bus transit line [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Kasarwadi Metro Station Connectivity', type: 'transport', detail: 'Direct connection to Pune Metro Line 1 [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Smart City Cycle Track & Footpath Upgrade', type: 'upcoming', detail: 'Ongoing municipal pedestrian enhancements [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 8100,
      trendPercentageYearly: 5.8,
      note: 'Indicative historical trend for sample evaluation [VERIFY]',
    },
    seo: {
      title: 'Flats in Pimple Saudagar, PCMC | Premium 2 & 3 BHK | Gharapna',
      description: 'Verified residential flats in Pimple Saudagar, PCMC. Transparent price breakdowns, verified carpet sizes, and RERA tracking.',
      keywords: ['flats in pimple saudagar', '2 bhk in pimple saudagar', '3 bhk pimple saudagar', 'pcmc luxury flats'],
    },
  },
  {
    slug: 'pimple-nilakh',
    name: 'Pimple Nilakh',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.5794, lng: 73.7912 },
    shortDescription:
      'Pimple Nilakh sits on the southern edge of PCMC, directly bordering Pune city’s prestigious Baner and Aundh localities across the Mula River. Because of this strategic boundary location, Pimple Nilakh provides residents with the sophisticated amenities of Baner alongside PCMC’s robust municipal utilities and infrastructure. It features luxury high-rises, expansive defense green buffers, and vibrant riverside recreational zones, appealing to executive buyers seeking prestige and convenience.',
    nearbyLandmarks: [
      { name: 'Jupiter Hospital nearby (Baner link)', type: 'landmark', detail: 'Quaternary healthcare hub [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'The Orchid School nearby', type: 'school', detail: 'Progressive educational campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Apple Hospital', type: 'hospital', detail: 'Local multispeciality center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Baner-Pimple Nilakh Link Bridge', type: 'transport', detail: 'Immediate transit into PMC limits [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Mula River Rejuvenation Project', type: 'upcoming', detail: 'Planned riverside ecological promenade [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 8600,
      trendPercentageYearly: 6.1,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Pimple Nilakh, PCMC | Luxury Living | Gharapna',
      description: 'Explore upcoming premium flats in Pimple Nilakh, bordering Baner and Aundh. Clear price breakups and honest advice.',
      keywords: ['flats in pimple nilakh', 'pimple nilakh baner link'],
    },
  },
  {
    slug: 'pimple-gurav',
    name: 'Pimple Gurav',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.5935, lng: 73.8194 },
    shortDescription:
      'Pimple Gurav is a well-established, lively residential area celebrated across PCMC for its municipal parks, most notably the Dinosaur Park and Rajmata Jijau Garden. It provides excellent connectivity to Kasarwadi railway station, Dapodi, and the Old Pune-Mumbai Highway. Homebuyers appreciate Pimple Gurav for its vibrant local bazaars, peaceful community environment, and balanced real estate pricing compared to neighboring Pimple Saudagar.',
    nearbyLandmarks: [
      { name: 'Dinosaur Theme Park', type: 'landmark', detail: 'Renowned public recreational park [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'SNBP International School', type: 'school', detail: 'CBSE curriculum campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Gurukrupa Hospital', type: 'hospital', detail: 'Community medical center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Nashik Phata BRTS Corridor', type: 'transport', detail: 'Rapid connectivity across PCMC [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'PCMC Smart Park Enhancement', type: 'upcoming', detail: 'Community recreation upgrade [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6900,
      trendPercentageYearly: 5.3,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Pimple Gurav, PCMC | Family Neighborhood | Gharapna',
      description: 'Discover upcoming residential options in Pimple Gurav. Honest real estate figures with zero hidden costs.',
      keywords: ['flats in pimple gurav', 'pimple gurav real estate'],
    },
  },
  {
    slug: 'rahatani',
    name: 'Rahatani',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6092, lng: 73.7841 },
    shortDescription:
      'Rahatani bridges the gap between Wakad, Pimple Saudagar, and Kalewadi, making it an exceptionally well-connected residential belt in north-central PCMC. Often recognized as a budget-friendly counterpart to Pimple Saudagar, Rahatani has witnessed rapid high-rise residential construction accompanied by comprehensive civic utility improvements. Its strategic position offers easy access to the Hinjewadi IT corridor while retaining a self-sufficient suburban neighborhood atmosphere.',
    nearbyLandmarks: [
      { name: 'Rahatani Phata Commercial Square', type: 'landmark', detail: 'Major local junction [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'SNBP School & College Rahatani', type: 'school', detail: 'Educational complex [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Healing Touch Hospital', type: 'hospital', detail: 'Healthcare facility [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Wakad-Rahatani Link Road', type: 'transport', detail: 'Direct access to expressway bypass [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Internal 24-Meter DP Road Expansion', type: 'upcoming', detail: 'Municipal transit upgrade [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6600,
      trendPercentageYearly: 6.0,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Rahatani, PCMC | Affordable Homes | Gharapna',
      description: 'Upcoming residential flats in Rahatani, PCMC. Reliable data, upfront price estimates, and RERA transparency.',
      keywords: ['flats in rahatani', 'rahatani pcmc homes'],
    },
  },
  {
    slug: 'kalewadi',
    name: 'Kalewadi',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6148, lng: 73.7994 },
    shortDescription:
      'Kalewadi is an energetic, strategically placed central neighborhood bounded by the Pavana River on one side and Pimpri industrial clusters on the other. With the construction of the Kalewadi Phata to Empire Estate flyover and elevated BRTS corridor, connectivity between Kalewadi, Pimpri, and Chinchwad has been dramatically enhanced. It offers value-oriented housing options for families working in both the PCMC manufacturing sector and the IT corridor.',
    nearbyLandmarks: [
      { name: 'Kalewadi Phata Overbridge', type: 'landmark', detail: 'Crucial traffic interchange [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Alphonso High School', type: 'school', detail: 'Local secondary school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Jyoti Hospital', type: 'hospital', detail: 'General and emergency care [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Kalewadi BRTS Corridor', type: 'transport', detail: 'Rapid city bus connectivity [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Pavana Riverside Road Link', type: 'upcoming', detail: 'Proposed municipal bypass road [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6200,
      trendPercentageYearly: 5.1,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Kalewadi, PCMC | Central Connectivity | Gharapna',
      description: 'Explore upcoming flats in Kalewadi, PCMC. Reliable information, zero sales spin, and verified numbers.',
      keywords: ['flats in kalewadi', 'kalewadi pcmc property'],
    },
  },
  {
    slug: 'thergaon',
    name: 'Thergaon',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6152, lng: 73.7781 },
    shortDescription:
      'Thergaon is an expansive residential locality located immediately east of Wakad, known for historical landmarks like the Morya Gosavi Temple grounds along the Pavana River. Offering a diverse mix of affordable housing and modern multi-storey apartments, Thergaon caters to budget-conscious homebuyers who desire proximity to Wakad and Hinjewadi without the higher price tags. It features abundant daily markets, schools, and strong public transit routes.',
    nearbyLandmarks: [
      { name: 'Thergaon Boat Club & Pavana Ghat', type: 'landmark', detail: 'Municipal recreation area [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Ashoka Universal School', type: 'school', detail: 'CBSE school campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Aditya Birla Memorial Hospital', type: 'hospital', detail: 'Flagship quaternary care hospital nearby [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Dange Chowk Junction', type: 'transport', detail: 'Major regional road hub [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Dange Chowk Flyover Extension', type: 'upcoming', detail: 'Traffic relief plan [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6300,
      trendPercentageYearly: 5.7,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Thergaon, PCMC | Value Homes near Wakad | Gharapna',
      description: 'Find upcoming verified properties in Thergaon, PCMC. Transparent figures, RERA status tracking, and honest guidance.',
      keywords: ['flats in thergaon', 'thergaon pcmc flats'],
    },
  },
  {
    slug: 'sangvi',
    name: 'Sangvi',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.5772, lng: 73.8182 },
    shortDescription:
      'Divided into Old and New Sangvi, this peaceful residential precinct is positioned along the confluence of the Pavana and Mula rivers. It directly borders Aundh, offering residents effortless access to Pune University, Pune railway station, and central Pune city areas. Sangvi is renowned for its tranquil residential colonies, municipal sports complexes, and waterfront breezes, making it a beloved locality for long-time Pune families and university academics.',
    nearbyLandmarks: [
      { name: 'P.K. Anna Sports Complex', type: 'landmark', detail: 'PCMC public sports arena [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Baburao Gholap College', type: 'school', detail: 'Established educational institute [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Sudha Multispeciality Hospital', type: 'hospital', detail: 'Healthcare center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Sangvi-Aundh Mula River Bridge', type: 'transport', detail: 'Direct connection into Pune Municipal limits [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'River Front Beautification Zone', type: 'upcoming', detail: 'Ecological green buffer project [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 7100,
      trendPercentageYearly: 5.2,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Sangvi, PCMC | Riverside Living near Aundh | Gharapna',
      description: 'Explore upcoming properties in Sangvi, PCMC. Reliable advice, upfront numbers, and zero marketing gimmicks.',
      keywords: ['flats in sangvi', 'sangvi pcmc property'],
    },
  },
  {
    slug: 'kasarwadi',
    name: 'Kasarwadi',
    corridor: 'north-central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6012, lng: 73.8248 },
    shortDescription:
      'Kasarwadi is an essential multi-modal transportation hub in PCMC, hosting the Kasarwadi railway station, the Nashik Phata flyover interchange, and an operational Pune Metro Purple Line station. This unparalleled convergence of rail, metro, and arterial highway networks makes Kasarwadi exceptionally convenient for daily commuters navigating between PCMC, Pune central, and the industrial corridors of Bhosari and Chakan.',
    nearbyLandmarks: [
      { name: 'Nashik Phata Multi-Tier Interchange', type: 'landmark', detail: 'Iconic civic highway flyover [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Kasarwadi High School', type: 'school', detail: 'Public secondary school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Maxcare Hospital Kasarwadi', type: 'hospital', detail: 'Local healthcare center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Kasarwadi Metro Station (Pune Metro Line 1)', type: 'transport', detail: 'Operational rapid transit station [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Kasarwadi Suburban Railway Station', type: 'transport', detail: 'Suburban train junction [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Metro Multi-Modal Transit Hub', type: 'upcoming', detail: 'Integrated bus-rail-metro terminal [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6500,
      trendPercentageYearly: 5.5,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Kasarwadi, PCMC | Metro Connected Living | Gharapna',
      description: 'Discover upcoming flats in Kasarwadi, PCMC with immediate metro access. Transparent price calculations with Gharapna.',
      keywords: ['flats in kasarwadi', 'kasarwadi metro station homes'],
    },
  },

  // ==========================================
  // CENTRAL PCMC CORRIDOR
  // ==========================================
  {
    slug: 'nigdi',
    name: 'Nigdi',
    corridor: 'central',
    jurisdiction: 'PCMC',
    status: 'active',
    isDemo: true,
    coordinates: { lat: 18.6578, lng: 73.7745 },
    shortDescription:
      'Nigdi is one of the most mature, organized, and culturally rich sectors of Pimpri-Chinchwad. Developed originally under the visionary town planning of PCNTDA (Pradhikaran), Nigdi features broad tree-shaded avenues, expansive public parks like Bhakti Shakti, and a planned grid of residential sectors. The area is highly appreciated for its self-contained infrastructure, top-tier schools, religious landmarks, and seamless suburban rail connectivity via Akurdi station. It appeals deeply to retired professionals, defense families, and industrial managers seeking green and spacious community living.',
    nearbyLandmarks: [
      { name: 'Bhakti Shakti National Memorial & Flagpole', type: 'landmark', detail: 'Iconic monumental junction and civic landmark [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Appu Ghar & Durga Devi Hill Park', type: 'landmark', detail: 'Expansive recreational hill garden', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Jnana Prabodhini Navanagar Vidyalaya', type: 'school', detail: 'Prestigious values-based educational institution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'St. Ursula High School', type: 'school', detail: 'Historic and reputed convent school', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Lokmanya Hospital Nigdi', type: 'hospital', detail: 'Pioneer orthopedics and emergency trauma care [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Ojas Eye Hospital', type: 'hospital', detail: 'Specialty ophthalmology center', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Akurdi Railway Station nearby', type: 'transport', detail: 'Direct suburban train connectivity to Pune Junction [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Bhakti Shakti BRTS Bus Terminal', type: 'transport', detail: 'Major regional PMPML depot [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Pune Metro Extension to Nigdi (Bhakti Shakti)', type: 'upcoming', detail: 'Approved northern extension of Purple Line [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 7400,
      trendPercentageYearly: 5.4,
      note: 'Indicative historical trend for sample evaluation [VERIFY]',
    },
    seo: {
      title: 'Flats in Nigdi, PCMC | 2 & 3 BHK Ready & Under Construction | Gharapna',
      description: 'Verified residential flats in Nigdi, PCMC. Transparent price breakdowns, verified carpet area measurements, and RERA compliance data.',
      keywords: ['flats in nigdi', '2 bhk in nigdi', 'pradhikaran nigdi flats', 'nigdi metro flats pcmc'],
    },
  },
  {
    slug: 'pimpri',
    name: 'Pimpri',
    corridor: 'central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6279, lng: 73.8009 },
    shortDescription:
      'Pimpri forms the civic, administrative, and commercial heartbeat of Pimpri-Chinchwad, hosting the headquarters of the PCMC municipal corporation. Famous for its sprawling cloth and electronics wholesale bazaars, Pimpri also features significant automotive manufacturing institutions. With an operational Pune Metro Purple Line station and Pimpri suburban rail stop, it offers peerless transit convenience alongside bustling retail and civic convenience.',
    nearbyLandmarks: [
      { name: 'PCMC Municipal Corporation Headquarters', type: 'landmark', detail: 'Administrative civic centre [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Pimpri Market Cloth Bazaar', type: 'landmark', detail: 'Historic commercial wholesale district', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Dr. D.Y. Patil Medical College & Institute', type: 'school', detail: 'Premier healthcare education campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Dr. D.Y. Patil Hospital & Research Centre', type: 'hospital', detail: 'Major multi-specialty teaching hospital [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'YCM Hospital (Yashwantrao Chavan Memorial)', type: 'hospital', detail: 'Premier PCMC municipal civic hospital', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'PCMC Metro Station (Line 1 Terminal)', type: 'transport', detail: 'Operational metro terminal [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Pimpri Railway Station', type: 'transport', detail: 'Suburban rail network station [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Pimpri Railway Overbridge Reconstruction', type: 'upcoming', detail: 'Civic transit upgrade [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6900,
      trendPercentageYearly: 5.0,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Pimpri, PCMC | Central Civic Hub | Gharapna',
      description: 'Explore upcoming flats in Pimpri, PCMC near the metro station and municipal offices. Transparent figures with Gharapna.',
      keywords: ['flats in pimpri', 'pimpri pcmc real estate'],
    },
  },
  {
    slug: 'chinchwad',
    name: 'Chinchwad',
    corridor: 'central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6298, lng: 73.7845 },
    shortDescription:
      'Chinchwad is a rich historical and cultural nucleus in PCMC, revered for the centuries-old Morya Gosavi Ganpati Temple and contemporary cultural centers like Ramkrishna More Preksagruh. It harmoniously combines quiet historic wadas and modern residential complexes alongside major industrial engineering plants. Featuring Chinchwad railway station, extensive shopping malls, and excellent schools, Chinchwad offers an enduringly stable residential lifestyle.',
    nearbyLandmarks: [
      { name: 'Morya Gosavi Temple & Pavana Ghat', type: 'landmark', detail: 'Sacred historical temple [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Elpro City Square Mall', type: 'landmark', detail: 'Premier regional shopping and entertainment mall', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'City International School Chinchwad', type: 'school', detail: 'CBSE school campus [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Niramaya Hospital', type: 'hospital', detail: 'Established tertiary healthcare hospital [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Chinchwad Railway Station', type: 'transport', detail: 'Express and suburban railway stop [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Empire Estate Flyover Connector', type: 'upcoming', detail: 'Decongestion infrastructure [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 7200,
      trendPercentageYearly: 5.2,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Chinchwad, PCMC | Cultural & Commercial Center | Gharapna',
      description: 'Discover upcoming flats in Chinchwad, PCMC. Reliable data, upfront price estimates, and zero hidden charges.',
      keywords: ['flats in chinchwad', 'chinchwad station property'],
    },
  },
  {
    slug: 'akurdi',
    name: 'Akurdi',
    corridor: 'central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6478, lng: 73.7852 },
    shortDescription:
      'Akurdi is a vibrant residential and educational center positioned directly on the Old Pune-Mumbai Highway. Best known as the home of the expansive D.Y. Patil educational complex, it boasts high student energy, lively markets, and excellent public transport links. Akurdi railway station is a key suburban local train stop, making commuting into Pune city center or toward Talegaon and Lonavala straightforward and rapid.',
    nearbyLandmarks: [
      { name: 'D.Y. Patil Educational Complex Akurdi', type: 'landmark', detail: 'Renowned educational hub [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Khandoba Mandir Akurdi', type: 'landmark', detail: 'Historic temple landmark', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Modern College of Pharmacy & Arts', type: 'school', detail: 'Higher education institution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Star Hospital Akurdi', type: 'hospital', detail: 'Community healthcare [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Akurdi Railway Station', type: 'transport', detail: 'Key suburban railway halt [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Old Pune-Mumbai Highway BRTS', type: 'transport', detail: 'Multi-lane transit avenue [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Pune Metro Line 1 Akurdi Node', type: 'upcoming', detail: 'Planned elevated metro expansion [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 6800,
      trendPercentageYearly: 5.5,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Akurdi, PCMC | Educational & Rail Hub | Gharapna',
      description: 'Explore upcoming flats in Akurdi, PCMC near D.Y. Patil campus and railway station. Honest figures with Gharapna.',
      keywords: ['flats in akurdi', 'akurdi railway station flats'],
    },
  },
  {
    slug: 'pradhikaran',
    name: 'Pradhikaran',
    corridor: 'central',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6531, lng: 73.7668 },
    shortDescription:
      'Pradhikaran, often referred to as the "Chandigarh of Pune," represents one of the most meticulously planned residential townships in Maharashtra. Engineered by the PCNTDA town planning body, it is structured into clearly demarcated numbered sectors featuring low-density residential bungalows, wide avenues, lush canopy trees, and dedicated neighborhood parks. Pradhikaran is cherished by families who value tranquility, orderly urban layouts, and timeless residential elegance.',
    nearbyLandmarks: [
      { name: 'PCNTDA Sector Parks', type: 'landmark', detail: 'Planned green sector layout [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Jankidevi Bajaj School', type: 'school', detail: 'Prestigious secondary school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Lokmanya Hospital Pradhikaran', type: 'hospital', detail: 'Advanced medical center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Spine Road Arterial Access', type: 'transport', detail: 'High-capacity four-lane connector [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Eco-Park Rejuvenation', type: 'upcoming', detail: 'Civic environmental preservation project [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 7800,
      trendPercentageYearly: 5.6,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Pradhikaran, PCMC | Planned Green Township | Gharapna',
      description: 'Discover upcoming homes in Pradhikaran, PCMC. Planned sector layouts, honest pricing, and verified measurements.',
      keywords: ['flats in pradhikaran', 'pradhikaran pcmc properties'],
    },
  },

  // ==========================================
  // NORTH / ALANDI ROAD / NASHIK HIGHWAY CORRIDOR
  // ==========================================
  {
    slug: 'moshi',
    name: 'Moshi',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'active',
    isDemo: true,
    coordinates: { lat: 18.6754, lng: 73.8432 },
    shortDescription:
      'Moshi has emerged as one of the fastest-growing and most budget-friendly residential corridors in northern Pimpri-Chinchwad. Located prominently along the Pune-Nashik Highway and interconnected by the expansive Spine Road, Moshi hosts major civic developments including the Pune International Exhibition and Convention Centre (PIECC). With extensive open land and comprehensive municipal master-planning by PCMC, Moshi offers gated community townships equipped with modern clubhouses and lifestyle amenities at attractive rates, making it a prime choice for first-time homebuyers and industrial professionals.',
    nearbyLandmarks: [
      { name: 'Pune International Exhibition & Convention Centre (PIECC)', type: 'landmark', detail: 'Major regional convention complex [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Moshi Toll Plaza & Indrayani River', type: 'landmark', detail: 'Northern geographic entry node', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'City Pride School Moshi', type: 'school', detail: 'Renowned CBSE affiliated school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Priydarshani School', type: 'school', detail: 'Established local campus', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Sanjeevani Multispeciality Hospital', type: 'hospital', detail: 'Comprehensive community healthcare [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Accord Hospital', type: 'hospital', detail: 'Multi-specialty surgical facility', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Spine Road Arterial Corridor', type: 'transport', detail: 'Wide dual-carriageway linking to Nigdi and Chakan [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Pune-Nashik National Highway 60', type: 'transport', detail: 'Key intercity industrial highway [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Proposed Nashik Phata to Chakan Metro Line', type: 'upcoming', detail: 'Planned mass transit line along highway [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5200,
      trendPercentageYearly: 7.5,
      note: 'Indicative historical trend for sample evaluation [VERIFY]',
    },
    seo: {
      title: 'Flats in Moshi, PCMC | 1 & 2 BHK Affordable Townships | Gharapna',
      description: 'Explore verified affordable flats in Moshi, PCMC along Spine Road. Upfront price breakups, RERA compliance tracking, and zero hidden costs.',
      keywords: ['flats in moshi', '1 bhk in moshi', '2 bhk in moshi pcmc', 'affordable flats pcmc'],
    },
  },
  {
    slug: 'charholi',
    name: 'Charholi',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'active',
    isDemo: true,
    coordinates: { lat: 18.6312, lng: 73.8965 },
    shortDescription:
      'Charholi, also known as Charholi Budruk, is a rapidly transforming residential destination along the northeastern periphery of PCMC, situated near Alandi Road and within convenient driving range of Pune International Airport at Lohegaon. Because of its large parcel availability, Charholi features grand integrated townships complete with dedicated schools, retail high streets, and sports complexes. It represents an exceptional option for homebuyers seeking modern lifestyle amenities at competitive price points compared to Viman Nagar and Dhanori.',
    nearbyLandmarks: [
      { name: 'Indrayani Riverfront & Alandi Temple nearby', type: 'landmark', detail: 'Historic spiritual landmark nearby [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Pune Airport Approach Corridor', type: 'landmark', detail: 'Convenient northern airport route [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Woxsen International School nearby', type: 'school', detail: 'Campus nearby [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'D.Y. Patil Knowledge City nearby', type: 'school', detail: 'Major higher education hub in Lohegaon', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Charholi Care Hospital', type: 'hospital', detail: 'Local healthcare center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Pune-Alandi Road BRTS', type: 'transport', detail: 'Rapid city bus connectivity [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Proposed Ring Road Entry Point', type: 'transport', detail: 'Major regional expressway interchange [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Pune Ring Road Eastern Phase', type: 'upcoming', detail: 'Strategic regional mobility corridor [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5400,
      trendPercentageYearly: 7.8,
      note: 'Indicative historical trend for sample evaluation [VERIFY]',
    },
    seo: {
      title: 'Flats in Charholi, PCMC | 2 BHK Integrated Townships | Gharapna',
      description: 'Discover verified residential flats in Charholi, PCMC near Alandi Road and Pune Airport. Transparent price breakdowns and RERA tracking.',
      keywords: ['flats in charholi', '2 bhk in charholi pcmc', 'charholi budruk flats', 'flats near pune airport'],
    },
  },
  {
    slug: 'dighi',
    name: 'Dighi',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6154, lng: 73.8789 },
    shortDescription:
      'Dighi is positioned gracefully at the base of Dighi Hills, serving as a peaceful residential connector between PCMC and Pune city’s Vishrantwadi and Dhanori areas. Home to prestigious defense establishments including the Army Institute of Technology (AIT), Dighi benefits from clean air, vast defense green zones, and disciplined urban surroundings. It offers competitive housing options for service personnel, IT employees working in eastern Pune, and industrial executives alike.',
    nearbyLandmarks: [
      { name: 'Army Institute of Technology (AIT)', type: 'landmark', detail: 'Premier engineering defense institute [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Dighi Hills Nature Sanctuary', type: 'landmark', detail: 'Scenic green hill buffer', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Army Public School Dighi', type: 'school', detail: 'Renowned defense curriculum school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Samarth Hospital Dighi', type: 'hospital', detail: 'Multi-specialty clinic [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Alandi-Pune Road Corridor', type: 'transport', detail: 'Direct connection into Vishrantwadi and central Pune [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Dighi-Lohegaon Connector Road', type: 'upcoming', detail: 'Transit enhancement route [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5700,
      trendPercentageYearly: 6.4,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Dighi, PCMC | Green Suburban Living | Gharapna',
      description: 'Upcoming verified residential properties in Dighi, PCMC. Reliable data, upfront price estimates, and RERA tracking.',
      keywords: ['flats in dighi', 'dighi pcmc property'],
    },
  },
  {
    slug: 'bhosari',
    name: 'Bhosari',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6367, lng: 73.8431 },
    shortDescription:
      'Bhosari is an industrial powerhouse and historic settlement in PCMC, hosting one of the largest concentrations of automotive, engineering, and manufacturing enterprises in South Asia under the MIDC industrial estate. Beyond its manufacturing importance, Bhosari has established substantial residential colonies equipped with civic infrastructure, sports complexes, and schools. It provides convenient, traffic-free living for industrial employees and business owners.',
    nearbyLandmarks: [
      { name: 'Bhosari MIDC Industrial Zone', type: 'landmark', detail: 'Major regional industrial manufacturing hub [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Indrayani Nagar Residential Pocket', type: 'landmark', detail: 'Organized residential sector', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Priydarshani High School Bhosari', type: 'school', detail: 'Secondary school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Anand Multispeciality Hospital', type: 'hospital', detail: 'Industrial and emergency medical care [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Pune-Nashik Highway Flyover', type: 'transport', detail: 'Arterial transit bridge [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Proposed Bhosari Metro Line Node', type: 'upcoming', detail: 'Transit study route [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5800,
      trendPercentageYearly: 5.6,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Bhosari, PCMC | Industrial & Residential Hub | Gharapna',
      description: 'Explore upcoming properties in Bhosari, PCMC. Upfront price breakups, RERA information, and zero marketing fluff.',
      keywords: ['flats in bhosari', 'bhosari midc homes'],
    },
  },
  {
    slug: 'chikhali',
    name: 'Chikhali',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6811, lng: 73.8052 },
    shortDescription:
      'Chikhali is an expansive, developing residential neighborhood situated northwest of Bhosari and directly adjacent to Moshi. Known for its affordable land parcels, Chikhali has emerged as a preferred destination for budget housing townships developed by prominent builders. It provides direct connectivity to both the Talawade Software Park and Chakan MIDC, making it particularly suitable for professionals seeking value-for-money flats with modern lifestyle amenities.',
    nearbyLandmarks: [
      { name: 'Chikhali Wood Bazaars', type: 'landmark', detail: 'Commercial trade hub [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Shri Ram Public School', type: 'school', detail: 'Local primary and secondary school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Chikhali Life Hospital', type: 'hospital', detail: 'Community clinic [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Spine Road Access Link', type: 'transport', detail: 'Direct connection to central PCMC [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'PCMC Water Pipeline & Drainage Upgrade', type: 'upcoming', detail: 'Civic utility modernization [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 4900,
      trendPercentageYearly: 7.1,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Chikhali, PCMC | Budget-Friendly Homes | Gharapna',
      description: 'Discover upcoming affordable flats in Chikhali, PCMC. Transparent figures, RERA tracking, and honest guidance.',
      keywords: ['flats in chikhali', 'chikhali pcmc flats'],
    },
  },
  {
    slug: 'talawade',
    name: 'Talawade',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6945, lng: 73.7845 },
    shortDescription:
      'Talawade is distinguished as the northern IT anchor of PCMC, housing the Talawade Software Technology Park where multinational IT services firms operate campuses. Positioned between Nigdi, Chikhali, and Dehu, Talawade offers a balanced mixture of technological workplaces and peaceful countryside views. As residential housing projects emerge in its periphery, it offers short commutes for technology professionals working in northern Pune.',
    nearbyLandmarks: [
      { name: 'Talawade IT Park', type: 'landmark', detail: 'Dedicated technology business park [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Historic Dehu Pilgrim Node nearby', type: 'landmark', detail: 'Spiritual heritage town nearby', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Kendriya Vidyalaya nearby', type: 'school', detail: 'Central curriculum institution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Talawade Community Healthcare Center', type: 'hospital', detail: 'Local clinic [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Talawade-Rupeenagar DP Road', type: 'transport', detail: 'Key connecting road [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Talawade Spine Road Extension', type: 'upcoming', detail: 'Connecting northern technology park to highway [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 5100,
      trendPercentageYearly: 6.3,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Talawade, PCMC | Homes near Talawade IT Park | Gharapna',
      description: 'Upcoming residential homes in Talawade, PCMC. Honest real estate advice with verified carpet sizes and transparent pricing.',
      keywords: ['flats in talawade', 'talawade it park homes'],
    },
  },
  {
    slug: 'dudulgaon',
    name: 'Dudulgaon',
    corridor: 'north-alandi-nashik',
    jurisdiction: 'PCMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.6652, lng: 73.8741 },
    shortDescription:
      'Dudulgaon is an upcoming suburban residential pocket nestled between Moshi and Alandi along the Indrayani River. With the expansion of the PCMC municipal road network and upcoming riverfront conservation plans, Dudulgaon offers scenic natural vistas and calm suburban living. It has become an attractive destination for budget-minded homebuyers and long-term land development opportunities.',
    nearbyLandmarks: [
      { name: 'Indrayani River Ghats', type: 'landmark', detail: 'Natural riverside area [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Alandi Education Society Schools nearby', type: 'school', detail: 'Regional schools [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Rural Healthcare Center', type: 'hospital', detail: 'Local primary health post [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Moshi-Alandi Link Road', type: 'transport', detail: 'Regional connecting corridor [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Proposed Ring Road River Bridge', type: 'upcoming', detail: 'Transit connectivity infrastructure [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 4800,
      trendPercentageYearly: 6.9,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Dudulgaon, PCMC | Riverside Growth Pocket | Gharapna',
      description: 'Explore upcoming properties in Dudulgaon, PCMC. Upfront numbers, RERA tracking, and transparent advice.',
      keywords: ['flats in dudulgaon', 'dudulgaon pcmc flats'],
    },
  },

  // ==========================================
  // NEARBY CORRIDORS (PMRDA / PMC JURISDICTION)
  // ==========================================
  {
    slug: 'hinjewadi',
    name: 'Hinjewadi',
    corridor: 'nearby-pmc-pmrda',
    jurisdiction: 'PMRDA',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.5912, lng: 73.7389 },
    shortDescription:
      'Hinjewadi serves as the globally celebrated IT epicenter of Pune, housing Phase 1, Phase 2, and Phase 3 of the Rajiv Gandhi Infotech Park under PMRDA jurisdiction. Home to over 400 technology enterprises, Hinjewadi draws thousands of skilled professionals from across the country. Residential complexes here range from convenient studio apartments to luxury integrated golf townships, offering unmatched walk-to-work appeal for IT engineers despite ongoing traffic management initiatives.',
    nearbyLandmarks: [
      { name: 'Rajiv Gandhi Infotech Park (Phases 1, 2, 3)', type: 'landmark', detail: 'Global software technology park [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Xion Mall & Multiplex', type: 'landmark', detail: 'Major regional retail entertainment mall', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Blue Ridge Public School', type: 'school', detail: 'Township ICSE institution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Pawar Public School Hinjewadi', type: 'school', detail: 'CBSE school campus', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Ruby Hall Clinic Hinjewadi', type: 'hospital', detail: 'Multi-specialty tertiary care hospital [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Sanjeevani Hospital', type: 'hospital', detail: 'Community emergency hospital', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Pune Metro Line 3 (Hinjewadi to Shivajinagar)', type: 'transport', detail: 'Elevated mass transit under construction [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Hinjewadi-Wakad Flyover & Bypass', type: 'transport', detail: 'Crucial highway connection [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Hinjewadi Phase 4 Expansion & Ring Road Link', type: 'upcoming', detail: 'PMRDA economic expansion zone [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 7600,
      trendPercentageYearly: 6.9,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Hinjewadi, Pune | IT Park Living (PMRDA) | Gharapna',
      description: 'Discover upcoming flats in Hinjewadi (PMRDA jurisdiction). Walk-to-work convenience, transparent price breakups, and verified numbers.',
      keywords: ['flats in hinjewadi', 'hinjewadi it park flats', '2 bhk in hinjewadi pmrda'],
    },
  },
  {
    slug: 'baner',
    name: 'Baner',
    corridor: 'nearby-pmc-pmrda',
    jurisdiction: 'PMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.5590, lng: 73.7868 },
    shortDescription:
      'Baner is an upscale, high-energy residential and commercial district falling under Pune Municipal Corporation (PMC) limits, bordering PCMC’s southern edge. Known for its sophisticated culinary high streets along Balewadi High Street and Baner Road, premier fitness studios, and luxury housing, Baner is an exceptionally coveted address for high-net-worth professionals, entrepreneurs, and senior technology executives wanting proximity to both western IT corridors and central Pune.',
    nearbyLandmarks: [
      { name: 'Balewadi High Street Dining Boulevard', type: 'landmark', detail: 'Vibrant retail and nightlife hub [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Baner Hill Nature Reserve', type: 'landmark', detail: 'Popular urban trekking and biodiversity hill', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'The Orchid School', type: 'school', detail: 'Renowned educational institution [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Jupiter Hospital Baner', type: 'hospital', detail: 'Flagship multi-specialty quaternary hospital [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Manipal Hospital nearby', type: 'hospital', detail: 'Advanced medical center', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Mumbai-Bengaluru Highway Bypass', type: 'transport', detail: 'Interstate expressway corridor [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Balewadi-Baner Elevated Flyovers', type: 'upcoming', detail: 'PMC arterial transit improvements [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 9400,
      trendPercentageYearly: 6.2,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Baner, Pune | Luxury Real Estate (PMC) | Gharapna',
      description: 'Upcoming premium residences in Baner (PMC jurisdiction). Transparent numbers and verified property data with Gharapna.',
      keywords: ['flats in baner', 'baner luxury flats pmc'],
    },
  },
  {
    slug: 'balewadi',
    name: 'Balewadi',
    corridor: 'nearby-pmc-pmrda',
    jurisdiction: 'PMC',
    status: 'coming-soon',
    isDemo: true,
    coordinates: { lat: 18.5742, lng: 73.7719 },
    shortDescription:
      'Balewadi is an internationally renowned sporting and upscale residential destination under Pune Municipal Corporation (PMC), situated right beside the western border of PCMC. Famous for hosting the Shree Shiv Chhatrapati Sports Complex, Balewadi is celebrated for Balewadi High Street’s cosmopolitan retail boulevard. Its strategic positioning between Baner and Wakad provides seamless highway access and luxury residential living surrounded by sports facilities and modern infrastructure.',
    nearbyLandmarks: [
      { name: 'Shree Shiv Chhatrapati Sports Complex', type: 'landmark', detail: 'National championship sports stadium [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
      { name: 'Balewadi High Street', type: 'landmark', detail: 'Cosmopolitan high-street dining district', sourceNote: '[SOURCE TO ADD]' },
    ],
    schools: [
      { name: 'Bharati Vidyapeeth English Medium School', type: 'school', detail: 'Reputed secondary school [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    hospitals: [
      { name: 'Vitalife Medipoint Hospital nearby', type: 'hospital', detail: 'Multi-specialty center [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    transport: [
      { name: 'Balewadi Stadium Bus Terminal', type: 'transport', detail: 'PMPML rapid transit depot [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    upcomingInfrastructure: [
      { name: 'Metro Line 3 Balewadi Station', type: 'upcoming', detail: 'Transit station connecting to Hinjewadi and Shivajinagar [VERIFY]', sourceNote: '[SOURCE TO ADD]' },
    ],
    priceTrend: {
      averageRatePerSqFt: 9100,
      trendPercentageYearly: 6.4,
      note: 'Indicative historical trend [VERIFY]',
    },
    seo: {
      title: 'Flats in Balewadi, Pune | Sports Hub & High Street (PMC) | Gharapna',
      description: 'Upcoming flats in Balewadi (PMC jurisdiction). Honest real estate data with verified carpet sizes and transparent price breakups.',
      keywords: ['flats in balewadi', 'balewadi high street flats pmc'],
    },
  },
];
