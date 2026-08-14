import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Heart, Users } from 'lucide-react';
import type { LightboxData } from './ImageLightbox';

interface ActivitiesProps {
  onExpandImage: (data: LightboxData) => void;
}

export const Activities: React.FC<ActivitiesProps> = ({ onExpandImage }) => {
  const { beyondCode } = portfolioData.personal;

  if (!beyondCode) return null;

  return (
    <section id="activities" className="bg-canvas py-20 md:py-24 px-6 md:px-12 border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-700">
              COMMUNITY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-ink">
            {beyondCode.title}
          </h2>
        </div>

        {/* Compact Card */}
        <div className="p-8 md:p-10 rounded-3xl bg-white border border-black/10 shadow-xs flex flex-col gap-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Story & Role */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-rose-600">
                <Heart className="w-4 h-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  {beyondCode.role}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase text-ink">
                {beyondCode.projectName}
              </h3>
              <p className="font-sans text-sm sm:text-base text-ink/80 leading-relaxed">
                {beyondCode.description}
              </p>
            </div>

            {/* Metric Chips */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {beyondCode.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#fbf9f5] border border-black/5 font-sans text-xs sm:text-sm font-semibold text-ink flex items-center gap-2.5"
                >
                  <Users className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Compact Images (Target height ~180-220px) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-black/5">
            {beyondCode.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() =>
                  onExpandImage({
                    url: img,
                    title: `${beyondCode.projectName} (Photo ${idx + 1})`,
                    badge: 'Community',
                  })
                }
                className="h-48 sm:h-52 rounded-2xl overflow-hidden border border-black/8 cursor-zoom-in group shadow-2xs relative bg-slate-100"
              >
                <img
                  src={img}
                  alt={`${beyondCode.projectName} photo ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="font-mono text-xs text-white bg-black/60 px-3 py-1 rounded-full">
                    View Photo
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Activities;
