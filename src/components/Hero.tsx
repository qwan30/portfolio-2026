import { useRef } from 'react';
import { ArrowDown, ExternalLink, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollDriver } from '../hooks/useScrollEngine';

export function Hero() {
  const { personal } = portfolioData;
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useScrollDriver(
    sectionRef,
    (p, reduced) => {
      if (reduced) {
        if (portraitRef.current) portraitRef.current.style.transform = 'none';
        if (copyRef.current) copyRef.current.style.transform = 'none';
        return;
      }
      const exit = Math.max(0, p - 0.32) / 0.68;
      if (portraitRef.current) {
        portraitRef.current.style.transform = `translate3d(0, ${exit * -42}px, 0) scale(${1 + exit * 0.03})`;
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(0, ${exit * -24}px, 0)`;
      }
    },
    'reveal'
  );

  return (
    <section
      ref={sectionRef}
      data-theme-band="light"
      className="relative bg-cream text-ink min-h-[100dvh] flex flex-col justify-between pt-20 pb-8 px-5 sm:px-8 md:px-12 lg:px-16 overflow-x-clip border-b border-cream-hairline"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center py-6 lg:py-0">
        <div ref={copyRef} className="lg:col-span-7 flex flex-col gap-6 z-10 min-w-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-ink shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {personal.eyebrow}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(3rem,8.2vw,7.1rem)] uppercase leading-[0.89] tracking-[-0.045em] text-ink">
            <span className="block">TRAN THANH</span>
            <span className="block">QUAN</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-lg">
            {personal.heroSubstatement}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#work"
              className="h-12 px-6 rounded-full bg-ink hover:bg-cobalt text-cream font-sans text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-5 rounded-full bg-cream-card hover:bg-cream-soft text-ink border border-cream-hairline font-sans text-xs sm:text-sm font-semibold transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-ink-muted" />
              <span>Resume (PDF)</span>
            </a>

            <div className="flex items-center gap-4 pl-1">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center gap-1 font-mono text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center gap-1 font-mono text-xs font-semibold text-ink-muted hover:text-ink transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <div
            ref={portraitRef}
            className="relative w-full max-w-[400px] sm:max-w-[450px] aspect-[4/5] flex items-end justify-center bg-cream"
          >
            <img
              src="/anh_the.png"
              alt={personal.name}
              width={450}
              height={562}
              fetchPriority="high"
              className="hero-portrait-mask relative z-10 w-[94%] h-[94%] object-cover object-top mix-blend-multiply select-none"
            />

            <div className="absolute bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 rounded-xl bg-obsidian/94 text-light-ink backdrop-blur-md border border-obsidian-hairline px-4 py-3 flex items-center justify-between gap-3 shadow-xl">
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-sand-gold">
                  Production Verified
                </p>
                <p className="font-sans text-xs font-semibold text-light-ink truncate mt-0.5">
                  0 Oversells · 30+ Active Staff · 95.2% RAG
                </p>
              </div>
              <span className="w-2 h-2 rounded-full bg-verified-dark shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full pt-4 border-t border-cream-hairline/70 flex items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-ink-muted">
        <span className="tabular-nums">00 — 08</span>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 hover:text-ink transition-colors py-1"
        >
          <span>Scroll to Explore</span>
          <ArrowDown className="w-3 h-3" />
        </a>
        <span className="hidden sm:inline">{personal.location}</span>
      </div>
    </section>
  );
}

export default Hero;
