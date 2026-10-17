export type GharapnaEvent =
  | 'lead_submit'
  | 'whatsapp_click'
  | 'call_click'
  | 'site_visit_booked'
  | 'emi_used'
  | 'locality_viewed';

export function trackEvent(event: GharapnaEvent, payload?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  // Custom event dispatch for analytics logging
  window.dispatchEvent(
    new CustomEvent('gharapna_analytics', {
      detail: { event, timestamp: Date.now(), ...payload },
    })
  );

  // Console log in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Event]: ${event}`, payload);
  }
}
