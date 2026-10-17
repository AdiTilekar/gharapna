'use client';

import { useState } from 'react';
import { calculateAffordability } from '@/lib/calculators';
import { CHARGES_CONFIG } from '@/config/charges';
import { formatCurrencyFull, formatIndianPrice } from '@/lib/formatters';
import { PieChart, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/minimal';

export function AffordabilityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState(150000); // ₹1.5 Lakh / month
  const [existingEmi, setExistingEmi] = useState(15000); // ₹15k existing commitments
  const [interestRate, setInterestRate] = useState(CHARGES_CONFIG.defaultLoanInterestRate);
  const [tenureYears, setTenureYears] = useState(CHARGES_CONFIG.defaultTenureYears);

  const { maxEligibleEmi, maxLoanAmount, indicativePropertyBudget } = calculateAffordability(
    monthlyIncome,
    existingEmi,
    interestRate,
    tenureYears
  );

  const estimatedDownPayment = Math.round(indicativePropertyBudget * 0.2);

  return (
    <Card className="space-y-8 font-sans">
      <div className="pb-4 border-b border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <PieChart className="w-5 h-5 text-coral-start" />
          <span>Home Budget &amp; Affordability Matrix</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Estimate your borrowing capacity based on standard Indian banking FOIR (Fixed Obligation to Income Ratio) benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Income & Liabilities Controls */}
        <div className="space-y-5">
          {/* Monthly Income */}
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Gross Monthly Household Income
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-sm font-semibold text-muted">
                ₹
              </span>
              <input
                type="number"
                step={5000}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-4 py-2.5 rounded-2xl border border-border bg-transparent font-bold text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-coral-start"
              />
            </div>
            <span className="text-xs text-muted mt-1 block">
              Formatted: {formatCurrencyFull(monthlyIncome)} / month
            </span>
          </div>

          {/* Existing EMIs */}
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Existing Monthly EMIs / Obligations
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-sm font-semibold text-muted">
                ₹
              </span>
              <input
                type="number"
                step={1000}
                value={existingEmi}
                onChange={(e) => setExistingEmi(Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-4 py-2.5 rounded-2xl border border-border bg-transparent font-bold text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-coral-start"
              />
            </div>
            <span className="text-xs text-muted mt-1 block">
              Personal loans, vehicle loans, or credit card EMIs
            </span>
          </div>

          {/* Tenure and Interest */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Loan Tenure (Years)
              </label>
              <input
                type="number"
                min={5}
                max={30}
                value={tenureYears}
                onChange={(e) => setTenureYears(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-2xl border border-border bg-transparent font-bold text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-coral-start"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-foreground mb-1">
                Interest Rate (% p.a.)
              </label>
              <input
                type="number"
                step={0.1}
                min={6}
                max={15}
                value={interestRate}
                onChange={(e) => setInterestRate(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-2.5 rounded-2xl border border-border bg-transparent font-bold text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-coral-start"
              />
            </div>
          </div>
        </div>

        {/* Calculated Capacity Card */}
        <div className="border border-border rounded-3xl p-6 sm:p-8 bg-muted/5 space-y-6">
          <div className="pb-4 border-b border-border">
            <span className="text-xs uppercase font-semibold text-muted block tracking-wider">
              Indicative Property Budget
            </span>
            <span className="text-3xl font-bold text-foreground tabular-nums block mt-1">
              {formatIndianPrice(indicativePropertyBudget)}
            </span>
            <span className="text-[11px] text-muted block mt-1">
              Assuming 80% bank financing &amp; 20% down payment
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-muted">Max Eligible Monthly EMI</span>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(maxEligibleEmi)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Max Eligible Home Loan</span>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(maxLoanAmount)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Estimated Down Payment (20%)</span>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(estimatedDownPayment)}
              </span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-500">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Calculated with 50% Banking FOIR limit</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
