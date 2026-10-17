'use client';

import Image from 'next/image';
import { MinimalSearchFloating } from './MinimalSearchFloating';

export function MinimalHero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* 1. Full-Bleed Photo with priority */}
      <Image
        src="/images/hero.jpg"
        alt="Modern residential towers in Pimpri-Chinchwad at golden hour"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* 2. Soft Dark Gradient Overlay for WCAG AA Text Contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Hero Content (Centered, 100vh) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        <div className="w-full space-y-8 sm:space-y-10 animate-in fade-in duration-500">
          {/* Headline: "Find your *own* home in Pimpri-Chinchwad" */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] font-sans drop-shadow-sm max-w-3xl mx-auto">
            Find your{' '}
            <span className="font-serif italic font-normal text-white">
              own
            </span>{' '}
            home in Pimpri-Chinchwad
          </h1>

          {/* ONE Floating Search Bar */}
          <div className="w-full pt-2">
            <MinimalSearchFloating />
          </div>
        </div>
      </div>
    </section>
  );
}
