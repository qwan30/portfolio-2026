import { useCallback, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { useScrollDriver } from '../hooks/useScrollEngine';

const CHAPTER_POSTERS = [
  {
    code: 'BK.',
    label: 'SYSTEMS · API',
    bg: 'linear-gradient(150deg, #1b6548 0%, #0f3828 100%)',
    accent: '#a7f3d0',
  },
  {
    code: 'CC.',
    label: 'ATOMIC · LUA',
    bg: 'linear-gradient(150deg, #d14f1f 0%, #7c270b 100%)',
    accent: '#fde68a',
  },
  {
    code: 'DO.',
    label: 'CI/CD · METRICS',
    bg: 'linear-gradient(150deg, #1e429f 0%, #102154 100%)',
    accent: '#bfdbfe',
  },
  {
    code: 'AI.',
    label: 'GRAPH · RAG',
    bg: 'linear-gradient(150deg, #474d91 0%, #20234a 100%)',
    accent: '#c7d2fe',
  },
] as const;

export function EngineeringFocus() {
  const { engineeringFocus } = portfolioData.personal;
  const trackRef = useRef<HTMLDivElement>(null);
  const deckRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const activeIdxRef = useRef(0);

  useScrollDriver(
    trackRef,
    (p, reduced) => {
      const total = engineeringFocus.length;
      const floatPos = reduced ? activeIdxRef.current : p * (total - 1);
      const nearest = Math.round(floatPos);

      if (!reduced && nearest !== activeIdxRef.current) {
        activeIdxRef.current = nearest;
        setActiveIdx(nearest);
      }

      deckRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rel = idx - floatPos;

        if (rel < 0) {
          const out = Math.min(1, -rel);
          card.style.opacity = String(Math.max(0, 1 - out * 1.25));
          card.style.zIndex = String(total + 3);
          card.style.transform = `translate3d(${(-out * 130).toFixed(1)}px, ${(-out * 24).toFixed(1)}px, 0) rotateZ(${(-out * 14).toFixed(2)}deg) scale(${(1 - out * 0.1).toFixed(3)})`;
          return;
        }

        const depth = Math.min(3, rel);
        const rot = depth === 0 ? -4 : -4 + depth * 6.5;
        const x = depth * 18;
        const y = depth * 10;
        const sc = 1 - depth * 0.06;

        card.style.opacity = String(1 - depth * 0.16);
        card.style.zIndex = String(total - idx);
        card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotateZ(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      });
    },
    'sticky'
  );

  const handleJumpProject = useCallback((projectId: string) => {
    const target =
      document.getElementById(`featured-project-${projectId}`) ?? document.getElementById('projects');
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const current = engineeringFocus[activeIdx] ?? engineeringFocus[0];

  return (
    <section
      id="engineering"
      tabIndex={-1}
      data-theme-band="dark"
      className="scroll-mt-16 bg-obsidian text-light-ink"
    >
      <div ref={trackRef} className="relative md:h-[270vh] border-b border-obsidian-hairline">
        <div className="md:sticky md:top-0 min-h-[100dvh] flex flex-col justify-between py-20 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex flex-wrap items-end justify-between gap-4 border-b border-obsidian-hairline pb-5">
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-light-muted block mb-1.5">
                03 / Hands-On Disciplines
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl uppercase tracking-[-0.03em] text-sand-gold">
                Enterprise &amp; Systems Engineering.
              </h2>
            </div>
            <span className="font-mono text-xs text-light-muted tabular-nums">
              {String(activeIdx + 1).padStart(2, '0')} / {String(engineeringFocus.length).padStart(2, '0')}
            </span>
          </div>

          <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-8">
            <div className="lg:col-span-5 relative h-[320px] sm:h-[370px] flex items-center justify-center">
              {engineeringFocus.map((focus, idx) => {
                const poster = CHAPTER_POSTERS[idx % CHAPTER_POSTERS.length];
                return (
                  <div
                    key={focus.number}
                    ref={(el) => {
                      deckRefs.current[idx] = el;
                    }}
                    style={{ background: poster.bg }}
                    className="poster-card-shadow absolute w-[220px] sm:w-[255px] aspect-[3/4] rounded-2xl p-5 flex flex-col justify-between text-light-ink select-none will-change-[transform,opacity]"
                  >
                    <div className="flex items-center justify-between font-mono text-[9.5px] uppercase tracking-[0.14em] opacity-80">
                      <span>03 / DISCIPLINE</span>
                      <span className="tabular-nums">{focus.number} / 04</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 my-auto px-4">
                      <span className="aspect-square rounded-lg opacity-85" style={{ background: poster.accent }} />
                      <span className="aspect-square rounded-lg opacity-35" style={{ background: poster.accent }} />
                      <span className="aspect-square rounded-lg opacity-45" style={{ background: poster.accent }} />
                      <span className="aspect-square rounded-lg opacity-75" style={{ background: poster.accent }} />
                    </div>

                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] opacity-75 block">
                        {poster.label}
                      </span>
                      <span className="font-display font-extrabold text-5xl leading-none tracking-[-0.04em] block mt-1">
                        {poster.code}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-7 flex flex-col gap-5 min-w-0">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-light-muted">
                <span className="text-sand-gold font-bold tabular-nums">{current.number}</span>
                <span aria-hidden="true">·</span>
                <span>Core Engineering Focus</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-sand-gold tracking-[-0.03em] leading-none">
                {current.title}
              </h3>

              <p className="font-sans text-base sm:text-lg text-light-secondary leading-relaxed max-w-xl">
                {current.description}
              </p>

              <div className="pt-4 border-t border-obsidian-hairline flex flex-wrap items-center justify-between gap-4 max-w-xl">
                <div className="min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-light-muted block">
                    Verified In System
                  </span>
                  <span className="font-sans text-sm font-semibold text-light-ink truncate block mt-0.5">
                    {current.linkedProject}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleJumpProject(current.linkedProjectId)}
                  className="h-11 px-5 rounded-full border border-obsidian-hairline-strong hover:border-sand-gold text-sand-gold hover:text-light-ink font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <span>Inspect Proof</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-2">
            {engineeringFocus.map((focus, idx) => (
              <button
                key={focus.number}
                type="button"
                onClick={() => {
                  activeIdxRef.current = idx;
                  setActiveIdx(idx);
                }}
                className={`h-9 px-3.5 rounded-full font-mono text-[11px] font-semibold transition-colors cursor-pointer border ${
                  idx === activeIdx
                    ? 'bg-sand-gold text-obsidian border-sand-gold'
                    : 'bg-obsidian-surface text-light-muted border-obsidian-hairline hover:text-light-ink'
                }`}
              >
                {focus.number} {focus.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-obsidian-hairline">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex items-center justify-center py-6">
            <div className="relative h-56 w-full max-w-[340px] flex items-center justify-center">
              {engineeringFocus.map((focus, idx) => {
                const poster = CHAPTER_POSTERS[idx % CHAPTER_POSTERS.length];
                const rot = -15 + idx * 10;
                const x = -54 + idx * 36;
                const y = Math.abs(idx - 1.5) * 10;
                return (
                  <button
                    key={focus.number}
                    type="button"
                    onClick={() => handleJumpProject(focus.linkedProjectId)}
                    aria-label={`Jump to ${focus.title}`}
                    style={{
                      background: poster.bg,
                      transform: `translate3d(${x}px, ${y}px, 0) rotate(${rot}deg)`,
                      zIndex: idx + 1,
                    }}
                    className="poster-card-shadow absolute w-32 sm:w-36 aspect-[3/4] rounded-xl p-3.5 flex flex-col justify-between text-left text-light-ink transition-transform duration-200 hover:-translate-y-3 cursor-pointer"
                  >
                    <span className="font-mono text-[9px] opacity-80 tabular-nums">{focus.number}</span>
                    <span className="font-display font-extrabold text-3xl leading-none tracking-[-0.04em]">
                      {poster.code}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-light-muted block mb-3">
                03 / Discipline Archive
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-5xl uppercase leading-[0.94] tracking-[-0.04em]">
                <span className="block text-sand-gold">FOUR DISCIPLINES.</span>
                <span className="block text-slate-accent">ONE PRACTICE.</span>
              </h3>
              <p className="font-sans text-sm sm:text-base text-light-secondary mt-4 max-w-lg leading-relaxed">
                From enterprise authorization and atomic concurrency control to automated observability and citation-verified retrieval.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-obsidian-hairline">
              {engineeringFocus.map((focus) => (
                <button
                  key={focus.number}
                  type="button"
                  onClick={() => handleJumpProject(focus.linkedProjectId)}
                  className="group flex items-baseline gap-3 py-2 text-left cursor-pointer border-b border-obsidian-hairline/60 hover:border-sand-gold transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-light-muted group-hover:text-sand-gold tabular-nums">
                    {focus.number}
                  </span>
                  <span className="font-sans text-sm font-semibold text-light-ink group-hover:text-sand-gold transition-colors">
                    {focus.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringFocus;
