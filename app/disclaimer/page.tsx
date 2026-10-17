import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { Section, PageHeader } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'MahaRERA & Real Estate Disclaimer | Gharapna',
  description:
    'Statutory disclaimers regarding MahaRERA project registrations, pricing accuracy, and legal advisory boundaries for Gharapna.',
};

export default function DisclaimerPage() {
  return (
    <Section size="narrow" spacing="spacious">
      <article className="space-y-12 font-sans">
        {/* Header */}
        <PageHeader
          prefix="Real Estate &amp;"
          accent="regulatory"
          suffix="disclaimer"
          subtitle="Last Updated: October 2026 • Statutory Notice"
        />

        <div className="space-y-8 text-sm text-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. MahaRERA Verification Notice
            </h2>
            <p className="text-muted">
              Under the Real Estate (Regulation and Development) Act, 2016 (MahaRERA), every commercial or residential real estate project exceeding 500 square meters or 8 apartments must be registered with the Maharashtra Real Estate Regulatory Authority prior to advertisement, marketing, or booking.
            </p>
            <p className="text-muted">
              Buyers are strongly advised to independently verify all project registration certificates, approved sanctions, commencement certificates, and registered encumbrances on the official MahaRERA website at{' '}
              <a
                href="https://maharera.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral-start underline font-medium inline-flex items-center gap-1"
              >
                <span>maharera.maharashtra.gov.in</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Nature of Platform &amp; Indicative Data
            </h2>
            <p className="text-muted">
              Gharapna is a property facilitation and advisory platform. The property specifications, architectural layouts, carpet areas, indicative pricing breakups, and timelines displayed on this website are compiled from information provided by respective developers or representative sample datasets. While we take meticulous care to reflect accurate figures, prices and government tax slabs are subject to revision without prior notice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Independent Legal Counsel Advisory
            </h2>
            <p className="text-muted">
              Content provided on this site does not constitute formal legal, taxation, or financial advice. Homebuyers should engage an independent legal advocate to perform a title search and verify original revenue documents before signing an agreement for sale.
            </p>
          </section>
        </div>
      </article>
    </Section>
  );
}
