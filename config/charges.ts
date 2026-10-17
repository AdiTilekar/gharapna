import { GovernmentChargesConfig } from '@/types/charges';

export const CHARGES_CONFIG: GovernmentChargesConfig = {
  stampDutyPercent: 6.0,
  metroCessPercent: 1.0,
  totalEffectiveStampDutyPercent: 7.0, // 6% Stamp Duty + 1% Metro Cess in PCMC
  registrationFeePercent: 1.0,
  registrationFeeCapInRupees: 30000,   // ₹30,000 maximum cap under Maharashtra Registration Rules
  gstStandardPercent: 5.0,            // 5% without ITC for residential properties
  gstAffordablePercent: 1.0,          // 1% for properties <= ₹45 Lakhs & <= 60 sq.m carpet (metro)
  defaultLoanInterestRate: 8.5,
  minLoanInterestRate: 7.5,
  maxLoanInterestRate: 10.5,
  defaultTenureYears: 20,
  disclaimer:
    'Verify current rates with your lawyer or the official government revenue department before executing any agreement.',
};
