import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  // If rendering a standard minimal image card (matches Featured Projects)
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  price?: string;
  subtitle?: string;
}

export function Card({
  children,
  className,
  href,
  imageSrc,
  imageAlt,
  title,
  price,
  subtitle,
}: CardProps) {
  // If used as standard minimal property/locality card
  if (href && imageSrc && title) {
    return (
      <article>
        <Link
          href={href}
          className={cn(
            'group block rounded-3xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-coral-start transition-transform duration-300 font-sans',
            className
          )}
        >
          {/* 4:3 Image Container with hover zoom */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted/10">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Text Container: Title, Price, Subtitle */}
          <div className="pt-4 px-1 space-y-1">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-bold text-lg text-foreground group-hover:text-coral-start transition-colors truncate">
                {title}
              </h3>
              {price && (
                <span className="font-bold text-sm text-foreground tabular-nums shrink-0">
                  {price}
                </span>
              )}
            </div>
            {subtitle && (
              <p className="text-xs text-muted truncate">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </Link>
      </article>
    );
  }

  // If used as general rounded-3xl card container (e.g. tabular boxes, forms, admin cards)
  return (
    <div
      className={cn(
        'rounded-3xl border border-border bg-card p-6 sm:p-8 font-sans transition-colors',
        className
      )}
    >
      {children}
    </div>
  );
}
