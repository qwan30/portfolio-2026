import { useMemo, useRef, useState } from 'react';
import { GraduationCap, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { easeOutCubic, rangeProgress, useScrollDriver } from '../hooks/useScrollEngine';
import type { LightboxData, LightboxImage } from './ImageLightbox';

interface ArchiveDoc extends LightboxImage {
  issuer: string;
  year: string;
  kind: string;
}

interface CredentialsProps {
  onExpandImage: (data: LightboxData) => void;
}

export function Credentials({ onExpandImage }: CredentialsProps) {
  const { education, certifications, beyondCode } = portfolioData.personal;
  const edu = education[0];

  const documents = useMemo<ArchiveDoc[]>(() => {
    const certs: ArchiveDoc[] = certifications.map((c) => ({
      url: c.image,
      title: c.name,
      badge: `${c.issuer} · ${c.year}`,
      issuer: c.issuer,
      year: c.year,
      kind: 'Verified Credential',
    }));

    const community: ArchiveDoc[] = (beyondCode?.images ?? []).map((url, idx) => ({
      url,
      title: `${beyondCode.projectName} — Photo ${idx + 1}`,
      badge: 'Community Impact',
      description: beyondCode.description,
      issuer: beyondCode.role,
      year: '2025',
      kind: 'Beyond Code · Community',
    }));

    return [...certs, ...community];
  }, [beyondCode, certifications]);

  const lightboxGallery = useMemo<LightboxImage[]>(
    () =>
      documents.map(({ url, title, badge, description }) => ({
        url,
        title,
        badge,
        description,
      })),
    [documents]
  );

  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const stripWrapRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);

  const [activeDocIdx, setActiveDocIdx] = useState(0);
  const activeDocIdxRef = useRef(0);
  const [inArchiveView, setInArchiveView] = useState(false);
  const inArchiveRef = useRef(false);

  useScrollDriver(
    trackRef,
    (p, reduced) => {
      if (reduced) {
        if (stripWrapRef.current) {
          stripWrapRef.current.style.opacity = '0';
          stripWrapRef.current.style.pointerEvents = 'none';
        }
        if (wallRef.current) {
          wallRef.current.style.opacity = '1';
          wallRef.current.style.transform = 'scale(1)';
          wallRef.current.style.pointerEvents = 'auto';
        }
        if (!inArchiveRef.current) {
          inArchiveRef.current = true;
          setInArchiveView(true);
        }
        return;
      }

      const stripProgress = rangeProgress(p, 0, 0.72);
      const morphToWall = easeOutCubic(rangeProgress(p, 0.72, 0.94));
      const idx = Math.min(documents.length - 1, Math.round(stripProgress * (documents.length - 1)));

      if (idx !== activeDocIdxRef.current) {
        activeDocIdxRef.current = idx;
        setActiveDocIdx(idx);
      }

      const wallMode = morphToWall > 0.5;
      if (wallMode !== inArchiveRef.current) {
        inArchiveRef.current = wallMode;
        setInArchiveView(wallMode);
      }

      if (stripRef.current) {
        const shiftPx = stripProgress * Math.max(0, (documents.length - 1) * 320);
        stripRef.current.style.transform = `translate3d(${(-shiftPx).toFixed(1)}px, 0, 0)`;
      }

      if (stripWrapRef.current) {
        stripWrapRef.current.style.opacity = String((1 - morphToWall).toFixed(3));
        stripWrapRef.current.style.pointerEvents = morphToWall > 0.4 ? 'none' : 'auto';
      }

      if (wallRef.current) {
        wallRef.current.style.opacity = String(morphToWall.toFixed(3));
        wallRef.current.style.transform = `scale(${(0.92 + morphToWall * 0.08).toFixed(3)})`;
        wallRef.current.style.pointerEvents = morphToWall > 0.4 ? 'auto' : 'none';
      }
    },
    'sticky'
  );

  const activeDoc = documents[activeDocIdx] ?? documents[0];

  return (
    <section
      id="credentials"
      tabIndex={-1}
      data-theme-band="light"
      className="scroll-mt-16 bg-cream text-ink border-b border-cream-hairline"
    >
      <div ref={trackRef} className="relative md:h-[260vh]">
        <div className="md:sticky md:top-0 min-h-[100dvh] flex flex-col justify-between py-20 px-5 sm:px-8 md:px-12 lg:px-16 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 flex flex-col justify-between gap-8 lg:min-h-[460px]">
              <div className="space-y-6">
                <span className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted block">
                  06 / Education &amp; Credentials
                </span>

                <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,4rem)] uppercase leading-[0.92] tracking-[-0.04em]">
                  <span className="block text-ink">BUILT ON</span>
                  <span className="block text-ink-stone">GOOD</span>
                  <span className="block text-ink-stone">FOUNDATIONS.</span>
                </h2>

                <div className="pt-4 border-t border-cream-hairline space-y-1.5 min-h-[100px]">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted tabular-nums">
                    <span>
                      {inArchiveView
                        ? `${String(documents.length).padStart(2, '0')} Documents / One Archive`
                        : `${String(activeDocIdx + 1).padStart(2, '0')} / ${String(documents.length).padStart(2, '0')}`}
                    </span>
                    <span>{inArchiveView ? 'Click any item' : activeDoc.year}</span>
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-ink leading-snug">
                    {inArchiveView ? 'Verified Credentials & Community Archive' : activeDoc.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ink-secondary">
                    {inArchiveView
                      ? 'AWS Architecting, DeepLearning.AI RAG, Google UX & Tết Luôn Vui fundraising leadership (3,550,000 VNĐ).'
                      : `${activeDoc.issuer} · ${activeDoc.kind}`}
                  </p>
                </div>
              </div>

              {edu ? (
                <div className="pt-4 border-t border-cream-hairline flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-ink shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm">
                    <p className="font-semibold text-ink">{edu.institution}</p>
                    <p className="text-ink-muted font-mono text-[11px] mt-0.5 tabular-nums">
                      {edu.degree} · {edu.duration} · GPA {edu.gpa}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] flex items-center">
              <div
                ref={stripWrapRef}
                className="w-full overflow-hidden py-4 will-change-opacity hidden md:block"
              >
                <div
                  ref={stripRef}
                  className="flex items-center gap-7 will-change-transform pl-2"
                >
                  {documents.map((doc, idx) => (
                    <button
                      key={`${doc.url}-${idx}`}
                      type="button"
                      onClick={() =>
                        onExpandImage({
                          ...lightboxGallery[idx],
                          images: lightboxGallery,
                          initialIndex: idx,
                        })
                      }
                      style={{ transform: `rotate(${idx % 2 === 0 ? -2.2 : 1.8}deg)` }}
                      className="group shrink-0 w-[290px] sm:w-[330px] aspect-[4/3] rounded-xl overflow-hidden bg-cream-card border border-cream-hairline shadow-lg hover:border-ink transition-colors relative cursor-zoom-in text-left"
                      aria-label={`Inspect ${doc.title}`}
                    >
                      <img
                        src={doc.url}
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute top-2.5 right-2.5 bg-obsidian/85 text-light-ink font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">
                        DOC {String(idx + 1).padStart(2, '0')} / {String(documents.length).padStart(2, '0')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div
                ref={wallRef}
                className="md:absolute md:inset-0 flex items-center will-change-[transform,opacity]"
              >
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  {documents.map((doc, idx) => (
                    <button
                      key={`wall-${doc.url}-${idx}`}
                      type="button"
                      onClick={() =>
                        onExpandImage({
                          ...lightboxGallery[idx],
                          images: lightboxGallery,
                          initialIndex: idx,
                        })
                      }
                      className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-cream-card border border-cream-hairline hover:border-ink shadow-sm transition-colors cursor-zoom-in text-left"
                      aria-label={`View ${doc.title}`}
                    >
                      <img
                        src={doc.url}
                        alt={doc.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="absolute bottom-2 right-2 bg-obsidian/85 text-light-ink font-mono text-[9px] px-1.5 py-0.5 rounded inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-2.5 h-2.5" />
                        <span>View</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto w-full pt-4 border-t border-cream-hairline/70 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
            <span>FPT University · Software Engineering</span>
            <span className="tabular-nums">
              {String(documents.length).padStart(2, '0')} Documents / One Archive
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;
