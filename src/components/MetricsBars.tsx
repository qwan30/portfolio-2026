import { useRef } from 'react';
import { easeOutCubic, rangeProgress, useScrollDriver } from '../hooks/useScrollEngine';

interface MetricBarSpec {
  id: string;
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
  source: string;
  heightPct: number;
  gradient: string;
}

const VERIFIED_METRICS: readonly MetricBarSpec[] = [
  {
    id: '01',
    target: 0,
    suffix: '',
    label: 'Oversells (5,000 JMeter Reqs)',
    source: 'Flash Sale Concurrency Benchmark',
    heightPct: 30,
    gradient: 'linear-gradient(180deg, rgba(196, 206, 224, 0.42) 0%, rgba(196, 206, 224, 0.04) 100%)',
  },
  {
    id: '02',
    target: 17,
    suffix: '',
    label: 'DDD Bounded Contexts',
    source: 'Enterprise Hospital Management ERP',
    heightPct: 52,
    gradient: 'linear-gradient(180deg, rgba(128, 178, 178, 0.44) 0%, rgba(128, 178, 178, 0.04) 100%)',
  },
  {
    id: '03',
    target: 30,
    suffix: '+',
    label: 'Daily Active Staff',
    source: 'Vijaco Production Deployment',
    heightPct: 72,
    gradient: 'linear-gradient(180deg, rgba(120, 198, 152, 0.46) 0%, rgba(120, 198, 152, 0.04) 100%)',
  },
  {
    id: '04',
    target: 95.2,
    decimals: 1,
    suffix: '%',
    label: 'Citation Precision (300 Cases)',
    source: 'Graph RAG Evaluation Benchmark',
    heightPct: 96,
    gradient: 'linear-gradient(180deg, rgba(132, 118, 196, 0.5) 0%, rgba(132, 118, 196, 0.05) 100%)',
  },
];

export function MetricsBars() {
  const trackRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useScrollDriver(
    trackRef,
    (p, reduced) => {
      VERIFIED_METRICS.forEach((metric, idx) => {
        const start = 0.04 + idx * 0.1;
        const t = reduced ? 1 : easeOutCubic(rangeProgress(p, start, start + 0.46));

        const bar = barRefs.current[idx];
        if (bar) {
          bar.style.transform = `scaleY(${Math.max(0.02, t).toFixed(4)})`;
          bar.style.opacity = String((0.2 + t * 0.8).toFixed(3));
        }

        const num = numRefs.current[idx];
        if (num) {
          const val = metric.target * t;
          const formatted =
            metric.decimals && metric.decimals > 0
              ? val.toFixed(metric.decimals)
              : String(Math.round(val));
          num.textContent = `${formatted}${metric.suffix}`;
        }
      });
    },
    'sticky'
  );

  return (
    <section
      data-theme-band="dark"
      aria-label="Verified engineering metrics"
      className="bg-obsidian text-light-ink border-b border-obsidian-hairline"
    >
      <div ref={trackRef} className="relative md:h-[175vh]">
        <div className="md:sticky md:top-0 min-h-[100dvh] flex flex-col justify-between pt-24 pb-10 px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-light-muted">
            <span>05 / A Few Verified Numbers</span>
            <span className="hidden sm:inline">Measured Production &amp; Benchmarks</span>
          </div>

          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-end pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 items-end">
              {VERIFIED_METRICS.map((metric, idx) => (
                <div key={metric.id} className="flex flex-col justify-end gap-5">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-light-muted tabular-nums block">
                      {metric.id}
                    </span>
                    <span
                      ref={(el) => {
                        numRefs.current[idx] = el;
                      }}
                      className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-light-ink tracking-[-0.04em] tabular-nums block leading-none"
                    >
                      {metric.decimals ? metric.target.toFixed(metric.decimals) : metric.target}
                      {metric.suffix}
                    </span>
                    <p className="font-sans text-xs sm:text-sm font-medium text-light-secondary leading-snug pt-1">
                      {metric.label}
                    </p>
                    <p className="font-mono text-[10px] text-light-muted truncate">
                      {metric.source}
                    </p>
                  </div>

                  <div className="h-44 sm:h-60 md:h-72 flex items-end border-b border-obsidian-hairline">
                    <div
                      ref={(el) => {
                        barRefs.current[idx] = el;
                      }}
                      style={{
                        height: `${metric.heightPct}%`,
                        background: metric.gradient,
                      }}
                      className="monolith-bar w-full rounded-t-sm border-x border-white/10 will-change-transform"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 pt-3 font-mono text-[10px] text-light-muted tabular-nums">
              {VERIFIED_METRICS.map((metric) => (
                <span key={metric.id} className="text-center">
                  {metric.id}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetricsBars;
