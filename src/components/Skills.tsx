import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { clamp01, subscribeScrollFrame } from '../hooks/useScrollEngine';
import { useEffect } from 'react';
import TechIcon from './TechIcon';

export function Skills() {
  const { technicalSkills } = portfolioData.personal;
  const categories = Object.entries(technicalSkills);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateRowFocus = () => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const vh = window.innerHeight || 1;
      const center = vh * 0.48;

      rowRefs.current.forEach((row) => {
        if (!row) return;
        if (reduced) {
          row.style.opacity = '1';
          return;
        }
        const rect = row.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - center);
        const focus = clamp01(1 - dist / (vh * 0.65));
        row.style.opacity = (0.45 + focus * 0.55).toFixed(3);
      });
    };

    return subscribeScrollFrame(updateRowFocus);
  }, []);

  return (
    <section
      id="skills"
      tabIndex={-1}
      data-theme-band="light"
      className="scroll-mt-16 bg-cream text-ink py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-cream-hairline"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted block">
            04 / Capabilities
          </span>

          <h2 className="font-display font-extrabold text-[clamp(3.2rem,8vw,6.2rem)] uppercase leading-[0.88] tracking-[-0.045em]">
            <span className="block text-ink">TECH</span>
            <span className="block text-cobalt">STACK.</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed max-w-sm">
            A practical blend of backend systems engineering, concurrency control, observability, DevOps delivery, and automated security gates.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {categories.map(([tier, skills], idx) => (
            <div
              key={tier}
              ref={(el) => {
                rowRefs.current[idx] = el;
              }}
              className="pt-5 border-t border-cream-hairline space-y-4 transition-opacity duration-200"
            >
              <div className="flex items-center justify-between font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                <span>
                  {String(idx + 1).padStart(2, '0')} / {tier}
                </span>
                <span className="tabular-nums">{String(skills.length).padStart(2, '0')}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 bg-cream-card px-3 py-1.5 rounded-lg border border-cream-hairline text-ink"
                  >
                    <TechIcon name={skill} className="w-4 h-4" />
                    <span className="font-sans text-xs sm:text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
