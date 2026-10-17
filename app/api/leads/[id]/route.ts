import { NextResponse } from 'next/server';
import { LeadRepository } from '@/lib/repositories/lead.repository';
import { z } from 'zod';

const UpdateStatusSchema = z.object({
  status: z.enum(['new', 'contacted', 'visit-scheduled', 'closed']),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = UpdateStatusSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const updated = await LeadRepository.updateStatus(id, parsed.data.status);
    if (!updated) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (err) {
    console.error('Error updating lead status:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = await LeadRepository.delete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error deleting lead:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
