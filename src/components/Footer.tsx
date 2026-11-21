import { useMemo, useRef } from 'react';
import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { easeOutCubic, rangeProgress, useScrollDriver } from '../hooks/useScrollEngine';

interface FooterProps {
  onOpenContact?: () => void;
}

const HEADLINE_LINES = [
  "LET'S BUILD",
  'SOMETHING',
  'RELIABLE',
  'TOGETHER.',
] as const;

export function Footer({ onOpenContact }: FooterProps) {
  const { personal } = portfolioData;
  const footerRef = useRef<HTMLElement>(null);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const indexedLines = useMemo(() => {
    let cursor = 0;
    return HEADLINE_LINES.map((line) => {
      const chars = line.split('').map((ch) => ({ ch, index: cursor++ }));
      return { line, chars };
    });
  }, []);

  const totalChars = useMemo(
    () => indexedLines.reduce((sum, item) => sum + item.chars.length, 0),
    [indexedLines]
  );

  useScrollDriver(
    footerRef,
    (p, reduced) => {
      const span = 0.4;
      charRefs.current.forEach((el, idx) => {
        if (!el) return;
        if (reduced) {
          el.style.opacity = '1';
          el.style.filter = 'none';
          el.style.transform = 'none';
          return;
        }
        const start = 0.05 + (idx / Math.max(1, totalChars)) * span;
        const t = easeOutCubic(rangeProgress(p, start, start + 0.14));
        el.style.opacity = String(t.toFixed(3));
        el.style.filter = t >= 0.99 ? 'none' : `blur(${((1 - t) * 9).toFixed(2)}px)`;
        el.style.transform = `translate3d(${((1 - t) * 22).toFixed(1)}px, 0, 0)`;
      });
    },
    'reveal'
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      tabIndex={-1}
      data-theme-band="dark"
      className="dawn-aurora scroll-mt-16 text-light-ink min-h-[100dvh] flex flex-col justify-between pt-24 pb-10 px-5 sm:px-8 md:px-12 lg:px-16 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-light-muted">
        <span>08 / Get In Touch</span>
        <span>Ho Chi Minh City · VN</span>
      </div>

      <div className="max-w-7xl mx-auto w-full py-12 md:py-16 flex flex-col gap-10">
        <h2 className="font-display font-extrabold text-[clamp(2.5rem,7.8vw,6.8rem)] uppercase leading-[0.94] tracking-[-0.04em] text-light-ink">
          {indexedLines.map(({ line, chars }, lineIdx) => (
            <span
              key={line}
              className={`block ${lineIdx === 1 ? 'sm:pl-12 md:pl-20' : lineIdx === 2 ? 'sm:pl-20 md:pl-36' : lineIdx === 3 ? 'sm:pl-28 md:pl-52' : ''}`}
            >
              {chars.map(({ ch, index }) => (
                <span
                  key={index}
                  ref={(el) => {
                    charRefs.current[index] = el;
                  }}
                  className="inline-block will-change-[transform,opacity,filter]"
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </span>
              ))}
            </span>
          ))}
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="h-13 px-8 rounded-full bg-light-ink hover:bg-sand-gold text-obsidian font-sans text-sm sm:text-base font-bold transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Open Contact Card</span>
          </button>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-13 px-6 rounded-full border border-obsidian-hairline-strong hover:border-light-ink text-light-ink font-mono text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-1.5"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-obsidian-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-light-secondary">
        <div className="flex flex-col gap-1">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 text-light-ink hover:text-sand-gold transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{personal.email}</span>
          </a>
          <span className="text-[10px] text-light-muted uppercase tracking-wider">
            © {new Date().getFullYear()} {personal.name} · Backend &amp; Systems Engineer
          </span>
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="h-10 px-4 rounded-full border border-obsidian-hairline hover:border-light-ink text-[11px] uppercase tracking-[0.14em] text-light-ink inline-flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-5 text-[11px] uppercase tracking-wider">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 hover:text-light-ink transition-colors inline-flex items-center gap-1"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 hover:text-light-ink transition-colors inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
