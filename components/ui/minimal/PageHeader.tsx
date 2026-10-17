import React from 'react';
import { cn } from '@/lib/utils';

export interface PageHeaderProps {
  prefix?: string;
  accent: string;
  suffix?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function PageHeader({
  prefix,
  accent,
  suffix,
  subtitle,
  align = 'left',
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('space-y-3', align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left', className)}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
        {prefix ? `${prefix} ` : ''}
        <span className="font-serif italic font-normal">{accent}</span>
        {suffix ? ` ${suffix}` : ''}
      </h1>
      {subtitle && (
        <p className="text-base text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
