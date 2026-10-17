import { CHARGES_CONFIG } from '@/config/charges';
import { PriceBreakup } from '@/types/project';

/**
 * Calculates monthly EMI using standard reducing balance formula.
 * E = P * r * (1 + r)^n / ((1 + r)^n - 1)
 */
export function calculateEmi(
  principal: number,
  annualRatePercent: number = CHARGES_CONFIG.defaultLoanInterestRate,
  tenureYears: number = CHARGES_CONFIG.defaultTenureYears
): number {
  if (principal <= 0 || tenureYears <= 0) return 0;
  if (annualRatePercent <= 0) return Math.round(principal / (tenureYears * 12));

  const monthlyRate = annualRatePercent / (12 * 100);
  const totalMonths = tenureYears * 12;
  const factor = Math.pow(1 + monthlyRate, totalMonths);

  const emi = (principal * monthlyRate * factor) / (factor - 1);
  return Math.round(emi);
}

/**
 * Calculates complete transparent price breakup for a given agreement value and carpet area.
 */
export function calculatePriceBreakup(
  agreementValue: number,
  carpetAreaSqFt: number = 650
): PriceBreakup {
  if (agreementValue <= 0) {
    return {
      agreementValue: 0,
      stampDuty: 0,
      registrationFee: 0,
      gst: 0,
      maintenanceAdvance: 0,
      parkingCharges: 0,
      documentationCharges: 0,
      allInTotal: 0,
      ratePerCarpetSqFt: 0,
    };
  }

  // Stamp Duty + Metro Cess: 7.0% total in PCMC
  const stampDuty = Math.round(
    (agreementValue * CHARGES_CONFIG.totalEffectiveStampDutyPercent) / 100
  );

  // Registration Fee: 1% capped at ₹30,000
  const uncappedRegFee = Math.round(
    (agreementValue * CHARGES_CONFIG.registrationFeePercent) / 100
  );
  const registrationFee = Math.min(
    uncappedRegFee,
    CHARGES_CONFIG.registrationFeeCapInRupees
  );

  // GST: 1% if <= ₹45L and <= 645 sq.ft (approx 60 sqm), else 5%
  const isAffordable = agreementValue <= 4500000 && carpetAreaSqFt <= 645;
  const gstPercent = isAffordable
    ? CHARGES_CONFIG.gstAffordablePercent
    : CHARGES_CONFIG.gstStandardPercent;
  const gst = Math.round((agreementValue * gstPercent) / 100);

  // Indicative maintenance advance (approx ₹3/sq.ft/month for 12 months)
  const maintenanceAdvance = Math.round(carpetAreaSqFt * 3 * 12);

  // Indicative parking & legal/documentation
  const parkingCharges = 200000;
  const documentationCharges = 15000;

  const allInTotal =
    agreementValue +
    stampDuty +
    registrationFee +
    gst +
    maintenanceAdvance +
    parkingCharges +
    documentationCharges;

  const ratePerCarpetSqFt =
    carpetAreaSqFt > 0 ? Math.round(agreementValue / carpetAreaSqFt) : 0;

  return {
    agreementValue,
    stampDuty,
    registrationFee,
    gst,
    maintenanceAdvance,
    parkingCharges,
    documentationCharges,
    allInTotal,
    ratePerCarpetSqFt,
  };
}

/**
 * Calculates home loan affordability based on gross monthly income and existing EMIs.
 * Assuming standard 50% FOIR (Fixed Obligation to Income Ratio).
 */
export function calculateAffordability(
  monthlyIncome: number,
  existingEmi: number = 0,
  annualInterestRate: number = CHARGES_CONFIG.defaultLoanInterestRate,
  tenureYears: number = CHARGES_CONFIG.defaultTenureYears
): {
  maxEligibleEmi: number;
  maxLoanAmount: number;
  indicativePropertyBudget: number;
} {
  const maxAllowableEmi = Math.max(0, monthlyIncome * 0.5 - existingEmi);
  if (maxAllowableEmi <= 0) {
    return { maxEligibleEmi: 0, maxLoanAmount: 0, indicativePropertyBudget: 0 };
  }

  const monthlyRate = annualInterestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const factor = Math.pow(1 + monthlyRate, totalMonths);

  // Invert EMI formula to get Principal: P = E * ((1+r)^n - 1) / (r * (1+r)^n)
  const maxLoan = Math.round((maxAllowableEmi * (factor - 1)) / (monthlyRate * factor));

  // Assuming 80% loan-to-value (LTV) ratio (buyer contributes 20% down payment)
  const indicativeBudget = Math.round(maxLoan / 0.8);

  return {
    maxEligibleEmi: Math.round(maxAllowableEmi),
    maxLoanAmount: maxLoan,
    indicativePropertyBudget: indicativeBudget,
  };
}
