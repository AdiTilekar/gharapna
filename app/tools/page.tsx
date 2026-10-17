import { Metadata } from 'next';
import { Suspense } from 'react';
import { ToolsHubClient } from '@/components/tools/ToolsHubClient';
import { Loader2 } from 'lucide-react';
import { Section, PageHeader } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Real Estate Calculators | EMI, Stamp Duty & Affordability (PCMC)',
  description:
    'Free property calculators for Pimpri-Chinchwad (PCMC), Pune: Home Loan EMI Amortization, 7% PCMC Stamp Duty & Metro Cess Estimator, and 50% FOIR Affordability Matrix.',
};

export default function ToolsPage() {
  return (
    <Section size="wide" spacing="default">
      <div className="space-y-10">
        <PageHeader
          prefix="Real Estate"
          accent="financial"
          suffix="calculators"
          subtitle="Transparent numbers calculated upfront. Estimate monthly home loan repayments, mandatory government taxes (7% stamp duty/cess & registration cap), and borrowing capacity."
        />

        <Suspense
          fallback={
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-muted">
              <Loader2 className="w-6 h-6 animate-spin text-coral-start" />
              <span className="text-xs font-medium">Loading Financial Calculators...</span>
            </div>
          }
        >
          <ToolsHubClient />
        </Suspense>
      </div>
    </Section>
  );
}
