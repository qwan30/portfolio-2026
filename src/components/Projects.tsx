import React, { useState, memo } from 'react';
import { ExternalLink, ArrowRight, ZoomIn } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { FeaturedProjectItem } from '../data/portfolioData';
import type { LightboxData } from './ImageLightbox';
import TechIcon from './TechIcon';

const categoryPillColors = [
  'bg-sky-100 text-sky-900 border-sky-200',
  'bg-emerald-100 text-emerald-900 border-emerald-200',
  'bg-purple-100 text-purple-900 border-purple-200',
  'bg-amber-100 text-amber-900 border-amber-200',
];

interface FeaturedProjectCardProps {
  project: FeaturedProjectItem;
  index: number;
  onExpandImage: (data: LightboxData) => void;
  onSelectProject: (project: FeaturedProjectItem) => void;
}

const FeaturedProjectCard = memo(
  ({ project, index, onExpandImage, onSelectProject }: FeaturedProjectCardProps) => {
    const allImages = [
      { url: project.featuredImage, title: `${project.title} - Main Overview`, badge: 'Overview' },
      ...project.thumbnails,
    ].slice(0, 4);

    const [activeImgUrl, setActiveImgUrl] = useState<string>(project.featuredImage);
    const activeImageItem = allImages.find((img) => img.url === activeImgUrl) || allImages[0];
    const isReversed = index % 2 === 1;

    return (
      <article
        className="bg-white rounded-3xl md:rounded-[2rem] border border-black/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden w-full"
        aria-labelledby={`featured-project-${project.id}`}
      >
        {/* Card Top Meta Header */}
        <header className="px-6 sm:px-8 py-4 bg-[#fbf9f5] border-b border-black/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-ink bg-black/5 px-3 py-1 rounded-full">
              {project.number}
            </span>
            <span
              className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                categoryPillColors[index % categoryPillColors.length]
              }`}
            >
              {project.category}
            </span>
            <span className="font-mono text-xs text-ink/70 font-semibold bg-black/5 px-2.5 py-1 rounded-full hidden sm:inline">
              {project.period}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-sans text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              {project.role}
            </span>
          </div>
        </header>

        {/* Card Body: 55% Story | 45% Visual */}
        <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Story Column (55% -> 7 Cols) */}
          <div
            className={`flex flex-col gap-6 ${
              isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7 lg:order-1'
            }`}
          >
            {/* Title & One-Sentence Engineering Thesis */}
            <div>
              <h3
                id={`featured-project-${project.id}`}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-ink leading-tight"
              >
                {project.title}
              </h3>
              <p className="font-sans text-sm sm:text-base font-medium text-blue-800 mt-2 leading-relaxed">
                {project.thesis}
              </p>
            </div>

            {/* Problem Statement (Max 2 Short Sentences) */}
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 font-sans text-xs sm:text-sm text-ink/90 leading-relaxed">
              <strong className="font-semibold text-amber-950 block mb-1">Problem:</strong>
              <p>{project.problem}</p>
            </div>

            {/* Exactly 3 Engineered Decisions (Technique -> Mechanism -> Property) */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink/60 block">
                Engineered Decisions:
              </span>
              <div className="flex flex-col gap-2.5">
                {project.engineeredDecisions.map((dec, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-3 rounded-xl bg-gray-50/90 border border-black/5 font-sans text-xs sm:text-sm leading-relaxed"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs font-bold text-blue-700">
                        {dec.technique}
                      </span>
                      <span className="text-ink/40">→</span>
                      <span className="text-ink/80">{dec.mechanism}</span>
                      <span className="text-ink/40">→</span>
                      <span className="font-semibold text-emerald-800">{dec.property}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proof Chips (2-3 items) */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.proofChips.map((chip, cIdx) => (
                <div
                  key={cIdx}
                  className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-sans text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills (Max 6) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-black/5">
              <span className="font-mono text-[11px] font-bold uppercase text-ink/50 mr-1">
                Stack:
              </span>
              {project.techStack.slice(0, 6).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-[11px] font-medium uppercase bg-white px-2.5 py-1 rounded-lg border border-black/10 text-ink flex items-center gap-1.5 shadow-2xs"
                >
                  <TechIcon name={tech} className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onSelectProject(project)}
                className="h-11 px-6 rounded-full bg-ink hover:bg-blue-600 text-white font-sans text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer group/btn"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-sans text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {/* CRITICAL RULE: Only render GitHub button if project.githubUrl is defined */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-4 rounded-full text-ink/70 hover:text-ink font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Source Repo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Visual Column (45% -> 5 Cols) */}
          <div
            className={`flex flex-col gap-3 ${
              isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5 lg:order-2'
            }`}
          >
            {/* Primary Visual Frame */}
            <div
              onClick={() =>
                onExpandImage({
                  url: activeImageItem.url,
                  title: activeImageItem.title,
                  badge: activeImageItem.badge,
                })
              }
              className="relative rounded-2xl overflow-hidden border border-black/10 bg-slate-950 shadow-md group/img cursor-zoom-in flex flex-col items-center justify-center p-3 aspect-[4/3] max-h-[360px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onExpandImage({
                    url: activeImageItem.url,
                    title: activeImageItem.title,
                    badge: activeImageItem.badge,
                  });
                }
              }}
              title="Click to view full-resolution evidence"
              aria-label="Enlarge image"
            >
              {activeImageItem.badge && (
                <div className="absolute top-3 left-3 z-10 bg-blue-600/90 backdrop-blur-xs text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                  {activeImageItem.badge}
                </div>
              )}

              <img
                src={activeImageItem.url}
                alt={activeImageItem.title}
                className="max-h-[300px] w-auto object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-[1.02]"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded-full opacity-90 group-hover/img:opacity-100 transition-opacity flex items-center gap-1">
                <ZoomIn className="w-3 h-3 text-blue-400" />
                <span>Enlarge</span>
              </div>
            </div>

            {/* Thumbnail Strip (Max 4 Visible Images) */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-1">
                {allImages.map((img, tIdx) => {
                  const isActive = img.url === activeImgUrl;
                  return (
                    <button
                      key={tIdx}
                      onClick={() => setActiveImgUrl(img.url)}
                      className={`relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border transition-all cursor-pointer bg-slate-900 ${
                        isActive
                          ? 'ring-2 ring-blue-600 border-transparent shadow-xs scale-105'
                          : 'border-black/10 opacity-70 hover:opacity-100'
                      }`}
                      title={img.title}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      {img.badge && (
                        <div className="absolute bottom-0 inset-x-0 bg-black/80 text-[7px] font-mono text-white text-center py-0.5 truncate px-0.5">
                          {img.badge}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Caption */}
            <p className="font-mono text-[11px] text-ink/60 truncate px-1">
              📷 {activeImageItem.title}
            </p>
          </div>

        </div>
      </article>
    );
  }
);

FeaturedProjectCard.displayName = 'FeaturedProjectCard';

interface ProjectsProps {
  onExpandImage: (data: LightboxData) => void;
  onSelectProject: (project: FeaturedProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onExpandImage, onSelectProject }) => {
  return (
    <section id="projects" className="bg-canvas py-20 md:py-28 w-full border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-14 md:mb-18 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              SELECTED ENGINEERING WORK
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-ink">
            FEATURED PROJECTS
          </h2>
          <p className="mt-3 font-sans text-ink/75 text-base md:text-lg leading-relaxed">
            Core software engineering systems demonstrating high-concurrency reservation engines, fail-closed authorization, modular DDD architectures, and applied AI retrieval pipelines.
          </p>
        </div>

        {/* 4 Featured Projects List */}
        <div className="flex flex-col gap-12 md:gap-16">
          {portfolioData.featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              onExpandImage={onExpandImage}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
