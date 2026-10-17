import { Metadata } from 'next';
import { Section, PageHeader } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Terms of Service | Gharapna',
  description:
    'Terms and conditions governing the use of Gharapna website and advisory services across PCMC.',
};

export default function TermsPage() {
  return (
    <Section size="narrow" spacing="spacious">
      <article className="space-y-12">
        {/* Simple Headline (one italic accent word) */}
        <PageHeader
          prefix="Terms of"
          accent="service"
          subtitle="Effective October 2026 • Gharapna Advisory"
        />

        {/* Plain readable text, generous spacing */}
        <div className="space-y-8 text-sm text-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted">
              By accessing and using this website, you accept and agree to be bound by these terms. If you do not agree to these terms, please discontinue using this platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Use of Information &amp; Estimates
            </h2>
            <p className="text-muted">
              All price calculations, stamp duty estimators, and area figures provided on this platform are for indicative estimation purposes only. Final figures, interest rates, and government charges are verified and confirmed at the time of legal agreement execution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-muted">
              These terms are governed by the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts located in Pune / Pimpri-Chinchwad, Maharashtra.
            </p>
          </section>
        </div>
      </article>
    </Section>
  );
}
