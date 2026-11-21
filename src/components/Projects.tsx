import { useCallback, useMemo, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Maximize2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { FeaturedProjectItem, SecondaryProjectItem } from '../data/portfolioData';
import { easeOutCubic, rangeProgress, useScrollDriver } from '../hooks/useScrollEngine';
import type { LightboxData } from './ImageLightbox';
import TechIcon from './TechIcon';

type UnifiedProject = FeaturedProjectItem | SecondaryProjectItem;

interface PosterStyle {
  monogram: string;
  bg: string;
  accent: string;
  ink: string;
  motif: 'grid' | 'bolt' | 'cross' | 'graph' | 'escrow' | 'ledger' | 'bank' | 'layers';
}

const POSTER_STYLES: Record<string, PosterStyle> = {
  'vijaco-doc-mgmt': {
    monogram: 'VJ.',
    bg: 'linear-gradient(150deg, #1b6b4a 0%, #0e3d2a 100%)',
    accent: '#a7f3d0',
    ink: '#f3efe6',
    motif: 'grid',
  },
  'flash-sale-concurrency-engine': {
    monogram: 'FS.',
    bg: 'linear-gradient(150deg, #e05a22 0%, #962f0d 100%)',
    accent: '#fde68a',
    ink: '#f8f4ec',
    motif: 'bolt',
  },
  'hospital-management-system': {
    monogram: 'HM.',
    bg: 'linear-gradient(150deg, #2145a8 0%, #11225c 100%)',
    accent: '#bfdbfe',
    ink: '#f3f6fc',
    motif: 'cross',
  },
  'ai-hospital-knowledge-assistant': {
    monogram: 'AI.',
    bg: 'linear-gradient(150deg, #474d91 0%, #20234a 100%)',
    accent: '#c7d2fe',
    ink: '#f4f4fc',
    motif: 'graph',
  },
  'aivora-marketplace': {
    monogram: 'AV.',
    bg: 'linear-gradient(150deg, #b82936 0%, #66121b 100%)',
    accent: '#fecdd3',
    ink: '#fbf6f6',
    motif: 'escrow',
  },
  'ledger-credit-system': {
    monogram: 'LD.',
    bg: 'linear-gradient(150deg, #c28524 0%, #6e450c 100%)',
    accent: '#fef08a',
    ink: '#fcf9f0',
    motif: 'ledger',
  },
  'mini-digital-banking-platform': {
    monogram: 'MB.',
    bg: 'linear-gradient(150deg, #136273 0%, #09323d 100%)',
    accent: '#a5f3fc',
    ink: '#f0fafc',
    motif: 'bank',
  },
  'inventory-flashsale-system': {
    monogram: 'IF.',
    bg: 'linear-gradient(150deg, #3a455c 0%, #1b2130 100%)',
    accent: '#cbd5e1',
    ink: '#f3f5f8',
    motif: 'layers',
  },
};

const WORD_1 = 'SELECTED'.split('');
const WORD_2 = 'WORK'.split('');
const OFFSETS_1 = [-78, 56, -64, 70, -52, 62, -74, 48];
const OFFSETS_2 = [64, -58, 72, -62];

function PosterGraphic({ motif, accent }: { motif: PosterStyle['motif']; accent: string }) {
  switch (motif) {
    case 'grid':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <rect x="28" y="14" width="54" height="42" rx="10" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
          <rect x="94" y="14" width="54" height="42" rx="10" fill={accent} fillOpacity="0.88" />
          <rect x="28" y="66" width="54" height="42" rx="10" fill={accent} fillOpacity="0.55" />
          <rect x="94" y="66" width="54" height="42" rx="10" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
          <circle cx="88" cy="61" r="7" fill="#ffffff" />
        </svg>
      );
    case 'bolt':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <circle cx="90" cy="60" r="46" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1.5" />
          <rect x="58" y="34" width="64" height="52" rx="14" fill={accent} fillOpacity="0.85" />
          <path d="M95 42L79 63H91L85 78L102 57H90L95 42Z" fill="#7c2308" />
        </svg>
      );
    case 'cross':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <rect x="44" y="18" width="92" height="84" rx="16" fill={accent} fillOpacity="0.16" stroke={accent} strokeWidth="1.5" />
          <path d="M90 36V84M66 60H114" stroke={accent} strokeWidth="12" strokeLinecap="round" />
          <circle cx="136" cy="24" r="9" fill={accent} />
        </svg>
      );
    case 'graph':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <line x1="48" y1="36" x2="96" y2="60" stroke={accent} strokeWidth="2" />
          <line x1="132" y1="34" x2="96" y2="60" stroke={accent} strokeWidth="2" />
          <line x1="56" y1="90" x2="96" y2="60" stroke={accent} strokeWidth="2" />
          <line x1="136" y1="88" x2="96" y2="60" stroke={accent} strokeWidth="2" />
          <circle cx="96" cy="60" r="18" fill={accent} />
          <circle cx="48" cy="36" r="10" fill={accent} fillOpacity="0.55" />
          <circle cx="132" cy="34" r="12" fill={accent} fillOpacity="0.7" />
          <circle cx="56" cy="90" r="9" fill={accent} fillOpacity="0.45" />
          <circle cx="136" cy="88" r="11" fill={accent} fillOpacity="0.65" />
        </svg>
      );
    case 'escrow':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <rect x="30" y="30" width="52" height="60" rx="12" fill={accent} fillOpacity="0.82" />
          <rect x="98" y="30" width="52" height="60" rx="12" fill={accent} fillOpacity="0.24" stroke={accent} strokeWidth="1.5" />
          <path d="M72 60H108M100 52L108 60L100 68" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'ledger':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <rect x="34" y="24" width="112" height="18" rx="6" fill={accent} fillOpacity="0.85" />
          <rect x="34" y="51" width="84" height="18" rx="6" fill={accent} fillOpacity="0.45" />
          <rect x="34" y="78" width="112" height="18" rx="6" fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth="1.5" />
        </svg>
      );
    case 'bank':
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <circle cx="68" cy="60" r="30" fill={accent} fillOpacity="0.8" />
          <circle cx="112" cy="60" r="30" fill={accent} fillOpacity="0.24" stroke={accent} strokeWidth="2" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 180 120" className="w-40 h-28" fill="none" aria-hidden="true">
          <rect x="38" y="22" width="104" height="22" rx="6" fill={accent} fillOpacity="0.82" />
          <rect x="48" y="50" width="84" height="22" rx="6" fill={accent} fillOpacity="0.48" />
          <rect x="58" y="78" width="64" height="22" rx="6" fill={accent} fillOpacity="0.25" stroke={accent} strokeWidth="1.5" />
        </svg>
      );
  }
}

