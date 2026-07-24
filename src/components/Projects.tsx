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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [expandedImage, setExpandedImage] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpandedImage(null);
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
            const direction = el.dataset.direction === 'left' ? -100 : 100;
            
            anime({
              targets: el,
              translateX: [direction, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1000,
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="bg-canvas py-24 w-full selection:bg-blue-100 selection:text-black overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-3 block">
            CAREER TIMELINE & REAL-WORLD IMPACT
          </span>
          <h2 className="font-display text-4xl md:text-5xl uppercase text-ink">
            PROJECTS TIMELINE
          </h2>
          <p className="mt-4 font-sans text-ink/70 max-w-2xl mx-auto text-base">
            Tiến trình dự án thực tế và phòng lab kỹ thuậtbackend theo các mốc thời gian phát triển.
          </p>
        </div>
        
        <div className="relative flex flex-col gap-16 md:gap-24">
          {/* Vertical Dashed Line Timeline */}
          <div className="hidden md:block absolute top-12 bottom-12 left-1/2 -translate-x-1/2 w-0 border-l-[3px] border-dashed border-ink/20 z-0"></div>

          {portfolioData.projects.map((project, index) => {
            const topColorClass = cardColors[index % cardColors.length];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.id}
                className={`relative z-10 w-full md:w-[calc(50%-3rem)] ${isEven ? 'md:self-start' : 'md:self-end'}`}
              >
                {/* Milestone Dot */}
                <div 
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-accent border-[4px] border-canvas shadow-sm z-20 ${
                    isEven 
                      ? 'left-[calc(100%+3rem)] -translate-x-1/2' 
                      : 'right-[calc(100%+3rem)] translate-x-1/2'
                  }`} 
                />

                <div 
                  ref={(el) => { cardsRef.current[index] = el; }}
                  data-direction={isEven ? 'left' : 'right'}
                  className="project-card opacity-0 flex flex-col bg-white rounded-[2rem] border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group w-full relative"
                >
                  {/* Top Colored Header Section */}
                  <div className={`relative h-60 sm:h-68 w-full flex flex-col justify-between p-6 md:p-8 ${topColorClass}`}>
                    <div className="flex justify-between items-center w-full z-10">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black/10 text-ink rounded-full backdrop-blur-sm">
                          0{index + 1} • {project.category}
                        </span>
                        {project.period && (
                          <span className="font-mono text-[10px] font-bold text-ink/70 bg-white/50 px-2.5 py-1 rounded-full">
                            {project.period}
                          </span>
                        )}
                      </div>

                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-black/5 hover:bg-ink hover:text-white text-ink flex items-center justify-center transition-colors flex-shrink-0"
                        title="Xem Source Code trên GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                      </a>
                    </div>
                    
                    <div className="z-10 mt-auto">
                      {project.role && (
                        <span className="font-sans text-xs font-semibold text-blue-800 tracking-wide block mb-1">
                          Role: {project.role}
                        </span>
                      )}
                      <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-tight text-ink">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm mt-1.5 font-medium text-ink/80">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Content Section */}
                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <p className="font-sans text-sm md:text-base leading-relaxed text-ink/80 mb-6">
                      {project.description}
                    </p>

                    {/* Direct Image Preview if available */}
                    {project.hoverPreviewImage && (
                      <div 
                        onClick={() => setExpandedImage({ url: project.hoverPreviewImage!, title: project.title })}
                        className="mb-6 rounded-2xl overflow-hidden border border-black/10 shadow-sm bg-slate-950 cursor-zoom-in relative group/img"
                        title="Bấm để mở to toàn màn hình"
                      >
                        <img src={project.hoverPreviewImage} alt={project.title} className="w-full h-auto object-cover group-hover/img:scale-[1.02] transition-transform duration-500" />
                        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-full opacity-90 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 pointer-events-none shadow-lg border border-white/10">
                          <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                          <span>Bấm để phóng to</span>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="font-mono text-[10px] font-semibold tracking-wider uppercase bg-gray-100 text-ink px-3 py-1.5 rounded-full border border-black/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact Metrics */}
                    <div className="mb-8 flex flex-col gap-3">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="border-l-2 border-blue-600 pl-4 py-1">
                          <span className="font-sans text-sm text-ink/90 font-medium block">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto pt-4 flex items-center justify-end gap-4 border-t border-black/5">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-semibold text-blue-600 hover:text-blue-800 transition-colors underline"
                      >
                        GitHub Source Repo →
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {expandedImage && (
        <div 
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fadeIn select-none"
        >
          {/* Top Close Bar */}
          <div className="absolute top-6 right-6 flex items-center gap-4 z-10">
            <span className="font-mono text-xs text-gray-400 hidden sm:inline">Click bất kỳ đâu hoặc nhấn Esc để đóng</span>
            <button 
              onClick={() => setExpandedImage(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-xl transition-colors backdrop-blur-sm"
              title="Đóng xem toàn màn hình"
            >
              ✕
            </button>
          </div>

          {/* Centered Large Image */}
          <div className="relative max-h-[88vh] max-w-[96vw] flex flex-col items-center justify-center">
            <img 
              src={expandedImage.url} 
              alt={expandedImage.title} 
              className="max-h-[82vh] max-w-[95vw] w-auto h-auto object-contain rounded-2xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]" 
            />
            <div className="mt-4 text-center">
              <h4 className="font-display text-xl text-white tracking-wide">{expandedImage.title}</h4>
              <p className="font-mono text-xs text-gray-400 mt-1">Full-resolution Graph RAG Medical Knowledge Graph</p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Clean Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-10 shadow-2xl border border-black/10 relative">
            {/* Close button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-ink flex items-center justify-center font-bold text-lg transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                {selectedProject.category}
              </span>
              <h3 className="font-display text-3xl md:text-4xl text-ink">
                {selectedProject.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-ink/70 mt-2">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Non-Tech Section (Easy to understand) */}
            <div className="mb-8 p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-800 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Góc Nhìn Thực Tế & Giá Trị Mang Lại
              </h4>
              <p className="font-sans text-sm md:text-base leading-relaxed text-ink/90">
                {selectedProject.nonTechImpact}
              </p>
            </div>

            {/* Tech Deep-Dive Section (For Senior Engineers) */}
            <div className="mb-8 p-6 rounded-2xl bg-slate-900 text-white">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-green-400 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Điểm Sáng Kỹ Thuật Thực Chiến (Technical Highlights)
              </h4>
              <p className="font-mono text-xs md:text-sm leading-relaxed text-slate-300">
                {selectedProject.techHighlights}
              </p>
            </div>

            {/* Key Metrics Checklist */}
            <div className="mb-8">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60 mb-4">
                Kết Quả & Chỉ Số Minh Chứng
              </h4>
              <div className="flex flex-col gap-3">
                {selectedProject.metrics.map((metric, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-black/5">
                    <span className="text-blue-600 mt-0.5 font-bold">✓</span>
                    <span className="font-sans text-sm text-ink/90 font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-black/10">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-sans text-sm font-semibold text-center transition-colors"
              >
                Xem Source Code Trên GitHub
              </a>
              <button 
                onClick={() => setSelectedProject(null)}
                className="py-3 px-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-ink font-sans text-sm font-medium transition-colors"
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
