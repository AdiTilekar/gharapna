'use client';

import { useState } from 'react';
import { LOCALITIES } from '@/data/localities';
import { PROJECTS } from '@/data/projects';
import { formatRatePerSqFt } from '@/lib/formatters';
import { ArrowRight, MapPin, School, Bus } from 'lucide-react';
import Link from 'next/link';
import { Section, PageHeader, Card } from '@/components/ui/minimal';

export default function LocalityComparePage() {
  const [locality1Slug, setLocality1Slug] = useState('wakad');
  const [locality2Slug, setLocality2Slug] = useState('pimple-saudagar');
  const [locality3Slug, setLocality3Slug] = useState('ravet');

  const loc1 = LOCALITIES.find((l) => l.slug === locality1Slug) || LOCALITIES[0];
  const loc2 = LOCALITIES.find((l) => l.slug === locality2Slug) || LOCALITIES[1];
  const loc3 = LOCALITIES.find((l) => l.slug === locality3Slug) || LOCALITIES[2];

  const compared = [loc1, loc2, loc3];

  return (
    <Section size="wide" spacing="default">
      <div className="space-y-10 font-sans">
        {/* Header */}
        <PageHeader
          prefix="Side-by-Side"
          accent="locality"
          suffix="comparison"
          subtitle="Unsure between Wakad, Pimple Saudagar, or Ravet? Compare transit links, school clusters, indicative rate benchmarks, and municipal jurisdictions objectively."
        />

        {/* Locality Pickers */}
        <Card className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <h3 className="font-bold text-base text-foreground">
              Select Up to 3 Localities to Compare
            </h3>
            <span className="text-xs text-muted">All 27 PCMC zones available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted block mb-1">
                Locality 1
              </label>
              <select
                value={locality1Slug}
                onChange={(e) => setLocality1Slug(e.target.value)}
                className="w-full px-3 py-2 rounded-2xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer"
              >
                {LOCALITIES.map((loc) => (
                  <option key={loc.slug} value={loc.slug}>
                    {loc.name} ({loc.jurisdiction})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted block mb-1">
                Locality 2
              </label>
              <select
                value={locality2Slug}
                onChange={(e) => setLocality2Slug(e.target.value)}
                className="w-full px-3 py-2 rounded-2xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer"
              >
                {LOCALITIES.map((loc) => (
                  <option key={loc.slug} value={loc.slug}>
                    {loc.name} ({loc.jurisdiction})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted block mb-1">
                Locality 3
              </label>
              <select
                value={locality3Slug}
                onChange={(e) => setLocality3Slug(e.target.value)}
                className="w-full px-3 py-2 rounded-2xl border border-border bg-background text-foreground text-sm font-medium focus:outline-none focus:ring-1 focus:ring-coral-start cursor-pointer"
              >
                {LOCALITIES.map((loc) => (
                  <option key={loc.slug} value={loc.slug}>
                    {loc.name} ({loc.jurisdiction})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Card>

        {/* Comparison Matrix Table */}
        <div className="bg-card rounded-3xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/5">
                  <th className="p-5 text-muted uppercase font-bold text-[10px] w-1/4">
                    Locality Metric
                  </th>
                  {compared.map((loc, idx) => (
                    <th
                      key={idx}
                      className="p-5 text-foreground font-bold text-base w-1/4"
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-coral-start" />
                        <span>{loc.name}</span>
                      </div>
                      <span className="text-xs font-normal text-muted block mt-0.5 capitalize">
                        {loc.corridor.replace(/-/g, ' ')}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {/* Jurisdiction */}
                <tr>
                  <td className="p-5 font-semibold text-muted">Municipal Authority</td>
                  {compared.map((loc, idx) => (
                    <td key={idx} className="p-5">
                      <span className="font-semibold text-foreground">{loc.jurisdiction}</span>
                    </td>
                  ))}
                </tr>

                {/* Rate Benchmark */}
                <tr className="bg-muted/5">
                  <td className="p-5 font-semibold text-muted">Benchmark Rate / Sq.Ft</td>
                  {compared.map((loc, idx) => (
                    <td key={idx} className="p-5">
                      <span className="text-base font-bold text-foreground tabular-nums">
                        {formatRatePerSqFt(loc.priceTrend.averageRatePerSqFt)}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* General Character */}
                <tr>
                  <td className="p-5 font-semibold text-muted">Neighborhood Profile</td>
                  {compared.map((loc, idx) => (
                    <td key={idx} className="p-5 text-muted leading-relaxed">
                      {loc.shortDescription}
                    </td>
                  ))}
                </tr>

                {/* Transport Hubs */}
                <tr>
                  <td className="p-5 font-semibold text-muted">
                    <div className="flex items-center gap-1.5">
                      <Bus className="w-4 h-4 text-coral-start" />
                      <span>Transit Highlights</span>
                    </div>
                  </td>
                  {compared.map((loc, idx) => (
                    <td key={idx} className="p-5 space-y-1">
                      {loc.transport.map((t, tIdx) => (
                        <div key={tIdx} className="text-xs text-muted">
                          • {t.name}
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>

                {/* Schools Cluster */}
                <tr>
                  <td className="p-5 font-semibold text-muted">
                    <div className="flex items-center gap-1.5">
                      <School className="w-4 h-4 text-coral-start" />
                      <span>Schools &amp; Campuses</span>
                    </div>
                  </td>
                  {compared.map((loc, idx) => (
                    <td key={idx} className="p-5 space-y-1">
                      {loc.schools.map((s, sIdx) => (
                        <div key={sIdx} className="text-xs text-muted">
                          • {s.name}
                        </div>
                      ))}
                    </td>
                  ))}
                </tr>

                {/* Active Projects */}
                <tr>
                  <td className="p-5 font-semibold text-muted">Active Coverage</td>
                  {compared.map((loc, idx) => {
                    const count = PROJECTS.filter((p) => p.localitySlug === loc.slug).length;
                    return (
                      <td key={idx} className="p-5">
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-coral-start hover:underline"
                        >
                          <span>{count} Verified Project{count === 1 ? '' : 's'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}
