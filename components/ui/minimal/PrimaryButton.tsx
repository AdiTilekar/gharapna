import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({
  href,
  target,
  rel,
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  const baseClasses = cn(
    'bg-gradient-to-r from-coral-start to-coral-end hover:opacity-95 text-white font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95 shrink-0 focus:outline-none focus:ring-2 focus:ring-coral-start/50 disabled:opacity-50 disabled:cursor-not-allowed',
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
