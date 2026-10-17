export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const BUYER_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is the difference between carpet area, built-up area, and super built-up area?',
    answer:
      'Under the Real Estate (Regulation and Development) Act (MahaRERA), properties must be sold strictly on net usable Carpet Area—defined as the net usable floor area of an apartment excluding the area covered by external walls, areas under service shafts, exclusive balcony/verandah, and open terrace area. Built-up area includes carpet area plus wall thickness and balconies. Super built-up area is an older, unregulated metric that included a proportionate share of common areas (staircases, lifts, corridors). At Gharapna, every price and comparison is calculated exclusively on verified RERA carpet area.',
  },
  {
    id: 'faq-2',
    question: 'How can I officially verify a project’s MahaRERA registration number?',
    answer:
      'You can verify any registered real estate project in Maharashtra by visiting the official portal (maharera.maharashtra.gov.in) and searching for the project name or registration number. The portal provides public access to the approved layout plans, commencement certificates, quarterly progress reports, litigation history, and the committed possession deadline. If a project is missing or marked with a placeholder, never pay booking advances until verified.',
  },
  {
    id: 'faq-3',
    question: 'What hidden charges should I anticipate beyond the base agreement value?',
    answer:
      'Mandatory costs beyond the base agreement value in PCMC include: (1) Stamp Duty and Metro Cess (typically 7% total in PCMC), (2) Government Registration Fee (1% of agreement value, capped at ₹30,000), (3) GST (5% for standard under-construction housing, or 1% for affordable housing ≤ ₹45L), (4) Society maintenance advance (usually 12 to 24 months advance), (5) Allotted car parking allocation, and (6) Legal/documentation charges. Gharapna provides an upfront all-in cost breakup for every listing so you are never surprised.',
  },
  {
    id: 'faq-4',
    question: 'How do home loans work for under-construction projects vs ready possession flats?',
    answer:
      'For under-construction flats, home loans are disbursed in tranches linked to construction slab milestones verified by the bank’s site engineer. During this construction period, buyers typically pay Pre-EMI (interest only on disbursed amounts) until full possession, after which full EMI starts. For ready-to-move flats with an Occupancy Certificate (OC), the full loan is disbursed at agreement execution and standard EMIs commence immediately.',
  },
  {
    id: 'faq-5',
    question: 'What legal remedies do buyers have if a developer delays possession beyond the RERA date?',
    answer:
      'Under Section 18 of the RERA Act, if a developer fails to complete or give possession of an apartment in accordance with the terms of the agreement for sale, the homebuyer has the right to either: (a) withdraw from the project and claim a full refund of amounts paid along with statutory interest (typically SBI Highest MCLR + 2%), or (b) stay in the project and receive monthly interest for every month of delay until possession is handed over.',
  },
  {
    id: 'faq-6',
    question: 'Is GST applicable on ready-to-move flats in Pimpri-Chinchwad?',
    answer:
      'No. Properties that have received a valid Occupancy Certificate (OC) or Completion Certificate from PCMC/competent authorities are legally exempt from GST under Indian Goods and Services Tax law. GST is applicable only on under-construction units where consideration is received prior to the issuance of the completion certificate.',
  },
  {
    id: 'faq-7',
    question: 'Can Non-Resident Indians (NRIs) buy residential property in PCMC, Pune?',
    answer:
      'Yes. Under the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) general permissions, NRIs and Persons of Indian Origin (PIOs/OCIs) can freely purchase residential and commercial real estate in India. Payments must be routed through inward remittances via normal banking channels or funds held in NRE, NRO, or FCNR accounts.',
  },
  {
    id: 'faq-8',
    question: 'What is the resale and rental market like across PCMC corridors?',
    answer:
      'Western PCMC corridors (Wakad, Ravet, Punawale) and Pimple Saudagar benefit from strong tenant demand from Hinjewadi IT Park and Pune University corridors, yielding typical gross rental returns of 3% to 4.5%. Central corridors (Nigdi, Chinchwad, Akurdi) offer established rail connectivity and stable end-user family resale demand. Northern corridors (Moshi, Charholi) provide long-term capital appreciation driven by new ring roads and industrial nodes.',
  },
  {
    id: 'faq-9',
    question: 'What documents should I insist on seeing before paying a booking token?',
    answer:
      'Before paying any non-refundable amount, insist on reviewing: (1) The project MahaRERA registration number and approved certificate, (2) Commencement Certificate (CC) issued by PCMC up to the specific floor you are booking, (3) Title search report from a reputable advocate confirming 30-year clear title, (4) Sanctioned architectural layout showing the flat configuration, and (5) Draft agreement for sale reflecting committed dates.',
  },
  {
    id: 'faq-10',
    question: 'What makes Gharapna’s advisory service different from standard real estate brokers?',
    answer:
      'Gharapna operates on a strict trust-first, non-pushy philosophy. We show all pricing components upfront, sell strictly on verified MahaRERA carpet area, conduct physical checks of title documents, and never hound you with spam phone calls. We act as your buyer-side advocates rather than high-pressure developer salesmen.',
  },
];
