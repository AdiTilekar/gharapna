import { NextRequest, NextResponse } from 'next/server';
import { LeadSchema } from '@/types/lead';
import { LeadRepository } from '@/lib/repositories/lead.repository';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // 1. IP-based rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error:
            'Too many requests submitted recently. Please wait a few moments or contact our advisor via WhatsApp.',
        },
        { status: 429 }
      );
    }

    // 2. Parse body
    const body = await request.json();

    // 3. Honeypot check
    if (body.websiteField && body.websiteField.trim() !== '') {
      // Spam bot detected - return error
      return NextResponse.json(
        { error: 'Form submission rejected by spam shield.' },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const validationResult = LeadSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors).flat()[0] || 'Invalid inquiry details provided.';
      return NextResponse.json({ error: firstErrorMessage }, { status: 400 });
    }

    // 5. Save lead
    const newLead = await LeadRepository.create(validationResult.data);

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been successfully registered.',
        leadId: newLead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { error: 'An unexpected internal error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
