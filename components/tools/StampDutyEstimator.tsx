'use client';

import { useState } from 'react';
import { CHARGES_CONFIG } from '@/config/charges';
import { formatCurrencyFull, formatIndianPrice } from '@/lib/formatters';
import { Landmark, Info, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/minimal';

export function StampDutyEstimator() {
  const [agreementValue, setAgreementValue] = useState(8500000); // ₹85 Lakh default
  const [isReadyWithOc, setIsReadyWithOc] = useState(false);
  const [carpetAreaSqFt, setCarpetAreaSqFt] = useState(680);

  // 1. Stamp Duty (6%) + Metro Cess (1%) = 7%
  const stampDutyAmount = Math.round((agreementValue * 6.0) / 100);
  const metroCessAmount = Math.round((agreementValue * 1.0) / 100);
  const totalStampDuty = stampDutyAmount + metroCessAmount;

  // 2. Registration Fee: 1% capped at ₹30,000
  const uncappedReg = Math.round((agreementValue * 1.0) / 100);
  const registrationFee = Math.min(uncappedReg, CHARGES_CONFIG.registrationFeeCapInRupees);

  // 3. GST Calculation:
  // - Ready with OC: 0%
  // - Under construction <= 45L & <= 645 sqft: 1%
  // - Under construction standard: 5%
  const isAffordable = agreementValue <= 4500000 && carpetAreaSqFt <= 645;
  const gstRate = isReadyWithOc ? 0 : isAffordable ? 1 : 5;
  const gstAmount = Math.round((agreementValue * gstRate) / 100);

  const totalGovernmentStatutory = totalStampDuty + registrationFee + gstAmount;

  return (
    <Card className="space-y-8 font-sans">
      <div className="pb-4 border-b border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Landmark className="w-5 h-5 text-coral-start" />
          <span>PCMC Stamp Duty, Metro Cess &amp; Registration Estimator</span>
        </h2>
        <p className="text-xs text-muted mt-1">
          Accurate estimation based on current Maharashtra Revenue Department rates, PCMC 1% Metro Cess, and the ₹30,000 statutory registration cap.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Input Parameters */}
        <div className="space-y-5">
          {/* Agreement Value */}
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Agreement Value (Base Property Cost)
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-3 text-sm font-semibold text-muted">
                ₹
              </span>
              <input
                type="number"
                step={50000}
                value={agreementValue}
                onChange={(e) => setAgreementValue(Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-4 py-2.5 rounded-2xl border border-border bg-transparent font-bold text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-coral-start"
              />
            </div>
            <span className="text-xs text-muted mt-1 block">
              Formatted: {formatCurrencyFull(agreementValue)} ({formatIndianPrice(agreementValue)})
            </span>
          </div>

          {/* Construction / OC Status */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-foreground">
              Possession &amp; Approval Status
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setIsReadyWithOc(false)}
                className={`p-3 rounded-2xl border text-xs font-semibold text-left transition cursor-pointer ${
                  !isReadyWithOc
                    ? 'border-border bg-muted/10 text-foreground'
                    : 'border-border text-muted hover:text-foreground'
                }`}
              >
                <span className="block font-bold">Under Construction</span>
                <span className="text-[10px] text-muted">Subject to GST</span>
              </button>

              <button
                type="button"
                onClick={() => setIsReadyWithOc(true)}
                className={`p-3 rounded-2xl border text-xs font-semibold text-left transition cursor-pointer ${
                  isReadyWithOc
                    ? 'border-border bg-muted/10 text-foreground'
                    : 'border-border text-muted hover:text-foreground'
                }`}
              >
                <span className="block font-bold">Ready OC Received</span>
                <span className="text-[10px] text-muted">Zero GST</span>
              </button>
            </div>
          </div>

          {/* Carpet Area for affordable housing check */}
          <div>
            <label className="block text-xs font-semibold text-foreground mb-1">
              Carpet Area (Sq.Ft)
            </label>
            <input
              type="number"
              value={carpetAreaSqFt}
              onChange={(e) => setCarpetAreaSqFt(Math.max(1, Number(e.target.value)))}
              className="w-full px-4 py-2.5 rounded-2xl border border-border bg-transparent font-bold text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-coral-start"
            />
            <span className="text-[11px] text-muted mt-1 block">
              Properties &le; ₹45L &amp; &le; 645 sq.ft qualify for 1% affordable GST.
            </span>
          </div>
        </div>

        {/* Breakdown Output Table */}
        <div className="border border-border rounded-3xl p-6 sm:p-8 bg-muted/5 space-y-6">
          <div className="pb-4 border-b border-border">
            <span className="text-xs uppercase font-semibold text-muted block tracking-wider">
              Total Government Levies (PCMC)
            </span>
            <span className="text-3xl font-bold text-foreground tabular-nums block mt-1">
              {formatCurrencyFull(totalGovernmentStatutory)}
            </span>
            <span className="text-[11px] text-muted block mt-1">
              Mandatory payable prior to or at sub-registrar registration
            </span>
          </div>

          <div className="divide-y divide-border text-xs">
            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-semibold text-foreground">Stamp Duty (6.0%)</span>
                <span className="text-[10px] text-muted block">Maharashtra state tax</span>
              </div>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(stampDutyAmount)}
              </span>
            </div>

            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-semibold text-foreground">Pune Metro Rail Cess (1.0%)</span>
                <span className="text-[10px] text-muted block">Statutory cess in PCMC</span>
              </div>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(metroCessAmount)}
              </span>
            </div>

            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-semibold text-foreground">Registration Fee (1.0% Capped)</span>
                <span className="text-[10px] text-muted block">Statutory cap of ₹30,000</span>
              </div>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(registrationFee)}
              </span>
            </div>

            <div className="py-2.5 flex justify-between items-center">
              <div>
                <span className="font-semibold text-foreground">Goods &amp; Services Tax (GST)</span>
                <span className="text-[10px] text-muted block">
                  {isReadyWithOc
                    ? '0% (Exempt for ready OC)'
                    : isAffordable
                    ? '1% (Affordable housing)'
                    : '5% (Standard effective)'}
                </span>
              </div>
              <span className="font-bold text-foreground tabular-nums">
                {formatCurrencyFull(gstAmount)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
