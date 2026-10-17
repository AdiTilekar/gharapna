'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8 text-xs text-muted transition-colors font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Wordmark */}
          <Link
            href="/"
            className="font-sans font-bold text-base text-foreground tracking-tight hover:opacity-90 transition"
          >
            Gharapna
          </Link>

          {/* Right: phone, WhatsApp, email, Privacy, Terms */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-foreground transition-colors"
            >
              {siteConfig.email}
            </a>
            <span className="hidden sm:inline text-muted/40">&bull;</span>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* One small line */}
        <div className="text-center md:text-left text-[11px] text-muted/80 pt-2 border-t border-border/50">
          RERA details are shown on each project page.
        </div>
      </div>
    </footer>
  );
}
