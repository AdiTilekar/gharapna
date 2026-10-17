/**
 * Formats an amount in Indian Rupees to a human-readable Lakh or Crore string.
 * Example:
 * 4500000 -> "₹45.00 L"
 * 12500000 -> "₹1.25 Cr"
 */
export function formatIndianPrice(amount: number): string {
  if (amount == null || isNaN(amount)) return '₹0';

  if (amount >= 10000000) {
    const cr = amount / 10000000;
    return `₹${cr.toFixed(2).replace(/\.00$/, '')} Cr`;
  }

  if (amount >= 100000) {
    const lakh = amount / 100000;
    return `₹${lakh.toFixed(2).replace(/\.00$/, '')} L`;
  }

  return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Formats a number with Indian comma grouping (e.g. ₹1,25,00,000)
 */
export function formatCurrencyFull(amount: number): string {
  if (amount == null || isNaN(amount)) return '₹0';
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

/**
 * Formats square feet area
 */
export function formatArea(sqFt: number): string {
  if (!sqFt) return '0 sq.ft';
  return `${sqFt.toLocaleString('en-IN')} sq.ft`;
}

/**
 * Formats price per sq.ft
 */
export function formatRatePerSqFt(rate: number): string {
  if (!rate) return '₹0/sq.ft';
  return `₹${Math.round(rate).toLocaleString('en-IN')}/sq.ft`;
}
