import { Metadata } from 'next';
import {
  CheckCircle2,
  XCircle,
  BadgePercent,
  Scale,
  FileCheck2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { BuyingProcess } from '@/components/trust/BuyingProcess';
import { ResponsePromise } from '@/components/trust/ResponsePromise';
import { Section, PageHeader, Card, PrimaryButton, SecondaryButton } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Why Gharapna | Our Honest, Trust-First Real Estate Philosophy in PCMC',
  description:
    'Discover how Gharapna is rebuilding trust in Pimpri-Chinchwad real estate. Zero spam calls, every cost shown upfront, verified MahaRERA carpet areas, and objective buyer-side guidance.',
};

export default function WhyGharapnaPage() {
  const comparisonItems = [
    {
      feature: 'Pricing Transparency',
      traditional: 'Bait base prices advertised; stamp duty, GST, and parking hidden until booking.',
      gharapna: 'Complete all-in price breakup shown upfront before you ever visit a site.',
    },
    {
      feature: 'Measurement Metric',
      traditional: 'Deceptive "super built-up" area with 35%–45% loading factors.',
      gharapna: 'Strictly net usable MahaRERA Carpet Area only. No inflated loading claims.',
    },
    {
      feature: 'Sales Technique',
      traditional: 'High-pressure tactics ("Price increases tomorrow", "Only 2 units left").',
      gharapna: 'Objective advisory. We highlight civic pros and cons openly without rush.',
    },
    {
      feature: 'Regulatory Verification',
      traditional: 'Verbal assurances without sharing sanctioned floor plans or title papers.',
      gharapna: 'Direct verification of MahaRERA certificates, CC sanctions, and title reports.',
    },
    {
      feature: 'Privacy & Data Policy',
      traditional: 'Your phone number sold to third-party telecallers; 20+ spam calls per week.',
      gharapna: 'Zero telemarketing spam. Your number is only used for scheduled visits.',
    },
    {
      feature: 'Post-Booking Support',
      traditional: 'Sales agent disappears as soon as developer token payment is cleared.',
      gharapna: 'Continuous accompaniment through bank approvals, registration, and handover.',
    },
  ];

  return (
    <Section size="wide" spacing="default">
      <div className="space-y-16">
        {/* Header */}
        <PageHeader
          prefix="Why"
          accent="Gharapna"
          suffix="for PCMC Flats"
          subtitle="In Marathi and Hindi, Gharapna means 'Ghar + Apna'—your own home. We built this platform because home buying in PCMC shouldn't feel like navigating a minefield of hidden charges, fake square footage, and persistent spam calls."
          align="center"
        />

        {/* 4 Core Pillars of Trust (Card grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
              <BadgePercent className="w-5 h-5 text-coral-start" />
            </div>
            <h3 className="font-bold text-base text-foreground">Zero Hidden Costs</h3>
            <p className="text-xs text-muted leading-relaxed">
              We compute agreement value, 7% stamp duty and cess, ₹30,000 capped registration, 5% GST, parking, and society advance upfront before you visit.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
              <Scale className="w-5 h-5 text-coral-start" />
            </div>
            <h3 className="font-bold text-base text-foreground">Net Carpet Area Only</h3>
            <p className="text-xs text-muted leading-relaxed">
              No artificial 35%–45% &quot;super built-up&quot; inflation. Every rate per square foot is calculated exclusively on actual, legally usable MahaRERA carpet area.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
              <FileCheck2 className="w-5 h-5 text-coral-start" />
            </div>
            <h3 className="font-bold text-base text-foreground">Verified Legal Title</h3>
            <p className="text-xs text-muted leading-relaxed">
              We check the project&apos;s active MahaRERA certificate, PCMC Commencement Certificate (CC) floor sanction, and advocate title search report.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-coral-start" />
            </div>
            <h3 className="font-bold text-base text-foreground">Anti-Pushy &amp; Anti-Spam</h3>
            <p className="text-xs text-muted leading-relaxed">
              No high-pressure sales calls, no countdown timers, no selling your phone number to third-party telemarketers. We advise at your pace.
            </p>
          </Card>
        </div>

        {/* 5-Step Process */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Our 5-Step Buying Process
            </h2>
            <p className="text-xs text-muted">
              From initial shortlist to receiving keys at the PCMC sub-registrar.
            </p>
          </div>
          <BuyingProcess />
        </div>

        {/* Comparison Table */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Traditional Real Estate vs. Gharapna
            </h2>
            <p className="text-xs text-muted">
              A transparent comparison of standard market practice versus our advisory standard.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-card">
            <table className="w-full text-left text-xs divide-y divide-border">
              <thead className="bg-muted/5 font-bold text-foreground">
                <tr>
                  <th className="px-6 py-4">Aspect</th>
                  <th className="px-6 py-4 text-muted">Traditional Broker / Portals</th>
                  <th className="px-6 py-4 text-coral-start">The Gharapna Way</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-muted/5 transition">
                    <td className="px-6 py-4 font-semibold align-top">{item.feature}</td>
                    <td className="px-6 py-4 text-muted align-top">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item.gharapna}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2-Hour Response Promise Widget */}
        <div className="text-center">
          <ResponsePromise />
        </div>

        {/* Bottom CTA */}
        <div className="border border-border rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto bg-card space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Experience Honest Property Discovery
          </h2>
          <p className="text-sm text-muted max-w-xl mx-auto">
            Search our curated flat inventory with upfront statutory price breakups or speak with a local PCMC property advisor.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PrimaryButton href="/flats">
              <span>Explore Available Flats</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
            <SecondaryButton href="/contact">
              <span>Contact an Advisor</span>
            </SecondaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
