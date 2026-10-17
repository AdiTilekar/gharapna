import { Metadata } from 'next';
import { BUYER_FAQS } from '@/config/faq';
import { FaqAccordion } from '@/components/trust/FaqAccordion';
import { siteConfig } from '@/config/site';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Section, PageHeader, PrimaryButton, SecondaryButton } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Homebuyer FAQ | 10 Essential Real Estate Questions in PCMC | Gharapna',
  description:
    'Clear, legally accurate answers to top real estate questions in Pimpri-Chinchwad: MahaRERA verification, carpet area definitions, hidden costs, NRI guidelines, and possession delays.',
};

export default function FaqPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Gharapna,%20I%20have%20a%20question%20regarding%20a%20property%20in%20PCMC`;

  return (
    <Section size="standard" spacing="default">
      <div className="space-y-12">
        {/* Header */}
        <PageHeader
          prefix="Frequently Asked"
          accent="Questions"
          suffix="for PCMC Homebuyers"
          subtitle="Transparent, legally grounded answers to the most common questions on MahaRERA, statutory fees, carpet area metrics, and possession rights in Pimpri-Chinchwad, Pune."
        />

        {/* FAQ Accordion */}
        <FaqAccordion items={BUYER_FAQS} showJsonLd={true} />

        {/* Advisory Desk Banner */}
        <div className="border border-border rounded-3xl p-8 sm:p-10 bg-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-xl font-bold text-foreground">
              Have a question about a specific project or layout?
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Our PCMC property advisory team will check the sanctioned floor plan, MahaRERA registration status, and title history for you.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <SecondaryButton href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Us</span>
            </SecondaryButton>
            <PrimaryButton href="/contact">
              <span>Schedule Call</span>
              <ArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
