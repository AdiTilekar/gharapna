import { describe, it, expect } from 'vitest';
import {
  formatIndianPrice,
  formatCurrencyFull,
  formatArea,
  formatRatePerSqFt,
} from '@/lib/formatters';

describe('Indian Currency & Unit Formatters', () => {
  describe('formatIndianPrice', () => {
    it('should format amounts in Crores with proper suffix', () => {
      expect(formatIndianPrice(10000000)).toBe('₹1 Cr');
      expect(formatIndianPrice(12500000)).toBe('₹1.25 Cr');
      expect(formatIndianPrice(25000000)).toBe('₹2.50 Cr');
    });

    it('should format amounts in Lakhs with proper suffix', () => {
      expect(formatIndianPrice(4500000)).toBe('₹45 L');
      expect(formatIndianPrice(8550000)).toBe('₹85.50 L');
      expect(formatIndianPrice(9000000)).toBe('₹90 L');
    });

    it('should format amounts below 1 Lakh with standard Indian grouping', () => {
      expect(formatIndianPrice(75000)).toBe('₹75,000');
      expect(formatIndianPrice(500)).toBe('₹500');
    });

    it('should handle zero, null, or invalid inputs safely', () => {
      expect(formatIndianPrice(0)).toBe('₹0');
      expect(formatIndianPrice(NaN)).toBe('₹0');
      // @ts-expect-error testing invalid type
      expect(formatIndianPrice(null)).toBe('₹0');
    });
  });

  describe('formatCurrencyFull', () => {
    it('should format full amounts with Indian comma separation', () => {
      expect(formatCurrencyFull(12500000)).toBe('₹1,25,00,000');
      expect(formatCurrencyFull(8500000)).toBe('₹85,00,000');
      expect(formatCurrencyFull(30000)).toBe('₹30,000');
    });

    it('should handle zero or invalid numbers', () => {
      expect(formatCurrencyFull(0)).toBe('₹0');
      expect(formatCurrencyFull(NaN)).toBe('₹0');
    });
  });

  describe('formatArea', () => {
    it('should format square feet with commas', () => {
      expect(formatArea(680)).toBe('680 sq.ft');
      expect(formatArea(1050)).toBe('1,050 sq.ft');
      expect(formatArea(0)).toBe('0 sq.ft');
    });
  });

  describe('formatRatePerSqFt', () => {
    it('should format rate per square foot with currency and unit', () => {
      expect(formatRatePerSqFt(8500)).toBe('₹8,500/sq.ft');
      expect(formatRatePerSqFt(12450.6)).toBe('₹12,451/sq.ft');
      expect(formatRatePerSqFt(0)).toBe('₹0/sq.ft');
    });
  });
});
