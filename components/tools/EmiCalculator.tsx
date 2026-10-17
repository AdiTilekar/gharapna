'use client';

import { useState, useId } from 'react';
import { calculateEmi } from '@/lib/calculators';
import { CHARGES_CONFIG } from '@/config/charges';
import { formatCurrencyFull, formatIndianPrice } from '@/lib/formatters';
import { Calculator } from 'lucide-react';
import { Card } from '@/components/ui/minimal';

export function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState(6500000); // ₹65 Lakh default
  const [interestRate, setInterestRate] = useState(CHARGES_CONFIG.defaultLoanInterestRate); // 8.5%
  const [tenureYears, setTenureYears] = useState(CHARGES_CONFIG.defaultTenureYears); // 20 years

  const amountSliderId = useId();
  const rateSliderId = useId();
  const tenureSliderId = useId();

  const monthlyEmi = calculateEmi(loanAmount, interestRate, tenureYears);
  const totalMonths = tenureYears * 12;
  const totalPayment = monthlyEmi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - loanAmount);
  const principalPercent = totalPayment > 0 ? Math.round((loanAmount / totalPayment) * 100) : 0;
  const interestPercent = 100 - principalPercent;

  return (
    <Card className="space-y-8 font-sans">
      <div className="pb-4 border-b border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Calculator className="w-5 h-5 text-coral-start" />
          <span>Home Loan EMI &amp; Interest Amortization Calculator</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Calculate your monthly outflow based on standard reducing balance home loan interest rates in India.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Sliders Input Controls */}
        <div className="space-y-6">
          {/* Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor={amountSliderId} className="font-semibold text-foreground">
                Loan Principal Amount
              </label>
              <span className="font-bold text-sm text-foreground tabular-nums">
                {formatCurrencyFull(loanAmount)} ({formatIndianPrice(loanAmount)})
              </span>
            </div>
            <input
              id={amountSliderId}
              type="range"
              min={1000000}
              max={30000000}
              step={100000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-coral-start cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-muted">
              <span>₹10 Lakh</span>
              <span>₹1.50 Crore</span>
              <span>₹3.00 Crore</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor={rateSliderId} className="font-semibold text-foreground">
                Annual Interest Rate (% p.a.)
              </label>
              <span className="font-bold text-sm text-foreground tabular-nums">
                {interestRate}%
              </span>
            </div>
            <input
              id={rateSliderId}
              type="range"
              min={6.5}
              max={14.0}
              step={0.1}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-coral-start cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-muted">
              <span>6.5%</span>
              <span>8.5% (Prime)</span>
              <span>14.0%</span>
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor={tenureSliderId} className="font-semibold text-foreground">
                Loan Tenure (Years)
              </label>
              <span className="font-bold text-sm text-foreground tabular-nums">
                {tenureYears} Years ({totalMonths} Months)
              </span>
            </div>
            <input
              id={tenureSliderId}
              type="range"
              min={5}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-coral-start cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-muted">
              <span>5 Years</span>
              <span>20 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Output Summary Card */}
        <div className="border border-border rounded-3xl p-6 sm:p-8 bg-muted/5 space-y-6">
          <div className="text-center pb-4 border-b border-border">
            <span className="text-xs uppercase font-semibold text-muted block tracking-wider">
              Estimated Monthly EMI
            </span>
            <span className="text-3xl sm:text-4xl font-bold text-foreground tabular-nums block mt-1">
              {formatCurrencyFull(monthlyEmi)}
            </span>
            <span className="text-[11px] text-muted block mt-1">
              Per month for {tenureYears} years
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-muted">Principal Loan Amount</span>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(loanAmount)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">Total Interest Payable</span>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(totalInterest)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-border font-bold">
              <span className="text-foreground">Total Outflow (P + I)</span>
              <span className="text-foreground tabular-nums">
                {formatCurrencyFull(totalPayment)}
              </span>
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div className="space-y-1.5 pt-2">
            <div className="w-full h-3 rounded-full bg-border overflow-hidden flex">
              <div
                style={{ width: `${principalPercent}%` }}
                className="bg-foreground transition-all duration-300"
              />
              <div
                style={{ width: `${interestPercent}%` }}
                className="bg-coral-start transition-all duration-300"
              />
            </div>
            <div className="flex justify-between text-[11px] text-muted">
              <span>Principal: {principalPercent}%</span>
              <span>Interest: {interestPercent}%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
