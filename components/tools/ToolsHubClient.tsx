'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { EmiCalculator } from './EmiCalculator';
import { StampDutyEstimator } from './StampDutyEstimator';
import { AffordabilityCalculator } from './AffordabilityCalculator';
import { Calculator, Landmark, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ToolsHubClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<'emi' | 'stamp-duty' | 'affordability'>(
    tabParam === 'stamp-duty' || tabParam === 'affordability' ? tabParam : 'emi'
  );

  useEffect(() => {
    if (tabParam === 'stamp-duty' || tabParam === 'affordability' || tabParam === 'emi') {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (tab: 'emi' | 'stamp-duty' | 'affordability') => {
    setActiveTab(tab);
    router.replace(`/tools?tab=${tab}`, { scroll: false });
  };

  const tabs = [
    { id: 'emi', label: 'Home Loan EMI Calculator', icon: Calculator },
    { id: 'stamp-duty', label: 'PCMC Stamp Duty & Cess', icon: Landmark },
    { id: 'affordability', label: 'Budget & Affordability Matrix', icon: PieChart },
  ] as const;

  return (
    <div className="space-y-8 font-sans">
      {/* Tab Switcher */}
      <div className="flex border-b border-border overflow-x-auto gap-2 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              type="button"
              className={cn(
                'flex items-center gap-2 py-2.5 px-5 text-xs font-semibold rounded-full transition whitespace-nowrap cursor-pointer',
                isActive
                  ? 'bg-foreground text-background'
                  : 'border border-border text-muted hover:text-foreground'
              )}
            >
              <Icon className="w-3.5 h-3.5 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div>
        {activeTab === 'emi' && <EmiCalculator />}
        {activeTab === 'stamp-duty' && <StampDutyEstimator />}
        {activeTab === 'affordability' && <AffordabilityCalculator />}
      </div>
    </div>
  );
}
