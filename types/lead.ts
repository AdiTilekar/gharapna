import { z } from 'zod';

export const LeadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(80),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number (e.g. 9823012345)'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  bhkPreference: z.enum(['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Any']).optional(),
  preferredLocalities: z.array(z.string()).optional(),
  sourcePage: z.string(),
  sourceProjectSlug: z.string().optional(),
  sourceLocalitySlug: z.string().optional(),
  enquiryType: z.enum(['site-visit', 'whatsapp', 'callback', 'brochure']),
  preferredDate: z.string().optional(),
  preferredTimeSlot: z.string().optional(),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: 'You must accept to receive communication as per our Privacy Policy',
  }),
  // Honeypot field (hidden in UI; bots will fill it, real humans will leave it empty)
  websiteField: z.string().max(0, 'Spam detected').optional().default(''),
});

export type LeadPayload = z.infer<typeof LeadSchema>;

export interface LeadRecord extends LeadPayload {
  id: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'visit-scheduled' | 'closed';
}
