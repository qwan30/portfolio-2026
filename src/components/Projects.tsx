import { useEffect, useRef, useState } from 'react';
import anime from "animejs";
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';

const cardColors = [
  'bg-pastel-blue text-ink border-b border-black/5',
  'bg-pastel-green text-ink border-b border-black/5',
  'bg-pastel-purple text-ink border-b border-black/5',
  'bg-pastel-yellow text-ink border-b border-black/5',
];

const Projects = () => {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [expandedImage, setExpandedImage] = useState<{ url: string; title: string } | null>(null);
  
  // Shopee-style active image state per project
  const [activeImages, setActiveImages] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    portfolioData.projects.forEach((p) => {
      initial[p.id] = p.hoverPreviewImage || (p.gallery && p.gallery[0]?.url) || '';
    });
    return initial;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedImage(null);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            anime({
              targets: el,
              translateY: [30, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 800,
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectThumbnail = (projectId: string, imageUrl: string) => {
    setActiveImages((prev) => ({
      ...prev,
      [projectId]: imageUrl,
    }));
  };

  return (
    <section id="projects" className="bg-canvas py-20 md:py-28 w-full selection:bg-blue-100 selection:text-black overflow-hidden">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 inline-block px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            CAREER TIMELINE & REAL-WORLD IMPACT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink">
            PROJECTS & CASE STUDIES
          </h2>
          <p className="mt-4 font-sans text-ink/75 text-base md:text-lg leading-relaxed">
            Hệ thống dự án thực chiến và giải pháp kiến trúc backend chuyên sâu, được thiết kế theo chuẩn enterprise với phân quyền đa cấp, kiểm toán bất biến và độ tin cậy cao.
          </p>
        </div>
        
        {/* Projects List — Shopee Style Split Cards */}
        <div className="flex flex-col gap-14 md:gap-20">
          {portfolioData.projects.map((project, index) => {
            const topColorClass = cardColors[index % cardColors.length];
            const currentImage = activeImages[project.id] || project.hoverPreviewImage || '';
            const activeGalleryItem = project.gallery?.find((g) => g.url === currentImage);

            return (
              <article 
                key={project.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="project-card opacity-0 bg-white rounded-3xl md:rounded-[2.5rem] border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full"
                aria-labelledby={`project-title-${project.id}`}
              >
                {/* Top Header Banner */}
                <header className={`p-6 sm:p-8 md:px-10 flex flex-wrap items-center justify-between gap-4 ${topColorClass}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 bg-black/10 text-ink rounded-full backdrop-blur-sm shadow-xs">
                      0{index + 1} • {project.category}
                    </span>
                    {project.period && (
                      <span className="font-mono text-xs font-bold text-ink/80 bg-white/70 px-3 py-1.5 rounded-full border border-black/5">
                        {project.period}
                      </span>
                    )}
                    {project.role && (
                      <span className="font-sans text-xs font-bold text-blue-900 bg-blue-100/80 px-3 py-1.5 rounded-full border border-blue-200">
                        {project.role}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink hover:bg-blue-600 text-white text-xs font-mono font-semibold transition-all shadow-sm group/btn"
                      title="Xem Source Code / Website dự án"
                      aria-label={`Xem repository của ${project.title}`}
                    >
                      <span>Repository / Live</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </a>
                  </div>
                </header>

                {/* Main Body: Shopee-Style Split Grid */}
                <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
                  
                  {/* LEFT COLUMN: Shopee-Style Media Gallery & Device Mockup */}
                  <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 sticky lg:top-24">
                    
                    {/* Main Image Frame */}
                    <div 
                      className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-black/10 bg-slate-950/90 shadow-md group/img cursor-zoom-in flex flex-col items-center justify-center p-3 sm:p-4 min-h-[340px] max-h-[460px]"
                      onClick={() => setExpandedImage({ 
                        url: currentImage, 
                        title: activeGalleryItem?.title || project.title 
                      })}
                      title="Bấm để mở to xem chi tiết màn hình"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setExpandedImage({ 
                            url: currentImage, 
                            title: activeGalleryItem?.title || project.title 
                          });
                        }
                      }}
                      aria-label="Phóng to ảnh mô tả dự án"
                    >
                      {/* Active Tag Overlay */}
                      {activeGalleryItem?.badge && (
                        <div className="absolute top-3 left-3 z-10 bg-blue-600/90 backdrop-blur-md text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm border border-white/15">
                          {activeGalleryItem.badge}
                        </div>
                      )}

                      {/* Display Image */}
                      <img 
                        src={currentImage} 
                        alt={activeGalleryItem?.title || project.title} 
                        className="max-h-[380px] w-auto object-contain rounded-xl transition-all duration-300 group-hover/img:scale-[1.02]" 
                        loading="lazy"
                      />

                      {/* Zoom Indicator */}
                      <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-full opacity-90 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 shadow-md border border-white/10">
                        <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        <span>Bấm để phóng to</span>
                      </div>
                    </div>

                    {/* Active Caption */}
                    {activeGalleryItem && (
                      <div className="text-center px-1">
                        <p className="font-mono text-xs font-semibold text-ink/80 truncate">
                          📷 {activeGalleryItem.title}
                        </p>
                      </div>
                    )}

                    {/* Shopee-Style Thumbnails Carousel / Strip */}
                    {project.gallery && project.gallery.length > 0 && (
                      <div className="flex flex-col gap-2">
                        <span className="font-mono text-[11px] font-bold text-ink/60 uppercase tracking-wider">
                          Màn hình & Tính năng ({project.gallery.length}):
                        </span>
                        
                        <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-black/10">
                          {project.gallery.map((item, gIdx) => {
                            const isActive = item.url === currentImage;
                            return (
                              <button
                                key={gIdx}
                                onClick={() => handleSelectThumbnail(project.id, item.url)}
                                onMouseEnter={() => handleSelectThumbnail(project.id, item.url)}
                                className={`relative flex-shrink-0 w-16 h-20 sm:w-18 sm:h-22 rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer bg-slate-900 ${
                                  isActive 
                                    ? 'ring-3 ring-blue-600 border-transparent shadow-md scale-105' 
                                    : 'border-black/15 opacity-70 hover:opacity-100 hover:border-blue-400'
                                }`}
                                title={item.title}
                                aria-label={`Xem màn hình ${item.title}`}
                              >
                                <img 
                                  src={item.url} 
                                  alt={item.title} 
                                  className="w-full h-full object-cover" 
                                  loading="lazy"
                                />
                                {item.badge && (
                                  <div className="absolute bottom-0 inset-x-0 bg-black/85 text-[8px] font-mono text-white text-center py-0.5 truncate px-0.5">
                                    {item.badge}
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Quick Specs Callout */}
                    <div className="p-4 rounded-2xl bg-gray-50/80 border border-black/5 flex flex-col gap-2 text-xs font-mono text-ink/80">
                      <div className="flex items-center justify-between border-b border-black/5 pb-1.5">
                        <span className="text-ink/60">Công nghệ:</span>
                        <span className="font-bold text-blue-700">
                          {project.id === 'vijaco-doc-mgmt' ? 'NestJS (TS) + Flutter (Dart)' : project.techStack.slice(0, 2).join(' + ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-black/5 pb-1.5">
                        <span className="text-ink/60">Hạ tầng:</span>
                        <span className="font-bold text-ink">
                          {project.id === 'vijaco-doc-mgmt' ? 'On-Premise Docker (~4TB)' : 'Docker & Cloud Native'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-ink/60">Quy mô / Tải:</span>
                        <span className="font-bold text-green-700">
                          {project.id === 'vijaco-doc-mgmt' ? '50+ Nhân sự vận hành' : 'High Reliability'}
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Structured 3-Section Project Breakdown */}
                  <div className="lg:col-span-7 xl:col-span-7 flex flex-col gap-6 md:gap-7">
                    
                    {/* Project Main Title & Tagline */}
                    <div>
                      <h3 
                        id={`project-title-${project.id}`}
                        className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight"
                      >
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm sm:text-base font-medium text-ink/75 mt-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* 3 STRUCTURED SECTIONS */}
                    {project.overview && project.solution && project.results ? (
                      <div className="flex flex-col gap-5 md:gap-6">
                        
                        {/* 1. MÔ TẢ SƠ LƯỢC */}
                        <section className="p-5 sm:p-6 rounded-2xl bg-amber-50/40 border border-amber-200/60 flex flex-col gap-3.5">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            1. MÔ TẢ SƠ LƯỢC (MỤC ĐÍCH, NGỮ CẢNH & BÀI TOÁN)
                          </h4>
                          
                          <div className="grid grid-cols-1 gap-3 font-sans text-xs sm:text-sm text-ink/90 leading-relaxed">
                            <div className="flex items-start gap-2.5">
                              <strong className="font-semibold text-amber-950 flex-shrink-0 min-w-[85px]">Mục đích:</strong>
                              <span>{project.overview.purpose}</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                              <strong className="font-semibold text-amber-950 flex-shrink-0 min-w-[85px]">Ngữ cảnh:</strong>
                              <span>{project.overview.context}</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                              <strong className="font-semibold text-amber-950 flex-shrink-0 min-w-[85px]">Bài toán:</strong>
                              <span className="text-amber-950 font-medium">{project.overview.problem}</span>
                            </div>
                          </div>
                        </section>

                        {/* 2. CÁCH GIẢI QUYẾT & KIẾN TRÚC */}
                        <section className="p-5 sm:p-6 rounded-2xl bg-blue-50/40 border border-blue-200/60 flex flex-col gap-3.5">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            2. CÁCH GIẢI QUYẾT & KIẾN TRÚC HỆ THỐNG
                          </h4>

                          <div className="font-mono text-xs font-semibold text-blue-800 bg-blue-100/60 p-2.5 rounded-xl border border-blue-200/60">
                            ⚙️ {project.solution.architecture}
                          </div>

                          <div className="flex flex-col gap-2.5 mt-1">
                            {project.solution.coreFeatures.map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm leading-relaxed">
                                <span className="text-blue-600 font-bold mt-0.5">▸</span>
                                <div>
                                  <strong className="font-semibold text-ink text-xs sm:text-sm">{feat.title}: </strong>
                                  <span className="text-ink/80">{feat.desc}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </section>

                        {/* 3. KẾT QUẢ ĐẠT ĐƯỢC */}
                        <section className="p-5 sm:p-6 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 flex flex-col gap-3.5">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                            3. KẾT QUẢ & HIỆU QUẢ MANG LẠI
                          </h4>

                          {project.results.summary && (
                            <p className="font-sans text-xs sm:text-sm text-emerald-950 font-medium">
                              {project.results.summary}
                            </p>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {project.results.items.map((item, rIdx) => (
                              <div key={rIdx} className="p-3 rounded-xl bg-white border border-emerald-200/60 flex items-start gap-2.5 shadow-2xs">
                                <span className="text-emerald-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                                <span className="font-sans text-xs sm:text-sm text-ink/90 font-medium leading-snug">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </section>

                      </div>
                    ) : (
                      /* Fallback for other projects */
                      <div className="flex flex-col gap-5">
                        <p className="font-sans text-sm md:text-base leading-relaxed text-ink/80">
                          {project.description}
                        </p>

                        <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 flex flex-col gap-2">
                          <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-800">
                            Giá Trị Mang Lại & Điểm Sáng Kỹ Thuật
                          </h4>
                          <p className="font-sans text-xs sm:text-sm text-ink/90 leading-relaxed">
                            {project.nonTechImpact}
                          </p>
                          <p className="font-mono text-xs text-blue-900 mt-1">
                            <strong>Technical:</strong> {project.techHighlights}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="border-l-3 border-blue-600 pl-3.5 py-1.5 bg-gray-50 rounded-r-xl">
                              <span className="font-sans text-xs sm:text-sm text-ink/90 font-medium block">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <span className="font-mono text-[11px] font-bold text-ink/60 uppercase tracking-wider mr-1">
                        Tech Stack:
                      </span>
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="font-mono text-[11px] font-semibold tracking-wider uppercase bg-gray-100 hover:bg-blue-50 text-ink px-3 py-1 rounded-full border border-black/5 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 mt-auto border-t border-black/5 flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-ink hover:text-blue-600 transition-colors cursor-pointer group/modal"
                      >
                        <span className="underline underline-offset-4">Xem Case Study toàn màn hình</span>
                        <span className="group-hover/modal:translate-x-1 transition-transform">→</span>
                      </button>

                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>GitHub Source Repo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {expandedImage && (
        <div 
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fadeIn select-none"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh toàn màn hình"
        >
          {/* Top Close Bar */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
            <span className="font-mono text-xs text-gray-400 hidden sm:inline">Click bất kỳ đâu hoặc nhấn Esc để đóng</span>
            <button 
              onClick={() => setExpandedImage(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-xl transition-colors backdrop-blur-sm cursor-pointer"
              title="Đóng xem toàn màn hình"
              aria-label="Đóng"
            >
              ✕
            </button>
          </div>

          {/* Centered Large Image */}
          <div 
            className="relative max-h-[88vh] max-w-[96vw] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={expandedImage.url} 
              alt={expandedImage.title} 
              className="max-h-[80vh] max-w-[92vw] w-auto h-auto object-contain rounded-2xl border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]" 
            />
            <div className="mt-4 text-center">
              <h4 className="font-display text-xl sm:text-2xl text-white tracking-wide">{expandedImage.title}</h4>
              <p className="font-mono text-xs text-gray-400 mt-1">High-Resolution UI Screen Mockup</p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Clean Case Study Modal */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 shadow-2xl border border-black/10 relative"
          >
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-ink flex items-center justify-center font-bold text-lg transition-colors cursor-pointer"
              aria-label="Đóng modal"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-6 pr-12">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                {selectedProject.category} • {selectedProject.period}
              </span>
              <h3 id="case-study-title" className="font-display text-2xl sm:text-3xl md:text-4xl text-ink">
                {selectedProject.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-ink/75 mt-2">
                {selectedProject.tagline}
              </p>
            </div>

            {/* 3 Sections in Modal */}
            {selectedProject.overview && selectedProject.solution && selectedProject.results ? (
              <div className="flex flex-col gap-6 mb-8">
                
                {/* Overview */}
                <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                    📌 1. Mục Đích & Bối Cảnh Nghiệp Vụ
                  </h4>
                  <div className="flex flex-col gap-2.5 font-sans text-sm text-ink/90">
                    <p><strong>Mục đích:</strong> {selectedProject.overview.purpose}</p>
                    <p><strong>Ngữ cảnh ra đời:</strong> {selectedProject.overview.context}</p>
                    <p><strong>Bài toán cần giải quyết:</strong> {selectedProject.overview.problem}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-900 mb-3">
                    ⚙️ 2. Kiến Trúc & Giải Pháp Kỹ Thuật
                  </h4>
                  <div className="font-mono text-xs font-semibold text-blue-900 bg-blue-100 p-2.5 rounded-xl mb-4">
                    {selectedProject.solution.architecture}
                  </div>
                  <div className="flex flex-col gap-3">
                    {selectedProject.solution.coreFeatures.map((feat, idx) => (
                      <div key={idx} className="font-sans text-sm">
                        <strong className="text-ink font-semibold">▸ {feat.title}: </strong>
                        <span className="text-ink/80">{feat.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                    🏆 3. Kết Quả Vận Hành & Giá Trị Đạt Được
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.results.items.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white border border-emerald-200 text-sm font-medium text-ink flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex flex-col gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-800 mb-2">
                    Góc Nhìn Thực Tế & Giá Trị Mang Lại
                  </h4>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-ink/90">
                    {selectedProject.nonTechImpact}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 text-white">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-green-400 mb-2">
                    Điểm Sáng Kỹ Thuật Thực Chiến (Technical Highlights)
                  </h4>
                  <p className="font-mono text-xs md:text-sm leading-relaxed text-slate-300">
                    {selectedProject.techHighlights}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60 mb-3">
                    Kết Quả & Chỉ Số Minh Chứng
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-black/5">
                        <span className="text-blue-600 mt-0.5 font-bold">✓</span>
                        <span className="font-sans text-sm text-ink/90 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Footer buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-black/10">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold text-center transition-colors shadow-sm"
              >
                Xem Repository / Website
              </a>
              <button 
                onClick={() => setSelectedProject(null)}
                className="py-3 px-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-ink font-sans text-sm font-medium transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
