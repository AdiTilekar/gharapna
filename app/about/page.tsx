import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Target, Users, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section, PageHeader, Card, PrimaryButton, SecondaryButton } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'About Gharapna | Honest Real Estate Advisory in Pimpri-Chinchwad',
  description:
    'Learn about Gharapna, our founding mission to bring transparency to PCMC real estate, our anti-spam philosophy, and our strict consumer trust safeguards.',
};

export default function AboutPage() {
  return (
    <Section size="standard" spacing="default">
      <div className="space-y-16">
        {/* Header */}
        <PageHeader
          prefix="Building real estate"
          accent="trust"
          suffix="in Pimpri-Chinchwad"
          subtitle="Gharapna was founded on a simple conviction: buying a home in Pimpri-Chinchwad should be an empowering family milestone, not a stressful ordeal filled with hidden charges, inflated carpet claims, and endless telemarketing harassment."
        />

        {/* Story & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Why We Specialize in PCMC
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Pimpri-Chinchwad is one of Maharashtra’s most progressive municipal regions. From the planned Pradhikaran sectors of Nigdi and Akurdi to the rapid IT expansion in Wakad and Ravet, PCMC provides wide roads, robust municipal infrastructure, and thriving social ecosystems.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              Yet, local homebuyers frequently face fragmented information, misleading &quot;super built-up&quot; area quotations with 40% loading, and developer brochures that conceal statutory costs. We built Gharapna to provide an unvarnished, transparent buyer advisory service.
            </p>
            <div>
              <Link
                href="/why-gharapna"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-coral-start hover:underline"
              >
                <span>Read our complete 5-step buying process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <Card>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-coral-start" />
              <span>Our Operating Principles</span>
            </h3>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <h4 className="font-bold text-foreground">Full Cost Transparency</h4>
                <p className="text-muted">
                  Every flat listing includes agreement value, stamp duty (7%), registration fee, GST slabs, parking, and society advance calculated upfront.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-foreground">Strict RERA Due Diligence</h4>
                <p className="text-muted">
                  We cross-reference project commencement certificates (CC), sanctioned floor slabs, and committed completion deadlines with official MahaRERA public records.
                </p>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-foreground">Zero Telemarketing Harassment</h4>
                <p className="text-muted">
                  We never share, sell, or distribute your phone number to third-party brokers, call centres, or loan aggregators.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Founding Desk Card */}
        <Card className="text-center max-w-2xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-muted/10 flex items-center justify-center text-foreground mx-auto">
            <Users className="w-6 h-6 text-coral-start" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Local Advisory Desk in PCMC
            </h3>
            <p className="text-xs text-muted leading-relaxed max-w-lg mx-auto">
              Gharapna is operated by our core local advisory team covering Wakad, Ravet, Pimple Saudagar, and Nigdi. We never publish stock photos or fabricated personas.
            </p>
          </div>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border border-border text-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Verified &amp; Licensed Advisors Only
            </span>
          </div>
        </Card>

        {/* Contact Touchpoint */}
        <div className="border border-border rounded-3xl p-8 sm:p-12 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Visit Our Advisory Desk or Call Us Directly
              </h3>
              <p className="text-sm text-muted">
                Whether you need advice on project approvals, floor layout comparisons, or home loan pre-approvals, our desk is open Monday through Saturday.
              </p>
              <div className="space-y-2 pt-2 text-xs text-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-coral-start shrink-0" />
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-coral-start shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-coral-start shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-lg-end">
              <PrimaryButton href="/contact">
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </PrimaryButton>
              <SecondaryButton href="/locations">
                <span>Explore Localities</span>
              </SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
