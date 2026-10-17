import { NextResponse } from 'next/server';
import { LeadRepository } from '@/lib/repositories/lead.repository';

export async function GET(request: Request) {
  try {
    const leads = await LeadRepository.getAll();

    // CSV Headers
    const headers = [
      'Lead ID',
      'Created Date (UTC)',
      'Status',
      'Full Name',
      'Phone Number',
      'Email Address',
      'Enquiry Type',
      'BHK Preference',
      'Preferred Localities',
      'Preferred Date',
      'Time Slot',
      'Source Page',
      'Source Project',
      'Source Locality',
    ];

    // CSV escape helper function
    const escapeCsv = (val: string | undefined | null) => {
      if (val == null) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    // Build rows
    const rows = leads.map((lead) => [
      escapeCsv(lead.id),
      escapeCsv(lead.createdAt),
      escapeCsv(lead.status),
      escapeCsv(lead.fullName),
      escapeCsv(lead.phone),
      escapeCsv(lead.email || ''),
      escapeCsv(lead.enquiryType),
      escapeCsv(lead.bhkPreference || 'Any'),
      escapeCsv(lead.preferredLocalities ? lead.preferredLocalities.join('; ') : ''),
      escapeCsv(lead.preferredDate || ''),
      escapeCsv(lead.preferredTimeSlot || ''),
      escapeCsv(lead.sourcePage),
      escapeCsv(lead.sourceProjectSlug || ''),
      escapeCsv(lead.sourceLocalitySlug || ''),
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\r\n');

    const today = new Date().toISOString().split('T')[0];
    const filename = `gharapna-leads-${today}.csv`;

    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (err) {
    console.error('Error generating leads CSV export:', err);
    return NextResponse.json(
      { error: 'Failed to generate CSV export' },
      { status: 500 }
    );
  }
}
