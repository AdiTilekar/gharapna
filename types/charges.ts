export interface GovernmentChargesConfig {
  stampDutyPercent: number;          // 6.0% in Maharashtra
  metroCessPercent: number;           // 1.0% in PCMC / Pune
  totalEffectiveStampDutyPercent: number; // 7.0%
  registrationFeePercent: number;     // 1.0%
  registrationFeeCapInRupees: number; // ₹30,000 max cap
  gstStandardPercent: number;         // 5.0% for non-affordable (> ₹45 Lakh)
  gstAffordablePercent: number;       // 1.0% for affordable (<= ₹45L & <= 60/90 sqm)
  defaultLoanInterestRate: number;    // 8.5%
  minLoanInterestRate: number;        // 7.5%
  maxLoanInterestRate: number;        // 10.5%
  defaultTenureYears: number;         // 20 years
  disclaimer: string;
}

export interface CalculationResult {
  agreementValue: number;
  stampDuty: number;
  metroCess: number;
  totalStampDuty: number;
  registrationFee: number;
  gst: number;
  allInTotal: number;
  monthlyEmiEstimate: number;
}
