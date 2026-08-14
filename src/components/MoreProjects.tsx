import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { SecondaryProjectItem } from '../data/portfolioData';
import type { LightboxData } from './ImageLightbox';

interface MoreProjectsProps {
  onExpandImage: (data: LightboxData) => void;
  onSelectProject: (project: SecondaryProjectItem) => void;
}

export const MoreProjects: React.FC<MoreProjectsProps> = ({
  onExpandImage,
  onSelectProject,
}) => {
  return (
    <section className="bg-canvas py-16 md:py-24 w-full border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              MORE ENGINEERING WORK
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
            SECONDARY ENGINEERING PROJECTS
          </h2>
          <p className="mt-2 font-sans text-ink/75 text-sm sm:text-base leading-relaxed">
            Financial ledger engines, fintech banking workflows, freelance marketplace backends, and distributed inventory systems.
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.secondaryProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-3xl border border-black/10 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div
                onClick={() =>
                  onExpandImage({
                    url: project.representativeImage,
                    title: project.title,
                    badge: project.statusBadge,
                  })
                }
                className="relative aspect-[16/9] bg-slate-950 overflow-hidden cursor-zoom-in group/thumb border-b border-black/5"
                title="Click to view image"
              >
                <img
                  src={project.representativeImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                  {project.statusBadge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <span className="font-mono text-[11px] uppercase font-bold text-blue-700 tracking-wider block mb-1">
                    {project.category} • {project.period}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl uppercase text-ink leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-ink/75 mt-2 leading-relaxed">
                    {project.thesis}
                  </p>
                </div>

                {/* Proof Metric Chip */}
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 font-sans text-xs font-semibold flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{project.proofChip}</span>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] uppercase font-medium bg-gray-100 px-2.5 py-0.5 rounded-md text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 mt-auto border-t border-black/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-sans text-xs font-bold text-ink hover:text-blue-600 transition-colors flex items-center gap-1.5 cursor-pointer group/link"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>

                  {/* CRITICAL: Only render GitHub button if project.githubUrl exists (omitted for Aivora) */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors flex items-center gap-1"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MoreProjects;
