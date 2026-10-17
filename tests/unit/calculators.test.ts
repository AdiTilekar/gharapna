import { describe, it, expect } from 'vitest';
import {
  calculateEmi,
  calculatePriceBreakup,
  calculateAffordability,
} from '@/lib/calculators';

describe('Financial Calculators', () => {
  describe('calculateEmi', () => {
    it('should correctly calculate standard monthly EMI for ₹50 Lakh loan', () => {
      // ₹50,00,000 at 8.5% annual interest for 20 years
      const emi = calculateEmi(5000000, 8.5, 20);
      // Standard mathematical formula yields approx ₹43,391
      expect(emi).toBe(43391);
    });

    it('should calculate EMI for 10-year tenure', () => {
      const emi = calculateEmi(3000000, 9.0, 10);
      expect(emi).toBe(38003);
    });

    it('should return 0 when principal or tenure is 0 or negative', () => {
      expect(calculateEmi(0, 8.5, 20)).toBe(0);
      expect(calculateEmi(-500000, 8.5, 20)).toBe(0);
      expect(calculateEmi(5000000, 8.5, 0)).toBe(0);
    });

    it('should handle zero interest rate by simple linear division', () => {
      const emi = calculateEmi(1200000, 0, 10);
      expect(emi).toBe(10000); // 12,00,000 / 120 months
    });
  });

  describe('calculatePriceBreakup', () => {
    it('should compute accurate PCMC statutory charges with ₹30,000 registration cap', () => {
      // ₹1.00 Crore flat with 700 sq ft carpet
      const agreementValue = 10000000;
      const carpetSqFt = 700;
      const breakup = calculatePriceBreakup(agreementValue, carpetSqFt);

      // Stamp Duty + Metro Cess: 7.0%
      expect(breakup.stampDuty).toBe(700000);

      // Registration fee: 1% would be ₹1,00,000, but capped at ₹30,000
      expect(breakup.registrationFee).toBe(30000);

      // Standard GST (5%) since > ₹45 Lakh
      expect(breakup.gst).toBe(500000);

      // Maintenance advance: 700 * 3 * 12 = ₹25,200
      expect(breakup.maintenanceAdvance).toBe(25200);

      // Parking charges: standard ₹2,00,000
      expect(breakup.parkingCharges).toBe(200000);

      // Documentation charges: standard ₹15,000
      expect(breakup.documentationCharges).toBe(15000);

      // All-in total
      const expectedTotal =
        10000000 + 700000 + 30000 + 500000 + 25200 + 200000 + 15000;
      expect(breakup.allInTotal).toBe(expectedTotal);

      // Rate per sq ft
      expect(breakup.ratePerCarpetSqFt).toBe(Math.round(10000000 / 700));
    });

    it('should apply affordable GST slab (1%) for property <= ₹45 Lakh and <= 645 sq ft', () => {
      const agreementValue = 4000000; // ₹40 Lakh
      const carpetSqFt = 500;
      const breakup = calculatePriceBreakup(agreementValue, carpetSqFt);

      // 1% GST on ₹40 Lakh = ₹40,000
      expect(breakup.gst).toBe(40000);

      // 7% Stamp Duty on ₹40 Lakh = ₹2,80,000
      expect(breakup.stampDuty).toBe(280000);

      // 1% Registration fee on ₹40 Lakh = ₹40,000, capped at ₹30,000
      expect(breakup.registrationFee).toBe(30000);
    });

    it('should return all zeros when agreement value is 0 or negative', () => {
      const breakup = calculatePriceBreakup(0);
      expect(breakup.allInTotal).toBe(0);
      expect(breakup.stampDuty).toBe(0);
      expect(breakup.registrationFee).toBe(0);
    });
  });

  describe('calculateAffordability', () => {
    it('should correctly calculate maximum loan and property budget under standard FOIR', () => {
      // Monthly income: ₹1,50,000; Existing EMIs: ₹20,000; 50% FOIR
      // Max permissible EMI = (1,50,000 * 0.5) - 20,000 = ₹55,000
      const result = calculateAffordability(150000, 20000, 8.5, 20);

      expect(result.maxEligibleEmi).toBe(55000);
      expect(result.maxLoanAmount).toBeGreaterThan(6000000);
      expect(result.indicativePropertyBudget).toBeGreaterThan(result.maxLoanAmount);
    });

    it('should return 0 when existing EMIs exceed 50% of gross income', () => {
      const result = calculateAffordability(100000, 60000, 8.5, 20);
      expect(result.maxEligibleEmi).toBe(0);
      expect(result.maxLoanAmount).toBe(0);
      expect(result.indicativePropertyBudget).toBe(0);
    });
  });
});
