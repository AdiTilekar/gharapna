import { Search, Eye, FileCheck2, Landmark, Key } from 'lucide-react';

export function BuyingProcess() {
  const steps = [
    {
      step: '01',
      title: 'Shortlist with Honest Data',
      description:
        'Browse verified carpet areas and upfront price breakups across PCMC. Zero hidden charges or inflated super built-up claims.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Personal Site Visit',
      description:
        'Visit shortlisted projects with our non-pushy advisor. Review neighborhood connectivity, sunlight orientation, and construction quality.',
      icon: Eye,
    },
    {
      step: '03',
      title: 'Verify Documents & Title',
      description:
        'Cross-check MahaRERA certificates, Commencement Certificate (CC), sanctioned architectural plans, and 30-year title reports.',
      icon: FileCheck2,
    },
    {
      step: '04',
      title: 'Transparent Loan & Agreement',
      description:
        'Assist with multi-bank home loan comparisons at zero brokerage. Review standardized construction-linked agreements without hidden penalty traps.',
      icon: Landmark,
    },
    {
      step: '05',
      title: 'Registration & Handover',
      description:
        'Complete formal registrar office stamp duty execution and obtain your keys upon municipal Occupancy Certificate (OC) grant.',
      icon: Key,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {steps.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.step}
            className="bg-card rounded-3xl p-6 border border-border flex flex-col justify-between space-y-4 font-sans"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-coral-start tabular-nums">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-full bg-muted/10 text-foreground flex items-center justify-center">
                  <Icon className="w-5 h-5 text-coral-start" />
                </div>
              </div>
              <h3 className="font-bold text-base text-foreground mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
