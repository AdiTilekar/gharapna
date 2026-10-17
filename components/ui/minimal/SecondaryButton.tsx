import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export function SecondaryButton({
  href,
  target,
  rel,
  children,
  className,
  ...props
}: SecondaryButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-border text-foreground hover:bg-muted/5 transition active:scale-95 shrink-0 focus:outline-none focus:ring-2 focus:ring-border disabled:opacity-50 disabled:cursor-not-allowed',
    className
  );

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a href={href} target={target} rel={rel} className={baseClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