function getProjectPreviewImage(project: UnifiedProject): string {
  return 'featuredImage' in project ? project.featuredImage : project.representativeImage;
}

function getProjectPrimaryProof(project: UnifiedProject): string {
  return 'proofChips' in project ? project.proofChips[0] : project.proofChip;
}

function getProjectStatus(project: UnifiedProject): string {
  return 'status' in project ? project.status : project.statusBadge;
}

interface ProjectsProps {
  onExpandImage: (data: LightboxData) => void;
  onSelectProject: (project: UnifiedProject) => void;
}

export function Projects({ onExpandImage, onSelectProject }: ProjectsProps) {
  const allProjects = useMemo<UnifiedProject[]>(
    () => [...portfolioData.featuredProjects, ...portfolioData.secondaryProjects],
    []
  );

  const zipperTrackRef = useRef<HTMLDivElement>(null);
  const word1Refs = useRef<(HTMLSpanElement | null)[]>([]);
  const word2Refs = useRef<(HTMLSpanElement | null)[]>([]);
  const zipperWrapRef = useRef<HTMLDivElement>(null);

  const deckTrackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeDeckIdx, setActiveDeckIdx] = useState(0);
  const activeDeckIdxRef = useRef(0);

  useScrollDriver(
    zipperTrackRef,
    (p, reduced) => {
      const snap = reduced ? 1 : easeOutCubic(rangeProgress(p, 0.04, 0.56));
      const exit = reduced ? 0 : easeOutCubic(rangeProgress(p, 0.78, 1));

      word1Refs.current.forEach((el, i) => {
        if (!el) return;
        const offset = OFFSETS_1[i % OFFSETS_1.length] * (1 - snap);
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      word2Refs.current.forEach((el, i) => {
        if (!el) return;
        const offset = OFFSETS_2[i % OFFSETS_2.length] * (1 - snap);
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      if (zipperWrapRef.current) {
        zipperWrapRef.current.style.opacity = String(1 - exit * 0.85);
        zipperWrapRef.current.style.transform = `scale(${(1 - exit * 0.06).toFixed(3)})`;
      }
    },
    'sticky'
  );

  useScrollDriver(
    deckTrackRef,
    (p, reduced) => {
      const total = allProjects.length;
      const floatPos = reduced ? activeDeckIdxRef.current : p * (total - 1);
      const nearest = Math.round(floatPos);

      if (!reduced && nearest !== activeDeckIdxRef.current) {
        activeDeckIdxRef.current = nearest;
        setActiveDeckIdx(nearest);
      }

      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const rel = idx - floatPos;

        if (rel < -1.15) {
          card.style.opacity = '0';
          card.style.pointerEvents = 'none';
          card.style.transform = 'translate3d(-240px, -40px, -160px) rotateZ(-18deg) scale(0.84)';
          card.style.filter = 'none';
          return;
        }

        if (rel < 0) {
          const out = Math.min(1, -rel);
          const x = -out * 210;
          const y = -out * 28;
          const rot = -out * 16;
          const sc = 1 - out * 0.14;
          card.style.opacity = String(Math.max(0, 1 - out * 1.15));
          card.style.zIndex = String(total + 5);
          card.style.pointerEvents = 'none';
          card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotateZ(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
          card.style.filter = out > 0.12 && !reduced ? `blur(${(out * 4).toFixed(1)}px)` : 'none';
          return;
        }

        const depth = Math.min(4, rel);
        const fanSign = idx % 2 === 0 ? 1 : -1;
        const rot = depth === 0 ? 0 : fanSign * (4 + depth * 4.2);
        const x = depth === 0 ? 0 : fanSign * depth * 26;
        const y = depth * 12;
        const sc = 1 - depth * 0.065;
        const opacity = depth > 3.2 ? Math.max(0, 1 - (depth - 3.2) * 1.3) : 1 - depth * 0.14;

        card.style.opacity = String(opacity);
        card.style.zIndex = String(total - idx);
        card.style.pointerEvents = Math.abs(rel) < 0.45 ? 'auto' : 'none';
        card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotateZ(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
        card.style.filter = 'none';
      });
    },
    'sticky'
  );

  const jumpToCard = useCallback(
    (targetIndex: number) => {
      const clamped = Math.max(0, Math.min(allProjects.length - 1, targetIndex));
      const track = deckTrackRef.current;
      if (!track) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        activeDeckIdxRef.current = clamped;
        setActiveDeckIdx(clamped);
        return;
      }

      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(1, track.offsetHeight - window.innerHeight);
      const targetY = trackTop + (clamped / (allProjects.length - 1)) * travel;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    },
    [allProjects.length]
  );

  const activeProject = allProjects[activeDeckIdx] ?? allProjects[0];

  return (
    <>
      <section
        data-theme-band="light"
        className="bg-cream text-ink py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted block mb-4">
              02 / Architecture &amp; Production Systems
            </span>
            <h2 className="font-display font-extrabold text-[clamp(2.4rem,6.3vw,5.4rem)] uppercase leading-[0.92] tracking-[-0.04em]">
              <span className="block text-ink">HIGH-DEPTH</span>
              <span className="block text-ink">BACKEND</span>
              <span className="block text-ink-stone">ENGINEERING.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 font-sans text-sm sm:text-base text-ink-secondary leading-relaxed pb-2">
            Eight engineered systems spanning enterprise document security, high-concurrency flash-sale reservation, clinical ERP modular monoliths, double-entry financial ledgers, and citation-gated Graph RAG.
          </p>
        </div>
      </section>

      <section
        id="work"
        tabIndex={-1}
        data-theme-band="dark"
        className="scroll-mt-16 bg-obsidian text-light-ink"
      >
        <div ref={zipperTrackRef} className="relative h-[145vh] md:h-[165vh]">
          <div className="sticky top-0 h-[100dvh] flex flex-col justify-between py-20 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-light-muted">
              <span>02 / Selected Work</span>
              <span className="tabular-nums">01 — 08</span>
            </div>

            <div
              ref={zipperWrapRef}
              className="flex flex-col items-center justify-center select-none will-change-[transform,opacity]"
            >
              <div className="font-display font-extrabold text-[clamp(2.8rem,10.5vw,8.6rem)] uppercase leading-[0.92] tracking-[-0.03em] text-light-ink flex">
                {WORD_1.map((ch, idx) => (
                  <span
                    key={`w1-${idx}`}
                    ref={(el) => {
                      word1Refs.current[idx] = el;
                    }}
                    className="inline-block will-change-transform"
                  >
                    {ch}
                  </span>
                ))}
              </div>
              <div className="font-display font-extrabold text-[clamp(2.8rem,10.5vw,8.6rem)] uppercase leading-[0.92] tracking-[-0.03em] text-slate-accent flex">
                {WORD_2.map((ch, idx) => (
                  <span
                    key={`w2-${idx}`}
                    ref={(el) => {
                      word2Refs.current[idx] = el;
                    }}
                    className="inline-block will-change-transform"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex items-center justify-center font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-light-muted">
              <span>Scroll · Explore the Deck ↓</span>
            </div>
          </div>
        </div>

        <div ref={deckTrackRef} className="relative h-[420vh] md:h-[480vh] border-b border-obsidian-hairline">
          <div className="sticky top-0 h-[100dvh] flex flex-col justify-between pt-20 pb-8 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-light-muted">
              <span>Projects / 2025 — 2026</span>
              <span className="hidden sm:inline text-light-secondary">
                Every system, its own architecture.
              </span>
            </div>

            <div className="relative flex-1 flex items-center justify-center my-4" style={{ perspective: '1400px' }}>
              {allProjects.map((project, idx) => {
                const style = POSTER_STYLES[project.id] ?? POSTER_STYLES['inventory-flashsale-system'];
                const isFeatured = 'number' in project;
                return (
                  <button
                    key={project.id}
                    type="button"
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onClick={() => onSelectProject(project)}
                    aria-label={`Open case study for ${project.title}`}
                    style={{ background: style.bg, color: style.ink }}
                    className="poster-card-shadow absolute w-[255px] sm:w-[300px] md:w-[330px] aspect-[3/4] rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-left cursor-pointer select-none will-change-[transform,opacity]"
                  >
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] opacity-80">
                      <span>{isFeatured ? `FEATURED ${project.number}` : `ARCHIVE 0${idx + 1}`}</span>
                      <span className="tabular-nums">{project.period.split('–')[0].trim()}</span>
                    </div>

                    <div className="flex items-center justify-center my-auto">
                      <PosterGraphic motif={style.motif} accent={style.accent} />
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] opacity-75 block truncate">
                        {project.category}
                      </span>
                      <div className="flex items-end justify-between gap-2">
                        <span className="font-display font-extrabold text-5xl sm:text-6xl leading-none tracking-[-0.04em]">
                          {style.monogram}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/25 border border-white/15">
                          Inspect ↗
                        </span>
                      </div>
                      <p className="font-sans text-xs font-semibold opacity-90 truncate pt-1">
                        {project.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="max-w-7xl mx-auto w-full pt-5 border-t border-obsidian-hairline grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
              <div className="md:col-span-7 min-w-0">
                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-light-muted mb-1">
                  <span className="text-sand-gold font-bold tabular-nums">
                    {String(activeDeckIdx + 1).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{getProjectStatus(activeProject)}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-verified-dark">{getProjectPrimaryProof(activeProject)}</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-light-ink tracking-tight truncate">
                  {activeProject.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-light-secondary mt-1 line-clamp-2 max-w-2xl">
                  {activeProject.thesis}
                </p>
              </div>

              <div className="md:col-span-5 flex flex-wrap items-center md:justify-end gap-2.5">
                <div className="inline-flex items-center gap-1 mr-1">
                  <button
                    type="button"
                    onClick={() => jumpToCard(activeDeckIdx - 1)}
                    disabled={activeDeckIdx === 0}
                    aria-label="Previous project card"
                    className="w-10 h-10 rounded-full border border-obsidian-hairline-strong hover:border-light-ink disabled:opacity-30 text-light-ink inline-flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => jumpToCard(activeDeckIdx + 1)}
                    disabled={activeDeckIdx === allProjects.length - 1}
                    aria-label="Next project card"
                    className="w-10 h-10 rounded-full border border-obsidian-hairline-strong hover:border-light-ink disabled:opacity-30 text-light-ink inline-flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 px-4 rounded-full border border-obsidian-hairline-strong hover:border-light-ink text-light-secondary hover:text-light-ink font-mono text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : null}

                <button
                  type="button"
                  onClick={() => onSelectProject(activeProject)}
                  className="h-10 px-5 rounded-full bg-light-ink hover:bg-sand-gold text-obsidian font-mono text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" tabIndex={-1} className="scroll-mt-20 py-20 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 border-b border-obsidian-hairline">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-obsidian-hairline pb-6">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sand-gold block mb-2">
                  Complete Engineering Index
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-[-0.03em] text-light-ink">
                  All 08 Verified Systems &amp; Architecture Evidence
                </h3>
              </div>
              <span className="font-mono text-xs text-light-muted tabular-nums">
                4 Flagship · 4 Secondary
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allProjects.map((project, idx) => {
                const imgUrl = getProjectPreviewImage(project);
                const isSvg = imgUrl.toLowerCase().endsWith('.svg');
                const gallery =
                  'thumbnails' in project
                    ? [
                        {
                          url: project.featuredImage,
                          title: `${project.title} — ${project.featuredImageBadge ?? 'Overview'}`,
                          badge: project.featuredImageBadge ?? 'Overview',
                        },
                        ...project.thumbnails,
                      ]
                    : [
                        {
                          url: project.representativeImage,
                          title: project.title,
                          badge: project.statusBadge,
                        },
                      ];

                return (
                  <article
                    key={project.id}
                    id={`featured-project-${project.id}`}
                    tabIndex={-1}
                    className="scroll-mt-24 rounded-2xl bg-obsidian-surface border border-obsidian-hairline hover:border-obsidian-hairline-strong transition-colors overflow-hidden flex flex-col justify-between min-w-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        onExpandImage({
                          ...gallery[0],
                          images: gallery,
                          initialIndex: 0,
                        })
                      }
                      className={`relative aspect-[16/9] w-full overflow-hidden cursor-zoom-in group border-b border-obsidian-hairline flex items-center justify-center text-left ${
                        isSvg ? 'bg-[#f6f3ec] p-4' : 'bg-[#07080c] p-2'
                      }`}
                      aria-label={`Inspect visual evidence for ${project.title}`}
                    >
                      <img
                        src={imgUrl}
                        alt={project.title}
                        className={`max-h-full max-w-full w-auto h-auto transition-transform duration-300 group-hover:scale-[1.02] ${
                          isSvg ? 'object-contain' : 'object-contain rounded'
                        }`}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute top-3 left-3 bg-obsidian/90 text-light-ink font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-obsidian-hairline-strong tabular-nums">
                        {String(idx + 1).padStart(2, '0')} · {getProjectStatus(project)}
                      </span>
                      <span className="absolute bottom-3 right-3 bg-obsidian/90 text-light-ink font-mono text-[10px] px-2.5 py-1 rounded border border-obsidian-hairline-strong inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3 h-3 text-sand-gold" />
                        <span>Inspect</span>
                      </span>
                    </button>

                    <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1 min-w-0">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-light-muted block mb-1 tabular-nums">
                          {project.category} · {project.period}
                        </span>
                        <h4 className="font-display font-bold text-xl text-light-ink leading-snug">
                          {project.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-light-secondary mt-1.5 leading-relaxed">
                          {project.thesis}
                        </p>
                      </div>

                      <div className="px-3 py-2 rounded-lg bg-verified-soft text-verified-dark border border-verified-dark/25 font-sans text-xs font-semibold flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        <span>{getProjectPrimaryProof(project)}</span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] uppercase font-medium bg-obsidian-elevated px-2.5 py-1 rounded border border-obsidian-hairline text-light-secondary inline-flex items-center gap-1.5"
                          >
                            <TechIcon name={tech} className="w-3 h-3" onDark />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 mt-auto border-t border-obsidian-hairline flex flex-wrap items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="h-10 font-mono text-xs font-bold uppercase tracking-wider text-sand-gold hover:text-light-ink transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>Read Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-4">
                          {project.liveUrl ? (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-10 font-mono text-xs font-semibold text-light-secondary hover:text-light-ink inline-flex items-center gap-1 transition-colors"
                            >
                              <span>Live</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-10 font-mono text-xs font-semibold text-light-muted hover:text-light-ink inline-flex items-center gap-1 transition-colors"
                            >
                              <span>Repo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
