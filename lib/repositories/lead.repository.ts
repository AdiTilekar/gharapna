import { LeadPayload, LeadRecord } from '@/types/lead';

// Seed sample leads for demonstration in development and demo mode
const INITIAL_DEMO_LEADS: LeadRecord[] = [
  {
    id: 'lead_demo_001',
    fullName: 'Rahul Sharma',
    phone: '9822012345',
    email: 'rahul.sharma@example.com',
    bhkPreference: '2 BHK',
    preferredLocalities: ['wakad', 'ravet'],
    sourcePage: '/projects/aangan-residences',
    sourceProjectSlug: 'aangan-residences',
    sourceLocalitySlug: 'wakad',
    enquiryType: 'site-visit',
    preferredDate: '2026-10-18',
    preferredTimeSlot: '11:00 AM - 1:00 PM',
    consentGiven: true,
    websiteField: '',
    createdAt: '2026-10-13T10:30:00.000Z',
    status: 'visit-scheduled',
  },
  {
    id: 'lead_demo_002',
    fullName: 'Pooja Kulkarni',
    phone: '9850123456',
    email: 'pooja.k@example.com',
    bhkPreference: '3 BHK',
    preferredLocalities: ['pimple-saudagar'],
    sourcePage: '/flats/3-bhk-flat-in-pimple-saudagar-tower-a-1202',
    sourceProjectSlug: 'nilaya-heights',
    sourceLocalitySlug: 'pimple-saudagar',
    enquiryType: 'callback',
    consentGiven: true,
    websiteField: '',
    createdAt: '2026-10-13T14:15:00.000Z',
    status: 'contacted',
  },
  {
    id: 'lead_demo_003',
    fullName: 'Vikram Joshi',
    phone: '9764512389',
    email: 'vikram.joshi@example.com',
    bhkPreference: '2 BHK',
    preferredLocalities: ['ravet', 'punawale'],
    sourcePage: '/locations/ravet',
    sourceLocalitySlug: 'ravet',
    enquiryType: 'whatsapp',
    consentGiven: true,
    websiteField: '',
    createdAt: '2026-10-13T16:45:00.000Z',
    status: 'new',
  },
  {
    id: 'lead_demo_004',
    fullName: 'Aniket Deshmukh',
    phone: '9923187654',
    email: 'aniket.d@example.com',
    bhkPreference: '1 BHK',
    preferredLocalities: ['moshi'],
    sourcePage: '/tools?tab=emi',
    sourceLocalitySlug: 'moshi',
    enquiryType: 'callback',
    consentGiven: true,
    websiteField: '',
    createdAt: '2026-10-12T09:20:00.000Z',
    status: 'closed',
  },
];

// In-memory lead repository store (swappable for PostgreSQL / Supabase)
let leadRecords: LeadRecord[] = [...INITIAL_DEMO_LEADS];

export class LeadRepository {
  /**
   * Saves a new incoming lead record.
   */
  static async create(payload: LeadPayload): Promise<LeadRecord> {
    const record: LeadRecord = {
      ...payload,
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      status: 'new',
    };

    leadRecords.unshift(record);

    // Hooks for external CRM / notifications
    await this.triggerCrmHooks(record);

    return record;
  }

  /**
   * Retrieves all lead records (for admin dashboard).
   */
  static async getAll(): Promise<LeadRecord[]> {
    return [...leadRecords];
  }

  /**
   * Retrieves a single lead record by ID.
   */
  static async getById(id: string): Promise<LeadRecord | undefined> {
    return leadRecords.find((l) => l.id === id);
  }

  /**
   * Updates status of an existing lead.
   */
  static async updateStatus(
    id: string,
    status: LeadRecord['status']
  ): Promise<LeadRecord | null> {
    const lead = leadRecords.find((l) => l.id === id);
    if (!lead) return null;

    lead.status = status;
    return lead;
  }

  /**
   * Deletes a lead record by ID.
   */
  static async delete(id: string): Promise<boolean> {
    const initialLength = leadRecords.length;
    leadRecords = leadRecords.filter((l) => l.id !== id);
    return leadRecords.length < initialLength;
  }

  /**
   * Integration hooks for external CRM / notification services.
   */
  static async triggerCrmHooks(lead: LeadRecord): Promise<void> {
    try {
      // 1. Email notification dispatch stub
      await this.dispatchEmailAlert(lead);

      // 2. WhatsApp notification dispatch stub
      await this.dispatchWhatsAppAlert(lead);

      // 3. CRM webhook forwarder stub
      await this.dispatchCrmWebhook(lead);
    } catch (err) {
      console.error('[CRM Hooks Error]: Failed to dispatch lead notification', err);
    }
  }

  /**
   * Outgoing Email Dispatcher Stub
   */
  private static async dispatchEmailAlert(lead: LeadRecord): Promise<void> {
    const notificationEmail = process.env.NOTIFICATION_EMAIL || process.env.NEXT_PUBLIC_EMAIL;
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Email Hook]: Alert dispatched to ${notificationEmail} for lead ${lead.fullName}`);
    }
    // In production: SendGrid / AWS SES / Resend API call
  }

  /**
   * Outgoing WhatsApp Business Dispatcher Stub
   */
  private static async dispatchWhatsAppAlert(lead: LeadRecord): Promise<void> {
    const advisorPhone = process.env.ADVISOR_WHATSAPP || process.env.NEXT_PUBLIC_WHATSAPP;
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[WhatsApp Hook]: Message queued to advisor (${advisorPhone}) for ${lead.phone}`);
    }
    // In production: Meta WhatsApp Cloud API / Twilio
  }

  /**
   * Outgoing CRM Webhook Forwarder Stub
   */
  private static async dispatchCrmWebhook(lead: LeadRecord): Promise<void> {
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[CRM Webhook]: Posting lead ${lead.id} to ${webhookUrl}`);
      }
      // In production: fetch(webhookUrl, { method: 'POST', body: JSON.stringify(lead) })
    }
  }
}
