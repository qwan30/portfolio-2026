import { useEffect, useRef, useState } from 'react';
import { Check, Copy, ExternalLink, Mail, MapPin, Phone, Send, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { DIALOG_LIGHT_DISMISS, useNativeModal } from '../hooks/useNativeModal';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useNativeModal({ open, onClose });
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const timerRef = useRef<number | null>(null);
  const { personal } = portfolioData;

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <dialog
      ref={dialogRef}
      {...DIALOG_LIGHT_DISMISS}
      aria-labelledby="contact-dialog-title"
      className="native-modal w-[min(36rem,calc(100vw-1.5rem))]"
    >
      <div className="bg-cream-card text-ink rounded-2xl w-full p-6 sm:p-8 shadow-2xl border border-cream-hairline relative max-h-[calc(100dvh-2rem)] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="absolute top-5 right-5 w-11 h-11 rounded-full bg-cream-soft hover:bg-cream-hairline text-ink flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close contact dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-7 pr-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-verified" aria-hidden="true" />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Direct Contact
            </span>
          </div>
          <h2 id="contact-dialog-title" className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight uppercase">
            {personal.name}
          </h2>
          <p className="font-sans text-sm text-ink-secondary mt-1">
            {personal.title} · {personal.location}
          </p>
        </div>

        <span className="sr-only" aria-live="polite">
          {copiedField === 'email'
            ? 'Email address copied to clipboard'
            : copiedField === 'phone'
              ? 'Phone number copied to clipboard'
              : ''}
        </span>

        <div className="flex flex-col gap-3.5 mb-7">
          <div className="p-4 rounded-xl bg-cream border border-cream-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-cream-card border border-cream-hairline text-ink flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[11px] uppercase font-semibold text-ink-muted tracking-wider block">
                  Email
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-ink select-all truncate block">
                  {personal.email}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'email')}
                className="h-11 px-3.5 rounded-lg bg-cream-card hover:bg-cream-soft font-sans text-xs font-semibold text-ink border border-cream-hairline transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-verified" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-ink-muted" />
                )}
                <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-4 rounded-lg bg-cobalt hover:bg-cobalt-hover text-white font-sans text-xs font-semibold transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Compose</span>
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cream border border-cream-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-cream-card border border-cream-hairline text-ink flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="font-mono text-[11px] uppercase font-semibold text-ink-muted tracking-wider block">
                  Phone
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-ink select-all truncate block tabular-nums">
                  {personal.phone}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={() => handleCopy(personal.phoneRaw, 'phone')}
                className="h-11 px-3.5 rounded-lg bg-cream-card hover:bg-cream-soft font-sans text-xs font-semibold text-ink border border-cream-hairline transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-verified" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-ink-muted" />
                )}
                <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`tel:${personal.phoneRaw}`}
                className="h-11 px-4 rounded-lg bg-ink hover:bg-ink-secondary text-cream font-sans text-xs font-semibold transition-colors inline-flex items-center gap-1.5 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cream border border-cream-hairline flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cream-card border border-cream-hairline text-ink flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase font-semibold text-ink-muted tracking-wider block">
                Location
              </span>
              <span className="font-sans text-sm font-semibold text-ink">
                {personal.location}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-cream-hairline flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-ink-muted">Networks</span>
          <div className="flex items-center gap-5">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-ink hover:text-cobalt transition-colors inline-flex items-center gap-1 py-2"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-ink hover:text-cobalt transition-colors inline-flex items-center gap-1 py-2"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={personal.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-semibold text-ink hover:text-cobalt transition-colors inline-flex items-center gap-1 py-2"
            >
              <span>Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ContactModal;
