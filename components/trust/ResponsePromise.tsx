import { Clock, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface ResponsePromiseProps {
  className?: string;
}

export function ResponsePromise({ className }: ResponsePromiseProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-xs text-foreground font-medium',
        className
      )}
    >
      <Clock className="w-3.5 h-3.5 text-coral-start shrink-0" />
      <span>{siteConfig.responsePromise}</span>
      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1" />
      <span className="text-muted text-[11px]">Direct advisor, zero spam</span>
    </div>
  );
}
