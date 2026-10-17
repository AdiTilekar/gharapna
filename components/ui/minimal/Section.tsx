import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps {
  children: React.ReactNode;
  size?: 'wide' | 'standard' | 'narrow' | 'compact';
  spacing?: 'default' | 'spacious' | 'tight';
  className?: string;
  containerClassName?: string;
}

export function Section({
  children,
  size = 'wide',
  spacing = 'default',
  className,
  containerClassName,
}: SectionProps) {
  const maxWidths = {
    wide: 'max-w-6xl',
    standard: 'max-w-5xl',
    narrow: 'max-w-2xl',
    compact: 'max-w-xl',
  };

  const paddings = {
    default: 'py-12 md:py-20',
    spacious: 'py-16 md:py-24',
    tight: 'py-8 md:py-12',
  };

  return (
    <section className={cn(paddings[spacing], 'font-sans transition-colors', className)}>
      <div className={cn(maxWidths[size], 'mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
