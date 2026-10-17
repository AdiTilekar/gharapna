'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

export function MinimalHomeNav() {
  const pathname = usePathname();
  const isHeroPage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(!isHeroPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHeroPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeroPage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=Hi%20Gharapna,%20I%20am%20interested%20in%20flats%20in%20PCMC.`;

  const solidMode = isScrolled || !isHeroPage;

  return (
    <>
      <header
        className={cn(
          isHeroPage ? 'fixed top-0 left-0 right-0' : 'sticky top-0',
          'z-40 transition-all duration-300 font-sans',
          solidMode
            ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border py-3.5 sm:py-4'
            : 'bg-transparent py-5 sm:py-6'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Wordmark (Left) */}
          <Link
            href="/"
            className={cn(
              'font-sans font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-200',
              solidMode
                ? 'text-foreground'
                : 'text-white drop-shadow-sm'
            )}
          >
            Gharapna
          </Link>

          {/* Desktop Navigation (Right: Projects, Flats, Areas, Contact, WhatsApp pill) */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/projects"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                solidMode
                  ? 'text-foreground hover:text-muted'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              )}
            >
              Projects
            </Link>
            <Link
              href="/flats"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                solidMode
                  ? 'text-foreground hover:text-muted'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              )}
            >
              Flats
            </Link>
            <Link
              href="/locations"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                solidMode
                  ? 'text-foreground hover:text-muted'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              )}
            >
              Areas
            </Link>
            <Link
              href="/contact"
              className={cn(
                'text-sm font-medium transition-colors duration-200',
                solidMode
                  ? 'text-foreground hover:text-muted'
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              )}
            >
              Contact
            </Link>

            {/* Small WhatsApp Pill Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={cn(
                'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm group',
                solidMode
                  ? 'border border-border text-foreground hover:border-transparent hover:bg-gradient-to-r hover:from-coral-start hover:to-coral-end hover:text-white hover:shadow-md'
                  : 'border border-white/40 text-white bg-black/10 backdrop-blur-sm hover:border-transparent hover:bg-gradient-to-r hover:from-coral-start hover:to-coral-end hover:text-white hover:shadow-md'
              )}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white transition-colors" />
              <span>WhatsApp</span>
            </a>

            <div className={cn(solidMode ? 'text-foreground' : 'text-white')}>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Right Actions: Theme Toggle + Menu Icon */}
          <div className="flex md:hidden items-center gap-2">
            <div className={cn(solidMode ? 'text-foreground' : 'text-white')}>
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMenuOpen(true)}
              type="button"
              aria-label="Open menu"
              className={cn(
                'p-2 rounded-full transition-colors',
                solidMode
                  ? 'text-foreground hover:bg-muted/10'
                  : 'text-white hover:bg-white/10'
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Simple Full-Screen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200 font-sans">
          {/* Top Bar with Wordmark & Close Icon */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-sans font-bold text-2xl tracking-tight text-foreground"
            >
              Gharapna
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              type="button"
              aria-label="Close menu"
              className="p-2 rounded-full text-muted hover:bg-muted/10 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Links (Large, spacious) */}
          <nav className="flex flex-col space-y-6 my-auto text-left">
            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-foreground hover:text-coral-start transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/flats"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-foreground hover:text-coral-start transition-colors"
            >
              Flats
            </Link>
            <Link
              href="/locations"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-foreground hover:text-coral-start transition-colors"
            >
              Areas
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-foreground hover:text-coral-start transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Bottom WhatsApp & Contact Touchpoint */}
          <div className="pt-6 border-t border-border space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 text-white bg-gradient-to-r from-coral-start to-coral-end shadow-sm transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <div className="text-center text-xs text-muted">
              Direct Advisory &bull; Pimpri-Chinchwad, Pune
            </div>
          </div>
        </div>
      )}
    </>
  );
}
