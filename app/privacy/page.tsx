import { Metadata } from 'next';
import { Section, PageHeader } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Privacy Policy | Gharapna',
  description:
    'Gharapna privacy policy built on data minimization, zero spam, and transparent real estate advisory.',
};

export default function PrivacyPage() {
  return (
    <Section size="narrow" spacing="spacious">
      <article className="space-y-12">
        {/* Simple Headline (one italic accent word) */}
        <PageHeader
          prefix="Privacy"
          accent="policy"
          subtitle="Effective October 2026 • DPDP Act 2023 Aligned"
        />

        {/* Plain readable text, generous spacing */}
        <div className="space-y-8 text-sm text-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              1. Our Trust-First Privacy Commitment
            </h2>
            <p className="text-muted">
              At Gharapna, privacy is essential to honest real estate advisory. We despise intrusive telemarketing and numbers-selling in the property market. This policy outlines how we handle and protect your contact information in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              2. Data We Collect
            </h2>
            <p className="text-muted">
              We practice strict data minimization. We only collect details necessary to assist with your flat search:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted">
              <li>Your name (for identification during consultations and site visits)</li>
              <li>Your active 10-digit mobile phone number (to provide callbacks and WhatsApp responses)</li>
              <li>Optional email address (for sending price breakups and layout PDFs)</li>
              <li>Property preferences (BHK type, budget range, preferred PCMC localities)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              3. Zero Third-Party Data Selling
            </h2>
            <p className="text-muted">
              We never sell, rent, trade, or distribute your phone number or contact details to third-party telemarketers, loan brokers, or unauthorized sales agencies. Your inquiry is handled solely by internal Gharapna advisors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-foreground">
              4. Data Retention &amp; Erasure Requests
            </h2>
            <p className="text-muted">
              We retain inquiry records only as long as required to assist your home purchase. You may request permanent deletion of your data at any time by emailing privacy@gharapna.com or messaging our official WhatsApp desk.
            </p>
          </section>
        </div>
      </article>
    </Section>
  );
}
