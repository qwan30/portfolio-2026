import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, Layers, Activity } from 'lucide-react';
import type { FeaturedProjectItem, SecondaryProjectItem } from '../data/portfolioData';
import type { LightboxData } from './ImageLightbox';

interface CaseStudyModalProps {
  project: (FeaturedProjectItem | SecondaryProjectItem) | null;
  onClose: () => void;
  onExpandImage: (data: LightboxData) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onExpandImage,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;
  const isFeatured = 'number' in project;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white text-ink rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-black/10 overflow-hidden relative"
      >
        {/* Sticky Modal Top Bar */}
        <div className="p-6 md:px-8 border-b border-black/5 bg-[#fcfaf7] flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
              {isFeatured ? `${(project as FeaturedProjectItem).number} • ` : ''}
              {project.category}
            </span>
            <span className="font-mono text-xs text-ink/70 font-semibold bg-black/5 px-2.5 py-1 rounded-full">
              {project.period}
            </span>
            <span className="font-sans text-xs font-semibold text-ink/80 bg-black/5 px-2.5 py-1 rounded-full">
              {project.role}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 text-ink flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
            title="Close Case Study"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-10">
          {/* Header Title & Engineering Thesis */}
          <div>
            <h2
              id="case-study-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-ink leading-tight"
            >
              {project.title}
            </h2>
            <p className="font-sans text-base sm:text-lg font-medium text-blue-700 mt-3 leading-relaxed">
              {project.thesis}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink/60 mr-2 flex items-center">
              Tech Stack:
            </span>
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="font-mono text-xs font-semibold uppercase bg-gray-100 text-ink px-3 py-1 rounded-full border border-black/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 1. Executive Summary & Business Context */}
          <section className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-900">
                1. EXECUTIVE SUMMARY & CONTEXT
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-ink/90 leading-relaxed font-normal">
              {caseStudy.executiveSummary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-sans text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-white border border-amber-200/60">
                <strong className="text-amber-950 block mb-1 font-semibold">Business Context:</strong>
                <p className="text-ink/80 leading-relaxed">{caseStudy.businessContext}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-amber-200/60">
                <strong className="text-amber-950 block mb-1 font-semibold">Problem Statement:</strong>
                <p className="text-ink/80 leading-relaxed">{caseStudy.problemStatement}</p>
              </div>
            </div>
          </section>

          {/* 2. System Constraints & Non-Functional Requirements */}
          {caseStudy.systemConstraints && caseStudy.systemConstraints.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-purple-900">
                  2. SYSTEM CONSTRAINTS & NON-FUNCTIONAL REQUIREMENTS
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs sm:text-sm">
                {caseStudy.systemConstraints.map((constraint, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-purple-50/40 border border-purple-200/60 flex items-start gap-2.5"
                  >
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span className="text-ink/90 font-medium leading-relaxed">{constraint}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 3. Architecture & System Boundaries */}
          <section className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200/70 space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-900">
                3. ARCHITECTURE & SYSTEM DESIGN
              </h3>
            </div>
            <p className="font-sans text-sm sm:text-base text-ink/90 leading-relaxed">
              {caseStudy.architecture}
            </p>
            {caseStudy.architectureHighlights && caseStudy.architectureHighlights.length > 0 && (
              <div className="space-y-2 pt-2">
                {caseStudy.architectureHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm">
                    <span className="text-blue-600 font-bold mt-0.5">▸</span>
                    <span className="text-ink/80 leading-relaxed font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 4. Deep Engineered Decisions */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
                4. CORE ENGINEERED DECISIONS
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {caseStudy.deepDecisions.map((dec, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-black/10 shadow-xs space-y-2 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-600">0{idx + 1}.</span>
                    <h4 className="font-sans text-sm sm:text-base font-bold text-ink">{dec.title}</h4>
                  </div>
                  <div className="font-mono text-xs bg-gray-50 text-blue-900 p-2.5 rounded-xl border border-black/5">
                    <strong>Technique:</strong> {dec.technique}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ink/80 leading-relaxed">
                    <strong>Mechanism:</strong> {dec.mechanism}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-emerald-800 font-medium pt-1">
                    <strong>Impact & Property:</strong> {dec.impact}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Failure Modes & Trade-Offs */}
          {caseStudy.failureModesAndTradeoffs && caseStudy.failureModesAndTradeoffs.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
                  5. FAILURE MODES & TRADE-OFFS
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.failureModesAndTradeoffs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-amber-50/30 border border-amber-200/60 space-y-2"
                  >
                    <h4 className="font-mono text-xs font-bold text-amber-950 uppercase">
                      ⚠️ {item.failureMode}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-ink/80 leading-relaxed">
                      <strong>Mitigation:</strong> {item.mitigation}
                    </p>
                    <p className="font-sans text-xs text-ink/70 leading-relaxed">
                      <strong>Trade-Off:</strong> {item.tradeOff}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Testing, Verification & Benchmarks */}
          {caseStudy.testingAndVerification && caseStudy.testingAndVerification.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
                  6. TESTING & VERIFICATION EVIDENCE
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.testingAndVerification.map((test, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/70 space-y-2"
                  >
                    <h4 className="font-mono text-xs font-bold text-emerald-900 uppercase">
                      🧪 {test.type}
                    </h4>
                    <p className="font-sans text-xs text-ink/80">{test.details}</p>
                    <div className="font-mono text-xs font-bold text-emerald-800 pt-1">
                      Result: {test.result}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 7. Deployment & Observability */}
          {caseStudy.deploymentAndObservability && caseStudy.deploymentAndObservability.length > 0 && (
            <section className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/70">
                7. DEPLOYMENT & OBSERVABILITY
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {caseStudy.deploymentAndObservability.map((obs, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-gray-50 border border-black/5 font-sans text-xs sm:text-sm text-ink/90 font-medium flex-1 min-w-[240px]"
                  >
                    ⚙️ {obs}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 8. Operational Outcomes */}
          <section className="p-6 sm:p-8 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-900">
                8. OPERATIONAL RESULTS & IMPACT
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.operationalOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-emerald-200/70 flex items-start gap-2.5 shadow-2xs"
                >
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span className="font-sans text-xs sm:text-sm text-ink/90 font-medium leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Visual Evidence Gallery */}
          {caseStudy.gallery && caseStudy.gallery.length > 0 && (
            <section className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink">
                  9. VISUAL EVIDENCE & SCREENSHOTS ({caseStudy.gallery.length})
                </h3>
                <span className="font-mono text-xs text-ink/50">Click any image to expand</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {caseStudy.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      onExpandImage({
                        url: img.url,
                        title: img.title,
                        badge: img.badge,
                        description: img.description,
                      })
                    }
                    className="group relative rounded-xl overflow-hidden border border-black/10 aspect-video bg-slate-900 cursor-zoom-in hover:border-blue-500 hover:shadow-md transition-all"
                    title={img.title}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    {img.badge && (
                      <div className="absolute top-1.5 left-1.5 bg-black/75 backdrop-blur-xs text-[9px] font-mono text-white px-2 py-0.5 rounded-full">
                        {img.badge}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="font-mono text-[9px] text-white truncate">{img.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sticky Modal Bottom Actions */}
        <div className="p-4 sm:p-6 border-t border-black/10 bg-[#fcfaf7] flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* CRUCIAL RULE: Only render GitHub button if project.githubUrl is defined */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-ink hover:bg-blue-600 text-white font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Inspect Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-ink font-sans text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
