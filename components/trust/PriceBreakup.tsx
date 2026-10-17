'use client';

import { PriceBreakup as IPriceBreakup } from '@/types/project';
import { formatCurrencyFull, formatRatePerSqFt } from '@/lib/formatters';
import { CHARGES_CONFIG } from '@/config/charges';

interface PriceBreakupProps {
  breakup: IPriceBreakup;
  carpetAreaSqFt?: number;
  unitLabel?: string;
}

export function PriceBreakup({ breakup, carpetAreaSqFt, unitLabel }: PriceBreakupProps) {
  return (
    <div className="bg-card rounded-3xl border border-border p-6 sm:p-8 font-sans transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-6 border-b border-border gap-2">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Transparent Cost Breakup {unitLabel ? `(${unitLabel})` : ''}
          </h3>
          <p className="text-xs text-muted mt-1">
            Itemized statutory government charges and society corpus.
          </p>
        </div>
        {carpetAreaSqFt && (
          <div className="text-left sm:text-right">
            <span className="text-xs text-muted block">Rate on Carpet Area</span>
            <span className="font-bold text-sm text-foreground tabular-nums">
              {formatRatePerSqFt(breakup.ratePerCarpetSqFt)}
            </span>
          </div>
        )}
      </div>

      <div className="divide-y divide-border text-sm">
        {/* Agreement Value */}
        <div className="py-3.5 flex justify-between items-center">
          <span className="text-foreground font-medium">Agreement Value (Base)</span>
          <span className="font-bold text-foreground tabular-nums">
            {formatCurrencyFull(breakup.agreementValue)}
          </span>
        </div>

        {/* Stamp Duty + Metro Cess */}
        <div className="py-3.5 flex justify-between items-center">
          <div>
            <span className="text-foreground">Stamp Duty &amp; Metro Cess</span>
            <span className="text-xs text-muted block">
              {CHARGES_CONFIG.totalEffectiveStampDutyPercent}% in PCMC (6% base + 1% metro cess)
            </span>
          </div>
          <span className="font-bold text-foreground tabular-nums">
            {formatCurrencyFull(breakup.stampDuty)}
          </span>
        </div>

        {/* Registration */}
        <div className="py-3.5 flex justify-between items-center">
          <div>
            <span className="text-foreground">Government Registration Fee</span>
            <span className="text-xs text-muted block">
              Capped at ₹30,000 for residential properties
            </span>
          </div>
          <span className="font-bold text-foreground tabular-nums">
            {formatCurrencyFull(breakup.registrationFee)}
          </span>
        </div>

        {/* GST */}
        <div className="py-3.5 flex justify-between items-center">
          <div>
            <span className="text-foreground">Goods &amp; Services Tax (GST)</span>
            <span className="text-xs text-muted block">
              {breakup.gst === 0 ? 'Zero (Ready-to-move OC received)' : '5% effective for under-construction'}
            </span>
          </div>
          <span className="font-bold text-foreground tabular-nums">
            {formatCurrencyFull(breakup.gst)}
          </span>
        </div>

        {/* Maintenance / Society Corpus */}
        <div className="py-3.5 flex justify-between items-center">
          <div>
            <span className="text-foreground">Advance Society Maintenance / Corpus</span>
            <span className="text-xs text-muted block">
              Estimated 1-2 years initial corpus
            </span>
          </div>
          <span className="font-bold text-foreground tabular-nums">
            {formatCurrencyFull(breakup.maintenanceAdvance)}
          </span>
        </div>

        {/* Car Parking */}
        <div className="py-3.5 flex justify-between items-center">
          <span className="text-foreground">Covered Car Parking Facility</span>
          <span className="font-bold text-foreground tabular-nums">
            {breakup.parkingCharges === 0 ? 'Included' : formatCurrencyFull(breakup.parkingCharges)}
          </span>
        </div>

        {/* Total Cost */}
        <div className="pt-4 flex justify-between items-center">
          <div>
            <span className="text-base font-bold text-foreground">All-In Total Estimate</span>
            <span className="text-xs text-muted block">
              Subject to final unit selection &amp; date
            </span>
          </div>
          <span className="text-lg font-bold text-foreground tabular-nums">
            {formatCurrencyFull(breakup.allInTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
