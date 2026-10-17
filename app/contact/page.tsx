import { Metadata } from 'next';
import { LeadForm } from '@/components/forms/LeadForm';
import { siteConfig } from '@/config/site';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Section, PageHeader, Card } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Contact Gharapna | PCMC Real Estate Advisory',
  description:
    'Reach out to Gharapna advisors for honest guidance on flats in Pimpri-Chinchwad.',
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Gharapna,%20I%20have%20an%20enquiry%20regarding%20flats%20in%20PCMC.`;

  return (
    <Section size="compact" spacing="default">
      <div className="space-y-10">
        {/* Simple Headline (one italic accent word) */}
        <PageHeader
          prefix="Contact our local"
          accent="advisors"
        />

        {/* Direct Channels: Phone, WhatsApp, Email */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-muted py-3 border-y border-border">
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-2 text-foreground hover:text-coral-start transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-coral-start" />
            <span className="font-medium">{siteConfig.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-emerald-500 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-medium">WhatsApp</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-foreground hover:text-coral-start transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-coral-start" />
            <span className="font-medium">{siteConfig.email}</span>
          </a>
        </div>

        {/* Just the Form in standard Card */}
        <Card>
          <LeadForm sourcePage="/contact" buttonText="Send Inquiry" />
        </Card>
      </div>
    </Section>
  );
}
