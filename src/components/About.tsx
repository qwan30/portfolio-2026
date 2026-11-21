import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { easeOutCubic, rangeProgress, useScrollDriver } from '../hooks/useScrollEngine';

const PILLARS = ['BACKEND', 'CONCURRENCY', 'SECURITY', 'APPLIED AI'] as const;

export function About() {
  const { summary } = portfolioData.personal;
  const trackRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLParagraphElement>(null);
  const col2Ref = useRef<HTMLParagraphElement>(null);
  const pillarRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useScrollDriver(
    trackRef,
    (p, reduced) => {
      const t1 = reduced ? 1 : easeOutCubic(rangeProgress(p, 0.08, 0.45));
      const t2 = reduced ? 1 : easeOutCubic(rangeProgress(p, 0.36, 0.78));

      if (col1Ref.current) {
        col1Ref.current.style.opacity = String(0.18 + t1 * 0.82);
        col1Ref.current.style.filter = t1 >= 0.99 ? 'none' : `blur(${((1 - t1) * 8).toFixed(2)}px)`;
        col1Ref.current.style.transform = `translate3d(0, ${((1 - t1) * 16).toFixed(1)}px, 0)`;
      }

      if (col2Ref.current) {
        col2Ref.current.style.opacity = String(0.14 + t2 * 0.86);
        col2Ref.current.style.filter = t2 >= 0.99 ? 'none' : `blur(${((1 - t2) * 9).toFixed(2)}px)`;
        col2Ref.current.style.transform = `translate3d(0, ${((1 - t2) * 20).toFixed(1)}px, 0)`;
      }

      pillarRefs.current.forEach((node, idx) => {
        if (!node) return;
        const start = 0.56 + idx * 0.08;
        const tp = reduced ? 1 : easeOutCubic(rangeProgress(p, start, start + 0.18));
        node.style.opacity = String(0.2 + tp * 0.8);
        node.style.transform = `translate3d(0, ${((1 - tp) * 10).toFixed(1)}px, 0)`;
      });
    },
    'sticky'
  );

  return (
    <section
      id="about"
      tabIndex={-1}
      data-theme-band="light"
      className="scroll-mt-16 bg-cream text-ink border-b border-cream-hairline"
    >
      <div ref={trackRef} className="relative md:h-[170vh]">
        <div className="md:sticky md:top-0 min-h-[100dvh] flex flex-col justify-between py-24 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-2 pt-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                01 / About
              </span>
            </div>

            <div className="lg:col-span-10 space-y-12 md:space-y-16">
              <h2 className="font-display font-extrabold text-[clamp(2.5rem,6.7vw,5.9rem)] uppercase leading-[0.93] tracking-[-0.04em]">
                <span className="block text-ink">ENGINEERED FOR</span>
                <span className="block text-ink">RELIABILITY,</span>
                <span className="block text-ink-stone">ROBUST BY</span>
                <span className="block text-ink-stone">DESIGN.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:pl-24 max-w-4xl">
                <p
                  ref={col1Ref}
                  className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed will-change-[transform,opacity,filter]"
                >
                  {summary}
                </p>
                <p
                  ref={col2Ref}
                  className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed will-change-[transform,opacity,filter]"
                >
                  From atomic Redis Lua stock gates and transactional outbox relays to fail-closed RBAC/ABAC document vaults and citation-verified Graph RAG assistants, every system is designed around provable invariants and measurable load behavior.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full pt-10 mt-10 border-t border-cream-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className="font-bold text-ink">TTQ©</span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-12">
              {PILLARS.map((pillar, idx) => (
                <span
                  key={pillar}
                  ref={(el) => {
                    pillarRefs.current[idx] = el;
                  }}
                  className="font-semibold text-ink"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
