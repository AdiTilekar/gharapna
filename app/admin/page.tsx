import { Metadata } from 'next';
import { LeadRepository } from '@/lib/repositories/lead.repository';
import { AdminDashboardClient } from '@/components/admin/AdminDashboardClient';
import { Section } from '@/components/ui/minimal';

export const metadata: Metadata = {
  title: 'Advisory Operations & Lead Management | Gharapna Admin',
  description: 'Protected internal operations desk for managing property visits and inquiries.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function AdminPage() {
  const initialLeads = await LeadRepository.getAll();

  return (
    <Section size="wide" spacing="default">
      <AdminDashboardClient initialLeads={initialLeads} />
    </Section>
  );
}
