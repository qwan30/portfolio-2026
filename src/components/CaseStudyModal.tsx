import { useRef } from 'react';
import {
  Activity,
  AlertTriangle,
  Check,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  Image as ImageIcon,
  Layers,
  ServerCog,
  ShieldCheck,
  X,
} from 'lucide-react';
import type { FeaturedProjectItem, SecondaryProjectItem } from '../data/portfolioData';
import { DIALOG_LIGHT_DISMISS, useNativeModal } from '../hooks/useNativeModal';
import type { LightboxData } from './ImageLightbox';
import TechIcon from './TechIcon';

interface CaseStudyModalProps {
  project: FeaturedProjectItem | SecondaryProjectItem | null;
  onClose: () => void;
  onExpandImage: (data: LightboxData) => void;
}

interface SectionLink {
  id: string;
  label: string;
}

export function CaseStudyModal({ project, onClose, onExpandImage }: CaseStudyModalProps) {
  const dialogRef = useNativeModal({ open: project !== null, onClose });
  const scrollBodyRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const target = scrollBodyRef.current?.querySelector<HTMLElement>(
      `[data-cs-section="${sectionId}"]`
    );
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const sectionLinks: SectionLink[] = project
    ? [
        { id: 'overview', label: '01 Overview' },
        ...(project.caseStudy.systemConstraints?.length ? [{ id: 'constraints', label: '02 Constraints' }] : []),
        { id: 'architecture', label: '03 Architecture' },
        { id: 'decisions', label: '04 Decisions' },
        ...(project.caseStudy.failureModesAndTradeoffs?.length ? [{ id: 'tradeoffs', label: '05 Trade-offs' }] : []),
        ...(project.caseStudy.testingAndVerification?.length ? [{ id: 'testing', label: '06 Testing' }] : []),
        { id: 'outcomes', label: '07 Outcomes' },
        ...(project.caseStudy.gallery?.length
          ? [{ id: 'gallery', label: `08 Evidence (${project.caseStudy.gallery.length})` }]
          : []),
      ]
    : [];

  return (
    <dialog
      ref={dialogRef}
      {...DIALOG_LIGHT_DISMISS}
      aria-labelledby="case-study-title"
      className="native-modal w-[min(64rem,calc(100vw-1.5rem))]"
    >
      {project ? (
        <div className="bg-cream-card text-ink rounded-2xl w-full max-h-[calc(100dvh-2rem)] flex flex-col shadow-2xl border border-cream-hairline overflow-hidden">
          <div className="px-5 sm:px-8 py-4 border-b border-cream-hairline bg-cream flex items-center justify-between gap-4 shrink-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider px-2.5 py-1 bg-cream-card text-ink rounded-md border border-cream-hairline">
                {'number' in project ? `${project.number} · ` : ''}
                {project.category}
              </span>
              <span className="font-mono text-xs text-ink-muted tabular-nums px-2 py-1">
                {project.period}
              </span>
              <span className="font-sans text-xs font-medium text-ink-secondary bg-cream-soft px-2.5 py-1 rounded-md">
                {project.role}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="w-11 h-11 rounded-full bg-cream-card hover:bg-cream-soft border border-cream-hairline text-ink flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav
            aria-label="Case study sections"
            className="px-5 sm:px-8 py-2.5 border-b border-cream-hairline bg-cream-card flex items-center gap-1.5 overflow-x-auto shrink-0"
          >
            {sectionLinks.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className="font-mono text-[11px] font-medium text-ink-muted hover:text-ink hover:bg-cream-soft px-2.5 py-1.5 rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                {sec.label}
              </button>
            ))}
          </nav>

          <div ref={scrollBodyRef} className="p-5 sm:p-8 md:p-10 overflow-y-auto space-y-10 min-w-0">
            <header className="space-y-4">
              <h2
                id="case-study-title"
                className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.035em] text-ink leading-[0.98]"
              >
                {project.title}
              </h2>
              <p className="font-sans text-base sm:text-lg font-medium text-ink-secondary leading-relaxed max-w-3xl">
                {project.thesis}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-cream-hairline">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-muted mr-1">
                  Stack:
                </span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] font-medium uppercase bg-cream text-ink px-2.5 py-1 rounded-md border border-cream-hairline inline-flex items-center gap-1.5"
                  >
                    <TechIcon name={tech} className="w-3.5 h-3.5" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </header>

            <section data-cs-section="overview" className="p-5 sm:p-7 rounded-xl bg-cream border border-cream-hairline space-y-4 scroll-mt-4">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cobalt">
                01 · Executive Summary &amp; Context
              </h3>
              <p className="font-sans text-sm sm:text-base text-ink leading-relaxed">
                {project.caseStudy.executiveSummary}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-cream-card border border-cream-hairline">
                  <strong className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block mb-1.5">
                    Business Context
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {project.caseStudy.businessContext}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-cream-card border border-cream-hairline">
                  <strong className="font-mono text-[11px] uppercase tracking-wider text-ink-muted block mb-1.5">
                    Problem Statement
                  </strong>
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {project.caseStudy.problemStatement}
                  </p>
                </div>
              </div>
            </section>

            {project.caseStudy.systemConstraints && project.caseStudy.systemConstraints.length > 0 ? (
              <section data-cs-section="constraints" className="space-y-4 scroll-mt-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-ink" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    02 · System Constraints &amp; Non-Functional Requirements
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.caseStudy.systemConstraints.map((constraint, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-lg bg-cream border border-cream-hairline flex items-start gap-2.5 font-sans text-xs sm:text-sm"
                    >
                      <span className="font-mono text-xs font-bold text-cobalt mt-0.5 tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-ink-secondary leading-relaxed">{constraint}</span>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section data-cs-section="architecture" className="p-5 sm:p-7 rounded-xl bg-obsidian text-light-ink border border-obsidian-hairline space-y-4 scroll-mt-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-sand-gold" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-sand-gold">
                  03 · Architecture &amp; System Boundaries
                </h3>
              </div>
              <p className="font-sans text-sm sm:text-base text-light-ink leading-relaxed">
                {project.caseStudy.architecture}
              </p>
              {project.caseStudy.architectureHighlights && project.caseStudy.architectureHighlights.length > 0 ? (
                <ul className="space-y-2.5 pt-2 border-t border-obsidian-hairline">
                  {project.caseStudy.architectureHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-light-secondary leading-relaxed">
                      <span className="font-mono text-sand-gold mt-0.5 shrink-0" aria-hidden="true">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>

            <section data-cs-section="decisions" className="space-y-4 scroll-mt-4">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-ink" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                  04 · Core Engineered Decisions
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {project.caseStudy.deepDecisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-cream border border-cream-hairline space-y-2.5"
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs font-bold text-cobalt tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-ink">{dec.title}</h4>
                    </div>
                    <div className="font-mono text-xs bg-cream-card text-ink p-3 rounded-lg border border-cream-hairline break-words">
                      <span className="text-ink-muted uppercase mr-1.5">Technique:</span>
                      {dec.technique}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      <strong className="text-ink font-semibold">Mechanism: </strong>
                      {dec.mechanism}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-verified font-medium pt-0.5">
                      <strong>Impact: </strong>
                      {dec.impact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {project.caseStudy.failureModesAndTradeoffs && project.caseStudy.failureModesAndTradeoffs.length > 0 ? (
              <section data-cs-section="tradeoffs" className="space-y-4 scroll-mt-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-ink" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    05 · Failure Modes &amp; Trade-Offs
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.caseStudy.failureModesAndTradeoffs.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-cream border border-cream-hairline space-y-2"
                    >
                      <h4 className="font-mono text-xs font-bold text-ink uppercase flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-ink-muted shrink-0 mt-0.5" />
                        <span>{item.failureMode}</span>
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        <strong className="text-ink">Mitigation: </strong>
                        {item.mitigation}
                      </p>
                      <p className="font-sans text-xs text-ink-muted leading-relaxed">
                        <strong className="text-ink-secondary">Trade-Off: </strong>
                        {item.tradeOff}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {project.caseStudy.testingAndVerification && project.caseStudy.testingAndVerification.length > 0 ? (
              <section data-cs-section="testing" className="space-y-4 scroll-mt-4">
                <div className="flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-verified" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                    06 · Testing &amp; Verification Evidence
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.caseStudy.testingAndVerification.map((test, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-cream border border-cream-hairline space-y-2"
                    >
                      <h4 className="font-mono text-xs font-bold text-ink uppercase">
                        {test.type}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        {test.details}
                      </p>
                      <div className="font-mono text-xs font-semibold text-verified pt-2 border-t border-cream-hairline">
                        Result: {test.result}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {project.caseStudy.deploymentAndObservability && project.caseStudy.deploymentAndObservability.length > 0 ? (
              <section className="space-y-3">
                <div className="flex items-center gap-2">
                  <ServerCog className="w-4 h-4 text-ink-muted" />
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    Deployment &amp; Observability
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.caseStudy.deploymentAndObservability.map((obs, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-cream border border-cream-hairline font-sans text-xs sm:text-sm text-ink-secondary"
                    >
                      {obs}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section data-cs-section="outcomes" className="p-5 sm:p-7 rounded-xl bg-[#e6f3ec] border border-verified/25 space-y-4 scroll-mt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-verified" />
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-verified">
                  07 · Operational Results &amp; Impact
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.caseStudy.operationalOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-cream-card border border-cream-hairline flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-verified shrink-0 mt-0.5" />
                    <span className="font-sans text-xs sm:text-sm text-ink font-medium leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {project.caseStudy.gallery && project.caseStudy.gallery.length > 0 ? (
              <section data-cs-section="gallery" className="space-y-4 pt-2 scroll-mt-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-ink" />
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                      08 · Visual Evidence ({project.caseStudy.gallery.length})
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] text-ink-muted">Click any item to inspect</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {project.caseStudy.gallery.map((img, idx) => {
                    const isSvg = img.url.toLowerCase().endsWith('.svg');
                    return (
                      <button
                        key={`${img.url}-${idx}`}
                        type="button"
                        onClick={() =>
                          onExpandImage({
                            ...img,
                            images: project.caseStudy.gallery,
                            initialIndex: idx,
                          })
                        }
                        className={`group relative rounded-lg overflow-hidden border border-cream-hairline aspect-video cursor-zoom-in hover:border-cobalt transition-colors text-left ${
                          isSvg ? 'bg-[#f6f3ec] p-1.5' : 'bg-obsidian'
                        }`}
                        aria-label={`Inspect ${img.title}`}
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className={`w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ${
                            isSvg ? 'object-contain' : 'object-cover'
                          }`}
                          loading="lazy"
                          decoding="async"
                        />
                        {img.badge ? (
                          <span className="absolute top-1.5 left-1.5 bg-obsidian/85 text-[10px] font-mono text-light-ink px-2 py-0.5 rounded">
                            {img.badge}
                          </span>
                        ) : null}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="font-mono text-[10px] text-white truncate">{img.title}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>

          <div className="px-5 sm:px-8 py-4 border-t border-cream-hairline bg-cream flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-5 rounded-full bg-cobalt hover:bg-cobalt-hover text-white font-sans text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-5 rounded-full bg-ink hover:bg-ink-secondary text-cream font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Inspect Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : null}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="h-11 px-6 rounded-full bg-cream-card hover:bg-cream-soft border border-cream-hairline text-ink font-sans text-xs font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}

export default CaseStudyModal;
