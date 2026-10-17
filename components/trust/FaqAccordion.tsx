'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BUYER_FAQS, FaqItem } from '@/config/faq';
import { cn } from '@/lib/utils';

interface FaqAccordionProps {
  items?: FaqItem[];
  limit?: number;
  showJsonLd?: boolean;
}

export function FaqAccordion({
  items = BUYER_FAQS,
  limit,
  showJsonLd = true,
}: FaqAccordionProps) {
  const displayItems = limit ? items.slice(0, limit) : items;
  const [openIds, setOpenIds] = useState<string[]>([displayItems[0]?.id || '']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Structured data for Google Search (FAQPage Schema)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: displayItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="space-y-4 font-sans">
      {showJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {displayItems.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="border border-border rounded-3xl bg-card overflow-hidden transition"
          >
            <button
              onClick={() => toggleItem(item.id)}
              type="button"
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-foreground hover:text-coral-start transition cursor-pointer"
            >
              <span className="flex items-start gap-3 text-sm sm:text-base leading-snug">
                <HelpCircle className="w-4 h-4 text-coral-start shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 text-muted shrink-0 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-coral-start'
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-border animate-in fade-in">
                <p>{item.answer}</p>
                <div className="mt-3 text-[11px] text-muted/70 italic">
                  * General informative guidance under MahaRERA and standard Maharashtra municipal guidelines.
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
