import { useRef, useState } from 'react';
import { clamp01, useScrollDriver } from '../hooks/useScrollEngine';

const VERBS = [
  { word: 'DESIGN', color: '#efe9dc' },
  { word: 'LOCK', color: '#e2cfa8' },
  { word: 'VERIFY', color: '#efe9dc' },
  { word: 'SHIP', color: '#6f78a8' },
] as const;

export function KineticTunnel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const topMarqueeRef = useRef<HTMLDivElement>(null);
  const botMarqueeRef = useRef<HTMLDivElement>(null);
  const verbRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [activeVerb, setActiveVerb] = useState(0);
  const activeVerbRef = useRef(0);

  useScrollDriver(
    trackRef,
    (p, reduced) => {
      if (reduced) {
        verbRefs.current.forEach((el, idx) => {
          if (!el) return;
          el.style.opacity = idx === 3 ? '1' : '0';
          el.style.transform = 'scale(1)';
        });
        return;
      }

      if (topMarqueeRef.current) {
        topMarqueeRef.current.style.transform = `translate3d(${(-p * 380).toFixed(1)}px, 0, 0)`;
      }
      if (botMarqueeRef.current) {
        botMarqueeRef.current.style.transform = `translate3d(${(-360 + p * 380).toFixed(1)}px, 0, 0)`;
      }

      const segment = 1 / VERBS.length;
      const currentIdx = Math.min(VERBS.length - 1, Math.floor(p * VERBS.length));
      if (currentIdx !== activeVerbRef.current) {
        activeVerbRef.current = currentIdx;
        setActiveVerb(currentIdx);
      }

      verbRefs.current.forEach((el, idx) => {
        if (!el) return;
        const start = idx * segment - 0.08;
        const end = (idx + 1) * segment + 0.08;
        const local = clamp01((p - start) / (end - start));

        if (local <= 0.001 || local >= 0.999) {
          el.style.opacity = '0';
          el.style.transform = 'scale(0.45)';
          return;
        }

        const isLast = idx === VERBS.length - 1;
        const scale = isLast
          ? 0.45 + Math.pow(local, 1.45) * 3.1
          : 0.42 + Math.pow(local, 1.65) * 3.6;

        let opacity: number;
        if (local < 0.34) {
          opacity = local / 0.34;
        } else if (local < 0.68) {
          opacity = 1;
        } else {
          opacity = isLast ? Math.max(0.15, 1 - (local - 0.68) / 0.32) : Math.max(0, 1 - (local - 0.68) / 0.32);
        }

        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `scale(${scale.toFixed(3)})`;
      });
    },
    'sticky'
  );

  return (
    <section
      data-theme-band="dark"
      aria-label="Engineering workflow kinetic showcase"
      className="bg-obsidian text-light-ink border-b border-obsidian-hairline"
    >
      <div ref={trackRef} className="relative h-[260vh] md:h-[300vh]">
        <div className="sticky top-0 h-[100dvh] flex flex-col justify-between py-20 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] z-10">
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              {VERBS.map((item, idx) => (
                <span
                  key={item.word}
                  className={
                    idx === activeVerb
                      ? 'text-light-ink font-bold'
                      : 'text-light-muted/55'
                  }
                >
                  {item.word}
                </span>
              ))}
            </div>
            <span className="hidden sm:inline text-light-muted">Scroll Drives the Story</span>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-12 sm:gap-16 overflow-hidden select-none"
          >
            <div
              ref={topMarqueeRef}
              className="whitespace-nowrap font-display font-extrabold text-[clamp(3.8rem,12vw,10rem)] uppercase leading-none tracking-[-0.03em] text-light-ink/[0.06] will-change-transform"
            >
              JAVA 21 · SPRING BOOT · REDIS LUA · POSTGRESQL · KAFKA · JAVA 21 · SPRING BOOT · REDIS LUA ·
            </div>
            <div
              ref={botMarqueeRef}
              className="whitespace-nowrap font-display font-extrabold text-[clamp(3.8rem,12vw,10rem)] uppercase leading-none tracking-[-0.03em] text-light-ink/[0.06] will-change-transform"
            >
              CONCURRENCY · FAIL-CLOSED SECURITY · GRAPH RAG · SYSTEMS · CONCURRENCY · FAIL-CLOSED SECURITY ·
            </div>
          </div>

          <div className="relative flex-1 flex items-center justify-center select-none z-10 pointer-events-none">
            {VERBS.map((item, idx) => (
              <span
                key={item.word}
                ref={(el) => {
                  verbRefs.current[idx] = el;
                }}
                style={{ color: item.color }}
                className="absolute font-display font-extrabold text-[clamp(3.2rem,12vw,10.5rem)] uppercase leading-none tracking-[-0.04em] will-change-[transform,opacity]"
              >
                {item.word}
              </span>
            ))}
          </div>

          <div className="max-w-7xl mx-auto w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-light-muted z-10">
            <span>From Architecture to Production</span>
            <span>Tran Thanh Quan ©</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KineticTunnel;
