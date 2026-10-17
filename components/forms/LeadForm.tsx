'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LeadPayload, LeadSchema } from '@/types/lead';
import { LOCALITIES } from '@/data/localities';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface LeadFormProps {
  sourcePage: string;
  sourceProjectSlug?: string;
  sourceLocalitySlug?: string;
  defaultEnquiryType?: 'site-visit' | 'whatsapp' | 'callback' | 'brochure';
  buttonText?: string;
  className?: string;
  onSuccess?: () => void;
}

export function LeadForm({
  sourcePage,
  sourceProjectSlug,
  sourceLocalitySlug,
  defaultEnquiryType = 'callback',
  buttonText = 'Send Inquiry',
  className = '',
  onSuccess,
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadPayload>({
    resolver: zodResolver(LeadSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      bhkPreference: '2 BHK',
      sourcePage,
      sourceProjectSlug,
      sourceLocalitySlug,
      enquiryType: defaultEnquiryType,
      consentGiven: true,
      websiteField: '', // Honeypot field
    },
  });

  const onSubmit = async (data: LeadPayload) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit enquiry. Please try again.');
      }

      setSubmitSuccess(true);
      reset();

      if (typeof window !== 'undefined') {
        window.dispatchEvent(
          new CustomEvent('gharapna_analytics', {
            detail: { event: 'lead_submit', enquiryType: data.enquiryType, sourcePage },
          })
        );
      }

      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('An unexpected error occurred. Please try again or reach us via WhatsApp.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-8 text-center space-y-3 font-sans animate-in fade-in">
        <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
        <h4 className="text-xl font-bold text-foreground">
          Request Received
        </h4>
        <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed">
          Thank you! Our local PCMC advisor will contact you within 2 hours.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="text-xs font-semibold text-coral-start hover:underline pt-2 block mx-auto"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-4 font-sans ${className}`} noValidate>
      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteField">Leave blank</label>
        <input
          id="websiteField"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('websiteField')}
        />
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Full Name <span className="text-coral-end">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. Rahul Sharma"
          {...register('fullName')}
          className={`w-full px-4 py-3 text-sm rounded-2xl border bg-transparent text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-1 focus:ring-coral-start transition ${
            errors.fullName
              ? 'border-red-500'
              : 'border-border'
          }`}
        />
        {errors.fullName && (
          <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-xs font-semibold text-foreground mb-1.5">
          Mobile Number <span className="text-coral-end">*</span>
        </label>
        <div className="flex rounded-2xl border border-border overflow-hidden focus-within:ring-1 focus-within:ring-coral-start transition">
          <span className="px-3.5 py-3 text-sm text-muted border-r border-border select-none">
            +91
          </span>
          <input
            type="tel"
            placeholder="9823012345"
            {...register('phone')}
            className="w-full px-4 py-3 text-sm bg-transparent text-foreground placeholder:text-muted/60 focus:outline-none"
          />
        </div>
        {errors.phone && (
          <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Locality & BHK Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Area Preference
          </label>
          <select
            {...register('sourceLocalitySlug')}
            className="w-full px-4 py-3 text-sm rounded-2xl border border-border bg-transparent text-foreground focus:outline-none focus:ring-1 focus:ring-coral-start"
          >
            <option value="" className="bg-background text-foreground">All PCMC Localities</option>
            {LOCALITIES.filter((l) => l.status === 'active').map((loc) => (
              <option key={loc.slug} value={loc.slug} className="bg-background text-foreground">
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            BHK Preference
          </label>
          <select
            {...register('bhkPreference')}
            className="w-full px-4 py-3 text-sm rounded-2xl border border-border bg-transparent text-foreground focus:outline-none focus:ring-1 focus:ring-coral-start"
          >
            <option value="1 BHK" className="bg-background text-foreground">1 BHK</option>
            <option value="2 BHK" className="bg-background text-foreground">2 BHK</option>
            <option value="3 BHK" className="bg-background text-foreground">3 BHK</option>
          </select>
        </div>
      </div>

      {/* Primary Action Button: coral gradient */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-coral-start to-coral-end hover:opacity-95 shadow-sm transition active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>{buttonText}</span>
        )}
      </button>
    </form>
  );
}
