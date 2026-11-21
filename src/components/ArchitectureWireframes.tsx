import { useRef } from 'react';
import { easeOutCubic, rangeProgress, useScrollDriver } from '../hooks/useScrollEngine';

interface ArchitectureRow {
  number: string;
  title: string;
  summary: string;
  diagram: 'concurrency' | 'security' | 'rag';
}

const ARCHITECTURE_ROWS: readonly ArchitectureRow[] = [
  {
    number: '01',
    title: 'CONCURRENCY & ATOMIC GATING',
    summary:
      'In-memory Redis Lua pre-gating, transactional outbox relays, and two-layer compensation reconciliation verified under JMeter surge loads.',
    diagram: 'concurrency',
  },
  {
    number: '02',
    title: 'FAIL-CLOSED SECURITY & STORAGE',
    summary:
      'Multi-tier RBAC/ABAC precedence engines with strict DENY dominance, immutable pre-stream audit trails, and chunked SHA-256 uploads.',
    diagram: 'security',
  },
  {
    number: '03',
    title: 'PERMISSION-AWARE GRAPH RAG',
    summary:
      'SQL predicate isolation before vector retrieval, pgvector hybrid HNSW + BM25 search, and citation verification gates against hallucination.',
    diagram: 'rag',
  },
];

function WireframeDiagram({ kind }: { kind: ArchitectureRow['diagram'] }) {
  if (kind === 'concurrency') {
    return (
      <svg viewBox="0 0 210 64" className="w-48 h-16 shrink-0" fill="none" aria-hidden="true">
        <rect x="2" y="10" width="206" height="44" rx="2" stroke="#111111" strokeWidth="1" strokeOpacity="0.45" />
        <rect x="12" y="20" width="44" height="24" fill="#1d3a94" />
        <line x1="56" y1="32" x2="78" y2="32" stroke="#111111" strokeWidth="1" />
        <rect x="78" y="20" width="52" height="24" stroke="#111111" strokeWidth="1" />
        <line x1="130" y1="32" x2="152" y2="32" stroke="#111111" strokeWidth="1" />
        <rect x="152" y="20" width="46" height="24" stroke="#111111" strokeWidth="1" />
        <circle cx="67" cy="32" r="2.5" fill="#1d3a94" />
        <circle cx="141" cy="32" r="2.5" fill="#111111" />
      </svg>
    );
  }

  if (kind === 'security') {
    return (
      <svg viewBox="0 0 210 64" className="w-48 h-16 shrink-0" fill="none" aria-hidden="true">
        <rect x="10" y="8" width="52" height="48" rx="3" stroke="#111111" strokeWidth="1" strokeOpacity="0.55" />
        <rect x="20" y="18" width="32" height="16" fill="#1d3a94" />
        <line x1="62" y1="32" x2="88" y2="32" stroke="#111111" strokeWidth="1" />
        <rect x="88" y="12" width="44" height="40" rx="2" stroke="#111111" strokeWidth="1" />
        <line x1="132" y1="32" x2="158" y2="32" stroke="#111111" strokeWidth="1" />
        <rect x="158" y="16" width="40" height="32" rx="2" stroke="#111111" strokeWidth="1" />
        <rect x="166" y="24" width="24" height="16" fill="#1d3a94" fillOpacity="0.22" stroke="#1d3a94" strokeWidth="1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 210 64" className="w-48 h-16 shrink-0" fill="none" aria-hidden="true">
      <rect x="10" y="22" width="36" height="20" stroke="#111111" strokeWidth="1" />
      <line x1="46" y1="32" x2="78" y2="18" stroke="#111111" strokeWidth="1" />
      <line x1="46" y1="32" x2="78" y2="46" stroke="#111111" strokeWidth="1" />
      <rect x="78" y="8" width="44" height="20" fill="#1d3a94" />
      <rect x="78" y="36" width="44" height="20" stroke="#111111" strokeWidth="1" />
      <line x1="122" y1="18" x2="156" y2="32" stroke="#111111" strokeWidth="1" />
      <line x1="122" y1="46" x2="156" y2="32" stroke="#111111" strokeWidth="1" />
      <rect x="156" y="20" width="44" height="24" stroke="#111111" strokeWidth="1" />
      <circle cx="178" cy="32" r="4" fill="#1d3a94" />
    </svg>
  );
}

export function ArchitectureWireframes() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ruleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useScrollDriver(
    sectionRef,
    (p, reduced) => {
      ARCHITECTURE_ROWS.forEach((_, idx) => {
        const start = 0.08 + idx * 0.16;
        const t = reduced ? 1 : easeOutCubic(rangeProgress(p, start, start + 0.32));

        const rule = ruleRefs.current[idx];
        if (rule) {
          rule.style.transform = `scaleX(${Math.max(0.05, t).toFixed(4)})`;
        }

        const row = rowRefs.current[idx];
        if (row) {
          row.style.opacity = String((0.15 + t * 0.85).toFixed(3));
          row.style.transform = `translate3d(0, ${((1 - t) * 18).toFixed(1)}px, 0)`;
        }
      });
    },
    'reveal'
  );

  return (
    <section
      ref={sectionRef}
      id="architecture"
      data-theme-band="light"
      className="bg-cream text-ink py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted block mb-3">
              07 / Systems &amp; Architecture
            </span>
            <h2 className="font-display font-extrabold text-[clamp(2.3rem,5.8vw,4.8rem)] uppercase leading-[0.93] tracking-[-0.04em]">
              <span className="block text-ink-stone">FROM CONCEPT</span>
              <span className="block text-ink">TO PRODUCTION.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 font-sans text-sm sm:text-base text-ink-secondary leading-relaxed pb-1">
            Full-lifecycle backend engineering across transactional APIs, distributed state consistency, observability, and applied AI retrieval.
          </p>
        </div>

        <div className="flex flex-col">
          {ARCHITECTURE_ROWS.map((item, idx) => (
            <div key={item.number} className="relative">
              <div className="relative h-px w-full flex items-center">
                <div
                  ref={(el) => {
                    ruleRefs.current[idx] = el;
                  }}
                  className="h-px w-full bg-ink/25 origin-left will-change-transform"
                />
                <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-ink/45" aria-hidden="true" />
                <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-ink/45" aria-hidden="true" />
                <span className="absolute right-0 w-1.5 h-1.5 rounded-full bg-ink/45" aria-hidden="true" />
              </div>

              <div
                ref={(el) => {
                  rowRefs.current[idx] = el;
                }}
                className="py-9 md:py-11 grid grid-cols-1 md:grid-cols-12 gap-6 items-center will-change-[transform,opacity]"
              >
                <div className="md:col-span-5 flex items-baseline gap-5">
                  <span className="font-mono text-xs font-bold text-ink-muted tabular-nums">
                    {item.number}
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-[-0.02em] text-ink">
                    {item.title}
                  </h3>
                </div>

                <p className="md:col-span-4 font-sans text-sm text-ink-secondary leading-relaxed">
                  {item.summary}
                </p>

                <div className="md:col-span-3 flex md:justify-end">
                  <WireframeDiagram kind={item.diagram} />
                </div>
              </div>
            </div>
          ))}

          <div className="relative h-px w-full bg-ink/25 flex items-center">
            <span className="absolute left-0 w-1.5 h-1.5 rounded-full bg-ink/45" aria-hidden="true" />
            <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-ink/45" aria-hidden="true" />
            <span className="absolute right-0 w-1.5 h-1.5 rounded-full bg-ink/45" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureWireframes;
